// @jxui/react v3.0.0 — AnimatedGradient (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 10. AnimatedGradient — a gradient whose angle really rotates on a timer,
// with switchable colour palettes (built from the live theme accent) and a
// play/pause control. Static angle under prefers-reduced-motion.
const PALETTES = [
  { name: 'Accent', stops: ['accent', '#7c3aed', '#ec4899'] },
  { name: 'Ocean', stops: ['#0284c7', '#06b6d4', '#059669'] },
  { name: 'Sunset', stops: ['#f59e0b', '#ef4444', '#7c3aed'] },
];

export const AnimatedGradient: React.FC = () => {
  const { palette } = useJXTheme();
  const [angle, setAngle] = useState(90);
  const [paletteIdx, setPaletteIdx] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPlaying(false);
      return;
    }
    if (!playing) return;
    const id = setInterval(() => setAngle((a) => (a + 3) % 360), 50);
    return () => clearInterval(id);
  }, [playing]);

  const stops = PALETTES[paletteIdx].stops.map((s) => (s === 'accent' ? palette.hex : s));
  return (
    <div className="w-full space-y-2">
      <div
        className="w-full h-14 rounded-lg transition-all duration-100 flex items-end p-2"
        style={{ background: `linear-gradient(${angle}deg, ${stops[0]}, ${stops[1]}, ${stops[2]})` }}
        role="img"
        aria-label={`Animated gradient, ${PALETTES[paletteIdx].name} palette, angle ${angle} degrees`}
      >
        <span className="text-[11px] font-mono font-bold text-white drop-shadow">{PALETTES[paletteIdx].name} · {angle}°</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {PALETTES.map((p, i) => (
          <button
            key={p.name}
            type="button"
            onClick={() => setPaletteIdx(i)}
            aria-pressed={paletteIdx === i}
            className={`min-h-[36px] px-2.5 py-1 rounded-lg text-[11px] font-semibold cursor-pointer ${
              paletteIdx === i ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
            }`}
          >
            {p.name}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-pressed={playing}
          className="min-h-[36px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
        >
          {playing ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};
