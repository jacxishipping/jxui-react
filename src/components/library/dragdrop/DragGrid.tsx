// @jxui/react v3.0.0 — DragGrid (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { GripVertical } from 'lucide-react';

// 2. DragGrid — a draggable grid: drag any cell onto another to swap them,
// with the drop target highlighted while hovering.
const INITIAL = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const DragGrid: React.FC = () => {
  const [cells, setCells] = useState(INITIAL);
  const [drag, setDrag] = useState<number | null>(null);
  const [over, setOver] = useState<number | null>(null);

  return (
    <div>
      <div className="grid grid-cols-3 gap-1.5 w-44">
        {cells.map((n, i) => (
          <div
            key={n}
            draggable
            onDragStart={(e) => { setDrag(i); e.dataTransfer.effectAllowed = 'move'; }}
            onDragOver={(e) => { e.preventDefault(); setOver(i); }}
            onDrop={(e) => {
              e.preventDefault();
              if (drag !== null && drag !== i) {
                setCells((xs) => { const next = [...xs]; [next[drag], next[i]] = [next[i], next[drag]]; return next; });
              }
              setDrag(null); setOver(null);
            }}
            onDragEnd={() => { setDrag(null); setOver(null); }}
            className={`min-h-[44px] bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center text-xs font-mono cursor-grab active:cursor-grabbing ${over === i ? 'ring-2 ring-indigo-500 bg-indigo-100 dark:bg-indigo-950' : ''} ${drag === i ? 'opacity-40' : ''}`}
          >
            <GripVertical className="w-3 h-3 text-slate-400 mr-0.5" />{n}
          </div>
        ))}
      </div>
      <p className="mt-1.5 text-[11px] text-slate-500">Drag a cell onto another to swap them.</p>
    </div>
  );
};
