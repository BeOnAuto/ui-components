import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Timeline',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const ProjectActivity: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Recent activity',
        description: 'Latest events across the Atlas mobile app project.',
        maxWidth: 'lg',
        centered: true,
      },
      children: [
        {
          type: 'Timeline',
          props: {
            items: [
              {
                title: 'Hotfix deployed to production',
                description: 'Build #285 shipped by Priya Shah after rollback verification.',
                timestamp: '2m ago',
                iconName: 'Rocket',
                variant: 'success',
              },
              {
                title: 'Rollback triggered',
                description: 'Build #284 reverted to #283 after a 4x error spike on checkout.',
                timestamp: '38m ago',
                iconName: 'XCircle',
                variant: 'error',
              },
              {
                title: 'Performance regression detected',
                description: 'p95 latency jumped from 240ms to 612ms on /checkout.',
                timestamp: '1h ago',
                iconName: 'AlertTriangle',
                variant: 'warning',
              },
              {
                title: 'Pull request merged',
                description: 'Elena Morris merged #1284 "Refactor checkout reducer" into main.',
                timestamp: '3h ago',
                iconName: 'GitMerge',
                variant: 'default',
              },
              {
                title: 'Design review approved',
                description: 'Onboarding flow signed off by the design team.',
                timestamp: 'Yesterday',
                iconName: 'CheckCircle',
                variant: 'success',
              },
              {
                title: 'Project created',
                description: 'Elena Morris created the project "Atlas mobile app".',
                timestamp: 'Mar 14',
                iconName: 'FolderPlus',
                variant: 'default',
              },
            ],
          },
        },
      ],
    }),
};

export const CustomerJourney: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Customer onboarding journey',
        description: 'Progress for Northwind Labs through the activation flow.',
        maxWidth: 'lg',
        centered: true,
      },
      children: [
        {
          type: 'Timeline',
          props: {
            items: [
              {
                title: 'Account created',
                description: 'Workspace provisioned for northwind-labs.acme.app.',
                timestamp: 'Mar 4',
                iconName: 'CheckCircle',
                variant: 'success',
              },
              {
                title: 'Team invited',
                description: '8 of 12 teammates accepted their invitations.',
                timestamp: 'Mar 6',
                iconName: 'CheckCircle',
                variant: 'success',
              },
              {
                title: 'Integrations connected',
                description: 'GitHub and Slack linked; Jira pending admin approval.',
                timestamp: 'Mar 9',
                iconName: 'AlertTriangle',
                variant: 'warning',
              },
              {
                title: 'First workflow run',
                description: 'Inventory sync completed across 3 warehouses.',
                timestamp: 'Mar 12',
                iconName: 'CheckCircle',
                variant: 'success',
              },
              {
                title: 'Plan upgrade pending',
                description: 'Trial ends in 4 days. Awaiting decision from finance.',
                timestamp: 'Mar 14',
                iconName: 'Circle',
                variant: 'default',
              },
            ],
          },
        },
      ],
    }),
};

export const IncidentTimeline: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Incident INC-2041',
        description: 'Checkout API outage on us-east-1. Severity: SEV-2.',
        maxWidth: 'lg',
        centered: true,
      },
      children: [
        {
          type: 'Timeline',
          props: {
            items: [
              {
                title: 'Alert fired',
                description: 'Error rate on /checkout breached 5% over a 1m window.',
                timestamp: '4:47 PM',
                iconName: 'AlertTriangle',
                variant: 'warning',
              },
              {
                title: 'On-call paged',
                description: 'Priya Shah acknowledged the page within 38 seconds.',
                timestamp: '4:49 PM',
                iconName: 'XCircle',
                variant: 'error',
              },
              {
                title: 'Customer impact confirmed',
                description: 'Estimated 14% of checkout sessions failing in us-east-1.',
                timestamp: '4:54 PM',
                iconName: 'XCircle',
                variant: 'error',
              },
              {
                title: 'Mitigation in progress',
                description: 'Traffic shifted to us-west-2; rollback to build #283 initiated.',
                timestamp: '5:02 PM',
                iconName: 'AlertTriangle',
                variant: 'warning',
              },
              {
                title: 'Incident resolved',
                description: 'Error rate returned to baseline. Postmortem scheduled for tomorrow.',
                timestamp: '5:23 PM',
                iconName: 'CheckCircle',
                variant: 'success',
              },
            ],
          },
        },
      ],
    }),
};
