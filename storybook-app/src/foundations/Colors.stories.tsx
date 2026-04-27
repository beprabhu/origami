import type { Meta, StoryObj } from '@storybook/react';
import type { CSSProperties } from 'react';

const meta = {
  title: 'Foundations/Colors',
  parameters: {
    docs: {
      description: {
        component:
          'Two layers: **Base** (raw color ramps — never use directly in components) and **Semantic** (the contract surface). Every base swatch shows hex; every semantic swatch shows the base it resolves to.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

/* ------------------------------------------------------------------ */
/* Resolver — read computed value of any --zd-* token                  */
/* ------------------------------------------------------------------ */

function useResolved(token: string): string {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement).getPropertyValue(token).trim();
}

/* ------------------------------------------------------------------ */
/* Swatch primitives                                                   */
/* ------------------------------------------------------------------ */

const cardStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  padding: 12,
  border: '1px solid var(--zd-border)',
  borderRadius: 8,
  background: 'var(--zd-surface)',
};

const codeStyle: CSSProperties = {
  fontSize: 11,
  color: 'var(--zd-text-secondary)',
  fontFamily: 'var(--zd-font-mono)',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: 'block',
};

const labelStyle: CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: 'var(--zd-text-primary)',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

interface BaseSwatchProps {
  step: number;
  prefix: string;
}

function BaseSwatch({ step, prefix }: BaseSwatchProps) {
  const token = `--zd-${prefix}-${step}`;
  const hex = useResolved(token);
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
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={labelStyle}>{step}</div>
        <code style={codeStyle}>{token}</code>
        <code style={{ ...codeStyle, color: 'var(--zd-text-tertiary)' }}>{hex}</code>
      </div>
    </div>
  );
}

interface SemanticSwatchProps {
  token: string;
  bg?: string;
}

function SemanticSwatch({ token, bg = 'var(--zd-surface)' }: SemanticSwatchProps) {
  const resolved = useResolved(token);
  const label = token.replace(/^--zd-/, '');
  return (
    <div style={{ ...cardStyle, background: bg }}>
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
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={labelStyle}>{label}</div>
        <code style={codeStyle}>{token}</code>
        <code style={{ ...codeStyle, color: 'var(--zd-text-tertiary)' }}>{resolved}</code>
      </div>
    </div>
  );
}

function Ramp({ title, prefix, steps, note }: { title: string; prefix: string; steps: number[]; note?: string }) {
  return (
    <section style={{ marginBottom: 28 }}>
      <h3 style={{ font: '600 14px var(--zd-font-sans)', margin: '0 0 4px', color: 'var(--zd-text-primary)' }}>
        {title}
      </h3>
      {note ? (
        <p style={{ font: '400 12px/16px var(--zd-font-sans)', color: 'var(--zd-text-secondary)', margin: '0 0 10px' }}>
          {note}
        </p>
      ) : null}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 }}>
        {steps.map((s) => (
          <BaseSwatch key={s} step={s} prefix={prefix} />
        ))}
      </div>
    </section>
  );
}

