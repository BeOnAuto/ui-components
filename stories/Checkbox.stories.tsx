import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Checkbox',
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
            description: 'Choose how you want to hear from us.',
            maxWidth: 'md',
          },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm' },
              children: [
                { type: 'Checkbox', props: { label: 'Email notifications', name: 'email', checked: true } },
                { type: 'Checkbox', props: { label: 'Push notifications', name: 'push', checked: true } },
                { type: 'Checkbox', props: { label: 'Weekly digest', name: 'digest' } },
                { type: 'Checkbox', props: { label: 'Marketing emails', name: 'marketing' } },
              ],
            },
          ],
        },
      ],
    }),
};

export const Permissions: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', align: 'center', gap: 'md', className: 'p-6' },
      children: [
        {
          type: 'Card',
          props: {
            title: 'Permissions',
            description: 'Control what this app can access on your device.',
            maxWidth: 'md',
          },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm' },
              children: [
                { type: 'Checkbox', props: { label: 'Access camera', name: 'camera', checked: true } },
                { type: 'Checkbox', props: { label: 'Access microphone', name: 'microphone' } },
                { type: 'Checkbox', props: { label: 'Access location', name: 'location', checked: true } },
                { type: 'Checkbox', props: { label: 'Access contacts', name: 'contacts' } },
                { type: 'Checkbox', props: { label: 'Send anonymous usage data', name: 'telemetry', checked: true } },
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
      props: { direction: 'vertical', align: 'center', gap: 'md', className: 'p-6' },
      children: [
        {
          type: 'Card',
          props: {
            title: 'Account settings',
            description: 'Manage your privacy and visibility preferences.',
            maxWidth: 'md',
          },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm' },
              children: [
                { type: 'Checkbox', props: { label: 'Show my profile in search results', name: 'searchable', checked: true } },
                { type: 'Checkbox', props: { label: 'Allow others to tag me in posts', name: 'tagging', checked: true } },
                { type: 'Checkbox', props: { label: 'Show online status', name: 'online' } },
                { type: 'Checkbox', props: { label: 'Enable two-factor authentication', name: 'twofa', checked: true } },
                { type: 'Checkbox', props: { label: 'Subscribe to product updates', name: 'updates' } },
                { type: 'Checkbox', props: { label: 'Beta features early access', name: 'beta' } },
              ],
            },
          ],
        },
      ],
    }),
};

export const TermsAgreement: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', align: 'center', gap: 'md', className: 'p-6' },
      children: [
        {
          type: 'Card',
          props: {
            title: 'Almost there',
            description: 'Review and accept to create your account.',
            maxWidth: 'md',
          },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'md' },
              children: [
                {
                  type: 'Text',
                  props: {
                    text: 'By continuing, you confirm that you have read and understood how we handle your data.',
                    variant: 'muted',
                  },
                },
                {
                  type: 'Checkbox',
                  props: { label: 'I agree to the Terms and Conditions', name: 'terms' },
                },
                {
                  type: 'Button',
                  props: { label: 'Continue', variant: 'primary' },
                },
              ],
            },
          ],
        },
      ],
    }),
};

export const Single: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', align: 'center', gap: 'md', className: 'p-6' },
      children: [
        {
          type: 'Card',
          props: { maxWidth: 'md' },
          children: [
            {
              type: 'Checkbox',
              props: { label: 'Remember this device for 30 days', name: 'remember', checked: true },
            },
          ],
        },
      ],
    }),
};
