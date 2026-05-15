import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Grid',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

const intro = (title: string, reflow: string): NestedNode => ({
  type: 'Flex',
  props: { direction: 'col', gap: 'xs', className: 'mb-6' },
  children: [
    { type: 'Heading', props: { text: title, level: 'h3' } },
    { type: 'Text', props: { text: reflow, variant: 'muted' } },
  ],
});

const page = (children: NestedNode[]): NestedNode => ({
  type: 'Flex',
  props: { direction: 'col', className: 'p-6' },
  children,
});

const card = (title: string, body: string): NestedNode => ({
  type: 'Card',
  props: { title },
  children: [{ type: 'Text', props: { text: body, variant: 'muted' } }],
});

const stat = (label: string, value: string): NestedNode => ({
  type: 'Card',
  props: { title: label },
  children: [{ type: 'Heading', props: { text: value, level: 'h2' } }],
});

const featureCard = (icon: string, title: string, body: string): NestedNode => ({
  type: 'Card',
  props: {},
  children: [
    {
      type: 'Flex',
      props: { direction: 'col', gap: 'sm' },
      children: [
        { type: 'Icon', props: { name: icon, size: 'lg', className: 'text-primary' } },
        { type: 'Heading', props: { text: title, level: 'h4' } },
        { type: 'Text', props: { text: body, variant: 'muted' } },
      ],
    },
  ],
});

export const TwoColumns: Story = {
  render: () =>
    renderSpec(
      page([
        intro('Two-column layout', 'Reflows to 1 column under 600px, 2 columns from 600px and up.'),
        {
          type: 'Grid',
          props: { columns: 2, gap: 'lg' },
          children: [
            card('Realtime collaboration', 'Cursors, presence, and comments stay in sync across every device.'),
            card('Granular permissions', 'Share workspaces with roles that match how your team actually operates.'),
          ],
        },
      ]),
    ),
};

export const ThreeColumns: Story = {
  render: () =>
    renderSpec(
      page([
        intro('Three-column layout', 'Reflows to 1 column under 600px, 2 columns from 600px, 3 columns from 900px and up.'),
        {
          type: 'Grid',
          props: { columns: 3, gap: 'lg' },
          children: [
            card('Fast search', 'Find any document, comment, or attachment in under a hundred milliseconds.'),
            card('Smart filters', 'Compose filters with natural language and pin them to any view.'),
            card('Custom views', 'Save board, list, and timeline layouts per team or per project.'),
          ],
        },
      ]),
    ),
};

export const FourColumns: Story = {
  render: () =>
    renderSpec(
      page([
        intro(
          'Four-column dashboard',
          'Reflows to 1 column under 600px, 2 columns from 600px through 1199px, and 4 columns from 1200px.',
        ),
        {
          type: 'Grid',
          props: { columns: 4, gap: 'md' },
          children: [
            stat('Revenue', '$48,210'),
            stat('Active users', '12,438'),
            stat('Conversion', '3.4%'),
            stat('Churn', '1.1%'),
          ],
        },
      ]),
    ),
};

export const SixColumns: Story = {
  render: () =>
    renderSpec(
      page([
        intro(
          'Six-column layout',
          'Reflows to 1 column under 600px, 2 columns from 600px, 3 columns from 900px, and 6 columns from 1200px.',
        ),
        {
          type: 'Grid',
          props: { columns: 6, gap: 'md' },
          children: [
            stat('MRR', '$92.4k'),
            stat('Trials', '348'),
            stat('Signups', '1,204'),
            stat('Active', '8,910'),
            stat('NPS', '+62'),
            stat('Uptime', '99.98%'),
          ],
        },
      ]),
    ),
};

export const EightColumns: Story = {
  render: () =>
    renderSpec(
      page([
        intro(
          'Eight-column metrics strip',
          'Reflows to 1 column under 600px, 2 columns from 600px, 4 columns from 900px, and 8 columns from 1200px.',
        ),
        {
          type: 'Grid',
          props: { columns: 8, gap: 'sm' },
          children: [
            stat('Mon', '1,204'),
            stat('Tue', '1,318'),
            stat('Wed', '1,402'),
            stat('Thu', '1,289'),
            stat('Fri', '1,512'),
            stat('Sat', '892'),
            stat('Sun', '764'),
            stat('Avg', '1,197'),
          ],
        },
      ]),
    ),
};

export const FeatureGrid: Story = {
  render: () =>
    renderSpec(
      page([
        {
          type: 'Flex',
          props: { direction: 'col', gap: 'xs', className: 'mb-8 max-w-2xl' },
          children: [
            { type: 'Heading', props: { text: 'Everything you need to ship', level: 'h2' } },
            {
              type: 'Text',
              props: {
                text: 'A polished toolkit for product teams. Reflows to 1 column on mobile, 2 columns on tablet, and 3 columns on desktop.',
                variant: 'muted',
              },
            },
          ],
        },
        {
          type: 'Grid',
          props: { columns: 3, gap: 'lg' },
          children: [
            featureCard('zap', 'Lightning fast', 'Sub-100ms interactions powered by an edge-rendered runtime.'),
            featureCard('shield', 'Secure by default', 'SOC 2, SSO, and audit logs ready on day one.'),
            featureCard('users', 'Built for teams', 'Roles, comments, and presence designed for real collaboration.'),
            featureCard('bar-chart-3', 'Insightful analytics', 'Dashboards that highlight what changed, not just what is.'),
            featureCard('plug', 'Plugs into your stack', 'Native integrations with Slack, Linear, GitHub, and Figma.'),
            featureCard('sparkles', 'AI-assisted', 'Draft, summarize, and search with models tuned to your workspace.'),
          ],
        },
      ]),
    ),
};
