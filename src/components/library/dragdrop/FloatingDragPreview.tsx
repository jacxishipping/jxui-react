// @jxui/react v3.0.0 — FloatingDragPreview (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 10. FloatingDragPreview — drag the token: a floating ghost preview follows
// the pointer while dragging, and dropping it on the target docks it there.
export const FloatingDragPreview: React.FC = () => {
  const { palette } = useJXTheme();
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [docked, setDocked] = useState(false);
  const [over, setOver] = useState(false);
  const areaRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    if (!pos) return;
    const r = areaRef.current?.getBoundingClientRect();
    if (r) setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <div
      ref={areaRef}
      onPointerMove={onMove}
      onPointerUp={() => { if (pos && over) setDocked(true); setPos(null); }}
      className="relative w-full h-36 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 overflow-hidden text-xs select-none"
    >
      <p className="p-2 text-slate-500">Drag the token — a ghost preview follows your pointer.</p>
      {!docked && (
        <div
          onPointerDown={(e) => { const r = areaRef.current?.getBoundingClientRect(); if (r) setPos({ x: e.clientX - r.left, y: e.clientY - r.top }); (e.target as HTMLElement).setPointerCapture?.(e.pointerId); }}
          className={`absolute left-3 top-12 px-3 py-2 rounded-lg text-white font-semibold shadow-2xl cursor-grab active:cursor-grabbing touch-none ${palette.bg} ${pos ? 'opacity-30' : ''}`}
        >
          Ghost Draggable Token
        </div>
      )}
      {pos && (
        <div
          className={`absolute px-3 py-2 rounded-lg text-white font-semibold shadow-2xl opacity-90 pointer-events-none ${palette.bg}`}
          style={{ left: pos.x - 60, top: pos.y - 18 }}
        >
          Ghost Draggable Token
        </div>
      )}
      <div
        onPointerEnter={() => setOver(true)}
        onPointerLeave={() => setOver(false)}
        className={`absolute right-3 bottom-3 min-h-[44px] px-3 rounded-lg border-2 border-dashed flex items-center font-semibold ${over ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40' : 'border-slate-300 dark:border-slate-600 text-slate-500'}`}
      >
        {docked ? 'Docked ✓' : 'Drop target'}
      </div>
      {docked && (
        <button type="button" onClick={() => setDocked(false)} className="absolute left-3 bottom-3 min-h-[36px] px-3 rounded-lg bg-slate-200 dark:bg-slate-800 font-semibold cursor-pointer">
          Reset
        </button>
      )}
    </div>
  );
};
