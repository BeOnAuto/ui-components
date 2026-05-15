import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Drawer',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode, initialState?: Record<string, unknown>) => (
  <JSONRender spec={spec} initialState={initialState} />
);

const pageShell = (heading: string, blurb: string, triggerLabel: string, drawer: NestedNode): NestedNode => ({
  type: 'Card',
  props: { maxWidth: 'lg', centered: true },
  children: [
    {
      type: 'Stack',
      props: { direction: 'vertical', gap: 'md' },
      children: [
        { type: 'Heading', props: { text: heading, level: 'h2' } },
        { type: 'Text', props: { text: blurb, variant: 'muted' } },
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'sm', justify: 'start' },
          children: [{ type: 'Button', props: { label: triggerLabel, variant: 'secondary' } }],
        },
        drawer,
      ],
    },
  ],
});

export const FilterRecords: Story = {
  render: () =>
    renderSpec(
      pageShell(
        'Customer records',
        'Showing 248 customers across all workspaces.',
        'Open filters',
        {
          type: 'Drawer',
          props: {
            title: 'Filter records',
            description: 'Narrow results by owner, status, and timeframe.',
            openPath: '/drawer/open',
          },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'md' },
              children: [
                {
                  type: 'Field',
                  props: { label: 'Owner' },
                  children: [
                    {
                      type: 'Select',
                      props: {
                        options: ['Anyone', 'Maria Chen', 'Andre Lopes', 'You'],
                        value: 'Anyone',
                      },
                    },
                  ],
                },
                {
                  type: 'Field',
                  props: { label: 'Status' },
                  children: [
                    {
                      type: 'Select',
                      props: { options: ['Open', 'In review', 'Closed'], value: 'Open' },
                    },
                  ],
                },
                {
                  type: 'Field',
                  props: { label: 'Created within' },
                  children: [
                    {
                      type: 'Select',
                      props: {
                        options: ['Last 7 days', 'Last 30 days', 'Last quarter', 'All time'],
                        value: 'Last 30 days',
                      },
                    },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', gap: 'sm', justify: 'end' },
                  children: [
                    { type: 'Button', props: { label: 'Reset', variant: 'secondary' } },
                    { type: 'Button', props: { label: 'Apply filters', variant: 'primary' } },
                  ],
                },
              ],
            },
          ],
        },
      ),
      { drawer: { open: true } },
    ),
};

export const QuickActions: Story = {
  render: () =>
    renderSpec(
      pageShell(
        'Project dashboard',
        'Pinned actions for your team are one tap away.',
        'Show quick actions',
        {
          type: 'Drawer',
          props: {
            title: 'Quick actions',
            description: 'Run a command without leaving this page.',
            openPath: '/drawer/open',
          },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'md' },
              children: [
                { type: 'Button', props: { label: 'Create new project', variant: 'primary' } },
                { type: 'Button', props: { label: 'Invite teammate', variant: 'secondary' } },
                { type: 'Button', props: { label: 'Open command palette', variant: 'secondary' } },
                { type: 'Button', props: { label: 'View activity log', variant: 'secondary' } },
              ],
            },
          ],
        },
      ),
      { drawer: { open: true } },
    ),
};

export const MobileSettings: Story = {
  render: () =>
    renderSpec(
      pageShell(
        'Account',
        'Tap the gear to tweak how the app behaves on this device.',
        'Open settings',
        {
          type: 'Drawer',
          props: {
            title: 'Display & notifications',
            description: 'Changes apply to this device only.',
            openPath: '/drawer/open',
          },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'md' },
              children: [
                { type: 'Switch', props: { label: 'Dark mode', checked: true } },
                { type: 'Switch', props: { label: 'Compact layout', checked: false } },
                { type: 'Switch', props: { label: 'Push notifications', checked: true } },
                { type: 'Switch', props: { label: 'Weekly summary email', checked: false } },
                { type: 'Separator', props: { orientation: 'horizontal' } },
                {
                  type: 'Field',
                  props: { label: 'Language' },
                  children: [
                    {
                      type: 'Select',
                      props: {
                        options: ['English (US)', 'English (UK)', 'Deutsch', 'Français', '日本語'],
                        value: 'English (US)',
                      },
                    },
                  ],
                },
                { type: 'Button', props: { label: 'Save changes', variant: 'primary' } },
              ],
            },
          ],
        },
      ),
      { drawer: { open: true } },
    ),
};
