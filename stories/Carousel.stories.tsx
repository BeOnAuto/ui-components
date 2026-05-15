import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Carousel',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const ProductFeatures: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'md', align: 'center', className: 'p-6' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm', className: 'w-full max-w-4xl' },
          children: [
            { type: 'Heading', props: { text: 'Product highlights', level: 'h2' } },
            { type: 'Text', props: { text: 'A quick tour of what teams ship with on day one.', variant: 'muted' } },
          ],
        },
        {
          type: 'Card',
          props: { maxWidth: 'lg' },
          children: [
            {
              type: 'Carousel',
              props: {
                items: [
                  { title: 'Realtime collaboration', description: 'See teammates type, comment, and resolve issues without refreshing.' },
                  { title: 'AI-assisted search', description: 'Ask questions in plain English and pull answers from every connected source.' },
                  { title: 'Audit-ready logs', description: 'Every change is captured with who, what, and when for compliance reviews.' },
                  { title: 'Custom workflows', description: 'Automate routing, approvals, and follow-ups your team already runs by hand.' },
                  { title: 'Single sign-on', description: 'Connect Okta, Google Workspace, or any SAML provider in under five minutes.' },
                  { title: 'Developer API', description: 'Build on top of every action with a fully documented REST and webhook surface.' },
                ],
              },
            },
          ],
        },
      ],
    }),
};

export const Onboarding: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'md', align: 'center', className: 'p-6' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm', className: 'w-full max-w-4xl' },
          children: [
            { type: 'Heading', props: { text: 'Onboarding tour', level: 'h2' } },
            { type: 'Text', props: { text: 'Five quick steps to get your workspace humming.', variant: 'muted' } },
          ],
        },
        {
          type: 'Card',
          props: { maxWidth: 'lg' },
          children: [
            {
              type: 'Carousel',
              props: {
                items: [
                  { title: 'Welcome aboard', description: 'Set your workspace name, timezone, and avatar in under two minutes.' },
                  { title: 'Invite your team', description: 'Bring in colleagues so you can collaborate from day one without context loss.' },
                  { title: 'Connect your tools', description: 'Link GitHub, Slack, and Google Calendar to pull project context automatically.' },
                  { title: 'Customize your dashboard', description: 'Pin the views, metrics, and shortcuts your team reaches for every morning.' },
                  { title: 'Ship your first project', description: 'Start a new initiative or import an existing one to see live progress in seconds.' },
                ],
              },
            },
          ],
        },
      ],
    }),
};

export const Testimonials: Story = {
  render: () =>
    renderSpec({
      type: 'Stack',
      props: { direction: 'vertical', gap: 'md', align: 'center', className: 'p-6' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm', className: 'w-full max-w-4xl' },
          children: [
            { type: 'Heading', props: { text: 'Loved by teams everywhere', level: 'h2' } },
            { type: 'Text', props: { text: 'What customers say after their first quarter with us.', variant: 'muted' } },
          ],
        },
        {
          type: 'Card',
          props: { maxWidth: 'lg' },
          children: [
            {
              type: 'Carousel',
              props: {
                items: [
                  { title: 'Maya Chen, Head of Product at Linear', description: 'We replaced three tools in a week and our weekly review meetings got an hour shorter.' },
                  { title: 'Devon Park, Engineering Manager at Ramp', description: 'The audit log alone paid for the entire seat count during our SOC 2 renewal.' },
                  { title: 'Priya Iyer, COO at Notion', description: 'Onboarding new hires went from three days of setup to a single Tuesday afternoon.' },
                  { title: 'Theo Müller, CTO at Algolia', description: 'The API surface is so clean we shipped a Slack bot on top of it in a single sprint.' },
                  { title: 'Sara Okafor, Design Lead at Figma', description: 'Realtime cursors changed how our remote team runs design critiques across timezones.' },
                  { title: 'Jules Berger, Founder at Vercel', description: 'We picked it for the keyboard shortcuts and stayed for the reliability numbers.' },
                ],
              },
            },
          ],
        },
      ],
    }),
};
