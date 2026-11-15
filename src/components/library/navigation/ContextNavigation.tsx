// @jxui/react v3.0.0 — ContextNavigation (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 18. ContextNavigation — a working contextual toolbar: the selection count
// is real state. Duplicate adds a copy, Delete clears the selection (with a
// restore), and the bar hides when nothing is selected.
export const ContextNavigation: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [selected, setSelected] = useState(1);
  const [deleted, setDeleted] = useState(0);
  const [notice, setNotice] = useState<string | null>(null);

  if (selected === 0) {
    return (
      <div className={`p-3 ${getRadiusClass('control')} border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs flex items-center justify-between gap-2`}>
        <span className="text-slate-500">
          {deleted > 0 ? `${deleted} item${deleted > 1 ? 's' : ''} deleted.` : 'Nothing selected.'}
        </span>
        <div className="flex items-center gap-1.5">
          {deleted > 0 && (
            <button
              type="button"
              onClick={() => { setSelected(deleted); setDeleted(0); setNotice('Selection restored.'); }}
              className="min-h-[36px] px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
            >
              Restore
            </button>
          )}
          <button
            type="button"
            onClick={() => { setSelected(1); setNotice(null); }}
            className={`min-h-[36px] px-2.5 py-1 rounded text-white font-semibold cursor-pointer ${palette.bg}`}
          >
            Select 1 item
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-2 ${palette.softBg} border ${palette.border} ${getRadiusClass('control')} flex flex-col gap-1 text-xs`}>
      <div className="flex items-center justify-between gap-2">
        <span className={`font-semibold ${palette.text}`} aria-live="polite">
          {selected} item{selected > 1 ? 's' : ''} selected
        </span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => { setSelected((n) => n + 1); setNotice(`Duplicated — now ${selected + 1} selected.`); }}
            className="min-h-[36px] px-2.5 py-1 bg-white dark:bg-slate-800 rounded shadow-xs font-medium cursor-pointer"
          >
            Duplicate
          </button>
          <button
            type="button"
            onClick={() => { setDeleted(selected); setSelected(0); setNotice(null); }}
            className="min-h-[36px] px-2.5 py-1 bg-white dark:bg-slate-800 text-rose-600 rounded shadow-xs font-medium cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
      {notice && <span className="text-[11px] text-slate-500">{notice}</span>}
    </div>
  );
};
