import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DollarSign,
  TrendingUp,
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const loanProducts = [
  {
    id: 1,
    name: "Creator Revenue-Based Financing",
    description: "Loans based on your monthly earnings, flexible repayment",
    maxAmount: "$10,000",
    interestRate: "8-12%",
    term: "6-12 months",
    requirements: ["Active creator account", "3 months earnings history"],
  },
  {
    id: 2,
    name: "Business Inventory Loans",
    description: "Finance your inventory with revenue-based repayment",
    maxAmount: "$25,000",
    interestRate: "10-15%",
    term: "3-9 months",
    requirements: ["Registered business", "Minimum $5K monthly revenue"],
  },
  {
    id: 3,
    name: "Emergency Cash Advance",
    description: "Quick access to funds for unexpected expenses",
    maxAmount: "$2,000",
    interestRate: "5%",
    term: "1-3 months",
    requirements: ["Active account", "Verified identity"],
  },
];

const activeLoans = [
  {
    id: 1,
    type: "Creator Financing",
    amount: "$5,000",
    outstanding: "$2,850",
    nextPayment: "$475",
    dueDate: "Dec 15, 2025",
    status: "current",
    progress: 43,
  },
  {
    id: 2,
    type: "Emergency Cash",
    amount: "$1,500",
    outstanding: "$350",
    nextPayment: "$175",
    dueDate: "Dec 8, 2025",
    status: "current",
    progress: 77,
  },
];

export default function Loans() {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const handleApplyLoan = () => {
    if (!loanAmount || !loanPurpose || selectedProduct === null) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Loan application submitted! We'll review it within 24 hours.");
    setLoanAmount("");
    setLoanPurpose("");
    setSelectedProduct(null);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Loan Services</h1>
              <p className="text-muted-foreground">
                Access credit based on your earnings and business performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-success" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold mb-1">$5,000</div>
                  <div className="text-sm text-muted-foreground">Available Credit</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold mb-1">2</div>
                  <div className="text-sm text-muted-foreground">Active Loans</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold mb-1">Excellent</div>
                  <div className="text-sm text-muted-foreground">Credit Score</div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="apply" className="mb-8">
              <TabsList className="mb-6">
                <TabsTrigger value="apply">Apply for Loan</TabsTrigger>
                <TabsTrigger value="active">Active Loans</TabsTrigger>
                <TabsTrigger value="history">Loan History</TabsTrigger>
              </TabsList>

              <TabsContent value="apply">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Loan Products</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {loanProducts.map((product) => (
                          <div
                            key={product.id}
                            className={`p-4 rounded-lg border-2 cursor-pointer transition-smooth ${
                              selectedProduct === product.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                            onClick={() => setSelectedProduct(product.id)}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="font-semibold">{product.name}</h3>
                              <Badge variant="secondary">{product.maxAmount}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                              {product.description}
                            </p>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <span className="text-muted-foreground">Rate: </span>
                                <span className="font-medium">{product.interestRate}</span>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Term: </span>
                                <span className="font-medium">{product.term}</span>
                              </div>
                            </div>
                            <div className="mt-3 pt-3 border-t border-border">
                              <div className="text-xs text-muted-foreground mb-1">
                                Requirements:
                              </div>
                              <ul className="text-xs space-y-1">
                                {product.requirements.map((req, i) => (
                                  <li key={i} className="flex items-center">
                                    <CheckCircle2 className="h-3 w-3 text-success mr-1" />
                                    {req}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Application Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="loanAmount">Loan Amount</Label>
                        <Input
                          id="loanAmount"
                          type="number"
                          placeholder="Enter amount"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="purpose">Purpose of Loan</Label>
                        <Input
                          id="purpose"
                          placeholder="What will you use the loan for?"
                          value={loanPurpose}
                          onChange={(e) => setLoanPurpose(e.target.value)}
                        />
                      </div>

                      {selectedProduct && (
                        <div className="p-4 rounded-lg bg-muted/30 space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Interest Rate</span>
                            <span className="font-medium">
                              {loanProducts[selectedProduct - 1].interestRate}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Repayment Term</span>
                            <span className="font-medium">
                              {loanProducts[selectedProduct - 1].term}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm pt-3 border-t border-border">
                            <span className="text-muted-foreground">Est. Monthly Payment</span>
                            <span className="font-bold text-lg">
                              ${loanAmount ? Math.round(Number(loanAmount) / 6) : 0}
                            </span>
                          </div>
                        </div>
                      )}

                      <Button
                        onClick={handleApplyLoan}
                        disabled={!selectedProduct}
                        className="w-full gradient-accent text-white shadow-glow"
                      >
                        Submit Application
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By applying, you agree to our loan terms and conditions.
                        We'll review your application within 24 hours.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="active">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {activeLoans.map((loan) => (
                    <Card key={loan.id}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>{loan.type}</CardTitle>
                          <Badge
                            variant={loan.status === "current" ? "default" : "secondary"}
                            className="bg-success"
                          >
                            Current
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">
                              Original Amount
                            </div>
                            <div className="text-xl font-bold">{loan.amount}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">
                              Outstanding
                            </div>
                            <div className="text-xl font-bold">{loan.outstanding}</div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">Repayment Progress</span>
                            <span className="font-medium">{loan.progress}%</span>
                          </div>
                          <Progress value={loan.progress} className="h-2" />
                        </div>

                        <div className="p-4 rounded-lg bg-muted/30">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                Next Payment
                              </span>
                            </div>
                            <span className="font-semibold">{loan.nextPayment}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Due: {loan.dueDate}
                          </div>
                        </div>

                        <Button variant="outline" className="w-full">
                          Make Payment
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="history">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center py-12">
                      <Clock className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="text-lg font-semibold mb-2">No Completed Loans</h3>
                      <p className="text-sm text-muted-foreground">
                        Your loan history will appear here once you complete repayments
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card>
              <CardHeader>
                <CardTitle>How Paydots Loans Work</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="h-12 w-12 rounded-full gradient-primary text-white flex items-center justify-center mx-auto mb-3 font-bold">
                      1
                    </div>
                    <h4 className="font-semibold mb-2">Check Eligibility</h4>
                    <p className="text-sm text-muted-foreground">
                      We analyze your earnings and business performance
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="h-12 w-12 rounded-full gradient-primary text-white flex items-center justify-center mx-auto mb-3 font-bold">
                      2
                    </div>
                    <h4 className="font-semibold mb-2">Apply Online</h4>
                    <p className="text-sm text-muted-foreground">
                      Submit your application in minutes
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="h-12 w-12 rounded-full gradient-primary text-white flex items-center justify-center mx-auto mb-3 font-bold">
                      3
                    </div>
                    <h4 className="font-semibold mb-2">Quick Approval</h4>
                    <p className="text-sm text-muted-foreground">
                      Get approved within 24 hours
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="h-12 w-12 rounded-full gradient-primary text-white flex items-center justify-center mx-auto mb-3 font-bold">
                      4
                    </div>
                    <h4 className="font-semibold mb-2">Receive Funds</h4>
                    <p className="text-sm text-muted-foreground">
                      Money deposited directly to your wallet
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
