import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Chart',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

const monthlyRevenue = [
  { month: 'Jan', revenue: 42400, mrr: 38200 },
  { month: 'Feb', revenue: 48800, mrr: 41900 },
  { month: 'Mar', revenue: 51200, mrr: 44400 },
  { month: 'Apr', revenue: 49100, mrr: 46100 },
  { month: 'May', revenue: 57400, mrr: 49200 },
  { month: 'Jun', revenue: 62100, mrr: 52400 },
];

const weeklySignups = [
  { week: 'W1', signups: 320, activations: 210 },
  { week: 'W2', signups: 410, activations: 268 },
  { week: 'W3', signups: 385, activations: 252 },
  { week: 'W4', signups: 472, activations: 318 },
  { week: 'W5', signups: 528, activations: 364 },
  { week: 'W6', signups: 491, activations: 342 },
  { week: 'W7', signups: 604, activations: 421 },
  { week: 'W8', signups: 672, activations: 478 },
];

const activeUsers = [
  { day: 'Mon', users: 8420 },
  { day: 'Tue', users: 9180 },
  { day: 'Wed', users: 9640 },
  { day: 'Thu', users: 10210 },
  { day: 'Fri', users: 11480 },
  { day: 'Sat', users: 9820 },
  { day: 'Sun', users: 8960 },
];

const channelBreakdown = [
  { channel: 'Organic', sessions: 4820 },
  { channel: 'Paid', sessions: 2140 },
  { channel: 'Referral', sessions: 1380 },
  { channel: 'Email', sessions: 920 },
  { channel: 'Social', sessions: 640 },
];

export const Line: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Monthly revenue',
        description: 'Revenue and MRR over the last 6 months',
        maxWidth: 'lg',
      },
      children: [
        {
          type: 'Chart',
          props: {
            variant: 'line',
            data: monthlyRevenue,
            xKey: 'month',
            yKeys: [
              { key: 'revenue', label: 'Revenue', color: '#2563eb' },
              { key: 'mrr', label: 'MRR', color: '#0ea5e9' },
            ],
            height: 280,
          },
        },
      ],
    }),
};

export const Bar: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Signups by week',
        description: 'New signups and activations this quarter',
        maxWidth: 'lg',
      },
      children: [
        {
          type: 'Chart',
          props: {
            variant: 'bar',
            data: weeklySignups,
            xKey: 'week',
            yKeys: [
              { key: 'signups', label: 'Signups', color: '#16a34a' },
              { key: 'activations', label: 'Activations', color: '#0d9488' },
            ],
            height: 300,
          },
        },
      ],
    }),
};

export const Area: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Active users',
        description: 'Daily active users this week',
        maxWidth: 'lg',
      },
      children: [
        {
          type: 'Chart',
          props: {
            variant: 'area',
            data: activeUsers,
            xKey: 'day',
            yKeys: [{ key: 'users', label: 'Active users', color: '#7c3aed' }],
            height: 280,
          },
        },
      ],
    }),
};

export const Pie: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Traffic by channel',
        description: 'Sessions by acquisition channel this quarter',
        maxWidth: 'lg',
      },
      children: [
        {
          type: 'Chart',
          props: {
            variant: 'pie',
            data: channelBreakdown,
            xKey: 'channel',
            yKeys: [{ key: 'sessions', label: 'Sessions' }],
            height: 300,
          },
        },
      ],
    }),
};

export const Dashboard: Story = {
  render: () =>
    renderSpec({
      type: 'Grid',
      props: { columns: 2, gap: 'lg' },
      children: [
        {
          type: 'Card',
          props: {
            title: 'Monthly revenue',
            description: 'Last 6 months',
            maxWidth: 'full',
          },
          children: [
            {
              type: 'Chart',
              props: {
                variant: 'line',
                data: monthlyRevenue,
                xKey: 'month',
                yKeys: [
                  { key: 'revenue', label: 'Revenue', color: '#2563eb' },
                  { key: 'mrr', label: 'MRR', color: '#0ea5e9' },
                ],
                height: 240,
              },
            },
          ],
        },
        {
          type: 'Card',
          props: {
            title: 'Signups by channel',
            description: 'This quarter',
            maxWidth: 'full',
          },
          children: [
            {
              type: 'Chart',
              props: {
                variant: 'pie',
                data: channelBreakdown,
                xKey: 'channel',
                yKeys: [{ key: 'sessions', label: 'Sessions' }],
                height: 240,
              },
            },
          ],
        },
      ],
    }),
};
