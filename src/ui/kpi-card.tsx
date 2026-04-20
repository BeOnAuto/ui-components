"use client";

import * as React from 'react';
import { TrendingUpIcon, TrendingDownIcon, MinusIcon } from 'lucide-react';

import { cn } from '../lib/utils';
import { Sparkline } from './sparkline';

type KPITrend = 'up' | 'down' | 'flat';

function KPICard({
  label,
  value,
  delta,
  trend,
  sparklineData,
  className,
}: {
  label: string;
  value: string | number;
  delta?: number;
  trend?: KPITrend;
  sparklineData?: Array<{ value: number }> | number[];
  className?: string;
}) {
  const resolvedTrend: KPITrend | undefined =
    trend ?? (typeof delta === 'number' ? (delta > 0 ? 'up' : delta < 0 ? 'down' : 'flat') : undefined);
  const TrendIcon = resolvedTrend === 'up' ? TrendingUpIcon : resolvedTrend === 'down' ? TrendingDownIcon : MinusIcon;
  const trendColor =
    resolvedTrend === 'up'
      ? 'text-green-600 dark:text-green-400'
      : resolvedTrend === 'down'
        ? 'text-red-600 dark:text-red-400'
        : 'text-muted-foreground';
  return (
    <div
      data-slot="kpi-card"
      className={cn('flex flex-col gap-2 rounded-xl border border-border bg-card p-4 shadow-sm', className)}
    >
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
      <div className="flex items-end justify-between gap-3">
        <p className="text-2xl font-bold leading-tight">{value}</p>
        {sparklineData && sparklineData.length > 0 && <Sparkline data={sparklineData} width={80} height={28} />}
      </div>
      {resolvedTrend !== undefined && (
        <div className={cn('flex items-center gap-1 text-xs font-medium', trendColor)}>
          <TrendIcon className="size-3.5" />
          {typeof delta === 'number' && (
            <span>
              {delta > 0 ? '+' : ''}
              {delta}%
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export { KPICard };
export type { KPITrend };
