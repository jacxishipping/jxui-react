// @jxui/react v3.0.0 — FloatingSelectionBar (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Copy, Trash2, X, Check } from 'lucide-react';

// 15. FloatingSelectionBar — a working selection action bar: the count
// starts at 3, Duplicate increments it, Delete clears it (and hides the
// bar), and Restore brings it back.
export const FloatingSelectionBar: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [count, setCount] = useState(3);
  const [notice, setNotice] = useState('');

  if (count === 0) {
    return (
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <span>No items selected.</span>
        <button
          type="button"
          onClick={() => {
            setCount(3);
            setNotice('Selection restored.');
          }}
          className="min-h-[36px] px-2.5 font-semibold cursor-pointer"
          style={{ color: palette.hex }}
        >
          Restore 3 items
        </button>
        {notice && <span className="text-emerald-600 dark:text-emerald-400">{notice}</span>}
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-1">
      <div className={`inline-flex flex-wrap items-center gap-3 px-4 py-2 min-h-[44px] bg-slate-900 text-white shadow-2xl ${getRadiusClass('pill')} text-xs`}>
        <span className="font-semibold" style={{ color: palette.hex }}>{count} selected</span>
        <button
          type="button"
          onClick={() => {
            setCount((c) => c * 2);
            setNotice(`Duplicated — now ${count * 2} selected.`);
          }}
          className="min-h-[36px] flex items-center gap-1 hover:text-slate-300 cursor-pointer"
        >
          <Copy className="w-3.5 h-3.5" /> Duplicate
        </button>
        <button
          type="button"
          onClick={() => {
            setCount(0);
            setNotice('');
          }}
          className="min-h-[36px] flex items-center gap-1 text-rose-400 hover:text-rose-300 cursor-pointer"
        >
          <Trash2 className="w-3.5 h-3.5" /> Delete
        </button>
        <button
          type="button"
          onClick={() => setCount(0)}
          aria-label="Dismiss selection bar"
          className="min-w-[36px] min-h-[36px] flex items-center justify-center text-slate-400 hover:text-white cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
      {notice && (
        <span className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
          <Check className="w-3 h-3" /> {notice}
        </span>
      )}
    </div>
  );
};
