import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Skeleton',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const LoadingCard: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'md', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            { type: 'Skeleton', props: { width: '55%', height: 24 } },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm' },
              children: [
                { type: 'Skeleton', props: { width: '100%', height: 14 } },
                { type: 'Skeleton', props: { width: '95%', height: 14 } },
                { type: 'Skeleton', props: { width: '60%', height: 14 } },
              ],
            },
          ],
        },
      ],
    }),
};

export const LoadingUserRow: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'md', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'md', align: 'center' },
          children: [
            { type: 'Skeleton', props: { width: 48, height: 48, rounded: true } },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm' },
              children: [
                { type: 'Skeleton', props: { width: 180, height: 14 } },
                { type: 'Skeleton', props: { width: 120, height: 12 } },
              ],
            },
          ],
        },
      ],
    }),
};

export const LoadingDashboard: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', centered: true },
      children: [
        {
          type: 'Grid',
          props: { columns: 3, gap: 'md' },
          children: [
            {
              type: 'Card',
              children: [
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'md' },
                  children: [
                    { type: 'Skeleton', props: { width: '50%', height: 12 } },
                    { type: 'Skeleton', props: { width: '70%', height: 28 } },
                    { type: 'Skeleton', props: { width: '100%', height: 40, rounded: true } },
                  ],
                },
              ],
            },
            {
              type: 'Card',
              children: [
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'md' },
                  children: [
                    { type: 'Skeleton', props: { width: '60%', height: 12 } },
                    { type: 'Skeleton', props: { width: '55%', height: 28 } },
                    { type: 'Skeleton', props: { width: '100%', height: 40, rounded: true } },
                  ],
                },
              ],
            },
            {
              type: 'Card',
              children: [
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'md' },
                  children: [
                    { type: 'Skeleton', props: { width: '45%', height: 12 } },
                    { type: 'Skeleton', props: { width: '65%', height: 28 } },
                    { type: 'Skeleton', props: { width: '100%', height: 40, rounded: true } },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
};

export const LoadingList: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'md', centered: true },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'lg' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'md', align: 'center' },
              children: [
                { type: 'Skeleton', props: { width: 40, height: 40, rounded: true } },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'sm' },
                  children: [
                    { type: 'Skeleton', props: { width: 160, height: 14 } },
                    { type: 'Skeleton', props: { width: 100, height: 12 } },
                  ],
                },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'md', align: 'center' },
              children: [
                { type: 'Skeleton', props: { width: 40, height: 40, rounded: true } },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'sm' },
                  children: [
                    { type: 'Skeleton', props: { width: 200, height: 14 } },
                    { type: 'Skeleton', props: { width: 90, height: 12 } },
                  ],
                },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'md', align: 'center' },
              children: [
                { type: 'Skeleton', props: { width: 40, height: 40, rounded: true } },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'sm' },
                  children: [
                    { type: 'Skeleton', props: { width: 140, height: 14 } },
                    { type: 'Skeleton', props: { width: 120, height: 12 } },
                  ],
                },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'md', align: 'center' },
              children: [
                { type: 'Skeleton', props: { width: 40, height: 40, rounded: true } },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'sm' },
                  children: [
                    { type: 'Skeleton', props: { width: 180, height: 14 } },
                    { type: 'Skeleton', props: { width: 80, height: 12 } },
                  ],
                },
              ],
            },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'md', align: 'center' },
              children: [
                { type: 'Skeleton', props: { width: 40, height: 40, rounded: true } },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'sm' },
                  children: [
                    { type: 'Skeleton', props: { width: 170, height: 14 } },
                    { type: 'Skeleton', props: { width: 110, height: 12 } },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
};
