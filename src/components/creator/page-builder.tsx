import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  GripVertical, 
  Eye, 
  Palette, 
  Layout, 
  Save,
  User,
  Coffee,
  Calendar,
  Package,
  Mail,
  Star,
  CreditCard,
  Plus
} from "lucide-react";
import { toast } from "sonner";

interface PageSection {
  id: string;
  type: string;
  title: string;
  icon: any;
  enabled: boolean;
  order: number;
}

const initialSections: PageSection[] = [
  { id: "hero", type: "hero", title: "Hero Header", icon: User, enabled: true, order: 1 },
  { id: "tipjar", type: "tipjar", title: "Tipdots", icon: Coffee, enabled: true, order: 2 },
  { id: "services", type: "services", title: "Services & Booking", icon: Calendar, enabled: true, order: 3 },
  { id: "products", type: "products", title: "Product Store", icon: Package, enabled: true, order: 4 },
  { id: "contact", type: "contact", title: "Contact & CTA", icon: Mail, enabled: true, order: 5 },
  { id: "testimonials", type: "testimonials", title: "Testimonials", icon: Star, enabled: false, order: 6 },
  { id: "subscription", type: "subscription", title: "Subscription Tiers", icon: CreditCard, enabled: false, order: 7 },
];

const themeColors = [
  { name: "Blue", primary: "#3B82F6", accent: "#10B981" },
  { name: "Purple", primary: "#8B5CF6", accent: "#EC4899" },
  { name: "Orange", primary: "#F97316", accent: "#EAB308" },
  { name: "Green", primary: "#10B981", accent: "#3B82F6" },
];

export function PageBuilder() {
  const [sections, setSections] = useState(initialSections);
  const [selectedTheme, setSelectedTheme] = useState(0);

  const toggleSection = (id: string) => {
    setSections(sections.map(s => 
      s.id === id ? { ...s, enabled: !s.enabled } : s
    ));
  };

  const handlePublish = () => {
    toast.success("Landing page published successfully!");
  };

  const handlePreview = () => {
    toast.info("Opening preview in new tab...");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Builder Controls */}
      <div className="lg:col-span-1 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Page Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="pageUrl">Your Page URL</Label>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">paydots.com/</span>
                <Input id="pageUrl" placeholder="yourname" defaultValue="yourname" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pageTitle">Page Title</Label>
              <Input id="pageTitle" placeholder="Your Professional Title" defaultValue="Creative Designer & Consultant" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="metaDesc">Meta Description</Label>
              <Textarea id="metaDesc" rows={2} placeholder="SEO description..." defaultValue="Professional creative services and digital products" />
            </div>

            <div className="flex gap-2">
              <Button onClick={handlePreview} variant="outline" className="flex-1">
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
              <Button onClick={handlePublish} className="flex-1 gradient-primary">
                <Save className="mr-2 h-4 w-4" />
                Publish
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Theme Colors
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {themeColors.map((theme, index) => (
              <div
                key={theme.name}
                onClick={() => setSelectedTheme(index)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-smooth ${
                  selectedTheme === index ? "border-primary" : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{theme.name}</span>
                  {selectedTheme === index && (
                    <Badge className="bg-primary">Active</Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <div className="h-8 flex-1 rounded" style={{ backgroundColor: theme.primary }} />
                  <div className="h-8 flex-1 rounded" style={{ backgroundColor: theme.accent }} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layout className="h-5 w-5" />
              Layout Options
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Mobile First</div>
                <div className="text-sm text-muted-foreground">Optimize for mobile devices</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Full Width</div>
                <div className="text-sm text-muted-foreground">Use full screen width</div>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section Manager */}
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Page Sections</CardTitle>
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Section
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`p-4 rounded-lg border-2 transition-smooth ${
                  section.enabled ? "border-border hover:border-primary/50 bg-card" : "border-dashed border-border bg-muted/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="cursor-move text-muted-foreground hover:text-foreground">
                    <GripVertical className="h-5 w-5" />
                  </div>
                  
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                    section.enabled ? "bg-primary/10" : "bg-muted"
                  }`}>
                    <section.icon className={`h-5 w-5 ${section.enabled ? "text-primary" : "text-muted-foreground"}`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-semibold ${!section.enabled && "text-muted-foreground"}`}>
                        {section.title}
                      </h3>
                      {!section.enabled && (
                        <Badge variant="outline">Disabled</Badge>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {section.type === "hero" && "Profile picture, name, bio, and social links"}
                      {section.type === "tipjar" && "Accept one-time donations and support"}
                      {section.type === "services" && "Showcase bookable services with calendar"}
                      {section.type === "products" && "Sell digital and physical products"}
                      {section.type === "contact" && "Contact form and newsletter signup"}
                      {section.type === "testimonials" && "Client reviews and portfolio showcase"}
                      {section.type === "subscription" && "Recurring membership tiers"}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                    <Switch
                      checked={section.enabled}
                      onCheckedChange={() => toggleSection(section.id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Live Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-8 bg-muted/20">
              <div className="max-w-md mx-auto space-y-6">
                <div className="text-center">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Creative Designer & Consultant</h2>
                  <p className="text-muted-foreground">I help businesses create stunning brands and digital experiences.</p>
                </div>

                {sections.filter(s => s.enabled).map((section) => (
                  <div key={section.id} className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-center gap-2 mb-2">
                      <section.icon className="h-4 w-4 text-primary" />
                      <span className="font-medium text-sm">{section.title}</span>
                    </div>
                    <div className="h-16 bg-muted/50 rounded animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
