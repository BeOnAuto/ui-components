import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'HoverCard',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const Mention: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Refactor onboarding wizard',
        description: 'Issue OPS-482 in the Growth project',
        maxWidth: 'lg',
        centered: true,
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'sm', align: 'center' },
              children: [
                { type: 'Text', props: { text: 'Assigned to' } },
                {
                  type: 'HoverCard',
                  props: { openDelay: 120 },
                  children: [
                    {
                      type: 'Link',
                      props: { href: '#' },
                      children: [{ type: 'Text', props: { text: '@jane.doe' } }],
                    },
                    {
                      type: 'Stack',
                      props: { direction: 'vertical', gap: 'sm' },
                      children: [
                        {
                          type: 'Stack',
                          props: { direction: 'horizontal', gap: 'md', align: 'center' },
                          children: [
                            {
                              type: 'Avatar',
                              props: { src: 'https://i.pravatar.cc/150?img=47', name: 'Jane Doe', size: 'lg' },
                            },
                            {
                              type: 'Stack',
                              props: { direction: 'vertical', gap: 'none' },
                              children: [
                                { type: 'Heading', props: { text: 'Jane Doe', level: 'h4' } },
                                { type: 'Text', props: { text: 'Staff Engineer, Platform', variant: 'muted' } },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'Text',
                          props: {
                            text: 'Leads the onboarding squad. Based in Berlin, online 09:00 to 17:00 CET.',
                            variant: 'muted',
                          },
                        },
                      ],
                    },
                  ],
                },
                { type: 'Text', props: { text: 'and 3 others' } },
              ],
            },
            {
              type: 'Text',
              props: {
                text: 'Hover the mention to see who owns this work and when they are typically reachable.',
                variant: 'muted',
              },
            },
          ],
        },
      ],
    }),
};

export const ProjectLink: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Recent activity',
        description: 'Updates from projects you follow',
        maxWidth: 'lg',
        centered: true,
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'sm', align: 'center' },
              children: [
                { type: 'Text', props: { text: 'Maya pushed 4 commits to' } },
                {
                  type: 'HoverCard',
                  props: { openDelay: 150 },
                  children: [
                    {
                      type: 'Link',
                      props: { href: '#' },
                      children: [{ type: 'Text', props: { text: 'apollo-checkout' } }],
                    },
                    {
                      type: 'Stack',
                      props: { direction: 'vertical', gap: 'sm' },
                      children: [
                        {
                          type: 'Stack',
                          props: { direction: 'horizontal', gap: 'sm', align: 'center' },
                          children: [
                            { type: 'Heading', props: { text: 'apollo-checkout', level: 'h4' } },
                            { type: 'Badge', props: { text: 'Healthy', variant: 'default' } },
                          ],
                        },
                        {
                          type: 'Text',
                          props: {
                            text: 'Stripe-backed checkout flow shared across web and mobile clients.',
                            variant: 'muted',
                          },
                        },
                        {
                          type: 'Grid',
                          props: { columns: 3, gap: 'sm' },
                          children: [
                            {
                              type: 'Stack',
                              props: { direction: 'vertical', gap: 'none' },
                              children: [
                                { type: 'Text', props: { text: 'Updated', variant: 'caption' } },
                                { type: 'Text', props: { text: '14m ago' } },
                              ],
                            },
                            {
                              type: 'Stack',
                              props: { direction: 'vertical', gap: 'none' },
                              children: [
                                { type: 'Text', props: { text: 'Open PRs', variant: 'caption' } },
                                { type: 'Text', props: { text: '7' } },
                              ],
                            },
                            {
                              type: 'Stack',
                              props: { direction: 'vertical', gap: 'none' },
                              children: [
                                { type: 'Text', props: { text: 'Coverage', variant: 'caption' } },
                                { type: 'Text', props: { text: '92%' } },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                { type: 'Text', props: { text: 'on main.' } },
              ],
            },
            {
              type: 'Text',
              props: {
                text: 'Hover the project name to preview its current status, last update, and headline stats.',
                variant: 'muted',
              },
            },
          ],
        },
      ],
    }),
};

export const MetricTrend: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Weekly performance',
        description: 'Headline metric with a trend on hover',
        maxWidth: 'lg',
        centered: true,
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Card',
              props: { title: 'Monthly recurring revenue', maxWidth: 'full' },
              children: [
                {
                  type: 'HoverCard',
                  props: { openDelay: 100 },
                  children: [
                    { type: 'Heading', props: { text: '$48,210', level: 'h2' } },
                    {
                      type: 'Stack',
                      props: { direction: 'vertical', gap: 'sm' },
                      children: [
                        {
                          type: 'Stack',
                          props: { direction: 'horizontal', gap: 'sm', align: 'center' },
                          children: [
                            { type: 'Heading', props: { text: 'Up 12.4%', level: 'h4' } },
                            { type: 'Badge', props: { text: 'On pace', variant: 'default' } },
                          ],
                        },
                        { type: 'Text', props: { text: 'Week over week', variant: 'caption' } },
                        {
                          type: 'Sparkline',
                          props: {
                            data: [38, 39, 41, 40, 43, 45, 44, 46, 48, 47, 49, 48],
                            color: '#16a34a',
                            height: 64,
                          },
                        },
                        {
                          type: 'Text',
                          props: {
                            text: 'Growth accelerated mid-week after the annual plan launched in EU. Two enterprise renewals closed Friday.',
                            variant: 'muted',
                          },
                        },
                      ],
                    },
                  ],
                },
                { type: 'Text', props: { text: 'Across 1,284 active subscriptions', variant: 'muted' } },
              ],
            },
            {
              type: 'Text',
              props: {
                text: 'Hover the headline number to see the trend line and the story behind this week.',
                variant: 'muted',
              },
            },
          ],
        },
      ],
    }),
};
