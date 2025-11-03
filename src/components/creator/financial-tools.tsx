import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Receipt, FileText, CreditCard, Upload, Download, TrendingUp } from "lucide-react";
import { toast } from "sonner";

const expenses = [
  { id: 1, description: "Adobe Creative Cloud", amount: 54.99, category: "Software", date: "Dec 1, 2024" },
  { id: 2, description: "Domain Renewal", amount: 15.99, category: "Business", date: "Dec 5, 2024" },
  { id: 3, description: "Marketing Ads", amount: 250.00, category: "Marketing", date: "Dec 8, 2024" },
  { id: 4, description: "Office Supplies", amount: 87.45, category: "Equipment", date: "Dec 10, 2024" },
];

const payouts = [
  { id: 1, amount: 2500, status: "completed", date: "Dec 1, 2024", method: "Bank Transfer" },
  { id: 2, amount: 3200, status: "completed", date: "Dec 8, 2024", method: "Bank Transfer" },
  { id: 3, amount: 1850, status: "pending", date: "Dec 15, 2024", method: "Bank Transfer" },
];

export function FinancialTools() {
  const handleUploadReceipt = () => {
    toast.success("Receipt uploaded successfully!");
  };

  const handleGenerateReport = () => {
    toast.success("Tax report generated!");
  };

  const handleSchedulePayout = () => {
    toast.success("Payout scheduled successfully!");
  };

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const estimatedTax = (9500 * 0.22).toFixed(2); // 22% tax rate on $9,500 revenue

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <Receipt className="h-5 w-5 text-destructive" />
              </div>
            </div>
            <div className="text-2xl font-bold">${totalExpenses.toFixed(2)}</div>
            <div className="text-sm text-muted-foreground">Monthly Expenses</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="text-2xl font-bold">${estimatedTax}</div>
            <div className="text-sm text-muted-foreground">Estimated Tax</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-success" />
              </div>
            </div>
            <div className="text-2xl font-bold">$7,410</div>
            <div className="text-sm text-muted-foreground">Total Payouts</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="expenses" className="space-y-6">
        <TabsList>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="taxes">Taxes</TabsTrigger>
          <TabsTrigger value="payouts">Payouts</TabsTrigger>
          <TabsTrigger value="loans">Loans & Credit</TabsTrigger>
        </TabsList>

        <TabsContent value="expenses">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Expense Tracking</CardTitle>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {expenses.map((expense) => (
                  <div key={expense.id} className="flex items-center justify-between p-4 rounded-lg border border-border">
                    <div className="flex items-center gap-3">
                      <Receipt className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{expense.description}</div>
                        <div className="text-sm text-muted-foreground">
                          {expense.category} • {expense.date}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">${expense.amount.toFixed(2)}</div>
                      <Button variant="ghost" size="sm" className="text-xs">View Receipt</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Add Expense</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="expDesc">Description</Label>
                  <Input id="expDesc" placeholder="e.g., Software subscription" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expAmount">Amount ($)</Label>
                  <Input id="expAmount" type="number" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expCategory">Category</Label>
                  <select className="w-full px-3 py-2 rounded-md border border-input bg-background">
                    <option>Software</option>
                    <option>Marketing</option>
                    <option>Equipment</option>
                    <option>Business</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expDate">Date</Label>
                  <Input id="expDate" type="date" />
                </div>
                <Button onClick={handleUploadReceipt} variant="outline" className="w-full">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Receipt
                </Button>
                <Button className="w-full gradient-primary">Add Expense</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="taxes">
          <Card>
            <CardHeader>
              <CardTitle>Tax Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border border-border">
                  <h3 className="font-semibold mb-4">2024 Tax Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Revenue</span>
                      <span className="font-semibold">$9,500.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Expenses</span>
                      <span className="font-semibold">-${totalExpenses.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t">
                      <span className="text-muted-foreground">Taxable Income</span>
                      <span className="font-semibold">${(9500 - totalExpenses).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Estimated Tax (22%)</span>
                      <span className="font-semibold text-primary">${estimatedTax}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-muted/50">
                  <h3 className="font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <Button onClick={handleGenerateReport} variant="outline" className="w-full justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      Generate Tax Report
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Download 1099 Forms
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Receipt className="mr-2 h-4 w-4" />
                      Export All Receipts
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payouts">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Payout History</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {payouts.map((payout) => (
                  <div key={payout.id} className="flex items-center justify-between p-4 rounded-lg border border-border">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{payout.method}</div>
                        <div className="text-sm text-muted-foreground">{payout.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">${payout.amount.toLocaleString()}</div>
                      <Badge variant={payout.status === "completed" ? "default" : "secondary"}
                             className={payout.status === "completed" ? "bg-success" : ""}>
                        {payout.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Schedule Payout</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="text-sm text-muted-foreground mb-1">Available Balance</div>
                  <div className="text-2xl font-bold">$3,450.00</div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payoutAmount">Amount ($)</Label>
                  <Input id="payoutAmount" type="number" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payoutMethod">Payout Method</Label>
                  <select className="w-full px-3 py-2 rounded-md border border-input bg-background">
                    <option>Bank Transfer</option>
                    <option>PayPal</option>
                    <option>Wire Transfer</option>
                  </select>
                </div>
                <Button onClick={handleSchedulePayout} className="w-full gradient-primary">
                  Schedule Payout
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="loans">
          <Card>
            <CardHeader>
              <CardTitle>Paydots Loans & Credit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <CreditCard className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">Access Business Financing</h3>
                <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                  Get quick access to credit lines and revenue-based financing to grow your creator business
                </p>
                <div className="flex justify-center gap-3">
                  <Button variant="outline">View Loan Products</Button>
                  <Button className="gradient-primary">Check Eligibility</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
