// @jxui/react v3.0.0 — ScatterPlot (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 8. ScatterPlot — real SVG scatter: two series (latency vs bundle size),
// axes with labels, hover a point for its exact values, legend toggles.
const SERIES = [
  {
    name: 'JXUI',
    color: 'accent',
    points: [
      { x: 12, y: 0.8, label: 'JXButton' },
      { x: 24, y: 1.1, label: 'JXTable' },
      { x: 18, y: 0.6, label: 'JXCard' },
      { x: 32, y: 1.4, label: 'JXCharts' },
      { x: 28, y: 0.9, label: 'JXModal' },
    ],
  },
  {
    name: 'MUI',
    color: '#94a3b8',
    points: [
      { x: 48, y: 3.2, label: 'Button' },
      { x: 64, y: 4.1, label: 'DataGrid' },
      { x: 52, y: 2.8, label: 'Card' },
      { x: 78, y: 4.6, label: 'Charts' },
      { x: 58, y: 3.6, label: 'Dialog' },
    ],
  },
] as const;

export const ScatterPlot: React.FC = () => {
  const { palette } = useJXTheme();
  const [active, setActive] = useState<{ s: number; i: number } | null>({ s: 0, i: 3 });
  const [show, setShow] = useState({ JXUI: true, MUI: true });
  const px = (x: number) => 8 + (x / 90) * 184;
  const py = (y: number) => 92 - (y / 5) * 80;

  return (
    <div className="w-full space-y-2">
      <svg viewBox="0 0 200 100" className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" role="img" aria-label="Scatter plot of bundle size against render latency">
        {[25, 50, 75].map((y) => (
          <line key={y} x1="8" x2="196" y1={y} y2={y} strokeWidth="0.4" className="stroke-slate-200 dark:stroke-slate-800" />
        ))}
        {SERIES.map((s, si) =>
          show[s.name]
            ? s.points.map((p, i) => (
                <circle
                  key={p.label}
                  cx={px(p.x)}
                  cy={py(p.y)}
                  r={active?.s === si && active?.i === i ? 6 : 4}
                  fill={s.color === 'accent' ? palette.hex : s.color}
                  fillOpacity={active?.s === si && active?.i === i ? 1 : 0.7}
                  stroke="#fff"
                  strokeWidth="1"
                  className="cursor-pointer transition-all duration-200"
                  onMouseEnter={() => setActive({ s: si, i })}
                  onMouseLeave={() => setActive(null)}
                  onClick={() => setActive({ s: si, i })}
                >
                  <title>{`${p.label}: ${p.x} KB, ${p.y}ms`}</title>
                </circle>
              ))
            : null
        )}
        <text x="100" y="99" textAnchor="middle" fontSize="7" className="fill-slate-400">Bundle size (KB) →</text>
        <text x="4" y="12" fontSize="7" className="fill-slate-400">ms</text>
      </svg>
      <div className="flex items-center justify-between gap-2 text-xs">
        <div className="flex gap-1.5">
          {SERIES.map((s) => (
            <button
              key={s.name}
              type="button"
              onClick={() => setShow((v) => ({ ...v, [s.name]: !v[s.name] }))}
              aria-pressed={show[s.name]}
              className={`min-h-[36px] inline-flex items-center gap-1.5 px-2.5 rounded-lg font-medium cursor-pointer ${
                show[s.name] ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200' : 'text-slate-400 line-through'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color === 'accent' ? palette.hex : s.color }} />
              {s.name}
            </button>
          ))}
        </div>
        <span className="font-mono text-slate-500" aria-live="polite">
          {active ? `${SERIES[active.s].points[active.i].label}: ${SERIES[active.s].points[active.i].x} KB · ${SERIES[active.s].points[active.i].y}ms` : 'Hover a point'}
        </span>
      </div>
    </div>
  );
};
