// @jxui/react v3.0.0 — InfiniteDataGrid (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 8. InfiniteDataGrid — real infinite scroll: rows load in pages of 50 from a
// 2,400-row dataset. The "Load more" button (and the counter) actually work.
const TOTAL_ROWS = 2400;
const PAGE = 50;
const NAMES = ['JXButton', 'JXTable', 'JXCard', 'JXModal', 'JXInput', 'JXChart'];
const CATEGORIES = ['Inputs', 'Tables', 'Cards', 'Overlays', 'Forms', 'Data Viz'];

function rowData(i: number) {
  return {
    id: i + 1,
    name: NAMES[i % NAMES.length],
    category: CATEGORIES[i % CATEGORIES.length],
    status: (i * 13) % 9 === 0 ? 'Review' : 'Stable',
  };
}

export const InfiniteDataGrid: React.FC = () => {
  const { palette } = useJXTheme();
  const [loaded, setLoaded] = useState(PAGE);
  const rows = Array.from({ length: loaded }, (_, k) => rowData(k));
  const done = loaded >= TOTAL_ROWS;

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden text-xs">
      <div className="max-h-44 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800">
        {rows.map((r) => (
          <div key={r.id} className="px-3 py-1.5 flex items-center justify-between font-mono">
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              #{r.id} {r.name}
            </span>
            <span className="text-slate-500">{r.category}</span>
            <span className={r.status === 'Stable' ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}>
              {r.status}
            </span>
          </div>
        ))}
      </div>
      <div className="px-3 py-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <span className="font-mono text-[11px] text-slate-500">
          Infinite Grid · Loaded 1–{loaded.toLocaleString()} of {TOTAL_ROWS.toLocaleString()}
        </span>
        <button
          type="button"
          disabled={done}
          onClick={() => setLoaded((n) => Math.min(TOTAL_ROWS, n + PAGE))}
          className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-semibold text-white cursor-pointer disabled:opacity-50 disabled:cursor-default ${palette.bg}`}
        >
          {done ? 'All rows loaded' : 'Load more'}
        </button>
      </div>
    </div>
  );
};
