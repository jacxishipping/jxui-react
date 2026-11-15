// @jxui/react v3.0.0 — ExpandableSidebar (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Home, Compass, Layers, Settings, Bell, ChevronsLeft, ChevronsRight } from 'lucide-react';

// 6. ExpandableSidebar — expands on hover (and stays open when pinned), with
// selectable items, badges and a pin toggle so it works by keyboard too.
const ITEMS = [
  { id: 'home', label: 'Home', icon: Home, badge: null as number | null },
  { id: 'explore', label: 'Explore', icon: Compass, badge: null },
  { id: 'components', label: 'Components', icon: Layers, badge: 361 },
  { id: 'alerts', label: 'Alerts', icon: Bell, badge: 3 },
  { id: 'settings', label: 'Settings', icon: Settings, badge: null },
];

export const ExpandableSidebar: React.FC = () => {
  const { palette } = useJXTheme();
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [active, setActive] = useState('home');
  const isExpanded = hovered || pinned;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`transition-all duration-300 ${isExpanded ? 'w-52' : 'w-14'} p-2 bg-slate-900 text-white flex flex-col gap-1 rounded-xl`}
    >
      {ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item.id)}
            aria-current={isActive ? 'page' : undefined}
            className={`min-h-[40px] flex items-center gap-3 px-2 rounded-lg cursor-pointer text-left ${
              isActive ? `${palette.bg} text-white` : 'hover:bg-slate-800'
            }`}
          >
            <span className="relative shrink-0">
              <Icon className="w-4 h-4" />
              {item.badge !== null && !isExpanded && (
                <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-rose-500 text-[8px] font-bold flex items-center justify-center">
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </span>
            {isExpanded && (
              <>
                <span className="text-xs font-medium flex-1">{item.label}</span>
                {item.badge !== null && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-white/15">{item.badge}</span>
                )}
              </>
            )}
          </button>
        );
      })}
      <button
        type="button"
        onClick={() => setPinned((p) => !p)}
        aria-pressed={pinned}
        aria-label={pinned ? 'Unpin sidebar' : 'Pin sidebar open'}
        className="min-h-[40px] mt-1 flex items-center gap-3 px-2 rounded-lg hover:bg-slate-800 cursor-pointer text-xs text-slate-400"
      >
        {pinned ? <ChevronsLeft className="w-4 h-4 shrink-0" /> : <ChevronsRight className="w-4 h-4 shrink-0" />}
        {isExpanded && <span>{pinned ? 'Unpin' : 'Pin open'}</span>}
      </button>
    </div>
  );
};
