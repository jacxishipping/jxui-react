// @jxui/react v3.0.0 — AdvancedFilterPanel (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 12. AdvancedFilterPanel — real faceted filters: checkbox facets for
// category, status and difficulty filter a live result list below them.
const ROWS = [
  { name: 'JXButton', category: 'Inputs', status: 'Stable', difficulty: 'Beginner', a11y: true },
  { name: 'JXTable', category: 'Tables', status: 'Stable', difficulty: 'Enterprise', a11y: true },
  { name: 'JXModal', category: 'Overlays', status: 'Review', difficulty: 'Intermediate', a11y: false },
  { name: 'JXChart', category: 'Data Viz', status: 'Stable', difficulty: 'Advanced', a11y: true },
  { name: 'JXInput', category: 'Inputs', status: 'Review', difficulty: 'Beginner', a11y: true },
  { name: 'JXCard', category: 'Cards', status: 'Stable', difficulty: 'Beginner', a11y: true },
] as const;

const FACETS = {
  Category: ['Inputs', 'Tables', 'Overlays', 'Data Viz', 'Cards'],
  Status: ['Stable', 'Review'],
  Difficulty: ['Beginner', 'Intermediate', 'Advanced', 'Enterprise'],
} as const;

export const AdvancedFilterPanel: React.FC = () => {
  const { palette } = useJXTheme();
  const [selected, setSelected] = useState<Record<string, Set<string>>>({});
  const [a11yOnly, setA11yOnly] = useState(false);

  const toggle = (facet: string, value: string) => {
    setSelected((s) => {
      const next = { ...s };
      const set = new Set(next[facet] ?? []);
      if (set.has(value)) set.delete(value);
      else set.add(value);
      if (set.size === 0) delete next[facet];
      else next[facet] = set;
      return next;
    });
  };

  const filtered = ROWS.filter((r) => {
    if (a11yOnly && !r.a11y) return false;
    return Object.entries(selected).every(([facet, values]) => {
      if (facet === 'Category') return values.has(r.category);
      if (facet === 'Status') return values.has(r.status);
      return values.has(r.difficulty);
    });
  });
  const activeCount = Object.values(selected).reduce((n, s) => n + s.size, 0) + (a11yOnly ? 1 : 0);

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-bold text-slate-900 dark:text-white">Faceted Filters</span>
          {activeCount > 0 && (
            <button
              type="button"
              onClick={() => { setSelected({}); setA11yOnly(false); }}
              className={`min-h-[36px] px-2.5 rounded-lg font-semibold cursor-pointer ${palette.softBg} ${palette.text}`}
            >
              Clear all ({activeCount})
            </button>
          )}
        </div>
        {(Object.keys(FACETS) as (keyof typeof FACETS)[]).map((facet) => (
          <div key={facet}>
            <div className="font-semibold text-slate-500 mb-1">{facet}</div>
            <div className="flex flex-wrap gap-1.5">
              {FACETS[facet].map((v) => {
                const on = selected[facet]?.has(v);
                return (
                  <button
                    key={v}
                    type="button"
                    onClick={() => toggle(facet, v)}
                    aria-pressed={Boolean(on)}
                    className={`min-h-[36px] px-2.5 rounded-lg font-medium cursor-pointer ${
                      on ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {v}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
        <label className="flex items-center gap-2 min-h-[36px] cursor-pointer font-medium text-slate-700 dark:text-slate-200">
          <input type="checkbox" checked={a11yOnly} onChange={(e) => setA11yOnly(e.target.checked)} className="w-4 h-4 accent-indigo-600" />
          WCAG AA Compliant only
        </label>
      </div>
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800 overflow-hidden">
        {filtered.length === 0 && <div className="px-3 py-3 text-slate-500">No components match these filters.</div>}
        {filtered.map((r) => (
          <div key={r.name} className="px-3 py-2 flex items-center justify-between bg-white dark:bg-slate-900">
            <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">{r.name}</span>
            <span className="text-slate-500">{r.category} · {r.difficulty}</span>
            <span className={r.status === 'Stable' ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : 'text-amber-600 dark:text-amber-400 font-semibold'}>{r.status}</span>
          </div>
        ))}
      </div>
      <p className="text-[11px] font-mono text-slate-500">{filtered.length} of {ROWS.length} components match</p>
    </div>
  );
};
