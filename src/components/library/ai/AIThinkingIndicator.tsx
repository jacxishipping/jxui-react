// @jxui/react v3.0.0 — AIThinkingIndicator (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, X, Play } from 'lucide-react';

// 4. AIThinkingIndicator — the agent is thinking: animated dots, a rotating
// status line, an elapsed timer, and a stop button. Expand to see the
// thinking trace appear line by line.
const STATUSES = [
  'Reasoning across codebase…',
  'Reading catalog290.ts…',
  'Checking theme tokens…',
  'Verifying zero CLS…',
  'Composing the answer…',
];
const TRACE = [
  '→ scanned 18 categories',
  '→ found 12 interactive primitives',
  '→ 219 mockups remain',
  '→ cross-checked the audit file',
];

export const AIThinkingIndicator: React.FC = () => {
  const { palette } = useJXTheme();
  const [thinking, setThinking] = useState(true);
  const [statusIdx, setStatusIdx] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [traceLines, setTraceLines] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!thinking) return;
    const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setTraceLines(TRACE.length); return; }
    const statusTimer = window.setInterval(() => setStatusIdx((i) => (i + 1) % STATUSES.length), 1800);
    const clock = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    const traceTimer = window.setInterval(() => setTraceLines((n) => Math.min(TRACE.length, n + 1)), 1200);
    return () => { window.clearInterval(statusTimer); window.clearInterval(clock); window.clearInterval(traceTimer); };
  }, [thinking]);

  const stop = () => setThinking(false);
  const restart = () => { setThinking(true); setSeconds(0); setStatusIdx(0); setTraceLines(0); };

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 space-y-2 text-xs">
      <div className="flex items-center gap-2">
        <Sparkles className={`w-4 h-4 shrink-0 ${thinking ? 'animate-spin' : ''}`} style={{ color: palette.hex }} />
        <span className="font-semibold text-slate-800 dark:text-slate-200">
          {thinking ? STATUSES[statusIdx] : 'Done thinking.'}
        </span>
        <span className="ml-auto font-mono text-[11px] text-slate-400">{seconds}s</span>
        {thinking ? (
          <button type="button" onClick={stop} className="min-h-[36px] px-2.5 inline-flex items-center gap-1 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">
            <X className="w-3.5 h-3.5" /> Stop
          </button>
        ) : (
          <button type="button" onClick={restart} className={`min-h-[36px] px-2.5 inline-flex items-center gap-1 rounded-lg text-white font-semibold cursor-pointer ${palette.bg}`}>
            <Play className="w-3.5 h-3.5" /> Think again
          </button>
        )}
      </div>
      <div className="flex items-center gap-1.5" aria-label="Thinking animation">
        {[0, 1, 2].map((i) => (
          <span key={i} className={`w-2 h-2 rounded-full ${thinking ? 'animate-bounce' : 'opacity-30'}`} style={{ backgroundColor: palette.hex, animationDelay: `${i * 150}ms` }} />
        ))}
        <span className="text-[11px] text-slate-400 ml-1">{thinking ? 'Working through the reasoning steps…' : 'Answer ready.'}</span>
      </div>
      <button type="button" onClick={() => setExpanded((e) => !e)} aria-expanded={expanded} className="min-h-[36px] font-semibold text-slate-600 dark:text-slate-300 cursor-pointer">
        {expanded ? 'Hide thinking trace' : 'Show thinking trace'}
      </button>
      {expanded && (
        <div className="rounded-lg bg-slate-950 p-2.5 font-mono text-[11px] text-emerald-300 space-y-1">
          {TRACE.slice(0, traceLines).map((line) => (<div key={line}>{line}</div>))}
          {traceLines === 0 && <div className="text-slate-500">No trace lines yet…</div>}
          {traceLines === TRACE.length && <div className="text-slate-400">✓ trace complete</div>}
        </div>
      )}
    </div>
  );
};
