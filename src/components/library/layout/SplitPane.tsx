// @jxui/react v3.0.0 — SplitPane (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';

// 7. SplitPane — a split pane with a draggable divider (pointer events):
// drag to resize, flip orientation, and the split percentage is shown live.
export const SplitPane: React.FC = () => {
  const [split, setSplit] = useState(50);
  const [vertical, setVertical] = useState(false);
  const dragRef = useRef<{ start: number; split: number } | null>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const d = dragRef.current;
    const r = areaRef.current?.getBoundingClientRect();
    if (!d || !r) return;
    const pos = vertical ? ((e.clientY - r.top) / r.height) * 100 : ((e.clientX - r.left) / r.width) * 100;
    setSplit(Math.max(15, Math.min(85, Math.round(pos))));
  };

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="flex items-center gap-1.5">
        <button type="button" onClick={() => setVertical((v) => !v)} aria-pressed={vertical} className="min-h-[36px] px-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">
          {vertical ? 'Horizontal split' : 'Vertical split'}
        </button>
        <span className="font-mono text-slate-500">{split}% / {100 - split}%</span>
        <button type="button" onClick={() => setSplit(50)} className="ml-auto min-h-[36px] px-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">Reset 50 / 50</button>
      </div>
      <div
        ref={areaRef}
        className={`flex ${vertical ? 'flex-col' : 'flex-row'} border rounded-xl overflow-hidden h-32`}
        onPointerMove={onMove}
        onPointerUp={() => { dragRef.current = null; }}
        onPointerCancel={() => { dragRef.current = null; }}
      >
        <div className="p-3 bg-slate-50 dark:bg-slate-900 overflow-hidden" style={vertical ? { height: `${split}%` } : { width: `${split}%` }}>
          <div className="font-bold text-slate-800 dark:text-slate-200">Left Pane</div>
          <div className="text-slate-500">{split}%</div>
        </div>
        <div
          role="separator"
          aria-orientation={vertical ? 'horizontal' : 'vertical'}
          aria-label="Split pane divider"
          aria-valuenow={split}
          aria-valuemin={15}
          aria-valuemax={85}
          tabIndex={0}
          onPointerDown={(e) => { dragRef.current = { start: vertical ? e.clientY : e.clientX, split }; (e.target as HTMLElement).setPointerCapture(e.pointerId); }}
          onKeyDown={(e) => {
            const d = vertical ? (e.key === 'ArrowDown' ? 2 : e.key === 'ArrowUp' ? -2 : 0) : (e.key === 'ArrowRight' ? 2 : e.key === 'ArrowLeft' ? -2 : 0);
            if (d) setSplit((s) => Math.max(15, Math.min(85, s + d)));
          }}
          className={`${vertical ? 'h-1.5 w-full cursor-row-resize' : 'w-1.5 h-full cursor-col-resize'} bg-indigo-500 shrink-0 touch-none`}
        />
        <div className="flex-1 p-3 bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div className="font-bold text-slate-800 dark:text-slate-200">Right Pane</div>
          <div className="text-slate-500">{100 - split}%</div>
        </div>
      </div>
    </div>
  );
};
