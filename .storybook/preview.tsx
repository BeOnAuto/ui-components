import type { Preview } from '@storybook/react-vite';
import './tailwind.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile (375)',
          styles: { width: '375px', height: '812px' },
          type: 'mobile',
        },
        tablet: {
          name: 'Tablet (768)',
          styles: { width: '768px', height: '1024px' },
          type: 'tablet',
        },
        desktop: {
          name: 'Desktop (1280)',
          styles: { width: '1280px', height: '800px' },
          type: 'desktop',
        },
        desktopLg: {
          name: 'Desktop XL (1440)',
          styles: { width: '1440px', height: '900px' },
          type: 'desktop',
        },
      },
      defaultViewport: 'desktop',
    },
    backgrounds: {
      default: 'app',
      values: [
        { name: 'app', value: 'var(--background)' },
        { name: 'muted', value: 'var(--muted)' },
      ],
    },
    a11y: { test: 'todo' },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background text-foreground p-6">
        <Story />
      </div>
    ),
  ],
};

export default preview;
