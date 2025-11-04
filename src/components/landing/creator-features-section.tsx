import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  ShoppingBag, 
  Users2, 
  Palette, 
  Building2,
  TrendingUp 
} from "lucide-react";
import { Link } from "react-router-dom";

const creatorTools = [
  {
    icon: Palette,
    title: "Landing Page Builder",
    description: "Create stunning 'link in bio' pages with drag-and-drop simplicity. No coding required."
  },
  {
    icon: ShoppingBag,
    title: "Commerce Management",
    description: "Sell services, products, and accept tips all in one place. Manage bookings and inventory effortlessly."
  },
  {
    icon: Building2,
    title: "Marketplace Integration",
    description: "Connect your Fiverr, Upwork accounts and receive payments directly via ACH/Wire transfer."
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track earnings, audience demographics, and conversion rates with beautiful interactive charts."
  },
  {
    icon: Users2,
    title: "Client Management",
    description: "Manage customer relationships, send invoices, and track payment history in one dashboard."
  },
  {
    icon: TrendingUp,
    title: "Financial Tools",
    description: "Automated expense tracking, tax estimation, and payout scheduling to your bank account."
  }
];

export function CreatorFeaturesSection() {
  return (
    <section className="py-24 bg-background" id="creator-tools">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
            <Palette className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">
              Creator Hub
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="block gradient-accent bg-clip-text text-transparent mt-2">
              Monetize Your Creativity
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From landing pages to marketplace payments, manage your entire creator business from one powerful dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {creatorTools.map((tool, index) => (
            <Card key={index} className="border-border hover:border-secondary/50 transition-smooth hover-scale">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg gradient-accent flex items-center justify-center mb-4">
                  <tool.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                <p className="text-muted-foreground">{tool.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-secondary/10 to-primary/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Launch Your Creator Business Today
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of creators who trust Paydots to handle their payments, manage their business, and grow their income.
              </p>
              <Link to="/dashboard">
                <Button size="lg" className="gradient-accent text-white shadow-glow hover:shadow-xl transition-smooth">
                  Access Creator Hub
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold">Build Your Page</h4>
                  <p className="text-sm text-muted-foreground">Create a stunning landing page in minutes</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold">Set Up Payments</h4>
                  <p className="text-sm text-muted-foreground">Connect your accounts and start accepting money</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold">Grow Your Business</h4>
                  <p className="text-sm text-muted-foreground">Track analytics and scale with confidence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
