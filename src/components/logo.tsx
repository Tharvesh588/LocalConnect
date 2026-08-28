import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('font-headline text-3xl font-bold text-primary', className)}>
      Seva<span className="text-accent">Local</span>
    </Link>
  );
}
