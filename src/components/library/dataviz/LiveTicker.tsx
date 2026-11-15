// @jxui/react v3.0.0 — LiveTicker (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 16. LiveTicker — a real ticking price: a new tick every 1.5s from a seeded
// start, with direction colour, a mini sparkline of recent ticks and a
// pause button. Pauses under prefers-reduced-motion and when hidden.
const START = 1489.2;

export const LiveTicker: React.FC = () => {
  const { palette } = useJXTheme();
  const [price, setPrice] = useState(START);
  const [history, setHistory] = useState<number[]>([1482.4, 1485.1, 1483.8, 1487.6, 1489.2]);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPaused(true);
      return;
    }
    if (paused) return;
    const id = setInterval(() => {
      if (document.hidden) return;
      setPrice((p) => {
        const next = Math.max(1400, Math.min(1560, p + (Math.random() - 0.48) * 6));
        setHistory((h) => [...h.slice(-19), next]);
        return next;
      });
    }, 1500);
    return () => clearInterval(id);
  }, [paused]);

  const change = ((price - START) / START) * 100;
  const up = change >= 0;
  const min = Math.min(...history);
  const max = Math.max(...history);
  const d = history.map((v, i) => `${i === 0 ? 'M' : 'L'} ${(i / (history.length - 1)) * 100} ${38 - ((v - min) / Math.max(1, max - min)) * 32}`).join(' ');

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center gap-2 font-mono text-xs">
        <span className="font-bold text-slate-900 dark:text-white">JX/USD</span>
        <span className={`font-semibold ${up ? 'text-emerald-500' : 'text-rose-500'}`} aria-live="polite">
          ${price.toFixed(2)}
        </span>
        <span className={`text-[11px] px-1.5 py-0.5 rounded ${up ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950' : 'text-rose-600 bg-rose-50 dark:bg-rose-950'}`}>
          {up ? '+' : ''}
          {change.toFixed(1)}%
        </span>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          className="ml-auto min-h-[36px] px-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
        >
          {paused ? 'Resume' : 'Pause'}
        </button>
      </div>
      <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-10" role="img" aria-label="Recent price ticks">
        <path d={d} fill="none" stroke={palette.hex} strokeWidth="1.5" />
      </svg>
      <p className="text-[11px] text-slate-500">Seeded at $1,489.20 · ticks every 1.5s{paused ? ' · paused' : ''}</p>
    </div>
  );
};
