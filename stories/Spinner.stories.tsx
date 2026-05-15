import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Spinner',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const Sizes: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Sizes', maxWidth: 'md', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'lg', align: 'center', justify: 'center' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Spinner', props: { size: 'sm' } },
                { type: 'Text', props: { text: 'sm', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Spinner', props: { size: 'md' } },
                { type: 'Text', props: { text: 'md', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Spinner', props: { size: 'lg' } },
                { type: 'Text', props: { text: 'lg', variant: 'caption' } },
              ],
            },
          ],
        },
      ],
    }),
};

export const LoadingWorkspace: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'md', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md', align: 'center', justify: 'center' },
          children: [
            { type: 'Spinner', props: { size: 'lg' } },
            { type: 'Text', props: { text: 'Loading workspace', variant: 'muted' } },
          ],
        },
      ],
    }),
};

export const SavingButton: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'md', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'sm', align: 'center', justify: 'center' },
          children: [
            {
              type: 'Button',
              props: { label: '', variant: 'primary', disabled: true },
              children: [
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', gap: 'sm', align: 'center' },
                  children: [
                    { type: 'Spinner', props: { size: 'sm' } },
                    { type: 'Text', props: { text: 'Saving', variant: 'body' } },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
};

export const SyncStatus: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Sync status', maxWidth: 'md', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'sm', align: 'center' },
              children: [
                { type: 'Spinner', props: { size: 'sm' } },
                { type: 'Text', props: { text: 'Syncing documents', variant: 'body' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'sm', align: 'center' },
              children: [
                { type: 'Spinner', props: { size: 'sm' } },
                { type: 'Text', props: { text: 'Indexing search', variant: 'body' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'sm', align: 'center' },
              children: [
                { type: 'Spinner', props: { size: 'sm' } },
                { type: 'Text', props: { text: 'Refreshing tokens', variant: 'body' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'sm', align: 'center' },
              children: [
                { type: 'Spinner', props: { size: 'sm' } },
                { type: 'Text', props: { text: 'Verifying integrations', variant: 'muted' } },
              ],
            },
          ],
        },
      ],
    }),
};
