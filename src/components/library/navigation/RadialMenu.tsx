// @jxui/react v3.0.0 — RadialMenu (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Home, Search, Settings, Share2, Grid, X } from 'lucide-react';

// 16. RadialMenu — a centre button fans four actions out in a radial arc.
// Picking an action selects it (shown below), closes the menu, and Escape
// closes it without selecting.
const ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'search', label: 'Search', icon: Search },
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'share', label: 'Share', icon: Share2 },
];

export const RadialMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const { palette } = useJXTheme();

  const choose = (label: string) => {
    setSelected(label);
    setOpen(false);
  };

  return (
    <div
      className="flex flex-col items-center gap-2"
      onKeyDown={(e) => { if (e.key === 'Escape') setOpen(false); }}
    >
      <div className="relative w-36 h-36 flex items-center justify-center">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className={`w-11 h-11 min-h-[44px] min-w-[44px] rounded-full ${palette.bg} text-white flex items-center justify-center shadow-lg cursor-pointer hover:brightness-110 z-10`}
          aria-label={open ? 'Close radial menu' : 'Open radial menu'}
          aria-expanded={open}
          aria-haspopup="menu"
        >
          {open ? <X className="w-5 h-5" /> : <Grid className="w-5 h-5" />}
        </button>
        {open && (
          <div className="absolute inset-0" role="menu" aria-label="Radial actions">
            {ITEMS.map((item, i) => {
              const angle = Math.PI + (i / (ITEMS.length - 1)) * Math.PI;
              const x = 50 + 46 * Math.cos(angle);
              const y = 50 + 46 * Math.sin(angle);
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="menuitem"
                  aria-label={item.label}
                  onClick={() => choose(item.label)}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-9 h-9 min-h-[36px] min-w-[36px] bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center cursor-pointer hover:scale-110 transition-transform ${palette.text}`}
                >
                  <Icon className="w-4 h-4" />
                </button>
              );
            })}
          </div>
        )}
      </div>
      <span className="text-xs text-slate-500" aria-live="polite">
        {selected ? `Selected: ${selected}` : 'Open the menu and pick an action.'}
      </span>
    </div>
  );
};
