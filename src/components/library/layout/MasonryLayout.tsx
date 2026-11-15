// @jxui/react v3.0.0 — MasonryLayout (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Plus, X } from 'lucide-react';

// 12. MasonryLayout — a masonry layout: choose 2–4 columns, tiles of
// varying heights flow into the shortest column; add and remove tiles.
const INITIAL = [
  { id: 't1', title: 'Tile 1', h: 64, color: '#4f46e5' },
  { id: 't2', title: 'Tile 2', h: 40, color: '#059669' },
  { id: 't3', title: 'Tile 3', h: 88, color: '#d97706' },
  { id: 't4', title: 'Tile 4', h: 48, color: '#7c3aed' },
  { id: 't5', title: 'Tile 5', h: 72, color: '#0284c7' },
  { id: 't6', title: 'Tile 6', h: 36, color: '#e11d48' },
];

export const MasonryLayout: React.FC = () => {
  const { palette } = useJXTheme();
  const [tiles, setTiles] = useState(INITIAL);
  const [cols, setCols] = useState(3);

  const columns: typeof INITIAL[] = Array.from({ length: cols }, () => []);
  const heights = new Array(cols).fill(0);
  tiles.forEach((t) => {
    const c = heights.indexOf(Math.min(...heights));
    columns[c].push(t);
    heights[c] += t.h + 8;
  });

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="flex items-center gap-1.5">
        <span className="font-semibold text-slate-700 dark:text-slate-200">Columns:</span>
        {[2, 3, 4].map((c) => (
          <button key={c} type="button" onClick={() => setCols(c)} aria-pressed={cols === c} className={`min-h-[36px] min-w-[36px] px-2.5 rounded-lg font-mono font-semibold cursor-pointer ${cols === c ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>{c}</button>
        ))}
        <button type="button" onClick={() => setTiles((ts) => [...ts, { id: `t${Date.now()}`, title: `Tile ${ts.length + 1}`, h: 40 + ((ts.length * 17) % 48), color: ['#4f46e5', '#059669', '#d97706', '#7c3aed'][ts.length % 4] }])} className={`ml-auto min-h-[36px] px-3 rounded-lg font-semibold flex items-center gap-1 text-white cursor-pointer ${palette.bg}`}>
          <Plus className="w-3.5 h-3.5" /> Add tile
        </button>
      </div>
      <div className="flex gap-2 items-start">
        {columns.map((col, ci) => (
          <div key={ci} className="flex-1 flex flex-col gap-2">
            {col.map((t) => (
              <div key={t.id} className="relative rounded-xl text-white font-bold p-2 flex items-start" style={{ height: t.h, backgroundColor: t.color }}>
                {t.title}
                <button type="button" aria-label={`Remove ${t.title}`} onClick={() => setTiles((ts) => ts.filter((x) => x.id !== t.id))} className="absolute top-1 right-1 min-h-[28px] min-w-[28px] flex items-center justify-center rounded-md bg-black/20 hover:bg-black/30 cursor-pointer"><X className="w-3.5 h-3.5" /></button>
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className="text-[11px] text-slate-500">{tiles.length} tiles · shortest-column packing</p>
    </div>
  );
};
