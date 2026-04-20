"use client";

import * as React from 'react';

import { cn } from '../lib/utils';

function SidebarProvider({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="sidebar-provider" className={cn('flex min-h-full w-full', className)} {...props} />;
}

function Sidebar({ className, ...props }: React.ComponentProps<'aside'>) {
  return (
    <aside
      data-slot="sidebar"
      className={cn('flex w-64 flex-col border-r border-border bg-sidebar text-sidebar-foreground', className)}
      {...props}
    />
  );
}

function SidebarHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-header"
      className={cn('flex items-center gap-2 border-b border-border p-4', className)}
      {...props}
    />
  );
}

function SidebarContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="sidebar-content" className={cn('flex-1 overflow-auto p-2', className)} {...props} />;
}

function SidebarFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-footer"
      className={cn('flex items-center gap-2 border-t border-border p-4', className)}
      {...props}
    />
  );
}

function SidebarMenu({ className, ...props }: React.ComponentProps<'ul'>) {
  return <ul data-slot="sidebar-menu" className={cn('flex flex-col gap-1', className)} {...props} />;
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<'li'>) {
  return <li data-slot="sidebar-menu-item" className={cn('flex', className)} {...props} />;
}

function SidebarMenuButton({ className, isActive, ...props }: React.ComponentProps<'button'> & { isActive?: boolean }) {
  return (
    <button
      data-slot="sidebar-menu-button"
      data-active={isActive || undefined}
      className={cn(
        'flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground',
        className,
      )}
      {...props}
    />
  );
}

function SidebarInset({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="sidebar-inset" className={cn('flex flex-1 flex-col overflow-auto', className)} {...props} />;
}

export {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
};
