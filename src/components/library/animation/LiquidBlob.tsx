// @jxui/react v3.0.0 — LiquidBlob (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 11. LiquidBlob — a blob that continuously morphs its border-radius
// (organic liquid shapes) on a timer. "Splash" jumps to the next shape
// immediately. Frozen on the first shape under prefers-reduced-motion.
const BLOBS = [
  '62% 38% 55% 45% / 48% 55% 45% 52%',
  '38% 62% 42% 58% / 60% 38% 62% 40%',
  '55% 45% 68% 32% / 42% 60% 40% 58%',
  '45% 55% 35% 65% / 58% 45% 55% 42%',
];

export const LiquidBlob: React.FC = () => {
  const { palette } = useJXTheme();
  const [shape, setShape] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setShape((s) => (s + 1) % BLOBS.length), 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-3">
      <div
        className="w-20 h-20 transition-all duration-1000 ease-in-out shrink-0"
        style={{
          borderRadius: BLOBS[shape],
          background: `linear-gradient(135deg, ${palette.hex}, #ec4899)`,
          boxShadow: `0 8px 24px -6px ${palette.hex}88`,
        }}
        role="img"
        aria-label={`Liquid blob, shape ${shape + 1} of ${BLOBS.length}`}
      />
      <div className="flex flex-col gap-1.5 items-start">
        <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Liquid blob · shape {shape + 1}/{BLOBS.length}</span>
        <button
          type="button"
          onClick={() => setShape((s) => (s + 1) % BLOBS.length)}
          className="min-h-[36px] px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
        >
          Splash
        </button>
      </div>
    </div>
  );
};
