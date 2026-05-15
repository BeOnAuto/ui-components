import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Avatar',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

const labeledAvatar = (avatar: NestedNode, caption: string): NestedNode => ({
  type: 'Stack',
  props: { direction: 'vertical', gap: 'sm', align: 'center' },
  children: [avatar, { type: 'Text', props: { text: caption, variant: 'caption' } }],
});

export const WithImage: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'md', centered: true, title: 'Profile photo', description: 'Loaded from a remote source.' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'md', align: 'center' },
          children: [
            {
              type: 'Avatar',
              props: { src: 'https://i.pravatar.cc/150?img=12', name: 'Jane Doe', size: 'lg' },
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'none' },
              children: [
                { type: 'Heading', props: { text: 'Jane Doe', level: 'h4' } },
                { type: 'Text', props: { text: 'Product Designer', variant: 'muted' } },
              ],
            },
          ],
        },
      ],
    }),
};

export const InitialsFallback: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        maxWidth: 'md',
        centered: true,
        title: 'Image failed to load',
        description: 'Falls back to initials when the src 404s.',
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'md', align: 'center' },
          children: [
            {
              type: 'Avatar',
              props: {
                src: 'https://example.invalid/missing-portrait.png',
                name: 'Alex Rivera',
                size: 'lg',
              },
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'none' },
              children: [
                { type: 'Heading', props: { text: 'Alex Rivera', level: 'h4' } },
                { type: 'Text', props: { text: 'Engineering Lead', variant: 'muted' } },
              ],
            },
          ],
        },
      ],
    }),
};

export const InitialsOnly: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        maxWidth: 'md',
        centered: true,
        title: 'No image provided',
        description: 'Renders initials derived from the name.',
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'md', align: 'center' },
          children: [
            { type: 'Avatar', props: { name: 'Priya Patel', size: 'lg' } },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'none' },
              children: [
                { type: 'Heading', props: { text: 'Priya Patel', level: 'h4' } },
                { type: 'Text', props: { text: 'Customer Success', variant: 'muted' } },
              ],
            },
          ],
        },
      ],
    }),
};

export const Sizes: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true, title: 'Size scale', description: 'Small, medium, and large.' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'md', align: 'center', justify: 'center' },
          children: [
            labeledAvatar(
              { type: 'Avatar', props: { src: 'https://i.pravatar.cc/150?img=5', name: 'Jane Doe', size: 'sm' } },
              'sm',
            ),
            labeledAvatar(
              { type: 'Avatar', props: { src: 'https://i.pravatar.cc/150?img=8', name: 'Alex Rivera', size: 'md' } },
              'md',
            ),
            labeledAvatar(
              { type: 'Avatar', props: { src: 'https://i.pravatar.cc/150?img=15', name: 'Marcus Lee', size: 'lg' } },
              'lg',
            ),
          ],
        },
      ],
    }),
};

export const Variants: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        maxWidth: 'lg',
        centered: true,
        title: 'Variants',
        description: 'Image source, broken source fallback, and initials only.',
      },
      children: [
        {
          type: 'Grid',
          props: { columns: 3, gap: 'lg' },
          children: [
            labeledAvatar(
              {
                type: 'Avatar',
                props: { src: 'https://i.pravatar.cc/150?img=12', name: 'Jane Doe', size: 'lg' },
              },
              'With image',
            ),
            labeledAvatar(
              {
                type: 'Avatar',
                props: {
                  src: 'https://example.invalid/missing-portrait.png',
                  name: 'Alex Rivera',
                  size: 'lg',
                },
              },
              'Broken src fallback',
            ),
            labeledAvatar(
              { type: 'Avatar', props: { name: 'Priya Patel', size: 'lg' } },
              'Initials only',
            ),
          ],
        },
      ],
    }),
};

export const Roster: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true, title: 'Team roster', description: 'A mixed group of teammates.' },
      children: [
        {
          type: 'Grid',
          props: { columns: 4, gap: 'lg' },
          children: [
            labeledAvatar(
              { type: 'Avatar', props: { src: 'https://i.pravatar.cc/150?img=12', name: 'Jane Doe', size: 'lg' } },
              'Jane Doe',
            ),
            labeledAvatar(
              { type: 'Avatar', props: { src: 'https://i.pravatar.cc/150?img=8', name: 'Alex Rivera', size: 'lg' } },
              'Alex Rivera',
            ),
            labeledAvatar(
              { type: 'Avatar', props: { name: 'Priya Patel', size: 'lg' } },
              'Priya Patel',
            ),
            labeledAvatar(
              { type: 'Avatar', props: { src: 'https://i.pravatar.cc/150?img=15', name: 'Marcus Lee', size: 'lg' } },
              'Marcus Lee',
            ),
          ],
        },
      ],
    }),
};
