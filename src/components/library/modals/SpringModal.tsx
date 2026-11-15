// @jxui/react v3.0.0 — SpringModal (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X } from 'lucide-react';

// 4. SpringModal — trigger opens a modal that springs in with a bouncy
// cubic-bezier release (skipped under prefers-reduced-motion); the dialog
// has working Confirm / Cancel actions and Escape to close.
export const SpringModal: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [open, setOpen] = useState(false);
  const [inView, setInView] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus();
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    if (reduced) {
      setInView(true);
    } else {
      raf = requestAnimationFrame(() => setInView(true));
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('keydown', onKey);
    };
  }, [open ]);

  const close = () => {
    setInView(false);
    setOpen(false);
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => {
          setInView(false);
          setResult(null);
          setOpen(true);
        }}
        className={`min-h-[44px] px-4 py-2 text-xs font-semibold text-white ${palette.bg} ${palette.bgHover} ${getRadiusClass('control')} cursor-pointer`}
      >
        Open spring modal
      </button>
      {result && <p className="mt-2 text-xs text-slate-500">Spring modal result: {result}</p>}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={close}
          role="presentation"
        >
          <div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Spring physics modal"
            className={`w-full max-w-sm p-5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl shadow-2xl ${getRadiusClass('card')} transition-all duration-500 jx-spring ${
              inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="font-bold text-xs text-slate-900 dark:text-white">Spring Physics Modal</span>
                <p className="text-xs text-slate-500 mt-1">Cubic bezier spring release with damping.</p>
              </div>
              <button
                type="button"
                aria-label="Close spring modal"
                onClick={close}
                className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
              The panel overshoots slightly, then settles — the same spring curve used by the library&apos;s motion system.
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  setResult('cancelled');
                  close();
                }}
                className="min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  setResult('confirmed');
                  close();
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
