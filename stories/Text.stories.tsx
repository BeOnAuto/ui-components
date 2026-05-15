import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Text',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const Body: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true },
      children: [
        {
          type: 'Text',
          props: {
            text: 'Body text is the workhorse style for paragraphs, descriptions, and any long-form copy that needs to remain comfortable to read at typical screen distances. It balances line height and measure so eyes can track from one line to the next without losing the thread.',
          },
        },
      ],
    }),
};

export const Lead: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            { type: 'Heading', props: { text: 'Ship faster, with less friction', level: 'h1' } },
            {
              type: 'Text',
              props: {
                text: 'The fastest way to build internal tools that your team actually wants to use — without wiring up another framework from scratch.',
                variant: 'lead',
              },
            },
          ],
        },
      ],
    }),
};

export const Variants: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true, title: 'Text variants' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'lg' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm' },
              children: [
                { type: 'Heading', props: { text: 'Lead', level: 'h3' } },
                {
                  type: 'Text',
                  props: {
                    text: 'Larger intro text for landing pages, hero sections, and the first paragraph of a long-form article.',
                    variant: 'lead',
                  },
                },
              ],
            },
            { type: 'Separator', props: { orientation: 'horizontal' } },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm' },
              children: [
                { type: 'Heading', props: { text: 'Body', level: 'h3' } },
                {
                  type: 'Text',
                  props: {
                    text: 'Our default paragraph style for product copy, documentation, and anywhere readers spend more than a glance.',
                  },
                },
              ],
            },
            { type: 'Separator', props: { orientation: 'horizontal' } },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm' },
              children: [
                { type: 'Heading', props: { text: 'Muted', level: 'h3' } },
                {
                  type: 'Text',
                  props: {
                    text: 'Secondary text for hints, helper copy, and form field descriptions where the content supports but should not compete.',
                    variant: 'muted',
                  },
                },
              ],
            },
            { type: 'Separator', props: { orientation: 'horizontal' } },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm' },
              children: [
                { type: 'Heading', props: { text: 'Caption', level: 'h3' } },
                {
                  type: 'Text',
                  props: {
                    text: 'Small text for labels, image captions, timestamps, and metadata that lives at the edge of the layout.',
                    variant: 'caption',
                  },
                },
              ],
            },
            { type: 'Separator', props: { orientation: 'horizontal' } },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm' },
              children: [
                { type: 'Heading', props: { text: 'Code', level: 'h3' } },
                {
                  type: 'Text',
                  props: {
                    text: 'const greeting = "hello, world";',
                    variant: 'code',
                  },
                },
              ],
            },
          ],
        },
      ],
    }),
};

export const ArticleBlock: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            { type: 'Heading', props: { text: 'Designing for trust at scale', level: 'h1' } },
            {
              type: 'Text',
              props: {
                text: 'Every interface decision either builds confidence or quietly chips away at it. Here is how we think about that tradeoff when shipping to millions of customers.',
                variant: 'lead',
              },
            },
            {
              type: 'Text',
              props: {
                text: 'Trust is the cumulative result of countless small moments — a button that responds instantly, an error message that explains what went wrong, a loading state that respects your time. None of these are headline features, yet together they form the texture of a product people return to.',
              },
            },
            {
              type: 'Text',
              props: {
                text: 'We start by mapping the moments where uncertainty creeps in. A user submits a form and waits. A page reloads after a payment. A sync runs in the background. Each of these is an opportunity to communicate, to confirm, or to gently set expectations about what happens next.',
              },
            },
            {
              type: 'Text',
              props: {
                text: 'The teams who do this well treat copy, motion, and timing as primary design materials — not afterthoughts. The result is software that feels considered, even when individual screens are simple.',
              },
            },
          ],
        },
      ],
    }),
};

export const InlineCode: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true, title: 'Getting started' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Text',
              props: {
                text: 'Clone the repository, install dependencies, and start the dev server. The whole setup takes about a minute on a modern laptop.',
              },
            },
            {
              type: 'Text',
              props: { text: 'pnpm install', variant: 'code' },
            },
            {
              type: 'Text',
              props: {
                text: 'Once dependencies are in place, start Storybook to browse the component catalog and try out interactive examples.',
              },
            },
            {
              type: 'Text',
              props: { text: 'pnpm storybook', variant: 'code' },
            },
            {
              type: 'Text',
              props: {
                text: 'Open http://localhost:6006 in your browser to view the running instance.',
                variant: 'muted',
              },
            },
          ],
        },
      ],
    }),
};
