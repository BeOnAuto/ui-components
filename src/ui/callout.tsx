"use client";

import * as React from 'react';

import { cn } from '../lib/utils';

type CalloutVariant = 'info' | 'warning' | 'error' | 'success';

const calloutStyles: Record<CalloutVariant, string> = {
  info: 'border-blue-500 bg-blue-50 text-blue-950 dark:bg-blue-950/30 dark:text-blue-100',
  warning: 'border-yellow-500 bg-yellow-50 text-yellow-950 dark:bg-yellow-950/30 dark:text-yellow-100',
  error: 'border-red-500 bg-red-50 text-red-950 dark:bg-red-950/30 dark:text-red-100',
  success: 'border-green-500 bg-green-50 text-green-950 dark:bg-green-950/30 dark:text-green-100',
};

function Callout({
  variant = 'info',
  title,
  description,
  icon,
  className,
}: {
  variant?: CalloutVariant;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      data-slot="callout"
      className={cn('flex items-start gap-3 rounded-md border-l-4 px-4 py-3', calloutStyles[variant], className)}
    >
      {icon && <div className="mt-0.5 shrink-0">{icon}</div>}
      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-semibold leading-tight">{title}</p>
        {description && <p className="text-sm opacity-90">{description}</p>}
      </div>
    </div>
  );
}

export { Callout };
export type { CalloutVariant };
