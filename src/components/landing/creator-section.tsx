import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  "Build your custom landing page in minutes",
  "Accept payments from clients worldwide",
  "Manage bookings and appointments",
  "Track earnings with real-time analytics",
  "Access loans based on your revenue",
  "No monthly fees or hidden charges",
];

export function CreatorSection() {
  return (
    <section id="for-creators" className="py-24 gradient-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Built for Creators Like You
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Whether you're a freelancer, consultant, or content creator, Paydots gives you the financial tools to turn your passion into profit.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="ml-3 text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            <Link to="/dashboard">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
              >
                Start Your Creator Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="lg:pl-8">
            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">
                      This Month
                    </span>
                    <span className="text-sm font-medium text-success">
                      +23.5%
                    </span>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">$12,485</div>
                    <div className="text-sm text-muted-foreground">
                      Total Earnings
                    </div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full gradient-accent w-3/4"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div>
                      <div className="text-xl font-bold">48</div>
                      <div className="text-xs text-muted-foreground">
                        Active Clients
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-bold">156</div>
                      <div className="text-xs text-muted-foreground">
                        Completed Jobs
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
