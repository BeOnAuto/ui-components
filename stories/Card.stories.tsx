import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Card',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const ProductCard: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Team Pro plan',
        description: 'Everything your team needs to ship faster, together',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Text',
          props: {
            text: 'Unlimited projects, role-based permissions, audit logs, and priority support from a real human within four business hours.',
          },
        },
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'sm', justify: 'start' },
          children: [
            { type: 'Button', props: { label: 'Upgrade team', variant: 'primary' } },
            { type: 'Button', props: { label: 'Compare plans', variant: 'secondary' } },
          ],
        },
      ],
    }),
};

export const SmallWidth: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Two-factor authentication',
        description: 'Add an extra layer of security to your account',
        maxWidth: 'sm',
        centered: true,
      },
      children: [
        {
          type: 'Text',
          props: { text: 'Scan the QR code with your authenticator app to finish enrolling this device.' },
        },
        {
          type: 'Button',
          props: { label: 'Set up authenticator', variant: 'primary' },
        },
      ],
    }),
};

export const MediumWidth: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Workspace settings',
        description: 'Control how your team appears across shared surfaces',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Text',
          props: {
            text: 'Update your workspace name, default timezone, and the branding shown on invoices, exports, and customer-facing emails.',
          },
        },
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'sm' },
          children: [
            { type: 'Button', props: { label: 'Save changes', variant: 'primary' } },
            { type: 'Button', props: { label: 'Discard', variant: 'secondary' } },
          ],
        },
      ],
    }),
};

export const LargeWidth: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Release notes — May 2026',
        description: 'A roundup of every shipped change across the platform',
        maxWidth: 'lg',
        centered: true,
      },
      children: [
        {
          type: 'Text',
          props: {
            text: 'We rewrote the deploy pipeline to cut average build times by 38 percent, shipped a refreshed audit log with filters and CSV export, and introduced granular per-environment secrets. Read on for the full breakdown of fixes and quality-of-life improvements.',
          },
        },
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'sm' },
          children: [
            { type: 'Button', props: { label: 'Read full changelog', variant: 'primary' } },
            { type: 'Button', props: { label: 'Subscribe to updates', variant: 'secondary' } },
          ],
        },
      ],
    }),
};

export const FullWidth: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'This week across your projects',
        description: 'A snapshot of activity since Monday morning',
        maxWidth: 'full',
      },
      children: [
        {
          type: 'Text',
          props: {
            text: 'Twelve deployments shipped to production, forty-seven pull requests merged across nine repositories, and three incidents fully resolved with post-mortems published to the team channel.',
          },
        },
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'sm' },
          children: [
            { type: 'Button', props: { label: 'Open dashboard', variant: 'primary' } },
            { type: 'Button', props: { label: 'Export report', variant: 'secondary' } },
          ],
        },
      ],
    }),
};

export const Centered: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Welcome back, Mia',
        description: 'Sign in to continue to your team workspace',
        maxWidth: 'sm',
        centered: true,
      },
      children: [
        {
          type: 'Text',
          props: { text: 'Use your work email and password. Single sign-on is available for enterprise workspaces.' },
        },
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm' },
          children: [
            { type: 'Button', props: { label: 'Continue with email', variant: 'primary' } },
            { type: 'Button', props: { label: 'Continue with SSO', variant: 'secondary' } },
          ],
        },
      ],
    }),
};

export const KpiGrid: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'md' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'none' },
          children: [
            { type: 'Heading', props: { text: 'Performance overview', level: 'h2' } },
            { type: 'Text', props: { text: 'Key metrics for the last 30 days', variant: 'muted' } },
          ],
        },
        {
          type: 'Grid',
          props: { columns: 3, gap: 'md' },
          children: [
            {
              type: 'Card',
              props: { title: 'Monthly revenue', description: 'Up 12.4% vs. last month', maxWidth: 'full' },
              children: [
                { type: 'Heading', props: { text: '$48,920', level: 'h2' } },
                { type: 'Text', props: { text: 'Across 1,284 active subscriptions', variant: 'muted' } },
              ],
            },
            {
              type: 'Card',
              props: { title: 'Active users', description: 'Up 4.1% vs. last month', maxWidth: 'full' },
              children: [
                { type: 'Heading', props: { text: '12,847', level: 'h2' } },
                { type: 'Text', props: { text: 'Signed in within the past 7 days', variant: 'muted' } },
              ],
            },
            {
              type: 'Card',
              props: { title: 'Avg. response time', description: 'Down 18ms vs. last month', maxWidth: 'full' },
              children: [
                { type: 'Heading', props: { text: '142ms', level: 'h2' } },
                { type: 'Text', props: { text: 'P95 across all production regions', variant: 'muted' } },
              ],
            },
          ],
        },
      ],
    }),
};
