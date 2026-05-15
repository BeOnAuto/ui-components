import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'MultiSelect',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

const teammateOptions = [
  { value: 'jane', label: 'Jane Cooper' },
  { value: 'devon', label: 'Devon Lane' },
  { value: 'leslie', label: 'Leslie Alexander' },
  { value: 'cody', label: 'Cody Fisher' },
  { value: 'arlene', label: 'Arlene McCoy' },
  { value: 'jenny', label: 'Jenny Wilson' },
  { value: 'kristin', label: 'Kristin Watson' },
  { value: 'guy', label: 'Guy Hawkins' },
];

const tagOptions = [
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'design', label: 'Design' },
  { value: 'bug', label: 'Bug' },
  { value: 'feature', label: 'Feature' },
  { value: 'urgent', label: 'Urgent' },
  { value: 'docs', label: 'Documentation' },
  { value: 'research', label: 'Research' },
];

const industryOptions = [
  { value: 'saas', label: 'SaaS' },
  { value: 'fintech', label: 'Fintech' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'education', label: 'Education' },
  { value: 'media', label: 'Media & Entertainment' },
  { value: 'logistics', label: 'Logistics' },
  { value: 'realestate', label: 'Real Estate' },
];

const cardWrap = (field: NestedNode): NestedNode => ({
  type: 'Card',
  props: { maxWidth: 'md', centered: true, className: 'm-4 sm:m-6 md:m-8' },
  children: [field],
});

export const AssignReviewers: Story = {
  render: () =>
    renderSpec(
      cardWrap({
        type: 'Field',
        props: {
          label: 'Reviewers',
          description: 'Choose all that apply. Reviewers are notified when a change is ready.',
        },
        children: [
          {
            type: 'MultiSelect',
            props: {
              options: teammateOptions,
              value: ['jane', 'cody'],
              placeholder: 'Search teammates',
            },
          },
        ],
      }),
    ),
};

export const FilterByTag: Story = {
  render: () =>
    renderSpec(
      cardWrap({
        type: 'Field',
        props: {
          label: 'Filter by tag',
          description: 'Choose all that apply to narrow down results.',
        },
        children: [
          {
            type: 'MultiSelect',
            props: {
              options: tagOptions,
              placeholder: 'Select tags',
            },
          },
        ],
      }),
    ),
};

export const SelectIndustries: Story = {
  render: () =>
    renderSpec(
      cardWrap({
        type: 'Field',
        props: {
          label: 'Industries',
          description: 'Choose all that apply. We use this to tailor recommendations.',
        },
        children: [
          {
            type: 'MultiSelect',
            props: {
              options: industryOptions,
              value: ['saas', 'fintech', 'healthcare'],
              placeholder: 'Select industries',
            },
          },
        ],
      }),
    ),
};
