import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnalyticsOverview } from "@/components/creator/analytics-overview";
import { CommerceManager } from "@/components/creator/commerce-manager";
import { ClientManager } from "@/components/creator/client-manager";
import { FinancialTools } from "@/components/creator/financial-tools";
import { PageBuilder } from "@/components/creator/page-builder";
import { BarChart3, ShoppingBag, Users, Wallet, Layout, Building2 } from "lucide-react";
import { MarketplacePayments } from "@/components/creator/marketplace-payments";

export default function CreatorHub() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Creator Hub</h1>
              <p className="text-muted-foreground">
                Your centralized command center for managing your entire creator business
              </p>
            </div>

            <Tabs defaultValue="analytics" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 gap-2">
                <TabsTrigger value="analytics" className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  <span className="hidden sm:inline">Analytics</span>
                </TabsTrigger>
                <TabsTrigger value="commerce" className="flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  <span className="hidden sm:inline">Commerce</span>
                </TabsTrigger>
                <TabsTrigger value="clients" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span className="hidden sm:inline">Clients</span>
                </TabsTrigger>
                <TabsTrigger value="financial" className="flex items-center gap-2">
                  <Wallet className="h-4 w-4" />
                  <span className="hidden sm:inline">Financial</span>
                </TabsTrigger>
                <TabsTrigger value="marketplace" className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Marketplace</span>
                </TabsTrigger>
                <TabsTrigger value="builder" className="flex items-center gap-2">
                  <Layout className="h-4 w-4" />
                  <span className="hidden sm:inline">Page Builder</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="analytics" className="animate-fade-in">
                <AnalyticsOverview />
              </TabsContent>

              <TabsContent value="commerce" className="animate-fade-in">
                <CommerceManager />
              </TabsContent>

              <TabsContent value="clients" className="animate-fade-in">
                <ClientManager />
              </TabsContent>

              <TabsContent value="financial" className="animate-fade-in">
                <FinancialTools />
              </TabsContent>

              <TabsContent value="marketplace" className="animate-fade-in">
                <MarketplacePayments />
              </TabsContent>

              <TabsContent value="builder" className="animate-fade-in">
                <PageBuilder />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
