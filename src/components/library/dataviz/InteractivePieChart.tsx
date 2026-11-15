// @jxui/react v3.0.0 — InteractivePieChart (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 6. InteractivePieChart — real SVG pie: hover or click a slice (or its
// legend row) to spotlight it; the centre shows that slice's share.
const SLICES = [
  { label: 'Desktop', value: 55, color: 'accent' },
  { label: 'Mobile', value: 30, color: '#059669' },
  { label: 'Tablet', value: 15, color: '#7c3aed' },
] as const;

function slicePath(cx: number, cy: number, r: number, start: number, end: number) {
  const large = end - start > Math.PI ? 1 : 0;
  const x1 = cx + r * Math.cos(start);
  const y1 = cy + r * Math.sin(start);
  const x2 = cx + r * Math.cos(end);
  const y2 = cy + r * Math.sin(end);
  return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
}

export const InteractivePieChart: React.FC = () => {
  const { palette } = useJXTheme();
  const [active, setActive] = useState<number | null>(0);
  const total = SLICES.reduce((s, x) => s + x.value, 0);
  let angle = -Math.PI / 2;

  return (
    <div className="w-full flex items-center gap-4">
      <div className="relative w-28 h-28 shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full" role="img" aria-label="Pie chart: Desktop 55%, Mobile 30%, Tablet 15%">
          {SLICES.map((s, i) => {
            const start = angle;
            const end = angle + (s.value / total) * Math.PI * 2;
            angle = end;
            return (
              <path
                key={s.label}
                d={slicePath(50, 50, active === i ? 50 : 46, start, end)}
                fill={s.color === 'accent' ? palette.hex : s.color}
                fillOpacity={active === null || active === i ? 1 : 0.45}
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(i)}
              >
                <title>{`${s.label}: ${s.value}%`}</title>
              </path>
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-base font-extrabold text-slate-900 dark:text-white">
            {active === null ? '100%' : `${SLICES[active].value}%`}
          </span>
          <span className="text-[10px] text-slate-500">{active === null ? 'Total' : SLICES[active].label}</span>
        </div>
      </div>
      <ul className="space-y-1.5 text-xs">
        {SLICES.map((s, i) => (
          <li key={s.label}>
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`min-h-[36px] flex items-center gap-2 cursor-pointer rounded px-1.5 ${active === i ? 'bg-slate-100 dark:bg-slate-800 font-semibold' : ''}`}
            >
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: s.color === 'accent' ? palette.hex : s.color }} />
              <span className="text-slate-700 dark:text-slate-200">{s.label}</span>
              <span className="font-mono text-slate-500">{s.value}%</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
