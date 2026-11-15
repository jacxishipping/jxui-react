// @jxui/react v3.0.0 — MultiStepProgress (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check, Loader2 } from 'lucide-react';

// 13. MultiStepProgress — a 4-step wizard that really advances: each step
// completes in turn, the current step spins, steps are clickable to jump,
// and a replay button restarts the flow.
const STEPS = ['Upload', 'Validate', 'Index', 'Publish'];

export const MultiStepProgress: React.FC = () => {
  const { palette } = useJXTheme();
  const [current, setCurrent] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCurrent(STEPS.length - 1);
      setDone(true);
      return;
    }
    if (done) return;
    const id = setInterval(() => {
      setCurrent((c) => {
        if (c >= STEPS.length - 1) {
          setDone(true);
          return c;
        }
        return c + 1;
      });
    }, 1400);
    return () => clearInterval(id);
  }, [done]);

  const reset = () => {
    setDone(false);
    setCurrent(0);
  };

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center gap-1.5 text-xs">
        {STEPS.map((label, i) => {
          const isDone = done || i < current;
          const isCurrent = !done && i === current;
          return (
            <React.Fragment key={label}>
              {i > 0 && <div className={`h-0.5 flex-1 rounded ${i <= current || done ? 'bg-emerald-500' : 'bg-slate-200 dark:bg-slate-800'}`} />}
              <button
                type="button"
                onClick={() => {
                  setCurrent(i);
                  setDone(false);
                }}
                aria-label={`Go to step ${i + 1}: ${label}${isDone ? ' (completed)' : isCurrent ? ' (in progress)' : ''}`}
                className="flex flex-col items-center gap-1 min-w-[44px] min-h-[44px] justify-center cursor-pointer"
              >
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-colors ${
                    isDone
                      ? 'bg-emerald-500 text-white'
                      : isCurrent
                        ? 'text-white'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                  style={isCurrent ? { backgroundColor: palette.hex } : undefined}
                >
                  {isDone ? <Check className="w-3.5 h-3.5" /> : isCurrent ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : i + 1}
                </span>
                <span className={`text-[10px] font-medium ${isCurrent ? palette.text : 'text-slate-500 dark:text-slate-400'}`}>{label}</span>
              </button>
            </React.Fragment>
          );
        })}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-mono text-slate-500">
          {done ? 'All steps complete' : `Step ${current + 1} of ${STEPS.length} · ${STEPS[current]}`}
        </span>
        <button type="button" onClick={reset} className="min-h-[36px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">
          Replay
        </button>
      </div>
    </div>
  );
};
