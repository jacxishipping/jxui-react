// @jxui/react v3.0.0 — OrbitalMenu (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Home, Compass, Layers, Settings, Sparkles } from 'lucide-react';

// 17. OrbitalMenu — satellites orbit the centre (the ring spins with a slow
// CSS animation). Click the centre to pause the orbit, click a satellite to
// select that destination.
const ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'explore', label: 'Explore', icon: Compass },
  { id: 'components', label: 'Components', icon: Layers },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const OrbitalMenu: React.FC = () => {
  const { palette } = useJXTheme();
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState('home');
  const activeItem = ITEMS.find((i) => i.id === active) ?? ITEMS[0];

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-36 h-36 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-slate-200 dark:border-slate-800" />
        <div
          className={`absolute inset-0 ${paused ? '' : 'animate-spin [animation-duration:16s]'}`}
          aria-hidden="true"
        >
          {ITEMS.map((item, i) => {
            const angle = (i / ITEMS.length) * Math.PI * 2;
            const x = 50 + 50 * Math.cos(angle);
            const y = 50 + 50 * Math.sin(angle);
            return (
              <span
                key={item.id}
                style={{ left: `${x}%`, top: `${y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700"
              />
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={paused ? 'Resume orbit' : 'Pause orbit'}
          className={`w-11 h-11 min-h-[44px] min-w-[44px] rounded-full ${palette.bg} text-white flex items-center justify-center z-10 shadow-lg cursor-pointer hover:brightness-110`}
        >
          <Sparkles className="w-5 h-5" />
        </button>
        {ITEMS.map((item, i) => {
          const angle = (i / ITEMS.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + 42 * Math.cos(angle);
          const y = 50 + 42 * Math.sin(angle);
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
              className={`absolute -translate-x-1/2 -translate-y-1/2 w-9 h-9 min-h-[36px] min-w-[36px] rounded-full flex items-center justify-center shadow-md cursor-pointer z-10 transition-all ${
                isActive ? `${palette.bg} text-white scale-110` : 'bg-white dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700'
              }`}
            >
              <Icon className="w-4 h-4" />
            </button>
          );
        })}
      </div>
      <span className="text-xs text-slate-500">
        Orbit: <span className={`font-semibold ${palette.text}`}>{paused ? 'paused' : 'spinning'}</span>
        {' · '}
        <span className="font-semibold text-slate-800 dark:text-slate-200">{activeItem.label}</span>
      </span>
    </div>
  );
};
