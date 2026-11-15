// @jxui/react v3.0.0 — BubbleChart (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 9. BubbleChart — real SVG bubble chart: bubble area encodes value, hover
// (or focus) a bubble to inspect it, legend toggles series on and off.
const BUBBLES = [
  { label: 'A · Core', x: 18, y: 70, r: 12, v: 420, color: 'accent' },
  { label: 'B · Lab', x: 42, y: 38, r: 20, v: 980, color: '#059669' },
  { label: 'C · Docs', x: 62, y: 66, r: 9, v: 210, color: '#7c3aed' },
  { label: 'D · Infra', x: 78, y: 30, r: 15, v: 640, color: '#d97706' },
  { label: 'E · Mobile', x: 30, y: 22, r: 7, v: 150, color: '#0284c7' },
  { label: 'F · Edge', x: 88, y: 58, r: 11, v: 380, color: '#e11d48' },
] as const;

export const BubbleChart: React.FC = () => {
  const { palette } = useJXTheme();
  const [active, setActive] = useState<number | null>(1);
  const [hidden, setHidden] = useState<Record<string, boolean>>({});
  const visible = BUBBLES.filter((b) => !hidden[b.label]);

  return (
    <div className="w-full space-y-2">
      <div className="relative w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2">
        <svg viewBox="0 0 100 90" className="w-full h-36" role="img" aria-label="Bubble chart of component groups by size and value">
          {[20, 45, 70].map((y) => (
            <line key={y} x1="4" x2="98" y1={y} y2={y} strokeWidth="0.4" className="stroke-slate-200 dark:stroke-slate-800" />
          ))}
          {visible.map((b) => {
            const idx = BUBBLES.indexOf(b);
            return (
              <circle
                key={b.label}
                cx={b.x}
                cy={b.y}
                r={active === idx ? b.r + 2 : b.r}
                fill={b.color === 'accent' ? palette.hex : b.color}
                fillOpacity={active === idx ? 0.9 : 0.55}
                stroke={b.color === 'accent' ? palette.hex : b.color}
                strokeWidth="1"
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => setActive(idx)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(idx)}
              >
                <title>{`${b.label}: ${b.v}`}</title>
              </circle>
            );
          })}
        </svg>
        <div className="absolute bottom-2 left-3 text-[11px] font-mono text-slate-500" aria-live="polite">
          {active !== null && !hidden[BUBBLES[active].label]
            ? `${BUBBLES[active].label} · value ${BUBBLES[active].v}`
            : 'Hover a bubble to inspect it'}
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {BUBBLES.map((b) => (
          <button
            key={b.label}
            type="button"
            onClick={() => setHidden((h) => ({ ...h, [b.label]: !h[b.label] }))}
            aria-pressed={Boolean(hidden[b.label])}
            className={`min-h-[36px] inline-flex items-center gap-1.5 px-2.5 rounded-lg text-xs font-medium cursor-pointer ${
              hidden[b.label]
                ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 line-through'
                : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: b.color === 'accent' ? palette.hex : b.color }} />
            {b.label.split(' · ')[1]}
          </button>
        ))}
      </div>
    </div>
  );
};
