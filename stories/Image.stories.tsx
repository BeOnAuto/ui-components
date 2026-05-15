import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Image',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const LandscapeHero: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'md', className: 'max-w-3xl mx-auto p-4 w-full' },
      children: [
        { type: 'Heading', props: { text: 'Landscape hero', level: 'h2' } },
        {
          type: 'Text',
          props: { text: 'A 16:9 hero image that scales fluidly across viewports.', variant: 'muted' },
        },
        {
          type: 'Image',
          props: {
            src: 'https://picsum.photos/seed/landscape/1200/675',
            alt: 'A sweeping mountain landscape at golden hour',
            width: 1200,
            height: 675,
          },
        },
      ],
    }),
};

export const SquareCard: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'md', className: 'max-w-md mx-auto p-4 w-full' },
      children: [
        { type: 'Heading', props: { text: 'Square in a card', level: 'h2' } },
        {
          type: 'Text',
          props: { text: 'A 1:1 image nested in a contained card for avatars or product tiles.', variant: 'muted' },
        },
        {
          type: 'Card',
          props: { title: null, description: null, maxWidth: 'sm', centered: null, className: null },
          children: [
            {
              type: 'Image',
              props: {
                src: 'https://picsum.photos/seed/architecture/800/800',
                alt: 'Modern architecture photographed from below',
                width: 800,
                height: 800,
              },
            },
          ],
        },
      ],
    }),
};

export const Portrait: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'md', className: 'max-w-md mx-auto p-4 w-full' },
      children: [
        { type: 'Heading', props: { text: 'Portrait', level: 'h2' } },
        {
          type: 'Text',
          props: { text: 'A 2:3 editorial crop for profiles and feature spots.', variant: 'muted' },
        },
        {
          type: 'Image',
          props: {
            src: 'https://picsum.photos/seed/portrait/600/900',
            alt: 'A portrait-orientation editorial photograph',
            width: 600,
            height: 900,
          },
        },
      ],
    }),
};

export const WideBanner: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'md', className: 'max-w-3xl mx-auto p-4 w-full' },
      children: [
        { type: 'Heading', props: { text: 'Wide banner', level: 'h2' } },
        {
          type: 'Text',
          props: { text: 'An ultra-wide cinematic crop for page headers and CTAs.', variant: 'muted' },
        },
        {
          type: 'Image',
          props: {
            src: 'https://picsum.photos/seed/banner/1600/500',
            alt: 'A wide cinematic banner image',
            width: 1600,
            height: 500,
          },
        },
      ],
    }),
};

export const PhotoGrid: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'md', className: 'max-w-3xl mx-auto p-4 w-full' },
      children: [
        { type: 'Heading', props: { text: 'Photo grid', level: 'h2' } },
        {
          type: 'Text',
          props: { text: 'A three-column grid of square thumbnails for galleries.', variant: 'muted' },
        },
        {
          type: 'Grid',
          props: { columns: 3, gap: 'md', className: null },
          children: [
            {
              type: 'Image',
              props: {
                src: 'https://picsum.photos/seed/thumb-one/600/600',
                alt: 'Gallery thumbnail one',
                width: 600,
                height: 600,
              },
            },
            {
              type: 'Image',
              props: {
                src: 'https://picsum.photos/seed/thumb-two/600/600',
                alt: 'Gallery thumbnail two',
                width: 600,
                height: 600,
              },
            },
            {
              type: 'Image',
              props: {
                src: 'https://picsum.photos/seed/thumb-three/600/600',
                alt: 'Gallery thumbnail three',
                width: 600,
                height: 600,
              },
            },
            {
              type: 'Image',
              props: {
                src: 'https://picsum.photos/seed/thumb-four/600/600',
                alt: 'Gallery thumbnail four',
                width: 600,
                height: 600,
              },
            },
            {
              type: 'Image',
              props: {
                src: 'https://picsum.photos/seed/thumb-five/600/600',
                alt: 'Gallery thumbnail five',
                width: 600,
                height: 600,
              },
            },
            {
              type: 'Image',
              props: {
                src: 'https://picsum.photos/seed/thumb-six/600/600',
                alt: 'Gallery thumbnail six',
                width: 600,
                height: 600,
              },
            },
          ],
        },
      ],
    }),
};
