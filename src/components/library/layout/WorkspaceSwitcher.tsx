// @jxui/react v3.0.0 — WorkspaceSwitcher (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 15. WorkspaceSwitcher — switch workspaces: each workspace has its own
// accent tint, panel set and status, and the active one is highlighted.
const WORKSPACES = [
  { id: 'design', label: 'Design', accent: '#4f46e5', panels: ['Figma tokens', 'Component specs', 'Motion curves'], status: 'In progress' },
  { id: 'production', label: 'Production', accent: '#059669', panels: ['Deploy pipeline', 'Health matrix', 'Incident log'], status: 'Live' },
  { id: 'staging', label: 'Staging', accent: '#d97706', panels: ['Preview builds', 'QA checklist', 'Feature flags'], status: 'Ready' },
] as const;

export const WorkspaceSwitcher: React.FC = () => {
  const { palette } = useJXTheme();
  const [active, setActive] = useState('design');
  const ws = WORKSPACES.find((w) => w.id === active) ?? WORKSPACES[0];

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="flex items-center gap-1.5 flex-wrap" role="tablist" aria-label="Workspaces">
        {WORKSPACES.map((w) => (
          <button
            key={w.id}
            type="button"
            role="tab"
            aria-selected={active === w.id}
            onClick={() => setActive(w.id)}
            className={`min-h-[44px] px-3 rounded-lg font-semibold cursor-pointer transition-all ${active === w.id ? 'text-white shadow-md' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800'}`}
            style={active === w.id ? { backgroundColor: w.id === 'design' ? palette.hex : w.accent } : undefined}
          >
            {w.label}
          </button>
        ))}
        <span className="ml-auto font-mono text-slate-500">{ws.status}</span>
      </div>
      <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-3">
        <div className="font-bold text-slate-800 dark:text-slate-200 mb-1.5">{ws.label} workspace</div>
        <ul className="space-y-1">
          {ws.panels.map((p) => (
            <li key={p} className="min-h-[36px] flex items-center gap-2 px-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: ws.accent }} />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
