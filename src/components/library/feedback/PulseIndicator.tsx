// @jxui/react v3.0.0 — PulseIndicator (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';

// 12. PulseIndicator — a pulsing status dot you can cycle through states
// (Live / Idle / Offline) with a ticking heartbeat timer.
const STATES = [
  { id: 'live', label: 'Live', dot: 'bg-emerald-500', ring: 'bg-emerald-400', text: 'text-emerald-600 dark:text-emerald-400' },
  { id: 'idle', label: 'Idle', dot: 'bg-amber-500', ring: 'bg-amber-400', text: 'text-amber-600 dark:text-amber-400' },
  { id: 'offline', label: 'Offline', dot: 'bg-rose-500', ring: 'bg-rose-400', text: 'text-rose-600 dark:text-rose-400' },
] as const;

export const PulseIndicator: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const state = STATES[index];

  useEffect(() => {
    if (state.id === 'offline') return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [state.id]);

  return (
    <div className="w-full flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={() => setIndex((i) => (i + 1) % STATES.length)}
        aria-label={`Pulse indicator: ${state.label}. Click to change status.`}
        className="min-h-[44px] flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 dark:bg-slate-800 cursor-pointer"
      >
        <span className="relative flex items-center justify-center w-6 h-6">
          {state.id !== 'offline' && (
            <span className={`absolute w-5 h-5 rounded-full opacity-75 animate-ping ${state.ring}`} />
          )}
          <span className={`relative w-3 h-3 rounded-full ${state.dot}`} />
        </span>
        <span className={`text-xs font-semibold ${state.text}`}>{state.label}</span>
      </button>
      <span className="text-xs text-slate-500 font-mono">
        {state.id === 'offline' ? 'heartbeat stopped' : `heartbeat ${seconds}s`}
      </span>
      <span className="text-xs text-slate-400">Click the dot to cycle Live → Idle → Offline.</span>
    </div>
  );
};
