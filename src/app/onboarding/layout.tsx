'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useMemo } from 'react';

const onboardingSteps = [
  '/onboarding/worker/skills',
  '/onboarding/worker/intro',
  '/onboarding/worker/verify',
];

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const { currentStep, totalSteps, progress, title } = useMemo(() => {
    const stepIndex = onboardingSteps.indexOf(pathname);
    const currentStep = stepIndex + 1;
    const totalSteps = onboardingSteps.length;
    const progress = (currentStep / totalSteps) * 100;
    
    let title = 'Complete Your Profile';
    if (pathname.includes('skills')) title = 'Select Your Skills';
    if (pathname.includes('intro')) title = 'Record Your Introduction';
    if (pathname.includes('verify')) title = 'Verify Your Identity';

    return { currentStep, totalSteps, progress, title };
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 bg-background/80 backdrop-blur-sm border-b p-4 z-10">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()} disabled={currentStep <= 1}>
            <ArrowLeft />
          </Button>
          <div className="flex-grow">
            <p className="text-sm text-muted-foreground">Step {currentStep} of {totalSteps}</p>
            <h1 className="font-headline text-lg font-bold">{title}</h1>
          </div>
        </div>
        <Progress value={progress} className="w-full h-1 mt-2" />
      </header>
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}
