import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Heading',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

const centeredFrame = (child: NestedNode): NestedNode => ({
  type: 'Stack',
  props: { direction: 'vertical', align: 'center', className: 'min-h-screen w-full p-6 sm:p-10 bg-muted/30' },
  children: [
    {
      type: 'Card',
      props: { title: null, description: null, className: 'max-w-3xl w-full' },
      children: [child],
    },
  ],
});

export const Default: Story = {
  render: () =>
    renderSpec(
      centeredFrame({
        type: 'Stack',
        props: { direction: 'vertical', gap: 'sm' },
        children: [
          { type: 'Heading', props: { text: 'Ship beautiful product faster', level: 'h1' } },
          {
            type: 'Text',
            props: {
              text: 'A typed component catalog your AI can render from JSON, with sensible defaults and accessible primitives out of the box.',
              variant: 'muted',
            },
          },
        ],
      }),
    ),
};

export const Hierarchy: Story = {
  render: () =>
    renderSpec(
      centeredFrame({
        type: 'Stack',
        props: { direction: 'vertical', gap: 'lg' },
        children: [
          {
            type: 'Stack',
            props: { direction: 'vertical', gap: 'sm' },
            children: [
              { type: 'Heading', props: { text: 'Introducing Workbench 3.0', level: 'h1' } },
              {
                type: 'Text',
                props: {
                  text: 'A faster editor, smarter previews, and a redesigned component library shipping today.',
                  variant: 'lead',
                },
              },
            ],
          },
          {
            type: 'Stack',
            props: { direction: 'vertical', gap: 'sm' },
            children: [
              { type: 'Heading', props: { text: "What's new this release", level: 'h2' } },
              {
                type: 'Text',
                props: {
                  text: 'Three improvements teams asked for, plus a few quiet upgrades under the hood.',
                  variant: 'muted',
                },
              },
            ],
          },
          {
            type: 'Stack',
            props: { direction: 'vertical', gap: 'sm' },
            children: [
              { type: 'Heading', props: { text: 'Live multiplayer previews', level: 'h3' } },
              {
                type: 'Text',
                props: {
                  text: 'See your teammates edit and click through the same prototype in real time.',
                  variant: 'body',
                },
              },
            ],
          },
          {
            type: 'Stack',
            props: { direction: 'vertical', gap: 'sm' },
            children: [
              { type: 'Heading', props: { text: 'Keyboard shortcuts', level: 'h4' } },
              {
                type: 'Text',
                props: {
                  text: 'Press Cmd K to open the command palette from anywhere in the app.',
                  variant: 'body',
                },
              },
            ],
          },
        ],
      }),
    ),
};

export const PageHeader: Story = {
  render: () =>
    renderSpec(
      centeredFrame({
        type: 'Stack',
        props: { direction: 'vertical', gap: 'md' },
        children: [
          {
            type: 'Stack',
            props: { direction: 'horizontal', justify: 'between', align: 'center', gap: 'md', className: 'flex-wrap' },
            children: [
              {
                type: 'Stack',
                props: { direction: 'vertical', gap: 'sm' },
                children: [
                  { type: 'Heading', props: { text: 'Projects', level: 'h1' } },
                  {
                    type: 'Text',
                    props: {
                      text: 'Manage active work, archived experiments, and shared templates across your team.',
                      variant: 'muted',
                    },
                  },
                ],
              },
              {
                type: 'Stack',
                props: { direction: 'horizontal', gap: 'sm', align: 'center' },
                children: [
                  { type: 'Button', props: { label: 'Import', variant: 'secondary' } },
                  { type: 'Button', props: { label: 'New project', variant: 'primary' } },
                ],
              },
            ],
          },
        ],
      }),
    ),
};

export const SectionHeader: Story = {
  render: () =>
    renderSpec(
      centeredFrame({
        type: 'Stack',
        props: { direction: 'vertical', gap: 'md' },
        children: [
          {
            type: 'Stack',
            props: { direction: 'vertical', gap: 'sm' },
            children: [
              { type: 'Heading', props: { text: 'Billing & invoices', level: 'h2' } },
              {
                type: 'Text',
                props: {
                  text: 'Review past invoices, update your payment method, and download receipts for accounting.',
                  variant: 'muted',
                },
              },
            ],
          },
          { type: 'Separator', props: { orientation: 'horizontal' } },
          {
            type: 'Text',
            props: {
              text: 'Your next invoice for the Team plan will be issued on June 1.',
              variant: 'body',
            },
          },
        ],
      }),
    ),
};
