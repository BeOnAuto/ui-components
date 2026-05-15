import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Breadcrumb',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const Default: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { className: 'max-w-4xl' },
      children: [
        {
          type: 'Breadcrumb',
          props: {
            items: [
              { label: 'Dashboard', href: '/' },
              { label: 'Customers', href: '/customers' },
              { label: 'Acme Inc', href: null },
            ],
          },
        },
      ],
    }),
};

export const DeepTrail: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { className: 'max-w-4xl' },
      children: [
        {
          type: 'Breadcrumb',
          props: {
            items: [
              { label: 'Dashboard', href: '/' },
              { label: 'Customers', href: '/customers' },
              { label: 'Acme Inc', href: '/customers/acme' },
              { label: 'Invoices', href: '/customers/acme/invoices' },
              { label: 'Inv-2024-018', href: null },
            ],
          },
        },
      ],
    }),
};
