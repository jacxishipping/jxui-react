// @jxui/react v3.0.0 — CountdownTimer (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 10. CountdownTimer — a real countdown: set a duration (1/5/10 min),
// start/pause/reset; it ticks every second, respects reduced motion (no
// smooth progress animation), and shows "Time's up" at zero.
const PRESETS = [
  { label: '1 min', seconds: 60 },
  { label: '5 min', seconds: 300 },
  { label: '10 min', seconds: 600 },
  { label: '1 h', seconds: 3600 },
] as const;

export const CountdownTimer: React.FC = () => {
  const { palette } = useJXTheme();
  const [total, setTotal] = useState(300);
  const [left, setLeft] = useState(300);
  const [running, setRunning] = useState(false);
  const endRef = useRef<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!running || endRef.current === null) return;
    const id = setInterval(() => {
      const remaining = Math.max(0, Math.round((endRef.current! - Date.now()) / 1000));
      setLeft(remaining);
      if (remaining === 0) {
        setRunning(false);
        endRef.current = null;
      }
    }, 250);
    return () => clearInterval(id);
  }, [running]);

  const start = () => {
    endRef.current = Date.now() + left * 1000;
    setRunning(true);
  };
  const pause = () => {
    setRunning(false);
    endRef.current = null;
  };
  const reset = (seconds?: number) => {
    const s = seconds ?? total;
    setTotal(s);
    setLeft(s);
    setRunning(false);
    endRef.current = null;
  };

  const d = Math.floor(left / 86400);
  const h = Math.floor((left % 86400) / 3600);
  const m = Math.floor((left % 3600) / 60);
  const s = left % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  const done = left === 0;
  const progress = total > 0 ? (left / total) * 100 : 0;

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="flex items-center gap-1.5 font-mono font-bold" role="timer" aria-live="polite">
        {[
          { value: `${pad(d)}d`, label: 'days' },
          { value: `${pad(h)}h`, label: 'hours' },
          { value: `${pad(m)}m`, label: 'minutes' },
          { value: `${pad(s)}s`, label: 'seconds' },
        ].map((unit) => (
          <div
            key={unit.label}
            className={`min-h-[36px] flex-1 flex items-center justify-center px-2 rounded-lg border ${
              done ? 'bg-emerald-50 dark:bg-emerald-950 border-emerald-300 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400' : `${palette.softBg} ${palette.border} border ${palette.text}`
            }`}
            aria-label={`${unit.value} ${unit.label}`}
          >
            {unit.value}
          </div>
        ))}
      </div>
      <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden" aria-hidden="true">
        <div
          className={`h-full rounded-full ${palette.bg} ${reducedMotion ? '' : 'transition-all duration-300'}`}
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        {PRESETS.map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => reset(p.seconds)}
            aria-pressed={total === p.seconds && left === p.seconds}
            className={`min-h-[36px] px-2.5 rounded-lg font-semibold cursor-pointer ${total === p.seconds ? `${palette.softBg} ${palette.text}` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
          >
            {p.label}
          </button>
        ))}
        <button
          type="button"
          onClick={running ? pause : start}
          disabled={done}
          className={`min-h-[44px] px-4 rounded-lg font-bold text-white cursor-pointer disabled:opacity-40 ${palette.bg}`}
        >
          {running ? 'Pause' : 'Start'}
        </button>
        <button type="button" onClick={() => reset()} className="min-h-[44px] px-4 rounded-lg font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer">
          Reset
        </button>
      </div>
      <p className="text-[11px] font-mono text-slate-500" aria-live="polite">
        {done ? "Time's up — countdown complete." : running ? 'Counting down…' : 'Paused. Set a duration and press Start.'}
      </p>
    </div>
  );
};
