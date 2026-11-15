// @jxui/react v3.0.0 — GlassDialog (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Sparkles } from 'lucide-react';

// 3. GlassDialog — trigger opens a frosted-glass dialog over a dimmed
// backdrop; the backdrop blur is real and the dialog has working actions.
export const GlassDialog: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open ]);

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`min-h-[44px] px-4 py-2 text-xs font-semibold text-white ${palette.bg} ${palette.bgHover} ${getRadiusClass('control')} cursor-pointer`}
      >
        Open glass dialog
      </button>
      {result && <p className="mt-2 text-xs text-slate-500">Dialog result: {result}</p>}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Specular glass dialog"
            className="w-full max-w-sm p-5 bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/60 dark:border-slate-700/60 rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <Sparkles className={`w-4 h-4 ${palette.text}`} />
                <span className="text-xs font-bold text-slate-900 dark:text-white">Specular Glass Dialog</span>
              </div>
              <button
                type="button"
                aria-label="Close glass dialog"
                onClick={() => setOpen(false)}
                className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg text-slate-500 hover:bg-white/60 dark:hover:bg-slate-800/60 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
              Multi-layered glass reflection profile. The frosted surface blurs whatever is behind it.
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  setResult('cancelled');
                  setOpen(false);
                }}
                className="min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white/70 dark:bg-slate-800/70 hover:bg-white dark:hover:bg-slate-800 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  setResult('confirmed');
                  setOpen(false);
                }}
                className={`min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold text-white ${palette.bg} ${palette.bgHover} cursor-pointer`}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
