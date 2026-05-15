import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSONRender, type NestedNode } from './json-render';

const meta: Meta = {
  title: 'Combobox',
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj;

const renderSpec = (spec: NestedNode) => <JSONRender spec={spec} />;

const teammateOptions = [
  { value: 'avery', label: 'Avery Chen' },
  { value: 'ben', label: 'Ben Okafor' },
  { value: 'cora', label: 'Cora Lindqvist' },
  { value: 'devi', label: 'Devi Raman' },
  { value: 'elif', label: 'Elif Yilmaz' },
  { value: 'finn', label: 'Finn O’Brien' },
  { value: 'gabi', label: 'Gabi Moretti' },
  { value: 'hugo', label: 'Hugo Larsen' },
];

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'mx', label: 'Mexico' },
  { value: 'br', label: 'Brazil' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'au', label: 'Australia' },
];

const projectOptions = [
  { value: 'atlas', label: 'Atlas — Web platform rewrite' },
  { value: 'beacon', label: 'Beacon — Mobile onboarding' },
  { value: 'compass', label: 'Compass — Internal admin tools' },
  { value: 'delta', label: 'Delta — Billing migration' },
  { value: 'echo', label: 'Echo — Notifications service' },
  { value: 'forge', label: 'Forge — Design system v2' },
  { value: 'horizon', label: 'Horizon — Growth experiments' },
];

const timezoneOptions = [
  { value: 'pst', label: 'Pacific Time (Los Angeles)' },
  { value: 'mst', label: 'Mountain Time (Denver)' },
  { value: 'cst', label: 'Central Time (Chicago)' },
  { value: 'est', label: 'Eastern Time (New York)' },
  { value: 'gmt', label: 'Greenwich Mean Time (London)' },
  { value: 'cet', label: 'Central European Time (Berlin)' },
  { value: 'ist', label: 'India Standard Time (Mumbai)' },
  { value: 'jst', label: 'Japan Standard Time (Tokyo)' },
  { value: 'aest', label: 'Australian Eastern Time (Sydney)' },
];

export const AssigneePicker: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'md', title: 'Assign task', description: 'Pick the teammate responsible for shipping this.' },
      children: [
        {
          type: 'Field',
          props: {
            label: 'Assignee',
            description: 'Choose who owns this task. They’ll get a notification right away.',
          },
          children: [
            {
              type: 'Combobox',
              props: { options: teammateOptions, placeholder: 'Search teammates…' },
            },
          ],
        },
      ],
    }),
};

export const CountryPicker: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'md', title: 'Billing details', description: 'We use your country to apply the correct tax rate.' },
      children: [
        {
          type: 'Field',
          props: {
            label: 'Country',
            description: 'Pre-filled from your account. Change if your billing address differs.',
          },
          children: [
            {
              type: 'Combobox',
              props: { options: countryOptions, value: 'de', placeholder: 'Select a country' },
            },
          ],
        },
      ],
    }),
};

export const ProjectPicker: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'md', title: 'Log time', description: 'Attach this entry to a project so it shows up in reports.' },
      children: [
        {
          type: 'Field',
          props: {
            label: 'Project',
            description: 'Only projects you’re a member of are listed here.',
          },
          children: [
            {
              type: 'Combobox',
              props: { options: projectOptions, placeholder: 'Find a project' },
            },
          ],
        },
      ],
    }),
};

export const TimezonePicker: Story = {
  render: () =>
    renderSpec({
      type: 'Card',
      props: { maxWidth: 'md', title: 'Working hours', description: 'Set your timezone so meeting invites land at the right time.' },
      children: [
        {
          type: 'Field',
          props: {
            label: 'Timezone',
            description: 'We’ll display schedules and reminders in this timezone.',
          },
          children: [
            {
              type: 'Combobox',
              props: { options: timezoneOptions, value: 'cet', placeholder: 'Select a timezone' },
            },
          ],
        },
      ],
    }),
};
