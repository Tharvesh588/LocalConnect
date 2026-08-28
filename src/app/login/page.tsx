'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from '@/components/logo';

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // Basic validation for Indian phone number
    if (phone.replace(/\D/g, '').length >= 10) {
      router.push('/login/otp');
    } else {
      setError('Please enter a valid 10-digit phone number.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Logo />
            </div>
            <CardTitle className="font-headline text-2xl">Welcome</CardTitle>
            <CardDescription>Enter your phone number to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <form id="login-form" onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  {error && <p className="text-sm text-destructive mt-2">{error}</p>}
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" form="login-form" className="w-full h-12 text-base">Send OTP</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
