import { Button } from "@/components/ui/button";
import {
  Home,
  Wallet,
  CreditCard,
  TrendingUp,
  Users,
  Settings,
  LayoutDashboard,
  DollarSign,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Overview", href: "/dashboard", icon: Home },
  { name: "Wallets", href: "/dashboard/wallets", icon: Wallet },
  { name: "Cards", href: "/dashboard/cards", icon: CreditCard },
  { name: "Loans", href: "/dashboard/loans", icon: DollarSign },
  { name: "Creator Hub", href: "/dashboard/creator", icon: TrendingUp },
  { name: "Customers", href: "/dashboard/customers", icon: Users },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 border-r border-border bg-card h-screen sticky top-0 overflow-y-auto">
      <div className="p-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg gradient-primary" />
          <span className="text-xl font-bold">Paydots</span>
        </Link>
      </div>

      <nav className="space-y-1 px-3">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link key={item.name} to={item.href}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start transition-smooth",
                  isActive && "bg-primary/10 text-primary hover:bg-primary/20"
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Button>
            </Link>
          );
        })}
      </nav>

      <div className="p-6 mt-8">
        <div className="rounded-lg gradient-accent p-4 text-white">
          <div className="text-sm font-medium mb-2">Need Help?</div>
          <p className="text-xs mb-3 opacity-90">
            Check our documentation or contact support
          </p>
          <Button size="sm" variant="secondary" className="w-full">
            Get Support
          </Button>
        </div>
      </div>
    </aside>
  );
}
