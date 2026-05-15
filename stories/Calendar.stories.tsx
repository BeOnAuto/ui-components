import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Calendar',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const Single: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Pick a date',
        description: 'Choose the day you would like your delivery to arrive.',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Field',
          props: { label: 'Delivery date' },
          children: [
            {
              type: 'Calendar',
              props: { mode: 'single' },
            },
          ],
        },
      ],
    }),
};

export const Range: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Select range',
        description: 'Pick the check-in and check-out dates for your stay.',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Field',
          props: { label: 'Trip dates', description: 'Minimum two nights.' },
          children: [
            {
              type: 'Calendar',
              props: { mode: 'range' },
            },
          ],
        },
      ],
    }),
};

export const Multiple: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Choose availability',
        description: 'Tap each day you can attend the workshop.',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Field',
          props: { label: 'Available days' },
          children: [
            {
              type: 'Calendar',
              props: { mode: 'multiple' },
            },
          ],
        },
      ],
    }),
};
