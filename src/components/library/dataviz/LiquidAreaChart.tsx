// @jxui/react v3.0.0 — LiquidAreaChart (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 3. LiquidAreaChart — real SVG area chart with two series, gradient fills
// in the theme accent, a hover crosshair with exact values, and legend
// toggles for each series.
const POINTS = [22, 30, 26, 38, 34, 44, 40, 52, 47, 58, 54, 66];
const POINTS_B = [30, 28, 34, 32, 40, 38, 46, 44, 50, 48, 56, 54];
const W = 100;
const H = 40;

function line(points: number[]) {
  return points.map((v, i) => `${i === 0 ? 'M' : 'L'} ${(i / (points.length - 1)) * W} ${H - (v / 70) * (H - 4) - 2}`).join(' ');
}

export const LiquidAreaChart: React.FC = () => {
  const { palette } = useJXTheme();
  const [hover, setHover] = useState<number | null>(null);
  const [show, setShow] = useState({ a: true, b: true });
  const x = (i: number) => (i / (POINTS.length - 1)) * W;

  return (
    <div className="w-full space-y-2">
      <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
          className="w-full h-24"
          role="img"
          aria-label="Area chart of requests over 12 intervals"
          onMouseLeave={() => setHover(null)}
        >
          <defs>
            <linearGradient id="jx-area-a" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={palette.hex} stopOpacity="0.35" />
              <stop offset="100%" stopColor={palette.hex} stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="jx-area-b" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          {show.a && <path d={`${line(POINTS)} L ${W} ${H} L 0 ${H} Z`} fill="url(#jx-area-a)" />}
          {show.b && <path d={`${line(POINTS_B)} L ${W} ${H} L 0 ${H} Z`} fill="url(#jx-area-b)" />}
          {show.a && <path d={line(POINTS)} fill="none" stroke={palette.hex} strokeWidth="0.8" />}
          {show.b && <path d={line(POINTS_B)} fill="none" stroke="#059669" strokeWidth="0.8" />}
          {POINTS.map((_, i) => (
            <rect
              key={i}
              x={x(i) - W / POINTS.length / 2}
              y="0"
              width={W / POINTS.length}
              height={H}
              fill="transparent"
              onMouseEnter={() => setHover(i)}
            />
          ))}
          {hover !== null && (
            <g>
              <line x1={x(hover)} x2={x(hover)} y1="0" y2={H} strokeWidth="0.4" className="stroke-slate-400" />
              {show.a && <circle cx={x(hover)} cy={H - (POINTS[hover] / 70) * (H - 4) - 2} r="1.6" fill={palette.hex} />}
              {show.b && <circle cx={x(hover)} cy={H - (POINTS_B[hover] / 70) * (H - 4) - 2} r="1.6" fill="#059669" />}
            </g>
          )}
        </svg>
      </div>
      <div className="flex items-center justify-between gap-2 text-xs">
        <div className="flex gap-1.5">
          {([
            { key: 'a', label: 'Requests', color: palette.hex },
            { key: 'b', label: 'Cache hits', color: '#059669' },
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
          {hover === null ? 'Hover the chart' : `t${hover + 1} · ${show.a ? `${POINTS[hover]} req/s` : ''}${show.a && show.b ? ' · ' : ''}${show.b ? `${POINTS_B[hover]} hits` : ''}`}
        </span>
      </div>
    </div>
  );
};
