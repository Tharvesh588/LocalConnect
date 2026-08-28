'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Mic, Play, Trash2, ArrowRight, Pause, CircleDot } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function VoiceIntroPage() {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'recording' | 'recorded'>('idle');
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (status === 'recording') {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev >= 30) {
            setStatus('recorded');
            return 30;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [status]);

  const handleRecord = () => {
    setTimer(0);
    setStatus('recording');
  };

  const handleStop = () => {
    setStatus('recorded');
  };

  const handleDelete = () => {
    setStatus('idle');
    setTimer(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div className="container mx-auto max-w-md py-12 px-4 flex flex-col h-full items-center justify-center text-center">
      <div className="flex-grow flex flex-col items-center justify-center">
        {status === 'idle' && (
          <>
            <Mic className="w-24 h-24 text-muted-foreground mb-6" strokeWidth={1} />
            <h2 className="font-headline text-2xl mb-2">Introduce Yourself</h2>
            <p className="text-muted-foreground mb-8">Record a short 30-second audio clip to let customers know who you are.</p>
            <Button onClick={handleRecord} className="h-16 w-16 rounded-full p-0" >
              <Mic className="w-8 h-8" />
            </Button>
          </>
        )}

        {status === 'recording' && (
          <>
            <CircleDot className="w-24 h-24 text-red-500 mb-6 animate-pulse" strokeWidth={1} />
            <h2 className="font-headline text-2xl mb-2">Recording...</h2>
            <p className="font-mono text-4xl mb-8">{formatTime(timer)}</p>
            <Button onClick={handleStop} variant="destructive" className="h-16 w-16 rounded-full p-0">
              <Pause className="w-8 h-8" />
            </Button>
          </>
        )}

        {status === 'recorded' && (
          <>
            <Play className="w-24 h-24 text-primary mb-6" strokeWidth={1} />
            <h2 className="font-headline text-2xl mb-2">Intro Recorded!</h2>
            <p className="text-muted-foreground mb-8">Your {timer}-second intro is ready. You can listen to it or re-record.</p>
            <div className="flex gap-4">
              <Button onClick={handleDelete} variant="outline" size="lg">
                <Trash2 className="mr-2" />
                Re-record
              </Button>
              <Button onClick={() => alert('Playing audio...')} size="lg" className="bg-accent hover:bg-accent/90">
                <Play className="mr-2" />
                Play
              </Button>
            </div>
          </>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm border-t">
        <div className="container mx-auto max-w-md">
          <Button
            className="w-full h-14 text-lg"
            onClick={() => router.push('/onboarding/worker/verify')}
            disabled={status !== 'recorded'}
          >
            Continue
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
