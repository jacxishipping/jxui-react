// @jxui/react v3.0.0 — GradientLoader (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 6. GradientLoader — a conic-gradient ring that spins, with a status line
// that cycles through real loading phases. Uses the live theme accent.
const PHASES = ['Loading…', 'Fetching tokens…', 'Indexing symbols…', 'Almost there…'];

export const GradientLoader: React.FC = () => {
  const { palette } = useJXTheme();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setPhase((p) => (p + 1) % PHASES.length), 1200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-2.5" role="status" aria-label="Loading">
      <div
        className="w-8 h-8 rounded-full animate-spin shrink-0"
        style={{ background: `conic-gradient(from 0deg, ${palette.hex}, #7c3aed, #ec4899, transparent 75%)` }}
      >
        <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 scale-[0.72]" />
      </div>
      <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{PHASES[phase]}</span>
    </div>
  );
};
