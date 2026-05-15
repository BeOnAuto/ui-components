import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Stack',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => (
  <div className="p-6">
    <JSONRender spec={spec} />
  </div>
);

export const Vertical: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'lg', className: 'mx-auto' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm' },
          children: [
            { type: 'Heading', props: { text: 'Vertical stack', level: 'h2' } },
            {
              type: 'Text',
              props: {
                text: 'A column of mixed content — headings, body copy, and an action — held together by a single gap.',
                variant: 'muted',
              },
            },
          ],
        },
        {
          type: 'Card',
          props: { maxWidth: 'lg', title: 'Account verification', description: 'Confirm your details before continuing.' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'md' },
              children: [
                {
                  type: 'Text',
                  props: {
                    text: 'We sent a six-digit code to alex@example.com. Enter it below to verify your email and unlock billing settings.',
                  },
                },
                {
                  type: 'Text',
                  props: { text: 'The code expires in 10 minutes. Check your spam folder if it has not arrived.', variant: 'muted' },
                },
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', gap: 'sm', align: 'center' },
                  children: [
                    { type: 'Button', props: { label: 'Verify email', variant: 'primary' } },
                    { type: 'Button', props: { label: 'Resend code', variant: 'secondary' } },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
};

export const HorizontalWrap: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'lg' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm' },
          children: [
            { type: 'Heading', props: { text: 'Horizontal stack with wrap', level: 'h2' } },
            {
              type: 'Text',
              props: {
                text: 'Horizontal Stacks wrap automatically. Resize the canvas — chips flow to a new line as space runs out.',
                variant: 'muted',
              },
            },
          ],
        },
        {
          type: 'Card',
          props: { maxWidth: 'lg', title: 'Filter by tag' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'sm', align: 'center' },
              children: [
                { type: 'Badge', props: { text: 'Design systems', variant: 'default' } },
                { type: 'Badge', props: { text: 'Accessibility', variant: 'secondary' } },
                { type: 'Badge', props: { text: 'Performance', variant: 'outline' } },
                { type: 'Badge', props: { text: 'Typography', variant: 'secondary' } },
                { type: 'Badge', props: { text: 'Motion', variant: 'outline' } },
                { type: 'Badge', props: { text: 'Color theory', variant: 'default' } },
                { type: 'Badge', props: { text: 'Layout', variant: 'secondary' } },
                { type: 'Badge', props: { text: 'Icons', variant: 'outline' } },
                { type: 'Badge', props: { text: 'Forms', variant: 'secondary' } },
                { type: 'Badge', props: { text: 'Data viz', variant: 'default' } },
              ],
            },
          ],
        },
      ],
    }),
};

