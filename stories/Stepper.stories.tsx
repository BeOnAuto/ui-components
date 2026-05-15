import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Stepper',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode, initialState?: Record<string, unknown>) => (
  <JSONRender spec={spec} initialState={initialState} />
);

const page = (children: NestedNode[]): NestedNode => ({
  type: 'Stack',
  props: { direction: 'vertical', gap: 'lg', align: 'center', className: 'p-6 sm:p-8' },
  children,
});

const frame = (children: NestedNode[]): NestedNode => ({
  type: 'Card',
  props: { className: 'w-full max-w-4xl' },
  children: [
    {
      type: 'Stack',
      props: { direction: 'vertical', gap: 'lg' },
      children,
    },
  ],
});

const heading = (eyebrow: string, title: string): NestedNode => ({
  type: 'Stack',
  props: { direction: 'vertical', gap: 'sm' },
  children: [
    { type: 'Text', props: { text: eyebrow, variant: 'muted' } },
    { type: 'Heading', props: { text: title, level: 'h2' } },
  ],
});

const checkoutSteps = [
  { label: 'Cart', description: 'Review items' },
  { label: 'Shipping', description: 'Where to send it' },
  { label: 'Payment', description: 'How you will pay' },
  { label: 'Review', description: 'Confirm and place' },
];

const onboardingSteps = [
  { label: 'Profile', description: 'Tell us about you' },
  { label: 'Workspace', description: 'Name your team space' },
  { label: 'Team', description: 'Invite teammates' },
  { label: 'Done', description: 'You are set' },
];

const signingSteps = [
  { label: 'Draft', description: 'Prepare document' },
  { label: 'Sent', description: 'Awaiting signature' },
  { label: 'Signed', description: 'Fully executed' },
];

export const Checkout: Story = {
  render: () =>
    renderSpec(
      page([
        frame([
          heading('Step 2 of 4', 'Checkout'),
          { type: 'Stepper', props: { steps: checkoutSteps, current: 1 } },
        ]),
      ]),
    ),
};

export const Onboarding: Story = {
  render: () =>
    renderSpec(
      page([
        frame([
          heading('Step 1 of 4', 'Set up your workspace'),
          { type: 'Stepper', props: { steps: onboardingSteps, current: 0 } },
        ]),
      ]),
    ),
};

export const DocumentSigning: Story = {
  render: () =>
    renderSpec(
      page([
        frame([
          heading('Complete', 'Document signed'),
          { type: 'Stepper', props: { steps: signingSteps, current: 2 } },
        ]),
      ]),
    ),
};

export const CheckoutWithAction: Story = {
  render: () =>
    renderSpec(
      page([
        {
          type: 'Card',
          props: { title: 'Checkout', description: 'Step 2 of 4 — Shipping', className: 'w-full max-w-4xl' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'lg' },
              children: [
                { type: 'Stepper', props: { steps: checkoutSteps, current: 1 } },
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', justify: 'end', gap: 'sm' },
                  children: [{ type: 'Button', props: { label: 'Continue', variant: 'primary' } }],
                },
              ],
            },
          ],
        },
      ]),
    ),
};
