// @jxui/react v3.0.0 — FloatingWindow (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { X, Minus, Maximize2 } from 'lucide-react';

// 5. FloatingWindow — a draggable floating window: drag by the title bar
// (pointer events), minimise, maximise and close it, then reopen it.
export const FloatingWindow: React.FC = () => {
  const [pos, setPos] = useState({ x: 8, y: 8 });
  const [state, setState] = useState<'open' | 'min' | 'closed'>('open');
  const [max, setMax] = useState(false);
  const dragRef = useRef<{ x: number; y: number; px: number; py: number } | null>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d || max) return;
    const r = areaRef.current?.getBoundingClientRect();
    if (!r) return;
    setPos({
      x: Math.max(0, Math.min(r.width - 120, d.px + (e.clientX - d.x))),
      y: Math.max(0, Math.min(r.height - 48, d.py + (e.clientY - d.y))),
    });
  };

  if (state === 'closed') {
    return (
      <div className="w-full min-h-[88px] rounded-xl border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center">
        <button type="button" onClick={() => setState('open')} className="min-h-[44px] px-4 rounded-lg bg-indigo-600 text-white text-xs font-semibold cursor-pointer">Reopen Widget Inspector</button>
      </div>
    );
  }

  return (
    <div ref={areaRef} className="relative w-full h-40 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 overflow-hidden text-xs" onPointerMove={onMove} onPointerUp={() => { dragRef.current = null; }}>
      <p className="p-2 text-slate-500">Drag the window by its title bar.</p>
      <div
        className={`absolute rounded-xl shadow-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 ${max ? 'inset-2' : 'w-56'}`}
        style={max ? undefined : { left: pos.x, top: pos.y }}
      >
        <div
          onPointerDown={(e) => { dragRef.current = { x: e.clientX, y: e.clientY, px: pos.x, py: pos.y }; (e.target as HTMLElement).setPointerCapture(e.pointerId); }}
          onPointerUp={() => { dragRef.current = null; }}
          className="flex items-center justify-between px-2.5 py-2 border-b border-slate-200 dark:border-slate-700 cursor-grab active:cursor-grabbing touch-none"
        >
          <span className="font-bold text-slate-800 dark:text-slate-200">Widget Inspector</span>
          <span className="flex gap-0.5">
            <button type="button" aria-label="Minimise window" onClick={() => setState('min')} className="min-h-[32px] min-w-[32px] flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer"><Minus className="w-3.5 h-3.5" /></button>
            <button type="button" aria-label="Maximise window" onClick={() => setMax((m) => !m)} className="min-h-[32px] min-w-[32px] flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer"><Maximize2 className="w-3.5 h-3.5" /></button>
            <button type="button" aria-label="Close window" onClick={() => setState('closed')} className="min-h-[32px] min-w-[32px] flex items-center justify-center rounded hover:bg-rose-100 dark:hover:bg-rose-950 cursor-pointer"><X className="w-3.5 h-3.5" /></button>
          </span>
        </div>
        {state === 'open' && (
          <div className="p-2.5 text-slate-500 leading-relaxed">
            Draggable surface. Position: {Math.round(pos.x)}, {Math.round(pos.y)}. {max ? 'Maximised.' : 'Floating.'}
          </div>
        )}
        {state === 'min' && (
          <button type="button" onClick={() => setState('open')} className="w-full min-h-[36px] px-2.5 text-left font-semibold text-slate-600 dark:text-slate-300 cursor-pointer">Restore window</button>
        )}
      </div>
    </div>
  );
};
