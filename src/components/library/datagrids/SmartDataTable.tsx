// @jxui/react v3.0.0 — SmartDataTable (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';

// 1. SmartDataTable — a real searchable, sortable, paginated table: type to
// filter, click a header to sort, filter by status, page through results.
const ROWS = [
  { name: 'JXButton', category: 'Inputs', status: 'Stable', latency: 0.8 },
  { name: 'JXTable', category: 'Tables', status: 'Stable', latency: 1.1 },
  { name: 'JXModal', category: 'Overlays', status: 'Review', latency: 2.4 },
  { name: 'JXChart', category: 'Data Viz', status: 'Stable', latency: 2.1 },
  { name: 'JXInput', category: 'Inputs', status: 'Review', latency: 0.6 },
  { name: 'JXCard', category: 'Cards', status: 'Stable', latency: 0.7 },
  { name: 'JXBadge', category: 'Utilities', status: 'Stable', latency: 0.5 },
  { name: 'JXSlider', category: 'Inputs', status: 'Draft', latency: 1.3 },
] as const;
const PAGE_SIZE = 5;

export const SmartDataTable: React.FC = () => {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<'All' | 'Stable' | 'Review' | 'Draft'>('All');
  const [sort, setSort] = useState<{ key: 'name' | 'latency'; dir: 1 | -1 }>({ key: 'name', dir: 1 });
  const [page, setPage] = useState(0);

  const filtered = ROWS.filter(
    (r) =>
      (status === 'All' || r.status === status) &&
      (r.name.toLowerCase().includes(query.toLowerCase()) || r.category.toLowerCase().includes(query.toLowerCase()))
  ).sort((a, b) => {
    const av = a[sort.key];
    const bv = b[sort.key];
    return (av < bv ? -1 : av > bv ? 1 : 0) * sort.dir;
  });
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pages - 1);
  const visible = filtered.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE);
  const toggleSort = (key: 'name' | 'latency') => {
    setSort((s) => (s.key === key ? { key, dir: s.dir === 1 ? -1 : 1 } : { key, dir: 1 }));
  };

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="flex flex-wrap items-center gap-2">
        <input
          value={query}
          onChange={(e) => { setQuery(e.target.value); setPage(0); }}
          placeholder="Search components…"
          aria-label="Search components"
          className="flex-1 min-w-[140px] min-h-[36px] px-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 placeholder:text-slate-400"
        />
        <div className="flex gap-1" role="group" aria-label="Filter by status">
          {(['All', 'Stable', 'Review', 'Draft'] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => { setStatus(s); setPage(0); }}
              aria-pressed={status === s}
              className={`min-h-[36px] px-2.5 rounded-lg font-semibold cursor-pointer ${
                status === s ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <table className="w-full text-left bg-white dark:bg-slate-900">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
              {([
                { key: 'name', label: 'Component' },
                { key: 'category', label: 'Category' },
                { key: 'status', label: 'Status' },
                { key: 'latency', label: 'Latency' },
              ] as const).map((c) => (
                <th key={c.key} className="px-3 py-2 font-bold">
                  {c.key === 'name' || c.key === 'latency' ? (
                    <button type="button" onClick={() => toggleSort(c.key as 'name' | 'latency')} className="cursor-pointer rounded px-1 font-bold">
                      {c.label} {sort.key === c.key ? (sort.dir === 1 ? '↑' : '↓') : ''}
                    </button>
                  ) : (
                    c.label
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {visible.map((r) => (
              <tr key={r.name}>
                <td className="px-3 py-2 font-mono font-semibold text-slate-800 dark:text-slate-200">{r.name}</td>
                <td className="px-3 py-2 text-slate-600 dark:text-slate-300">{r.category}</td>
                <td className={`px-3 py-2 font-semibold ${r.status === 'Stable' ? 'text-emerald-600 dark:text-emerald-400' : r.status === 'Review' ? 'text-amber-600 dark:text-amber-400' : 'text-slate-500'}`}>{r.status}</td>
                <td className="px-3 py-2 font-mono text-slate-600 dark:text-slate-300">{r.latency}ms</td>
              </tr>
            ))}
            {visible.length === 0 && (
              <tr>
                <td colSpan={4} className="px-3 py-3 text-slate-500">No components match “{query}”.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-slate-500">
          {filtered.length} result{filtered.length === 1 ? '' : 's'} · page {safePage + 1} of {pages}
        </span>
        <div className="flex gap-1.5">
          <button type="button" disabled={safePage === 0} onClick={() => setPage((p) => p - 1)} className="min-h-[36px] px-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer disabled:opacity-40">Prev</button>
          <button type="button" disabled={safePage >= pages - 1} onClick={() => setPage((p) => p + 1)} className="min-h-[36px] px-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer disabled:opacity-40">Next</button>
        </div>
      </div>
    </div>
  );
};
