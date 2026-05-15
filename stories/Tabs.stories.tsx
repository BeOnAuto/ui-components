import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Tabs',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode, initialState?: Record<string, unknown>) => (
  <JSONRender spec={spec} initialState={initialState} />
);

export const ProjectSettings: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'lg', className: 'p-6' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'xs' },
          children: [
            { type: 'Heading', props: { text: 'Acme Web App', level: 'h2' } },
            {
              type: 'Text',
              props: {
                text: 'Manage project configuration, members, billing, and integrations.',
                variant: 'muted',
              },
            },
          ],
        },
        {
          type: 'Card',
          props: { title: 'Project settings', description: 'Configure how this project behaves across your workspace.', maxWidth: 'full' },
          children: [
            {
              type: 'Tabs',
              props: {
                tabs: [
                  { label: 'Overview', value: 'overview' },
                  { label: 'Members', value: 'members' },
                  { label: 'Billing', value: 'billing' },
                  { label: 'Integrations', value: 'integrations' },
                  { label: 'Webhooks', value: 'webhooks' },
                ],
                defaultValue: 'overview',
              },
              children: [
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'lg' },
                  children: [
                    {
                      type: 'Stack',
                      props: { direction: 'vertical', gap: 'xs' },
                      children: [
                        { type: 'Heading', props: { text: 'Overview', level: 'h3' } },
                        { type: 'Text', props: { text: 'Basic information shown to everyone on this project.', variant: 'muted' } },
                      ],
                    },
                    {
                      type: 'Field',
                      props: { label: 'Project name', description: 'Appears in the workspace switcher and breadcrumbs.' },
                      children: [{ type: 'Input', props: { name: 'projectName', value: 'Acme Web App', placeholder: 'My project' } }],
                    },
                    {
                      type: 'Field',
                      props: { label: 'Description' },
                      children: [
                        {
                          type: 'Textarea',
                          props: {
                            name: 'projectDescription',
                            rows: 3,
                            value: 'Customer-facing storefront and dashboard for the Acme retail platform.',
                          },
                        },
                      ],
                    },
                    {
                      type: 'Field',
                      props: { label: 'Visibility' },
                      children: [{ type: 'Select', props: { name: 'visibility', options: ['Private', 'Team', 'Public'], value: 'Team' } }],
                    },
                    {
                      type: 'Stack',
                      props: { direction: 'horizontal', gap: 'sm', justify: 'end' },
                      children: [
                        { type: 'Button', props: { label: 'Cancel', variant: 'secondary' } },
                        { type: 'Button', props: { label: 'Save changes', variant: 'primary' } },
                      ],
                    },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'lg' },
                  children: [
                    {
                      type: 'Stack',
                      props: { direction: 'horizontal', gap: 'md', justify: 'between', align: 'center' },
                      children: [
                        {
                          type: 'Stack',
                          props: { direction: 'vertical', gap: 'xs' },
                          children: [
                            { type: 'Heading', props: { text: 'Members', level: 'h3' } },
                            { type: 'Text', props: { text: '5 people have access to this project.', variant: 'muted' } },
                          ],
                        },
                        { type: 'Button', props: { label: 'Invite member', variant: 'primary' } },
                      ],
                    },
                    {
                      type: 'Table',
                      props: {
                        columns: ['Name', 'Email', 'Role'],
                        rows: [
                          ['Maria Chen', 'maria@acme.co', 'Owner'],
                          ['Devon Park', 'devon@acme.co', 'Admin'],
                          ['Priya Shah', 'priya@acme.co', 'Editor'],
                          ['Luca Romano', 'luca@acme.co', 'Editor'],
                          ['Aisha Banda', 'aisha@acme.co', 'Viewer'],
                        ],
                      },
                    },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'lg' },
                  children: [
                    {
                      type: 'Stack',
                      props: { direction: 'vertical', gap: 'xs' },
                      children: [
                        { type: 'Heading', props: { text: 'Billing', level: 'h3' } },
                        { type: 'Text', props: { text: 'Your project is on the Team plan.', variant: 'muted' } },
                      ],
                    },
                    {
                      type: 'Callout',
                      props: {
                        variant: 'info',
                        title: 'Next invoice on June 1',
                        description: 'You will be charged $245.00 for 5 seats on the Team plan.',
                        iconName: 'CreditCard',
                      },
                    },
                    {
                      type: 'Table',
                      props: {
                        columns: ['Item', 'Quantity', 'Amount'],
                        rows: [
                          ['Team plan', '5 seats', '$245.00'],
                          ['Bandwidth overage', '12 GB', '$24.00'],
                          ['Tax', '—', '$26.90'],
                        ],
                      },
                    },
                    {
                      type: 'Stack',
                      props: { direction: 'horizontal', gap: 'sm', justify: 'end' },
                      children: [
                        { type: 'Button', props: { label: 'Manage plan', variant: 'secondary' } },
                        { type: 'Button', props: { label: 'Download invoice', variant: 'primary' } },
                      ],
                    },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'lg' },
                  children: [
                    {
                      type: 'Stack',
                      props: { direction: 'vertical', gap: 'xs' },
                      children: [
                        { type: 'Heading', props: { text: 'Integrations', level: 'h3' } },
                        { type: 'Text', props: { text: 'Connect Acme to the tools your team already uses.', variant: 'muted' } },
                      ],
                    },
                    {
                      type: 'Grid',
                      props: { columns: 2, gap: 'md' },
                      children: [
                        {
                          type: 'Card',
                          props: { title: 'Slack', description: 'Post deploy events to a channel.', maxWidth: 'full' },
                          children: [{ type: 'Switch', props: { label: 'Enabled', name: 'slack', checked: true } }],
                        },
                        {
                          type: 'Card',
                          props: { title: 'GitHub', description: 'Sync pull requests and issues.', maxWidth: 'full' },
                          children: [{ type: 'Switch', props: { label: 'Enabled', name: 'github', checked: true } }],
                        },
                        {
                          type: 'Card',
                          props: { title: 'Linear', description: 'Mirror tasks between projects.', maxWidth: 'full' },
                          children: [{ type: 'Switch', props: { label: 'Enabled', name: 'linear', checked: false } }],
                        },
                        {
                          type: 'Card',
                          props: { title: 'PagerDuty', description: 'Trigger incidents from alerts.', maxWidth: 'full' },
                          children: [{ type: 'Switch', props: { label: 'Enabled', name: 'pagerduty', checked: false } }],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'lg' },
                  children: [
                    {
                      type: 'Stack',
                      props: { direction: 'vertical', gap: 'xs' },
                      children: [
                        { type: 'Heading', props: { text: 'Webhooks', level: 'h3' } },
                        { type: 'Text', props: { text: 'Send events to your own services when things happen in this project.', variant: 'muted' } },
                      ],
                    },
                    {
                      type: 'Field',
                      props: { label: 'Endpoint URL', description: 'Must be HTTPS.' },
                      children: [{ type: 'Input', props: { name: 'webhookUrl', type: 'text', placeholder: 'https://api.example.com/hooks/acme', value: 'https://api.acme.co/hooks/deploy' } }],
                    },
                    {
                      type: 'Field',
                      props: { label: 'Events' },
                      children: [
                        {
                          type: 'Stack',
                          props: { direction: 'vertical', gap: 'sm' },
                          children: [
                            { type: 'Checkbox', props: { label: 'deployment.succeeded', name: 'evDeploy', checked: true } },
                            { type: 'Checkbox', props: { label: 'deployment.failed', name: 'evFail', checked: true } },
                            { type: 'Checkbox', props: { label: 'member.invited', name: 'evInvite', checked: false } },
                          ],
                        },
                      ],
                    },
                    {
                      type: 'Stack',
                      props: { direction: 'horizontal', gap: 'sm', justify: 'end' },
                      children: [
                        { type: 'Button', props: { label: 'Send test event', variant: 'secondary' } },
                        { type: 'Button', props: { label: 'Save webhook', variant: 'primary' } },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
};

export const AccountSettings: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'lg', className: 'p-6' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'xs' },
          children: [
            { type: 'Heading', props: { text: 'Account', level: 'h2' } },
            { type: 'Text', props: { text: 'Update your profile, security, and notification preferences.', variant: 'muted' } },
          ],
        },
        {
          type: 'Card',
          props: { title: 'Account settings', description: 'These settings apply only to your personal account.', maxWidth: 'lg' },
          children: [
            {
              type: 'Tabs',
              props: {
                tabs: [
                  { label: 'Profile', value: 'profile' },
                  { label: 'Security', value: 'security' },
                  { label: 'Notifications', value: 'notifications' },
                ],
                defaultValue: 'profile',
              },
              children: [
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'md' },
                  children: [
                    {
                      type: 'Field',
                      props: { label: 'Full name', required: true },
                      children: [{ type: 'Input', props: { name: 'fullName', value: 'Maria Chen' } }],
                    },
                    {
                      type: 'Field',
                      props: { label: 'Email', description: 'Used for sign-in and account notices.', required: true },
                      children: [{ type: 'Input', props: { name: 'email', type: 'email', value: 'maria@acme.co' } }],
                    },
                    {
                      type: 'Field',
                      props: { label: 'Username', description: 'acme.co/u/your-username' },
                      children: [{ type: 'Input', props: { name: 'username', value: 'mariac' } }],
                    },
                    {
                      type: 'Field',
                      props: { label: 'Bio' },
                      children: [{ type: 'Textarea', props: { name: 'bio', rows: 3, placeholder: 'Tell people a little about yourself.', value: 'Product engineer working on the Acme storefront.' } }],
                    },
                    {
                      type: 'Field',
                      props: { label: 'Time zone' },
                      children: [
                        {
                          type: 'Select',
                          props: {
                            name: 'timezone',
                            options: ['Pacific (PT)', 'Mountain (MT)', 'Central (CT)', 'Eastern (ET)', 'UTC'],
                            value: 'Pacific (PT)',
                          },
                        },
                      ],
                    },
                    {
                      type: 'Stack',
                      props: { direction: 'horizontal', gap: 'sm', justify: 'end' },
                      children: [
                        { type: 'Button', props: { label: 'Cancel', variant: 'secondary' } },
                        { type: 'Button', props: { label: 'Save profile', variant: 'primary' } },
                      ],
                    },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'md' },
                  children: [
                    {
                      type: 'Field',
                      props: { label: 'Current password', required: true },
                      children: [{ type: 'Input', props: { name: 'currentPassword', type: 'password', placeholder: 'Enter your password' } }],
                    },
                    {
                      type: 'Field',
                      props: { label: 'New password', description: 'At least 12 characters, mix of letters and numbers.', required: true },
                      children: [{ type: 'Input', props: { name: 'newPassword', type: 'password', placeholder: 'New password' } }],
                    },
                    {
                      type: 'Field',
                      props: { label: 'Confirm new password', required: true },
                      children: [{ type: 'Input', props: { name: 'confirmPassword', type: 'password', placeholder: 'Repeat new password' } }],
                    },
                    {
                      type: 'Field',
                      props: { label: 'Two-factor authentication', description: 'Require an authenticator code at sign-in.' },
                      children: [{ type: 'Switch', props: { label: 'Enable 2FA', name: 'twoFactor', checked: true } }],
                    },
                    {
                      type: 'Callout',
                      props: {
                        variant: 'warning',
                        title: 'You will be signed out on other devices',
                        description: 'Changing your password ends all active sessions except this one.',
                        iconName: 'ShieldAlert',
                      },
                    },
                    {
                      type: 'Stack',
                      props: { direction: 'horizontal', gap: 'sm', justify: 'end' },
                      children: [{ type: 'Button', props: { label: 'Update password', variant: 'primary' } }],
                    },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'md' },
                  children: [
                    {
                      type: 'Field',
                      props: { label: 'Email digests' },
                      children: [
                        {
                          type: 'Radio',
                          props: {
                            name: 'digest',
                            options: ['Real-time', 'Daily summary', 'Weekly summary', 'Off'],
                            value: 'Daily summary',
                          },
                        },
                      ],
                    },
                    {
                      type: 'Field',
                      props: { label: 'Product updates' },
                      children: [{ type: 'Switch', props: { label: 'Send me product news', name: 'product', checked: true } }],
                    },
                    {
                      type: 'Field',
                      props: { label: 'Comments and mentions' },
                      children: [{ type: 'Switch', props: { label: 'Notify me when I am mentioned', name: 'mentions', checked: true } }],
                    },
                    {
                      type: 'Field',
                      props: { label: 'Deployment alerts' },
                      children: [{ type: 'Switch', props: { label: 'Email me when a deploy fails', name: 'deployFails', checked: true } }],
                    },
                    {
                      type: 'Field',
                      props: { label: 'Marketing' },
                      children: [{ type: 'Checkbox', props: { label: 'Occasional offers and case studies', name: 'marketing', checked: false } }],
                    },
                    {
                      type: 'Stack',
                      props: { direction: 'horizontal', gap: 'sm', justify: 'end' },
                      children: [{ type: 'Button', props: { label: 'Save preferences', variant: 'primary' } }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
};

export const BillingTabs: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'lg', className: 'p-6' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'xs' },
          children: [
            { type: 'Heading', props: { text: 'Billing', level: 'h2' } },
            { type: 'Text', props: { text: 'Manage your plan, review invoices, and update payment methods.', variant: 'muted' } },
          ],
        },
        {
          type: 'Card',
          props: { title: 'Billing center', description: 'Your workspace is on the Team plan.', maxWidth: 'full' },
          children: [
            {
              type: 'Tabs',
              props: {
                tabs: [
                  { label: 'Plan', value: 'plan' },
                  { label: 'Invoices', value: 'invoices' },
                  { label: 'Payment methods', value: 'payment' },
                ],
                defaultValue: 'plan',
              },
              children: [
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'lg' },
                  children: [
                    {
                      type: 'Card',
                      props: { title: 'Team plan', description: '$49 per seat / month. Renews on June 1.', maxWidth: 'full' },
                      children: [
                        {
                          type: 'Stack',
                          props: { direction: 'vertical', gap: 'md' },
                          children: [
                            {
                              type: 'Stack',
                              props: { direction: 'horizontal', gap: 'sm' },
                              children: [
                                { type: 'Badge', props: { text: 'Current plan', variant: 'default' } },
                                { type: 'Badge', props: { text: '5 of 10 seats used', variant: 'secondary' } },
                              ],
                            },
                            {
                              type: 'Stack',
                              props: { direction: 'horizontal', gap: 'sm' },
                              children: [
                                { type: 'Button', props: { label: 'Upgrade to Business', variant: 'primary' } },
                                { type: 'Button', props: { label: 'Cancel plan', variant: 'secondary' } },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: 'Stack',
                      props: { direction: 'vertical', gap: 'xs' },
                      children: [
                        { type: 'Heading', props: { text: 'Compare plans', level: 'h4' } },
                        { type: 'Text', props: { text: 'Switch any time. Changes prorate to the current period.', variant: 'muted' } },
                      ],
                    },
                    {
                      type: 'Table',
                      props: {
                        columns: ['Plan', 'Price', 'Seats', 'Support'],
                        rows: [
                          ['Starter', '$0', '3', 'Community'],
                          ['Team', '$49 / seat', '10', 'Email'],
                          ['Business', '$99 / seat', 'Unlimited', '24/7 chat'],
                        ],
                      },
                    },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'lg' },
                  children: [
                    {
                      type: 'Stack',
                      props: { direction: 'horizontal', gap: 'md', justify: 'between', align: 'center' },
                      children: [
                        {
                          type: 'Stack',
                          props: { direction: 'vertical', gap: 'xs' },
                          children: [
                            { type: 'Heading', props: { text: 'Invoices', level: 'h3' } },
                            { type: 'Text', props: { text: 'Download receipts for the last 12 billing periods.', variant: 'muted' } },
                          ],
                        },
                        { type: 'Button', props: { label: 'Export all', variant: 'secondary' } },
                      ],
                    },
                    {
                      type: 'Table',
                      props: {
                        columns: ['Invoice', 'Date', 'Amount', 'Status'],
                        rows: [
                          ['INV-1042', 'May 1, 2026', '$245.00', 'Paid'],
                          ['INV-1041', 'Apr 1, 2026', '$245.00', 'Paid'],
                          ['INV-1040', 'Mar 1, 2026', '$196.00', 'Paid'],
                          ['INV-1039', 'Feb 1, 2026', '$196.00', 'Paid'],
                          ['INV-1038', 'Jan 1, 2026', '$196.00', 'Paid'],
                        ],
                      },
                    },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'lg' },
                  children: [
                    {
                      type: 'Stack',
                      props: { direction: 'horizontal', gap: 'md', justify: 'between', align: 'center' },
                      children: [
                        {
                          type: 'Stack',
                          props: { direction: 'vertical', gap: 'xs' },
                          children: [
                            { type: 'Heading', props: { text: 'Payment methods', level: 'h3' } },
                            { type: 'Text', props: { text: 'Cards on file are charged on the first of each month.', variant: 'muted' } },
                          ],
                        },
                        { type: 'Button', props: { label: 'Add card', variant: 'primary' } },
                      ],
                    },
                    {
                      type: 'Stack',
                      props: { direction: 'vertical', gap: 'sm' },
                      children: [
                        {
                          type: 'Card',
                          props: { title: 'Visa ending in 4242', description: 'Expires 09/2028. Default payment method.', maxWidth: 'full' },
                          children: [
                            {
                              type: 'Stack',
                              props: { direction: 'horizontal', gap: 'sm', justify: 'end' },
                              children: [
                                { type: 'Button', props: { label: 'Edit', variant: 'secondary' } },
                                { type: 'Button', props: { label: 'Remove', variant: 'danger' } },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'Card',
                          props: { title: 'Mastercard ending in 8019', description: 'Expires 02/2027. Backup payment method.', maxWidth: 'full' },
                          children: [
                            {
                              type: 'Stack',
                              props: { direction: 'horizontal', gap: 'sm', justify: 'end' },
                              children: [
                                { type: 'Button', props: { label: 'Make default', variant: 'secondary' } },
                                { type: 'Button', props: { label: 'Remove', variant: 'danger' } },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: 'Field',
                      props: { label: 'Billing email', description: 'Receipts and dunning notices are sent here.' },
                      children: [{ type: 'Input', props: { name: 'billingEmail', type: 'email', value: 'billing@acme.co' } }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
};
