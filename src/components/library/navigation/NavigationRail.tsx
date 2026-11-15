// @jxui/react v3.0.0 — NavigationRail (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Home, Compass, Layers, Settings, Search } from 'lucide-react';

// 13. NavigationRail — a vertical rail with labelled destinations, an active
// indicator and a badge. Clicking a destination selects it and the current
// destination is shown underneath.
const ITEMS = [
  { id: 'home', label: 'Home', icon: Home, badge: 0 },
  { id: 'search', label: 'Search', icon: Search, badge: 0 },
  { id: 'explore', label: 'Explore', icon: Compass, badge: 0 },
  { id: 'components', label: 'Components', icon: Layers, badge: 361 },
  { id: 'settings', label: 'Settings', icon: Settings, badge: 0 },
];

export const NavigationRail: React.FC = () => {
  const { palette } = useJXTheme();
  const [active, setActive] = useState('home');
  const activeItem = ITEMS.find((i) => i.id === active) ?? ITEMS[0];

  return (
    <div className="flex items-start gap-3">
      <div className="w-16 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col items-center gap-1">
        {ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
              className={`w-12 min-h-[44px] py-1.5 flex flex-col items-center justify-center gap-0.5 rounded-xl transition-all cursor-pointer ${
                isActive ? `${palette.softBg} ${palette.text}` : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span className="relative">
                <Icon className="w-4 h-4" />
                {item.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2 min-w-3.5 h-3.5 px-0.5 rounded-full bg-rose-500 text-white text-[8px] font-bold flex items-center justify-center">
                    {item.badge > 99 ? '99+' : item.badge}
                  </span>
                )}
              </span>
              <span className="text-[9px] font-semibold leading-none">{item.label}</span>
            </button>
          );
        })}
      </div>
      <div className="pt-3 text-xs">
        <span className="text-slate-400">Current: </span>
        <span className={`font-semibold ${palette.text}`}>{activeItem.label}</span>
      </div>
    </div>
  );
};
