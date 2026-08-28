import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench, User } from 'lucide-react';
import { Logo } from '@/components/logo';

export default function RoleSelectionPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center text-center mb-12">
        <Logo />
        <h1 className="font-headline text-3xl mt-6">How would you like to use SevaLocal?</h1>
        <p className="text-muted-foreground mt-2 max-w-md">Choose your role to get started. You can change this later.</p>
      </div>
      <div className="grid w-full max-w-2xl grid-cols-1 gap-8 md:grid-cols-2">
        <Link href="/onboarding/worker/skills">
          <Card className="transform transition-transform duration-300 hover:scale-105 hover:border-primary hover:shadow-xl">
            <CardContent className="flex flex-col items-center justify-center p-10 text-center">
              <Wrench className="w-24 h-24 text-primary mb-4" strokeWidth={1.5} />
              <p className="font-headline text-2xl font-bold">I'm a Worker</p>
              <p className="text-muted-foreground mt-1">Find local jobs and earn money.</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/dashboard/customer">
          <Card className="transform transition-transform duration-300 hover:scale-105 hover:border-primary hover:shadow-xl">
            <CardContent className="flex flex-col items-center justify-center p-10 text-center">
              <User className="w-24 h-24 text-primary mb-4" strokeWidth={1.5} />
              <p className="font-headline text-2xl font-bold">I'm a Customer</p>
              <p className="text-muted-foreground mt-1">Hire skilled workers for your tasks.</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </main>
  );
}
