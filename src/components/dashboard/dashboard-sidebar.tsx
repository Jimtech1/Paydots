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
  Menu,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

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
  const [open, setOpen] = useState(false);

  const NavList = ({ onItemClick }: { onItemClick?: () => void }) => (
    <nav className="space-y-1 px-3">
      {navigation.map((item) => {
        const isActive = location.pathname === item.href;
        return (
          <Link key={item.name} to={item.href} onClick={onItemClick}>
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
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-64 border-r border-border bg-card h-screen sticky top-0 overflow-y-auto">
        <div className="p-6">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg gradient-primary" />
            <span className="text-xl font-bold">Paydots</span>
          </Link>
        </div>
        <NavList />
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

      {/* Mobile trigger + drawer */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          {/* Floating trigger button */}
          <Button
            aria-label="Open sidebar navigation"
            variant="secondary"
            size="icon"
            className="fixed top-4 left-4 z-50 shadow-md"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <SheetContent side="left" className="p-0 w-72">
            <SheetHeader className="p-6 pb-3 text-left">
              <SheetTitle>
                <Link to="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
                  <div className="h-8 w-8 rounded-lg gradient-primary" />
                  <span className="text-lg font-bold">Paydots</span>
                </Link>
              </SheetTitle>
            </SheetHeader>

            <div className="py-2">
              <NavList onItemClick={() => setOpen(false)} />
            </div>

            <div className="p-6 mt-4">
              <div className="rounded-lg gradient-accent p-4 text-white">
                <div className="text-sm font-medium mb-2">Need Help?</div>
                <p className="text-xs mb-3 opacity-90">
                  Check our documentation or contact support
                </p>
                <Button size="sm" variant="secondary" className="w-full" onClick={() => setOpen(false)}>
                  Get Support
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
