// @jxui/react v3.0.0 — DragTimeline (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 13. DragTimeline — a sprint timeline: drag a task block left/right to move
// it, and drag its right edge to change its duration.
type Task = { id: string; label: string; start: number; len: number; color: string };
const INITIAL: Task[] = [
  { id: 't1', label: 'Sprint 42', start: 0, len: 3, color: '#4f46e5' },
  { id: 't2', label: 'Design', start: 3, len: 2, color: '#059669' },
  { id: 't3', label: 'Review', start: 5, len: 2, color: '#d97706' },
];
const DAY = 40; // px per day
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const DragTimeline: React.FC = () => {
  const { palette } = useJXTheme();
  const [tasks, setTasks] = useState(INITIAL);
  const [selected, setSelected] = useState<string | null>('t1');
  const dragRef = useRef<{ id: string; mode: 'move' | 'resize'; startX: number; start: number; len: number } | null>(null);

  const move = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d) return;
    const deltaDays = Math.round((e.clientX - d.startX) / DAY);
    setTasks((ts) => ts.map((t) => {
      if (t.id !== d.id) return t;
      if (d.mode === 'move') return { ...t, start: Math.max(0, Math.min(7 - t.len, d.start + deltaDays)) };
      return { ...t, len: Math.max(1, Math.min(7 - t.start, d.len + deltaDays)) };
    }));
  };

  return (
    <div className="w-full text-xs" onPointerMove={move} onPointerUp={() => { dragRef.current = null; }}>
      <div className="flex mb-1">
        {DAYS.map((d) => (<div key={d} className="text-center text-[10px] font-mono text-slate-400" style={{ width: DAY }}>{d}</div>))}
      </div>
      <div className="relative h-20 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 overflow-hidden">
        {tasks.map((t) => (
          <div
            key={t.id}
            onPointerDown={(e) => { dragRef.current = { id: t.id, mode: 'move', startX: e.clientX, start: t.start, len: t.len }; setSelected(t.id); (e.target as HTMLElement).setPointerCapture(e.pointerId); }}
            className={`absolute top-2 h-8 rounded-lg text-white text-[11px] font-semibold flex items-center px-2 cursor-ew-resize touch-none ${selected === t.id ? 'ring-2 ring-offset-1 ring-slate-400' : ''}`}
            style={{ left: t.start * DAY + 2, width: t.len * DAY - 4, backgroundColor: t.id === 't1' ? palette.hex : t.color }}
          >
            {t.label}
            <span
              role="slider"
              aria-label={`Resize ${t.label}`}
              aria-valuenow={t.len}
              aria-valuemin={1}
              aria-valuemax={7}
              tabIndex={0}
              onPointerDown={(e) => { e.stopPropagation(); dragRef.current = { id: t.id, mode: 'resize', startX: e.clientX, start: t.start, len: t.len }; (e.target as HTMLElement).setPointerCapture(e.pointerId); }}
              onKeyDown={(e) => { if (e.key === 'ArrowRight') setTasks((ts) => ts.map((x) => (x.id === t.id ? { ...x, len: Math.min(7 - x.start, x.len + 1) } : x))); if (e.key === 'ArrowLeft') setTasks((ts) => ts.map((x) => (x.id === t.id ? { ...x, len: Math.max(1, x.len - 1) } : x))); }}
              className="absolute right-0 top-0 bottom-0 w-2.5 cursor-ew-resize touch-none"
            />
          </div>
        ))}
        <div className="absolute bottom-1 left-2 text-[11px] text-slate-500">
          {selected ? `${tasks.find((t) => t.id === selected)?.label}: ${DAYS[tasks.find((t) => t.id === selected)?.start ?? 0]} · ${tasks.find((t) => t.id === selected)?.len}d` : 'Drag a block to move it, drag its right edge to resize'}
        </div>
      </div>
      <p className="mt-1.5 text-[11px] text-slate-500">Drag blocks horizontally; the footer shows the selected task.</p>
    </div>
  );
};
