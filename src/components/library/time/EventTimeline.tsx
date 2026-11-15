// @jxui/react v3.0.0 — EventTimeline (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 9. EventTimeline — a real activity timeline: a vertical feed of events
// with timestamps, filterable by type, expandable detail rows, and a
// "load more" that reveals older events.
const EVENTS = [
  { id: 1, type: 'build', icon: '⚡', title: 'Token exporter triggered by user', time: '2m ago', detail: 'Exported 24 design tokens to tokens.json — 8 colors, 6 radii, 4 shadows.' },
  { id: 2, type: 'deploy', icon: '🚀', title: 'Deployed fix/preview-theme to staging', time: '18m ago', detail: 'Build 2.12s · 6.3 MB dist · preview URL shared to #design-system.' },
  { id: 3, type: 'comment', icon: '💬', title: 'Elena reviewed the ScatterPlot PR', time: '42m ago', detail: '"Legend toggles work nicely — could the hover readout also show the series colour?"' },
  { id: 4, type: 'build', icon: '⚡', title: 'CI: 22/22 tests passed', time: '1h ago', detail: 'jxuiLogic.test.ts — all logic tests green on the PR branch.' },
  { id: 5, type: 'deploy', icon: '🚀', title: 'Published @jx-ui-react v3.0.0', time: '3h ago', detail: 'npm publish succeeded. 361 components in the release notes.' },
  { id: 6, type: 'comment', icon: '💬', title: 'Marcus opened issue #12', time: '5h ago', detail: '"README badge for strict mode is hardcoded — should reflect tsconfig." ' },
] as const;
const FILTERS = ['All', 'build', 'deploy', 'comment'] as const;

export const EventTimeline: React.FC = () => {
  const { palette } = useJXTheme();
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');
  const [expanded, setExpanded] = useState<number | null>(1);
  const [shown, setShown] = useState(3);
  const filtered = EVENTS.filter((e) => filter === 'All' || e.type === filter);
  const visible = filtered.slice(0, shown);

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="flex gap-1" role="group" aria-label="Filter events by type">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => { setFilter(f); setShown(3); }}
            aria-pressed={filter === f}
            className={`min-h-[36px] px-3 rounded-lg font-semibold capitalize cursor-pointer ${
              filter === f ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <ol className="relative pl-6 space-y-1">
        <span aria-hidden="true" className="absolute left-[11px] top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800" />
        {visible.map((e) => (
          <li key={e.id} className="relative">
            <span aria-hidden="true" className="absolute -left-6 top-1 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[11px]">
              {e.icon}
            </span>
            <button
              type="button"
              onClick={() => setExpanded((x) => (x === e.id ? null : e.id))}
              aria-expanded={expanded === e.id}
              className="w-full text-left rounded-lg px-2 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer"
            >
              <span className="block font-medium text-slate-800 dark:text-slate-200 leading-snug">{e.title}</span>
              <span className="block font-mono text-[11px] text-slate-500">{e.time} · {e.type}</span>
            </button>
            {expanded === e.id && (
              <p className="ml-2 mb-1 rounded-lg bg-slate-50 dark:bg-slate-800 px-2.5 py-2 text-slate-600 dark:text-slate-300 leading-relaxed">
                {e.detail}
              </p>
            )}
          </li>
        ))}
      </ol>
      {filtered.length === 0 && <p className="text-slate-500">No events of this type yet.</p>}
      {shown < filtered.length && (
        <button
          type="button"
          onClick={() => setShown((s) => s + 3)}
          className={`min-h-[36px] px-3 rounded-lg font-semibold cursor-pointer ${palette.softBg} ${palette.text}`}
        >
          Load more ({filtered.length - shown} older)
        </button>
      )}
    </div>
  );
};
