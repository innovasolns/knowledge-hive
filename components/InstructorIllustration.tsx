'use client';

type Props = {
  variant: 0 | 1 | 2 | 3;
  accent?: boolean;
  className?: string;
};

const primary = '#FFC107';
const slate = '#94a3b8';
const slateLight = '#2d2d2d';
const primaryLight = 'rgba(255, 193, 7, 0.15)';

/** Minimal SVG illustrations for "Architects of Growth": chart, lightbulb, code/AI, rocket. */
export default function InstructorIllustration({
  variant,
  accent = false,
  className = '',
}: Props) {
  const f = accent ? primary : slate;
  const bg = accent ? primaryLight : slateLight;

  const illustrations = [
    // 0: Growth / chart
    <svg key={0} viewBox="0 0 192 224" fill="none" className={className} aria-hidden>
      <ellipse cx="96" cy="64" rx="32" ry="28" fill={bg} />
      <circle cx="96" cy="58" r="10" fill={f} opacity="0.9" />
      <path d="M96 92v52" stroke={f} strokeWidth="4" strokeLinecap="round" />
      <path d="M56 144h80M48 176h96M40 208h112" stroke={f} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M64 144l16-24 20 20 24-36 8 40" stroke={f} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // 1: Ideas / lightbulb
    <svg key={1} viewBox="0 0 192 224" fill="none" className={className} aria-hidden>
      <ellipse cx="96" cy="64" rx="32" ry="28" fill={bg} />
      <circle cx="96" cy="58" r="10" fill={f} opacity="0.9" />
      <path d="M96 92v44" stroke={f} strokeWidth="4" strokeLinecap="round" />
      <path d="M72 136c0-13.3 10.7-24 24-24s24 10.7 24 24v32H72v-32z" fill={bg} stroke={f} strokeWidth="2" strokeLinejoin="round" />
      <path d="M96 168v24M84 192h24" stroke={f} strokeWidth="2" strokeLinecap="round" />
      <path d="M96 112c-4 0-6 4-6 8 0 2 2 4 6 6 4-2 6-4 6-6 0-4-2-8-6-8z" fill={f} opacity="0.7" />
    </svg>,
    // 2: AI / code
    <svg key={2} viewBox="0 0 192 224" fill="none" className={className} aria-hidden>
      <ellipse cx="96" cy="64" rx="32" ry="28" fill={bg} />
      <circle cx="96" cy="58" r="10" fill={f} opacity="0.9" />
      <path d="M96 92v44" stroke={f} strokeWidth="4" strokeLinecap="round" />
      <rect x="64" y="136" width="64" height="56" rx="6" fill={bg} stroke={f} strokeWidth="2" />
      <path d="M76 156h32M76 172h24M76 188h16" stroke={f} strokeWidth="2" strokeLinecap="round" opacity="0.9" />
      <path d="M140 156l6 8-6 8M148 156l-6 8 6 8" stroke={f} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // 3: Venture / rocket
    <svg key={3} viewBox="0 0 192 224" fill="none" className={className} aria-hidden>
      <ellipse cx="96" cy="64" rx="32" ry="28" fill={bg} />
      <circle cx="96" cy="58" r="10" fill={f} opacity="0.9" />
      <path d="M96 92v36" stroke={f} strokeWidth="4" strokeLinecap="round" />
      <path d="M96 128l-28 56h56L96 128z" fill={bg} stroke={f} strokeWidth="2" strokeLinejoin="round" />
      <path d="M96 184v28M76 212h40" stroke={f} strokeWidth="2" strokeLinecap="round" />
      <path d="M80 140l-12 24 24-8 12-16h-24zM112 140l12 24-24-8-12-16h24z" fill={f} opacity="0.6" />
    </svg>,
  ];

  return illustrations[variant];
}
