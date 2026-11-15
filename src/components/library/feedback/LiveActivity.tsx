// @jxui/react v3.0.0 — LiveActivity (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';

// 10. LiveActivity — a live activity pill with a ticking token rate and a
// scrolling feed of deterministic events; pause to freeze the stream.
const EVENTS = [
  'Compiled JXButton.tsx',
  'Tokens exported to JSON',
  'Canary shifted to 25%',
  'Health check passed',
  'Snapshot saved',
  'Lint finished: 0 errors',
];
const RATES = [42, 47, 39, 51, 44, 48];

export const LiveActivity: React.FC = () => {
  const [paused, setPaused] = useState(false);
  const [tick, setTick] = useState(0);
  const [feed, setFeed] = useState<string[]>([EVENTS[0]]);

  useEffect(() => {
    if (paused) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      setTick((t) => t + 1);
      setFeed((f) => [EVENTS[(f.length + 1) % EVENTS.length], ...f].slice(0, 4));
    }, 2000);
    return () => clearInterval(id);
  }, [paused]);

  const rate = RATES[tick % RATES.length];

  return (
    <div className="w-full space-y-2">
      <div className="flex flex-wrap items-center gap-2">
        <div className="inline-flex items-center gap-2 px-3 py-2 bg-black text-white rounded-full text-xs shadow-xl">
          <span className={`w-2 h-2 rounded-full bg-emerald-500 ${paused ? '' : 'animate-ping'}`} />
          <span>AI Inference {paused ? 'Paused' : 'in Progress'} • {rate} tok/s</span>
        </div>
        <button
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((v) => !v)}
          className="min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"
        >
          {paused ? 'Resume' : 'Pause'}
        </button>
      </div>
      <ul className="space-y-1" aria-live="polite">
        {feed.map((event, i) => (
          <li key={`${event}-${i}`} className={`flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 ${i === 0 ? 'font-semibold' : 'opacity-70'}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-600'}`} />
            {event}
            {i === 0 && <span className="font-mono text-[10px] text-slate-400">just now</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};
