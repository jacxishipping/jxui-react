// @jxui/react v3.0.0 — MagneticDrawer (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Magnet } from 'lucide-react';

// 7. MagneticDrawer — trigger opens a drawer that magnetically snaps to
// 30%, 60% or 100% of the viewport width; pick a snap point to resize it.
const SNAPS = [
  { id: 'narrow', label: '30%', width: '30%' },
  { id: 'medium', label: '60%', width: '60%' },
  { id: 'full', label: '100%', width: '100%' },
] as const;

export const MagneticDrawer: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [open, setOpen] = useState(false);
  const [snap, setSnap] = useState<(typeof SNAPS)[number]['id']>('medium');
  const panelRef = useRef<HTMLDivElement>(null);
  const width = SNAPS.find((s) => s.id === snap)?.width ?? '60%';

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
        className={`min-h-[44px] inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white ${palette.bg} ${palette.bgHover} ${getRadiusClass('control')} cursor-pointer`}
      >
        <Magnet className="w-3.5 h-3.5" />
        Open magnetic drawer
      </button>
      <p className="mt-2 text-xs text-slate-500">Snap point: {SNAPS.find((s) => s.id === snap)?.label} width</p>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Magnetic snap drawer"
            className="absolute right-0 top-0 h-full bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl p-4 flex flex-col gap-3 text-xs transition-all duration-300 jx-spring"
            style={{ width: `min(${width}, 100vw)` }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className={`font-semibold ${palette.text}`}>Magnetic Snap Drawer</span>
              <button
                type="button"
                aria-label="Close magnetic drawer"
                onClick={() => setOpen(false)}
                className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-slate-500">The drawer snaps magnetically to a width preset.</p>
            <div className="flex gap-1.5" role="group" aria-label="Snap width">
              {SNAPS.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  aria-pressed={snap === s.id}
                  onClick={() => setSnap(s.id)}
                  className={`min-h-[44px] flex-1 rounded-lg text-xs font-semibold cursor-pointer ${
                    snap === s.id ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <div className="mt-2 flex-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-3">
              <p className="text-slate-500">Drawer content fills {SNAPS.find((s) => s.id === snap)?.label} of the viewport.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
