import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'DateRangePicker',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const Empty: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Schedule report',
        description: 'Choose the window of activity to include.',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Field',
          props: {
            label: 'Reporting period',
            description: 'Leave blank to include all activity to date.',
          },
          children: [
            {
              type: 'DateRangePicker',
              props: { placeholder: 'Pick a date range' },
            },
          ],
        },
      ],
    }),
};

export const Preselected: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Billing window',
        description: 'Invoices generated within this range will be included.',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Field',
          props: { label: 'Reporting period' },
          children: [
            {
              type: 'DateRangePicker',
              props: {
                value: { from: '2025-05-01', to: '2025-05-15' },
                placeholder: 'Pick a date range',
              },
            },
          ],
        },
      ],
    }),
};

export const FilterCustomers: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Filter customers',
        description: 'Narrow the list by signup window and segment.',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Field',
              props: { label: 'Reporting period' },
              children: [
                {
                  type: 'DateRangePicker',
                  props: {
                    value: { from: '2025-05-01', to: '2025-05-15' },
                    placeholder: 'Pick a date range',
                  },
                },
              ],
            },
            {
              type: 'Field',
              props: { label: 'Segment' },
              children: [
                {
                  type: 'Select',
                  props: {
                    options: ['All customers', 'Trial', 'Active', 'Churned'],
                    value: 'Active',
                    placeholder: 'Select a segment',
                  },
                },
              ],
            },
          ],
        },
      ],
    }),
};
