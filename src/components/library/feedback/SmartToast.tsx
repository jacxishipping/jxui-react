// @jxui/react v3.0.0 — SmartToast (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { CheckCircle2, RotateCcw, X } from 'lucide-react';

// 1. SmartToast — a working toast: it appears on demand, Undo actually
// restores the "upload" and dismisses, and it auto-dismisses after 5s
// with a visible progress bar.
export const SmartToast: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [visible, setVisible] = useState(false);
  const [remaining, setRemaining] = useState(5);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!visible) return;
    setRemaining(5);
    const id = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(id);
          setVisible(false);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [visible]);

  return (
    <div className="w-full space-y-2">
      <button
        type="button"
        onClick={() => {
          setMessage(null);
          setVisible(true);
        }}
        className={`min-h-[44px] px-4 py-2 text-xs font-semibold text-white ${palette.bg} ${palette.bgHover} ${getRadiusClass('control')} cursor-pointer`}
      >
        Upload asset
      </button>
      {message && <p className="text-xs text-slate-500">{message}</p>}
      {visible && (
        <div
          role="status"
          className={`p-3 max-w-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl ${getRadiusClass('card')} text-xs`}
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">Asset uploaded</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => {
                  setVisible(false);
                  setMessage('Upload undone — the asset was removed.');
                }}
                className={`min-h-[36px] inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg font-semibold ${palette.text} hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer`}
              >
                <RotateCcw className="w-3 h-3" /> Undo
              </button>
              <button
                type="button"
                aria-label="Dismiss toast"
                onClick={() => setVisible(false)}
                className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="mt-2 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className={`h-full ${palette.bg} transition-all duration-1000`} style={{ width: `${(remaining / 5) * 100}%` }} />
          </div>
          <p className="mt-1 text-[11px] text-slate-400">Auto-dismisses in {remaining}s</p>
        </div>
      )}
    </div>
  );
};
