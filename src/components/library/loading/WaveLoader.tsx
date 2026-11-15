// @jxui/react v3.0.0 — WaveLoader (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 5. WaveLoader — seven bars whose heights follow a travelling sine wave,
// driven by a timer so the wave really moves. Pause freezes the wave;
// reduced motion shows a static wave.
const BARS = 7;

export const WaveLoader: React.FC = () => {
  const { palette } = useJXTheme();
  const [phase, setPhase] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPaused(true);
      return;
    }
    if (paused) return;
    const id = setInterval(() => setPhase((p) => p + 0.45), 70);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div className="flex items-center gap-3" role="status" aria-label="Loading, wave">
      <div className="flex items-end gap-1 h-8">
        {Array.from({ length: BARS }, (_, i) => {
          const h = 8 + (Math.sin(phase + i * 0.9) + 1) * 11;
          return (
            <div
              key={i}
              className="w-1.5 rounded-full transition-all duration-75"
              style={{ height: h, backgroundColor: palette.hex, opacity: 0.45 + (h / 30) * 0.55 }}
            />
          );
        })}
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        className="min-h-[36px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
      >
        {paused ? 'Resume wave' : 'Pause wave'}
      </button>
    </div>
  );
};
