// @jxui/react v3.0.0 — SkeletonTable (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';

// 8. SkeletonTable — a shimmer table skeleton (header row + 4 body rows with
// varying cell widths) that matches the loaded table's geometry. Toggle to
// see the real rows the skeleton stands in for.
const ROWS = [
  { name: 'JXButton', category: 'Inputs', status: 'Stable' },
  { name: 'JXTable', category: 'Tables', status: 'Stable' },
  { name: 'JXCard', category: 'Cards', status: 'Review' },
  { name: 'JXModal', category: 'Overlays', status: 'Stable' },
];
const WIDTHS = ['w-24', 'w-16', 'w-20', 'w-14'];

export const SkeletonTable: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full space-y-2">
      {loaded ? (
        <table className="w-full text-left text-xs border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300">
              <th className="px-3 py-2 font-semibold">Component</th>
              <th className="px-3 py-2 font-semibold">Category</th>
              <th className="px-3 py-2 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {ROWS.map((r) => (
              <tr key={r.name}>
                <td className="px-3 py-2 font-mono font-semibold text-slate-800 dark:text-slate-200">{r.name}</td>
                <td className="px-3 py-2 text-slate-500">{r.category}</td>
                <td className="px-3 py-2 text-emerald-600 dark:text-emerald-400">{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="w-full flex flex-col gap-2" aria-label="Loading table" aria-busy="true">
          <div className="flex gap-2">
            <div className="w-24 h-5 rounded jx-shimmer-wave" />
            <div className="w-16 h-5 rounded jx-shimmer-wave" />
            <div className="w-14 h-5 rounded jx-shimmer-wave" />
          </div>
          {ROWS.map((_, i) => (
            <div key={i} className="flex gap-2">
              <div className={`${WIDTHS[i]} h-5 rounded jx-shimmer-wave`} />
              <div className="w-16 h-5 rounded jx-shimmer-wave" />
              <div className="w-12 h-5 rounded jx-shimmer-wave" />
            </div>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => setLoaded((l) => !l)}
        aria-pressed={loaded}
        className="min-h-[36px] px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
      >
        {loaded ? 'Show skeleton' : 'Show loaded table'}
      </button>
    </div>
  );
};
