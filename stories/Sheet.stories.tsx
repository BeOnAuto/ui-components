import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Sheet',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode, initialState?: Record<string, unknown>) => (
  <JSONRender spec={spec} initialState={initialState} />
);

const underlyingPage = (sheet: NestedNode): NestedNode => ({
  type: 'Stack',
  props: { direction: 'vertical', gap: 'lg', align: 'center', className: 'p-6 min-h-screen bg-muted/30' },
  children: [
    {
      type: 'Card',
      props: { title: 'Account settings', description: 'Manage your profile, workspace, and notifications.', maxWidth: 'lg', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'md', align: 'center' },
              children: [
                { type: 'Avatar', props: { name: 'Avery Holt', size: 'lg' } },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'none' },
                  children: [
                    { type: 'Heading', props: { text: 'Avery Holt', level: 'h3' } },
                    { type: 'Text', props: { text: 'Product designer at Northwind', variant: 'muted' } },
                  ],
                },
              ],
            },
            { type: 'Separator', props: { orientation: 'horizontal' } },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'sm', justify: 'end' },
              children: [
                { type: 'Button', props: { label: 'Open sheet', variant: 'primary' } },
              ],
            },
          ],
        },
      ],
    },
    sheet,
  ],
});

export const Right: Story = {
  render: () =>
    renderSpec(
      underlyingPage({
        type: 'Sheet',
        props: {
          title: 'Edit profile',
          description: 'Update your public details. Changes save when you submit.',
          side: 'right',
          openPath: '/sheet/open',
        },
        children: [
          {
            type: 'Stack',
            props: { direction: 'vertical', gap: 'md' },
            children: [
              {
                type: 'Field',
                props: { label: 'Full name', required: true },
                children: [{ type: 'Input', props: { name: 'name', value: 'Avery Holt', placeholder: 'Your name' } }],
              },
              {
                type: 'Field',
                props: { label: 'Email', description: 'Used for sign-in and notifications.', required: true },
                children: [{ type: 'Input', props: { name: 'email', type: 'email', value: 'avery@northwind.co' } }],
              },
              {
                type: 'Field',
                props: { label: 'Role' },
                children: [
                  { type: 'Select', props: { name: 'role', options: ['Owner', 'Admin', 'Member', 'Guest'], value: 'Admin' } },
                ],
              },
              {
                type: 'Field',
                props: { label: 'Bio', description: 'Max 200 characters.' },
                children: [
                  {
                    type: 'Textarea',
                    props: {
                      name: 'bio',
                      rows: 4,
                      value: 'Designing interfaces that feel calm and obvious.',
                      placeholder: 'Tell teammates about yourself',
                    },
                  },
                ],
              },
              {
                type: 'Stack',
                props: { direction: 'horizontal', gap: 'sm', justify: 'end' },
                children: [
                  { type: 'Button', props: { label: 'Cancel', variant: 'secondary' } },
                  { type: 'Button', props: { label: 'Save changes', variant: 'primary' } },
                ],
              },
            ],
          },
        ],
      }),
      { sheet: { open: true } },
    ),
};

