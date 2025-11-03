import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Plus, Edit, Trash2, Calendar, Package, Coffee } from "lucide-react";
import { toast } from "sonner";

const services = [
  { id: 1, name: "1-Hour Strategy Call", price: 150, duration: "60 min", bookings: 24, status: "active" },
  { id: 2, name: "Website Design Package", price: 2500, duration: "2 weeks", bookings: 8, status: "active" },
  { id: 3, name: "Brand Identity Design", price: 800, duration: "1 week", bookings: 12, status: "active" },
];

const products = [
  { id: 1, name: "Digital Marketing Course", price: 99, type: "digital", sales: 156, stock: "∞" },
  { id: 2, name: "Brand Templates Pack", price: 49, type: "digital", sales: 243, stock: "∞" },
  { id: 3, name: "Business eBook", price: 29, type: "digital", sales: 387, stock: "∞" },
];

const tipPresets = [
  { id: 1, amount: 3, message: "Buy me a coffee ☕", enabled: true },
  { id: 2, amount: 5, message: "Support my work 💪", enabled: true },
  { id: 3, amount: 10, message: "Generous tip 🎉", enabled: true },
  { id: 4, amount: 25, message: "Super supporter 🌟", enabled: false },
];

export function CommerceManager() {
  const [selectedTab, setSelectedTab] = useState("services");

  const handleCreateService = () => {
    toast.success("Service created successfully!");
  };

  const handleCreateProduct = () => {
    toast.success("Product created successfully!");
  };

  return (
    <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
      <TabsList>
        <TabsTrigger value="services">Services</TabsTrigger>
        <TabsTrigger value="products">Products</TabsTrigger>
        <TabsTrigger value="tipjar">Tip Jar</TabsTrigger>
      </TabsList>

      <TabsContent value="services">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Service Offerings</CardTitle>
                <Button className="gradient-primary">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Service
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {services.map((service) => (
                <div key={service.id} className="p-4 rounded-lg border border-border hover:border-primary/50 transition-smooth">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold">{service.name}</h3>
                        <Badge variant="secondary" className="bg-success text-white">
                          {service.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground ml-8">
                        <span>${service.price}</span>
                        <span>•</span>
                        <span>{service.duration}</span>
                        <span>•</span>
                        <span>{service.bookings} bookings</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Create Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="serviceName">Service Name</Label>
                <Input id="serviceName" placeholder="e.g., 1-Hour Consultation" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="servicePrice">Price ($)</Label>
                <Input id="servicePrice" type="number" placeholder="100" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="serviceDuration">Duration</Label>
                <Input id="serviceDuration" placeholder="e.g., 60 minutes" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="serviceDesc">Description</Label>
                <Textarea id="serviceDesc" placeholder="Describe your service..." rows={3} />
              </div>
              <Button onClick={handleCreateService} className="w-full gradient-primary">
                Create Service
              </Button>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="products">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Product Catalog</CardTitle>
                <Button className="gradient-primary">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Product
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {products.map((product) => (
                <div key={product.id} className="p-4 rounded-lg border border-border hover:border-primary/50 transition-smooth">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Package className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold">{product.name}</h3>
                        <Badge variant="outline">{product.type}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground ml-8">
                        <span>${product.price}</span>
                        <span>•</span>
                        <span>{product.sales} sales</span>
                        <span>•</span>
                        <span>Stock: {product.stock}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Create Product</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="productName">Product Name</Label>
                <Input id="productName" placeholder="e.g., Marketing Course" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="productPrice">Price ($)</Label>
                <Input id="productPrice" type="number" placeholder="99" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="productType">Type</Label>
                <select className="w-full px-3 py-2 rounded-md border border-input bg-background">
                  <option>Digital</option>
                  <option>Physical</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="productDesc">Description</Label>
                <Textarea id="productDesc" placeholder="Describe your product..." rows={3} />
              </div>
              <Button onClick={handleCreateProduct} className="w-full gradient-primary">
                Create Product
              </Button>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="tipjar">
        <Card>
          <CardHeader>
            <CardTitle>Tip Jar Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="tipMessage">Welcome Message</Label>
              <Textarea
                id="tipMessage"
                placeholder="Thank you for supporting my work!"
                rows={3}
                defaultValue="Love what I do? Buy me a coffee and keep me creating!"
              />
            </div>

            <div className="space-y-4">
              <Label>Preset Tip Amounts</Label>
              {tipPresets.map((preset) => (
                <div key={preset.id} className="flex items-center justify-between p-4 rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <Coffee className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">${preset.amount}</div>
                      <div className="text-sm text-muted-foreground">{preset.message}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Switch defaultChecked={preset.enabled} />
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div>
                <div className="font-medium">Allow Custom Amounts</div>
                <div className="text-sm text-muted-foreground">Let supporters choose their own tip amount</div>
              </div>
              <Switch defaultChecked={true} />
            </div>

            <Button className="w-full gradient-primary">
              Save Tip Jar Settings
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
