import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'DatePicker',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const Empty: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'New event', maxWidth: 'md', centered: true },
      children: [
        {
          type: 'Field',
          props: {
            label: 'Start date',
            description: 'Pick the day this event begins.',
          },
          children: [
            {
              type: 'DatePicker',
              props: { placeholder: 'Select date' },
            },
          ],
        },
      ],
    }),
};

export const Preselected: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Launch date', maxWidth: 'md', centered: true },
      children: [
        {
          type: 'Field',
          props: {
            label: 'Go-live date',
            description: 'Your campaign will publish at 9:00 AM on this day.',
          },
          children: [
            {
              type: 'DatePicker',
              props: { value: '2025-05-15', placeholder: 'Select date' },
            },
          ],
        },
      ],
    }),
};

export const ScheduleMeeting: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Schedule meeting',
        description: 'Set a time that works for your team.',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Field',
              props: { label: 'Meeting title', required: true },
              children: [
                {
                  type: 'Input',
                  props: {
                    name: 'title',
                    placeholder: 'Quarterly product review',
                  },
                },
              ],
            },
            {
              type: 'Field',
              props: { label: 'Date', required: true },
              children: [
                {
                  type: 'DatePicker',
                  props: { placeholder: 'Select date' },
                },
              ],
            },
            {
              type: 'Field',
              props: { label: 'Time', required: true },
              children: [
                {
                  type: 'Select',
                  props: {
                    name: 'time',
                    placeholder: 'Pick a time',
                    options: [
                      '9:00 AM',
                      '10:00 AM',
                      '11:00 AM',
                      '1:00 PM',
                      '2:00 PM',
                      '3:00 PM',
                      '4:00 PM',
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    }),
};
