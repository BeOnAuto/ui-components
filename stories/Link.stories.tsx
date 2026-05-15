import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Link',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const WithLabel: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Documentation',
        description: 'Everything you need to integrate the platform',
        maxWidth: 'lg',
        centered: true,
      },
      children: [
        {
          type: 'Text',
          props: {
            text: 'Browse guides, API references, and runnable examples covering authentication, webhooks, and SDK usage across every supported language.',
          },
        },
        {
          type: 'Link',
          props: { label: 'View documentation', href: 'https://example.com/docs' },
        },
      ],
    }),
};

export const WithChildren: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Choose a plan',
        description: 'Transparent pricing for teams of every size',
        maxWidth: 'lg',
        centered: true,
      },
      children: [
        {
          type: 'Text',
          props: {
            text: 'Start free, upgrade when you outgrow it. Annual billing saves two months, and every plan includes unlimited seats for read-only viewers.',
          },
        },
        {
          type: 'Link',
          props: { href: 'https://example.com/pricing' },
          children: [{ type: 'Text', props: { text: 'Compare pricing plans', variant: 'lead' } }],
        },
      ],
    }),
};

export const InlineParagraph: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Getting started',
        description: 'Ship your first integration in under ten minutes',
        maxWidth: 'lg',
        centered: true,
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'sm', align: 'center' },
          children: [
            { type: 'Text', props: { text: 'Need help getting started?' } },
            { type: 'Link', props: { label: 'Read the quickstart guide', href: '/quickstart' } },
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
        title: 'Sign in to your account',
        description: 'Welcome back, enter your details to continue',
        maxWidth: 'sm',
        centered: true,
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            { type: 'Input', props: { label: 'Email', type: 'email', placeholder: 'you@example.com' } },
            { type: 'Input', props: { label: 'Password', type: 'password', placeholder: 'Enter your password' } },
            {
              type: 'Stack',
              props: { direction: 'horizontal', justify: 'end' },
              children: [
                { type: 'Link', props: { label: 'Forgot password?', href: '/reset-password' } },
              ],
            },
            { type: 'Button', props: { label: 'Sign in', variant: 'primary' } },
          ],
        },
      ],
    }),
};

export const SignUpPrompt: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Create your account',
        description: 'Start a free trial, no credit card required',
        maxWidth: 'sm',
        centered: true,
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            { type: 'Input', props: { label: 'Work email', type: 'email', placeholder: 'you@company.com' } },
            { type: 'Input', props: { label: 'Password', type: 'password', placeholder: 'At least 8 characters' } },
            { type: 'Button', props: { label: 'Create account', variant: 'primary' } },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'sm', justify: 'center', align: 'center' },
              children: [
                { type: 'Text', props: { text: 'Already have an account?', variant: 'muted' } },
                { type: 'Link', props: { label: 'Sign in', href: '/sign-in' } },
              ],
            },
          ],
        },
      ],
    }),
};

export const FooterLinks: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true, className: 'max-w-2xl' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md', align: 'center' },
          children: [
            { type: 'Text', props: { text: 'Acme, Inc. — Built for modern teams', variant: 'muted' } },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'lg', justify: 'center', align: 'center' },
              children: [
                { type: 'Link', props: { label: 'About', href: 'https://example.com/about' } },
                { type: 'Link', props: { label: 'Careers', href: 'https://example.com/careers' } },
                { type: 'Link', props: { label: 'Privacy', href: 'https://example.com/privacy' } },
                { type: 'Link', props: { label: 'Terms', href: 'https://example.com/terms' } },
                { type: 'Link', props: { label: 'Contact', href: 'https://example.com/contact' } },
              ],
            },
          ],
        },
      ],
    }),
};
