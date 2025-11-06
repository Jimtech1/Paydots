import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
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
  Heart,
  Copy,
  Share2,
  DollarSign,
  Filter,
  Calendar,
  CreditCard,
  Zap,
  Clock,
  Users,
  Receipt,
  PieChart,
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
  const [tipJarName, setTipJarName] = useState("");
  const [tipJarMessage, setTipJarMessage] = useState("");
  const [filterTransactions, setFilterTransactions] = useState("all");

  const handleSendMoney = () => {
    if (!sendAmount || !recipient) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success(`Successfully sent ${sendAmount} ${selectedCurrency} to ${recipient}`);
    setSendAmount("");
    setRecipient("");
  };

  const handleCreateTipJar = () => {
    if (!tipJarName) {
      toast.error("Please enter a name for your Tipdots");
      return;
    }
    toast.success("Tipdots created! Link copied to clipboard");
    setTipJarName("");
    setTipJarMessage("");
  };

  const handleQuickTipdots = () => {
    toast.success("Tipdots page opened!");
  };

  const filteredTransactions = recentTransactions.filter(t => {
    if (filterTransactions === "all") return true;
    return t.type === filterTransactions;
  });

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">Multi-Currency Wallets</h1>
                <p className="text-muted-foreground">
                  Manage your funds across different currencies with instant conversions
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Receive
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleQuickTipdots}
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Tipdots
                </Button>
              </div>
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
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle>Recent Transactions</CardTitle>
                    <div className="flex gap-2">
                      <Select value={filterTransactions} onValueChange={setFilterTransactions}>
                        <SelectTrigger className="w-[140px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                          <SelectItem value="received">Received</SelectItem>
                          <SelectItem value="sent">Sent</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="ghost" size="icon">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredTransactions.map((transaction) => (
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <Card>
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

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary" />
                      Tipdots
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="create" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="create">Create Tipdots</TabsTrigger>
                      <TabsTrigger value="received">Received Tips</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="create" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="tipJarName">Tipdots Name</Label>
                        <Input
                          id="tipJarName"
                          placeholder="e.g., Coffee Fund, Support My Work"
                          value={tipJarName}
                          onChange={(e) => setTipJarName(e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="tipMessage">Custom Message (Optional)</Label>
                        <Input
                          id="tipMessage"
                          placeholder="Thank you for your support!"
                          value={tipJarMessage}
                          onChange={(e) => setTipJarMessage(e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Quick Tip Amounts</Label>
                        <div className="grid grid-cols-4 gap-2">
                          <Button variant="outline" size="sm">$5</Button>
                          <Button variant="outline" size="sm">$10</Button>
                          <Button variant="outline" size="sm">$20</Button>
                          <Button variant="outline" size="sm">Custom</Button>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={handleCreateTipJar}
                        className="w-full gradient-accent"
                      >
                        <Heart className="mr-2 h-4 w-4" />
                        Create Tipdots Link
                      </Button>

                      <div className="pt-4 border-t">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Copy className="h-4 w-4 mr-2" />
                            Copy Link
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="received" className="space-y-4">
                      <div className="text-center py-4">
                        <div className="h-20 w-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                          <DollarSign className="h-10 w-10 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">$247.50</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Total tips received this month
                        </p>
                      </div>

                      <div className="space-y-3">
                        {[
                          { name: "Anonymous", amount: "$25.00", time: "2 hours ago" },
                          { name: "Sarah K.", amount: "$50.00", time: "1 day ago" },
                          { name: "Mike R.", amount: "$10.00", time: "2 days ago" },
                        ].map((tip, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <Heart className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <div className="font-medium text-sm">{tip.name}</div>
                                <div className="text-xs text-muted-foreground">{tip.time}</div>
                              </div>
                            </div>
                            <div className="font-semibold text-success">{tip.amount}</div>
                          </div>
                        ))}
                      </div>

                      <Button variant="outline" className="w-full">
                        View All Tips
                      </Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Scheduled Payments
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { name: "Rent Payment", amount: "$1,200", date: "1st of every month", status: "active" },
                      { name: "Subscription Fee", amount: "$49", date: "15th of every month", status: "active" },
                    ].map((payment, idx) => (
                      <div key={idx} className="p-3 rounded-lg border border-border hover:border-primary/50 transition-smooth">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium text-sm">{payment.name}</div>
                          <Badge variant="secondary" className="bg-success text-white text-xs">
                            {payment.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{payment.date}</span>
                          <span className="font-semibold">{payment.amount}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    <Clock className="h-4 w-4 mr-2" />
                    Schedule New Payment
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Receipt className="h-5 w-5 text-accent" />
                    Payment Requests
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { from: "Sarah Wilson", amount: "$350", reason: "Design Project", date: "2 hours ago" },
                      { from: "Mike Chen", amount: "$125", reason: "Consultation Fee", date: "5 hours ago" },
                    ].map((request, idx) => (
                      <div key={idx} className="p-3 rounded-lg border border-border hover:border-primary/50 transition-smooth">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium text-sm">{request.from}</div>
                          <span className="font-semibold text-accent">{request.amount}</span>
                        </div>
                        <div className="text-xs text-muted-foreground mb-2">{request.reason}</div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1 h-8 gradient-primary">
                            Pay
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1 h-8">
                            Decline
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Request Payment
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-success" />
                    Spending Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { category: "Business", amount: "$2,450", percentage: 45, color: "bg-primary" },
                      { category: "Personal", amount: "$1,820", percentage: 35, color: "bg-accent" },
                      { category: "Savings", amount: "$1,090", percentage: 20, color: "bg-success" },
                    ].map((cat, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">{cat.category}</span>
                          <span className="text-muted-foreground">{cat.amount}</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div 
                            className={`h-full ${cat.color} transition-all`}
                            style={{ width: `${cat.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    View Full Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
