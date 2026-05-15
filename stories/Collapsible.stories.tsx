import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Collapsible',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode, initialState?: Record<string, unknown>) => (
  <JSONRender spec={spec} initialState={initialState} />
);

export const BuildLog: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true, className: 'p-6 md:p-8' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            { type: 'Heading', props: { text: 'Deploy #4821', level: 'h2' } },
            {
              type: 'Text',
              props: {
                text: 'Production build completed in 2m 14s. Expand to inspect the full pipeline output.',
                variant: 'muted',
              },
            },
            {
              type: 'Collapsible',
              props: { title: 'Build output (412 lines)', defaultOpen: true },
              children: [
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'sm' },
                  children: [
                    { type: 'Text', props: { text: '$ pnpm install --frozen-lockfile', variant: 'code' } },
                    {
                      type: 'Text',
                      props: { text: 'Lockfile is up to date, resolution step is skipped.', variant: 'muted' },
                    },
                    { type: 'Text', props: { text: '$ pnpm run build', variant: 'code' } },
                    {
                      type: 'Text',
                      props: { text: 'vite v5.4.2 building for production...', variant: 'muted' },
                    },
                    {
                      type: 'Text',
                      props: { text: 'transformed 1,284 modules in 38.6s', variant: 'muted' },
                    },
                    {
                      type: 'Text',
                      props: { text: 'dist/assets/index-9c2f.js  742.18 kB | gzip: 218.04 kB', variant: 'code' },
                    },
                    { type: 'Text', props: { text: 'Build artifacts uploaded to CDN edge in us-east-1.' } },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
};

export const AdvancedFilters: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true, className: 'p-6 md:p-8' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            { type: 'Heading', props: { text: 'Search customers', level: 'h2' } },
            {
              type: 'Text',
              props: {
                text: 'Refine the customer list by plan, region, and lifecycle stage.',
                variant: 'muted',
              },
            },
            {
              type: 'Collapsible',
              props: { title: 'Advanced filters', defaultOpen: false },
              children: [
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'md' },
                  children: [
                    {
                      type: 'Grid',
                      props: { columns: 2, gap: 'md' },
                      children: [
                        {
                          type: 'Stack',
                          props: { direction: 'vertical', gap: 'sm' },
                          children: [
                            { type: 'Text', props: { text: 'Plan' } },
                            { type: 'Text', props: { text: 'Starter, Growth, Enterprise', variant: 'muted' } },
                          ],
                        },
                        {
                          type: 'Stack',
                          props: { direction: 'vertical', gap: 'sm' },
                          children: [
                            { type: 'Text', props: { text: 'Region' } },
                            { type: 'Text', props: { text: 'EU-West, US-East, APAC', variant: 'muted' } },
                          ],
                        },
                        {
                          type: 'Stack',
                          props: { direction: 'vertical', gap: 'sm' },
                          children: [
                            { type: 'Text', props: { text: 'Lifecycle' } },
                            { type: 'Text', props: { text: 'Trial, Active, Churned', variant: 'muted' } },
                          ],
                        },
                        {
                          type: 'Stack',
                          props: { direction: 'vertical', gap: 'sm' },
                          children: [
                            { type: 'Text', props: { text: 'MRR range' } },
                            { type: 'Text', props: { text: '$0 - $50,000+', variant: 'muted' } },
                          ],
                        },
                      ],
                    },
                    {
                      type: 'Text',
                      props: {
                        text: 'Filters apply instantly. Save the current combination as a view from the toolbar.',
                        variant: 'caption',
                      },
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

export const FilesChanged: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true, className: 'p-6 md:p-8' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            { type: 'Heading', props: { text: 'Pull request #312', level: 'h2' } },
            {
              type: 'Text',
              props: {
                text: 'Refactor checkout flow to use the new payments provider.',
                variant: 'muted',
              },
            },
            {
              type: 'Collapsible',
              props: { title: '8 files changed (+312, -184)', defaultOpen: true },
              children: [
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'sm' },
                  children: [
                    { type: 'Text', props: { text: 'src/checkout/CheckoutFlow.tsx', variant: 'code' } },
                    { type: 'Text', props: { text: 'src/checkout/PaymentStep.tsx', variant: 'code' } },
                    { type: 'Text', props: { text: 'src/checkout/usePaymentIntent.ts', variant: 'code' } },
                    { type: 'Text', props: { text: 'src/payments/providerClient.ts', variant: 'code' } },
                    { type: 'Text', props: { text: 'src/payments/providerClient.test.ts', variant: 'code' } },
                    { type: 'Text', props: { text: 'src/api/checkout.ts', variant: 'code' } },
                    { type: 'Text', props: { text: 'src/api/checkout.test.ts', variant: 'code' } },
                    { type: 'Text', props: { text: 'CHANGELOG.md', variant: 'code' } },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
};

export const WebhookPayload: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true, className: 'p-6 md:p-8' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            { type: 'Heading', props: { text: 'invoice.payment_succeeded', level: 'h2' } },
            {
              type: 'Text',
              props: {
                text: 'Webhook delivered at 09:41:22 UTC. Open the payload to inspect the event body.',
                variant: 'muted',
              },
            },
            {
              type: 'Collapsible',
              props: { title: 'Event payload', defaultOpen: false },
              children: [
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'sm' },
                  children: [
                    { type: 'Text', props: { text: '{', variant: 'code' } },
                    { type: 'Text', props: { text: '  "id": "evt_1Q8a2X9c7s",', variant: 'code' } },
                    { type: 'Text', props: { text: '  "type": "invoice.payment_succeeded",', variant: 'code' } },
                    { type: 'Text', props: { text: '  "created": 1731920482,', variant: 'code' } },
                    { type: 'Text', props: { text: '  "data": {', variant: 'code' } },
                    { type: 'Text', props: { text: '    "object": {', variant: 'code' } },
                    { type: 'Text', props: { text: '      "amount_paid": 4900,', variant: 'code' } },
                    { type: 'Text', props: { text: '      "currency": "usd",', variant: 'code' } },
                    { type: 'Text', props: { text: '      "customer": "cus_PqRz0i",', variant: 'code' } },
                    { type: 'Text', props: { text: '      "status": "paid"', variant: 'code' } },
                    { type: 'Text', props: { text: '    }', variant: 'code' } },
                    { type: 'Text', props: { text: '  }', variant: 'code' } },
                    { type: 'Text', props: { text: '}', variant: 'code' } },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
};
