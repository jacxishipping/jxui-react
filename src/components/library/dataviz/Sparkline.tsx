// @jxui/react v3.0.0 — Sparkline (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 18. Sparkline — a live sparkline: a new point arrives every 1.5s, the line
// redraws and the current value + delta update. Pauses when the tab is
// hidden, and stops entirely under prefers-reduced-motion.
const INITIAL = [12, 18, 15, 22, 19, 26, 24, 30, 27, 34];

export const Sparkline: React.FC = () => {
  const { palette } = useJXTheme();
  const [points, setPoints] = useState(INITIAL);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPaused(true);
      return;
    }
    const id = setInterval(() => {
      if (document.hidden) return;
      setPoints((p) => {
        const next = Math.max(4, Math.min(38, p[p.length - 1] + Math.round((Math.random() - 0.45) * 8)));
        return [...p.slice(1), next];
      });
    }, 1500);
    return () => clearInterval(id);
  }, [paused]);

  const max = 40;
  const d = points.map((v, i) => `${i === 0 ? 'M' : 'L'} ${(i / (points.length - 1)) * 100} ${40 - (v / max) * 36}`).join(' ');
  const last = points[points.length - 1];
  const first = points[0];
  const delta = last - first;

  return (
    <div className="w-full flex items-center gap-3">
      <svg className="w-28 h-10 shrink-0" viewBox="0 0 100 40" preserveAspectRatio="none" role="img" aria-label={`Sparkline, current value ${last}`}>
        <path d={d} fill="none" stroke={palette.hex} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
        <circle cx="100" cy={40 - (last / max) * 36} r="2.5" fill={palette.hex} />
      </svg>
      <div className="text-xs">
        <div className="font-mono font-bold text-slate-900 dark:text-white text-base leading-none">{last}</div>
        <div className={`font-mono text-[11px] ${delta >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
          {delta >= 0 ? '▲' : '▼'} {Math.abs(delta)} {paused ? '· paused' : '· live'}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        className="ml-auto min-h-[32px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
      >
        {paused ? 'Resume' : 'Pause'}
      </button>
    </div>
  );
};
