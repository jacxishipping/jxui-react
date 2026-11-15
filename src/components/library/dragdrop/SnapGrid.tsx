// @jxui/react v3.0.0 — SnapGrid (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';

// 12. SnapGrid — drag the tile and it snaps to the 8px grid; the live
// snapped coordinates are shown below.
export const SnapGrid: React.FC = () => {
  const [pos, setPos] = useState({ x: 24, y: 16 });
  const [snap, setSnap] = useState(8);
  const startRef = useRef<{ x: number; y: number; px: number; py: number } | null>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  const snapTo = (v: number) => Math.round(v / snap) * snap;
  const onMove = (e: React.PointerEvent) => {
    const s = startRef.current;
    if (!s) return;
    const r = areaRef.current?.getBoundingClientRect();
    if (!r) return;
    setPos({
      x: Math.max(0, Math.min(r.width - 72, snapTo(s.px + (e.clientX - s.x)))),
      y: Math.max(0, Math.min(r.height - 44, snapTo(s.py + (e.clientY - s.y)))),
    });
  };

  return (
    <div className="w-full space-y-2 text-xs">
      <div
        ref={areaRef}
        className="relative w-full h-32 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(148,163,184,0.5) 1px, transparent 1px)', backgroundSize: '8px 8px' }}
      >
        <div
          onPointerDown={(e) => { startRef.current = { x: e.clientX, y: e.clientY, px: pos.x, py: pos.y }; (e.target as HTMLElement).setPointerCapture(e.pointerId); }}
          onPointerMove={onMove}
          onPointerUp={() => { startRef.current = null; }}
          onPointerCancel={() => { startRef.current = null; }}
          className="absolute w-[72px] h-11 rounded-lg bg-indigo-600 text-white font-semibold flex items-center justify-center cursor-grab active:cursor-grabbing touch-none shadow-md"
          style={{ left: pos.x, top: pos.y }}
        >
          Drag me
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-mono text-slate-500">x: {pos.x}px · y: {pos.y}px · snap: {snap}px</span>
        <div className="flex gap-1 ml-auto">
          {[4, 8, 16].map((s) => (
            <button key={s} type="button" onClick={() => setSnap(s)} aria-pressed={snap === s} className={`min-h-[36px] px-2.5 rounded-lg font-mono font-semibold cursor-pointer ${snap === s ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>{s}px</button>
          ))}
        </div>
      </div>
    </div>
  );
};
