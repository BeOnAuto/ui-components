"use client";

import * as React from 'react';
import { ChevronRightIcon } from 'lucide-react';

import { cn } from '../lib/utils';

function Breadcrumb({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      className={cn('flex items-center text-sm text-muted-foreground', className)}
      {...props}
    />
  );
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<'ol'>) {
  return <ol data-slot="breadcrumb-list" className={cn('flex flex-wrap items-center gap-1.5', className)} {...props} />;
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<'li'>) {
  return <li data-slot="breadcrumb-item" className={cn('inline-flex items-center', className)} {...props} />;
}

function BreadcrumbLink({ className, ...props }: React.ComponentProps<'a'>) {
  return (
    <a data-slot="breadcrumb-link" className={cn('transition-colors hover:text-foreground', className)} {...props} />
  );
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      aria-current="page"
      data-slot="breadcrumb-page"
      className={cn('font-medium text-foreground', className)}
      {...props}
    />
  );
}

function BreadcrumbSeparator({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" data-slot="breadcrumb-separator" className={cn('text-muted-foreground', className)}>
      <ChevronRightIcon className="size-3.5" />
    </span>
  );
}

export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator };
