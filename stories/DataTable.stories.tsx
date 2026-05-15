import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'DataTable',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

const customerColumns = [
  { key: 'name', label: 'Name', type: 'text' },
  { key: 'plan', label: 'Plan', type: 'badge' },
  { key: 'mrr', label: 'MRR', type: 'number' },
  { key: 'joined', label: 'Joined', type: 'date' },
];

const customerData = [
  { name: 'Acme Inc.', plan: 'Enterprise', mrr: 4800, joined: '2024-01-12' },
  { name: 'Globex Corp.', plan: 'Pro', mrr: 1200, joined: '2024-02-04' },
  { name: 'Initech', plan: 'Pro', mrr: 980, joined: '2024-02-21' },
  { name: 'Soylent', plan: 'Starter', mrr: 240, joined: '2024-03-09' },
  { name: 'Umbrella', plan: 'Enterprise', mrr: 6400, joined: '2024-03-18' },
  { name: 'Hooli', plan: 'Pro', mrr: 1450, joined: '2024-04-02' },
  { name: 'Pied Piper', plan: 'Starter', mrr: 180, joined: '2024-04-19' },
  { name: 'Massive Dynamic', plan: 'Enterprise', mrr: 5200, joined: '2024-05-08' },
  { name: 'Stark Industries', plan: 'Pro', mrr: 1100, joined: '2024-05-22' },
  { name: 'Wayne Enterprises', plan: 'Enterprise', mrr: 7200, joined: '2024-06-11' },
];

export const Customers: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Customers',
        description: 'Last 30 days',
        maxWidth: 'full',
      },
      children: [
        {
          type: 'DataTable',
          props: { columns: customerColumns, data: customerData, pageSize: 6 },
        },
      ],
    }),
};

const invoiceColumns = [
  { key: 'number', label: 'Invoice', type: 'text' },
  { key: 'customer', label: 'Customer', type: 'text' },
  { key: 'amount', label: 'Amount', type: 'number' },
  { key: 'status', label: 'Status', type: 'badge' },
];

const invoiceData = [
  { number: 'INV-1042', customer: 'Acme Inc.', amount: 1200, status: 'Paid' },
  { number: 'INV-1043', customer: 'Globex Corp.', amount: 980, status: 'Paid' },
  { number: 'INV-1044', customer: 'Initech', amount: 4800, status: 'Open' },
  { number: 'INV-1045', customer: 'Umbrella', amount: 2200, status: 'Open' },
  { number: 'INV-1046', customer: 'Soylent', amount: 540, status: 'Overdue' },
  { number: 'INV-1047', customer: 'Hooli', amount: 1450, status: 'Paid' },
  { number: 'INV-1048', customer: 'Stark Industries', amount: 6400, status: 'Open' },
  { number: 'INV-1049', customer: 'Pied Piper', amount: 180, status: 'Draft' },
  { number: 'INV-1050', customer: 'Wayne Enterprises', amount: 320, status: 'Draft' },
  { number: 'INV-1051', customer: 'Massive Dynamic', amount: 3600, status: 'Paid' },
];

export const Invoices: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Recent invoices',
        description: 'Q2 2025',
        maxWidth: 'full',
      },
      children: [
        {
          type: 'DataTable',
          props: { columns: invoiceColumns, data: invoiceData, pageSize: 6 },
        },
      ],
    }),
};
