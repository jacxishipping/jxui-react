// @jxui/react v3.0.0 — InfiniteCanvas (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { Plus, Minus, Maximize2, Move } from 'lucide-react';

// 2. InfiniteCanvas — a pan & zoom canvas: drag the background to pan,
// zoom with the buttons or slider, and click a node to select it.
const NODES = [
  { id: 'n1', label: 'Button', x: 40, y: 30, color: '#4f46e5' },
  { id: 'n2', label: 'Table', x: 180, y: 90, color: '#059669' },
  { id: 'n3', label: 'Chart', x: 90, y: 150, color: '#d97706' },
];

export const InfiniteCanvas: React.FC = () => {
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [selected, setSelected] = useState<string | null>(null);
  const dragRef = useRef<{ x: number; y: number; px: number; py: number } | null>(null);

  const onMove = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d) return;
    setPan({ x: d.px + (e.clientX - d.x), y: d.py + (e.clientY - d.y) });
  };
  const zoomTo = (z: number) => setZoom(Math.max(0.5, Math.min(2, z)));

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="flex items-center gap-1.5 flex-wrap">
        <span className="inline-flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-200"><Move className="w-3.5 h-3.5" /> Pan &amp; Zoom</span>
        <button type="button" aria-label="Zoom out" onClick={() => zoomTo(zoom - 0.25)} className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 cursor-pointer"><Minus className="w-4 h-4" /></button>
        <input type="range" min={50} max={200} value={Math.round(zoom * 100)} onChange={(e) => zoomTo(Number(e.target.value) / 100)} aria-label="Zoom level" className="w-24 accent-indigo-600" />
        <button type="button" aria-label="Zoom in" onClick={() => zoomTo(zoom + 0.25)} className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 cursor-pointer"><Plus className="w-4 h-4" /></button>
        <span className="font-mono text-slate-500">{Math.round(zoom * 100)}%</span>
        <button type="button" onClick={() => { setPan({ x: 0, y: 0 }); setZoom(1); }} className="min-h-[36px] px-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold flex items-center gap-1 cursor-pointer"><Maximize2 className="w-3.5 h-3.5" /> Reset</button>
      </div>
      <div
        className="relative w-full h-36 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden cursor-grab active:cursor-grabbing touch-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(148,163,184,0.45) 1px, transparent 1px)', backgroundSize: `${16 * zoom}px ${16 * zoom}px`, backgroundPosition: `${pan.x}px ${pan.y}px` }}
        onPointerDown={(e) => { if ((e.target as HTMLElement).closest('[data-node]')) return; dragRef.current = { x: e.clientX, y: e.clientY, px: pan.x, py: pan.y }; (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId); }}
        onPointerMove={onMove}
        onPointerUp={() => { dragRef.current = null; }}
        onPointerCancel={() => { dragRef.current = null; }}
      >
        {NODES.map((n) => (
          <button
            key={n.id}
            type="button"
            data-node
            onClick={() => setSelected(n.id)}
            aria-pressed={selected === n.id}
            className={`absolute min-h-[36px] px-3 rounded-lg text-white text-xs font-semibold shadow-md cursor-pointer ${selected === n.id ? 'ring-2 ring-offset-2 ring-slate-400 scale-105' : ''}`}
            style={{ left: (n.x + pan.x) * zoom, top: (n.y + pan.y) * zoom, backgroundColor: n.color }}
          >
            {n.label}
          </button>
        ))}
        <div className="absolute bottom-1.5 left-2 font-mono text-[11px] text-slate-500">
          Pan: {Math.round(pan.x)}, {Math.round(pan.y)} · Zoom: {Math.round(zoom * 100)}%{selected ? ` · Selected: ${NODES.find((n) => n.id === selected)?.label}` : ' · Click a node'}
        </div>
      </div>
    </div>
  );
};
