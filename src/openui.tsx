"use client";

import * as React from 'react';

import { cn } from './lib/utils';
import { Chart, type ChartSeries, type ChartVariant } from './ui/chart';
import { KPICard, type KPITrend } from './ui/kpi-card';
import { Sparkline } from './ui/sparkline';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from './ui/table';
import { normalizeColumnSpec } from './normalize-column-spec';

export type OpenUiRawProps = Record<string, unknown>;

export function OpenUiKPICard({ props }: { props: OpenUiRawProps }) {
  const rawValue = props.value;
  const value = typeof rawValue === 'string' || typeof rawValue === 'number' ? rawValue : '';
  const trend = props.trend === 'up' || props.trend === 'down' || props.trend === 'flat' ? props.trend : undefined;
  return (
    <KPICard
      label={str(props.label ?? props.title) ?? ''}
      value={value}
      delta={num(props.delta)}
      trend={trend as KPITrend | undefined}
      sparklineData={asSparklineData(props.sparklineData ?? props.sparkline ?? props.data)}
      className={str(props.className)}
    />
  );
}

export function OpenUiSparkline({ props }: { props: OpenUiRawProps }) {
  return (
    <Sparkline
      data={asSparklineData(props.data ?? props.values) ?? []}
      color={str(props.color) ?? '#3b82f6'}
      height={num(props.height) ?? 30}
      width={num(props.width) ?? 120}
    />
  );
}

export function OpenUiChart({ props }: { props: OpenUiRawProps }) {
  const data = Array.isArray(props.data) ? props.data.filter(isRecord) : [];
  const yKeys = normalizeChartSeries(props.yKeys ?? props.yKey);
  return (
    <Chart
      variant={normalizeChartVariant(props.variant)}
      data={data}
      xKey={str(props.xKey) ?? inferChartXKey(data)}
      yKeys={yKeys}
      height={num(props.height) ?? 260}
      className={str(props.className)}
    />
  );
}

export function OpenUiDataTable({ props }: { props: OpenUiRawProps }) {
  const rows = Array.isArray(props.rows ?? props.data) ? ((props.rows ?? props.data) as unknown[]).filter(isRecord) : [];
  const columns = normalizeOpenUiColumns(props.columns, rows);
  return (
    <div className={cn('w-full rounded-md border border-border', str(props.className))}>
      <div className="w-full overflow-x-auto">
        <Table>
          {str(props.caption) && <TableCaption>{str(props.caption)}</TableCaption>}
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.key}>{column.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length > 0 ? (
              rows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((column, columnIndex) => (
                    <TableCell key={column.key}>{renderTableCell(row[column.key] ?? row[column.label] ?? row[columnIndex], column.type)}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={Math.max(columns.length, 1)} className="h-20 text-center text-muted-foreground">
                  No rows
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

type OpenUiColumn = {
  key: string;
  label: string;
  type: 'text' | 'number' | 'date' | 'badge';
};

function normalizeOpenUiColumns(value: unknown, rows: Array<Record<string, unknown>>): OpenUiColumn[] {
  if (Array.isArray(value) && value.length > 0) {
    return value.map((item) => {
      if (typeof item === 'string') return { key: item, label: item, type: 'text' };
      if (isRecord(item)) return normalizeColumnSpec(item);
      const key = String(item);
      return { key, label: key, type: 'text' };
    });
  }
  const first = rows[0];
  if (!first) return [];
  return Object.keys(first).map((key) => ({ key, label: key, type: 'text' }));
}

function renderTableCell(value: unknown, type: OpenUiColumn['type']): React.ReactNode {
  if (value === null || value === undefined) return '';
  if (type === 'badge') return <Badge variant="secondary">{String(value)}</Badge>;
  if (type === 'number' && typeof value === 'number') return value.toLocaleString();
  return String(value);
}

function normalizeChartVariant(value: unknown): ChartVariant {
  return value === 'bar' || value === 'area' || value === 'pie' || value === 'line' ? value : 'line';
}

function normalizeChartSeries(value: unknown): (ChartSeries | string)[] | undefined {
  if (typeof value === 'string') return [value];
  if (!Array.isArray(value) || value.length === 0) return undefined;
  return value
    .map((item, index): ChartSeries | string | null => {
      if (typeof item === 'string') return item;
      if (!isRecord(item)) return null;
      const key = str(item.key ?? item.dataKey ?? item.value);
      if (!key) return null;
      return {
        key,
        label: str(item.label ?? item.name) ?? key,
        color: str(item.color) ?? undefined,
      };
    })
    .filter((item): item is ChartSeries | string => item !== null);
}

function inferChartXKey(rows: Array<Record<string, unknown>>): string {
  const first = rows[0];
  if (!first) return 'name';
  return ['name', 'label', 'day', 'date', 'month', 'week', 'x'].find((key) => key in first) ?? Object.keys(first)[0] ?? 'name';
}

function asSparklineData(value: unknown): Array<{ value: number }> | number[] | undefined {
  if (!Array.isArray(value) || value.length === 0) return undefined;
  if (typeof value[0] === 'number') return value.filter((item): item is number => typeof item === 'number');
  const rows = value.filter(isRecord);
  const normalized = rows
    .map((item) => item.value ?? item.y ?? item.count)
    .filter((item): item is number => typeof item === 'number')
    .map((item) => ({ value: item }));
  return normalized.length > 0 ? normalized : undefined;
}

function str(value: unknown): string | undefined {
  return typeof value === 'string' ? value : undefined;
}

function num(value: unknown): number | undefined {
  if (typeof value === 'number') return value;
  if (typeof value !== 'string') return undefined;
  const parsed = Number(value.replace('%', ''));
  return Number.isFinite(parsed) ? parsed : undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}
