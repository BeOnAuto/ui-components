import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'ToggleGroup',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const ViewSwitcher: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'md', centered: true, title: 'View', description: 'Choose how items are displayed.' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm' },
          children: [
            { type: 'Heading', props: { text: 'Layout', level: 'h4' } },
            {
              type: 'ToggleGroup',
              props: {
                type: 'single',
                value: 'grid',
                items: [
                  { label: 'Grid', value: 'grid' },
                  { label: 'List', value: 'list' },
                  { label: 'Calendar', value: 'calendar' },
                ],
              },
            },
          ],
        },
      ],
    }),
};

export const TextAlign: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        maxWidth: 'md',
        centered: true,
        title: 'Text alignment',
        description: 'Set how paragraph text aligns within the block.',
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm' },
          children: [
            { type: 'Heading', props: { text: 'Alignment', level: 'h4' } },
            {
              type: 'ToggleGroup',
              props: {
                type: 'single',
                value: 'left',
                items: [
                  { label: 'Left', value: 'left' },
                  { label: 'Center', value: 'center' },
                  { label: 'Right', value: 'right' },
                  { label: 'Justify', value: 'justify' },
                ],
              },
            },
          ],
        },
      ],
    }),
};

export const WeekdayFilter: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        maxWidth: 'lg',
        centered: true,
        title: 'Days available',
        description: 'Pick the weekdays this slot is offered.',
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm' },
          children: [
            { type: 'Heading', props: { text: 'Weekdays', level: 'h4' } },
            {
              type: 'ToggleGroup',
              props: {
                type: 'multiple',
                value: 'mon,wed,fri',
                items: [
                  { label: 'Mon', value: 'mon' },
                  { label: 'Tue', value: 'tue' },
                  { label: 'Wed', value: 'wed' },
                  { label: 'Thu', value: 'thu' },
                  { label: 'Fri', value: 'fri' },
                  { label: 'Sat', value: 'sat' },
                  { label: 'Sun', value: 'sun' },
                ],
              },
            },
          ],
        },
      ],
    }),
};

export const FormatBar: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        maxWidth: 'md',
        centered: true,
        title: 'Filters',
        description: 'Toggle inline text styles for the current selection.',
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm' },
          children: [
            { type: 'Heading', props: { text: 'Formatting', level: 'h4' } },
            {
              type: 'ToggleGroup',
              props: {
                type: 'multiple',
                value: 'bold',
                items: [
                  { label: 'Bold', value: 'bold' },
                  { label: 'Italic', value: 'italic' },
                  { label: 'Underline', value: 'underline' },
                ],
              },
            },
          ],
        },
      ],
    }),
};
