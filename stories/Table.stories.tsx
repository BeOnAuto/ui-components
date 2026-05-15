import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Table',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const Invoices: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Recent invoices',
        description: 'Latest billing activity across active customer accounts.',
        maxWidth: 'full',
        className: 'min-w-0 overflow-x-auto',
      },
      children: [
        {
          type: 'Table',
          props: {
            caption: 'Invoices issued in the last 30 days.',
            columns: ['Invoice', 'Customer', 'Amount', 'Status'],
            rows: [
              ['INV-1042', 'Northwind Traders', '$2,400.00', 'Paid'],
              ['INV-1043', 'Acme Corp', '$1,180.00', 'Pending'],
              ['INV-1044', 'Globex', '$3,520.00', 'Overdue'],
              ['INV-1045', 'Initech', '$840.00', 'Paid'],
              ['INV-1046', 'Hooli', '$5,200.00', 'Draft'],
              ['INV-1047', 'Umbrella Co', '$1,960.00', 'Paid'],
              ['INV-1048', 'Stark Industries', '$4,120.00', 'Pending'],
            ],
          },
        },
      ],
    }),
};

export const TeamMembers: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Team members',
        description: 'Active teammates across product, engineering, and design.',
        maxWidth: 'full',
        className: 'min-w-0',
      },
      children: [
        {
          type: 'Table',
          props: {
            caption: 'Current roster of active team members.',
            columns: ['Name', 'Role', 'Status'],
            rows: [
              ['Maya Patel', 'Engineering Manager', 'Active'],
              ['Jordan Reyes', 'Senior Designer', 'Active'],
              ['Priya Singh', 'Staff Engineer', 'On leave'],
              ['Alex Kim', 'Product Manager', 'Active'],
              ['Sam Lee', 'Customer Engineer', 'Active'],
              ['Robin Cole', 'Data Scientist', 'Invited'],
            ],
          },
        },
      ],
    }),
};

export const Inventory: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Inventory',
        description: 'On-hand stock counts for the storefront catalog.',
        maxWidth: 'full',
        className: 'min-w-0',
      },
      children: [
        {
          type: 'Table',
          props: {
            caption: 'Live stock levels updated hourly.',
            columns: ['SKU', 'Product', 'Stock'],
            rows: [
              ['SKU-001', 'Aero keyboard', '128'],
              ['SKU-002', 'Glide mouse', '64'],
              ['SKU-003', 'Lumen lamp', '12'],
              ['SKU-004', 'Calm headphones', '0'],
              ['SKU-005', 'Pulse webcam', '34'],
              ['SKU-006', 'Echo speaker', '92'],
              ['SKU-007', 'Drift stand', '8'],
            ],
          },
        },
      ],
    }),
};

export const PlanComparison: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Compare plans',
        description: 'Features included on each subscription tier.',
        maxWidth: 'full',
        className: 'min-w-0 overflow-x-auto',
      },
      children: [
        {
          type: 'Table',
          props: {
            caption: 'Feature availability across Free, Pro, and Team plans.',
            columns: ['Feature', 'Free', 'Pro', 'Team'],
            rows: [
              ['Projects', '3', 'Unlimited', 'Unlimited'],
              ['Collaborators', '1', '5', 'Unlimited'],
              ['Storage', '1 GB', '50 GB', '500 GB'],
              ['Version history', '7 days', '90 days', '1 year'],
              ['Priority support', 'No', 'Yes', 'Yes'],
              ['SSO and SCIM', 'No', 'No', 'Yes'],
              ['Audit log', 'No', 'No', 'Yes'],
            ],
          },
        },
      ],
    }),
};
