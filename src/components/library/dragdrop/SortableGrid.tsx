// @jxui/react v3.0.0 — SortableGrid (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 4. SortableGrid — drag tiles to reorder them inside the grid.
const INITIAL = ['Tile A', 'Tile B', 'Tile C', 'Tile D', 'Tile E', 'Tile F'];

export const SortableGrid: React.FC = () => {
  const { palette } = useJXTheme();
  const [tiles, setTiles] = useState(INITIAL);
  const [drag, setDrag] = useState<number | null>(null);
  const [over, setOver] = useState<number | null>(null);

  const move = (from: number, to: number) => {
    setTiles((xs) => {
      const next = [...xs];
      const [it] = next.splice(from, 1);
      next.splice(to, 0, it);
      return next;
    });
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 text-xs">
        {tiles.map((t, i) => (
          <div
            key={t}
            draggable
            onDragStart={(e) => { setDrag(i); e.dataTransfer.effectAllowed = 'move'; }}
            onDragOver={(e) => { e.preventDefault(); setOver(i); }}
            onDrop={(e) => { e.preventDefault(); if (drag !== null && drag !== i) move(drag, i); setDrag(null); setOver(null); }}
            onDragEnd={() => { setDrag(null); setOver(null); }}
            className={`min-h-[44px] px-2 py-2 border rounded-lg text-center cursor-grab active:cursor-grabbing flex items-center justify-center font-semibold ${over === i ? 'border-indigo-500 ring-2 ring-indigo-200 dark:ring-indigo-900' : 'border-slate-200 dark:border-slate-700'} ${drag === i ? 'opacity-40' : ''} ${i === 0 ? `${palette.softBg} ${palette.text}` : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200'}`}
          >
            {t}
          </div>
        ))}
      </div>
      <p className="mt-1.5 text-[11px] text-slate-500">Drag a tile onto another to reorder. Order: {tiles.join(' → ')}</p>
    </div>
  );
};
