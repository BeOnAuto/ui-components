"use client";

import * as React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { cn } from '../lib/utils';

export type ChartVariant = 'line' | 'bar' | 'area' | 'pie';

export interface ChartSeries {
  key: string;
  label?: string;
  color?: string;
}

const DEFAULT_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'];

function Chart({
  variant = 'line',
  data,
  xKey = 'name',
  yKeys,
  height = 260,
  className,
}: {
  variant?: ChartVariant;
  data: Array<Record<string, unknown>>;
  xKey?: string;
  yKeys?: (ChartSeries | string)[];
  height?: number;
  className?: string;
}) {
  // Normalize yKeys: the LLM often passes plain strings (["count", "revenue"])
  // instead of ChartSeries objects ({ key: "count" }). Handle both forms.
  const normalizedYKeys: ChartSeries[] | undefined =
    yKeys && yKeys.length > 0
      ? yKeys.map((k, i) =>
          typeof k === 'string' ? { key: k, label: k, color: DEFAULT_COLORS[i % DEFAULT_COLORS.length] } : k,
        )
      : undefined;

  const series: ChartSeries[] =
    normalizedYKeys && normalizedYKeys.length > 0
      ? normalizedYKeys
      : data && data[0]
        ? Object.keys(data[0])
            .filter((k) => k !== xKey && typeof (data[0] as Record<string, unknown>)[k] === 'number')
            .map((k, i) => ({ key: k, label: k, color: DEFAULT_COLORS[i % DEFAULT_COLORS.length] }))
        : [];

  return (
    <div data-slot="chart" className={cn('w-full', className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        {renderChart(variant, data, xKey, series)}
      </ResponsiveContainer>
    </div>
  );
}

function renderChart(
  variant: ChartVariant,
  data: Array<Record<string, unknown>>,
  xKey: string,
  series: ChartSeries[],
): React.ReactElement {
  if (variant === 'pie') {
    const first = series[0];
    const dataKey = first?.key ?? 'value';
    return (
      <PieChart>
        <RechartsTooltip />
        <Legend />
        <Pie
          data={data}
          dataKey={dataKey}
          nameKey={xKey}
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
          isAnimationActive={false}
        >
          {data.map((_entry, i) => (
            <Cell key={`cell-${i}`} fill={DEFAULT_COLORS[i % DEFAULT_COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }

  if (variant === 'bar') {
    return (
      <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey={xKey} fontSize={12} />
        <YAxis fontSize={12} />
        <RechartsTooltip />
        <Legend />
        {series.map((s, i) => (
          <Bar
            key={s.key}
            dataKey={s.key}
            name={s.label ?? s.key}
            fill={s.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]}
            isAnimationActive={false}
          />
        ))}
      </BarChart>
    );
  }

  if (variant === 'area') {
    return (
      <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey={xKey} fontSize={12} />
        <YAxis fontSize={12} />
        <RechartsTooltip />
        <Legend />
        {series.map((s, i) => (
          <Area
            key={s.key}
            type="monotone"
            dataKey={s.key}
            name={s.label ?? s.key}
            stroke={s.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]}
            fill={s.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]}
            fillOpacity={0.3}
            isAnimationActive={false}
          />
        ))}
      </AreaChart>
    );
  }

  // line
  return (
    <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
      <XAxis dataKey={xKey} fontSize={12} />
      <YAxis fontSize={12} />
      <RechartsTooltip />
      <Legend />
      {series.map((s, i) => (
        <Line
          key={s.key}
          type="monotone"
          dataKey={s.key}
          name={s.label ?? s.key}
          stroke={s.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]}
          strokeWidth={2}
          dot={false}
          isAnimationActive={false}
        />
      ))}
    </LineChart>
  );
}

export { Chart };
