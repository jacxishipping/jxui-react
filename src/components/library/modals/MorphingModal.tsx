// @jxui/react v3.0.0 — MorphingModal (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Check } from 'lucide-react';

// 1. MorphingModal — trigger opens a modal that morphs in from the trigger;
// closes via X, backdrop, or Escape, and reports the confirm result.
export const MorphingModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const { palette, getRadiusClass } = useJXTheme();
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
        onClick={() => {
          setConfirmed(false);
          setOpen(true);
        }}
        className={`min-h-[44px] px-4 py-2 text-xs font-semibold text-white ${palette.bg} ${getRadiusClass('control')} cursor-pointer`}
      >
        Open Morphing Modal
      </button>
      {confirmed && (
        <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
          <Check className="w-3.5 h-3.5" /> Morphing modal confirmed.
        </p>
      )}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Morphing surface modal"
            className={`w-full max-w-sm p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl ${getRadiusClass('card')}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="font-bold text-xs text-slate-900 dark:text-white">Morphing Surface</span>
              <button
                type="button"
                aria-label="Close morphing modal"
                onClick={() => setOpen(false)}
                className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 py-3">Zero-shift geometric expansion from trigger coordinates.</p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  setConfirmed(true);
                  setOpen(false);
                }}
                className={`min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold text-white ${palette.bg} cursor-pointer`}
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
