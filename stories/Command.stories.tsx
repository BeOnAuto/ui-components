import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Command',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

const workspaceItems = [
  { value: 'dashboard', label: 'Dashboard', group: 'Pages', iconName: 'Home' },
  { value: 'customers', label: 'Customers', group: 'Pages', iconName: 'Users' },
  { value: 'reports', label: 'Reports', group: 'Pages', iconName: 'BarChart3' },
  { value: 'settings', label: 'Settings', group: 'Pages', iconName: 'Settings' },
  { value: 'new-invoice', label: 'New invoice', group: 'Actions', iconName: 'FilePlus' },
  { value: 'invite-teammate', label: 'Invite teammate', group: 'Actions', iconName: 'UserPlus' },
  { value: 'export-data', label: 'Export data', group: 'Actions', iconName: 'Download' },
];

export const QuickActions: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'md', className: 'max-w-xl mx-auto p-4 sm:p-6' },
      children: [
        { type: 'Heading', props: { text: 'Quick actions', level: 'h3' } },
        { type: 'Text', props: { text: 'Search anywhere with ⌘K.', variant: 'muted' } },
        {
          type: 'Card',
          props: { className: 'max-w-xl' },
          children: [
            {
              type: 'Command',
              props: { items: workspaceItems, placeholder: 'Search or jump to…' },
            },
          ],
        },
      ],
    }),
};

export const PagesOnly: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'md', className: 'max-w-xl mx-auto p-4 sm:p-6' },
      children: [
        { type: 'Heading', props: { text: 'Jump to a page', level: 'h3' } },
        { type: 'Text', props: { text: 'Type a name or press ⌘K from anywhere.', variant: 'muted' } },
        {
          type: 'Card',
          props: { className: 'max-w-xl' },
          children: [
            {
              type: 'Command',
              props: {
                placeholder: 'Find a page…',
                items: [
                  { value: 'dashboard', label: 'Dashboard', group: 'Pages', iconName: 'Home' },
                  { value: 'customers', label: 'Customers', group: 'Pages', iconName: 'Users' },
                  { value: 'reports', label: 'Reports', group: 'Pages', iconName: 'BarChart3' },
                  { value: 'settings', label: 'Settings', group: 'Pages', iconName: 'Settings' },
                ],
              },
            },
          ],
        },
      ],
    }),
};

export const ActionsOnly: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'md', className: 'max-w-xl mx-auto p-4 sm:p-6' },
      children: [
        { type: 'Heading', props: { text: 'Run an action', level: 'h3' } },
        { type: 'Text', props: { text: 'Trigger common tasks without leaving the keyboard.', variant: 'muted' } },
        {
          type: 'Card',
          props: { className: 'max-w-xl' },
          children: [
            {
              type: 'Command',
              props: {
                placeholder: 'Search actions…',
                items: [
                  { value: 'new-invoice', label: 'New invoice', group: 'Actions', iconName: 'FilePlus' },
                  { value: 'invite-teammate', label: 'Invite teammate', group: 'Actions', iconName: 'UserPlus' },
                  { value: 'export-data', label: 'Export data', group: 'Actions', iconName: 'Download' },
                ],
              },
            },
          ],
        },
      ],
    }),
};
