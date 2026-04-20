"use client";

import * as React from 'react';

import { cn } from '../lib/utils';

interface SegmentedOption {
  value: string;
  label: string;
}

function SegmentedControl({
  options,
  value,
  onValueChange,
  className,
}: {
  options: SegmentedOption[];
  value: string;
  onValueChange?: (v: string) => void;
  className?: string;
}) {
  return (
    <div data-slot="segmented-control" className={cn('inline-flex rounded-md bg-muted p-1 text-sm', className)}>
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onValueChange?.(opt.value)}
            className={cn(
              'rounded px-3 py-1 transition-colors',
              active ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

export { SegmentedControl };
export type { SegmentedOption };
