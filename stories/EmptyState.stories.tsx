import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'EmptyState',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const NoProjects: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Projects', description: 'Track issues, milestones, and releases across teams.', maxWidth: 'lg' },
      children: [
        {
          type: 'EmptyState',
          props: {
            title: 'No projects yet',
            description: 'Create your first project to start tracking issues, milestones, and releases.',
            iconName: 'FolderOpen',
          },
          children: [
            { type: 'Button', props: { label: 'Create project', variant: 'primary' } },
          ],
        },
      ],
    }),
};

export const InboxZero: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Inbox', description: 'Messages from teammates and notifications.', maxWidth: 'lg' },
      children: [
        {
          type: 'EmptyState',
          props: {
            title: 'You are all caught up',
            description: 'No unread messages in your inbox. Take a breather or start a new conversation.',
            iconName: 'Inbox',
          },
          children: [
            { type: 'Button', props: { label: 'Compose', variant: 'primary' } },
          ],
        },
      ],
    }),
};

export const NoSearchResults: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Documents', description: 'Search across files shared with your workspace.', maxWidth: 'lg' },
      children: [
        {
          type: 'EmptyState',
          props: {
            title: 'No results for "billing-report"',
            description: 'Try different keywords or check that the document is shared with your team.',
            iconName: 'Search',
          },
          children: [
            { type: 'Button', props: { label: 'Clear filters', variant: 'secondary' } },
          ],
        },
      ],
    }),
};

export const NoTeamMembers: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Team', description: 'People with access to this workspace.', maxWidth: 'lg' },
      children: [
        {
          type: 'EmptyState',
          props: {
            title: 'No teammates yet',
            description: 'Invite collaborators to share projects, assign work, and review changes together.',
            iconName: 'Users',
          },
          children: [
            { type: 'Button', props: { label: 'Invite teammate', variant: 'primary' } },
          ],
        },
      ],
    }),
};
