// @jxui/react v3.0.0 — MosaicGrid (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { Shuffle } from 'lucide-react';

// 9. MosaicGrid — a mosaic grid: tiles in a 4-column mosaic; click a tile
// to cycle it between small / wide / tall, shuffle reorders the mosaic.
type Tile = { id: string; label: string; color: string; span: 0 | 1 | 2 };
const INITIAL: Tile[] = [
  { id: 'a', label: 'A', color: '#4f46e5', span: 1 },
  { id: 'b', label: 'B', color: '#7c3aed', span: 0 },
  { id: 'c', label: 'C', color: '#059669', span: 0 },
  { id: 'd', label: 'D', color: '#d97706', span: 2 },
  { id: 'e', label: 'E', color: '#0284c7', span: 0 },
  { id: 'f', label: 'F', color: '#e11d48', span: 0 },
];

export const MosaicGrid: React.FC = () => {
  const [tiles, setTiles] = useState(INITIAL);
  const cycle = (id: string) => setTiles((ts) => ts.map((t) => (t.id === id ? { ...t, span: ((t.span + 1) % 3) as 0 | 1 | 2 } : t)));
  const shuffle = () => setTiles((ts) => { const next = [...ts]; for (let i = next.length - 1; i > 0; i--) { const j = (i * 5 + 2) % (i + 1); [next[i], next[j]] = [next[j], next[i]]; } return next; });

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="flex justify-end">
        <button type="button" onClick={shuffle} className="min-h-[36px] px-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-200"><Shuffle className="w-3.5 h-3.5" /> Shuffle</button>
      </div>
      <div className="grid grid-cols-4 auto-rows-[44px] gap-1.5">
        {tiles.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => cycle(t.id)}
            aria-label={`Tile ${t.label}, ${t.span === 0 ? 'small' : t.span === 1 ? 'wide' : 'tall'} — click to resize`}
            className={`min-h-[44px] rounded-lg text-white font-bold flex items-center justify-center cursor-pointer transition-all ${t.span === 1 ? 'col-span-2' : t.span === 2 ? 'row-span-2' : ''}`}
            style={{ backgroundColor: t.color }}
          >
            {t.label}
          </button>
        ))}
      </div>
      <p className="text-[11px] text-slate-500">Click a tile to cycle small → wide → tall.</p>
    </div>
  );
};
