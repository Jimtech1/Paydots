import { Button } from "@/components/ui/button";
import { Bell, Search, User } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 sm:space-x-4 flex-1">
          <div className="relative w-full max-w-[200px] sm:max-w-md">
            <Search className="absolute left-2 sm:left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search..."
              className="h-9 sm:h-10 w-full rounded-lg border border-input bg-background pl-8 sm:pl-10 pr-2 sm:pr-4 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive"></span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
