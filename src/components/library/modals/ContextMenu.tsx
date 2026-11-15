// @jxui/react v3.0.0 — ContextMenu (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { Search, Copy, Files, Trash2 } from 'lucide-react';

// 13. ContextMenu — right-click the target (or use the button) to open a
// menu at the cursor position; choosing an item runs it and reports it.
const ITEMS = [
  { id: 'inspect', label: 'Inspect Element', icon: Search },
  { id: 'copy', label: 'Copy Token CSS', icon: Copy },
  { id: 'duplicate', label: 'Duplicate', icon: Files },
  { id: 'delete', label: 'Delete', icon: Trash2 },
] as const;

export const ContextMenu: React.FC = () => {
  const [menu, setMenu] = useState<{ x: number; y: number } | null>(null);
  const [lastAction, setLastAction] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenu(null);
    };
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenu(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [menu]);

  const openAt = (x: number, y: number) => {
    setMenu({
      x: Math.min(x, window.innerWidth - 180),
      y: Math.min(y, window.innerHeight - 200),
    });
  };

  return (
    <div className="w-full">
      <div
        role="button"
        tabIndex={0}
        aria-label="Right-click to open the context menu"
        onContextMenu={(e) => {
          e.preventDefault();
          openAt(e.clientX, e.clientY);
        }}
        onKeyDown={(e) => {
          if (e.key === 'ContextMenu' || (e.shiftKey && e.key === 'F10')) {
            e.preventDefault();
            openAt(window.innerWidth / 2, window.innerHeight / 2);
          }
        }}
        className="w-full min-h-[88px] p-3 bg-slate-50 dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl text-xs text-slate-500 flex flex-col items-center justify-center gap-1 cursor-context-menu"
      >
        <span className="font-semibold text-slate-700 dark:text-slate-200">Right-click this area</span>
        <span>or use the button below — the menu opens at the cursor.</span>
        <button
          type="button"
          onClick={(e) => {
            const r = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
            openAt(r.left, r.bottom + 4);
          }}
          className="mt-1 min-h-[36px] px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
        >
          Open menu here
        </button>
      </div>
      {lastAction && <p className="mt-2 text-xs text-slate-500">Last action: {lastAction}</p>}
      {menu && (
        <div
          ref={menuRef}
          role="menu"
          aria-label="Context menu"
          className="fixed z-50 w-44 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl text-xs"
          style={{ left: menu.x, top: menu.y }}
        >
          {ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="menuitem"
              onClick={() => {
                setLastAction(item.label);
                setMenu(null);
              }}
              className={`min-h-[40px] w-full flex items-center gap-2 px-2 py-1.5 rounded text-left cursor-pointer ${
                item.id === 'delete'
                  ? 'text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <item.icon className="w-3.5 h-3.5 shrink-0" />
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
