'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from '@/components/logo';

export default function OtpPage() {
  const router = useRouter();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // Mock OTP check
    if (otp.length === 6) {
      router.push('/onboarding/role');
    } else {
      setError('Please enter a valid 6-digit OTP.');
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
            <CardTitle className="font-headline text-2xl">Verify OTP</CardTitle>
            <CardDescription>Enter the 6-digit code sent to your phone</CardDescription>
          </CardHeader>
          <CardContent>
            <form id="otp-form" onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="otp">One-Time Password</Label>
                  <Input 
                    id="otp" 
                    type="text" 
                    placeholder="_ _ _ _ _ _" 
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    className="text-center text-2xl tracking-[1em]"
                  />
                  {error && <p className="text-sm text-destructive mt-2">{error}</p>}
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" form="otp-form" className="w-full h-12 text-base">Verify</Button>
            <Button variant="link" size="sm">
              Didn't receive code? Resend
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
