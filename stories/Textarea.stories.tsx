import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Textarea',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const FeedbackForm: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Share your feedback', maxWidth: 'md' },
      children: [
        {
          type: 'Field',
          props: {
            label: 'How was your experience?',
            description: 'Your response stays anonymous and helps us improve the product.',
          },
          children: [
            {
              type: 'Textarea',
              props: {
                name: 'feedback',
                placeholder: 'What did you think?',
                rows: 4,
              },
            },
          ],
        },
      ],
    }),
};

export const BugReport: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Report an issue', maxWidth: 'md' },
      children: [
        {
          type: 'Field',
          props: {
            label: 'Steps to reproduce',
            description: 'Walk us through what you did, what you expected, and what happened instead.',
          },
          children: [
            {
              type: 'Textarea',
              props: {
                name: 'bugReport',
                placeholder: 'Steps to reproduce…',
                rows: 6,
              },
            },
          ],
        },
      ],
    }),
};

export const CodeSnippet: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Attach a code sample', maxWidth: 'md' },
      children: [
        {
          type: 'Field',
          props: {
            label: 'Snippet',
            description: 'Paste the smallest reproducible example. Formatting is preserved.',
          },
          children: [
            {
              type: 'Textarea',
              props: {
                name: 'snippet',
                placeholder: 'Paste your code…',
                rows: 8,
              },
            },
          ],
        },
      ],
    }),
};

export const Bio: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Profile', maxWidth: 'md' },
      children: [
        {
          type: 'Field',
          props: {
            label: 'About you',
            description: 'A short intro shown on your public profile. Keep it friendly.',
          },
          children: [
            {
              type: 'Textarea',
              props: {
                name: 'bio',
                placeholder: 'Tell us about yourself…',
                rows: 3,
              },
            },
          ],
        },
      ],
    }),
};

export const WithValidation: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Detailed feedback', maxWidth: 'md' },
      children: [
        {
          type: 'Field',
          props: {
            label: 'What can we improve?',
            description: 'Share at least a few sentences so we can act on it.',
            required: true,
          },
          children: [
            {
              type: 'Textarea',
              props: {
                name: 'detailedFeedback',
                placeholder: 'Tell us what would make this better…',
                rows: 5,
                validateOn: 'blur',
                checks: [
                  { type: 'minLength', message: 'Please provide at least 20 characters', args: { min: 20 } },
                ],
              },
            },
          ],
        },
      ],
    }),
};
