import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Progress',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const FileUpload: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'md', title: 'Uploading 4 files', description: '2 of 4 complete' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            { type: 'Progress', props: { value: 100, label: 'photo-1.jpg / 100%' } },
            { type: 'Progress', props: { value: 78, label: 'photo-2.jpg / 78%' } },
            { type: 'Progress', props: { value: 42, label: 'photo-3.jpg / 42%' } },
            { type: 'Progress', props: { value: 0, label: 'photo-4.jpg / queued / 0%' } },
          ],
        },
      ],
    }),
};

export const Steps: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'md', title: 'Progress steps' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm' },
              children: [
                { type: 'Progress', props: { value: 25 } },
                { type: 'Text', props: { text: '25% / Getting started', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm' },
              children: [
                { type: 'Progress', props: { value: 50 } },
                { type: 'Text', props: { text: '50% / Halfway there', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm' },
              children: [
                { type: 'Progress', props: { value: 75 } },
                { type: 'Text', props: { text: '75% / Almost done', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm' },
              children: [
                { type: 'Progress', props: { value: 100 } },
                { type: 'Text', props: { text: '100% / Complete', variant: 'caption' } },
              ],
            },
          ],
        },
      ],
    }),
};

export const Onboarding: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'md', title: 'Welcome back', description: 'Finish setting up your workspace' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            { type: 'Progress', props: { value: 60, label: 'Onboarding progress / 3 of 5 steps' } },
            { type: 'Text', props: { text: 'Next up: invite your team', variant: 'muted' } },
          ],
        },
      ],
    }),
};
