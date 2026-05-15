import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Sonner',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode, initialState?: Record<string, unknown>) => (
  <JSONRender spec={spec} initialState={initialState} />
);

const demoFrame = (children: NestedNode[]): NestedNode => ({
  type: 'Stack',
  props: { direction: 'vertical', align: 'center', justify: 'center', gap: 'md', className: 'min-h-screen w-full p-4 sm:p-6 md:p-10 bg-muted/30' },
  children: [
    {
      type: 'Card',
      props: { maxWidth: 'lg', centered: true, title: 'Sonner', description: 'Global toast container. Mount once at the root.' },
      children,
    },
  ],
});

export const ContainerOnly: Story = {
  render: () =>
    renderSpec(
      demoFrame([
        { type: 'Sonner', props: {} },
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm' },
          children: [
            { type: 'Heading', props: { text: 'Container only', level: 'h3' } },
            { type: 'Text', props: { text: 'Nothing visible by design — wires up the toast queue.', variant: 'muted' } },
          ],
        },
      ]),
    ),
};

export const WithToast: Story = {
  render: () =>
    renderSpec(
      demoFrame([
        { type: 'Sonner', props: {} },
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm' },
          children: [
            { type: 'Heading', props: { text: 'Single toast', level: 'h3' } },
            { type: 'Text', props: { text: 'A success toast fires when this story mounts.', variant: 'muted' } },
          ],
        },
        { type: 'Toast', props: { message: 'Profile saved', variant: 'success', show: true } },
      ]),
    ),
};

export const Stacked: Story = {
  render: () =>
    renderSpec(
      demoFrame([
        { type: 'Sonner', props: {} },
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm' },
          children: [
            { type: 'Heading', props: { text: 'Stacked toasts', level: 'h3' } },
            { type: 'Text', props: { text: 'Three variants fire together to show how the queue stacks.', variant: 'muted' } },
          ],
        },
        { type: 'Toast', props: { message: 'Profile saved', variant: 'success', show: true } },
        { type: 'Toast', props: { message: 'New comment on your post', variant: 'info', show: true } },
        { type: 'Toast', props: { message: 'Storage almost full', variant: 'warning', show: true } },
      ]),
    ),
};
