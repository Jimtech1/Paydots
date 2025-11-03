import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, CheckCircle2, Building2, Globe, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function MarketplacePayments() {
  const { toast } = useToast();

  const achDetails = {
    accountName: "Your Creator Account",
    accountNumber: "1234567890",
    routingNumber: "021000021",
    accountType: "Checking",
    bankName: "RoundTable Financial",
    bankAddress: "123 Financial Street, New York, NY 10001",
    swiftCode: "RNDTBUS33XXX"
  };

  const marketplaces = [
    { name: "Fiverr", icon: Globe, status: "active", earnings: "$2,450" },
    { name: "Upwork", icon: Globe, status: "active", earnings: "$3,890" },
    { name: "Toptal", icon: Globe, status: "pending", earnings: "$0" },
    { name: "Freelancer", icon: Globe, status: "inactive", earnings: "$0" }
  ];

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: `${label} has been copied successfully.`
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Marketplace Payments</h2>
        <p className="text-muted-foreground">
          Connect your freelance marketplace accounts and receive payments directly to your Paydots wallet via RoundTable ACH
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              <CardTitle>RoundTable ACH Details</CardTitle>
            </div>
            <CardDescription>
              Use these details to receive payments from international marketplaces
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Account Name</p>
                  <p className="font-medium">{achDetails.accountName}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(achDetails.accountName, "Account name")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Account Number</p>
                  <p className="font-medium font-mono">{achDetails.accountNumber}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(achDetails.accountNumber, "Account number")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Routing Number (ACH)</p>
                  <p className="font-medium font-mono">{achDetails.routingNumber}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(achDetails.routingNumber, "Routing number")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Account Type</p>
                  <p className="font-medium">{achDetails.accountType}</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <p className="text-sm font-medium">Bank Information</p>
                <div className="text-sm space-y-1">
                  <p className="text-muted-foreground">Bank Name: <span className="text-foreground">{achDetails.bankName}</span></p>
                  <p className="text-muted-foreground">Address: <span className="text-foreground">{achDetails.bankAddress}</span></p>
                  <p className="text-muted-foreground">SWIFT/BIC: <span className="text-foreground font-mono">{achDetails.swiftCode}</span></p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button className="w-full" variant="outline">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Full Wire Instructions
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Connected Marketplaces</CardTitle>
              <CardDescription>
                Manage your connected freelance platforms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {marketplaces.map((marketplace) => (
                <div
                  key={marketplace.name}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <marketplace.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{marketplace.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Total earned: {marketplace.earnings}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={
                      marketplace.status === "active"
                        ? "default"
                        : marketplace.status === "pending"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {marketplace.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <CardTitle>Setup Instructions</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Log into your marketplace account</p>
                    <p className="text-sm text-muted-foreground">
                      Navigate to payment settings or withdrawal methods
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Add new bank account</p>
                    <p className="text-sm text-muted-foreground">
                      Select "Add US bank account" or "Add ACH transfer"
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Enter RoundTable details</p>
                    <p className="text-sm text-muted-foreground">
                      Copy and paste the account and routing numbers from above
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    4
                  </div>
                  <div>
                    <p className="font-medium">Verify the account</p>
                    <p className="text-sm text-muted-foreground">
                      Complete micro-deposit verification if required
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-start gap-2 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-primary">Automatic Transfers</p>
                    <p className="text-muted-foreground">
                      Funds will automatically appear in your Paydots wallet within 2-3 business days
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
