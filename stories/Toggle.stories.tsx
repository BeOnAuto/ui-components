import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Toggle',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const Default: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Toggle', description: 'Default variant in resting state.', maxWidth: 'md', centered: true },
      children: [{ type: 'Toggle', props: { label: 'Notifications', variant: 'default' } }],
    }),
};

export const Pressed: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Toggle', description: 'Default variant, pressed state.', maxWidth: 'md', centered: true },
      children: [{ type: 'Toggle', props: { label: 'Do not disturb', variant: 'default', pressed: true } }],
    }),
};

export const Outline: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Toggle', description: 'Outline variant, unpressed.', maxWidth: 'md', centered: true },
      children: [{ type: 'Toggle', props: { label: 'Show grid', variant: 'outline' } }],
    }),
};

export const FormattingBar: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Formatting',
        description: 'Toolbar of inline text actions.',
        maxWidth: 'lg',
        centered: true,
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'sm', align: 'center' },
          children: [
            { type: 'Toggle', props: { label: 'Bold', variant: 'default', pressed: true } },
            { type: 'Toggle', props: { label: 'Italic', variant: 'default', pressed: true } },
            { type: 'Toggle', props: { label: 'Underline', variant: 'default' } },
            { type: 'Toggle', props: { label: 'Strike', variant: 'default' } },
            { type: 'Toggle', props: { label: 'Code', variant: 'default', pressed: true } },
            { type: 'Toggle', props: { label: 'Link', variant: 'default' } },
          ],
        },
      ],
    }),
};

export const VariantComparison: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Variants',
        description: 'Default and outline, in both pressed states.',
        maxWidth: 'lg',
        centered: true,
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'lg', align: 'start', justify: 'center' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Toggle', props: { label: 'Default', variant: 'default' } },
                { type: 'Text', props: { text: 'Default · Off', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Toggle', props: { label: 'Default', variant: 'default', pressed: true } },
                { type: 'Text', props: { text: 'Default · On', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Toggle', props: { label: 'Outline', variant: 'outline' } },
                { type: 'Text', props: { text: 'Outline · Off', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Toggle', props: { label: 'Outline', variant: 'outline', pressed: true } },
                { type: 'Text', props: { text: 'Outline · On', variant: 'caption' } },
              ],
            },
          ],
        },
      ],
    }),
};

export const FilterChips: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Customers',
        description: 'Filter by lifecycle stage.',
        maxWidth: 'lg',
        centered: true,
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'sm', align: 'center' },
          children: [
            { type: 'Toggle', props: { label: 'Active', variant: 'outline', pressed: true } },
            { type: 'Toggle', props: { label: 'Trial', variant: 'outline', pressed: true } },
            { type: 'Toggle', props: { label: 'Churned', variant: 'outline' } },
            { type: 'Toggle', props: { label: 'Free', variant: 'outline' } },
            { type: 'Toggle', props: { label: 'Enterprise', variant: 'outline', pressed: true } },
          ],
        },
      ],
    }),
};
