import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { StatsCard } from "@/components/ui/stats-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Wallet,
  TrendingUp,
  CreditCard,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Send,
  Download,
} from "lucide-react";

const transactions = [
  {
    id: 1,
    type: "received",
    description: "Payment from Client A",
    amount: "+$850.00",
    date: "Today, 2:30 PM",
    status: "completed",
  },
  {
    id: 2,
    type: "sent",
    description: "Transfer to Savings",
    amount: "-$200.00",
    date: "Today, 10:15 AM",
    status: "completed",
  },
  {
    id: 3,
    type: "received",
    description: "Subscription Payment",
    amount: "+$49.99",
    date: "Yesterday, 3:45 PM",
    status: "completed",
  },
  {
    id: 4,
    type: "sent",
    description: "Card Payment",
    amount: "-$125.50",
    date: "Yesterday, 11:20 AM",
    status: "completed",
  },
];

const wallets = [
  { currency: "USD", balance: "$12,485.50", change: "+12.5%" },
  { currency: "NGN", balance: "₦5,840,200", change: "+8.2%" },
  { currency: "EUR", balance: "€8,450.30", change: "+5.7%" },
  { currency: "GHS", balance: "₵45,800", change: "+15.3%" },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Welcome back, Creator! 👋</h1>
              <p className="text-muted-foreground">
                Here's what's happening with your finances today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatsCard
                title="Total Balance"
                value="$24,580.50"
                change="+12.5% from last month"
                changeType="positive"
                icon={Wallet}
              />
              <StatsCard
                title="This Month Earnings"
                value="$8,450.00"
                change="+23.1% from last month"
                changeType="positive"
                icon={TrendingUp}
              />
              <StatsCard
                title="Active Cards"
                value="3"
                change="2 virtual, 1 physical"
                changeType="neutral"
                icon={CreditCard}
              />
              <StatsCard
                title="Available Credit"
                value="$5,000.00"
                change="Pre-approved"
                changeType="positive"
                icon={DollarSign}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {transactions.map((transaction) => (
                      <div
                        key={transaction.id}
                        className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-smooth"
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={cn(
                              "h-10 w-10 rounded-full flex items-center justify-center",
                              transaction.type === "received"
                                ? "bg-success/10"
                                : "bg-muted"
                            )}
                          >
                            {transaction.type === "received" ? (
                              <ArrowDownRight className="h-5 w-5 text-success" />
                            ) : (
                              <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium">
                              {transaction.description}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {transaction.date}
                            </div>
                          </div>
                        </div>
                        <div
                          className={cn(
                            "font-semibold",
                            transaction.type === "received"
                              ? "text-success"
                              : "text-foreground"
                          )}
                        >
                          {transaction.amount}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Transactions
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start gradient-accent text-white shadow-glow">
                    <Send className="mr-2 h-4 w-4" />
                    Send Money
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Request Payment
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Create Virtual Card
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Apply for Loan
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Multi-Currency Wallets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {wallets.map((wallet, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border border-border hover:border-primary/50 transition-smooth cursor-pointer"
                    >
                      <div className="text-sm text-muted-foreground mb-1">
                        {wallet.currency}
                      </div>
                      <div className="text-xl font-bold mb-1">
                        {wallet.balance}
                      </div>
                      <div className="text-sm text-success">{wallet.change}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <footer className="border-t border-border bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded gradient-primary" />
                <span className="font-semibold">Paydots</span>
              </div>
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © 2025 Paydots. Secure payments for creators and businesses.
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <button className="hover:text-foreground transition-smooth">Help</button>
                <button className="hover:text-foreground transition-smooth">Privacy</button>
                <button className="hover:text-foreground transition-smooth">Terms</button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
