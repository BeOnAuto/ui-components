"use client";

import { createContext, useContext, type ReactNode } from 'react';

export type NavigateFn = (path: string) => void;

const NavigationContext = createContext<NavigateFn | null>(null);

export function NavigationProvider({
  navigate,
  children,
}: {
  navigate: NavigateFn;
  children: ReactNode;
}) {
  return <NavigationContext.Provider value={navigate}>{children}</NavigationContext.Provider>;
}

export function useNavigate(): NavigateFn | null {
  return useContext(NavigationContext);
}
