import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, History, UserCheck, Eye } from "lucide-react";

export default function WorkerDashboard() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="font-headline text-3xl font-bold">Worker Dashboard</h1>
        <p className="text-muted-foreground">Here's an overview of your activity.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹12,234</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Jobs Completed</CardTitle>
            <History className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+23</div>
            <p className="text-xs text-muted-foreground">
              +5 since last week
            </p>
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-green-500" />
              Profile Status
            </CardTitle>
            <CardDescription>Your profile is live and visible to customers.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full h-12">
              <Eye className="mr-2" />
              View Public Profile
            </Button>
          </CardContent>
        </Card>
      </div>

       <Card className="mt-8">
          <CardHeader>
            <CardTitle>Recent Job Invites</CardTitle>
            <CardDescription>New job opportunities in your area.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center text-muted-foreground py-12">
              <p>No new job invites at the moment.</p>
              <p className="text-sm">We'll notify you when a new job matches your skills.</p>
            </div>
          </CardContent>
        </Card>
    </div>
  );
}
