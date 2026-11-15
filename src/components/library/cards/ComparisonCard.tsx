// @jxui/react v3.0.0 — ComparisonCard (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingDown } from 'lucide-react';

// 18. ComparisonCard — side-by-side comparison with a switchable metric.
// Bars scale to the values, the winner is highlighted, and the delta is
// computed from the data (lower is better for all three metrics).
const METRICS = [
  { id: 'latency', label: 'Render latency', unit: 'ms', mui: 34, jxui: 0.8, decimals: 1 },
  { id: 'bundle', label: 'Bundle size', unit: 'KB', mui: 412, jxui: 96, decimals: 0 },
  { id: 'cls', label: 'Layout shift (CLS)', unit: '', mui: 0.24, jxui: 0.0, decimals: 2 },
] as const;

export const ComparisonCard: React.FC = () => {
  const { palette } = useJXTheme();
  const [metricId, setMetricId] = useState<string>('latency');
  const metric = METRICS.find((m) => m.id === metricId) ?? METRICS[0];
  const max = Math.max(metric.mui, metric.jxui, 1);
  const improvement = metric.mui > 0 ? Math.round((1 - metric.jxui / metric.mui) * 100) : 100;

  return (
    <div className="p-4 border rounded-2xl bg-white dark:bg-slate-900 text-xs flex flex-col gap-3">
      <div className="flex flex-wrap gap-1" role="group" aria-label="Comparison metric">
        {METRICS.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setMetricId(m.id)}
            aria-pressed={metricId === m.id}
            className={`min-h-[36px] px-2.5 py-1.5 rounded-lg font-semibold cursor-pointer ${
              metricId === m.id ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>
      <div className="space-y-2">
        {([
          { name: 'MUI', value: metric.mui, bar: 'bg-rose-400', text: 'text-rose-600' },
          { name: 'JXUI', value: metric.jxui, bar: palette.bg, text: palette.text },
        ] as const).map((row) => (
          <div key={row.name}>
            <div className="flex items-baseline justify-between mb-1">
              <span className={`font-semibold ${row.text}`}>{row.name}</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">
                {row.value.toFixed(metric.decimals)}{metric.unit}
              </span>
            </div>
            <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                style={{ width: `${Math.max(2, (row.value / max) * 100)}%` }}
                className={`h-full rounded-full transition-all duration-300 ${row.bar}`}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold" aria-live="polite">
        <TrendingDown className="w-3.5 h-3.5" />
        JXUI is {improvement}% lower on {metric.label.toLowerCase()}
      </p>
    </div>
  );
};
