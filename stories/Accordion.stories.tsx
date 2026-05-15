import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Accordion',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode, initialState?: Record<string, unknown>) => (
  <JSONRender spec={spec} initialState={initialState} />
);

export const SingleFaq: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'md', centered: true, className: 'p-6 md:p-8' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Heading',
              props: { text: 'Frequently asked questions', level: 'h2' },
            },
            {
              type: 'Text',
              props: {
                text: 'Quick answers to the questions we hear most often from new workspace owners.',
                variant: 'muted',
              },
            },
            {
              type: 'Accordion',
              props: {
                type: 'single',
                items: [
                  {
                    title: 'How do I invite teammates to my workspace?',
                    content:
                      'Open the Members panel from Settings, paste in a list of email addresses, and choose a default role. Invitees receive an email with a one-click join link that expires after seven days.',
                  },
                  {
                    title: 'Can I change my plan later without losing data?',
                    content:
                      'Yes. You can upgrade, downgrade, or cancel from the Billing tab at any time. All workspace data, integrations, and saved views are preserved across plan changes.',
                  },
                  {
                    title: 'Where is my workspace data stored?',
                    content:
                      'All workspace data lives in encrypted Postgres clusters with daily snapshots. You can pick between EU (Frankfurt) and US (Virginia) regions during workspace creation.',
                  },
                  {
                    title: 'Do you offer SSO and SCIM provisioning?',
                    content:
                      'SSO via SAML and OIDC ships on Business and Enterprise plans, alongside SCIM 2.0 for automated user provisioning and deprovisioning from your identity provider.',
                  },
                ],
              },
            },
          ],
        },
      ],
    }),
};

export const MultipleReleaseNotes: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'md', centered: true, className: 'p-6 md:p-8' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Heading',
              props: { text: 'Release notes', level: 'h2' },
            },
            {
              type: 'Text',
              props: {
                text: 'Expand any release to see the full changelog. Multiple sections can stay open at once.',
                variant: 'muted',
              },
            },
            {
              type: 'Accordion',
              props: {
                type: 'multiple',
                items: [
                  {
                    title: 'v2.4.0 — Workspace insights',
                    content:
                      'Dashboards now ship with a weekly digest, exportable CSV summaries, and a new "Top contributors" widget. Insight queries run up to 4x faster on workspaces with more than 10k records.',
                  },
                  {
                    title: 'v2.3.1 — Performance fixes',
                    content:
                      'Trimmed cold-start time by 38%, resolved a flaky search regression on large boards, and fixed a rare race condition that could duplicate comment notifications.',
                  },
                  {
                    title: 'v2.3.0 — Saved views',
                    content:
                      'Pin filtered views to the sidebar, share them with collaborators by link, and pick a default view per project. Saved views now sync across web, desktop, and mobile clients.',
                  },
                  {
                    title: 'v2.2.0 — Mentions & reactions',
                    content:
                      'Mention teammates with @, react to any comment with emoji, and subscribe to threads to receive digest emails. Notifications group by thread to keep your inbox tidy.',
                  },
                ],
              },
            },
          ],
        },
      ],
    }),
};

export const StackedSections: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true, className: 'p-6 md:p-8' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'lg' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm' },
              children: [
                {
                  type: 'Heading',
                  props: { text: 'Account & billing', level: 'h3' },
                },
                {
                  type: 'Accordion',
                  props: {
                    type: 'single',
                    items: [
                      {
                        title: 'How is usage billed across seats?',
                        content:
                          'Seats are billed monthly based on the highest active count in the period. Removing a teammate prorates the remainder of the cycle back to your next invoice.',
                      },
                      {
                        title: 'Which payment methods do you support?',
                        content:
                          'All major credit cards, ACH transfer, and invoice-based payments on annual plans. Enterprise customers can also pay by purchase order.',
                      },
                      {
                        title: 'Can I download past invoices?',
                        content:
                          'Yes — every invoice is available as PDF from the Billing tab, and an admin can opt into automatic email delivery for the workspace finance contact.',
                      },
                    ],
                  },
                },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm' },
              children: [
                {
                  type: 'Heading',
                  props: { text: 'Security & compliance', level: 'h3' },
                },
                {
                  type: 'Accordion',
                  props: {
                    type: 'multiple',
                    items: [
                      {
                        title: 'Are you SOC 2 Type II certified?',
                        content:
                          'Yes. Our latest SOC 2 Type II report covers Security, Availability, and Confidentiality. Customers on Business and above can request the full report under NDA.',
                      },
                      {
                        title: 'How do you handle data deletion requests?',
                        content:
                          'Workspace owners can purge data on demand from Settings. Deleted records are removed from primary storage immediately and from encrypted backups within 30 days.',
                      },
                      {
                        title: 'Do you support customer-managed encryption keys?',
                        content:
                          'CMEK is available on Enterprise plans through AWS KMS or Google Cloud KMS. Rotate keys at any time without downtime; old material is retired after a 90-day grace period.',
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    }),
};
