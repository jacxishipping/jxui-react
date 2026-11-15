// @jxui/react v3.0.0 — AnimatedAlert (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, Info, XCircle, X } from 'lucide-react';

// 5. AnimatedAlert — pick a severity to preview it, dismiss the alert,
// and bring it back. The alert slides in on show.
const SEVERITIES = [
  { id: 'info', label: 'Info', icon: Info, wrap: 'bg-sky-50 dark:bg-sky-950/40 border-sky-300 dark:border-sky-800 text-sky-800 dark:text-sky-200', iconClass: 'text-sky-500', message: 'Design tokens synced from the latest release.' },
  { id: 'success', label: 'Success', icon: CheckCircle2, wrap: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200', iconClass: 'text-emerald-500', message: 'Build #894 deployed to production.' },
  { id: 'warning', label: 'Warning', icon: AlertTriangle, wrap: 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-200', iconClass: 'text-amber-500', message: 'Canary rollout currently at 25% traffic.' },
  { id: 'error', label: 'Error', icon: XCircle, wrap: 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-200', iconClass: 'text-rose-500', message: 'Deploy failed: health check timed out.' },
] as const;

export const AnimatedAlert: React.FC = () => {
  const [severity, setSeverity] = useState<(typeof SEVERITIES)[number]['id']>('warning');
  const [visible, setVisible] = useState(true);
  const active = SEVERITIES.find((s) => s.id === severity) ?? SEVERITIES[2];
  const Icon = active.icon;

  return (
    <div className="w-full space-y-2">
      <div className="flex flex-wrap gap-1.5" role="group" aria-label="Alert severity">
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
        <div
          role="alert"
          className={`p-3 border rounded-xl text-xs flex items-center gap-2 transition-all ${active.wrap}`}
        >
          <Icon className={`w-4 h-4 shrink-0 ${active.iconClass}`} />
          <span className="flex-1">{active.message}</span>
          <button
            type="button"
            aria-label="Dismiss alert"
            onClick={() => setVisible(false)}
            className="min-h-[32px] min-w-[32px] flex items-center justify-center rounded-md hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setVisible(true)}
          className="min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"
        >
          Show {active.label} alert again
        </button>
      )}
    </div>
  );
};
