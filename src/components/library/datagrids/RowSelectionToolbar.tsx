// @jxui/react v3.0.0 — RowSelectionToolbar (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 14. RowSelectionToolbar — a real selection toolbar: checkbox rows, select
// all, and a toolbar that appears when anything is selected, with working
// batch delete, export-count and clear actions.
const INITIAL = [
  { id: 1, name: 'JXButton', category: 'Inputs', status: 'Stable' },
  { id: 2, name: 'JXTable', category: 'Tables', status: 'Stable' },
  { id: 3, name: 'JXModal', category: 'Overlays', status: 'Review' },
  { id: 4, name: 'JXChart', category: 'Data Viz', status: 'Stable' },
  { id: 5, name: 'JXInput', category: 'Inputs', status: 'Review' },
];

export const RowSelectionToolbar: React.FC = () => {
  const { palette } = useJXTheme();
  const [rows, setRows] = useState(INITIAL);
  const [selected, setSelected] = useState<Set<number>>(new Set([1, 2]));
  const [notice, setNotice] = useState('');
  const allSelected = rows.length > 0 && selected.size === rows.length;

  const toggle = (id: number) => {
    setSelected((s) => {
      const next = new Set(s);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  const toggleAll = () => setSelected(allSelected ? new Set() : new Set(rows.map((r) => r.id)));
  const batchDelete = () => {
    const n = selected.size;
    setRows((rs) => rs.filter((r) => !selected.has(r.id)));
    setSelected(new Set());
    setNotice(`Deleted ${n} item${n === 1 ? '' : 's'}.`);
  };

  return (
    <div className="w-full space-y-2 text-xs">
      {selected.size > 0 && (
        <div className={`rounded-lg border p-2 flex flex-wrap items-center justify-between gap-2 ${palette.softBg} ${palette.border} border`}>
          <span className={`font-bold ${palette.text}`} aria-live="polite">
            {selected.size} item{selected.size === 1 ? '' : 's'} selected
          </span>
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => setNotice(`Exported ${selected.size} selected item${selected.size === 1 ? '' : 's'} as CSV.`)}
              className="min-h-[36px] px-2.5 rounded-lg bg-white dark:bg-slate-900 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
            >
              Export selected
            </button>
            <button type="button" onClick={batchDelete} className="min-h-[36px] px-2.5 rounded-lg bg-rose-600 text-white font-semibold cursor-pointer">
              Batch Delete
            </button>
            <button type="button" onClick={() => setSelected(new Set())} className="min-h-[36px] px-2.5 rounded-lg font-semibold text-slate-600 dark:text-slate-300 cursor-pointer">
              Clear
            </button>
          </div>
        </div>
      )}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <table className="w-full text-left bg-white dark:bg-slate-900">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300">
              <th className="px-3 py-2 w-10">
                <input type="checkbox" checked={allSelected} onChange={toggleAll} aria-label="Select all rows" className="w-4 h-4 accent-indigo-600" />
              </th>
              <th className="px-3 py-2 font-semibold">Component</th>
              <th className="px-3 py-2 font-semibold">Category</th>
              <th className="px-3 py-2 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {rows.map((r) => (
              <tr key={r.id} className={selected.has(r.id) ? palette.softBg : ''}>
                <td className="px-3 py-2">
                  <input type="checkbox" checked={selected.has(r.id)} onChange={() => toggle(r.id)} aria-label={`Select ${r.name}`} className="w-4 h-4 accent-indigo-600" />
                </td>
                <td className="px-3 py-2 font-mono font-semibold text-slate-800 dark:text-slate-200">{r.name}</td>
                <td className="px-3 py-2 text-slate-600 dark:text-slate-300">{r.category}</td>
                <td className="px-3 py-2 text-slate-600 dark:text-slate-300">{r.status}</td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={4} className="px-3 py-3 text-slate-500">All rows deleted — <button type="button" onClick={() => { setRows(INITIAL); setNotice(''); }} className="font-semibold text-indigo-600 cursor-pointer">restore rows</button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {notice && <p className="text-[11px] font-mono text-slate-500" aria-live="polite">{notice}</p>}
    </div>
  );
};
