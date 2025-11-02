import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  LayoutTemplate,
  Palette,
  Globe,
  DollarSign,
  Users,
  Calendar,
  Plus,
  Eye,
  Edit,
} from "lucide-react";
import { toast } from "sonner";

const services = [
  { id: 1, name: "1-Hour Consultation", price: "$150", bookings: 24, status: "active" },
  { id: 2, name: "Full Website Design", price: "$2,500", bookings: 8, status: "active" },
  { id: 3, name: "Logo Design Package", price: "$500", bookings: 15, status: "active" },
];

const recentBookings = [
  { id: 1, client: "Sarah Johnson", service: "1-Hour Consultation", date: "Dec 15, 2:00 PM", status: "confirmed" },
  { id: 2, client: "Mike Chen", service: "Logo Design", date: "Dec 18, 10:00 AM", status: "pending" },
  { id: 3, client: "Emma Davis", service: "Website Design", date: "Dec 20, 3:00 PM", status: "confirmed" },
];

const templates = [
  { id: 1, name: "Clean Portfolio", category: "Portfolio", image: "🎨" },
  { id: 2, name: "Service Booking", category: "Services", image: "📅" },
  { id: 3, name: "Product Showcase", category: "E-commerce", image: "🛍️" },
  { id: 4, name: "Consulting Pro", category: "Professional", image: "💼" },
];

export default function CreatorHub() {
  const handleCreateService = () => {
    toast.success("Service created successfully!");
  };

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Creator Hub</h1>
              <p className="text-muted-foreground">
                Build your online presence and manage your creator business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-success" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold mb-1">$8,450</div>
                  <div className="text-sm text-muted-foreground">This Month</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold mb-1">142</div>
                  <div className="text-sm text-muted-foreground">Total Clients</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold mb-1">18</div>
                  <div className="text-sm text-muted-foreground">Bookings</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Globe className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold mb-1">2.4K</div>
                  <div className="text-sm text-muted-foreground">Page Views</div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="landing" className="mb-8">
              <TabsList className="mb-6">
                <TabsTrigger value="landing">Landing Page</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="bookings">Bookings</TabsTrigger>
                <TabsTrigger value="clients">Clients</TabsTrigger>
              </TabsList>

              <TabsContent value="landing">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="lg:col-span-2">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Your Landing Page</CardTitle>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="mr-2 h-4 w-4" />
                            Preview
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                        <LayoutTemplate className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                        <h3 className="text-lg font-semibold mb-2">
                          Your Landing Page is Live!
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          paydots.com/yourname
                        </p>
                        <div className="flex items-center justify-center space-x-2">
                          <Button variant="outline">Copy Link</Button>
                          <Button className="gradient-accent text-white">
                            Customize Design
                          </Button>
                        </div>
                      </div>

                      <div className="mt-6 space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="pageTitle">Page Title</Label>
                          <Input
                            id="pageTitle"
                            placeholder="Your Professional Title"
                            defaultValue="Creative Designer & Consultant"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea
                            id="bio"
                            placeholder="Tell visitors about yourself..."
                            rows={4}
                            defaultValue="I help businesses create stunning brands and digital experiences."
                          />
                        </div>

                        <Button className="w-full gradient-primary">
                          Save Changes
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Choose Template</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {templates.map((template) => (
                          <div
                            key={template.id}
                            className="p-3 rounded-lg border border-border hover:border-primary cursor-pointer transition-smooth"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="text-3xl">{template.image}</div>
                              <div>
                                <div className="font-medium">{template.name}</div>
                                <div className="text-xs text-muted-foreground">
                                  {template.category}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Customization</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Button variant="outline" className="w-full justify-start">
                          <Palette className="mr-2 h-4 w-4" />
                          Brand Colors
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <LayoutTemplate className="mr-2 h-4 w-4" />
                          Layout Options
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Globe className="mr-2 h-4 w-4" />
                          Custom Domain
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="services">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="lg:col-span-2">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Your Services</CardTitle>
                        <Button className="gradient-accent text-white">
                          <Plus className="mr-2 h-4 w-4" />
                          Add Service
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          className="p-4 rounded-lg border border-border hover:border-primary/50 transition-smooth"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h3 className="font-semibold">{service.name}</h3>
                                <Badge variant="secondary" className="bg-success text-white">
                                  {service.status}
                                </Badge>
                              </div>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <span>{service.price}</span>
                                <span>•</span>
                                <span>{service.bookings} bookings</span>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Create New Service</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="serviceName">Service Name</Label>
                        <Input id="serviceName" placeholder="e.g., 1-Hour Consultation" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="price">Price</Label>
                        <Input id="price" type="number" placeholder="100" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Describe your service..."
                          rows={3}
                        />
                      </div>

                      <Button onClick={handleCreateService} className="w-full gradient-primary">
                        Create Service
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="bookings">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Bookings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentBookings.map((booking) => (
                        <div
                          key={booking.id}
                          className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-smooth"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold">
                              {booking.client.charAt(0)}
                            </div>
                            <div>
                              <div className="font-medium">{booking.client}</div>
                              <div className="text-sm text-muted-foreground">
                                {booking.service} • {booking.date}
                              </div>
                            </div>
                          </div>
                          <Badge
                            variant={
                              booking.status === "confirmed" ? "default" : "secondary"
                            }
                            className={
                              booking.status === "confirmed" ? "bg-success" : ""
                            }
                          >
                            {booking.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="clients">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center py-12">
                      <Users className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="text-lg font-semibold mb-2">Client Management</h3>
                      <p className="text-sm text-muted-foreground">
                        View and manage your client relationships
                      </p>
                      <Button className="mt-4">View All Clients</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
