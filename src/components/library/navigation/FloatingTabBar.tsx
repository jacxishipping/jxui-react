// @jxui/react v3.0.0 — FloatingTabBar (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Home, Search, Bell, Settings } from 'lucide-react';

// 14. FloatingTabBar — a floating pill tab bar with real selection: the
// active tab gets the accent pill and a label, the bell carries a badge
// that clears when opened, and the current tab is announced below.
const TABS = [
  { id: 'home', label: 'Home', icon: Home, badge: 0 },
  { id: 'search', label: 'Search', icon: Search, badge: 0 },
  { id: 'alerts', label: 'Alerts', icon: Bell, badge: 3 },
  { id: 'settings', label: 'Settings', icon: Settings, badge: 0 },
];

export const FloatingTabBar: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [active, setActive] = useState('home');
  const [alerts, setAlerts] = useState(3);
  const activeTab = TABS.find((t) => t.id === active) ?? TABS[0];

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        role="tablist"
        aria-label="Floating navigation"
        className={`px-2 py-1.5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl ${getRadiusClass('pill')} flex items-center gap-1`}
      >
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.id;
          const badge = tab.id === 'alerts' ? alerts : tab.badge;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => {
                setActive(tab.id);
                if (tab.id === 'alerts') setAlerts(0);
              }}
              className={`min-h-[40px] min-w-[40px] px-2.5 flex items-center gap-1.5 rounded-full cursor-pointer transition-all ${
                isActive ? `${palette.bg} text-white shadow-sm` : 'text-slate-400 hover:text-slate-700 dark:hover:text-white'
              }`}
            >
              <span className="relative">
                <Icon className="w-4 h-4" />
                {badge > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-rose-500 text-white text-[8px] font-bold flex items-center justify-center">
                    {badge}
                  </span>
                )}
              </span>
              {isActive && <span className="text-xs font-semibold pr-1">{tab.label}</span>}
            </button>
          );
        })}
      </div>
      <span className="text-xs text-slate-500" aria-live="polite">
        Current tab: <span className={`font-semibold ${palette.text}`}>{activeTab.label}</span>
      </span>
    </div>
  );
};