function SemanticGroup({ title, tokens, bg }: { title: string; tokens: string[]; bg?: string }) {
  return (
    <section style={{ marginBottom: 28 }}>
      <h3 style={{ font: '600 14px var(--zd-font-sans)', margin: '0 0 10px', color: 'var(--zd-text-primary)' }}>
        {title}
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 8 }}>
        {tokens.map((t) => (
          <SemanticSwatch key={t} token={t} bg={bg} />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Base ramp shorthands                                                */
/* ------------------------------------------------------------------ */

const FULL = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

/* ------------------------------------------------------------------ */
/* Base color stories — 1 ramp = 1 story                               */
/* ------------------------------------------------------------------ */

export const Pink: Story = {
  render: () => (
    <Ramp title="Pink" prefix="pink" steps={FULL} note="Flagship brand → Zepto's hot pink. Backs CTAs, price tags, urgency." />
  ),
};

export const Purple: Story = {
  render: () => (
    <Ramp title="Purple" prefix="purple" steps={FULL} note="Brand Primary → Zepto Pass / premium surfaces." />
  ),
};

export const Grey: Story = {
  render: () => <Ramp title="Grey" prefix="grey" steps={FULL} note="Text, surfaces, borders." />,
};

export const Green: Story = {
  render: () => <Ramp title="Green" prefix="green" steps={FULL} note="Success, savings, Super Saver." />,
};

export const Orange: Story = {
  render: () => <Ramp title="Orange" prefix="orange" steps={FULL} note="Warning, hot deals." />,
};

export const Red: Story = {
  render: () => <Ramp title="Red" prefix="red" steps={FULL} note="Error, critical, destructive." />,
};

export const Blue: Story = {
  render: () => <Ramp title="Blue" prefix="blue" steps={FULL} note="Highlight, informational." />,
};

export const Yellow: Story = {
  render: () => <Ramp title="Yellow" prefix="yellow" steps={FULL} note="Caution, promo accents." />,
};

export const Teal: Story = {
  render: () => <Ramp title="Teal" prefix="teal" steps={FULL} note="Accent — Zepto Cafe / fresh strips." />,
};

export const Indigo: Story = {
  render: () => <Ramp title="Indigo" prefix="indigo" steps={FULL} note="Experiment surfaces, promo badges." />,
};

export const Royale: Story = {
  render: () => <Ramp title="Royale" prefix="royale" steps={FULL} note="Sub-brand → Zepto Pass aurora variant." />,
};

export const Grass: Story = {
  render: () => <Ramp title="Grass" prefix="grass" steps={FULL} note="Sub-brand → Daily Pass deep green." />,
};

export const Lime: Story = {
  render: () => <Ramp title="Lime" prefix="lime" steps={FULL} note="Sub-brand → Daily Pass vivid accent." />,
};

/* ------------------------------------------------------------------ */
/* Semantic stories — exhaustive                                       */
/* ------------------------------------------------------------------ */

export const SemanticText: Story = {
  parameters: {
    docs: { description: { story: 'Every `--zd-text-*` semantic token. Always reference these in components — never raw `--zd-grey-*` or `--zd-pink-*`.' } },
  },
  render: () => (
    <div>
      <SemanticGroup
        title="Neutral text"
        tokens={[
          '--zd-text-primary',
          '--zd-text-primary-subtle',
          '--zd-text-secondary',
          '--zd-text-tertiary',
          '--zd-text-disabled',
          '--zd-text-disabled-light',
          '--zd-text-muted',
          '--zd-text-light',
        ]}
      />
      <SemanticGroup
        title="Brand text"
        tokens={['--zd-text-brand-primary', '--zd-text-brand-secondary']}
      />
      <SemanticGroup
        title="Brand text — on dark"
        tokens={['--zd-text-brand-primary-subtle', '--zd-text-brand-secondary-subtle']}
        bg="var(--zd-grey-900)"
      />
      <SemanticGroup
        title="Status text — bold"
        tokens={[
          '--zd-text-success-bold',
          '--zd-text-warning-bold',
          '--zd-text-error-bold',
          '--zd-text-highlight-bold',
          '--zd-text-accent-bold',
        ]}
      />
      <SemanticGroup
        title="Status text — subtle (on dark)"
        tokens={[
          '--zd-text-success-subtle',
          '--zd-text-warning-subtle',
          '--zd-text-error-subtle',
          '--zd-text-highlight-subtle',
          '--zd-text-accent-subtle',
        ]}
        bg="var(--zd-grey-900)"
      />
      <SemanticGroup
        title="On-surface text"
        tokens={['--zd-text-on-surface-bold', '--zd-text-on-surface-subtle']}
        bg="var(--zd-grey-900)"
      />
      <SemanticGroup
        title="Specialty text"
        tokens={['--zd-text-success-inverted', '--zd-text-super-saver']}
      />
    </div>
  ),
};

export const SemanticSurface: Story = {
  parameters: {
    docs: { description: { story: 'Every `--zd-surface-*` semantic token. Use these for fills — backgrounds, cards, chips, banners.' } },
  },
  render: () => (
    <div>
      <SemanticGroup
        title="Neutral surfaces"
        tokens={[
          '--zd-surface-primary',
          '--zd-surface-secondary',
          '--zd-surface-tertiary',
          '--zd-surface-tertiary-dark',
          '--zd-surface-secondary-dark',
          '--zd-surface-primary-dark',
        ]}
      />
      <SemanticGroup
        title="Brand primary surfaces"
        tokens={[
          '--zd-surface-brand-primary',
          '--zd-surface-brand-primary-bold',
          '--zd-surface-brand-primary-semi-bold',
          '--zd-surface-brand-primary-medium',
          '--zd-surface-brand-primary-light',
          '--zd-surface-brand-primary-subtle',
        ]}
      />
      <SemanticGroup
        title="Brand secondary surfaces"
        tokens={[
          '--zd-surface-brand-secondary-bold',
          '--zd-surface-brand-secondary-extrabold',
          '--zd-surface-brand-secondary-medium',
          '--zd-surface-brand-secondary-subtle',
        ]}
      />
      <SemanticGroup
        title="Success surfaces"
        tokens={[
          '--zd-surface-success-extra-bold',
          '--zd-surface-success-bold',
          '--zd-surface-success-semi-bold',
          '--zd-surface-success-medium',
          '--zd-surface-success-light',
          '--zd-surface-success-subtle',
        ]}
      />
      <SemanticGroup
        title="Warning / Error / Highlight / Accent"
        tokens={[
          '--zd-surface-warning-bold',
          '--zd-surface-warning-subtle',
          '--zd-surface-error-bold',
          '--zd-surface-error-subtle',
          '--zd-surface-highlight-bold',
          '--zd-surface-highlight-subtle',
          '--zd-surface-accent-bold',
          '--zd-surface-accent-subtle',
        ]}
      />
      <SemanticGroup
        title="Overlays &amp; specialty"
        tokens={[
          '--zd-surface-overlay-dark-bold',
          '--zd-surface-overlay-dark-subtle',
          '--zd-surface-overlay-dark-opaque',
          '--zd-surface-overlay-white-bold',
          '--zd-surface-overlay-white-medium',
          '--zd-surface-overlay-white-subtle',
          '--zd-surface-disabled-default',
          '--zd-surface-super-saver',
          '--zd-surface-super-saver-medium',
          '--zd-surface-neutral-success-subtle',
        ]}
      />
    </div>
  ),
};

export const SemanticBorder: Story = {
  parameters: {
    docs: { description: { story: 'Every `--zd-border-*` semantic token.' } },
  },
  render: () => (
    <div>
      <SemanticGroup
        title="Neutral borders"
        tokens={[
          '--zd-border-white',
          '--zd-border-default',
          '--zd-border-medium',
          '--zd-border-semi-bold',
          '--zd-border-bold',
          '--zd-border-extra-bold',
          '--zd-border-dark',
          '--zd-border-extra-dark',
        ]}
      />
      <SemanticGroup
        title="Brand borders"
        tokens={[
          '--zd-border-brand-primary-bold',
          '--zd-border-brand-primary-subtle',
          '--zd-border-brand-secondary-bold',
          '--zd-border-brand-secondary-subtle',
        ]}
      />
      <SemanticGroup
        title="Status borders"
        tokens={[
          '--zd-border-success-bold',
          '--zd-border-success-semi-bold',
          '--zd-border-success-medium',
          '--zd-border-success-subtle',
          '--zd-border-warning-subtle',
          '--zd-border-error-subtle',
          '--zd-border-highlight-subtle',
          '--zd-border-accent-bold',
          '--zd-border-accent-subtle',
        ]}
      />
    </div>
  ),
};

export const SemanticIcon: Story = {
  parameters: {
    docs: { description: { story: 'Every `--zd-icon-*` semantic token.' } },
  },
  render: () => (
    <div>
      <SemanticGroup
        title="Neutral icons"
        tokens={['--zd-icon-primary', '--zd-icon-secondary']}
      />
      <SemanticGroup
        title="On-surface icons"
        tokens={['--zd-icon-on-surface-bold', '--zd-icon-on-surface-subtle']}
        bg="var(--zd-grey-900)"
      />
      <SemanticGroup
        title="Brand icons"
        tokens={['--zd-icon-brand-primary', '--zd-icon-brand-secondary']}
      />
      <SemanticGroup
        title="Status icons"
        tokens={[
          '--zd-icon-success-bold',
          '--zd-icon-warning-bold',
          '--zd-icon-error-bold',
          '--zd-icon-highlight-bold',
          '--zd-icon-accent-bold',
        ]}
      />
    </div>
  ),
};
