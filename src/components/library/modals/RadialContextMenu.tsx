// @jxui/react v3.0.0 — RadialContextMenu (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Copy, Scissors, ClipboardPaste, Trash2, Share2, Star } from 'lucide-react';

// 14. RadialContextMenu — trigger opens a circular menu with actions
// arranged around a centre hub; picking one runs it and reports it.
const ACTIONS = [
  { id: 'copy', label: 'Copy', icon: Copy, angle: -90 },
  { id: 'cut', label: 'Cut', icon: Scissors, angle: -30 },
  { id: 'paste', label: 'Paste', icon: ClipboardPaste, angle: 30 },
  { id: 'delete', label: 'Delete', icon: Trash2, angle: 90 },
  { id: 'share', label: 'Share', icon: Share2, angle: 150 },
  { id: 'star', label: 'Star', icon: Star, angle: 210 },
] as const;

export const RadialContextMenu: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [open, setOpen] = useState(false);
  const [lastAction, setLastAction] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open ]);

  return (
    <div className="w-full">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="menu"
          onClick={() => setOpen((v) => !v)}
          className={`min-h-[44px] w-16 h-16 rounded-full border-2 ${palette.border} flex items-center justify-center text-xs font-bold cursor-pointer ${palette.softBg} ${palette.text}`}
        >
          Radial Menu
        </button>
        <p className="text-xs text-slate-500 max-w-[12rem]">
          Tap the hub to open the circular menu. {lastAction ? `Last action: ${lastAction}.` : 'Pick an action.'}
        </p>
      </div>
      {open && (
        <div
          ref={menuRef}
          role="menu"
          aria-label="Radial context menu"
          className="relative mt-3 mx-auto w-52 h-52"
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg flex items-center justify-center">
            <button
              type="button"
              aria-label="Close radial menu"
              onClick={() => setOpen(false)}
              className="min-h-[44px] min-w-[44px] rounded-full text-xs font-bold text-slate-700 dark:text-slate-200 cursor-pointer"
            >
              Close
            </button>
          </div>
          {ACTIONS.map((a) => {
            const rad = (a.angle * Math.PI) / 180;
            const x = 50 + 42 * Math.cos(rad);
            const y = 50 + 42 * Math.sin(rad);
            return (
              <button
                key={a.id}
                type="button"
                role="menuitem"
                aria-label={a.label}
                title={a.label}
                onClick={() => {
                  setLastAction(a.label);
                  setOpen(false);
                }}
                className={`absolute min-h-[44px] min-w-[44px] w-11 h-11 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col items-center justify-center gap-0.5 cursor-pointer hover:scale-110 transition-transform ${
                  a.id === 'delete' ? 'text-rose-500' : palette.text
                }`}
                style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
              >
                <a.icon className="w-4 h-4" />
                <span className="text-[9px] font-semibold leading-none">{a.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
