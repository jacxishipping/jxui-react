// @jxui/react v3.0.0 — NotificationCenter (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Bell, CheckCircle2, AlertTriangle, Info, X } from 'lucide-react';

// 3. NotificationCenter — bell with an unread badge; the panel lists real
// notifications you can mark read one by one, mark all read, or clear.
type Note = { id: number; title: string; detail: string; kind: 'info' | 'success' | 'warning'; read: boolean };
const INITIAL: Note[] = [
  { id: 1, title: 'Deploy finished', detail: 'Build #894 is live in production.', kind: 'success', read: false },
  { id: 2, title: 'Canary at 25%', detail: 'Traffic shift completed without errors.', kind: 'warning', read: false },
  { id: 3, title: 'Tokens synced', detail: 'Design tokens exported to JSON.', kind: 'info', read: true },
];
const KIND_ICON = { info: Info, success: CheckCircle2, warning: AlertTriangle } as const;
const KIND_CLASS = {
  info: 'text-sky-500',
  success: 'text-emerald-500',
  warning: 'text-amber-500',
} as const;

export const NotificationCenter: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState<Note[]>(INITIAL);
  const unread = notes.filter((n) => !n.read).length;

  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label={`Notifications, ${unread} unread`}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"
        >
          <Bell className="w-5 h-5" />
          {unread > 0 && (
            <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
              {unread}
            </span>
          )}
        </button>
        <span className="text-xs text-slate-500">{unread === 0 ? 'All caught up.' : `${unread} unread system alert${unread === 1 ? '' : 's'}.`}</span>
      </div>
      {open && (
        <div className="mt-2 w-full max-w-sm p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl text-xs" role="region" aria-label="Activity log">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
            <span className="font-bold text-slate-900 dark:text-white">Activity Log</span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setNotes((ns) => ns.map((n) => ({ ...n, read: true })))}
                className="min-h-[36px] px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                Mark all read
              </button>
              <button
                type="button"
                aria-label="Close notification center"
                onClick={() => setOpen(false)}
                className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          {notes.length === 0 ? (
            <p className="py-4 text-center text-slate-500 text-[11px]">No notifications.</p>
          ) : (
            <ul className="divide-y divide-slate-100 dark:divide-slate-800">
              {notes.map((n) => {
                const Icon = KIND_ICON[n.kind];
                return (
                  <li key={n.id}>
                    <button
                      type="button"
                      onClick={() => setNotes((ns) => ns.map((x) => (x.id === n.id ? { ...x, read: true } : x)))}
                      className="min-h-[44px] w-full flex items-start gap-2 py-2 text-left cursor-pointer"
                    >
                      <Icon className={`w-4 h-4 shrink-0 mt-0.5 ${KIND_CLASS[n.kind]}`} />
                      <span className="flex-1 min-w-0">
                        <span className={`block font-semibold ${n.read ? 'text-slate-500' : 'text-slate-900 dark:text-white'}`}>
                          {n.title}
                          {!n.read && <span className={`ml-2 inline-block w-2 h-2 rounded-full ${palette.bg}`} aria-label="Unread" />}
                        </span>
                        <span className="block text-[11px] text-slate-500">{n.detail}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
          {notes.length > 0 && (
            <button
              type="button"
              onClick={() => setNotes([])}
              className="mt-1 min-h-[36px] w-full rounded-lg text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 cursor-pointer"
            >
              Clear all
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              const next: Note = {
                id: Date.now(),
                title: 'New system alert',
                detail: `Alert #${notes.length + 1} arrived just now.`,
                kind: 'info',
                read: false,
              };
              setNotes((ns) => [next, ...ns]);
            }}
            className={`mt-2 min-h-[44px] w-full rounded-lg text-xs font-semibold text-white ${palette.bg} ${getRadiusClass('control')} cursor-pointer`}
          >
            Simulate new notification
          </button>
        </div>
      )}
    </div>
  );
};
