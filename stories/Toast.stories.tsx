import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Toast',
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

const page = (
  heading: string,
  description: string,
  buttonLabel: string,
  feedback: NestedNode[],
): NestedNode => ({
  type: 'Card',
  props: { maxWidth: 'lg', centered: true },
  children: [
    {
      type: 'Stack',
      props: { direction: 'vertical', gap: 'lg' },
      children: [
        { type: 'Sonner', props: {} },
        ...feedback,
        { type: 'Heading', props: { text: heading, level: 'h2' } },
        { type: 'Text', props: { text: description, variant: 'muted' } },
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'sm', justify: 'end' },
          children: [{ type: 'Button', props: { label: buttonLabel, variant: 'primary' } }],
        },
      ],
    },
  ],
});

export const Success: Story = {
  render: () =>
    renderSpec(
      page('Profile settings', 'Update your account details and personal preferences.', 'Save changes', [
        {
          type: 'Toast',
          props: { message: 'Your profile has been updated.', variant: 'success', show: true },
        },
      ]),
    ),
};

export const ErrorState: Story = {
  name: 'Error',
  render: () =>
    renderSpec(
      page('Billing details', 'Manage your payment method and invoice contacts.', 'Retry save', [
        {
          type: 'Toast',
          props: { message: 'Failed to save. Please try again.', variant: 'error', show: true },
        },
      ]),
    ),
};

export const Info: Story = {
  render: () =>
    renderSpec(
      page('Dashboard', 'Overview of recent activity across your workspace.', 'Reload app', [
        {
          type: 'Toast',
          props: { message: 'A new version is available.', variant: 'info', show: true },
        },
      ]),
    ),
};

export const Warning: Story = {
  render: () =>
    renderSpec(
      page('Files', 'Browse and manage uploaded assets.', 'Manage storage', [
        {
          type: 'Toast',
          props: { message: 'Storage quota at 90%.', variant: 'warning', show: true },
        },
      ]),
    ),
};

export const Stacked: Story = {
  render: () =>
    renderSpec(
      page('Workspace', 'Multiple events just happened across your account.', 'View activity', [
        {
          type: 'Toast',
          props: { message: 'Your profile has been updated.', variant: 'success', show: true },
        },
        {
          type: 'Toast',
          props: { message: 'A new version is available.', variant: 'info', show: true },
        },
        {
          type: 'Toast',
          props: { message: 'Storage quota at 90%.', variant: 'warning', show: true },
        },
      ]),
    ),
};
