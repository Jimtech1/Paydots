import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  CreditCard,
  Plus,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Trash2,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const cards = [
  {
    id: 1,
    type: "Virtual Dollar Card",
    last4: "4562",
    balance: "$2,450.00",
    limit: "$5,000",
    status: "active",
    expiryDate: "12/26",
  },
  {
    id: 2,
    type: "Virtual Verve Card",
    last4: "8923",
    balance: "₦850,000",
    limit: "₦2,000,000",
    status: "active",
    expiryDate: "03/27",
  },
  {
    id: 3,
    type: "Virtual Dollar Card",
    last4: "1678",
    balance: "$850.50",
    limit: "$3,000",
    status: "frozen",
    expiryDate: "08/25",
  },
];

const transactions = [
  { id: 1, merchant: "Netflix Subscription", amount: "-$15.99", date: "Today, 10:30 AM", card: "4562" },
  { id: 2, merchant: "Amazon Purchase", amount: "-$89.99", date: "Yesterday, 3:45 PM", card: "4562" },
  { id: 3, merchant: "Spotify Premium", amount: "-$9.99", date: "2 days ago", card: "8923" },
  { id: 4, merchant: "Google Cloud Services", amount: "-$25.00", date: "3 days ago", card: "1678" },
];

export default function Cards() {
  const [selectedCard, setSelectedCard] = useState(cards[0]);
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [cardType, setCardType] = useState("dollar");

  const handleCreateCard = () => {
    toast.success(`${cardType === "dollar" ? "Virtual Dollar" : "Virtual Verve"} Card created successfully!`);
    setCreateDialogOpen(false);
  };

  const toggleCardFreeze = (cardId: number) => {
    toast.success("Card status updated successfully");
  };

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">Card Management</h1>
                <p className="text-muted-foreground">
                  Create and manage your virtual cards for online purchases
                </p>
              </div>
              
              <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="gradient-accent text-white shadow-glow">
                    <Plus className="mr-2 h-4 w-4" />
                    Create New Card
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create Virtual Card</DialogTitle>
                    <DialogDescription>
                      Set up a new virtual card for secure online transactions
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label>Card Type</Label>
                      <Select value={cardType} onValueChange={setCardType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dollar">Virtual Dollar Card (USD)</SelectItem>
                          <SelectItem value="verve">Virtual Verve Card (NGN)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Card Name</Label>
                      <Input id="cardName" placeholder="e.g., Shopping Card" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="spendingLimit">Spending Limit</Label>
                      <Input
                        id="spendingLimit"
                        type="number"
                        placeholder={cardType === "dollar" ? "1000" : "500000"}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                      <div>
                        <div className="font-medium">Enable for online purchases</div>
                        <div className="text-sm text-muted-foreground">
                          Card will be active immediately
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  
                  <Button onClick={handleCreateCard} className="w-full gradient-primary">
                    Create Card
                  </Button>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Your Cards</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cards.map((card) => (
                    <div
                      key={card.id}
                      className="p-6 rounded-xl gradient-primary text-white cursor-pointer transition-smooth hover:shadow-xl"
                      onClick={() => setSelectedCard(card)}
                    >
                      <div className="flex items-start justify-between mb-8">
                        <div>
                          <div className="text-sm opacity-80 mb-1">{card.type}</div>
                          <Badge
                            variant={card.status === "active" ? "default" : "secondary"}
                            className={card.status === "active" ? "bg-success" : "bg-warning"}
                          >
                            {card.status === "active" ? "Active" : "Frozen"}
                          </Badge>
                        </div>
                        <CreditCard className="h-8 w-8 opacity-80" />
                      </div>
                      
                      <div className="mb-6">
                        <div className="font-mono text-2xl tracking-wider">
                          {showCardNumber ? `4532 7892 ${card.last4}` : `•••• •••• ${card.last4}`}
                        </div>
                      </div>
                      
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-xs opacity-70 mb-1">Balance</div>
                          <div className="text-xl font-bold">{card.balance}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs opacity-70 mb-1">Expires</div>
                          <div className="font-mono">{card.expiryDate}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Controls</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {showCardNumber ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span className="text-sm">Show card number</span>
                      </div>
                      <Switch
                        checked={showCardNumber}
                        onCheckedChange={setShowCardNumber}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {selectedCard.status === "active" ? (
                          <Unlock className="h-4 w-4 text-success" />
                        ) : (
                          <Lock className="h-4 w-4 text-warning" />
                        )}
                        <span className="text-sm">
                          {selectedCard.status === "active" ? "Freeze card" : "Unfreeze card"}
                        </span>
                      </div>
                      <Switch
                        checked={selectedCard.status === "active"}
                        onCheckedChange={() => toggleCardFreeze(selectedCard.id)}
                      />
                    </div>
                    
                    <Button variant="outline" className="w-full justify-start">
                      <DollarSign className="mr-2 h-4 w-4" />
                      Set Spending Limit
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Card
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Card Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">This Month</span>
                        <span className="text-sm font-medium">$1,245.50</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full gradient-accent w-3/4"></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                      <div>
                        <div className="text-sm text-muted-foreground">Remaining Limit</div>
                        <div className="font-semibold">{selectedCard.limit}</div>
                      </div>
                      <TrendingUp className="h-8 w-8 text-success" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Card Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {transactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-smooth"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                          <CreditCard className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <div className="font-medium">{transaction.merchant}</div>
                          <div className="text-sm text-muted-foreground">
                            Card •••• {transaction.card} • {transaction.date}
                          </div>
                        </div>
                      </div>
                      <div className="font-semibold">{transaction.amount}</div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Transactions
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
