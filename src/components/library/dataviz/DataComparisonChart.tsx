// @jxui/react v3.0.0 — DataComparisonChart (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 20. DataComparisonChart — grouped bar comparison of build tools. Toggle
// the metric (build time / bundle size) and hover a bar for its exact value.
const TOOLS = [
  { name: 'Vite', build: 0.8, bundle: 112, color: 'accent' },
  { name: 'esbuild', build: 0.6, bundle: 148, color: '#059669' },
  { name: 'Webpack', build: 4.2, bundle: 210, color: '#d97706' },
  { name: 'Rollup', build: 2.1, bundle: 132, color: '#7c3aed' },
] as const;

export const DataComparisonChart: React.FC = () => {
  const { palette } = useJXTheme();
  const [metric, setMetric] = useState<'build' | 'bundle'>('build');
  const [active, setActive] = useState<number | null>(0);
  const max = Math.max(...TOOLS.map((t) => t[metric]));
  const unit = metric === 'build' ? 's' : ' KB';

  return (
    <div className="w-full space-y-2">
      <div className="flex gap-1.5" role="group" aria-label="Metric">
        {(['build', 'bundle'] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMetric(m)}
            aria-pressed={metric === m}
            className={`min-h-[36px] px-3 rounded-lg text-xs font-semibold cursor-pointer ${
              metric === m ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            {m === 'build' ? 'Build time' : 'Bundle size'}
          </button>
        ))}
      </div>
      <div className="space-y-2">
        {TOOLS.map((t, i) => (
          <div key={t.name}>
            <div className="flex justify-between text-xs mb-0.5">
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="font-mono font-medium text-slate-700 dark:text-slate-200 cursor-pointer rounded px-1"
              >
                {t.name}
              </button>
              <span className="font-mono font-bold text-slate-900 dark:text-white">
                {t[metric]}
                {unit}
              </span>
            </div>
            <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${(t[metric] / max) * 100}%`,
                  backgroundColor: t.color === 'accent' ? palette.hex : t.color,
                  opacity: active === i ? 1 : 0.75,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-slate-500" aria-live="polite">
        {active !== null ? `${TOOLS[active].name}: ${TOOLS[active][metric]}${unit} ${metric === 'build' ? 'build' : 'bundle'} — fastest is ${metric === 'build' ? 'esbuild' : 'Vite'}.` : 'Hover a tool to inspect it.'}
      </p>
    </div>
  );
};
