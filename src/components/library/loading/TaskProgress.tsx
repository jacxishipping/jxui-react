// @jxui/react v3.0.0 — TaskProgress (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check, Loader2 } from 'lucide-react';

// 15. TaskProgress — a real task list: tasks complete one by one on a
// timer, each with its own state (pending / running / done), an overall
// progress bar, and a restart button. Completes instantly under reduced
// motion.
const TASKS = ['Index Symbols', 'Build token map', 'Verify contrast', 'Publish bundle'];

export const TaskProgress: React.FC = () => {
  const { palette } = useJXTheme();
  const [doneCount, setDoneCount] = useState(0);
  const allDone = doneCount >= TASKS.length;

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDoneCount(TASKS.length);
      return;
    }
    if (allDone) return;
    const id = setInterval(() => setDoneCount((c) => Math.min(TASKS.length, c + 1)), 1100);
    return () => clearInterval(id);
  }, [allDone]);

  return (
    <div className="w-full max-w-64 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-slate-800 dark:text-slate-200">Build tasks</span>
        <span className="font-mono text-slate-500">
          {doneCount}/{TASKS.length} {allDone ? '· Done' : ''}
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden" role="progressbar" aria-valuenow={doneCount} aria-valuemin={0} aria-valuemax={TASKS.length} aria-label="Task progress">
        <div className="h-full rounded-full bg-emerald-500 transition-all duration-500" style={{ width: `${(doneCount / TASKS.length) * 100}%` }} />
      </div>
      <ul className="space-y-1">
        {TASKS.map((task, i) => {
          const done = i < doneCount;
          const running = !allDone && i === doneCount;
          return (
            <li key={task} className="flex items-center gap-2 text-xs">
              {done ? (
                <Check className="w-4 h-4 text-emerald-500 shrink-0" aria-label="Done" />
              ) : running ? (
                <Loader2 className="w-4 h-4 shrink-0 animate-spin" style={{ color: palette.hex }} aria-label="Running" />
              ) : (
                <span className="w-4 h-4 rounded-full border-2 border-slate-300 dark:border-slate-700 shrink-0" aria-hidden="true" />
              )}
              <span className={done ? 'text-slate-400 line-through' : 'text-slate-700 dark:text-slate-200'}>{task}</span>
              {done && <span className="ml-auto font-mono text-emerald-600 font-bold text-[11px]">Done ✓</span>}
            </li>
          );
        })}
      </ul>
      {allDone && (
        <button
          type="button"
          onClick={() => setDoneCount(0)}
          className="min-h-[36px] w-full rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
        >
          Restart tasks
        </button>
      )}
    </div>
  );
};
