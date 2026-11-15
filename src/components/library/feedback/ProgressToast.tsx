// @jxui/react v3.0.0 — ProgressToast (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { CheckCircle2, X } from 'lucide-react';

// 8. ProgressToast — start an export and watch the toast count 0 → 100%
// live (or cancel mid-flight); on completion it flips to a success state.
export const ProgressToast: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [progress, setProgress] = useState(0);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(100, p + 4);
        if (next >= 100) {
          clearInterval(id);
          setRunning(false);
          setDone(true);
        }
        return next;
      });
    }, 120);
    return () => clearInterval(id);
  }, [running]);

  const start = () => {
    setProgress(0);
    setDone(false);
    setCancelled(false);
    setRunning(true);
  };

  return (
    <div className="w-full space-y-2">
      {!running && !done && !cancelled && (
        <button
          type="button"
          onClick={start}
          className={`min-h-[44px] px-4 py-2 text-xs font-semibold text-white ${palette.bg} ${palette.bgHover} ${getRadiusClass('control')} cursor-pointer`}
        >
          Start export
        </button>
      )}
      {(running || done || cancelled) && (
        <div className={`p-3 bg-white dark:bg-slate-900 border rounded-xl shadow-lg text-xs w-full max-w-xs flex flex-col gap-1.5 ${getRadiusClass('card')}`} role="status">
          <div className="flex justify-between font-semibold text-slate-800 dark:text-slate-200">
            <span className="flex items-center gap-1.5">
              {done && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
              {done ? 'Export complete' : cancelled ? 'Export cancelled' : 'Exporting tokens...'}
            </span>
            <span className="font-mono">{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-150 ${done ? 'bg-emerald-500' : cancelled ? 'bg-rose-500' : palette.bg}`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[11px] text-slate-500">
              {done ? 'tokens.json · 6.3 MB' : cancelled ? 'Partial file discarded.' : `${Math.round((progress / 100) * 300)} of 300 primitives exported`}
            </span>
            {running && (
              <button
                type="button"
                onClick={() => {
                  setRunning(false);
                  setCancelled(true);
                }}
                className="min-h-[36px] inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" /> Cancel
              </button>
            )}
            {(done || cancelled) && (
              <button
                type="button"
                onClick={start}
                className="min-h-[36px] px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                Run again
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
