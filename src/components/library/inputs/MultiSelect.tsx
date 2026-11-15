// @jxui/react v3.0.0 — MultiSelect (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X } from 'lucide-react';

// 10. MultiSelect — pick several options as removable chips: the dropdown
// only offers unpicked options, chips remove with an accessible button,
// and Clear all empties the selection.
const AVAILABLE = ['React', 'TypeScript', 'Tailwind', 'Motion', 'Vite'];

export const MultiSelect: React.FC = () => {
  const [selected, setSelected] = useState<string[]>(['TypeScript', 'Tailwind']);
  const { palette } = useJXTheme();
  const remaining = AVAILABLE.filter((a) => !selected.includes(a));

  return (
    <div className="w-full flex flex-col gap-1.5">
      <div className="flex flex-wrap items-center gap-1.5 p-2 min-h-[44px] bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg">
        {selected.length === 0 && <span className="text-xs text-slate-400">No options selected</span>}
        {selected.map((s) => (
          <span key={s} className={`pl-2 pr-1 py-0.5 text-[11px] font-semibold text-white ${palette.bg} rounded-full flex items-center gap-1`}>
            {s}
            <button
              type="button"
              onClick={() => setSelected(selected.filter((x) => x !== s))}
              aria-label={`Remove ${s}`}
              className="min-w-[24px] min-h-[24px] flex items-center justify-center rounded-full hover:bg-black/15 cursor-pointer"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
        {remaining.length > 0 && (
          <select
            value=""
            onChange={(e) => {
              if (e.target.value && !selected.includes(e.target.value)) {
                setSelected([...selected, e.target.value]);
              }
            }}
            aria-label="Add an option"
            className="min-h-[36px] text-xs bg-transparent text-slate-500 cursor-pointer"
          >
            <option value="">+ Add</option>
            {remaining.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        )}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-mono text-slate-400">
          {selected.length} of {AVAILABLE.length} selected
        </span>
        {selected.length > 0 && (
          <button
            type="button"
            onClick={() => setSelected([])}
            className="min-h-[36px] px-2 text-[11px] font-semibold text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
          >
            Clear all
          </button>
        )}
      </div>
    </div>
  );
};
