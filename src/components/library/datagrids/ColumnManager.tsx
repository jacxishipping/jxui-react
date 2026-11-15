// @jxui/react v3.0.0 — ColumnManager (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { Columns } from 'lucide-react';

// 10. ColumnManager — real column visibility manager: toggle columns on
// and off and the preview table below updates; the header shows the count.
const ALL_COLUMNS = ['Component', 'Category', 'Status', 'Latency', 'Owner', 'Updated'] as const;
const ROWS = [
  { Component: 'JXButton', Category: 'Inputs', Status: 'Stable', Latency: '0.8ms', Owner: 'Elena', Updated: 'Nov 12' },
  { Component: 'JXTable', Category: 'Tables', Status: 'Stable', Latency: '1.1ms', Owner: 'Marcus', Updated: 'Nov 10' },
  { Component: 'JXChart', Category: 'Data Viz', Status: 'Review', Latency: '2.4ms', Owner: 'Sora', Updated: 'Nov 8' },
] as const;

export const ColumnManager: React.FC = () => {
  const [visible, setVisible] = useState<Record<string, boolean>>({
    Component: true, Category: true, Status: true, Latency: true, Owner: false, Updated: false,
  });
  const visibleCols = ALL_COLUMNS.filter((c) => visible[c]);
  const toggle = (c: string) => setVisible((v) => ({ ...v, [c]: !v[c] }));
  const setAll = (on: boolean) => setVisible(Object.fromEntries(ALL_COLUMNS.map((c) => [c, on])));

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 space-y-2">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
            <Columns className="w-4 h-4" />
            Visible Columns ({visibleCols.length}/{ALL_COLUMNS.length})
          </span>
          <div className="flex gap-1.5">
            <button type="button" onClick={() => setAll(true)} className="min-h-[36px] px-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">Show all</button>
            <button type="button" onClick={() => setAll(false)} className="min-h-[36px] px-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">Hide all</button>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {ALL_COLUMNS.map((c) => (
            <label key={c} className={`min-h-[36px] inline-flex items-center gap-2 px-2.5 rounded-lg cursor-pointer font-medium ${visible[c] ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200' : 'text-slate-400'}`}>
              <input type="checkbox" checked={visible[c]} onChange={() => toggle(c)} className="w-4 h-4 accent-indigo-600" />
              {c}
            </label>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <table className="w-full text-left bg-white dark:bg-slate-900">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300">
              {visibleCols.map((c) => (
                <th key={c} className="px-3 py-2 font-semibold">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {ROWS.map((r) => (
              <tr key={r.Component}>
                {visibleCols.map((c) => (
                  <td key={c} className="px-3 py-2 font-mono text-slate-700 dark:text-slate-200">{r[c]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {visibleCols.length === 0 && <div className="px-3 py-3 bg-white dark:bg-slate-900 text-slate-500">No columns visible — turn one back on.</div>}
      </div>
    </div>
  );
};
