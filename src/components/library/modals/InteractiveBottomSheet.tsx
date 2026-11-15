// @jxui/react v3.0.0 — InteractiveBottomSheet (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Music, Share2, Download } from 'lucide-react';

// 9. InteractiveBottomSheet — drag the sheet down to dismiss it (pointer
// events, with a distance threshold), or use the close button / Escape.
const TRACKS = [
  { title: 'Midnight Tokens', artist: 'JXUI Ensemble', duration: '3:24' },
  { title: 'Glassmorphism', artist: 'Design System', duration: '2:58' },
  { title: 'Zero Layout Shift', artist: 'Performance Club', duration: '4:01' },
];

export const InteractiveBottomSheet: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState<number | null>(0);
  const [dragY, setDragY] = useState(0);
  const dragRef = useRef<{ startY: number } | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    setDragY(0);
    panelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open ]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragRef.current = { startY: e.clientY };
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;
    setDragY(Math.max(0, e.clientY - dragRef.current.startY));
  };
  const onPointerUp = () => {
    if (dragRef.current && dragY > 80) setOpen(false);
    dragRef.current = null;
    setDragY(0);
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`min-h-[44px] px-4 py-2 text-xs font-semibold text-white ${palette.bg} ${palette.bgHover} ${getRadiusClass('control')} cursor-pointer`}
      >
        Open interactive sheet
      </button>
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
            aria-label="Interactive bottom sheet"
            className="w-full max-w-md p-3 pb-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-t-2xl shadow-2xl"
            style={{ transform: dragY > 0 ? `translateY(${dragY}px)` : undefined }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex flex-col items-center cursor-grab active:cursor-grabbing touch-none select-none"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
            >
              <div className="w-12 h-1.5 bg-indigo-400 rounded-full mb-1" />
              <span className="text-[11px] text-slate-400">Drag down to dismiss</span>
            </div>
            <div className="flex items-center justify-between px-1 py-2">
              <span className="text-xs font-bold text-slate-900 dark:text-white">Now Playing</span>
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
              {TRACKS.map((t, i) => (
                <button
                  key={t.title}
                  type="button"
                  onClick={() => setPlaying(i)}
                  aria-pressed={playing === i}
                  className={`min-h-[44px] flex items-center gap-2.5 px-3 rounded-lg text-xs text-left cursor-pointer ${
                    playing === i ? `${palette.softBg} ${palette.text} font-semibold` : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Music className="w-4 h-4 shrink-0" />
                  <span className="flex-1 min-w-0 truncate">{t.title} — {t.artist}</span>
                  <span className="font-mono text-[11px] text-slate-400">{t.duration}</span>
                  {playing === i ? <span className="text-[11px]">Playing</span> : <Share2 className="w-3.5 h-3.5 text-slate-400" />}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className={`mt-3 min-h-[44px] w-full inline-flex items-center justify-center gap-2 rounded-lg text-xs font-semibold text-white ${palette.bg} cursor-pointer`}
            >
              <Download className="w-3.5 h-3.5" />
              Download playlist
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
