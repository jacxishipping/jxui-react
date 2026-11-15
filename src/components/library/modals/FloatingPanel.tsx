// @jxui/react v3.0.0 — FloatingPanel (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, GripVertical } from 'lucide-react';

// 10. FloatingPanel — a draggable floating widget. Drag the header to move
// it inside its container; toggle the live feed, close it, reopen it.
export const FloatingPanel: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [visible, setVisible] = useState(true);
  const [live, setLive] = useState(true);
  const [pos, setPos] = useState({ x: 16, y: 16 });
  const dragRef = useRef<{ dx: number; dy: number } | null>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button')) return;
    dragRef.current = { dx: e.clientX - pos.x, dy: e.clientY - pos.y };
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current || !areaRef.current) return;
    const area = areaRef.current.getBoundingClientRect();
    setPos({
      x: Math.max(0, Math.min(area.width - 220, e.clientX - area.left - dragRef.current.dx)),
      y: Math.max(0, Math.min(area.height - 120, e.clientY - area.top - dragRef.current.dy)),
    });
  };
  const onPointerUp = () => {
    dragRef.current = null;
  };

  return (
    <div className="w-full space-y-2">
      {!visible && (
        <button
          type="button"
          onClick={() => setVisible(true)}
          className={`min-h-[44px] px-4 py-2 text-xs font-semibold text-white ${palette.bg} ${palette.bgHover} ${getRadiusClass('control')} cursor-pointer`}
        >
          Show floating panel
        </button>
      )}
      <div
        ref={areaRef}
        className="relative w-full h-56 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-900/40 overflow-hidden"
      >
        <p className="absolute inset-x-0 top-2 text-center text-[11px] text-slate-400">Drag the panel by its header</p>
        {visible && (
          <div
            role="dialog"
            aria-label="Floating widget panel"
            className="absolute w-56 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl shadow-2xl text-xs select-none"
            style={{ left: pos.x, top: pos.y }}
          >
            <div
              className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-200 dark:border-slate-800 cursor-grab active:cursor-grabbing touch-none"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
            >
              <GripVertical className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="font-bold flex-1 text-slate-900 dark:text-white">Floating Widget</span>
              <span className={`w-2 h-2 rounded-full ${live ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-600'}`} aria-label={live ? 'Live' : 'Paused'} />
              <button
                type="button"
                aria-label="Close floating panel"
                onClick={() => setVisible(false)}
                className="min-h-[32px] min-w-[32px] flex items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="p-3 space-y-2">
              <p className="text-slate-500">Draggable window surface.</p>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-300">Live feed</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={live}
                  aria-label="Toggle live feed"
                  onClick={() => setLive((v) => !v)}
                  className={`min-h-[32px] w-11 rounded-full p-0.5 transition-colors cursor-pointer ${live ? palette.bg : 'bg-slate-300 dark:bg-slate-700'}`}
                >
                  <span className={`block w-6 h-6 rounded-full bg-white shadow transition-transform ${live ? 'translate-x-4' : ''}`} />
                </button>
              </div>
              <p className="font-mono text-[11px] text-slate-400">
                {live ? 'Streaming · 42 tok/s' : 'Paused · feed held'} · x {Math.round(pos.x)} y {Math.round(pos.y)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
