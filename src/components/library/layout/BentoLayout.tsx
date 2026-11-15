// @jxui/react v3.0.0 — BentoLayout (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Shuffle, Maximize2 } from 'lucide-react';

// 10. BentoLayout — a bento grid: click a tile to expand it to hero size,
// shuffle reorders the tiles.
const INITIAL = [
  { id: 'hero', title: 'Hero Tile', body: 'Requests served this week', value: '1.2M', big: true },
  { id: 'stat1', title: 'Stat', body: 'Uptime', value: '99.99%', big: false },
  { id: 'stat2', title: 'Stat', body: 'p99 latency', value: '12 ms', big: false },
  { id: 'stat3', title: 'Stat', body: 'Active users', value: '8,412', big: false },
];

export const BentoLayout: React.FC = () => {
  const { palette } = useJXTheme();
  const [tiles, setTiles] = useState(INITIAL);
  const [hero, setHero] = useState('hero');

  const shuffle = () => {
    setTiles((ts) => {
      const next = [...ts];
      for (let i = next.length - 1; i > 0; i--) {
        const j = (i * 7 + 3) % (i + 1);
        [next[i], next[j]] = [next[j], next[i]];
      }
      return next;
    });
  };

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="flex justify-end">
        <button type="button" onClick={shuffle} className={`min-h-[36px] px-3 rounded-lg font-semibold flex items-center gap-1.5 text-white cursor-pointer ${palette.bg}`}>
          <Shuffle className="w-3.5 h-3.5" /> Shuffle tiles
        </button>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {tiles.map((t) => {
          const isHero = hero === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setHero(t.id)}
              aria-pressed={isHero}
              className={`min-h-[44px] p-2.5 border rounded-xl text-left cursor-pointer transition-all ${isHero ? `col-span-2 row-span-2 ${palette.softBg} ${palette.border} border` : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'}`}
            >
              <span className="flex items-center gap-1 font-bold text-slate-800 dark:text-slate-200">{t.title} <Maximize2 className="w-3 h-3 text-slate-400" /></span>
              <span className="block text-slate-500">{t.body}</span>
              <span className={`block font-mono font-bold ${isHero ? 'text-lg' : 'text-sm'} ${palette.text}`}>{t.value}</span>
            </button>
          );
        })}
      </div>
      <p className="text-[11px] text-slate-500">Click a tile to make it the hero tile.</p>
    </div>
  );
};
