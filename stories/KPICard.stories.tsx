import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'KPICard',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

const revenueSparkline = [32100, 33400, 34200, 35900, 37100, 39800, 41200, 43500, 45800, 48210];
const usersSparkline = [9120, 9480, 9710, 10240, 10860, 11320, 11780, 12110, 12480, 12847];
const conversionSparkline = [2.1, 2.3, 2.2, 2.5, 2.6, 2.4, 2.7, 2.9, 3.1, 3.2];
const npsSparkline = [62, 60, 58, 57, 59, 56, 55, 54, 53, 51];
const signupsSparkline = [142, 168, 184, 201, 226, 248, 271, 294, 312, 338];
const activationsSparkline = [58, 61, 64, 63, 67, 70, 72, 74, 76, 78];
const retentionSparkline = [88, 88, 87, 87, 86, 86, 86, 86, 85, 85];

export const Dashboard: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'lg' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'none' },
          children: [
            { type: 'Heading', props: { text: 'Overview', level: 'h2' } },
            { type: 'Text', props: { text: 'Last 30 days', variant: 'muted' } },
          ],
        },
        {
          type: 'Grid',
          props: { columns: 4, gap: 'md' },
          children: [
            {
              type: 'KPICard',
              props: {
                label: 'Revenue',
                value: '$48,210',
                delta: 12.4,
                trend: 'up',
                sparklineData: revenueSparkline,
              },
            },
            {
              type: 'KPICard',
              props: {
                label: 'Active users',
                value: '12,847',
                delta: 8.2,
                trend: 'up',
                sparklineData: usersSparkline,
              },
            },
            {
              type: 'KPICard',
              props: {
                label: 'Conversion',
                value: '3.2%',
                delta: 0.4,
                trend: 'up',
                sparklineData: conversionSparkline,
              },
            },
            {
              type: 'KPICard',
              props: {
                label: 'NPS',
                value: 51,
                delta: -4.1,
                trend: 'down',
                sparklineData: npsSparkline,
              },
            },
          ],
        },
      ],
    }),
};

export const GrowthSnapshot: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'lg' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'none' },
          children: [
            { type: 'Heading', props: { text: 'Growth', level: 'h2' } },
            { type: 'Text', props: { text: 'Funnel health, last 30 days', variant: 'muted' } },
          ],
        },
        {
          type: 'Grid',
          props: { columns: 3, gap: 'md' },
          children: [
            {
              type: 'KPICard',
              props: {
                label: 'Signups',
                value: '3,382',
                delta: 18.6,
                trend: 'up',
                sparklineData: signupsSparkline,
              },
            },
            {
              type: 'KPICard',
              props: {
                label: 'Activations',
                value: '78%',
                delta: 3.1,
                trend: 'up',
                sparklineData: activationsSparkline,
              },
            },
            {
              type: 'KPICard',
              props: {
                label: 'Retention',
                value: '85%',
                delta: 0,
                trend: 'flat',
                sparklineData: retentionSparkline,
              },
            },
          ],
        },
      ],
    }),
};

export const Standalone: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'sm', centered: true },
      children: [
        {
          type: 'KPICard',
          props: {
            label: 'Monthly recurring revenue',
            value: '$48,210',
            delta: 12.4,
            trend: 'up',
            sparklineData: revenueSparkline,
          },
        },
      ],
    }),
};

export const PositiveTrend: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'sm', centered: true },
      children: [
        {
          type: 'KPICard',
          props: {
            label: 'Active users',
            value: '12,847',
            delta: 8.2,
            trend: 'up',
            sparklineData: usersSparkline,
          },
        },
      ],
    }),
};

export const NegativeTrend: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'sm', centered: true },
      children: [
        {
          type: 'KPICard',
          props: {
            label: 'NPS',
            value: 51,
            delta: -4.1,
            trend: 'down',
            sparklineData: npsSparkline,
          },
        },
      ],
    }),
};

export const FlatTrend: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'sm', centered: true },
      children: [
        {
          type: 'KPICard',
          props: {
            label: 'Retention',
            value: '85%',
            delta: 0,
            trend: 'flat',
            sparklineData: retentionSparkline,
          },
        },
      ],
    }),
};