export const Left: Story = {
  render: () =>
    renderSpec(
      underlyingPage({
        type: 'Sheet',
        props: {
          title: 'Workspace',
          description: 'Northwind Studio',
          side: 'left',
          openPath: '/sheet/open',
        },
        children: [
          {
            type: 'Stack',
            props: { direction: 'vertical', gap: 'md' },
            children: [
              {
                type: 'Stack',
                props: { direction: 'vertical', gap: 'sm' },
                children: [
                  { type: 'Text', props: { text: 'MAIN', variant: 'caption' } },
                  { type: 'Link', props: { label: 'Dashboard', href: '/' } },
                  { type: 'Link', props: { label: 'Projects', href: '/projects' } },
                  { type: 'Link', props: { label: 'Inbox', href: '/inbox' } },
                  { type: 'Link', props: { label: 'Reports', href: '/reports' } },
                ],
              },
              { type: 'Separator', props: { orientation: 'horizontal' } },
              {
                type: 'Stack',
                props: { direction: 'vertical', gap: 'sm' },
                children: [
                  { type: 'Text', props: { text: 'WORKSPACE', variant: 'caption' } },
                  { type: 'Link', props: { label: 'Team', href: '/team' } },
                  { type: 'Link', props: { label: 'Billing', href: '/billing' } },
                  { type: 'Link', props: { label: 'Settings', href: '/settings' } },
                ],
              },
              { type: 'Separator', props: { orientation: 'horizontal' } },
              {
                type: 'Stack',
                props: { direction: 'horizontal', gap: 'sm', align: 'center' },
                children: [
                  { type: 'Avatar', props: { name: 'Avery Holt', size: 'sm' } },
                  {
                    type: 'Stack',
                    props: { direction: 'vertical', gap: 'none' },
                    children: [
                      { type: 'Text', props: { text: 'Avery Holt', variant: 'body' } },
                      { type: 'Text', props: { text: 'avery@northwind.co', variant: 'muted' } },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      }),
      { sheet: { open: true } },
    ),
};

export const Top: Story = {
  render: () =>
    renderSpec(
      underlyingPage({
        type: 'Sheet',
        props: {
          title: 'Notifications',
          description: '3 unread updates from your workspace.',
          side: 'top',
          openPath: '/sheet/open',
        },
        children: [
          {
            type: 'Stack',
            props: { direction: 'vertical', gap: 'md' },
            children: [
              {
                type: 'Callout',
                props: {
                  variant: 'info',
                  title: 'Maya commented on Onboarding flow v3',
                  description: 'Love this direction. Can we tighten the spacing on the welcome step?',
                  iconName: 'MessageCircle',
                },
              },
              {
                type: 'Callout',
                props: {
                  variant: 'success',
                  title: 'Deploy succeeded',
                  description: 'Production build 1.42.0 went live 4 minutes ago.',
                  iconName: 'CheckCircle2',
                },
              },
              {
                type: 'Callout',
                props: {
                  variant: 'warning',
                  title: 'Storage at 86%',
                  description: 'You will hit the workspace cap in roughly 8 days at current pace.',
                  iconName: 'TriangleAlert',
                },
              },
              {
                type: 'Stack',
                props: { direction: 'horizontal', gap: 'sm', justify: 'end' },
                children: [
                  { type: 'Button', props: { label: 'Mark all read', variant: 'secondary' } },
                  { type: 'Button', props: { label: 'View inbox', variant: 'primary' } },
                ],
              },
            ],
          },
        ],
      }),
      { sheet: { open: true } },
    ),
};

export const Bottom: Story = {
  render: () =>
    renderSpec(
      underlyingPage({
        type: 'Sheet',
        props: {
          title: 'Filters',
          description: 'Refine the project list.',
          side: 'bottom',
          openPath: '/sheet/open',
        },
        children: [
          {
            type: 'Stack',
            props: { direction: 'vertical', gap: 'md' },
            children: [
              {
                type: 'Field',
                props: { label: 'Status' },
                children: [
                  {
                    type: 'ToggleGroup',
                    props: {
                      type: 'multiple',
                      items: [
                        { label: 'Active', value: 'active' },
                        { label: 'On hold', value: 'hold' },
                        { label: 'Archived', value: 'archived' },
                      ],
                    },
                  },
                ],
              },
              {
                type: 'Field',
                props: { label: 'Owner' },
                children: [
                  {
                    type: 'Select',
                    props: { name: 'owner', options: ['Anyone', 'Avery Holt', 'Maya Singh', 'Jordan Reyes'], value: 'Anyone' },
                  },
                ],
              },
              {
                type: 'Field',
                props: { label: 'Budget range', description: '$0 to $50k' },
                children: [{ type: 'Slider', props: { min: 0, max: 50000, step: 500, value: 18000 } }],
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
      }),
      { sheet: { open: true } },
    ),
};
