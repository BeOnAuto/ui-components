import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'SegmentedControl',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const DateRange: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Revenue summary',
        description: 'Compare totals across rolling time windows',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm' },
          children: [
            { type: 'Text', props: { text: 'Range', variant: 'muted' } },
            {
              type: 'SegmentedControl',
              props: {
                options: [
                  { value: 'week', label: 'Week' },
                  { value: 'month', label: 'Month' },
                  { value: 'quarter', label: 'Quarter' },
                  { value: 'year', label: 'Year' },
                ],
                value: 'month',
              },
            },
          ],
        },
        {
          type: 'Text',
          props: {
            text: 'Showing the last 30 days of activity across every connected workspace.',
            variant: 'muted',
          },
        },
      ],
    }),
};

export const ViewToggle: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'lg' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'md', justify: 'between', align: 'center' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'none' },
              children: [
                { type: 'Heading', props: { text: 'Projects', level: 'h2' } },
                { type: 'Text', props: { text: '24 active across your team', variant: 'muted' } },
              ],
            },
            {
              type: 'SegmentedControl',
              props: {
                options: [
                  { value: 'grid', label: 'Grid' },
                  { value: 'list', label: 'List' },
                  { value: 'calendar', label: 'Calendar' },
                ],
                value: 'grid',
              },
            },
          ],
        },
      ],
    }),
};

export const TwoOption: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Inbox filter',
        description: 'Switch between active and archived items',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm' },
          children: [
            { type: 'Text', props: { text: 'Status', variant: 'muted' } },
            {
              type: 'SegmentedControl',
              props: {
                options: [
                  { value: 'active', label: 'Active' },
                  { value: 'archived', label: 'Archived' },
                ],
                value: 'active',
              },
            },
          ],
        },
      ],
    }),
};

export const WithContent: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'lg' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'md', justify: 'between', align: 'center' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'none' },
              children: [
                { type: 'Heading', props: { text: 'Analytics', level: 'h2' } },
                { type: 'Text', props: { text: 'A snapshot of key metrics this week', variant: 'muted' } },
              ],
            },
            {
              type: 'SegmentedControl',
              props: {
                options: [
                  { value: 'overview', label: 'Overview' },
                  { value: 'traffic', label: 'Traffic' },
                  { value: 'revenue', label: 'Revenue' },
                ],
                value: 'overview',
              },
            },
          ],
        },
        {
          type: 'Card',
          props: {
            title: 'Overview',
            description: 'Aggregate health across every product surface',
            maxWidth: 'full',
          },
          children: [
            {
              type: 'Grid',
              props: { columns: 3, gap: 'md' },
              children: [
                {
                  type: 'Card',
                  props: { title: 'Visitors', description: 'Up 8.2% week over week', maxWidth: 'full' },
                  children: [{ type: 'Heading', props: { text: '24,180', level: 'h2' } }],
                },
                {
                  type: 'Card',
                  props: { title: 'Signups', description: 'Up 3.4% week over week', maxWidth: 'full' },
                  children: [{ type: 'Heading', props: { text: '1,492', level: 'h2' } }],
                },
                {
                  type: 'Card',
                  props: { title: 'Revenue', description: 'Up 11.7% week over week', maxWidth: 'full' },
                  children: [{ type: 'Heading', props: { text: '$38,402', level: 'h2' } }],
                },
              ],
            },
          ],
        },
      ],
    }),
};
