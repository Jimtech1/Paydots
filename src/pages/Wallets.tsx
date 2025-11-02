import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import {
  Wallet,
  Send,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  TrendingUp,
} from "lucide-react";
import { toast } from "sonner";

const currencies = [
  { code: "USD", symbol: "$", balance: "12,485.50", flag: "🇺🇸", change: "+12.5%" },
  { code: "NGN", symbol: "₦", balance: "5,840,200", flag: "🇳🇬", change: "+8.2%" },
  { code: "EUR", symbol: "€", balance: "8,450.30", flag: "🇪🇺", change: "+5.7%" },
  { code: "GHS", symbol: "₵", balance: "45,800", flag: "🇬🇭", change: "+15.3%" },
  { code: "KES", symbol: "KSh", balance: "185,400", flag: "🇰🇪", change: "+10.1%" },
];

const recentTransactions = [
  { id: 1, type: "received", from: "John Doe", amount: "+$850.00", currency: "USD", date: "2 hours ago" },
  { id: 2, type: "sent", to: "Jane Smith", amount: "-₦45,000", currency: "NGN", date: "5 hours ago" },
  { id: 3, type: "received", from: "Client Project", amount: "+€320.50", currency: "EUR", date: "1 day ago" },
  { id: 4, type: "sent", to: "Vendor Payment", amount: "-$125.00", currency: "USD", date: "2 days ago" },
];

export default function Wallets() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleSendMoney = () => {
    if (!sendAmount || !recipient) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success(`Successfully sent ${sendAmount} ${selectedCurrency} to ${recipient}`);
    setSendAmount("");
    setRecipient("");
  };

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Multi-Currency Wallets</h1>
              <p className="text-muted-foreground">
                Manage your funds across different currencies with instant conversions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {currencies.map((currency) => (
                <Card key={currency.code} className="transition-smooth hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-3xl">{currency.flag}</span>
                        <div>
                          <div className="text-sm text-muted-foreground">{currency.code}</div>
                          <div className="text-xs text-muted-foreground">Balance</div>
                        </div>
                      </div>
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Wallet className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold mb-2">
                      {currency.symbol}{currency.balance}
                    </div>
                    <div className="flex items-center text-sm text-success">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {currency.change} this month
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Send & Receive Money</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="send" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="send">Send Money</TabsTrigger>
                      <TabsTrigger value="receive">Receive Money</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="send" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="recipient">Recipient</Label>
                        <Input
                          id="recipient"
                          placeholder="Enter username, email, or phone"
                          value={recipient}
                          onChange={(e) => setRecipient(e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="currency">Currency</Label>
                        <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {currencies.map((c) => (
                              <SelectItem key={c.code} value={c.code}>
                                {c.flag} {c.code} - {c.symbol}{c.balance}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="amount">Amount</Label>
                        <Input
                          id="amount"
                          type="number"
                          placeholder="0.00"
                          value={sendAmount}
                          onChange={(e) => setSendAmount(e.target.value)}
                        />
                      </div>
                      
                      <Button 
                        onClick={handleSendMoney}
                        className="w-full gradient-accent text-white shadow-glow"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Send Money
                      </Button>
                    </TabsContent>
                    
                    <TabsContent value="receive" className="space-y-4">
                      <div className="text-center py-8">
                        <div className="h-32 w-32 mx-auto mb-4 rounded-lg border-2 border-dashed border-border flex items-center justify-center bg-muted/30">
                          <Download className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Your Payment QR Code</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Share this QR code to receive payments instantly
                        </p>
                        <div className="space-y-2">
                          <Button variant="outline" className="w-full">
                            Generate QR Code
                          </Button>
                          <Button variant="outline" className="w-full">
                            Copy Payment Link
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Recent Transactions</CardTitle>
                  <Button variant="ghost" size="icon">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentTransactions.map((transaction) => (
                      <div
                        key={transaction.id}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-smooth"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={
                              transaction.type === "received"
                                ? "h-10 w-10 rounded-full bg-success/10 flex items-center justify-center"
                                : "h-10 w-10 rounded-full bg-muted flex items-center justify-center"
                            }
                          >
                            {transaction.type === "received" ? (
                              <ArrowDownRight className="h-5 w-5 text-success" />
                            ) : (
                              <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium text-sm">
                              {transaction.type === "received" ? transaction.from : transaction.to}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {transaction.date}
                            </div>
                          </div>
                        </div>
                        <div
                          className={
                            transaction.type === "received"
                              ? "font-semibold text-success"
                              : "font-semibold"
                          }
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
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Currency Exchange</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>From</Label>
                    <Select defaultValue="USD">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {currencies.map((c) => (
                          <SelectItem key={c.code} value={c.code}>
                            {c.flag} {c.code}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>To</Label>
                    <Select defaultValue="NGN">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {currencies.map((c) => (
                          <SelectItem key={c.code} value={c.code}>
                            {c.flag} {c.code}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Amount</Label>
                    <Input type="number" placeholder="0.00" />
                  </div>
                </div>
                
                <div className="mt-4 p-4 rounded-lg bg-muted/30">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Exchange Rate</span>
                    <span className="font-medium">1 USD = 1,380 NGN</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Transaction Fee</span>
                    <span className="font-medium">Free</span>
                  </div>
                </div>
                
                <Button className="w-full mt-4 gradient-primary">
                  Convert Currency
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
