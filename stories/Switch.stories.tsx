import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Switch',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const Notifications: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', align: 'center', gap: 'md', className: 'p-6' },
      children: [
        {
          type: 'Card',
          props: {
            title: 'Notifications',
            description: 'Decide what reaches your inbox and devices.',
            maxWidth: 'md',
          },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'md' },
              children: [
                { type: 'Switch', props: { label: 'Email notifications', name: 'email', checked: true } },
                { type: 'Switch', props: { label: 'Push notifications', name: 'push', checked: true } },
                { type: 'Switch', props: { label: 'Weekly digest', name: 'digest' } },
                { type: 'Switch', props: { label: 'Marketing emails', name: 'marketing' } },
                { type: 'Switch', props: { label: 'Mentions', name: 'mentions', checked: true } },
              ],
            },
          ],
        },
      ],
    }),
};

export const Privacy: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', align: 'center', gap: 'md', className: 'p-6' },
      children: [
        {
          type: 'Card',
          props: {
            title: 'Privacy',
            description: 'Control who can see your activity and data.',
            maxWidth: 'md',
          },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'md' },
              children: [
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', justify: 'between', align: 'center', gap: 'md' },
                  children: [
                    {
                      type: 'Stack',
                      props: { direction: 'vertical', gap: 'none' },
                      children: [
                        { type: 'Text', props: { text: 'Public profile', variant: 'body' } },
                        { type: 'Text', props: { text: 'Anyone on the web can view your profile page.', variant: 'muted' } },
                      ],
                    },
                    { type: 'Switch', props: { label: 'Public profile', name: 'publicProfile', checked: true } },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', justify: 'between', align: 'center', gap: 'md' },
                  children: [
                    {
                      type: 'Stack',
                      props: { direction: 'vertical', gap: 'none' },
                      children: [
                        { type: 'Text', props: { text: 'Searchable by email', variant: 'body' } },
                        { type: 'Text', props: { text: 'Allow others to find you using your email address.', variant: 'muted' } },
                      ],
                    },
                    { type: 'Switch', props: { label: 'Searchable by email', name: 'emailSearch' } },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', justify: 'between', align: 'center', gap: 'md' },
                  children: [
                    {
                      type: 'Stack',
                      props: { direction: 'vertical', gap: 'none' },
                      children: [
                        { type: 'Text', props: { text: 'Activity status', variant: 'body' } },
                        { type: 'Text', props: { text: 'Show when you were last active to your contacts.', variant: 'muted' } },
                      ],
                    },
                    { type: 'Switch', props: { label: 'Activity status', name: 'activity', checked: true } },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', justify: 'between', align: 'center', gap: 'md' },
                  children: [
                    {
                      type: 'Stack',
                      props: { direction: 'vertical', gap: 'none' },
                      children: [
                        { type: 'Text', props: { text: 'Personalized ads', variant: 'body' } },
                        { type: 'Text', props: { text: 'Use your activity to tailor advertising you see.', variant: 'muted' } },
                      ],
                    },
                    { type: 'Switch', props: { label: 'Personalized ads', name: 'ads' } },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
};

export const TwoFactor: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', align: 'center', gap: 'md', className: 'p-6' },
      children: [
        {
          type: 'Card',
          props: {
            title: 'Security',
            description: 'Add an extra layer of protection to your account.',
            maxWidth: 'md',
          },
          children: [
            {
              type: 'Switch',
              props: { label: 'Enable two-factor authentication', name: 'twoFactor', checked: true },
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
      props: { direction: 'vertical', align: 'center', gap: 'md', className: 'p-6' },
      children: [
        {
          type: 'Card',
          props: {
            title: 'Account settings',
            description: 'Manage how your account behaves day to day.',
            maxWidth: 'md',
          },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'md' },
              children: [
                { type: 'Switch', props: { label: 'Auto-renew subscription', name: 'autoRenew', checked: true } },
                { type: 'Switch', props: { label: 'Receive product updates', name: 'updates' } },
                { type: 'Switch', props: { label: 'Beta features early access', name: 'beta' } },
                { type: 'Switch', props: { label: 'Sync across devices', name: 'sync', checked: true } },
                { type: 'Switch', props: { label: 'Show online status', name: 'online' } },
                { type: 'Switch', props: { label: 'Enable keyboard shortcuts', name: 'shortcuts', checked: true } },
              ],
            },
          ],
        },
      ],
    }),
};
