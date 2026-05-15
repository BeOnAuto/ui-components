import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Select',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

const countries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Germany',
  'France',
  'Japan',
  'Australia',
  'Brazil',
  'India',
  'Mexico',
];

const timezones = [
  'Pacific Time (UTC-08:00)',
  'Mountain Time (UTC-07:00)',
  'Central Time (UTC-06:00)',
  'Eastern Time (UTC-05:00)',
  'UTC',
  'Central European Time (UTC+01:00)',
  'India Standard Time (UTC+05:30)',
  'Japan Standard Time (UTC+09:00)',
];

const statuses = ['Draft', 'In review', 'Published', 'Archived'];

const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD'];

const wrapInCard = (title: string, description: string, field: NestedNode): NestedNode => ({
  type: 'Card',
  props: { title, description, maxWidth: 'md', centered: true },
  children: [field],
});

export const Country: Story = {
  render: () =>
    renderSpec(
      wrapInCard('Account location', 'Used for billing, tax, and regional defaults.', {
        type: 'Field',
        props: { label: 'Country', description: 'Where is your business based?' },
        children: [
          {
            type: 'Select',
            props: {
              name: 'country',
              options: countries,
              placeholder: 'Select a country',
              value: 'United States',
            },
          },
        ],
      }),
    ),
};

export const Timezone: Story = {
  render: () =>
    renderSpec(
      wrapInCard('Working hours', 'We use this to schedule reports and notifications.', {
        type: 'Field',
        props: { label: 'Timezone', description: 'Pick the timezone you work in most often.' },
        children: [
          {
            type: 'Select',
            props: {
              name: 'timezone',
              options: timezones,
              placeholder: 'Select a timezone',
            },
          },
        ],
      }),
    ),
};

export const Status: Story = {
  render: () =>
    renderSpec(
      wrapInCard('Article status', 'Control whether this draft is visible to readers.', {
        type: 'Field',
        props: { label: 'Status', description: 'Changes take effect immediately on save.' },
        children: [
          {
            type: 'Select',
            props: {
              name: 'status',
              options: statuses,
              value: 'Published',
            },
          },
        ],
      }),
    ),
};

export const Currency: Story = {
  render: () =>
    renderSpec(
      wrapInCard('Billing currency', 'Invoices and receipts will use this currency.', {
        type: 'Field',
        props: { label: 'Currency', description: 'You can change this later in account settings.' },
        children: [
          {
            type: 'Select',
            props: {
              name: 'currency',
              options: currencies,
              placeholder: 'Select a currency',
            },
          },
        ],
      }),
    ),
};

export const Required: Story = {
  render: () =>
    renderSpec(
      wrapInCard('Shipping address', 'We need this before we can ship your order.', {
        type: 'Field',
        props: { label: 'Country', description: 'Required so we can calculate duties and taxes.', required: true },
        children: [
          {
            type: 'Select',
            props: {
              name: 'shippingCountry',
              options: countries,
              placeholder: 'Select a country',
              validateOn: 'change',
              checks: [{ type: 'required', message: 'Choose a country' }],
            },
          },
        ],
      }),
    ),
};