export const JustifyVariants: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'lg' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm' },
          children: [
            { type: 'Heading', props: { text: 'Justify variants', level: 'h2' } },
            {
              type: 'Text',
              props: {
                text: 'How children distribute along the main axis: start, center, end, and space-between.',
                variant: 'muted',
              },
            },
          ],
        },
        {
          type: 'Card',
          props: { maxWidth: 'lg' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'md' },
              children: [
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'sm' },
                  children: [
                    { type: 'Text', props: { text: 'justify="start"', variant: 'caption' } },
                    {
                      type: 'Stack',
                      props: { direction: 'horizontal', gap: 'sm', justify: 'start', align: 'center', className: 'rounded-md border border-dashed p-3' },
                      children: [
                        { type: 'Badge', props: { text: 'Draft' } },
                        { type: 'Badge', props: { text: 'In review', variant: 'secondary' } },
                      ],
                    },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'sm' },
                  children: [
                    { type: 'Text', props: { text: 'justify="center"', variant: 'caption' } },
                    {
                      type: 'Stack',
                      props: { direction: 'horizontal', gap: 'sm', justify: 'center', align: 'center', className: 'rounded-md border border-dashed p-3' },
                      children: [
                        { type: 'Badge', props: { text: 'Draft' } },
                        { type: 'Badge', props: { text: 'In review', variant: 'secondary' } },
                      ],
                    },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'sm' },
                  children: [
                    { type: 'Text', props: { text: 'justify="end"', variant: 'caption' } },
                    {
                      type: 'Stack',
                      props: { direction: 'horizontal', gap: 'sm', justify: 'end', align: 'center', className: 'rounded-md border border-dashed p-3' },
                      children: [
                        { type: 'Badge', props: { text: 'Draft' } },
                        { type: 'Badge', props: { text: 'In review', variant: 'secondary' } },
                      ],
                    },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'sm' },
                  children: [
                    { type: 'Text', props: { text: 'justify="between"', variant: 'caption' } },
                    {
                      type: 'Stack',
                      props: { direction: 'horizontal', gap: 'sm', justify: 'between', align: 'center', className: 'rounded-md border border-dashed p-3' },
                      children: [
                        { type: 'Heading', props: { text: 'Team members', level: 'h4' } },
                        { type: 'Button', props: { label: 'Invite', variant: 'primary' } },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
};

export const AlignVariants: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'lg' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm' },
          children: [
            { type: 'Heading', props: { text: 'Align variants', level: 'h2' } },
            {
              type: 'Text',
              props: {
                text: 'How children of mixed heights align across the cross axis: start, center, end.',
                variant: 'muted',
              },
            },
          ],
        },
        {
          type: 'Card',
          props: { maxWidth: 'lg' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'md' },
              children: [
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'sm' },
                  children: [
                    { type: 'Text', props: { text: 'align="start"', variant: 'caption' } },
                    {
                      type: 'Stack',
                      props: { direction: 'horizontal', gap: 'sm', align: 'start', className: 'rounded-md border border-dashed p-3' },
                      children: [
                        { type: 'Avatar', props: { name: 'Mira Chen', size: 'lg' } },
                        {
                          type: 'Stack',
                          props: { direction: 'vertical', gap: 'sm' },
                          children: [
                            { type: 'Heading', props: { text: 'Mira Chen', level: 'h4' } },
                            { type: 'Text', props: { text: 'Avatars sit at the top of the row.', variant: 'muted' } },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'sm' },
                  children: [
                    { type: 'Text', props: { text: 'align="center"', variant: 'caption' } },
                    {
                      type: 'Stack',
                      props: { direction: 'horizontal', gap: 'sm', align: 'center', className: 'rounded-md border border-dashed p-3' },
                      children: [
                        { type: 'Avatar', props: { name: 'Jordan Lee', size: 'lg' } },
                        {
                          type: 'Stack',
                          props: { direction: 'vertical', gap: 'sm' },
                          children: [
                            { type: 'Heading', props: { text: 'Jordan Lee', level: 'h4' } },
                            { type: 'Text', props: { text: 'Everything is centered on the cross axis.', variant: 'muted' } },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'sm' },
                  children: [
                    { type: 'Text', props: { text: 'align="end"', variant: 'caption' } },
                    {
                      type: 'Stack',
                      props: { direction: 'horizontal', gap: 'sm', align: 'end', className: 'rounded-md border border-dashed p-3' },
                      children: [
                        { type: 'Avatar', props: { name: 'Priya Shah', size: 'lg' } },
                        {
                          type: 'Stack',
                          props: { direction: 'vertical', gap: 'sm' },
                          children: [
                            { type: 'Heading', props: { text: 'Priya Shah', level: 'h4' } },
                            { type: 'Text', props: { text: 'Avatars drop to the baseline of the row.', variant: 'muted' } },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
};

export const GapVariants: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'lg' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm' },
          children: [
            { type: 'Heading', props: { text: 'Gap variants', level: 'h2' } },
            {
              type: 'Text',
              props: {
                text: 'The same three items, spaced with gap="none", gap="md", and gap="xl".',
                variant: 'muted',
              },
            },
          ],
        },
        {
          type: 'Card',
          props: { maxWidth: 'lg' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'md' },
              children: [
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'sm' },
                  children: [
                    { type: 'Text', props: { text: 'gap="none"', variant: 'caption' } },
                    {
                      type: 'Stack',
                      props: { direction: 'vertical', gap: 'none', className: 'rounded-md border border-dashed p-3' },
                      children: [
                        { type: 'Text', props: { text: 'Tightly packed' } },
                        { type: 'Text', props: { text: 'No breathing room' } },
                        { type: 'Text', props: { text: 'Useful for dense lists' } },
                      ],
                    },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'sm' },
                  children: [
                    { type: 'Text', props: { text: 'gap="md"', variant: 'caption' } },
                    {
                      type: 'Stack',
                      props: { direction: 'vertical', gap: 'md', className: 'rounded-md border border-dashed p-3' },
                      children: [
                        { type: 'Text', props: { text: 'Comfortable spacing' } },
                        { type: 'Text', props: { text: 'Good default for body copy' } },
                        { type: 'Text', props: { text: 'Reads naturally on every screen' } },
                      ],
                    },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'sm' },
                  children: [
                    { type: 'Text', props: { text: 'gap="xl"', variant: 'caption' } },
                    {
                      type: 'Stack',
                      props: { direction: 'vertical', gap: 'xl', className: 'rounded-md border border-dashed p-3' },
                      children: [
                        { type: 'Text', props: { text: 'Generous breathing room' } },
                        { type: 'Text', props: { text: 'Pairs well with section headings' } },
                        { type: 'Text', props: { text: 'Slows the eye down on purpose' } },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
};
