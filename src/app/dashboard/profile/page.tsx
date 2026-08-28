import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ProfilePage() {
  return (
    <div className="container py-8">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>This is your profile page. Manage your personal information here.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Profile editing is not yet implemented.</p>
        </CardContent>
      </Card>
    </div>
  );
}
