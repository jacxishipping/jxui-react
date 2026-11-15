// @jxui/react v3.0.0 — ResizableLayout (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';

// 8. ResizableLayout — a three-column workspace with two draggable
// dividers (pointer events); widths are shown live, with a reset button.
export const ResizableLayout: React.FC = () => {
  const [widths, setWidths] = useState<[number, number, number]>([25, 50, 25]);
  const dragRef = useRef<{ divider: 0 | 1; x: number; w: [number, number, number] } | null>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const d = dragRef.current;
    const r = areaRef.current?.getBoundingClientRect();
    if (!d || !r) return;
    const deltaPct = ((e.clientX - d.x) / r.width) * 100;
    const [a, b, c] = d.w;
    if (d.divider === 0) {
      const na = Math.max(12, Math.min(45, a + deltaPct));
      setWidths([na, b + (a - na), c]);
    } else {
      const nb = Math.max(20, Math.min(70, b + deltaPct));
      setWidths([a, nb, c + (b - nb)]);
    }
  };

  const Divider = ({ index }: { index: 0 | 1 }) => (
    <div
      role="separator"
      aria-orientation="vertical"
      aria-label={`Resize divider ${index + 1}`}
      tabIndex={0}
      onPointerDown={(e) => { dragRef.current = { divider: index, x: e.clientX, w: widths }; (e.target as HTMLElement).setPointerCapture(e.pointerId); }}
      onPointerMove={onMove}
      onPointerUp={() => { dragRef.current = null; }}
      onPointerCancel={() => { dragRef.current = null; }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setWidths((w) => (index === 0 ? [Math.max(12, w[0] - 2), w[1] + 2, w[2]] : [w[0], Math.max(20, w[1] - 2), w[2] + 2]));
        if (e.key === 'ArrowRight') setWidths((w) => (index === 0 ? [Math.min(45, w[0] + 2), w[1] - 2, w[2]] : [w[0], Math.min(70, w[1] + 2), w[2] - 2]));
      }}
      className="w-1.5 shrink-0 bg-indigo-500/60 hover:bg-indigo-500 cursor-col-resize touch-none"
    />
  );

  const cols = [
    { label: 'Sidebar', body: 'Navigation tree and filters.' },
    { label: 'Editor', body: 'Main canvas and component stage.' },
    { label: 'Inspector', body: 'Properties and tokens.' },
  ];

  return (
    <div className="w-full space-y-2 text-xs">
      <div ref={areaRef} className="flex h-28 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        {cols.map((c, i) => (
          <React.Fragment key={c.label}>
            {i > 0 && <Divider index={(i - 1) as 0 | 1} />}
            <div className={`p-2.5 overflow-hidden ${i === 1 ? 'bg-slate-100 dark:bg-slate-800' : 'bg-white dark:bg-slate-900'}`} style={{ width: `${widths[i]}%` }}>
              <div className="font-bold text-slate-800 dark:text-slate-200">{c.label}</div>
              <div className="text-slate-500 font-mono">{Math.round(widths[i])}%</div>
              <div className="text-slate-500 truncate">{c.body}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="font-mono text-slate-500">{widths.map((w) => `${Math.round(w)}%`).join(' · ')}</span>
        <button type="button" onClick={() => setWidths([25, 50, 25])} className="min-h-[36px] px-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">Reset 25 / 50 / 25</button>
      </div>
    </div>
  );
};
