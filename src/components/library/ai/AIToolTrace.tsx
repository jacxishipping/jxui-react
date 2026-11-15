// @jxui/react v3.0.0 — AIToolTrace (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { CheckCircle2, XCircle, ChevronDown, Play, Terminal } from 'lucide-react';

// 7. AIToolTrace — the agent's tool calls: each entry shows the tool, its
// args, duration and exit code. Expand a row for the full call, filter by
// outcome, and re-run to append a fresh entry.
interface Entry { id: number; tool: string; args: string; ms: number; exit: number; }
const INITIAL: Entry[] = [
  { id: 1, tool: 'read_file', args: '{ "path": "src/data/catalog290.ts" }', ms: 42, exit: 0 },
  { id: 2, tool: 'run_command', args: '{ "command": "npm test" }', ms: 142, exit: 0 },
  { id: 3, tool: 'search_code', args: '{ "query": "VirtualizedTable" }', ms: 87, exit: 0 },
  { id: 4, tool: 'deploy_preview', args: '{ "target": "github-pages" }', ms: 210, exit: 1 },
];
const REPLAYS: Omit<Entry, 'id'>[] = [
  { tool: 'read_file', args: '{ "path": "src/index.css" }', ms: 38, exit: 0 },
  { tool: 'run_command', args: '{ "command": "npx tsc --noEmit" }', ms: 126, exit: 0 },
  { tool: 'search_code', args: '{ "query": "palette.hex" }', ms: 64, exit: 0 },
];

export const AIToolTrace: React.FC = () => {
  const { palette } = useJXTheme();
  const [entries, setEntries] = useState<Entry[]>(INITIAL);
  const [expanded, setExpanded] = useState<number | null>(2);
  const [filter, setFilter] = useState<'all' | 'ok' | 'failed'>('all');
  const [nextId, setNextId] = useState(5);
  const [replayIdx, setReplayIdx] = useState(0);

  const totalMs = entries.reduce((s, e) => s + e.ms, 0);
  const failed = entries.filter((e) => e.exit !== 0).length;
  const shown = entries.filter((e) => filter === 'all' || (filter === 'ok' ? e.exit === 0 : e.exit !== 0));

  const rerun = () => {
    const next = REPLAYS[replayIdx % REPLAYS.length];
    setEntries((es) => [...es, { ...next, id: nextId }]);
    setNextId((n) => n + 1);
    setReplayIdx((i) => i + 1);
  };

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden text-xs">
      <div className="flex flex-wrap items-center gap-2 px-3 py-2 border-b border-slate-200 dark:border-slate-800">
        <span className="inline-flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200"><Terminal className="w-4 h-4" /> Tool trace</span>
        <span className="font-mono text-[11px] text-slate-400">{entries.length} calls · {totalMs}ms total · {failed} failed</span>
        <div className="ml-auto flex items-center gap-1">
          {(['all', 'ok', 'failed'] as const).map((f) => (
            <button key={f} type="button" onClick={() => setFilter(f)} aria-pressed={filter === f} className={`min-h-[36px] px-2.5 rounded-lg capitalize font-semibold cursor-pointer ${filter === f ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
              {f}
            </button>
          ))}
          <button type="button" onClick={rerun} className={`min-h-[36px] px-2.5 inline-flex items-center gap-1 rounded-lg text-white font-semibold cursor-pointer ${palette.bg}`}>
            <Play className="w-3.5 h-3.5" /> Re-run
          </button>
        </div>
      </div>
      <div className="divide-y divide-slate-100 dark:divide-slate-800 max-h-52 overflow-y-auto">
        {shown.map((e) => (
          <div key={e.id}>
            <button
              type="button"
              onClick={() => setExpanded((x) => (x === e.id ? null : e.id))}
              aria-expanded={expanded === e.id}
              className="w-full min-h-[44px] px-3 flex items-center gap-2 text-left cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/40 font-mono"
            >
              {e.exit === 0 ? <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" /> : <XCircle className="w-4 h-4 shrink-0 text-rose-500" />}
              <span className="font-bold text-slate-800 dark:text-slate-200">{e.tool}</span>
              <span className="ml-auto text-[11px] text-slate-400 shrink-0">{e.ms}ms · exit {e.exit}</span>
              <ChevronDown className={`w-3.5 h-3.5 shrink-0 text-slate-400 transition-transform ${expanded === e.id ? 'rotate-180' : ''}`} />
            </button>
            {expanded === e.id && (
              <pre className="mx-3 mb-2 p-2 rounded-lg bg-slate-950 text-emerald-300 font-mono text-[11px] overflow-x-auto">{e.args}{'\n'}✓ Executed in {e.ms}ms • Exit code: {e.exit}</pre>
            )}
          </div>
        ))}
        {shown.length === 0 && <p className="px-3 py-3 text-center text-slate-400">No {filter === 'all' ? '' : `${filter} `}tool calls.</p>}
      </div>
    </div>
  );
};
