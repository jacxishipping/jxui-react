// @jxui/react v3.0.0 — BottomSheet (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Share2, Bookmark, Trash2 } from 'lucide-react';

// 8. BottomSheet — trigger opens a real bottom sheet with actions; closes
// via the drag handle, the X button, the backdrop, or Escape.
const ACTIONS = [
  { id: 'share', label: 'Share component', icon: Share2 },
  { id: 'save', label: 'Save to collection', icon: Bookmark },
  { id: 'delete', label: 'Delete from workspace', icon: Trash2 },
] as const;

export const BottomSheet: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [open, setOpen] = useState(false);
  const [lastAction, setLastAction] = useState<string | null>(null);
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
        Open bottom sheet
      </button>
      {lastAction && (
        <p className="mt-2 text-xs text-slate-500">Last action: {lastAction}</p>
      )}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Bottom sheet"
            className="w-full max-w-md p-3 pb-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-t-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close bottom sheet"
              onClick={() => setOpen(false)}
              className="mx-auto mb-2 flex h-6 w-24 items-center justify-center cursor-pointer"
            >
              <span className="w-10 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full" />
            </button>
            <div className="flex items-center justify-between px-1 pb-2">
              <span className="text-xs font-bold text-slate-900 dark:text-white">Mobile Bottom Sheet</span>
              <button
                type="button"
                aria-label="Close bottom sheet"
                onClick={() => setOpen(false)}
                className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {ACTIONS.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => {
                    setLastAction(a.label);
                    setOpen(false);
                  }}
                  className={`min-h-[44px] flex items-center gap-2.5 px-3 rounded-lg text-xs font-medium text-left cursor-pointer ${
                    a.id === 'delete'
                      ? 'text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <a.icon className="w-4 h-4 shrink-0" />
                  {a.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
