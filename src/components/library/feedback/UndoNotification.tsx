// @jxui/react v3.0.0 — UndoNotification (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { RotateCcw, Trash2 } from 'lucide-react';

// 9. UndoNotification — remove a file, then undo within the 5-second
// window (with a live countdown); when it expires the file is gone for
// good, with a restore option.
export const UndoNotification: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [removed, setRemoved] = useState(false);
  const [remaining, setRemaining] = useState(5);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    if (!removed || expired) return;
    setRemaining(5);
    const id = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(id);
          setExpired(true);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [removed, expired]);

  const remove = () => {
    setExpired(false);
    setRemoved(true);
  };

  return (
    <div className="w-full space-y-2">
      {!removed && (
        <div className="flex items-center justify-between gap-2 p-2.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs w-full max-w-xs">
          <span className="font-semibold text-slate-700 dark:text-slate-200">JXButton.tsx</span>
          <button
            type="button"
            onClick={remove}
            className="min-h-[36px] inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-600 text-white cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" /> Remove
          </button>
        </div>
      )}
      {removed && !expired && (
        <div className="p-2.5 bg-slate-900 text-white rounded-lg text-xs flex items-center justify-between gap-2 w-full max-w-xs shadow-xl" role="status">
          <span>File removed from tree</span>
          <button
            type="button"
            onClick={() => setRemoved(false)}
            className={`min-h-[36px] px-2.5 py-1.5 rounded-lg font-bold ${palette.text} bg-white/10 hover:bg-white/20 cursor-pointer`}
          >
            <span className="inline-flex items-center gap-1">
              <RotateCcw className="w-3 h-3" /> Undo ({remaining}s)
            </span>
          </button>
        </div>
      )}
      {removed && expired && (
        <div className="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 rounded-lg text-xs text-rose-700 dark:text-rose-300 w-full max-w-xs">
          <p className="font-semibold">JXButton.tsx permanently removed.</p>
          <p className="mt-0.5">The undo window expired.</p>
          <button
            type="button"
            onClick={() => {
              setRemoved(false);
              setExpired(false);
            }}
            className={`mt-2 min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold text-white ${palette.bg} ${getRadiusClass('control')} cursor-pointer`}
          >
            Restore file
          </button>
        </div>
      )}
    </div>
  );
};
