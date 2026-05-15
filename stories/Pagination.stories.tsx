import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Pagination',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode, initialState?: Record<string, unknown>) => (
  <JSONRender spec={spec} initialState={initialState} />
);

const tableFooter = (
  heading: string,
  summary: string,
  totalPages: number,
  page: number,
): NestedNode => ({
  type: 'Card',
  props: { className: 'max-w-3xl mx-auto m-4' },
  children: [
    {
      type: 'Stack',
      props: { direction: 'vertical', gap: 'md' },
      children: [
        { type: 'Heading', props: { text: heading, level: 'h3' } },
        { type: 'Text', props: { text: summary, variant: 'muted' } },
        { type: 'Separator', props: { orientation: 'horizontal' } },
        { type: 'Pagination', props: { totalPages, page } },
      ],
    },
  ],
});

export const FirstPage: Story = {
  render: () =>
    renderSpec(tableFooter('Customers', 'Showing 1–10 of 124 customers', 12, 1)),
};

export const MidRange: Story = {
  render: () =>
    renderSpec(tableFooter('Customers', 'Showing 41–50 of 124 customers', 12, 5)),
};

export const LastPage: Story = {
  render: () =>
    renderSpec(tableFooter('Customers', 'Showing 121–124 of 124 customers', 12, 12)),
};

export const ShortList: Story = {
  render: () =>
    renderSpec(tableFooter('Invoices', 'Showing 1–10 of 28 invoices', 3, 1)),
};

export const LongList: Story = {
  render: () =>
    renderSpec(tableFooter('Orders', 'Showing 61–70 of 990 orders', 99, 7)),
};
