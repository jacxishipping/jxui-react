// @jxui/react v3.0.0 — DonutChart (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 5. DonutChart — a real SVG donut: three segments with a legend, hover a
// segment (or a legend row) and the centre shows that segment's share.
const SEGMENTS = [
  { label: 'Desktop', value: 55, color: 'accent' },
  { label: 'Mobile', value: 30, color: '#059669' },
  { label: 'Tablet', value: 15, color: '#7c3aed' },
] as const;

const R = 40;
const CIRC = 2 * Math.PI * R;

export const DonutChart: React.FC = () => {
  const { palette } = useJXTheme();
  const [active, setActive] = useState<number | null>(null);
  let offset = 0;
  const total = SEGMENTS.reduce((s, seg) => s + seg.value, 0);

  return (
    <div className="w-full flex items-center gap-4 p-2">
      <div className="relative w-28 h-28 shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90" role="img" aria-label="Donut chart: Desktop 55%, Mobile 30%, Tablet 15%">
          <circle cx="50" cy="50" r={R} fill="none" strokeWidth="14" className="stroke-slate-100 dark:stroke-slate-800" />
          {SEGMENTS.map((seg, i) => {
            const len = (seg.value / total) * CIRC;
            const el = (
              <circle
                key={seg.label}
                cx="50"
                cy="50"
                r={R}
                fill="none"
                stroke={seg.color === 'accent' ? palette.hex : seg.color}
                strokeWidth={active === i ? 18 : 14}
                strokeDasharray={`${len} ${CIRC - len}`}
                strokeDashoffset={-offset}
                className="transition-all duration-200 cursor-pointer"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              />
            );
            offset += len;
            return el;
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-lg font-extrabold text-slate-900 dark:text-white">
            {active === null ? `${total}%` : `${SEGMENTS[active].value}%`}
          </span>
          <span className="text-[10px] text-slate-500">{active === null ? 'Sessions' : SEGMENTS[active].label}</span>
        </div>
      </div>
      <ul className="space-y-1.5 text-xs">
        {SEGMENTS.map((seg, i) => (
          <li key={seg.label}>
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className={`flex items-center gap-2 cursor-pointer rounded px-1 py-0.5 ${active === i ? 'bg-slate-100 dark:bg-slate-800 font-semibold' : ''}`}
            >
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: seg.color === 'accent' ? palette.hex : seg.color }} />
              <span className="text-slate-700 dark:text-slate-200">{seg.label}</span>
              <span className="font-mono text-slate-500">{seg.value}%</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
