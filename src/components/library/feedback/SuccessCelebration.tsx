// @jxui/react v3.0.0 — SuccessCelebration (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { PartyPopper, RotateCcw } from 'lucide-react';

// 14. SuccessCelebration — run the tests and watch the suite counter
// count up 0 → 12; when all pass, the celebration card appears. Replay
// resets it. Confetti dots are suppressed under reduced-motion.
const TOTAL = 12;
const CONFETTI = [
  { left: '8%', color: 'bg-emerald-500', delay: '0s' },
  { left: '22%', color: 'bg-amber-500', delay: '0.15s' },
  { left: '38%', color: 'bg-sky-500', delay: '0.3s' },
  { left: '55%', color: 'bg-rose-500', delay: '0.1s' },
  { left: '70%', color: 'bg-violet-500', delay: '0.25s' },
  { left: '86%', color: 'bg-emerald-500', delay: '0.05s' },
];

export const SuccessCelebration: React.FC = () => {
  const [passed, setPassed] = useState(0);
  const [running, setRunning] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }
  }, []);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setPassed((p) => {
        const next = Math.min(TOTAL, p + 1);
        if (next >= TOTAL) {
          clearInterval(id);
          setRunning(false);
          setCelebrating(true);
        }
        return next;
      });
    }, 160);
    return () => clearInterval(id);
  }, [running]);

  return (
    <div className="w-full space-y-2">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => {
            setPassed(0);
            setCelebrating(false);
            setRunning(true);
          }}
          disabled={running}
          className="min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-600 text-white cursor-pointer disabled:opacity-60 disabled:cursor-default"
        >
          {running ? `Running… ${passed}/${TOTAL}` : passed === TOTAL ? 'Run tests again' : 'Run tests'}
        </button>
        {passed > 0 && !celebrating && (
          <span className="text-xs text-slate-500 font-mono">{passed} / {TOTAL} suites passed</span>
        )}
      </div>
      <div className="relative overflow-hidden flex items-center gap-2 px-3 py-2 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-lg text-xs text-emerald-700 dark:text-emerald-300 font-semibold min-h-[44px]">
        {celebrating && !reduced && CONFETTI.map((c, i) => (
          <span
            key={i}
            className={`absolute top-1 w-2 h-2 rounded-full ${c.color} animate-bounce`}
            style={{ left: c.left, animationDelay: c.delay }}
          />
        ))}
        <PartyPopper className="w-4 h-4 text-emerald-500 shrink-0" />
        <span>
          {celebrating
            ? `All ${TOTAL} Test Suites Passed!`
            : running
              ? `${passed} of ${TOTAL} suites passed so far…`
              : 'No test run yet — hit Run tests.'}
        </span>
        {celebrating && (
          <button
            type="button"
            onClick={() => {
              setPassed(0);
              setCelebrating(false);
            }}
            className="ml-auto min-h-[36px] inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Replay
          </button>
        )}
      </div>
    </div>
  );
};
