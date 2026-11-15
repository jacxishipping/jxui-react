// @jxui/react v3.0.0 — Drawer (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Home, Layers, Settings, User } from 'lucide-react';

// 6. Drawer — trigger opens a real right-anchored slide-in drawer with
// navigation; closes via X, backdrop, or Escape.
const NAV = [
  { id: 'home', label: 'Dashboard', icon: Home },
  { id: 'components', label: 'Components', icon: Layers },
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'profile', label: 'Profile', icon: User },
] as const;

export const Drawer: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('components');
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open ]);

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`min-h-[44px] px-4 py-2 text-xs font-semibold text-white ${palette.bg} ${palette.bgHover} ${getRadiusClass('control')} cursor-pointer`}
      >
        Open edge drawer
      </button>
      <p className="mt-2 text-xs text-slate-500">Active section: {NAV.find((n) => n.id === active)?.label}</p>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Edge slide drawer"
            className="absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl p-4 flex flex-col gap-1 text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2">
              <span className="font-bold text-slate-900 dark:text-white">Edge Slide Drawer</span>
              <button
                type="button"
                aria-label="Close drawer"
                onClick={() => setOpen(false)}
                className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-slate-500 pb-2">Right-anchored panel.</p>
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-current={active === item.id ? 'page' : undefined}
                onClick={() => {
                  setActive(item.id);
                  setOpen(false);
                }}
                className={`min-h-[44px] flex items-center gap-2.5 px-3 rounded-lg text-left font-medium cursor-pointer ${
                  active === item.id
                    ? `${palette.softBg} ${palette.text}`
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
