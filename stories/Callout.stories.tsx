import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Callout',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const AllVariants: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'md', className: 'max-w-2xl mx-auto p-4 sm:p-6' },
      children: [
        {
          type: 'Callout',
          props: {
            variant: 'info',
            title: 'Limited connectivity',
            description: 'Some features may be unavailable while offline.',
            iconName: 'WifiOff',
          },
        },
        {
          type: 'Callout',
          props: {
            variant: 'success',
            title: 'Deploy complete',
            description: 'v1.4.2 is now live in production.',
            iconName: 'CheckCircle',
          },
        },
        {
          type: 'Callout',
          props: {
            variant: 'warning',
            title: 'Trial ending',
            description: 'Upgrade by Friday to keep your workspace.',
            iconName: 'Clock',
          },
        },
        {
          type: 'Callout',
          props: {
            variant: 'error',
            title: 'Payment failed',
            description: 'Card was declined; update billing to continue.',
            iconName: 'CreditCard',
          },
        },
      ],
    }),
};

export const Info: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true, className: 'max-w-2xl mx-auto m-4 sm:m-6' },
      children: [
        {
          type: 'Callout',
          props: {
            variant: 'info',
            title: 'Limited connectivity',
            description: 'Some features may be unavailable while offline.',
            iconName: 'WifiOff',
          },
        },
      ],
    }),
};

export const Success: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true, className: 'max-w-2xl mx-auto m-4 sm:m-6' },
      children: [
        {
          type: 'Callout',
          props: {
            variant: 'success',
            title: 'Deploy complete',
            description: 'v1.4.2 is now live in production.',
            iconName: 'CheckCircle',
          },
        },
      ],
    }),
};

export const Warning: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true, className: 'max-w-2xl mx-auto m-4 sm:m-6' },
      children: [
        {
          type: 'Callout',
          props: {
            variant: 'warning',
            title: 'Trial ending',
            description: 'Upgrade by Friday to keep your workspace.',
            iconName: 'Clock',
          },
        },
      ],
    }),
};

export const Error: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true, className: 'max-w-2xl mx-auto m-4 sm:m-6' },
      children: [
        {
          type: 'Callout',
          props: {
            variant: 'error',
            title: 'Payment failed',
            description: 'Card was declined; update billing to continue.',
            iconName: 'CreditCard',
          },
        },
      ],
    }),
};

export const TitleOnly: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true, className: 'max-w-2xl mx-auto m-4 sm:m-6' },
      children: [
        {
          type: 'Callout',
          props: {
            variant: 'info',
            title: 'Scheduled maintenance tonight at 11:00 PM UTC.',
            iconName: 'Info',
          },
        },
      ],
    }),
};
