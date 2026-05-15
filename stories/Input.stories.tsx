import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Input',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const Text: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Account details', description: 'Tell us how to address you.', maxWidth: 'md', centered: true },
      children: [
        {
          type: 'Field',
          props: { label: 'Full name', description: 'As it appears on your ID.' },
          children: [{ type: 'Input', props: { name: 'fullName', type: 'text', placeholder: 'Jane Doe' } }],
        },
      ],
    }),
};

export const Email: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Contact',
        description: 'We will only email you about your account.',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Field',
          props: { label: 'Work email', description: 'Use the address your team recognises.' },
          children: [
            { type: 'Input', props: { name: 'email', type: 'email', placeholder: 'you@company.com' } },
          ],
        },
      ],
    }),
};

export const Password: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Security',
        description: 'Choose something only you would know.',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Field',
          props: { label: 'Password', description: 'At least 8 characters, including a number.', required: true },
          children: [
            {
              type: 'Input',
              props: { name: 'password', type: 'password', placeholder: 'Enter a strong password' },
            },
          ],
        },
      ],
    }),
};

export const Number: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Team size',
        description: 'Helps us tailor your onboarding.',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Field',
          props: { label: 'Number of seats', description: 'Between 1 and 500.' },
          children: [
            { type: 'Input', props: { name: 'seats', type: 'number', placeholder: '10' } },
          ],
        },
      ],
    }),
};

export const WithValidation: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Choose a username',
        description: 'This is how teammates will find you.',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Field',
          props: { label: 'Username', description: 'Letters, numbers, and dashes.', required: true },
          children: [
            {
              type: 'Input',
              props: {
                name: 'username',
                type: 'text',
                placeholder: 'janedoe',
                validateOn: 'blur',
                checks: [{ type: 'minLength', message: 'Must be at least 3 characters', args: { min: 3 } }],
              },
            },
          ],
        },
      ],
    }),
};

export const SignIn: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Sign in',
        description: 'Welcome back. Enter your details to continue.',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Field',
              props: { label: 'Email', required: true },
              children: [
                {
                  type: 'Input',
                  props: {
                    name: 'email',
                    type: 'email',
                    placeholder: 'you@company.com',
                    validateOn: 'blur',
                    checks: [{ type: 'email', message: 'Enter a valid email address' }],
                  },
                },
              ],
            },
            {
              type: 'Field',
              props: { label: 'Password', required: true },
              children: [
                {
                  type: 'Input',
                  props: {
                    name: 'password',
                    type: 'password',
                    placeholder: 'Your password',
                    validateOn: 'blur',
                    checks: [{ type: 'minLength', message: 'Must be at least 8 characters', args: { min: 8 } }],
                  },
                },
              ],
            },
            { type: 'Button', props: { label: 'Sign in', variant: 'primary' } },
          ],
        },
      ],
    }),
};
