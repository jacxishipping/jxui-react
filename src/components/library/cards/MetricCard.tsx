// @jxui/react v3.0.0 — MetricCard (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, TrendingDown } from 'lucide-react';

// 17. MetricCard — a metric card with a switchable metric, a mini bar
// sparkline and a computed delta. Values are deterministic sample data.
const METRICS = [
  { id: 'latency', label: 'Render Latency', value: '0.8ms', delta: -62, bars: [22, 30, 26, 34, 28, 18, 12, 8] },
  { id: 'bundle', label: 'Bundle Size', value: '96 KB', delta: -41, bars: [40, 38, 36, 34, 30, 26, 22, 18] },
  { id: 'cls', label: 'Layout Shift', value: '0.00', delta: -100, bars: [8, 6, 7, 5, 4, 3, 2, 0] },
] as const;

export const MetricCard: React.FC = () => {
  const { palette } = useJXTheme();
  const [metricId, setMetricId] = useState<string>('latency');
  const metric = METRICS.find((m) => m.id === metricId) ?? METRICS[0];
  const improving = metric.delta <= 0;
  const max = Math.max(...metric.bars, 1);

  return (
    <div className="p-4 border rounded-2xl bg-white dark:bg-slate-900 flex flex-col gap-2 text-xs">
      <div className="flex flex-wrap gap-1" role="group" aria-label="Metric">
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
      <span className="text-slate-500 font-medium">{metric.label}</span>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold font-mono text-slate-900 dark:text-white">{metric.value}</span>
        <span className={`font-bold flex items-center text-[11px] ${improving ? 'text-emerald-500' : 'text-rose-500'}`}>
          {improving ? <TrendingDown className="w-3 h-3" /> : <TrendingUp className="w-3 h-3" />}
          {metric.delta}%
        </span>
      </div>
      <div className="flex items-end gap-1 h-8" aria-hidden="true">
        {metric.bars.map((h, i) => (
          <div
            key={i}
            style={{ height: `${(h / max) * 100}%` }}
            className={`flex-1 rounded-t-sm ${palette.bg} opacity-70`}
          />
        ))}
      </div>
      <span className="text-[11px] text-slate-400">vs previous release · lower is better</span>
    </div>
  );
};
