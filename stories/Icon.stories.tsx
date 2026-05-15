import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Icon',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const Default: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Sparkles',
        description: 'A single Lucide icon rendered at the default size.',
        maxWidth: 'sm',
        centered: true,
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'md', align: 'center', justify: 'center' },
          children: [{ type: 'Icon', props: { name: 'Sparkles', size: 'xl' } }],
        },
      ],
    }),
};

export const Sizes: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Size scale',
        description: 'xs (12px), sm (16px), md (20px), lg (24px), xl (32px).',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'lg', align: 'end', justify: 'center' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Heart', size: 'xs' } },
                { type: 'Text', props: { text: 'xs', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Heart', size: 'sm' } },
                { type: 'Text', props: { text: 'sm', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Heart', size: 'md' } },
                { type: 'Text', props: { text: 'md', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Heart', size: 'lg' } },
                { type: 'Text', props: { text: 'lg', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Heart', size: 'xl' } },
                { type: 'Text', props: { text: 'xl', variant: 'caption' } },
              ],
            },
          ],
        },
      ],
    }),
};

export const Gallery: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Common icons',
        description: 'A sampling of Lucide glyphs frequently used in app shells and dashboards.',
        maxWidth: 'lg',
        centered: true,
      },
      children: [
        {
          type: 'Grid',
          props: { columns: 6, gap: 'lg' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Home', size: 'lg' } },
                { type: 'Text', props: { text: 'Home', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Search', size: 'lg' } },
                { type: 'Text', props: { text: 'Search', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Settings', size: 'lg' } },
                { type: 'Text', props: { text: 'Settings', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Bell', size: 'lg' } },
                { type: 'Text', props: { text: 'Bell', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'User', size: 'lg' } },
                { type: 'Text', props: { text: 'User', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Heart', size: 'lg' } },
                { type: 'Text', props: { text: 'Heart', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Star', size: 'lg' } },
                { type: 'Text', props: { text: 'Star', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Bookmark', size: 'lg' } },
                { type: 'Text', props: { text: 'Bookmark', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Mail', size: 'lg' } },
                { type: 'Text', props: { text: 'Mail', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Calendar', size: 'lg' } },
                { type: 'Text', props: { text: 'Calendar', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Camera', size: 'lg' } },
                { type: 'Text', props: { text: 'Camera', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Phone', size: 'lg' } },
                { type: 'Text', props: { text: 'Phone', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'MessageCircle', size: 'lg' } },
                { type: 'Text', props: { text: 'Message', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Globe', size: 'lg' } },
                { type: 'Text', props: { text: 'Globe', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Cloud', size: 'lg' } },
                { type: 'Text', props: { text: 'Cloud', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Sun', size: 'lg' } },
                { type: 'Text', props: { text: 'Sun', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Moon', size: 'lg' } },
                { type: 'Text', props: { text: 'Moon', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Cpu', size: 'lg' } },
                { type: 'Text', props: { text: 'Cpu', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Database', size: 'lg' } },
                { type: 'Text', props: { text: 'Database', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Lock', size: 'lg' } },
                { type: 'Text', props: { text: 'Lock', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Shield', size: 'lg' } },
                { type: 'Text', props: { text: 'Shield', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Zap', size: 'lg' } },
                { type: 'Text', props: { text: 'Zap', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'BarChart3', size: 'lg' } },
                { type: 'Text', props: { text: 'Bar chart', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'PieChart', size: 'lg' } },
                { type: 'Text', props: { text: 'Pie chart', variant: 'caption' } },
              ],
            },
          ],
        },
      ],
    }),
};

export const InlineUsage: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Inline composition',
        description: 'Icons sit naturally next to Text labels and inside Button content.',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'lg', align: 'stretch' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'stretch' },
              children: [
                { type: 'Text', props: { text: 'Navigation', variant: 'caption' } },
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', gap: 'sm', align: 'center' },
                  children: [
                    { type: 'Icon', props: { name: 'Home', size: 'sm' } },
                    { type: 'Text', props: { text: 'Dashboard' } },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', gap: 'sm', align: 'center' },
                  children: [
                    { type: 'Icon', props: { name: 'Inbox', size: 'sm' } },
                    { type: 'Text', props: { text: 'Inbox' } },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', gap: 'sm', align: 'center' },
                  children: [
                    { type: 'Icon', props: { name: 'Users', size: 'sm' } },
                    { type: 'Text', props: { text: 'Team' } },
                  ],
                },
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', gap: 'sm', align: 'center' },
                  children: [
                    { type: 'Icon', props: { name: 'Settings', size: 'sm' } },
                    { type: 'Text', props: { text: 'Settings' } },
                  ],
                },
              ],
            },
            { type: 'Separator', props: { orientation: 'horizontal' } },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'stretch' },
              children: [
                { type: 'Text', props: { text: 'Inside buttons', variant: 'caption' } },
                {
                  type: 'Stack',
                  props: { direction: 'horizontal', gap: 'sm', align: 'center' },
                  children: [
                    {
                      type: 'Button',
                      props: { label: 'Download report', variant: 'primary' },
                      children: [
                        {
                          type: 'Stack',
                          props: { direction: 'horizontal', gap: 'sm', align: 'center' },
                          children: [
                            { type: 'Icon', props: { name: 'Download', size: 'sm' } },
                            { type: 'Text', props: { text: 'Download report' } },
                          ],
                        },
                      ],
                    },
                    {
                      type: 'Button',
                      props: { label: 'Share', variant: 'secondary' },
                      children: [
                        {
                          type: 'Stack',
                          props: { direction: 'horizontal', gap: 'sm', align: 'center' },
                          children: [
                            { type: 'Icon', props: { name: 'Share2', size: 'sm' } },
                            { type: 'Text', props: { text: 'Share' } },
                          ],
                        },
                      ],
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

export const StrokeWidths: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: {
        title: 'Stroke weight',
        description: 'Tune the same glyph from hairline to bold for different visual densities.',
        maxWidth: 'md',
        centered: true,
      },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'lg', align: 'end', justify: 'center' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Star', size: 'xl', strokeWidth: 1 } },
                { type: 'Text', props: { text: '1.0', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Star', size: 'xl', strokeWidth: 1.5 } },
                { type: 'Text', props: { text: '1.5', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Star', size: 'xl', strokeWidth: 2 } },
                { type: 'Text', props: { text: '2.0', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Star', size: 'xl', strokeWidth: 2.5 } },
                { type: 'Text', props: { text: '2.5', variant: 'caption' } },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm', align: 'center' },
              children: [
                { type: 'Icon', props: { name: 'Star', size: 'xl', strokeWidth: 3 } },
                { type: 'Text', props: { text: '3.0', variant: 'caption' } },
              ],
            },
          ],
        },
      ],
    }),
};
