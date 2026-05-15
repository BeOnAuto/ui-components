import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Popover',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const FieldHelper: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Workspace settings',
        description: 'Configure how teammates find and join this workspace.',
        maxWidth: 'lg',
        centered: true,
        className: 'mx-auto my-6',
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Field',
              props: { label: 'Workspace slug', required: true },
              children: [{ type: 'Input', props: { name: 'slug', placeholder: 'acme-design' } }],
            },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'sm', align: 'center' },
              children: [
                {
                  type: 'Field',
                  props: {
                    label: 'Allowed email domains',
                    description: 'Only people with these domains can auto-join.',
                  },
                  children: [{ type: 'Input', props: { name: 'domains', placeholder: 'acme.com, acme.io' } }],
                },
                {
                  type: 'Popover',
                  props: {
                    trigger: 'More info',
                    content:
                      'Comma-separate up to ten domains. Anyone signing up with a matching company email will skip the invite step and land directly in this workspace.',
                  },
                },
              ],
            },
            {
              type: 'Button',
              props: { label: 'Save changes', variant: 'primary' },
            },
          ],
        },
      ],
    }),
};

export const PricingFeature: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Team plan',
        description: 'Best for growing product teams who need shared workflows.',
        maxWidth: 'lg',
        centered: true,
        className: 'mx-auto my-6',
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Heading',
              props: { text: '$24 per seat / month', level: 'h2' },
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm' },
              children: [
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', gap: 'sm', align: 'center' },
                  children: [
                    { type: 'Icon', props: { name: 'Check', size: 'sm' } },
                    { type: 'Text', props: { text: 'Unlimited projects and viewers' } },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', gap: 'sm', align: 'center' },
                  children: [
                    { type: 'Icon', props: { name: 'Check', size: 'sm' } },
                    { type: 'Text', props: { text: 'SSO with Google and Microsoft' } },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', gap: 'sm', align: 'center' },
                  children: [
                    { type: 'Icon', props: { name: 'Check', size: 'sm' } },
                    { type: 'Text', props: { text: 'Audit log retention (90 days)' } },
                    {
                      type: 'Popover',
                      props: {
                        trigger: 'Why?',
                        content:
                          'We retain audit events for 90 rolling days on the Team plan. Enterprise customers can extend retention to 2 years and export events to S3 or a SIEM.',
                      },
                    },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', gap: 'sm', align: 'center' },
                  children: [
                    { type: 'Icon', props: { name: 'Check', size: 'sm' } },
                    { type: 'Text', props: { text: 'Priority email support' } },
                  ],
                },
              ],
            },
            {
              type: 'Button',
              props: { label: 'Start 14-day trial', variant: 'primary' },
            },
          ],
        },
      ],
    }),
};

export const SettingsRow: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Notifications',
        description: 'Choose how we reach you when things happen.',
        maxWidth: 'lg',
        centered: true,
        className: 'mx-auto my-6',
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'md', align: 'center', justify: 'between' },
              children: [
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', gap: 'sm', align: 'center' },
                  children: [
                    { type: 'Text', props: { text: 'Weekly digest' } },
                    {
                      type: 'Popover',
                      props: {
                        trigger: 'Help',
                        content:
                          'Every Monday at 9am local time we send a summary of overdue tasks, new comments, and projects nearing their due date.',
                      },
                    },
                  ],
                },
                { type: 'Switch', props: { label: '', checked: true } },
              ],
            },
            { type: 'Separator', props: { orientation: 'horizontal' } },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'md', align: 'center', justify: 'between' },
              children: [
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', gap: 'sm', align: 'center' },
                  children: [
                    { type: 'Text', props: { text: 'Mentions only' } },
                    {
                      type: 'Popover',
                      props: {
                        trigger: 'Help',
                        content:
                          'When enabled, we will only notify you when someone @-mentions you directly, ignoring activity on threads you are merely following.',
                      },
                    },
                  ],
                },
                { type: 'Switch', props: { label: '', checked: false } },
              ],
            },
            { type: 'Separator', props: { orientation: 'horizontal' } },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'md', align: 'center', justify: 'between' },
              children: [
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', gap: 'sm', align: 'center' },
                  children: [
                    { type: 'Text', props: { text: 'Do not disturb hours' } },
                    {
                      type: 'Popover',
                      props: {
                        trigger: 'Help',
                        content:
                          'During DND, push and email notifications are paused and held in a queue. Urgent mentions from your manager can still break through if you allow it.',
                      },
                    },
                  ],
                },
                { type: 'Switch', props: { label: '', checked: true } },
              ],
            },
          ],
        },
      ],
    }),
};

export const ToolbarActions: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Project board',
        description: 'Refine what is visible without leaving the board.',
        maxWidth: 'lg',
        centered: true,
        className: 'mx-auto my-6',
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'md', align: 'center' },
              children: [
                {
                  type: 'Popover',
                  props: {
                    trigger: 'Filters',
                    content:
                      'Narrow the board by owner, status, label, or due date. Active filters persist across sessions until you clear them.',
                  },
                },
                {
                  type: 'Popover',
                  props: {
                    trigger: 'Sort',
                    content:
                      'Order cards by priority, due date, or most recently updated. Sorting applies inside each column independently.',
                  },
                },
                {
                  type: 'Popover',
                  props: {
                    trigger: 'Share',
                    content:
                      'Copy a read-only link, invite people by email, or generate an embed snippet for your team wiki.',
                  },
                },
              ],
            },
            { type: 'Separator', props: { orientation: 'horizontal' } },
            {
              type: 'Text',
              props: {
                text: 'Showing 24 of 132 cards across 4 columns.',
                variant: 'muted',
              },
            },
          ],
        },
      ],
    }),
};
