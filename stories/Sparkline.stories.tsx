import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Sparkline',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

const revenueTrend = [18420, 18960, 19310, 19180, 19840, 20510, 21240, 22060, 22730, 23410, 23980, 24580];
const upwardTrend = [120, 134, 142, 158, 167, 181, 195, 212, 228, 247, 268, 294];
const downwardTrend = [842, 821, 796, 758, 731, 712, 684, 651, 622, 598, 571, 549];
const flatTrend = [312, 318, 309, 314, 316, 311, 315, 313, 317, 310, 314, 312];
const mrrTrend = [
  41200, 42150, 43080, 43620, 44510, 45380, 46240, 47010, 47860, 48590, 49340, 50120,
];
const churnTrend = [3.8, 3.7, 3.9, 3.6, 3.5, 3.4, 3.3, 3.2, 3.1, 3.0, 2.9, 2.8];

export const Default: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Weekly active users',
        description: 'Trailing 12 weeks',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Sparkline',
          props: { data: upwardTrend, color: '#16a34a', width: 320, height: 72 },
        },
        { type: 'Text', props: { text: 'Up 145% since February', variant: 'muted' } },
      ],
    }),
};

export const RevenueMetric: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Revenue',
        description: 'Month to date',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm' },
          children: [
            { type: 'Heading', props: { text: '$24,580', level: 'h1' } },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'sm', align: 'center' },
              children: [
                { type: 'Badge', props: { text: '+33.4%', variant: 'default' } },
                { type: 'Text', props: { text: 'vs. previous period', variant: 'muted' } },
              ],
            },
            {
              type: 'Sparkline',
              props: { data: revenueTrend, color: '#16a34a', width: 360, height: 80 },
            },
          ],
        },
      ],
    }),
};

export const MetricTiles: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'md' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'none' },
          children: [
            { type: 'Heading', props: { text: 'Today at a glance', level: 'h2' } },
            { type: 'Text', props: { text: 'Trailing 12 weeks across core metrics', variant: 'muted' } },
          ],
        },
        {
          type: 'Grid',
          props: { columns: 3, gap: 'md' },
          children: [
            {
              type: 'Card',
              props: { title: 'New signups', description: 'Up 145%', maxWidth: 'full' },
              children: [
                { type: 'Heading', props: { text: '294', level: 'h2' } },
                {
                  type: 'Sparkline',
                  props: { data: upwardTrend, color: '#16a34a', width: 220, height: 56 },
                },
              ],
            },
            {
              type: 'Card',
              props: { title: 'Support tickets', description: 'Down 35%', maxWidth: 'full' },
              children: [
                { type: 'Heading', props: { text: '549', level: 'h2' } },
                {
                  type: 'Sparkline',
                  props: { data: downwardTrend, color: '#dc2626', width: 220, height: 56 },
                },
              ],
            },
            {
              type: 'Card',
              props: { title: 'API latency', description: 'Holding steady', maxWidth: 'full' },
              children: [
                { type: 'Heading', props: { text: '312ms', level: 'h2' } },
                {
                  type: 'Sparkline',
                  props: { data: flatTrend, color: '#6b7280', width: 220, height: 56 },
                },
              ],
            },
          ],
        },
      ],
    }),
};

export const Comparison: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'MRR vs. churn',
        description: 'Last 12 months',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'lg' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm' },
              children: [
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', gap: 'sm', justify: 'between', align: 'center' },
                  children: [
                    { type: 'Text', props: { text: 'Monthly recurring revenue', variant: 'muted' } },
                    { type: 'Heading', props: { text: '$50,120', level: 'h3' } },
                  ],
                },
                {
                  type: 'Sparkline',
                  props: { data: mrrTrend, color: '#16a34a', width: 360, height: 64 },
                },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm' },
              children: [
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', gap: 'sm', justify: 'between', align: 'center' },
                  children: [
                    { type: 'Text', props: { text: 'Customer churn', variant: 'muted' } },
                    { type: 'Heading', props: { text: '2.8%', level: 'h3' } },
                  ],
                },
                {
                  type: 'Sparkline',
                  props: { data: churnTrend, color: '#dc2626', width: 360, height: 64 },
                },
              ],
            },
          ],
        },
      ],
    }),
};

export const Downtrend: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Page load time',
        description: 'P95 across regions, last 12 weeks',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm' },
          children: [
            { type: 'Heading', props: { text: '549ms', level: 'h1' } },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'sm', align: 'center' },
              children: [
                { type: 'Badge', props: { text: '-35%', variant: 'secondary' } },
                { type: 'Text', props: { text: 'faster than last quarter', variant: 'muted' } },
              ],
            },
            {
              type: 'Sparkline',
              props: { data: downwardTrend, color: '#dc2626', width: 360, height: 80 },
            },
          ],
        },
      ],
    }),
};
