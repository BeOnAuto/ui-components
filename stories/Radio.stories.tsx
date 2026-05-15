import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Radio',
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const PlanSelector: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Choose your plan',
        description: 'Pick a tier that fits your team. Upgrade or downgrade anytime.',
        maxWidth: 'md',
      },
      children: [
        {
          type: 'Field',
          props: {
            label: 'Subscription plan',
            description: 'Billed monthly. Taxes calculated at checkout.',
          },
          children: [
            {
              type: 'Radio',
              props: {
                name: 'plan',
                options: ['Free', 'Pro', 'Team', 'Enterprise'],
                value: 'Pro',
              },
            },
          ],
        },
      ],
    }),
};

export const NotificationFrequency: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Notification preferences',
        description: 'Choose how often we send activity summaries to your inbox.',
        maxWidth: 'md',
      },
      children: [
        {
          type: 'Field',
          props: {
            label: 'Email frequency',
            description: 'You can change this in settings whenever you like.',
          },
          children: [
            {
              type: 'Radio',
              props: {
                name: 'frequency',
                options: ['Real time', 'Hourly', 'Daily', 'Weekly'],
                value: 'Daily',
              },
            },
          ],
        },
      ],
    }),
};

export const PayoutMethod: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Payout method',
        description: 'Earnings are sent on the first business day of each month.',
        maxWidth: 'md',
      },
      children: [
        {
          type: 'Field',
          props: {
            label: 'How would you like to get paid?',
            description: 'Processing times vary by provider.',
          },
          children: [
            {
              type: 'Radio',
              props: {
                name: 'payout',
                options: ['Bank transfer', 'PayPal', 'Stripe'],
                value: 'Stripe',
              },
            },
          ],
        },
      ],
    }),
};

export const Unselected: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Preferred contact method',
        description: 'Tell us the best way to reach you about your account.',
        maxWidth: 'md',
      },
      children: [
        {
          type: 'Field',
          props: {
            label: 'Contact channel',
            description: 'We will only use this for important account updates.',
            required: true,
          },
          children: [
            {
              type: 'Radio',
              props: {
                name: 'contact',
                options: ['Email', 'SMS', 'Phone call', 'In-app message'],
              },
            },
          ],
        },
      ],
    }),
};
