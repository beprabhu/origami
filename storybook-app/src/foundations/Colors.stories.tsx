import type { Meta, StoryObj } from '@storybook/react';
import type { CSSProperties } from 'react';

const meta = {
  title: 'Foundations/Colors',
  parameters: {
    docs: {
      description: {
        component:
          'White-dominant palette with a single hot-pink hero. Greens carry savings; orange/red/blue handle status. Sub-brands swap the dominant color but keep the same neutral scaffolding.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

interface SwatchProps {
  name: string;
  token: string;
  hex?: string;
  fg?: string;
}

const cardStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  padding: 12,
  border: '1px solid var(--zd-border)',
  borderRadius: 8,
  background: 'var(--zd-surface)',
};

function Swatch({ name, token, fg = 'var(--zd-text)' }: SwatchProps) {
  return (
    <div style={cardStyle}>
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 6,
          background: `var(${token})`,
          border: '1px solid rgba(0,0,0,0.06)',
          flexShrink: 0,
        }}
      />
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: fg }}>{name}</div>
        <code style={{ fontSize: 11, color: 'var(--zd-text-secondary)', fontFamily: 'var(--zd-font-mono)' }}>
          {token}
        </code>
      </div>
    </div>
  );
}

function Ramp({ title, prefix, steps }: { title: string; prefix: string; steps: number[] }) {
  return (
    <section style={{ marginBottom: 24 }}>
      <h3 style={{ font: '600 14px var(--zd-font-sans)', margin: '0 0 10px' }}>{title}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 8 }}>
        {steps.map((s) => (
          <Swatch key={s} name={`${title} ${s}`} token={`--zd-${prefix}-${s}`} />
        ))}
      </div>
    </section>
  );
}

export const BrandPink: Story = {
  render: () => <Ramp title="Pink (brand)" prefix="pink" steps={[50, 100, 200, 300, 400, 500, 600, 700, 800, 900]} />,
};

export const Grey: Story = {
  render: () => <Ramp title="Grey" prefix="grey" steps={[50, 100, 200, 300, 400, 500, 600, 700, 800, 900]} />,
};

export const Semantic: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 8 }}>
      <Swatch name="Brand" token="--zd-brand" />
      <Swatch name="Brand subtle" token="--zd-brand-subtle" />
      <Swatch name="Surface" token="--zd-surface" />
      <Swatch name="Surface muted" token="--zd-surface-muted" />
      <Swatch name="Border" token="--zd-border" />
      <Swatch name="Text success" token="--zd-text-success" />
      <Swatch name="Surface success subtle" token="--zd-surface-success-subtle" />
      <Swatch name="Text warning" token="--zd-text-warning" />
      <Swatch name="Surface warning subtle" token="--zd-surface-warning-subtle" />
      <Swatch name="Text error" token="--zd-text-error" />
      <Swatch name="Surface error subtle" token="--zd-surface-error-subtle" />
      <Swatch name="Text highlight" token="--zd-text-highlight" />
    </div>
  ),
};

export const SubBrands: Story = {
  render: () => (
    <div>
      <Ramp title="Royale (Zepto Pass)" prefix="royale" steps={[100, 300, 500, 700, 800, 900]} />
      <Ramp title="Grass (Daily Pass)" prefix="grass" steps={[100, 300, 500, 700, 800, 900]} />
      <Ramp title="Lime (Daily Pass accent)" prefix="lime" steps={[100, 300, 500, 700]} />
      <Ramp title="Green (savings)" prefix="green" steps={[50, 100, 500, 700, 800, 900]} />
      <Ramp title="Orange (deals)" prefix="orange" steps={[50, 100, 500, 700, 800]} />
    </div>
  ),
};
