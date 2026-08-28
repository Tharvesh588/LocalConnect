import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="container py-8">
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>This is the settings page. Adjust your preferences.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Settings are not yet implemented.</p>
        </CardContent>
      </Card>
    </div>
  );
}
