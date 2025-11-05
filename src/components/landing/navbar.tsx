import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg gradient-primary" />
            <span className="text-xl font-bold">Paydots</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-foreground hover:text-primary transition-smooth"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Features
            </a>
            <a 
              href="#for-creators" 
              className="text-foreground hover:text-primary transition-smooth"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('for-creators')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              For Creators
            </a>
            <a 
              href="#for-business" 
              className="text-foreground hover:text-primary transition-smooth"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('for-business')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              For Business
            </a>
            <Link to="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button className="gradient-accent shadow-glow">Get Started</Button>
            </Link>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
