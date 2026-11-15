// @jxui/react v3.0.0 — SegmentedProgress (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 12. SegmentedProgress — five segments that fill one by one on a timer.
// Click a segment to jump to that level; the percentage and a replay
// button make the state visible. Fills instantly under reduced motion.
const SEGMENTS = 5;

export const SegmentedProgress: React.FC = () => {
  const { palette } = useJXTheme();
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setFilled(SEGMENTS);
      return;
    }
    const id = setInterval(() => {
      setFilled((f) => (f >= SEGMENTS ? SEGMENTS : f + 1));
    }, 700);
    return () => clearInterval(id);
  }, []);

  const pct = Math.round((filled / SEGMENTS) * 100);
  return (
    <div className="w-full max-w-56 space-y-1.5">
      <div className="flex items-center gap-1" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Segmented progress">
        {Array.from({ length: SEGMENTS }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setFilled(i + 1)}
            aria-label={`Set progress to segment ${i + 1} of ${SEGMENTS}`}
            className="flex-1 min-h-[36px] flex items-center cursor-pointer"
          >
            <span
              className={`w-full h-2 rounded-full transition-colors duration-300 ${i < filled ? '' : 'bg-slate-200 dark:bg-slate-800'}`}
              style={i < filled ? { backgroundColor: palette.hex } : undefined}
            />
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-slate-500">
          {filled} of {SEGMENTS} segments · {pct}%
        </span>
        <button
          type="button"
          onClick={() => setFilled(0)}
          className="min-h-[36px] px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
        >
          Replay
        </button>
      </div>
    </div>
  );
};
