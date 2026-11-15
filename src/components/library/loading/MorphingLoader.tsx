// @jxui/react v3.0.0 — MorphingLoader (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 2. MorphingLoader — a shape that continuously morphs circle → rounded
// square → diamond → pill, with the current shape named beside it. Frozen
// on the circle under prefers-reduced-motion.
const SHAPES = [
  { name: 'Circle', radius: '50%', rotate: 0 },
  { name: 'Square', radius: '12%', rotate: 90 },
  { name: 'Diamond', radius: '18%', rotate: 45 },
  { name: 'Pill', radius: '999px', rotate: 0 },
];

export const MorphingLoader: React.FC = () => {
  const { palette } = useJXTheme();
  const [shape, setShape] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setShape((s) => (s + 1) % SHAPES.length), 700);
    return () => clearInterval(id);
  }, []);

  const current = SHAPES[shape];
  return (
    <div className="flex items-center gap-2.5" role="status" aria-label={`Loading, morphing ${current.name}`}>
      <div
        className="w-8 h-8 transition-all duration-500 ease-in-out"
        style={{ backgroundColor: palette.hex, borderRadius: current.radius, transform: `rotate(${current.rotate}deg)` }}
      />
      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Morphing · {current.name}</span>
    </div>
  );
};
