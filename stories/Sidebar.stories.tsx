import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Sidebar',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

const workspaceChildren: NestedNode[] = [
  {
    type: 'Stack',
    props: { direction: 'vertical', gap: 'lg', className: 'p-4 sm:p-6 lg:p-8' },
    children: [
      {
        type: 'Stack',
        props: { direction: 'horizontal', justify: 'between', align: 'center', gap: 'md', className: 'flex-wrap' },
        children: [
          {
            type: 'Stack',
            props: { direction: 'vertical', gap: 'sm' },
            children: [
              { type: 'Heading', props: { text: 'Overview', level: 'h1' } },
              {
                type: 'Text',
                props: { text: 'A pulse on revenue, retention, and team activity for this quarter.', variant: 'muted' },
              },
            ],
          },
          {
            type: 'Stack',
            props: { direction: 'horizontal', gap: 'sm' },
            children: [
              { type: 'Button', props: { label: 'Export', variant: 'secondary' } },
              { type: 'Button', props: { label: 'New report', variant: 'primary' } },
            ],
          },
        ],
      },
      {
        type: 'Grid',
        props: { columns: 4, gap: 'md' },
        children: [
          {
            type: 'KPICard',
            props: {
              label: 'Revenue',
              value: '$184,920',
              delta: 12.4,
              trend: 'up',
              sparklineData: [120, 138, 134, 152, 168, 174, 192],
            },
          },
          {
            type: 'KPICard',
            props: {
              label: 'Active users',
              value: '28,412',
              delta: 6.8,
              trend: 'up',
              sparklineData: [220, 232, 244, 258, 266, 278, 290],
            },
          },
          {
            type: 'KPICard',
            props: {
              label: 'Conversion',
              value: '4.62%',
              delta: -0.3,
              trend: 'down',
              sparklineData: [5.1, 4.9, 4.8, 4.7, 4.6, 4.7, 4.6],
            },
          },
          {
            type: 'KPICard',
            props: {
              label: 'NPS',
              value: 64,
              delta: 4,
              trend: 'up',
              sparklineData: [54, 56, 58, 60, 61, 62, 64],
            },
          },
        ],
      },
      {
        type: 'Grid',
        props: { columns: 3, gap: 'md' },
        children: [
          {
            type: 'Card',
            props: {
              title: 'Revenue vs. forecast',
              description: 'Net revenue against weekly forecast',
              className: 'lg:col-span-2',
            },
            children: [
              {
                type: 'Chart',
                props: {
                  variant: 'area',
                  data: [
                    { week: 'W1', revenue: 38240, forecast: 36000 },
                    { week: 'W2', revenue: 41800, forecast: 39000 },
                    { week: 'W3', revenue: 39620, forecast: 42000 },
                    { week: 'W4', revenue: 47180, forecast: 45000 },
                    { week: 'W5', revenue: 52340, forecast: 48000 },
                    { week: 'W6', revenue: 49870, forecast: 51000 },
                    { week: 'W7', revenue: 56120, forecast: 54000 },
                    { week: 'W8', revenue: 61480, forecast: 57000 },
                  ],
                  xKey: 'week',
                  yKeys: [
                    { key: 'revenue', label: 'Revenue', color: '#6366f1' },
                    { key: 'forecast', label: 'Forecast', color: '#94a3b8' },
                  ],
                  height: 320,
                },
              },
            ],
          },
          {
            type: 'Card',
            props: { title: 'Recent activity', description: 'Latest events across your workspace' },
            children: [
              {
                type: 'Timeline',
                props: {
                  items: [
                    {
                      title: 'Invoice paid',
                      description: 'Northwind Labs settled INV-2041 for $12,400.',
                      timestamp: '2m ago',
                      iconName: 'CheckCircle2',
                      variant: 'success',
                    },
                    {
                      title: 'New customer',
                      description: 'Polaris Group signed up on the Growth plan.',
                      timestamp: '38m ago',
                      iconName: 'UserPlus',
                      variant: 'default',
                    },
                    {
                      title: 'Plan upgraded',
                      description: 'Tessera moved from Starter to Scale.',
                      timestamp: '1h ago',
                      iconName: 'ArrowUpCircle',
                      variant: 'default',
                    },
                    {
                      title: 'Payment retry',
                      description: 'Card on file for Helix declined twice.',
                      timestamp: '3h ago',
                      iconName: 'AlertTriangle',
                      variant: 'warning',
                    },
                    {
                      title: 'Refund issued',
                      description: 'Refunded $480 to Aperture Studio.',
                      timestamp: '5h ago',
                      iconName: 'RotateCcw',
                      variant: 'default',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        type: 'Card',
        props: { title: 'Top customers', description: 'Highest-revenue accounts this quarter' },
        children: [
          {
            type: 'DataTable',
            props: {
              columns: [
                { key: 'name', label: 'Customer', type: 'text' },
                { key: 'plan', label: 'Plan', type: 'text' },
                { key: 'revenue', label: 'Revenue', type: 'number' },
                { key: 'status', label: 'Status', type: 'badge' },
              ],
              data: [
                { name: 'Northwind Labs', plan: 'Enterprise', revenue: 48200, status: 'Healthy' },
                { name: 'Polaris Group', plan: 'Scale', revenue: 32480, status: 'Healthy' },
                { name: 'Tessera', plan: 'Scale', revenue: 27940, status: 'Healthy' },
                { name: 'Helix', plan: 'Growth', revenue: 19820, status: 'At risk' },
                { name: 'Aperture Studio', plan: 'Growth', revenue: 17640, status: 'Healthy' },
                { name: 'Lumen Works', plan: 'Growth', revenue: 14210, status: 'Healthy' },
                { name: 'Cobalt & Co.', plan: 'Starter', revenue: 9840, status: 'At risk' },
                { name: 'Foundry Eight', plan: 'Starter', revenue: 7820, status: 'Healthy' },
              ],
            },
          },
        ],
      },
    ],
  },
];

const marketingFeature = (iconName: string, heading: string, body: string): NestedNode => ({
  type: 'Card',
  children: [
    {
      type: 'Stack',
      props: { direction: 'vertical', gap: 'sm', align: 'start' },
      children: [
        { type: 'Icon', props: { name: iconName, size: 'lg', className: 'text-primary' } },
        { type: 'Heading', props: { text: heading, level: 'h3' } },
        { type: 'Text', props: { text: body, variant: 'muted' } },
      ],
    },
  ],
});

const marketingChildren: NestedNode[] = [
  {
    type: 'Stack',
    props: { direction: 'vertical', gap: 'lg', className: 'p-4 sm:p-6 lg:p-8' },
    children: [
      {
        type: 'Stack',
        props: { direction: 'vertical', gap: 'sm', align: 'start' },
        children: [
          { type: 'Heading', props: { text: 'Acme analytics', level: 'h1' } },
          {
            type: 'Text',
            props: {
              text: 'One workspace for every metric that matters. Watch revenue, retention, and engagement move in real time.',
              variant: 'lead',
            },
          },
          {
            type: 'Stack',
            props: { direction: 'horizontal', gap: 'sm', className: 'pt-2' },
            children: [
              { type: 'Button', props: { label: 'Start free trial', variant: 'primary' } },
              { type: 'Button', props: { label: 'Book a demo', variant: 'secondary' } },
            ],
          },
        ],
      },
      {
        type: 'Card',
        props: { title: 'Growth at a glance', description: 'Net new revenue across the last quarter' },
        children: [
          {
            type: 'Chart',
            props: {
              variant: 'area',
              data: [
                { month: 'Jan', revenue: 24800, customers: 1240 },
                { month: 'Feb', revenue: 28960, customers: 1380 },
                { month: 'Mar', revenue: 31420, customers: 1492 },
                { month: 'Apr', revenue: 36780, customers: 1648 },
                { month: 'May', revenue: 42140, customers: 1812 },
                { month: 'Jun', revenue: 48360, customers: 1974 },
                { month: 'Jul', revenue: 54920, customers: 2148 },
                { month: 'Aug', revenue: 61280, customers: 2304 },
              ],
              xKey: 'month',
              yKeys: [
                { key: 'revenue', label: 'Revenue', color: '#6366f1' },
                { key: 'customers', label: 'Customers', color: '#22c55e' },
              ],
              height: 340,
            },
          },
        ],
      },
      {
        type: 'Grid',
        props: { columns: 3, gap: 'md' },
        children: [
          marketingFeature(
            'Zap',
            'Live dashboards',
            'Stream every event into composable dashboards built for product, growth, and finance teams.',
          ),
          marketingFeature(
            'ShieldCheck',
            'Trusted by design',
            'SOC 2 Type II, single sign-on, and granular role-based access from day one — no add-ons required.',
          ),
          marketingFeature(
            'Sparkles',
            'AI copilots',
            'Ask questions in plain English. Acme writes the SQL, charts the result, and shares it with your team.',
          ),
          marketingFeature(
            'GitBranch',
            'Versioned models',
            'Branch, review, and ship semantic models like code. Every change is reviewable in a pull request.',
          ),
          marketingFeature(
            'Globe2',
            'Global edge',
            'Sub-second queries from every continent, with regional residency for EU and APAC customers.',
          ),
          marketingFeature(
            'PlugZap',
            '180+ integrations',
            'Pipe in Stripe, Salesforce, Segment, Postgres, Snowflake, and the long tail of tools your team already loves.',
          ),
        ],
      },
    ],
  },
];

export const Workspace: Story = {
  render: () =>
    renderSpec({
      type: 'Sidebar',
      props: {
        title: 'Acme Console',
        footer: 'v1.4.2',
        value: 'overview',
        groups: [
          {
            label: 'Workspace',
            items: [
              { label: 'Overview', value: 'overview', iconName: 'Home', active: true },
              { label: 'Projects', value: 'projects', iconName: 'FolderKanban' },
              { label: 'Customers', value: 'customers', iconName: 'Users' },
              { label: 'Reports', value: 'reports', iconName: 'BarChart3' },
            ],
          },
          {
            label: 'Revenue',
            items: [
              { label: 'Billing', value: 'billing', iconName: 'CreditCard' },
              { label: 'Invoices', value: 'invoices', iconName: 'FileText' },
              { label: 'Subscriptions', value: 'subs', iconName: 'Repeat' },
            ],
          },
          {
            label: 'Admin',
            items: [
              { label: 'Team', value: 'team', iconName: 'UsersRound' },
              { label: 'Integrations', value: 'integrations', iconName: 'Plug' },
              { label: 'Settings', value: 'settings', iconName: 'Settings' },
            ],
          },
        ],
      },
      children: workspaceChildren,
    }),
};

export const Marketing: Story = {
  render: () =>
    renderSpec({
      type: 'Sidebar',
      props: {
        title: 'Acme Console',
        footer: 'v1.4.2',
        value: 'product',
        items: [
          { label: 'Product', value: 'product', iconName: 'Home', active: true },
          { label: 'Customers', value: 'customers', iconName: 'Users' },
          { label: 'Pricing', value: 'pricing', iconName: 'CreditCard' },
          { label: 'Changelog', value: 'changelog', iconName: 'FileText' },
          { label: 'Docs', value: 'docs', iconName: 'BookOpen' },
          { label: 'Settings', value: 'settings', iconName: 'Settings' },
        ],
      },
      children: marketingChildren,
    }),
};
