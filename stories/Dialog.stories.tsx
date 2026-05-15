import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Dialog',
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode, initialState?: Record<string, unknown>) => (
  <JSONRender spec={spec} initialState={initialState} />
);

const stageCard = (heading: string, body: string, triggerLabel: string, dialog: NestedNode): NestedNode => ({
  type: 'Card',
  props: { maxWidth: 'lg', centered: true },
  children: [
    {
      type: 'Stack',
      props: { direction: 'vertical', gap: 'md' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm' },
          children: [
            { type: 'Heading', props: { text: heading, level: 'h3' } },
            { type: 'Text', props: { text: body, variant: 'muted' } },
          ],
        },
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'sm', justify: 'start' },
          children: [{ type: 'Button', props: { label: triggerLabel, variant: 'primary' } }],
        },
        dialog,
      ],
    },
  ],
});

export const InviteTeammate: Story = {
  render: () =>
    renderSpec(
      stageCard(
        'Team members',
        'Eight people have access to the Acme workspace. Add a teammate to start collaborating on the Q3 launch.',
        'Invite teammate',
        {
          type: 'Dialog',
          props: {
            title: 'Invite a teammate',
            description: 'They will receive an email with a link to join your workspace.',
            openPath: '/invite/open',
          },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'md' },
              children: [
                {
                  type: 'Field',
                  props: { label: 'Email address', required: true },
                  children: [
                    { type: 'Input', props: { type: 'email', placeholder: 'name@company.com' } },
                  ],
                },
                {
                  type: 'Field',
                  props: { label: 'Role', description: 'Editors can publish; viewers can comment.' },
                  children: [
                    {
                      type: 'Select',
                      props: { options: ['Admin', 'Editor', 'Viewer'], value: 'Editor' },
                    },
                  ],
                },
                {
                  type: 'Field',
                  props: { label: 'Personal note' },
                  children: [
                    {
                      type: 'Textarea',
                      props: { placeholder: 'Welcome to the team!', rows: 3 },
                    },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', gap: 'sm', justify: 'end' },
                  children: [
                    { type: 'Button', props: { label: 'Cancel', variant: 'secondary' } },
                    { type: 'Button', props: { label: 'Send invite', variant: 'primary' } },
                  ],
                },
              ],
            },
          ],
        },
      ),
      { invite: { open: true } },
    ),
};

export const ConfirmPublish: Story = {
  render: () =>
    renderSpec(
      stageCard(
        'Revenue dashboard',
        'Last edited 4 minutes ago. Publishing makes the latest version available to everyone with the share link.',
        'Publish dashboard',
        {
          type: 'Dialog',
          props: {
            title: 'Publish dashboard?',
            description: 'Anyone with the share link will be able to view the latest version.',
            openPath: '/publish/open',
          },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'md' },
              children: [
                {
                  type: 'Callout',
                  props: {
                    variant: 'info',
                    title: 'Three changes since last publish',
                    description: 'New revenue chart, updated cohort filter, and a refreshed footer.',
                  },
                },
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', gap: 'sm', justify: 'end' },
                  children: [
                    { type: 'Button', props: { label: 'Keep as draft', variant: 'secondary' } },
                    { type: 'Button', props: { label: 'Publish', variant: 'primary' } },
                  ],
                },
              ],
            },
          ],
        },
      ),
      { publish: { open: true } },
    ),
};

export const ShareDocument: Story = {
  render: () =>
    renderSpec(
      stageCard(
        'Launch plan v3',
        'Shared with 4 people in the Acme workspace. Send a link to bring more reviewers in.',
        'Share document',
        {
          type: 'Dialog',
          props: {
            title: 'Share "Launch plan v3"',
            description: 'Anyone added below will be notified by email.',
            openPath: '/share/open',
          },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'md' },
              children: [
                {
                  type: 'Field',
                  props: { label: 'Add people', description: 'Separate emails with commas.' },
                  children: [
                    {
                      type: 'Input',
                      props: { type: 'email', placeholder: 'mia@company.com, jordan@company.com' },
                    },
                  ],
                },
                {
                  type: 'Field',
                  props: { label: 'Access level' },
                  children: [
                    {
                      type: 'Select',
                      props: { options: ['Can view', 'Can comment', 'Can edit'], value: 'Can comment' },
                    },
                  ],
                },
                {
                  type: 'Checkbox',
                  props: { label: 'Notify people by email', checked: true },
                },
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', gap: 'sm', justify: 'between' },
                  children: [
                    { type: 'Button', props: { label: 'Copy link', variant: 'secondary' } },
                    {
                      type: 'Stack',
                      props: { direction: 'horizontal', gap: 'sm' },
                      children: [
                        { type: 'Button', props: { label: 'Cancel', variant: 'secondary' } },
                        { type: 'Button', props: { label: 'Send', variant: 'primary' } },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ),
      { share: { open: true } },
    ),
};

export const EditProfile: Story = {
  render: () =>
    renderSpec(
      stageCard(
        'Account settings',
        'Update how your name and contact info appear across the workspace and on shared documents.',
        'Edit profile',
        {
          type: 'Dialog',
          props: {
            title: 'Edit profile',
            description: 'Changes are visible to everyone in your workspace.',
            openPath: '/profile/open',
          },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'md' },
              children: [
                {
                  type: 'Field',
                  props: { label: 'Full name', required: true },
                  children: [{ type: 'Input', props: { value: 'Mia Alvarez' } }],
                },
                {
                  type: 'Field',
                  props: { label: 'Display name', description: 'Shown in mentions and comments.' },
                  children: [{ type: 'Input', props: { value: 'mia' } }],
                },
                {
                  type: 'Field',
                  props: { label: 'Time zone' },
                  children: [
                    {
                      type: 'Select',
                      props: {
                        options: [
                          'Pacific Time (US & Canada)',
                          'Mountain Time (US & Canada)',
                          'Central Time (US & Canada)',
                          'Eastern Time (US & Canada)',
                          'London (GMT)',
                          'Berlin (CET)',
                        ],
                        value: 'Pacific Time (US & Canada)',
                      },
                    },
                  ],
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
          ],
        },
      ),
      { profile: { open: true } },
    ),
};
