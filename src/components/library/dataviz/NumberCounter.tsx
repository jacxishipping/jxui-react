// @jxui/react v3.0.0 — NumberCounter (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 17. NumberCounter — a real count-up counter: animates from 0 to `value`
// on mount (or when the value changes), and jumps straight there under
// prefers-reduced-motion. A replay button restarts the animation.
export const NumberCounter: React.FC<{ value?: number }> = ({ value = 14209 }) => {
  const { palette } = useJXTheme();
  const [display, setDisplay] = useState(0);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return;
    }
    const start = performance.now();
    const duration = 900;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, run]);

  return (
    <div className="flex items-center gap-3">
      <div className={`font-mono text-xl font-bold tabular-nums ${palette.text}`} aria-live="polite">
        {display.toLocaleString()}
      </div>
      <button
        type="button"
        onClick={() => setRun((r) => r + 1)}
        className="min-h-[32px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
      >
        Replay
      </button>
    </div>
  );
};
