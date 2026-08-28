import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Wrench, Clock } from "lucide-react";
import Link from "next/link";

export default function CustomerDashboard() {
  const recentJobs = [
    { title: "Fix leaky kitchen sink", category: "Plumbing", status: "Searching" },
    { title: "Paint living room walls", category: "Painting", status: "Worker Hired" },
    { title: "Assemble new bookshelf", category: "Carpentry", status: "Completed" },
  ];

  return (
    <div className="container py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="font-headline text-3xl font-bold">Customer Dashboard</h1>
          <p className="text-muted-foreground">Manage your service requests.</p>
        </div>
        <Link href="/jobs/create">
          <Button className="w-full sm:w-auto h-12 text-base">
            <PlusCircle className="mr-2" />
            Post a New Job
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Posted Jobs</CardTitle>
          <CardDescription>Here is a list of your recent job requests.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {recentJobs.map((job, index) => (
              <li key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg hover:bg-secondary">
                <div className="mb-4 sm:mb-0">
                  <p className="font-semibold">{job.title}</p>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <Wrench className="w-4 h-4 mr-2" />
                    <span>{job.category}</span>
                  </div>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Status: </span>
                  <span className="font-semibold ml-1">{job.status}</span>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
