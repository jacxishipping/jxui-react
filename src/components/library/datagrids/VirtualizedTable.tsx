// @jxui/react v3.0.0 — VirtualizedTable (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 2. VirtualizedTable — a real virtualized table: only the visible window of
// rows is rendered, the rest is a spacer. Scroll it: 100,000 rows, ~10 in DOM.
const TOTAL_ROWS = 100000;
const ROW_HEIGHT = 32;
const NAMES = ['auth-token-signer', 'edge-cache', 'billing-sync', 'search-index', 'queue-worker', 'api-gateway'];
const REGIONS = ['us-east-1', 'eu-central-1', 'ap-northeast-1'];

function rowData(i: number) {
  return {
    id: `srv-${String(i + 1).padStart(5, '0')}`,
    name: NAMES[i % NAMES.length],
    region: REGIONS[i % REGIONS.length],
    latency: (i * 37) % 120 + 4,
    status: (i * 37) % 17 === 0 ? 'Syncing' : 'Healthy',
  };
}

export const VirtualizedTable: React.FC = () => {
  const { palette } = useJXTheme();
  const [scrollTop, setScrollTop] = useState(0);
  const [selected, setSelected] = useState<number | null>(0);
  const start = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - 1);
  const visible = Array.from({ length: 9 }, (_, k) => start + k).filter((i) => i < TOTAL_ROWS);

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden text-xs">
      <div className="grid grid-cols-[1fr_1fr_64px] gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 font-semibold text-slate-700 dark:text-slate-200">
        <span>Service</span>
        <span>Region</span>
        <span className="text-right">Latency</span>
      </div>
      <div
        className="h-44 overflow-y-auto"
        onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
        role="grid"
        aria-rowcount={TOTAL_ROWS}
        aria-label="Virtualized table, 100,000 rows"
      >
        <div style={{ height: TOTAL_ROWS * ROW_HEIGHT }} className="relative">
          {visible.map((i) => {
            const r = rowData(i);
            return (
              <button
                key={i}
                type="button"
                onClick={() => setSelected(i)}
                aria-selected={selected === i}
                style={{ top: i * ROW_HEIGHT, height: ROW_HEIGHT }}
                className={`absolute left-0 right-0 grid grid-cols-[1fr_1fr_64px] gap-2 px-3 items-center text-left cursor-pointer font-mono ${
                  selected === i ? `${palette.softBg} ${palette.text}` : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                <span className="truncate font-semibold">{r.id} · {r.name}</span>
                <span className="truncate">{r.region}</span>
                <span className="text-right">{r.latency} ms</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="px-3 py-1.5 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500">
        Virtualized engine: {TOTAL_ROWS.toLocaleString()} rows at 60 FPS · {visible.length} rows in DOM · row {start + 1}–{start + visible.length}
        {selected !== null && ` · selected ${rowData(selected).id}`}
      </div>
    </div>
  );
};
