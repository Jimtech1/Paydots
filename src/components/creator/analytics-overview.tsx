import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TrendingUp, DollarSign, Users, Eye } from "lucide-react";

const earningsData = [
  { date: "Mon", tips: 120, services: 450, products: 200 },
  { date: "Tue", tips: 180, services: 600, products: 350 },
  { date: "Wed", tips: 150, services: 520, products: 280 },
  { date: "Thu", tips: 220, services: 700, products: 420 },
  { date: "Fri", tips: 280, services: 850, products: 550 },
  { date: "Sat", tips: 350, services: 920, products: 680 },
  { date: "Sun", tips: 300, services: 780, products: 600 },
];

const revenueBreakdown = [
  { name: "Tips", value: 1600, color: "hsl(var(--success))" },
  { name: "Services", value: 4820, color: "hsl(var(--primary))" },
  { name: "Products", value: 3080, color: "hsl(var(--accent))" },
];

const trafficData = [
  { date: "Mon", views: 1200, conversions: 45 },
  { date: "Tue", views: 1500, conversions: 62 },
  { date: "Wed", views: 1350, conversions: 51 },
  { date: "Thu", views: 1700, conversions: 78 },
  { date: "Fri", views: 1900, conversions: 85 },
  { date: "Sat", views: 2100, conversions: 95 },
  { date: "Sun", views: 1800, conversions: 82 },
];

export function AnalyticsOverview() {
  const totalRevenue = revenueBreakdown.reduce((sum, item) => sum + item.value, 0);
  const conversionRate = ((498 / 11550) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-success" />
              </div>
              <TrendingUp className="h-4 w-4 text-success" />
            </div>
            <div className="text-2xl font-bold">${(totalRevenue / 1000).toFixed(1)}K</div>
            <div className="text-sm text-muted-foreground">Total Revenue</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Eye className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="text-2xl font-bold">11.5K</div>
            <div className="text-sm text-muted-foreground">Page Views</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-accent" />
              </div>
            </div>
            <div className="text-2xl font-bold">498</div>
            <div className="text-sm text-muted-foreground">Conversions</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-secondary" />
              </div>
            </div>
            <div className="text-2xl font-bold">{conversionRate}%</div>
            <div className="text-sm text-muted-foreground">Conversion Rate</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="earnings" className="space-y-4">
        <TabsList>
          <TabsTrigger value="earnings">Earnings Overview</TabsTrigger>
          <TabsTrigger value="breakdown">Revenue Breakdown</TabsTrigger>
          <TabsTrigger value="traffic">Traffic Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="earnings">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Earnings Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={earningsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="tips" stroke="hsl(var(--success))" strokeWidth={2} name="Tips" />
                  <Line type="monotone" dataKey="services" stroke="hsl(var(--primary))" strokeWidth={2} name="Services" />
                  <Line type="monotone" dataKey="products" stroke="hsl(var(--accent))" strokeWidth={2} name="Products" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="breakdown">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Distribution</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-center gap-8">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={revenueBreakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="hsl(var(--primary))"
                    dataKey="value"
                  >
                    {revenueBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-4 w-full md:w-auto">
                {revenueBreakdown.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm">{item.name}</span>
                    </div>
                    <span className="text-sm font-semibold">${item.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="traffic">
          <Card>
            <CardHeader>
              <CardTitle>Traffic & Conversions</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={trafficData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Legend />
                  <Bar dataKey="views" fill="hsl(var(--primary))" name="Page Views" />
                  <Bar dataKey="conversions" fill="hsl(var(--success))" name="Conversions" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
