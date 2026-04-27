import type { Meta, StoryObj } from '@storybook/react';
import { Icon, type IconName, type Weight } from '../components/Icon';

const meta = {
  title: 'Foundations/Iconography',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Phosphor Icons — a curated 32-icon working set for the Zepto quick-commerce surface. Available in **regular** (default UI), **bold** (emphasis, primary actions), and **fill** (selected tab states, badges, status indicators). All icons render on a 256-grid `viewBox` and use `fill="currentColor"`, so a parent\'s `color` controls them.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// ─────────────────────────────────────────────────────────
const NAMES: IconName[] = [
  // Nav
  'house', 'magnifying-glass', 'shopping-cart', 'user', 'list', 'x',
  'arrow-left', 'caret-right', 'caret-down',
  // Discovery
  'tag', 'fire', 'star', 'heart',
  // Cart actions
  'plus', 'minus', 'trash', 'check',
  // Commerce
  'wallet', 'ticket', 'receipt', 'package',
  // Delivery
  'map-pin', 'clock', 'truck', 'lightning',
  // State
  'warning', 'check-circle', 'x-circle', 'info', 'bell',
  // Meta
  'sliders-horizontal', 'share-fat',
];

const sectionLabel: React.CSSProperties = {
  fontFamily: 'var(--zd-font-sans)',
  fontSize: 'var(--zd-o12-size)',
  lineHeight: 'var(--zd-o12-lh)',
  letterSpacing: 'var(--zd-o12-tracking)',
  fontWeight: 'var(--zd-fw-demi)',
  textTransform: 'uppercase',
  color: 'var(--zd-text-tertiary)',
  margin: '0 0 14px',
};

const grid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gap: '18px 14px',
};

const cell: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
  padding: '12px 6px',
  borderRadius: 8,
  color: 'var(--zd-text-primary)',
};

const cellLabel: React.CSSProperties = {
  fontFamily: 'var(--zd-font-sans)',
  fontSize: 'var(--zd-b10-size)',
  lineHeight: 'var(--zd-b10-lh)',
  fontWeight: 'var(--zd-fw-regular)',
  color: 'var(--zd-text-tertiary)',
  textAlign: 'center',
};

function Gallery({ weight }: { weight: Weight }) {
  return (
    <div style={grid}>
      {NAMES.map((name) => (
        <div key={name} style={cell}>
          <Icon name={name} weight={weight} size={24} />
          <span style={cellLabel}>{name}</span>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────
export const Regular: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Default for all UI surfaces — nav, list rows, inline labels, secondary actions. Outline-style geometry on a 256-grid.',
      },
    },
  },
  render: () => (
    <div style={{ padding: '24px 28px', background: '#fff' }}>
      <h2 style={sectionLabel}>Regular · default for all UI surfaces</h2>
      <Gallery weight="regular" />
    </div>
  ),
};

export const Bold: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use for emphasis, primary CTAs, and alert states where the icon needs to read at the same weight as bold copy.',
      },
    },
  },
  render: () => (
    <div style={{ padding: '24px 28px', background: '#fff' }}>
      <h2 style={sectionLabel}>Bold · emphasis, primary actions, alerts</h2>
      <Gallery weight="bold" />
    </div>
  ),
};

export const Fill: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Solid silhouettes — selected tab states, badge glyphs (rating star, lightning), status indicators.',
      },
    },
  },
  render: () => (
    <div style={{ padding: '24px 28px', background: '#fff' }}>
      <h2 style={sectionLabel}>Fill · selected tab states, badges, indicators</h2>
      <Gallery weight="fill" />
    </div>
  ),
};

// ─────────────────────────────────────────────────────────
export const AllWeights: Story = {
  name: 'All weights',
  parameters: {
    docs: {
      description: {
        story:
          'Side-by-side comparison: regular / bold / fill. Pick the weight that matches the tier of the surrounding text.',
      },
    },
  },
  render: () => (
    <div style={{ padding: '24px 28px', background: '#fff' }}>
      <h2 style={sectionLabel}>Regular</h2>
      <Gallery weight="regular" />
      <h2 style={{ ...sectionLabel, marginTop: 28 }}>Bold</h2>
      <Gallery weight="bold" />
      <h2 style={{ ...sectionLabel, marginTop: 28 }}>Fill</h2>
      <Gallery weight="fill" />
    </div>
  ),
};

// ─────────────────────────────────────────────────────────
export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '24px is the canonical render size. Inside buttons, icons scale to 14/16/18/20px by size class. Tab bar icons render at 20px.',
      },
    },
  },
  render: () => (
    <div style={{ padding: 24, background: '#fff', display: 'flex', alignItems: 'center', gap: 32, color: 'var(--zd-text-primary)' }}>
      {[12, 14, 16, 18, 20, 24, 32, 48].map((s) => (
        <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Icon name="shopping-cart" size={s} />
          <span style={cellLabel}>{s}px</span>
        </div>
      ))}
    </div>
  ),
};

// ─────────────────────────────────────────────────────────
export const ColorInheritance: Story = {
  name: 'Color inheritance',
  parameters: {
    docs: {
      description: {
        story:
          'All icons use `fill="currentColor"` — set color on the parent and the icon follows. No need to thread props per-icon.',
      },
    },
  },
  render: () => (
    <div style={{ padding: 24, background: '#fff', display: 'flex', gap: 24 }}>
      {[
        { color: 'var(--zd-text-primary)', label: 'text' },
        { color: 'var(--zd-text-secondary)', label: 'text-secondary' },
        { color: 'var(--zd-brand)', label: 'brand' },
        { color: 'var(--zd-text-success-bold)', label: 'text-success' },
        { color: 'var(--zd-text-warning-bold)', label: 'text-warning' },
        { color: 'var(--zd-text-error-bold)', label: 'text-error' },
      ].map(({ color, label }) => (
        <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color }}>
          <Icon name="lightning" weight="fill" size={28} />
          <span style={{ ...cellLabel, color }}>{label}</span>
        </div>
      ))}
    </div>
  ),
};
