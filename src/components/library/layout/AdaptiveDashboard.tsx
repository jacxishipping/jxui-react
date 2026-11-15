// @jxui/react v3.0.0 — AdaptiveDashboard (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { LayoutGrid, List, Columns2, RefreshCw } from 'lucide-react';

// 1. AdaptiveDashboard — an adaptive dashboard: switch between grid /
// columns / list layouts, refresh the KPI values, and expand a card.
const CARDS = [
  { id: 'kpi', title: 'KPI Telemetry', body: 'Requests, latency and error budget for the last 24 hours.', value: '94.2k req/s' },
  { id: 'traffic', title: 'Traffic Distribution', body: 'Share of traffic by region, updated hourly.', value: 'us-east-1 · 42%' },
  { id: 'health', title: 'Health Matrix', body: 'Service health across clusters, green unless degraded.', value: '61 / 61 healthy' },
];
const BASE = [94200, 42, 61];

export const AdaptiveDashboard: React.FC = () => {
  const { palette } = useJXTheme();
  const [mode, setMode] = useState<'grid' | 'columns' | 'list'>('grid');
  const [tick, setTick] = useState(0);
  const [open, setOpen] = useState<string | null>('kpi');

  const layoutCls =
    mode === 'grid' ? 'grid grid-cols-3 gap-2' : mode === 'columns' ? 'grid grid-cols-1 gap-2' : 'flex flex-col gap-2';

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="flex items-center gap-1.5 flex-wrap">
        <div className="flex gap-1" role="group" aria-label="Dashboard layout">
          {([['grid', LayoutGrid, 'Grid'], ['columns', Columns2, 'Columns'], ['list', List, 'List']] as const).map(([m, Icon, label]) => (
            <button key={m} type="button" onClick={() => setMode(m)} aria-pressed={mode === m} className={`min-h-[36px] px-2.5 rounded-lg font-semibold flex items-center gap-1 cursor-pointer ${mode === m ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
              <Icon className="w-3.5 h-3.5" />{label}
            </button>
          ))}
        </div>
        <button type="button" onClick={() => setTick((t) => t + 1)} className="min-h-[36px] px-2.5 rounded-lg font-semibold flex items-center gap-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer">
          <RefreshCw className="w-3.5 h-3.5" /> Refresh
        </button>
        <span className="ml-auto font-mono text-slate-500">tick {tick}</span>
      </div>
      <div className={layoutCls}>
        {CARDS.map((c, i) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setOpen((o) => (o === c.id ? null : c.id))}
            aria-expanded={open === c.id}
            className={`min-h-[44px] p-2.5 border rounded-lg text-left cursor-pointer bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 ${open === c.id ? 'ring-2 ring-indigo-500' : ''}`}
          >
            <div className="font-bold text-slate-800 dark:text-slate-200">{c.title}</div>
            <div className={`font-mono mt-0.5 ${palette.text}`}>
              {c.id === 'kpi' ? `${(BASE[0] + tick * 137).toLocaleString()} req/s` : c.id === 'traffic' ? `us-east-1 · ${BASE[1] + (tick % 5)}%` : `${BASE[2] - (tick % 2)} / 61 healthy`}
            </div>
            {open === c.id && <div className="mt-1 text-slate-500 leading-relaxed">{c.body}</div>}
          </button>
        ))}
      </div>
    </div>
  );
};
