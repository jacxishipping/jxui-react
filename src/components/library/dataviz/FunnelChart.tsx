// @jxui/react v3.0.0 — FunnelChart (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 15. FunnelChart — real SVG funnel: each stage's width encodes its count,
// hover/click a stage to see its conversion from the previous stage.
const STAGES = [
  { label: 'Visited', value: 12400, color: 'accent' },
  { label: 'Signed up', value: 8300, color: '#0284c7' },
  { label: 'Activated', value: 5100, color: '#059669' },
  { label: 'Converted', value: 2900, color: '#d97706' },
] as const;
const MAX = STAGES[0].value;

export const FunnelChart: React.FC = () => {
  const { palette } = useJXTheme();
  const [active, setActive] = useState<number>(0);
  const stage = STAGES[active];
  const prev = active === 0 ? null : STAGES[active - 1];
  const conversion = prev ? ((stage.value / prev.value) * 100).toFixed(1) : '100.0';

  return (
    <div className="w-full space-y-2">
      <svg viewBox="0 0 200 120" className="w-full" role="img" aria-label="Conversion funnel from 12,400 visits to 2,900 conversions">
        {STAGES.map((s, i) => {
          const w = (s.value / MAX) * 180;
          const x = (200 - w) / 2;
          const y = 6 + i * 28;
          return (
            <g
              key={s.label}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className="cursor-pointer"
              opacity={active === i ? 1 : 0.65}
            >
              <rect x={x} y={y} width={w} height={22} rx="6" fill={s.color === 'accent' ? palette.hex : s.color} />
              <text x="100" y={y + 15} textAnchor="middle" fontSize="10" fill="#fff" fontWeight="700">
                {s.label} · {s.value.toLocaleString()}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="flex items-center justify-between gap-2 text-xs">
        <div className="flex flex-wrap gap-1.5">
          {STAGES.map((s, i) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`min-h-[36px] px-2.5 rounded-lg font-medium cursor-pointer ${
                active === i ? `${palette.softBg} ${palette.text}` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
        <span className="font-mono text-slate-600 dark:text-slate-300 shrink-0" aria-live="polite">
          {stage.value.toLocaleString()} · {conversion}% of previous
        </span>
      </div>
    </div>
  );
};
