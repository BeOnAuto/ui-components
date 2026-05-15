import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'AlertDialog',
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode, initialState?: Record<string, unknown>) => (
  <JSONRender spec={spec} initialState={initialState} />
);

const demoCard = (heading: string, triggerLabel: string, dialog: NestedNode): NestedNode => ({
  type: 'Card',
  props: { maxWidth: 'lg', centered: true },
  children: [
    {
      type: 'Stack',
      props: { direction: 'vertical', gap: 'sm' },
      children: [
        { type: 'Heading', props: { text: heading, level: 'h3' } },
        { type: 'Text', props: { text: 'Click the action to reopen the confirmation.', variant: 'muted' } },
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'sm', justify: 'start' },
          children: [{ type: 'Button', props: { label: triggerLabel, variant: 'secondary' } }],
        },
        dialog,
      ],
    },
  ],
});

export const DeleteWorkspace: Story = {
  render: () =>
    renderSpec(
      demoCard('Delete workspace', 'Delete workspace', {
        type: 'AlertDialog',
        props: {
          title: 'Delete workspace?',
          description:
            'All projects, files, and member access will be permanently removed. This cannot be undone.',
          confirmLabel: 'Delete workspace',
          cancelLabel: 'Keep workspace',
          variant: 'destructive',
          openPath: '/confirm/open',
        },
      }),
      { confirm: { open: true } },
    ),
};

export const CancelSubscription: Story = {
  render: () =>
    renderSpec(
      demoCard('Cancel subscription', 'Cancel plan', {
        type: 'AlertDialog',
        props: {
          title: 'Cancel subscription?',
          description:
            'You will keep Pro features until the end of your current billing period on June 14.',
          confirmLabel: 'Cancel subscription',
          cancelLabel: 'Keep Pro',
          variant: 'destructive',
          openPath: '/confirm/open',
        },
      }),
      { confirm: { open: true } },
    ),
};

export const RemoveTeamMember: Story = {
  render: () =>
    renderSpec(
      demoCard('Remove team member', 'Remove member', {
        type: 'AlertDialog',
        props: {
          title: 'Remove Maria Chen from the team?',
          description: 'She will lose access to all shared workspaces and projects.',
          confirmLabel: 'Remove member',
          cancelLabel: 'Cancel',
          variant: 'destructive',
          openPath: '/confirm/open',
        },
      }),
      { confirm: { open: true } },
    ),
};

export const UnsavedChanges: Story = {
  render: () =>
    renderSpec(
      demoCard('Discard draft', 'Leave page', {
        type: 'AlertDialog',
        props: {
          title: 'Leave without saving?',
          description: 'Your draft will be discarded if you leave this page now.',
          confirmLabel: 'Leave page',
          cancelLabel: 'Keep editing',
          variant: 'default',
          openPath: '/confirm/open',
        },
      }),
      { confirm: { open: true } },
    ),
};

export const PublishChanges: Story = {
  render: () =>
    renderSpec(
      demoCard('Publish update', 'Publish v2.4', {
        type: 'AlertDialog',
        props: {
          title: 'Publish update to production?',
          description: 'Version 2.4 will roll out to all users within a few minutes.',
          confirmLabel: 'Publish now',
          cancelLabel: 'Not yet',
          variant: 'default',
          openPath: '/confirm/open',
        },
      }),
      { confirm: { open: true } },
    ),
};
