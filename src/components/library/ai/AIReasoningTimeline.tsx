// @jxui/react v3.0.0 — AIReasoningTimeline (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { CheckCircle2, Loader2, Circle, ChevronDown, Play, RotateCcw } from 'lucide-react';

// 9. AIReasoningTimeline — the agent's reasoning steps: press Run and the
// steps complete one by one with elapsed time. Expand a step for its detail.
interface Step { title: string; detail: string; ms: number; }
const STEPS: Step[] = [
  { title: 'Read component specifications', detail: 'Parsed catalog.ts and unifiedCatalog.ts — 61 showcases, 300 primitives.', ms: 320 },
  { title: 'Generated TypeScript interfaces', detail: 'Emitted prop types for the 14 style-prop components.', ms: 540 },
  { title: 'Verifying zero CLS metrics', detail: 'Checked pre-allocated geometry on all 361 preview stages.', ms: 410 },
  { title: 'Synthesised the response', detail: 'Composed the summary from verified audit findings only.', ms: 260 },
];

export const AIReasoningTimeline: React.FC = () => {
  const { palette } = useJXTheme();
  const [done, setDone] = useState(0);
  const [running, setRunning] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(2);
  const [elapsed, setElapsed] = useState(0);
  const timers = useRef<number[]>([]);

  useEffect(() => () => { timers.current.forEach((t) => window.clearTimeout(t)); }, []);

  const run = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
    setDone(0);
    setElapsed(0);
    setRunning(true);
    const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setDone(STEPS.length);
      setElapsed(STEPS.reduce((s, x) => s + x.ms, 0));
      setRunning(false);
      return;
    }
    let acc = 0;
    STEPS.forEach((step, i) => {
      acc += step.ms;
      timers.current.push(window.setTimeout(() => {
        setDone(i + 1);
        setElapsed(acc);
        if (i === STEPS.length - 1) setRunning(false);
      }, acc));
    });
  };

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 space-y-2 text-xs">
      <div className="flex items-center justify-between">
        <span className="font-bold text-slate-800 dark:text-slate-200">Reasoning timeline</span>
        <span className="font-mono text-[11px] text-slate-400">{done}/{STEPS.length} steps · {(elapsed / 1000).toFixed(2)}s</span>
      </div>
      <div className="border-l-2 pl-3 space-y-1" style={{ borderColor: palette.hex }}>
        {STEPS.map((step, i) => {
          const state = i < done ? 'done' : i === done && running ? 'active' : 'pending';
          return (
            <div key={step.title} className="relative">
              <span className="absolute -left-[19px] top-1.5 w-3 h-3 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                {state === 'done' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> : state === 'active' ? <Loader2 className="w-3.5 h-3.5 animate-spin" style={{ color: palette.hex }} /> : <Circle className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />}
              </span>
              <button
                type="button"
                onClick={() => setExpanded((e) => (e === i ? null : i))}
                aria-expanded={expanded === i}
                className={`w-full min-h-[36px] flex items-center gap-2 text-left rounded-lg px-1 cursor-pointer ${state === 'done' ? 'text-slate-700 dark:text-slate-200' : state === 'active' ? `font-bold ${palette.text}` : 'text-slate-400'}`}
              >
                <span className="flex-1 min-w-0 truncate">{i + 1}. {step.title}</span>
                <span className="font-mono text-[11px] text-slate-400 shrink-0">{step.ms}ms</span>
                <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform ${expanded === i ? 'rotate-180' : ''}`} />
              </button>
              {expanded === i && <p className="pl-1 pb-1 text-[11px] text-slate-500 leading-relaxed">{step.detail}</p>}
            </div>
          );
        })}
      </div>
      <div className="flex gap-2">
        <button type="button" onClick={run} disabled={running} className={`min-h-[44px] px-4 inline-flex items-center gap-1.5 rounded-lg text-white font-semibold cursor-pointer disabled:opacity-50 ${palette.bg}`}>
          <Play className="w-4 h-4" /> {done === STEPS.length ? 'Run again' : running ? 'Reasoning…' : 'Run reasoning'}
        </button>
        <button type="button" onClick={() => { timers.current.forEach((t) => window.clearTimeout(t)); setDone(0); setElapsed(0); setRunning(false); }} className="min-h-[44px] px-3 inline-flex items-center gap-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">
          <RotateCcw className="w-4 h-4" /> Reset
        </button>
      </div>
    </div>
  );
};
