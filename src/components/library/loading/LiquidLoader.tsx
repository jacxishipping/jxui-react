// @jxui/react v3.0.0 — LiquidLoader (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 1. LiquidLoader — a glass that fills with liquid: the fill level rises
// 0→100% with a wavy surface, then drains and refills. Static 60% fill
// under prefers-reduced-motion.
export const LiquidLoader: React.FC = () => {
  const { palette } = useJXTheme();
  const [fill, setFill] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setFill(60);
      return;
    }
    const id = setInterval(() => {
      setFill((f) => (f >= 100 ? 0 : Math.min(100, f + 1.5)));
    }, 50);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-end gap-2.5" role="progressbar" aria-valuenow={Math.round(fill)} aria-valuemin={0} aria-valuemax={100} aria-label="Liquid loading">
      <div className="relative w-10 h-12 rounded-b-xl rounded-t-sm border-2 border-slate-300 dark:border-slate-700 overflow-hidden bg-white/60 dark:bg-slate-900/60">
        <div
          className="absolute bottom-0 left-0 right-0 transition-all duration-100"
          style={{ height: `${fill}%`, background: `linear-gradient(180deg, ${palette.hex}cc, ${palette.hex})` }}
        >
          <div className="absolute -top-1.5 left-0 right-0 h-3 rounded-[50%] bg-white/30 dark:bg-white/20 animate-pulse" />
        </div>
        <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] font-bold text-slate-700 dark:text-slate-200 mix-blend-difference text-white">
          {Math.round(fill)}%
        </span>
      </div>
      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 pb-0.5">Filling…</span>
    </div>
  );
};
