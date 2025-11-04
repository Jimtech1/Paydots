import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { CreatorSection } from "@/components/landing/creator-section";
import { CreatorFeaturesSection } from "@/components/landing/creator-features-section";
import { BusinessSection } from "@/components/landing/business-section";
import { CTASection } from "@/components/landing/cta-section";
import { useEffect } from "react";

export default function Landing() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="for-creators">
        <CreatorFeaturesSection />
        <CreatorSection />
      </section>
      <section id="for-business">
        <BusinessSection />
      </section>
      <CTASection />
      
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Features</li>
                <li>Pricing</li>
                <li>Security</li>
                <li>Roadmap</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>API</li>
                <li>Status</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacy</li>
                <li>Terms</li>
                <li>License</li>
                <li>Compliance</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-6 w-6 rounded gradient-primary" />
              <span className="font-semibold">Paydots</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Paydots. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
