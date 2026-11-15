// @jxui/react v3.0.0 — MorphTransition (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 2. MorphTransition — a shape that morphs between circle, square, diamond
// and pill on click (or automatically), with a smooth radius/rotation/scale
// transition and the current shape named.
const SHAPES = [
  { name: 'Circle', radius: '50%', rotate: 0, scale: 1 },
  { name: 'Square', radius: '16%', rotate: 90, scale: 1 },
  { name: 'Diamond', radius: '20%', rotate: 45, scale: 0.92 },
  { name: 'Pill', radius: '999px', rotate: 0, scale: 1.1 },
];

export const MorphTransition: React.FC = () => {
  const { palette } = useJXTheme();
  const [shape, setShape] = useState(0);
  const [auto, setAuto] = useState(false);

  useEffect(() => {
    if (!auto) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setAuto(false);
      return;
    }
    const id = setInterval(() => setShape((s) => (s + 1) % SHAPES.length), 1200);
    return () => clearInterval(id);
  }, [auto]);

  const current = SHAPES[shape];
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => setShape((s) => (s + 1) % SHAPES.length)}
        aria-label={`Morph shape, currently ${current.name}. Click for the next shape.`}
        className="w-16 h-16 min-w-[64px] min-h-[64px] shrink-0 transition-all duration-500 ease-in-out flex items-center justify-center text-white text-xs font-bold cursor-pointer"
        style={{ backgroundColor: palette.hex, borderRadius: current.radius, transform: `rotate(${current.rotate}deg) scale(${current.scale})` }}
      >
        {current.name}
      </button>
      <div className="flex flex-col gap-1.5 items-start">
        <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
          Morph · {current.name} {shape + 1}/{SHAPES.length}
        </span>
        <button
          type="button"
          onClick={() => setAuto((a) => !a)}
          aria-pressed={auto}
          className="min-h-[36px] px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
        >
          {auto ? 'Stop auto-morph' : 'Auto-morph'}
        </button>
      </div>
    </div>
  );
};
