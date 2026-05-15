import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Separator',
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

export const PageHeader: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', className: 'w-full' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            { type: 'Heading', props: { text: 'Account settings', level: 'h2' } },
            { type: 'Separator', props: { orientation: 'horizontal' } },
            {
              type: 'Text',
              props: {
                text: 'Manage your profile, security preferences, and notification channels. Changes are saved automatically.',
                variant: 'muted',
              },
            },
          ],
        },
      ],
    }),
};

export const BetweenSections: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', className: 'w-full' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'lg' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm' },
              children: [
                { type: 'Heading', props: { text: 'Profile', level: 'h3' } },
                {
                  type: 'Text',
                  props: {
                    text: 'Update your personal information and how others see you on the platform.',
                    variant: 'muted',
                  },
                },
              ],
            },
            { type: 'Separator', props: { orientation: 'horizontal' } },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm' },
              children: [
                { type: 'Heading', props: { text: 'Security', level: 'h3' } },
                {
                  type: 'Text',
                  props: {
                    text: 'Manage your password, two-factor authentication, and active sessions.',
                    variant: 'muted',
                  },
                },
              ],
            },
            { type: 'Separator', props: { orientation: 'horizontal' } },
            {
              type: 'Stack',
              props: { direction: 'vertical', gap: 'sm' },
              children: [
                { type: 'Heading', props: { text: 'Notifications', level: 'h3' } },
                {
                  type: 'Text',
                  props: {
                    text: 'Choose which updates land in your inbox and which stay in-app.',
                    variant: 'muted',
                  },
                },
              ],
            },
          ],
        },
      ],
    }),
};

export const MetadataRow: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', className: 'w-full' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'sm' },
          children: [
            { type: 'Heading', props: { text: 'Refactor token pipeline', level: 'h3' } },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'sm', align: 'center' },
              children: [
                { type: 'Text', props: { text: 'Updated 2h ago', variant: 'muted' } },
                { type: 'Separator', props: { orientation: 'vertical' } },
                { type: 'Text', props: { text: '42 comments', variant: 'muted' } },
                { type: 'Separator', props: { orientation: 'vertical' } },
                { type: 'Text', props: { text: '7 watchers', variant: 'muted' } },
              ],
            },
            {
              type: 'Text',
              props: {
                text: 'Consolidates primitive and semantic tokens behind a single resolver so theme overrides stay declarative.',
              },
            },
          ],
        },
      ],
    }),
};

export const ButtonGroup: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', className: 'w-full' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            { type: 'Heading', props: { text: 'Publish draft', level: 'h3' } },
            {
              type: 'Text',
              props: {
                text: 'Choose how this draft should go out. You can still revert from the activity log.',
                variant: 'muted',
              },
            },
            { type: 'Separator', props: { orientation: 'horizontal' } },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'sm', align: 'center' },
              children: [
                { type: 'Button', props: { label: 'Save draft', variant: 'secondary' } },
                { type: 'Separator', props: { orientation: 'vertical' } },
                { type: 'Button', props: { label: 'Schedule', variant: 'secondary' } },
                { type: 'Separator', props: { orientation: 'vertical' } },
                { type: 'Button', props: { label: 'Publish now', variant: 'primary' } },
              ],
            },
          ],
        },
      ],
    }),
};

export const ProfileRows: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', className: 'w-full' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'vertical', gap: 'md' },
          children: [
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'md', align: 'center' },
              children: [
                { type: 'Avatar', props: { name: 'Ada Lovelace', size: 'md' } },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'none' },
                  children: [
                    { type: 'Text', props: { text: 'Ada Lovelace' } },
                    { type: 'Text', props: { text: 'ada@analyticalengine.io', variant: 'muted' } },
                  ],
                },
              ],
            },
            { type: 'Separator', props: { orientation: 'horizontal' } },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'md', align: 'center' },
              children: [
                { type: 'Avatar', props: { name: 'Grace Hopper', size: 'md' } },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'none' },
                  children: [
                    { type: 'Text', props: { text: 'Grace Hopper' } },
                    { type: 'Text', props: { text: 'grace@compiler.dev', variant: 'muted' } },
                  ],
                },
              ],
            },
            { type: 'Separator', props: { orientation: 'horizontal' } },
            {
              type: 'Stack',
              props: { direction: 'horizontal', gap: 'md', align: 'center' },
              children: [
                { type: 'Avatar', props: { name: 'Alan Turing', size: 'md' } },
                {
                  type: 'Stack',
                  props: { direction: 'vertical', gap: 'none' },
                  children: [
                    { type: 'Text', props: { text: 'Alan Turing' } },
                    { type: 'Text', props: { text: 'alan@bletchley.uk', variant: 'muted' } },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
};

export const TabBar: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'lg', className: 'w-full' },
      children: [
        {
          type: 'Stack',
          props: { direction: 'horizontal', gap: 'md', align: 'center' },
          children: [
            { type: 'Text', props: { text: 'Drafts' } },
            { type: 'Separator', props: { orientation: 'vertical' } },
            { type: 'Text', props: { text: 'Published' } },
            { type: 'Separator', props: { orientation: 'vertical' } },
            { type: 'Text', props: { text: 'Archived' } },
            { type: 'Separator', props: { orientation: 'vertical' } },
            { type: 'Text', props: { text: 'Templates' } },
          ],
        },
      ],
    }),
};
