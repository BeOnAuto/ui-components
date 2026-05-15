import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Field',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

const cardWrap = (title: string, description: string | null, children: NestedNode[]): NestedNode => ({
  type: 'Card',
  props: { title, description, maxWidth: 'md', centered: true, className: 'mx-auto my-6' },
  children: [
    {
      type: 'Stack',
      props: { direction: 'vertical', gap: 'md' },
      children,
    },
  ],
});

export const LabelOnly: Story = {
  render: () =>
    renderSpec(
      cardWrap('Workspace', 'A minimal field with just a label.', [
        {
          type: 'Field',
          props: { label: 'Workspace name' },
          children: [{ type: 'Input', props: { placeholder: 'Acme Inc.' } }],
        },
      ]),
    ),
};

export const WithDescription: Story = {
  render: () =>
    renderSpec(
      cardWrap('Profile', 'Field with helper text under the label.', [
        {
          type: 'Field',
          props: {
            label: 'Display name',
            description: 'This is the name your teammates will see across the workspace.',
          },
          children: [{ type: 'Input', props: { placeholder: 'Jane Doe' } }],
        },
      ]),
    ),
};

export const WithError: Story = {
  render: () =>
    renderSpec(
      cardWrap('Account email', 'Field showing an inline validation error.', [
        {
          type: 'Field',
          props: {
            label: 'Work email',
            error: 'Enter a valid work email address.',
          },
          children: [{ type: 'Input', props: { type: 'email', value: 'jane@' } }],
        },
      ]),
    ),
};

export const Required: Story = {
  render: () =>
    renderSpec(
      cardWrap('Company details', 'Required fields show an asterisk next to the label.', [
        {
          type: 'Field',
          props: {
            label: 'Company URL',
            description: 'We use this to fetch your logo and brand color.',
            required: true,
          },
          children: [{ type: 'Input', props: { placeholder: 'https://acme.com' } }],
        },
      ]),
    ),
};

export const SignUp: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Create your account',
        description: 'Start your 14-day free trial. No credit card required.',
        maxWidth: 'md',
        centered: true,
        className: 'mx-auto my-6',
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Field',
              props: { label: 'Full name', required: true },
              children: [{ type: 'Input', props: { name: 'name', placeholder: 'Jane Doe' } }],
            },
            {
              type: 'Field',
              props: {
                label: 'Work email',
                description: 'We will send a confirmation link here.',
                required: true,
              },
              children: [{ type: 'Input', props: { name: 'email', type: 'email', placeholder: 'jane@acme.com' } }],
            },
            {
              type: 'Field',
              props: {
                label: 'Password',
                description: 'At least 12 characters with a number and symbol.',
                required: true,
              },
              children: [{ type: 'Input', props: { name: 'password', type: 'password', placeholder: 'Enter password' } }],
            },
            {
              type: 'Field',
              props: {
                label: 'Confirm password',
                error: 'Passwords do not match.',
                required: true,
              },
              children: [
                { type: 'Input', props: { name: 'confirm', type: 'password', placeholder: 'Re-enter password' } },
              ],
            },
            {
              type: 'Field',
              props: { label: null },
              children: [
                {
                  type: 'Checkbox',
                  props: { label: 'I agree to the Terms of Service and Privacy Policy', name: 'terms' },
                },
              ],
            },
            {
              type: 'Button',
              props: { label: 'Create account', variant: 'primary' },
            },
          ],
        },
      ],
    }),
};
