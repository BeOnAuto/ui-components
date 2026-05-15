import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Badge',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const Default: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Order #A-2041', description: 'Awaiting fulfillment from the Brooklyn warehouse.', maxWidth: 'md', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'sm', align: 'center' },
          children: [{ type: 'Badge', props: { text: 'Paid' } }],
        },
      ],
    }),
};

export const Variants: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Badge variants', description: 'Four visual treatments for status and metadata.', maxWidth: 'md', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'sm', align: 'center' },
          children: [
            { type: 'Badge', props: { text: 'Active', variant: 'default' } },
            { type: 'Badge', props: { text: 'Draft', variant: 'secondary' } },
            { type: 'Badge', props: { text: 'Failed', variant: 'destructive' } },
            { type: 'Badge', props: { text: 'Beta', variant: 'outline' } },
          ],
        },
      ],
    }),
};

export const TagBar: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Acme handbook', description: 'Filter by team, status, and program.', maxWidth: 'lg', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'sm', align: 'center' },
          children: [
            { type: 'Badge', props: { text: 'Design' } },
            { type: 'Badge', props: { text: 'Engineering' } },
            { type: 'Badge', props: { text: 'Product' } },
            { type: 'Badge', props: { text: 'Sales' } },
            { type: 'Badge', props: { text: 'Support' } },
            { type: 'Badge', props: { text: 'Critical', variant: 'destructive' } },
            { type: 'Badge', props: { text: 'Beta', variant: 'outline' } },
          ],
        },
      ],
    }),
};

export const IssueCard: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Issue #482',
        description: 'Tap targets on the checkout sheet are below 44px on smaller iPhones.',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md', align: 'stretch' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'sm', align: 'center' },
              children: [
                { type: 'Badge', props: { text: 'Bug', variant: 'destructive' } },
                { type: 'Badge', props: { text: 'P1' } },
                { type: 'Badge', props: { text: 'In review', variant: 'secondary' } },
                { type: 'Badge', props: { text: 'iOS', variant: 'outline' } },
              ],
            },
            {
              type: 'Text',
              props: {
                text: 'Reported by Priya from Support. Reproduces on iPhone SE and 13 mini in Safari and the in-app browser.',
                variant: 'muted',
              },
            },
          ],
        },
      ],
    }),
};
