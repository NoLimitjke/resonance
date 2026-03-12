'use client';

import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThumbsUp, Headphones } from 'lucide-react';

export default function DashboardHeader() {
  const { isLoaded, user } = useUser();
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">Nice to see you</p>
        <h1 className="text-2xl font-semibold tracking-tight lg:text-3xl">
          {isLoaded ? (user?.fullName ?? user?.firstName ?? 'there') : '...'}
        </h1>
      </div>

      <div className="lg:flex items-center gap-3 hidden">
        <Button variant={'outline'} size="sm" asChild>
          <Link href="mailto:kilin.daniil.99@gmail.com">
            <ThumbsUp />
            <span className="hidden lg:block">Feedback</span>
          </Link>
        </Button>
        <Button variant={'outline'} size="sm" asChild>
          <Link href="mailto:kilin.daniil.99@gmail.com">
            <Headphones />
            <span className="hidden lg:block">Need help?</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
