import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Mail, FileText, Search, MessageSquare, DollarSign } from "lucide-react";
import { toast } from "sonner";

const clients = [
  { 
    id: 1, 
    name: "Sarah Johnson", 
    email: "sarah@example.com",
    totalSpent: 3200, 
    purchases: 8,
    lastPurchase: "2 days ago",
    status: "active"
  },
  { 
    id: 2, 
    name: "Mike Chen", 
    email: "mike@example.com",
    totalSpent: 1500, 
    purchases: 4,
    lastPurchase: "1 week ago",
    status: "active"
  },
  { 
    id: 3, 
    name: "Emma Davis", 
    email: "emma@example.com",
    totalSpent: 5600, 
    purchases: 12,
    lastPurchase: "Yesterday",
    status: "vip"
  },
  { 
    id: 4, 
    name: "Alex Kumar", 
    email: "alex@example.com",
    totalSpent: 850, 
    purchases: 3,
    lastPurchase: "3 weeks ago",
    status: "active"
  },
];

const invoices = [
  { id: "INV-001", client: "Sarah Johnson", amount: 150, status: "paid", date: "Dec 10, 2024" },
  { id: "INV-002", client: "Mike Chen", amount: 500, status: "pending", date: "Dec 12, 2024" },
  { id: "INV-003", client: "Emma Davis", amount: 2500, status: "paid", date: "Dec 14, 2024" },
];

export function ClientManager() {
  const handleSendMessage = (clientName: string) => {
    toast.success(`Message sent to ${clientName}`);
  };

  const handleCreateInvoice = () => {
    toast.success("Invoice created successfully!");
  };

  return (
    <Tabs defaultValue="database" className="space-y-6">
      <TabsList>
        <TabsTrigger value="database">Client Database</TabsTrigger>
        <TabsTrigger value="invoices">Invoices</TabsTrigger>
        <TabsTrigger value="messaging">Messaging</TabsTrigger>
      </TabsList>

      <TabsContent value="database">
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <CardTitle>Client Database</CardTitle>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search clients..." className="pl-9" />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {clients.map((client) => (
              <div key={client.id} className="p-4 rounded-lg border border-border hover:border-primary/50 transition-smooth">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                      {client.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{client.name}</h3>
                        {client.status === "vip" && (
                          <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">VIP</Badge>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">{client.email}</div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3" />
                          ${client.totalSpent.toLocaleString()}
                        </span>
                        <span>•</span>
                        <span>{client.purchases} purchases</span>
                        <span>•</span>
                        <span>Last: {client.lastPurchase}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleSendMessage(client.name)}>
                      <MessageSquare className="h-4 w-4 sm:mr-2" />
                      <span className="hidden sm:inline">Message</span>
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 sm:mr-2" />
                      <span className="hidden sm:inline">Invoice</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="invoices">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Invoices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-smooth">
                  <div className="flex items-center gap-4">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                      <div className="font-semibold">{invoice.id}</div>
                      <div className="text-sm text-muted-foreground">{invoice.client}</div>
                      <div className="text-xs text-muted-foreground">{invoice.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-semibold">${invoice.amount}</div>
                      <Badge variant={invoice.status === "paid" ? "default" : "secondary"} 
                             className={invoice.status === "paid" ? "bg-success" : ""}>
                        {invoice.status}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm">View</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Create Invoice</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Client</label>
                <select className="w-full px-3 py-2 rounded-md border border-input bg-background">
                  <option>Select client...</option>
                  {clients.map((client) => (
                    <option key={client.id} value={client.id}>{client.name}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Amount ($)</label>
                <Input type="number" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <Input placeholder="Service or product description" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Due Date</label>
                <Input type="date" />
              </div>
              <Button onClick={handleCreateInvoice} className="w-full gradient-primary">
                Create & Send Invoice
              </Button>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="messaging">
        <Card>
          <CardHeader>
            <CardTitle>Client Messaging</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <Mail className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">Integrated Messaging System</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Send direct messages, automated payment reminders, and updates to your clients
              </p>
              <div className="flex justify-center gap-3">
                <Button variant="outline">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  View All Conversations
                </Button>
                <Button className="gradient-primary">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Broadcast
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
