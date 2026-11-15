// @jxui/react v3.0.0 — SmartPopover (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X } from 'lucide-react';

// 15. SmartPopover — trigger opens a popover whose placement you can
// choose (top / bottom / left / right); it repositions, and closes on
// outside click, Escape, or its close button.
const PLACEMENTS = ['bottom', 'top', 'left', 'right'] as const;
type Placement = (typeof PLACEMENTS)[number];

export const SmartPopover: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<Placement>('bottom');
  const [count, setCount] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open ]);

  const placementClass: Record<Placement, string> = {
    bottom: 'left-1/2 top-full mt-2 -translate-x-1/2',
    top: 'left-1/2 bottom-full mb-2 -translate-x-1/2',
    left: 'right-full top-1/2 mr-2 -translate-y-1/2',
    right: 'left-full top-1/2 ml-2 -translate-y-1/2',
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-2 pb-2" role="group" aria-label="Popover placement">
        <span className="text-xs text-slate-500">Placement:</span>
        {PLACEMENTS.map((p) => (
          <button
            key={p}
            type="button"
            aria-pressed={placement === p}
            onClick={() => {
              setPlacement(p);
              setOpen(true);
            }}
            className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-semibold capitalize cursor-pointer ${
              placement === p ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
            }`}
          >
            {p}
          </button>
        ))}
      </div>
      <div ref={wrapRef} className="relative inline-block">
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="dialog"
          onClick={() => setOpen((v) => !v)}
          className={`min-h-[44px] px-4 py-2 text-xs font-semibold text-white ${palette.bg} ${palette.bgHover} ${getRadiusClass('control')} cursor-pointer`}
        >
          Toggle popover
        </button>
        {open && (
          <div
            role="dialog"
            aria-label="Smart popover"
            className={`absolute z-30 w-64 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl text-xs ${placementClass[placement]}`}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="font-bold text-slate-900 dark:text-white">Collision Auto-Positioning</div>
                <p className="text-slate-500 mt-1 leading-relaxed">
                  Placed {placement} of the trigger. Try the other placements — the panel flips to stay visible.
                </p>
                <p className="mt-2 text-slate-500">Button clicked {count} time{count === 1 ? '' : 's'}.</p>
              </div>
              <button
                type="button"
                aria-label="Close popover"
                onClick={() => setOpen(false)}
                className="min-h-[32px] min-w-[32px] flex items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => setCount((c) => c + 1)}
              className={`mt-3 min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-semibold text-white ${palette.bg} cursor-pointer`}
            >
              Count a click
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
