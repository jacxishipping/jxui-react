// @jxui/react v3.0.0 — PivotTable (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 6. PivotTable — a real pivot: pick the row dimension and the table
// re-aggregates count and average latency per group, with a grand total.
const DATA = [
  { name: 'JXButton', category: 'Inputs', region: 'us-east-1', status: 'Stable', latency: 0.8 },
  { name: 'JXInput', category: 'Inputs', region: 'eu-central-1', status: 'Stable', latency: 0.6 },
  { name: 'JXSelect', category: 'Inputs', region: 'us-east-1', status: 'Review', latency: 1.2 },
  { name: 'JXTable', category: 'Tables', region: 'us-east-1', status: 'Stable', latency: 1.1 },
  { name: 'JXDataGrid', category: 'Tables', region: 'ap-northeast-1', status: 'Stable', latency: 1.9 },
  { name: 'JXChart', category: 'Data Viz', region: 'eu-central-1', status: 'Review', latency: 2.4 },
  { name: 'JXModal', category: 'Overlays', region: 'us-east-1', status: 'Stable', latency: 0.9 },
  { name: 'JXCard', category: 'Cards', region: 'ap-northeast-1', status: 'Stable', latency: 0.7 },
] as const;
const DIMENSIONS = ['category', 'region', 'status'] as const;

export const PivotTable: React.FC = () => {
  const { palette } = useJXTheme();
  const [dim, setDim] = useState<(typeof DIMENSIONS)[number]>('category');
  const groups = new Map<string, { count: number; latency: number }>();
  DATA.forEach((d) => {
    const g = groups.get(d[dim]) ?? { count: 0, latency: 0 };
    g.count += 1;
    g.latency += d.latency;
    groups.set(d[dim], g);
  });
  const rows = [...groups.entries()].sort((a, b) => b[1].count - a[1].count);
  const totalLatency = DATA.reduce((s, d) => s + d.latency, 0);

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-slate-600 dark:text-slate-300">Group by</span>
        <div className="flex gap-1" role="group" aria-label="Pivot dimension">
          {DIMENSIONS.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDim(d)}
              aria-pressed={dim === d}
              className={`min-h-[36px] px-3 rounded-lg font-semibold capitalize cursor-pointer ${
                dim === d ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <table className="w-full text-left bg-white dark:bg-slate-900">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300">
              <th className="px-3 py-2 font-semibold capitalize">{dim}</th>
              <th className="px-3 py-2 font-semibold text-right">Count</th>
              <th className="px-3 py-2 font-semibold text-right">Avg latency</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {rows.map(([group, agg]) => (
              <tr key={group}>
                <td className="px-3 py-2 font-mono font-semibold text-slate-800 dark:text-slate-200">{group}</td>
                <td className="px-3 py-2 font-mono text-right text-slate-700 dark:text-slate-200">{agg.count}</td>
                <td className="px-3 py-2 font-mono text-right text-slate-700 dark:text-slate-200">{(agg.latency / agg.count).toFixed(2)}ms</td>
              </tr>
            ))}
            <tr className={`font-bold ${palette.softBg}`}>
              <td className="px-3 py-2">Total</td>
              <td className="px-3 py-2 font-mono text-right">{DATA.length}</td>
              <td className="px-3 py-2 font-mono text-right">{(totalLatency / DATA.length).toFixed(2)}ms</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
