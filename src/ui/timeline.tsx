"use client";

import * as React from 'react';

import { cn } from '../lib/utils';

type TimelineVariant = 'default' | 'success' | 'warning' | 'error';

interface TimelineItem {
  title: string;
  description?: string;
  timestamp?: string;
  icon?: React.ReactNode;
  variant?: TimelineVariant;
}

const variantStyles: Record<TimelineVariant, string> = {
  default: 'bg-primary',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
};

function Timeline({ items, className }: { items: TimelineItem[]; className?: string }) {
  return (
    <ol data-slot="timeline" className={cn('relative flex flex-col gap-6', className)}>
      {items.map((item, i) => (
        <li key={i} className="relative flex gap-4 pl-2">
          {i < items.length - 1 && (
            <span className="absolute left-[15px] top-8 h-full w-px bg-border" aria-hidden="true" />
          )}
          <div
            className={cn(
              'z-10 flex size-8 shrink-0 items-center justify-center rounded-full text-white',
              variantStyles[item.variant ?? 'default'],
            )}
          >
            {item.icon ?? <span className="size-2 rounded-full bg-white" />}
          </div>
          <div className="flex flex-1 flex-col gap-1 pb-2">
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold">{item.title}</p>
              {item.timestamp && <span className="text-xs text-muted-foreground">{item.timestamp}</span>}
            </div>
            {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

export { Timeline };
export type { TimelineItem, TimelineVariant };
