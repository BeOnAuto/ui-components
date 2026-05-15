import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Tooltip',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode, initialState?: Record<string, unknown>) => (
  <JSONRender spec={spec} initialState={initialState} />
);

export const Default: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Record actions', description: 'Hover the trigger to read the tooltip.', maxWidth: 'lg' },
      children: [
        {
          type: 'Tooltip',
          props: { text: 'Duplicate', content: 'Create an editable copy of this record.' },
        },
      ],
    }),
};

export const Toolbar: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Document toolbar', description: 'Quick actions for the active document.', maxWidth: 'lg' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'sm', align: 'center' },
          children: [
            { type: 'Tooltip', props: { text: 'Bold', content: 'Toggle bold formatting (Cmd+B).' } },
            { type: 'Tooltip', props: { text: 'Italic', content: 'Toggle italic formatting (Cmd+I).' } },
            { type: 'Tooltip', props: { text: 'Link', content: 'Insert or edit a hyperlink (Cmd+K).' } },
            { type: 'Tooltip', props: { text: 'Quote', content: 'Wrap the selection in a block quote.' } },
            { type: 'Tooltip', props: { text: 'Code', content: 'Format the selection as inline code.' } },
          ],
        },
      ],
    }),
};

export const FieldHint: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'API access', description: 'Generate a key for server-to-server calls.', maxWidth: 'lg' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'sm', align: 'center' },
              children: [
                { type: 'Text', props: { text: 'Webhook secret', variant: 'body' } },
                {
                  type: 'Tooltip',
                  props: {
                    text: 'What is this?',
                    content: 'Used to sign outgoing payloads so your server can verify the request came from us.',
                  },
                },
              ],
            },
            {
              type: 'Field',
              props: { label: null, description: 'Rotate this value if it has ever been exposed.' },
              children: [
                {
                  type: 'Input',
                  props: { name: 'secret', placeholder: 'whsec_live_5f2c9a1b0e8d4f7a', type: 'text' },
                },
              ],
            },
          ],
        },
      ],
    }),
};

export const MetricCard: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: null, description: null, maxWidth: 'lg' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'sm', align: 'center' },
              children: [
                { type: 'Text', props: { text: 'Net revenue retention', variant: 'muted' } },
                {
                  type: 'Tooltip',
                  props: {
                    text: 'How is this calculated?',
                    content:
                      'NRR = (Starting MRR + Expansion - Contraction - Churn) / Starting MRR, measured over a trailing 30 days.',
                  },
                },
              ],
            },
            { type: 'Heading', props: { text: '112.4%', level: 'h2' } },
            { type: 'Text', props: { text: '+4.1% vs last month', variant: 'caption' } },
          ],
        },
      ],
    }),
};

export const PricingTier: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { title: 'Growth', description: '$49 per seat, billed monthly.', maxWidth: 'lg' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'sm', align: 'center' },
              children: [
                { type: 'Text', props: { text: 'Unlimited projects', variant: 'body' } },
                {
                  type: 'Tooltip',
                  props: {
                    text: 'Fair use',
                    content: 'No hard cap. Workspaces with over 500 active projects are reviewed for fair-use limits.',
                  },
                },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'sm', align: 'center' },
              children: [
                { type: 'Text', props: { text: 'Priority support', variant: 'body' } },
                {
                  type: 'Tooltip',
                  props: {
                    text: 'Response times',
                    content: 'First response within 4 business hours, 24/7 for severity-one incidents.',
                  },
                },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'sm', align: 'center' },
              children: [
                { type: 'Text', props: { text: 'SSO and SCIM', variant: 'body' } },
                {
                  type: 'Tooltip',
                  props: {
                    text: 'Identity providers',
                    content: 'Works with Okta, Azure AD, Google Workspace, and any SAML 2.0 provider.',
                  },
                },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'sm', align: 'center' },
              children: [
                { type: 'Text', props: { text: 'Audit log retention', variant: 'body' } },
                {
                  type: 'Tooltip',
                  props: {
                    text: 'How long?',
                    content: 'Events are retained for 365 days and exportable to S3 or a SIEM of your choice.',
                  },
                },
              ],
            },
          ],
        },
      ],
    }),
};
