// @jxui/react v3.0.0 — CommandPalette (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Search, CornerDownLeft } from 'lucide-react';

// 18. CommandPalette — real searchable launcher: type to filter, arrow keys
// to move, Enter to run a command, Escape to close.
const COMMANDS = [
  { id: 'new-component', label: 'Create new component', group: 'Actions' },
  { id: 'deploy', label: 'Deploy build to production', group: 'Actions' },
  { id: 'tokens', label: 'Export design tokens', group: 'Actions' },
  { id: 'theme', label: 'Toggle dark mode', group: 'Settings' },
  { id: 'shortcuts', label: 'View keyboard shortcuts', group: 'Settings' },
  { id: 'docs', label: 'Open documentation', group: 'Help' },
  { id: 'github', label: 'Open GitHub repository', group: 'Help' },
] as const;

export const CommandPalette: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [ran, setRan] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = COMMANDS.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (!open) return;
    setQuery('');
    setActive(0);
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open ]);

  const run = (label: string) => {
    setRan(label);
    setOpen(false);
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`min-h-[44px] w-full max-w-sm px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl shadow-sm text-xs flex items-center gap-2 text-slate-400 cursor-pointer ${getRadiusClass('control')}`}
      >
        <Search className="w-3.5 h-3.5" />
        <span className="flex-1 text-left">Search commands...</span>
        <kbd className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-mono">⌘K</kbd>
      </button>
      {ran && <p className="mt-2 text-xs text-slate-500">Ran: {ran}</p>}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 pt-24"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="w-full max-w-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-200 dark:border-slate-800">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setActive((a) => Math.min(filtered.length - 1, a + 1));
                  }
                  if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setActive((a) => Math.max(0, a - 1));
                  }
                  if (e.key === 'Enter' && filtered[active]) run(filtered[active].label);
                }}
                placeholder="Search commands..."
                aria-label="Search commands"
                className="flex-1 min-w-0 bg-transparent text-xs text-slate-900 dark:text-white placeholder:text-slate-400"
              />
              <kbd className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-mono text-slate-500">ESC</kbd>
            </div>
            <ul role="listbox" aria-label="Commands" className="max-h-56 overflow-y-auto p-1.5">
              {filtered.length === 0 && (
                <li className="px-2 py-3 text-xs text-slate-500 text-center">No commands match “{query}”.</li>
              )}
              {filtered.map((c, i) => (
                <li key={c.id}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={i === active}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => run(c.label)}
                    className={`min-h-[40px] w-full flex items-center justify-between gap-2 px-2.5 rounded-lg text-xs text-left cursor-pointer ${
                      i === active ? `${palette.softBg} ${palette.text} font-semibold` : 'text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    <span>{c.label}</span>
                    <span className="flex items-center gap-1 text-[10px] text-slate-400">
                      {c.group}
                      {i === active && <CornerDownLeft className="w-3 h-3" />}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
