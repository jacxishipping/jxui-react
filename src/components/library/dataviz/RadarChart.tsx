// @jxui/react v3.0.0 — RadarChart (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 7. RadarChart — real SVG radar: five axes, two series (JXUI vs MUI) with
// legend toggles, hover an axis to read both series' values on it.
const AXES = ['Speed', 'A11y', 'Motion', 'Theming', 'DX'];
const JXUI = [95, 92, 88, 96, 90];
const MUI = [62, 78, 55, 70, 74];

function polygon(values: number[]) {
  const cx = 100;
  const cy = 100;
  const r = 70;
  return values
    .map((v, i) => {
      const a = (Math.PI * 2 * i) / values.length - Math.PI / 2;
      return `${cx + (v / 100) * r * Math.cos(a)},${cy + (v / 100) * r * Math.sin(a)}`;
    })
    .join(' ');
}

export const RadarChart: React.FC = () => {
  const { palette } = useJXTheme();
  const [active, setActive] = useState<number | null>(null);
  const [show, setShow] = useState({ jxui: true, mui: true });
  const ring = [25, 50, 75, 100].map((p) => polygon(AXES.map(() => p)));

  return (
    <div className="w-full space-y-2">
      <svg viewBox="0 0 200 200" className="w-full max-w-[220px] mx-auto" role="img" aria-label="Radar chart comparing JXUI and MUI across five axes">
        {ring.map((pts, i) => (
          <polygon key={i} points={pts} fill="none" strokeWidth="0.8" className="stroke-slate-200 dark:stroke-slate-800" />
        ))}
        {AXES.map((label, i) => {
          const a = (Math.PI * 2 * i) / AXES.length - Math.PI / 2;
          const x2 = 100 + 78 * Math.cos(a);
          const y2 = 100 + 78 * Math.sin(a);
          const lx = 100 + 92 * Math.cos(a);
          const ly = 100 + 92 * Math.sin(a);
          return (
            <g key={label}>
              <line x1="100" y1="100" x2={x2} y2={y2} strokeWidth="0.8" className="stroke-slate-200 dark:stroke-slate-800" />
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="10"
                fontWeight={active === i ? 700 : 400}
                className="fill-slate-600 dark:fill-slate-300 cursor-pointer"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                {label}
              </text>
            </g>
          );
        })}
        {show.mui && <polygon points={polygon(MUI)} fill="#94a3b8" fillOpacity="0.25" stroke="#94a3b8" strokeWidth="1.5" />}
        {show.jxui && <polygon points={polygon(JXUI)} fill={palette.hex} fillOpacity="0.3" stroke={palette.hex} strokeWidth="1.5" />}
        {AXES.map((_, i) => {
          const a = (Math.PI * 2 * i) / AXES.length - Math.PI / 2;
          return (
            <circle
              key={i}
              cx={100 + (JXUI[i] / 100) * 70 * Math.cos(a)}
              cy={100 + (JXUI[i] / 100) * 70 * Math.sin(a)}
              r={active === i ? 4 : 2.5}
              fill={palette.hex}
              className="cursor-pointer"
              onMouseEnter={() => setActive(i)}
            />
          );
        })}
      </svg>
      <div className="flex items-center justify-between gap-2 text-xs">
        <div className="flex gap-1.5">
          {([
            { key: 'jxui', label: 'JXUI', color: palette.hex },
            { key: 'mui', label: 'MUI', color: '#94a3b8' },
          ] as const).map((s) => (
            <button
              key={s.key}
              type="button"
              onClick={() => setShow((v) => ({ ...v, [s.key]: !v[s.key] }))}
              aria-pressed={show[s.key]}
              className={`min-h-[36px] inline-flex items-center gap-1.5 px-2.5 rounded-lg font-medium cursor-pointer ${
                show[s.key] ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200' : 'text-slate-400 line-through'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
              {s.label}
            </button>
          ))}
        </div>
        <span className="font-mono text-slate-500" aria-live="polite">
          {active === null ? 'Hover an axis' : `${AXES[active]} · JXUI ${JXUI[active]} vs MUI ${MUI[active]}`}
        </span>
      </div>
    </div>
  );
};
