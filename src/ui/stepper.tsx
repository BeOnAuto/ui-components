"use client";

import * as React from 'react';
import { CheckIcon } from 'lucide-react';

import { cn } from '../lib/utils';

interface StepperStep {
  label: string;
  description?: string;
}

function Stepper({ steps, current, className }: { steps: StepperStep[]; current: number; className?: string }) {
  return (
    <ol data-slot="stepper" className={cn('flex w-full items-center', className)}>
      {steps.map((step, i) => {
        const isComplete = i < current;
        const isCurrent = i === current;
        return (
          <li key={i} className={cn('flex items-center', i < steps.length - 1 ? 'flex-1' : '')}>
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  'flex size-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold',
                  isComplete && 'border-primary bg-primary text-primary-foreground',
                  isCurrent && 'border-primary bg-primary/10 text-primary',
                  !isComplete && !isCurrent && 'border-border text-muted-foreground',
                )}
              >
                {isComplete ? <CheckIcon className="size-4" /> : i + 1}
              </div>
              <div className="flex flex-col">
                <p
                  className={cn(
                    'text-sm font-medium',
                    isCurrent || isComplete ? 'text-foreground' : 'text-muted-foreground',
                  )}
                >
                  {step.label}
                </p>
                {step.description && <p className="text-xs text-muted-foreground">{step.description}</p>}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className={cn('mx-4 h-px flex-1', isComplete ? 'bg-primary' : 'bg-border')} aria-hidden="true" />
            )}
          </li>
        );
      })}
    </ol>
  );
}

export { Stepper };
export type { StepperStep };
