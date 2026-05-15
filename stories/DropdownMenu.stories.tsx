import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'DropdownMenu',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode, initialState?: Record<string, unknown>) => (
  <JSONRender spec={spec} initialState={initialState} />
);

export const Default: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Customers', description: '128 results', maxWidth: 'md', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'sm', justify: 'between', align: 'center' },
          children: [
            { type: 'Text', props: { text: 'Showing newest first', variant: 'muted' } },
            {
              type: 'DropdownMenu',
              props: {
                label: 'Sort by',
                items: [
                  { label: 'Newest first', value: 'newest' },
                  { label: 'Oldest first', value: 'oldest' },
                  { label: 'Name (A–Z)', value: 'name-asc' },
                  { label: 'Name (Z–A)', value: 'name-desc' },
                ],
                value: 'newest',
              },
            },
          ],
        },
      ],
    }),
};

export const RowActions: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Invoice INV-2048', description: 'Due May 22, 2026', maxWidth: 'md', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'sm', justify: 'between', align: 'center' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'none' },
              children: [
                { type: 'Text', props: { text: 'Acme Corporation' } },
                { type: 'Text', props: { text: '$4,820.00 · Pending', variant: 'muted' } },
              ],
            },
            {
              type: 'DropdownMenu',
              props: {
                label: 'Row actions',
                items: [
                  { label: 'Edit', value: 'edit' },
                  { label: 'Duplicate', value: 'duplicate' },
                  { label: 'Archive', value: 'archive' },
                  { label: 'Delete', value: 'delete' },
                ],
              },
            },
          ],
        },
      ],
    }),
};

export const UserMenu: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'md', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'sm', justify: 'between', align: 'center' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'sm', align: 'center' },
              children: [
                { type: 'Avatar', props: { src: null, name: 'Maria Chen', size: 'md' } },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'none' },
                  children: [
                    { type: 'Text', props: { text: 'Maria Chen' } },
                    { type: 'Text', props: { text: 'maria@acme.co', variant: 'muted' } },
                  ],
                },
              ],
            },
            {
              type: 'DropdownMenu',
              props: {
                label: 'Account',
                items: [
                  { label: 'Profile', value: 'profile' },
                  { label: 'Billing', value: 'billing' },
                  { label: 'Settings', value: 'settings' },
                  { label: 'Sign out', value: 'signout' },
                ],
              },
            },
          ],
        },
      ],
    }),
};

export const BulkActions: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: '3 selected', description: 'Choose an action to apply', maxWidth: 'md', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'sm', align: 'center' },
          children: [
            {
              type: 'DropdownMenu',
              props: {
                label: 'Bulk actions',
                items: [
                  { label: 'Mark as paid', value: 'paid' },
                  { label: 'Send reminder', value: 'remind' },
                  { label: 'Export as CSV', value: 'export' },
                  { label: 'Archive selected', value: 'archive' },
                ],
              },
            },
            {
              type: 'DropdownMenu',
              props: {
                label: 'Density',
                items: [
                  { label: 'Compact', value: 'compact' },
                  { label: 'Comfortable', value: 'comfortable' },
                  { label: 'Spacious', value: 'spacious' },
                ],
                value: 'comfortable',
              },
            },
          ],
        },
      ],
    }),
};
