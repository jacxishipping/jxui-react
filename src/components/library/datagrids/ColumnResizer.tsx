// @jxui/react v3.0.0 — ColumnResizer (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 9. ColumnResizer — a real resizable table: drag the handle at the right
// edge of a header to change that column's width (pointer events), with a
// reset button and the widths shown in the footer.
const COLUMNS = ['Component', 'Category', 'Latency'] as const;
const ROWS = [
  ['JXButton', 'Inputs', '0.8ms'],
  ['JXTable', 'Tables', '1.1ms'],
  ['JXChart', 'Data Viz', '2.4ms'],
];
const DEFAULT_WIDTHS = [140, 110, 80];

export const ColumnResizer: React.FC = () => {
  const { palette } = useJXTheme();
  const [widths, setWidths] = useState<number[]>(DEFAULT_WIDTHS);
  const [dragging, setDragging] = useState<number | null>(null);
  const dragRef = useRef<{ col: number; startX: number; startW: number } | null>(null);

  const onPointerMove = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d) return;
    const next = Math.max(56, Math.min(260, d.startW + (e.clientX - d.startX)));
    setWidths((w) => w.map((v, i) => (i === d.col ? next : v)));
  };
  const stopDrag = () => {
    dragRef.current = null;
    setDragging(null);
  };

  return (
    <div className="w-full space-y-2 text-xs" onPointerMove={onPointerMove} onPointerUp={stopDrag} onPointerLeave={stopDrag}>
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto bg-white dark:bg-slate-900">
        <table className="text-left" style={{ tableLayout: 'fixed' }}>
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300">
              {COLUMNS.map((c, i) => (
                <th key={c} className="relative px-3 py-2 font-semibold overflow-hidden" style={{ width: widths[i] }}>
                  <span className="block truncate">{c}</span>
                  <span
                    role="separator"
                    aria-label={`Resize ${c} column`}
                    aria-orientation="vertical"
                    onPointerDown={(e) => {
                      e.preventDefault();
                      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
                      dragRef.current = { col: i, startX: e.clientX, startW: widths[i] };
                      setDragging(i);
                    }}
                    className={`absolute right-0 top-0 h-full w-2 cursor-col-resize touch-none ${dragging === i ? 'bg-indigo-500' : 'bg-slate-300 dark:bg-slate-700 hover:bg-indigo-400'}`}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {ROWS.map((r) => (
              <tr key={r[0]}>
                {r.map((cell, i) => (
                  <td key={i} className="px-3 py-2 font-mono text-slate-700 dark:text-slate-200 truncate" style={{ width: widths[i] }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-slate-500">
          Widths: {widths.map((w) => `${w}px`).join(' · ')}
        </span>
        <button
          type="button"
          onClick={() => setWidths(DEFAULT_WIDTHS)}
          className={`min-h-[36px] px-3 rounded-lg text-xs font-semibold text-white cursor-pointer ${palette.bg}`}
        >
          Reset widths
        </button>
      </div>
    </div>
  );
};
