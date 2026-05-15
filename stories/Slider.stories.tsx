import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Slider',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const NotificationVolume: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'md', centered: true },
      children: [
        {
          type: 'Field',
          props: {
            label: 'Notification volume',
            description: 'Sets how loud alerts, mentions, and reminders play.',
          },
          children: [{ type: 'Slider', props: { min: 0, max: 100, value: 60 } }],
        },
      ],
    }),
};

export const WorkoutIntensity: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'md', centered: true },
      children: [
        {
          type: 'Field',
          props: {
            label: 'Workout intensity',
            description: 'Pick a level from 1 (easy recovery) to 10 (all-out).',
          },
          children: [{ type: 'Slider', props: { min: 1, max: 10, step: 1, value: 7 } }],
        },
      ],
    }),
};

export const PriceRangeCap: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'md', centered: true },
      children: [
        {
          type: 'Field',
          props: {
            label: 'Price range cap',
            description: 'Hide results above this monthly price. Range: $50 to $500.',
          },
          children: [{ type: 'Slider', props: { min: 50, max: 500, step: 10, value: 320 } }],
        },
      ],
    }),
};

export const Brightness: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'md', centered: true },
      children: [
        {
          type: 'Field',
          props: {
            label: 'Brightness',
            description: 'Adjust display brightness.',
          },
          children: [{ type: 'Slider', props: { min: 0, max: 100, value: 75 } }],
        },
      ],
    }),
};
