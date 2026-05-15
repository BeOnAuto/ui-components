import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Button',
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const Primary: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Primary action', maxWidth: 'sm', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md', align: 'start' },
          children: [
            { type: 'Text', props: { text: 'Use the primary variant for the single most important action in a view.', variant: 'muted' } },
            { type: 'Button', props: { label: 'Save changes', variant: 'primary' } },
          ],
        },
      ],
    }),
};

export const Secondary: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Secondary action', maxWidth: 'sm', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md', align: 'start' },
          children: [
            { type: 'Text', props: { text: 'Use the secondary variant for supporting actions that sit beside a primary.', variant: 'muted' } },
            { type: 'Button', props: { label: 'Cancel', variant: 'secondary' } },
          ],
        },
      ],
    }),
};

export const Danger: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Destructive action', maxWidth: 'sm', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md', align: 'start' },
          children: [
            { type: 'Text', props: { text: 'Use the danger variant for irreversible actions like deletes.', variant: 'muted' } },
            { type: 'Button', props: { label: 'Delete account', variant: 'danger' } },
          ],
        },
      ],
    }),
};

export const AllVariants: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Button variants', description: 'Primary, secondary, danger, and disabled side by side.', maxWidth: 'lg', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'md', align: 'center', justify: 'start' },
          children: [
            { type: 'Button', props: { label: 'Publish post', variant: 'primary' } },
            { type: 'Button', props: { label: 'Save draft', variant: 'secondary' } },
            { type: 'Button', props: { label: 'Discard draft', variant: 'danger' } },
            { type: 'Button', props: { label: 'Submitting', variant: 'primary', disabled: true } },
          ],
        },
      ],
    }),
};

export const FormActions: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Edit profile', description: 'Update your account details and save when finished.', maxWidth: 'lg', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'lg', align: 'stretch' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'md', align: 'stretch' },
              children: [
                {
                  type: 'Field',
                  props: { label: 'Full name', required: true },
                  children: [{ type: 'Input', props: { name: 'fullName', type: 'text', placeholder: 'Ada Lovelace', value: 'Ada Lovelace' } }],
                },
                {
                  type: 'Field',
                  props: { label: 'Work email', required: true },
                  children: [{ type: 'Input', props: { name: 'email', type: 'email', placeholder: 'ada@example.com', value: 'ada@analytical.co' } }],
                },
              ],
            },
            { type: 'Separator', props: { orientation: 'horizontal' } },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'md', align: 'center', justify: 'end' },
              children: [
                { type: 'Button', props: { label: 'Cancel', variant: 'secondary' } },
                { type: 'Button', props: { label: 'Save changes', variant: 'primary' } },
              ],
            },
          ],
        },
      ],
    }),
};

export const DestructiveConfirm: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Delete account', description: 'This permanently removes your workspace and all associated data.', maxWidth: 'lg', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'lg', align: 'stretch' },
          children: [
            {
              type: 'Callout',
              props: { variant: 'error', title: 'This action cannot be undone', description: 'You will lose access to 12 projects, 4 teams, and all billing history.', iconName: 'TriangleAlert' },
            },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'md', align: 'center', justify: 'end' },
              children: [
                { type: 'Button', props: { label: 'Cancel', variant: 'secondary' } },
                { type: 'Button', props: { label: 'Delete account', variant: 'danger' } },
              ],
            },
          ],
        },
      ],
    }),
};

export const MarketingCTA: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Ship faster with Atlas', description: 'A toolkit for teams who want a polished product without the weekend bug-fixing marathon.', maxWidth: 'lg', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'lg', align: 'start' },
          children: [
            { type: 'Text', props: { text: 'Built-in accessibility, design tokens, and motion presets — drop it into any React app in minutes.', variant: 'body' } },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'md', align: 'center', justify: 'start' },
              children: [
                { type: 'Button', props: { label: 'Learn more', variant: 'secondary' } },
                { type: 'Button', props: { label: 'Get started', variant: 'primary' } },
              ],
            },
          ],
        },
      ],
    }),
};
