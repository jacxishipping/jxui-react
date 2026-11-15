// @jxui/react v3.0.0 — CircularProgress (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check } from 'lucide-react';

// 11. CircularProgress — an SVG ring that really fills 0→100%, shows the
// percentage, flashes a check at 100% and starts over. Pauses (static 70%)
// under prefers-reduced-motion.
const R = 16;
const CIRC = 2 * Math.PI * R;

export const CircularProgress: React.FC = () => {
  const { palette } = useJXTheme();
  const [progress, setProgress] = useState(0);
  const done = progress >= 100;

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(70);
      return;
    }
    const id = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : Math.min(100, p + 2)));
    }, 60);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-2" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="Circular progress">
      <div className="relative w-12 h-12 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r={R} fill="none" className="stroke-slate-200 dark:stroke-slate-800" strokeWidth="3.5" />
          <circle
            cx="20"
            cy="20"
            r={R}
            fill="none"
            stroke={palette.hex}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            strokeDashoffset={CIRC - (progress / 100) * CIRC}
            className="transition-all duration-150"
          />
        </svg>
        {done ? (
          <Check className="absolute w-5 h-5 text-emerald-500" aria-hidden="true" />
        ) : (
          <span className="absolute font-mono text-[11px] font-bold text-slate-700 dark:text-slate-200">{progress}%</span>
        )}
      </div>
      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{done ? 'Done' : 'Loading…'}</span>
    </div>
  );
};
