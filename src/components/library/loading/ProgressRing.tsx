// @jxui/react v3.0.0 — ProgressRing (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 10. ProgressRing — an SVG ring that fills 0→100% with a live percentage,
// a pause/resume button and a replay button. Jumps straight to 100% under
// prefers-reduced-motion.
const R = 14;
const CIRC = 2 * Math.PI * R;

export const ProgressRing: React.FC = () => {
  const { palette } = useJXTheme();
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const done = progress >= 100;

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(100);
      return;
    }
    if (paused) return;
    const id = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : Math.min(100, p + 1)));
    }, 40);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div className="flex items-center gap-3">
      <div className="relative w-16 h-16 flex items-center justify-center font-mono text-xs font-bold shrink-0" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="Progress ring">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r={R} fill="none" className="stroke-slate-200 dark:stroke-slate-800" strokeWidth="3" />
          <circle
            cx="18"
            cy="18"
            r={R}
            fill="none"
            stroke={done ? '#059669' : palette.hex}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            strokeDashoffset={CIRC - (progress / 100) * CIRC}
            className="transition-all duration-100"
          />
        </svg>
        <span className="absolute text-slate-800 dark:text-slate-100">{progress}%</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{done ? 'Complete' : paused ? 'Paused' : 'Loading…'}</span>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            disabled={done}
            className="min-h-[36px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-200 cursor-pointer disabled:opacity-50"
          >
            {paused ? 'Resume' : 'Pause'}
          </button>
          <button
            type="button"
            onClick={() => {
              setProgress(0);
              setPaused(false);
            }}
            className="min-h-[36px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
          >
            Replay
          </button>
        </div>
      </div>
    </div>
  );
};
