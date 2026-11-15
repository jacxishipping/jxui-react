// @jxui/react v3.0.0 — WaterfallChart (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 14. WaterfallChart — real waterfall: cumulative bars for a revenue walk,
// hover a bar for its step value, toggle between two datasets.
type WaterfallStep = { label: string; delta: number; total?: boolean };
const SETS: Record<'Revenue' | 'Costs', WaterfallStep[]> = {
  Revenue: [
    { label: 'Start', delta: 120, total: true },
    { label: 'New sales', delta: 48 },
    { label: 'Churn', delta: -22 },
    { label: 'Expansion', delta: 31 },
    { label: 'Refunds', delta: -9 },
    { label: 'Total', delta: 0, total: true },
  ],
  Costs: [
    { label: 'Start', delta: 90, total: true },
    { label: 'Infra', delta: -34 },
    { label: 'Support', delta: -18 },
    { label: 'Savings', delta: 12 },
    { label: 'Licences', delta: -11 },
    { label: 'Total', delta: 0, total: true },
  ],
} as const;

export const WaterfallChart: React.FC = () => {
  const { palette } = useJXTheme();
  const [set, setSet] = useState<keyof typeof SETS>('Revenue');
  const [active, setActive] = useState<number | null>(null);
  const steps = SETS[set];
  const max = 200;
  let running = 0;
  const bars = steps.map((s, i) => {
    const start = s.total ? 0 : running;
    const end = s.total ? (i === 0 ? s.delta : running) : running + s.delta;
    if (!s.total) running += s.delta;
    return { ...s, start, end };
  });
  const total = bars[bars.length - 1].end;

  return (
    <div className="w-full space-y-2">
      <div className="flex gap-1.5" role="group" aria-label="Dataset">
        {(Object.keys(SETS) as (keyof typeof SETS)[]).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => { setSet(k); setActive(null); }}
            aria-pressed={set === k}
            className={`min-h-[36px] px-3 rounded-lg text-xs font-semibold cursor-pointer ${
              set === k ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            {k}
          </button>
        ))}
      </div>
      <div className="flex items-end gap-1.5 h-28" role="img" aria-label={`${set} waterfall, total ${total}`}>
        {bars.map((b, i) => {
          const lo = Math.min(b.start, b.end);
          const hi = Math.max(b.start, b.end);
          const color = b.total ? palette.hex : b.delta >= 0 ? '#059669' : '#e11d48';
          return (
            <button
              key={b.label}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-label={`${b.label}: ${b.total ? `total ${b.end}` : `${b.delta >= 0 ? '+' : ''}${b.delta}`} (running ${b.end})`}
              className="flex-1 flex flex-col items-center justify-end h-full cursor-pointer rounded"
            >
              <span className="text-[10px] font-mono text-slate-500 mb-0.5">{b.total ? b.end : `${b.delta >= 0 ? '+' : ''}${b.delta}`}</span>
              <span
                className="w-full rounded-t transition-all duration-300"
                style={{
                  height: `${Math.max(4, ((hi - lo) / max) * 100)}%`,
                  backgroundColor: color,
                  opacity: active === null || active === i ? 1 : 0.5,
                  marginBottom: `${(lo / max) * 100}%`,
                }}
              />
              <span className="text-[10px] text-slate-500 mt-0.5 truncate w-full text-center">{b.label}</span>
            </button>
          );
        })}
      </div>
      <p className="text-xs text-slate-600 dark:text-slate-300" aria-live="polite">
        {active === null
          ? `${set} walk totals ${total}. Hover a bar for its step.`
          : `${bars[active].label}: ${bars[active].total ? `total ${bars[active].end}` : `${bars[active].delta >= 0 ? '+' : ''}${bars[active].delta} → running ${bars[active].end}`}`}
      </p>
    </div>
  );
};
