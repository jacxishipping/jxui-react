// @jxui/react v3.0.0 — NotificationStack (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { CheckCircle2, AlertTriangle, Info, X, Plus } from 'lucide-react';

// 2. NotificationStack — a real stacked pile of notifications: add one,
// dismiss any of them, expand the stack to see them all.
type Note = { id: number; title: string; kind: 'info' | 'success' | 'warning' };
const INITIAL: Note[] = [
  { id: 1, title: 'Deploy finished', kind: 'success' },
  { id: 2, title: 'Canary at 25%', kind: 'warning' },
  { id: 3, title: 'Tokens synced', kind: 'info' },
];
const KIND_ICON = { info: Info, success: CheckCircle2, warning: AlertTriangle } as const;
const KIND_CLASS = { info: 'text-sky-500', success: 'text-emerald-500', warning: 'text-amber-500' } as const;

export const NotificationStack: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [notes, setNotes] = useState<Note[]>(INITIAL);
  const [expanded, setExpanded] = useState(false);
  const [counter, setCounter] = useState(4);

  const visible = expanded ? notes : notes.slice(0, 1);

  return (
    <div className="w-full space-y-2">
      <button
        type="button"
        onClick={() => {
          setNotes((ns) => [{ id: counter, title: `System alert #${counter}`, kind: 'info' }, ...ns]);
          setCounter((c) => c + 1);
          setExpanded(true);
        }}
        className={`min-h-[44px] inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white ${palette.bg} ${palette.bgHover} ${getRadiusClass('control')} cursor-pointer`}
      >
        <Plus className="w-3.5 h-3.5" />
        Add notification
      </button>
      <div className="relative w-full max-w-sm" role="region" aria-label={`${notes.length} active notifications`}>
        {notes.length === 0 ? (
          <p className="text-xs text-slate-500 py-2">No active notifications.</p>
        ) : (
          <>
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => setExpanded((v) => !v)}
              className="w-full text-left"
            >
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                {notes.length} Active Notification{notes.length === 1 ? '' : 's'} — {expanded ? 'tap to collapse' : 'tap to expand'}
              </span>
            </button>
            <div className="mt-1 space-y-1.5">
              {visible.map((n, i) => {
                const Icon = KIND_ICON[n.kind];
                return (
                  <div
                    key={n.id}
                    className={`flex items-center gap-2 p-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg shadow-md text-xs font-semibold transition-all ${expanded ? '' : 'opacity-90'}`}
                    style={expanded ? undefined : { transform: `translateY(${i * 0}px)` }}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${KIND_CLASS[n.kind]}`} />
                    <span className="flex-1 text-slate-800 dark:text-slate-200">{n.title}</span>
                    <button
                      type="button"
                      aria-label={`Dismiss ${n.title}`}
                      onClick={() => setNotes((ns) => ns.filter((x) => x.id !== n.id))}
                      className="min-h-[32px] min-w-[32px] flex items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
              {!expanded && notes.length > 1 && (
                <div className="text-[11px] text-slate-400 pl-1">+{notes.length - 1} more stacked below</div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
