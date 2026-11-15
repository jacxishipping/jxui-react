// @jxui/react v3.0.0 — CircularNavigation (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Home, Compass, Layers, Settings, Sparkles, Search } from 'lucide-react';

// 15. CircularNavigation — destinations arranged on a circle. Click the
// centre to expand/collapse the ring, click a destination to select it.
const ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'search', label: 'Search', icon: Search },
  { id: 'layers', label: 'Components', icon: Layers },
  { id: 'explore', label: 'Explore', icon: Compass },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const CircularNavigation: React.FC = () => {
  const { palette } = useJXTheme();
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState('home');
  const activeItem = ITEMS.find((i) => i.id === active) ?? ITEMS[0];

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-36 h-36 rounded-full border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? 'Collapse circular navigation' : 'Expand circular navigation'}
          className={`w-11 h-11 min-h-[44px] min-w-[44px] rounded-full ${palette.bg} text-white flex items-center justify-center shadow-md cursor-pointer hover:brightness-110`}
        >
          <Sparkles className="w-5 h-5" />
        </button>
        {open &&
          ITEMS.map((item, i) => {
            const angle = (i / ITEMS.length) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + 50 * Math.cos(angle);
            const y = 50 + 50 * Math.sin(angle);
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                aria-label={item.label}
                aria-pressed={isActive}
                style={{ left: `${x}%`, top: `${y}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-9 h-9 min-h-[36px] min-w-[36px] rounded-full flex items-center justify-center shadow-sm cursor-pointer transition-all ${
                  isActive
                    ? `${palette.bg} text-white scale-110`
                    : 'bg-white dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
              </button>
            );
          })}
      </div>
      <span className={`text-xs font-semibold ${palette.text}`} aria-live="polite">
        {activeItem.label}
      </span>
    </div>
  );
};
