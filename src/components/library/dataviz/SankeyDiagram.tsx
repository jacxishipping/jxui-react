// @jxui/react v3.0.0 — SankeyDiagram (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 13. SankeyDiagram — real flow diagram: traffic sources on the left flow
// into outcomes on the right; hover a flow to read its value and share.
const FLOWS = [
  { from: 'Search', to: 'Sign up', value: 4200, color: 'accent' },
  { from: 'Search', to: 'Bounce', value: 1800, color: '#94a3b8' },
  { from: 'Social', to: 'Sign up', value: 2400, color: '#059669' },
  { from: 'Social', to: 'Bounce', value: 900, color: '#94a3b8' },
  { from: 'Referral', to: 'Sign up', value: 1700, color: '#7c3aed' },
  { from: 'Referral', to: 'Bounce', value: 600, color: '#94a3b8' },
] as const;
const SOURCES = ['Search', 'Social', 'Referral'];
const TARGETS = ['Sign up', 'Bounce'];

export const SankeyDiagram: React.FC = () => {
  const { palette } = useJXTheme();
  const [active, setActive] = useState<number | null>(0);
  const sourceY = (name: string) => 20 + SOURCES.indexOf(name) * 32;
  const targetY = (name: string) => 20 + TARGETS.indexOf(name) * 56;
  const total = FLOWS.reduce((s, f) => s + f.value, 0);

  return (
    <div className="w-full space-y-2">
      <svg viewBox="0 0 200 110" className="w-full" role="img" aria-label="Sankey diagram of traffic sources flowing into sign ups and bounces">
        {FLOWS.map((f, i) => {
          const y1 = sourceY(f.from);
          const y2 = targetY(f.to);
          const w = Math.max(2, (f.value / total) * 60);
          return (
            <path
              key={`${f.from}-${f.to}`}
              d={`M 52 ${y1} C 100 ${y1}, 100 ${y2}, 148 ${y2}`}
              fill="none"
              stroke={f.color === 'accent' ? palette.hex : f.color}
              strokeWidth={active === i ? w + 3 : w}
              strokeOpacity={active === null || active === i ? 0.7 : 0.2}
              className="cursor-pointer transition-all duration-200"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(i)}
            />
          );
        })}
        {SOURCES.map((s) => (
          <g key={s}>
            <rect x="8" y={sourceY(s) - 8} width="44" height="16" rx="4" fill={palette.hex} fillOpacity="0.15" stroke={palette.hex} strokeWidth="1" />
            <text x="30" y={sourceY(s) + 3} textAnchor="middle" fontSize="8" fontWeight="700" className="fill-slate-700 dark:fill-slate-200">{s}</text>
          </g>
        ))}
        {TARGETS.map((t) => (
          <g key={t}>
            <rect x="148" y={targetY(t) - 8} width="44" height="16" rx="4" fill={t === 'Sign up' ? '#059669' : '#94a3b8'} fillOpacity="0.2" stroke={t === 'Sign up' ? '#059669' : '#94a3b8'} strokeWidth="1" />
            <text x="170" y={targetY(t) + 3} textAnchor="middle" fontSize="8" fontWeight="700" className="fill-slate-700 dark:fill-slate-200">{t}</text>
          </g>
        ))}
      </svg>
      <p className="text-xs text-slate-600 dark:text-slate-300" aria-live="polite">
        {active === null
          ? 'Hover a flow to inspect it.'
          : `${FLOWS[active].from} → ${FLOWS[active].to}: ${FLOWS[active].value.toLocaleString()} users (${((FLOWS[active].value / total) * 100).toFixed(1)}% of traffic)`}
      </p>
    </div>
  );
};
