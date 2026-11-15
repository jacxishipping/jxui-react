// @jxui/react v3.0.0 — StatusIndicator (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';

// 11. StatusIndicator — a live status board: cycle through Operational /
// Degraded / Maintenance / Outage and see the matching dot, copy and
// uptime for each state.
const STATUSES = [
  { id: 'operational', label: 'Operational', dot: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-400', uptime: '99.99%', detail: 'All systems normal.' },
  { id: 'degraded', label: 'Degraded', dot: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400', uptime: '99.41%', detail: 'Token CDN is slow in eu-west.' },
  { id: 'maintenance', label: 'Maintenance', dot: 'bg-sky-500', text: 'text-sky-600 dark:text-sky-400', uptime: '98.70%', detail: 'Scheduled window 02:00–03:00 UTC.' },
  { id: 'outage', label: 'Outage', dot: 'bg-rose-500', text: 'text-rose-600 dark:text-rose-400', uptime: '97.12%', detail: 'API gateway unreachable — investigating.' },
] as const;

export const StatusIndicator: React.FC = () => {
  const [index, setIndex] = useState(0);
  const status = STATUSES[index];

  return (
    <div className="w-full space-y-2">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
          <span className={`w-2.5 h-2.5 rounded-full ${status.dot} ${status.id === 'operational' ? 'animate-pulse' : ''}`} />
          <span className={status.text}>{status.label}</span>
        </span>
        <span className="text-xs text-slate-500 font-mono">uptime {status.uptime}</span>
      </div>
      <p className="text-xs text-slate-500">{status.detail}</p>
      <div className="flex flex-wrap gap-1.5" role="group" aria-label="System status">
        {STATUSES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-pressed={index === i}
            onClick={() => setIndex(i)}
            className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
              index === i ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
};
