// @jxui/react v3.0.0 — InlineAlert (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, Info, XCircle, X } from 'lucide-react';

// 6. InlineAlert — compact inline message with switchable severity, a
// dismiss button, and a way to bring it back.
const SEVERITIES = [
  { id: 'info', label: 'Info', icon: Info, bar: 'border-sky-500', iconClass: 'text-sky-500', message: 'Your changes were saved to the draft.' },
  { id: 'success', label: 'Success', icon: CheckCircle2, bar: 'border-emerald-500', iconClass: 'text-emerald-500', message: 'Token export completed successfully.' },
  { id: 'warning', label: 'Warning', icon: AlertTriangle, bar: 'border-amber-500', iconClass: 'text-amber-500', message: 'This action will affect 3 live deployments.' },
  { id: 'error', label: 'Error', icon: XCircle, bar: 'border-rose-500', iconClass: 'text-rose-500', message: 'Could not reach the token service.' },
] as const;

export const InlineAlert: React.FC = () => {
  const [severity, setSeverity] = useState<(typeof SEVERITIES)[number]['id']>('info');
  const [visible, setVisible] = useState(true);
  const active = SEVERITIES.find((s) => s.id === severity) ?? SEVERITIES[0];
  const Icon = active.icon;

  return (
    <div className="w-full space-y-2">
      <div className="flex flex-wrap gap-1.5" role="group" aria-label="Inline alert severity">
        {SEVERITIES.map((s) => (
          <button
            key={s.id}
            type="button"
            aria-pressed={severity === s.id}
            onClick={() => {
              setSeverity(s.id);
              setVisible(true);
            }}
            className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-semibold capitalize cursor-pointer ${
              severity === s.id ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
      {visible ? (
        <div role="alert" className={`p-2.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-700 dark:text-slate-300 border-l-4 ${active.bar} flex items-center gap-2`}>
          <Icon className={`w-4 h-4 shrink-0 ${active.iconClass}`} />
          <span className="flex-1">{active.message}</span>
          <button
            type="button"
            aria-label="Dismiss inline alert"
            onClick={() => setVisible(false)}
            className="min-h-[32px] min-w-[32px] flex items-center justify-center rounded-md text-slate-400 hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setVisible(true)}
          className="min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"
        >
          Show inline alert again
        </button>
      )}
    </div>
  );
};
