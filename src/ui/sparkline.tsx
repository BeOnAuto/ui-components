"use client";

import * as React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

function Sparkline({
  data,
  color = '#3b82f6',
  height = 30,
  width = 120,
}: {
  data: Array<{ value: number }> | number[];
  color?: string;
  height?: number;
  width?: number;
}) {
  const normalized = Array.isArray(data)
    ? data.map((d, i) => (typeof d === 'number' ? { value: d, index: i } : { ...d, index: i }))
    : [];
  if (!normalized.length) return null;
  return (
    <div style={{ width, height }} data-slot="sparkline">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={normalized} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
          <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} dot={false} isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export { Sparkline };
