"use client";

import * as React from 'react';
import { AlertCircleIcon } from 'lucide-react';

import { cn } from '../lib/utils';
import { Label } from './label';

function Field({
  label,
  description,
  error,
  required,
  className,
  children,
}: {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div data-slot="field" className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <Label className="flex items-center gap-1">
          {label}
          {required && <span className="text-destructive">*</span>}
        </Label>
      )}
      {children}
      {description && !error && <p className="text-xs text-muted-foreground">{description}</p>}
      {error && (
        <p className="flex items-center gap-1 text-xs text-destructive">
          <AlertCircleIcon className="size-3" />
          {error}
        </p>
      )}
    </div>
  );
}

export { Field };
