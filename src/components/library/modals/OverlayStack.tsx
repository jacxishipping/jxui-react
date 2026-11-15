// @jxui/react v3.0.0 — OverlayStack (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Layers, Plus } from 'lucide-react';

// 20. OverlayStack — stack real overlays on top of each other (LIFO): open
// a layer, open another on top of it, close the top one or close all.
const LAYERS = [
  { title: 'Layer 1 · Settings', body: 'Theme, accent and radius controls live here.' },
  { title: 'Layer 2 · Confirm', body: 'Are you sure you want to apply these settings?' },
  { title: 'Layer 3 · Success', body: 'Settings applied. The stack unwinds from the top.' },
] as const;

export const OverlayStack: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [depth, setDepth] = useState(0);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (depth === 0) return;
    topRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDepth((d) => Math.max(0, d - 1));
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [depth]);

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setDepth((d) => Math.min(LAYERS.length, d + 1))}
          disabled={depth >= LAYERS.length}
          className={`min-h-[44px] inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white ${palette.bg} ${palette.bgHover} ${getRadiusClass('control')} cursor-pointer disabled:opacity-50 disabled:cursor-default`}
        >
          <Plus className="w-3.5 h-3.5" />
          Open layer {depth + 1}
        </button>
        <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
          <Layers className={`w-4 h-4 ${palette.text}`} />
          Z-Index Layer Stack Manager (LIFO) · {depth} open
        </span>
      </div>
      {LAYERS.slice(0, depth).map((layer, i) => (
        <div
          key={layer.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          style={{ zIndex: 50 + i }}
          onClick={() => setDepth(i)}
          role="presentation"
        >
          <div
            ref={i === depth - 1 ? topRef : undefined}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label={layer.title}
            className="w-full max-w-sm p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl"
            style={{ transform: `translate(${i * 12}px, ${i * 12}px)` }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900 dark:text-white">{layer.title}</span>
              <button
                type="button"
                aria-label={`Close ${layer.title}`}
                onClick={() => setDepth(i)}
                className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2">{layer.body}</p>
            <div className="mt-4 flex justify-end gap-2">
              {i < LAYERS.length - 1 && (
                <button
                  type="button"
                  onClick={() => setDepth((d) => Math.min(LAYERS.length, d + 1))}
                  className={`min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold text-white ${palette.bg} cursor-pointer`}
                >
                  Open layer {i + 2}
                </button>
              )}
              <button
                type="button"
                onClick={() => setDepth(0)}
                className="min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                Close all
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
