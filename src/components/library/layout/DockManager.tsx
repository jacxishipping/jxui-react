// @jxui/react v3.0.0 — DockManager (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Terminal, Calendar, Activity, Search, Settings } from 'lucide-react';

// 6. DockManager — a dock that can be pinned to the bottom, left or right
// edge; click an app to activate it, and the active app's panel shows.
const APPS = [
  { id: 'terminal', label: 'Terminal', Icon: Terminal },
  { id: 'calendar', label: 'Calendar', Icon: Calendar },
  { id: 'activity', label: 'Activity', Icon: Activity },
  { id: 'search', label: 'Search', Icon: Search },
  { id: 'settings', label: 'Settings', Icon: Settings },
] as const;
type Edge = 'bottom' | 'left' | 'right';

export const DockManager: React.FC = () => {
  const { palette } = useJXTheme();
  const [edge, setEdge] = useState<Edge>('bottom');
  const [active, setActive] = useState<string>('terminal');

  const dockCls =
    edge === 'bottom'
      ? 'flex-row w-full justify-center'
      : edge === 'left'
        ? 'flex-col h-40 justify-center'
        : 'flex-col h-40 justify-center';

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="flex items-center gap-1.5 flex-wrap">
        <span className="font-semibold text-slate-700 dark:text-slate-200">Dock edge:</span>
        {(['bottom', 'left', 'right'] as const).map((e) => (
          <button key={e} type="button" onClick={() => setEdge(e)} aria-pressed={edge === e} className={`min-h-[36px] px-2.5 rounded-lg font-semibold capitalize cursor-pointer ${edge === e ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>{e}</button>
        ))}
        <span className="ml-auto font-mono text-slate-500">Pinned Dock ({edge === 'bottom' ? 'Bottom Edge' : edge === 'left' ? 'Left Edge' : 'Right Edge'})</span>
      </div>
      <div className={`flex ${edge === 'bottom' ? 'flex-col' : 'flex-row'} gap-2 items-stretch`}>
        <div className={`flex gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 ${dockCls} ${edge !== 'bottom' ? 'order-2' : ''}`}>
          {APPS.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActive(id)}
              aria-label={`Open ${label}`}
              aria-pressed={active === id}
              title={label}
              className={`min-h-[44px] min-w-[44px] w-11 h-11 rounded-xl flex items-center justify-center cursor-pointer transition-all ${active === id ? `${palette.bg} text-white shadow-md scale-105` : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:scale-105'}`}
            >
              <Icon className="w-5 h-5" />
            </button>
          ))}
        </div>
        <div className="flex-1 min-h-[44px] rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 flex items-center gap-2">
          <span className="font-bold text-slate-800 dark:text-slate-200">{APPS.find((a) => a.id === active)?.label}</span>
          <span className="text-slate-500">— active app panel for the {edge} dock.</span>
        </div>
      </div>
    </div>
  );
};
