// @jxui/react v3.0.0 — SortableList (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { GripVertical, ArrowUp, ArrowDown } from 'lucide-react';

// 3. SortableList — drag rows to reorder them (HTML5 drag), or use the
// up/down buttons for keyboard-equivalent reordering.
const INITIAL = ['High Priority', 'Medium Priority', 'Low Priority', 'Backlog', 'Blocked'];

export const SortableList: React.FC = () => {
  const [items, setItems] = useState(INITIAL);
  const [drag, setDrag] = useState<number | null>(null);
  const [over, setOver] = useState<number | null>(null);

  const move = (from: number, to: number) => {
    setItems((xs) => {
      const next = [...xs];
      const [it] = next.splice(from, 1);
      next.splice(to, 0, it);
      return next;
    });
  };
  const shift = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    move(i, j);
  };

  return (
    <div className="w-full max-w-56">
      <ul className="flex flex-col gap-1 text-xs">
        {items.map((label, i) => (
          <li
            key={label}
            draggable
            onDragStart={(e) => { setDrag(i); e.dataTransfer.effectAllowed = 'move'; }}
            onDragOver={(e) => { e.preventDefault(); setOver(i); }}
            onDragLeave={() => setOver((o) => (o === i ? null : o))}
            onDrop={(e) => { e.preventDefault(); if (drag !== null && drag !== i) move(drag, i); setDrag(null); setOver(null); }}
            onDragEnd={() => { setDrag(null); setOver(null); }}
            className={`flex items-center gap-1.5 px-2 py-1.5 bg-white dark:bg-slate-900 border rounded cursor-grab active:cursor-grabbing ${over === i ? 'border-indigo-500 ring-2 ring-indigo-200 dark:ring-indigo-900' : 'border-slate-200 dark:border-slate-700'} ${drag === i ? 'opacity-40' : ''}`}
          >
            <GripVertical className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="flex-1 truncate">{i + 1}. {label}</span>
            <button type="button" aria-label={`Move ${label} up`} onClick={() => shift(i, -1)} disabled={i === 0} className="min-h-[32px] min-w-[32px] flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 cursor-pointer"><ArrowUp className="w-3.5 h-3.5" /></button>
            <button type="button" aria-label={`Move ${label} down`} onClick={() => shift(i, 1)} disabled={i === items.length - 1} className="min-h-[32px] min-w-[32px] flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 cursor-pointer"><ArrowDown className="w-3.5 h-3.5" /></button>
          </li>
        ))}
      </ul>
      <p className="mt-1.5 text-[11px] text-slate-500">Drag to reorder, or use the arrows.</p>
    </div>
  );
};
