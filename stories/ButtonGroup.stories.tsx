import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'ButtonGroup',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const DateRange: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'sm', className: 'max-w-md p-6' },
      children: [
        { type: 'Heading', props: { text: 'Date range', level: 'h4' } },
        {
          type: 'ButtonGroup',
          props: {
            selected: '30d',
            buttons: [
              { label: '7d', value: '7d' },
              { label: '30d', value: '30d' },
              { label: '90d', value: '90d' },
              { label: '1y', value: '1y' },
            ],
          },
        },
      ],
    }),
};

export const Plan: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'sm', className: 'max-w-lg p-6' },
      children: [
        { type: 'Heading', props: { text: 'Plan', level: 'h4' } },
        {
          type: 'ButtonGroup',
          props: {
            selected: 'pro',
            buttons: [
              { label: 'Free', value: 'free' },
              { label: 'Pro', value: 'pro' },
              { label: 'Team', value: 'team' },
              { label: 'Enterprise', value: 'enterprise' },
            ],
          },
        },
      ],
    }),
};

export const Status: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'sm', className: 'max-w-md p-6' },
      children: [
        { type: 'Heading', props: { text: 'Status', level: 'h4' } },
        {
          type: 'ButtonGroup',
          props: {
            buttons: [
              { label: 'Draft', value: 'draft' },
              { label: 'In review', value: 'review' },
              { label: 'Published', value: 'published' },
            ],
          },
        },
      ],
    }),
};
