import type { Preview } from '@storybook/react';
import '../src/styles/tokens.css';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: { headingSelector: 'h2, h3' },
    },
    backgrounds: {
      default: 'surface',
      values: [
        { name: 'surface', value: '#ffffff' },
        { name: 'muted', value: '#f3f5f7' },
        { name: 'dark', value: '#101418' },
        { name: 'pass (royale)', value: '#1f1537' },
        { name: 'daily (grass)', value: '#103520' },
      ],
    },
    viewport: {
      viewports: {
        mobileSm: { name: 'Mobile · 360', styles: { width: '360px', height: '720px' } },
        mobile: { name: 'Mobile · 390 (iPhone)', styles: { width: '390px', height: '844px' } },
        tablet: { name: 'Tablet · 768', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop · 1280', styles: { width: '1280px', height: '800px' } },
      },
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Foundations',
          ['Tokens', 'Colors', 'Typography', 'Spacing', 'Radii', 'Elevation'],
          'Components',
          ['Button', 'Input', 'Badge', 'ProductCard', 'ProductGrid'],
          'App Shell',
          ['Header', 'BottomTabBar'],
        ],
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
