import { Card, CardContent } from "@/components/ui/card";
import {
  Wallet,
  CreditCard,
  Globe,
  TrendingUp,
  Shield,
  Zap,
  Users,
  DollarSign,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Multi-Currency Wallets",
    description: "Manage NGN, USD, EUR, GHS, and KES in one place with instant conversions.",
  },
  {
    icon: CreditCard,
    title: "Virtual Cards",
    description: "Create virtual dollar and Verve cards instantly for online purchases.",
  },
  {
    icon: Globe,
    title: "Global Payments",
    description: "Send and receive money worldwide with low fees and fast processing.",
  },
  {
    icon: TrendingUp,
    title: "Creator Tools",
    description: "Build landing pages, manage bookings, and accept payments seamlessly.",
  },
  {
    icon: DollarSign,
    title: "Revenue-Based Loans",
    description: "Access credit based on your earnings without traditional collateral.",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your data and money are protected with enterprise-grade encryption.",
  },
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Move money between accounts and to friends instantly, 24/7.",
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Add team members and manage permissions for business accounts.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful financial tools designed for creators and businesses who want to grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="transition-smooth hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
