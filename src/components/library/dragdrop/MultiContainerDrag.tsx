// @jxui/react v3.0.0 — MultiContainerDrag (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';

// 15. MultiContainerDrag — two containers with cross-container drag:
// items move between "Backlog" and "Sprint", and reorder within a container.
type Item = { id: string; label: string };
const INITIAL: Record<'Backlog' | 'Sprint', Item[]> = {
  Backlog: [{ id: 'i1', label: 'Token audit' }, { id: 'i2', label: 'Grid polish' }, { id: 'i3', label: 'Docs pass' }],
  Sprint: [{ id: 'i4', label: 'Theme tokens' }, { id: 'i5', label: 'Kanban drag' }],
};
const CONTAINERS = ['Backlog', 'Sprint'] as const;
type C = (typeof CONTAINERS)[number];

export const MultiContainerDrag: React.FC = () => {
  const [cols, setCols] = useState(INITIAL);
  const [drag, setDrag] = useState<{ from: C; id: string } | null>(null);
  const [over, setOver] = useState<{ col: C; index: number } | null>(null);

  const dropOn = (col: C, index: number) => {
    if (!drag) return;
    setCols((prev) => {
      const item = prev[drag.from].find((x) => x.id === drag.id);
      if (!item) return prev;
      const without = { ...prev, [drag.from]: prev[drag.from].filter((x) => x.id !== drag.id) };
      const target = [...without[col]];
      target.splice(Math.min(index, target.length), 0, item);
      return { ...without, [col]: target };
    });
  };

  return (
    <div className="w-full flex gap-2 text-xs">
      {CONTAINERS.map((col) => (
        <div
          key={col}
          onDragOver={(e) => { e.preventDefault(); }}
          className="flex-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-2"
        >
          <div className="font-bold text-slate-700 dark:text-slate-200 mb-1.5">{col} ({cols[col].length})</div>
          <div className="space-y-1.5">
            {cols[col].map((item, i) => (
              <div
                key={item.id}
                draggable
                onDragStart={(e) => { setDrag({ from: col, id: item.id }); e.dataTransfer.effectAllowed = 'move'; }}
                onDragOver={(e) => { e.preventDefault(); setOver({ col, index: i }); }}
                onDrop={(e) => { e.preventDefault(); dropOn(col, i); setDrag(null); setOver(null); }}
                onDragEnd={() => { setDrag(null); setOver(null); }}
                className={`min-h-[36px] px-2 py-1.5 bg-white dark:bg-slate-800 rounded-lg shadow-xs cursor-grab active:cursor-grabbing flex items-center ${over?.col === col && over.index === i ? 'ring-2 ring-indigo-500' : ''} ${drag?.id === item.id ? 'opacity-40' : ''}`}
              >
                {item.label}
              </div>
            ))}
            <div
              onDragOver={(e) => { e.preventDefault(); setOver({ col, index: cols[col].length }); }}
              onDrop={(e) => { e.preventDefault(); dropOn(col, cols[col].length); setDrag(null); setOver(null); }}
              className={`min-h-[36px] rounded-lg border-2 border-dashed flex items-center justify-center text-slate-400 ${over?.col === col && over.index === cols[col].length ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40' : 'border-slate-300 dark:border-slate-700'}`}
            >
              Drop here
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
