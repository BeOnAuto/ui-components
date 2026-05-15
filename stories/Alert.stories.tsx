import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Alert',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const AllTypes: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true, className: 'p-6' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Heading',
              props: { text: 'Account notifications', level: 'h3' },
            },
            {
              type: 'Alert',
              props: {
                title: 'Plan upgraded to Pro',
                message: 'Your workspace now includes unlimited projects and priority support.',
                type: 'success',
              },
            },
            {
              type: 'Alert',
              props: {
                title: 'Scheduled maintenance on Sunday',
                message: 'Services may be intermittently unavailable between 02:00 and 04:00 UTC.',
                type: 'info',
              },
            },
            {
              type: 'Alert',
              props: {
                title: 'Trial expires in 3 days',
                message: 'Add a payment method before May 18 to keep your workspace active.',
                type: 'warning',
              },
            },
            {
              type: 'Alert',
              props: {
                title: 'Payment declined',
                message: 'We could not charge the card ending in 4242. Update your billing details to continue.',
                type: 'error',
              },
            },
          ],
        },
      ],
    }),
};

export const Success: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true, className: 'p-6' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Heading',
              props: { text: 'Billing update', level: 'h4' },
            },
            {
              type: 'Alert',
              props: {
                title: 'Plan upgraded to Pro',
                message: 'Your team now has access to advanced analytics, audit logs, and SSO.',
                type: 'success',
              },
            },
          ],
        },
      ],
    }),
};

export const Info: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true, className: 'p-6' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Heading',
              props: { text: 'System status', level: 'h4' },
            },
            {
              type: 'Alert',
              props: {
                title: 'Scheduled maintenance this weekend',
                message: 'Deploys will be paused Saturday 22:00 to Sunday 02:00 UTC while we upgrade our infrastructure.',
                type: 'info',
              },
            },
          ],
        },
      ],
    }),
};

export const Warning: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true, className: 'p-6' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Heading',
              props: { text: 'Subscription', level: 'h4' },
            },
            {
              type: 'Alert',
              props: {
                title: 'Trial expires in 3 days',
                message: 'Add a payment method before May 18 to avoid losing access to your workspace.',
                type: 'warning',
              },
            },
          ],
        },
      ],
    }),
};

export const ErrorAlert: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true, className: 'p-6' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Heading',
              props: { text: 'Billing issue', level: 'h4' },
            },
            {
              type: 'Alert',
              props: {
                title: 'Payment declined',
                message: 'Your card ending in 4242 was declined. Update your billing details to keep your subscription active.',
                type: 'error',
              },
            },
          ],
        },
      ],
    }),
};
