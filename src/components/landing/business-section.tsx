import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Shield, TrendingUp, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const businessFeatures = [
  {
    icon: Users,
    title: "Team Management",
    description: "Add team members, set permissions, and manage multi-user access with ease."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, 2FA, and compliance with international financial regulations."
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics",
    description: "Real-time insights, custom reports, and financial forecasting tools."
  },
  {
    icon: Globe,
    title: "Global Payments",
    description: "Accept payments in 150+ countries with automatic currency conversion."
  },
  {
    icon: Zap,
    title: "API Integration",
    description: "Connect with your existing tools via our robust REST API."
  },
  {
    icon: Building2,
    title: "Business Accounts",
    description: "Dedicated business accounts with higher limits and priority support."
  }
];

export function BusinessSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Building2 className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              For Growing Businesses
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Built for Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scale your operations with enterprise-grade financial tools designed for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {businessFeatures.map((feature, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-smooth hover-scale">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/dashboard">
            <Button size="lg" className="gradient-accent text-white shadow-glow hover:shadow-xl transition-smooth">
              Start Your Business Account
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
