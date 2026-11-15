// @jxui/react v3.0.0 — FullscreenModal (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Maximize2 } from 'lucide-react';

// 5. FullscreenModal — trigger opens a true full-viewport overlay with a
// header, content, and actions; Escape or the close button dismisses it.
const TILES = [
  { title: 'Components', detail: '361 primitives and showcases' },
  { title: 'Tokens', detail: 'W3C design tokens, live' },
  { title: 'Themes', detail: 'Light, dark and 5 accents' },
  { title: 'Docs', detail: 'Per-component API reference' },
];

export const FullscreenModal: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [open, setOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
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
        className={`min-h-[44px] inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white ${palette.bg} ${palette.bgHover} ${getRadiusClass('control')} cursor-pointer`}
      >
        <Maximize2 className="w-3.5 h-3.5" />
        Open fullscreen modal
      </button>
      {confirmed && <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400">Confirmed from the fullscreen view.</p>}
      {open && (
        <div
          ref={panelRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen viewport overlay"
          className="fixed inset-0 z-50 bg-white dark:bg-slate-950 flex flex-col"
        >
          <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-slate-200 dark:border-slate-800">
            <span className="text-sm font-bold text-slate-900 dark:text-white">Fullscreen Viewport Overlay</span>
            <button
              type="button"
              aria-label="Close fullscreen modal"
              onClick={() => setOpen(false)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <p className="text-xs text-slate-500 mb-4">The whole viewport is the modal. Press <kbd className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-mono">ESC</kbd> to close.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TILES.map((t) => (
                <div key={t.title} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{t.title}</div>
                  <div className="text-xs text-slate-500 mt-1">{t.detail}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 px-4 sm:px-6 py-3 border-t border-slate-200 dark:border-slate-800">
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
              className={`min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold text-white ${palette.bg} ${palette.bgHover} cursor-pointer`}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
