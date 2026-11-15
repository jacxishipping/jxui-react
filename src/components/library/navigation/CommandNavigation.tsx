// @jxui/react v3.0.0 — CommandNavigation (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Search, ArrowRight } from 'lucide-react';

// 9. CommandNavigation — a working command palette: click the trigger (or
// type) to open it, filter destinations by typing, move with arrow keys,
// Enter jumps, Escape closes.
const DESTINATIONS = [
  { id: 'buttons', label: 'Buttons', hint: '20 components' },
  { id: 'inputs', label: 'Inputs & Forms', hint: '18 components' },
  { id: 'navigation', label: 'Navigation', hint: '20 components' },
  { id: 'dataviz', label: 'Data Visualization', hint: '14 components' },
  { id: 'datagrids', label: 'Tables & Data Grids', hint: '12 components' },
  { id: 'glass', label: 'Glassmorphism', hint: '20 components' },
  { id: 'ai', label: 'AI Components', hint: '13 components' },
  { id: 'docs', label: 'Documentation', hint: 'Guides & API' },
];

export const CommandNavigation: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [highlight, setHighlight] = useState(0);
  const [jumped, setJumped] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = DESTINATIONS.filter((d) => d.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open ]);

  useEffect(() => {
    setHighlight(0);
  }, [query]);

  const jump = (dest: (typeof DESTINATIONS)[number]) => {
    setJumped(dest.label);
    setOpen(false);
    setQuery('');
  };

  return (
    <div className="w-full max-w-xs relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={`w-full min-h-[44px] px-3 py-2 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 ${getRadiusClass('control')} flex items-center justify-between gap-4 text-xs cursor-pointer`}
      >
        <span className="text-slate-500">{jumped ? `Jumped to: ${jumped}` : 'Jump to section...'}</span>
        <kbd className="px-1.5 py-0.5 font-mono text-[10px] bg-white dark:bg-slate-800 border rounded text-slate-600 dark:text-slate-400">⌘P</kbd>
      </button>
      {open && (
        <div className={`absolute top-full left-0 right-0 mt-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl ${getRadiusClass('control')} overflow-hidden z-20`} role="listbox" aria-label="Jump to section">
          <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-100 dark:border-slate-800">
            <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') setOpen(false);
                if (e.key === 'ArrowDown') { e.preventDefault(); setHighlight((h) => Math.min(results.length - 1, h + 1)); }
                if (e.key === 'ArrowUp') { e.preventDefault(); setHighlight((h) => Math.max(0, h - 1)); }
                if (e.key === 'Enter' && results[highlight]) jump(results[highlight]);
              }}
              placeholder="Type to filter..."
              aria-label="Filter destinations"
              className="w-full bg-transparent text-xs text-slate-900 dark:text-white placeholder:text-slate-400"
            />
          </div>
          {results.length === 0 ? (
            <p className="px-3 py-3 text-xs text-slate-400">No matches for “{query}”.</p>
          ) : (
            results.map((d, i) => (
              <button
                key={d.id}
                type="button"
                role="option"
                aria-selected={i === highlight}
                onMouseEnter={() => setHighlight(i)}
                onClick={() => jump(d)}
                className={`w-full min-h-[36px] flex items-center justify-between px-3 py-2 text-xs cursor-pointer text-left ${
                  i === highlight ? `${palette.softBg} ${palette.text}` : 'text-slate-700 dark:text-slate-200'
                }`}
              >
                <span className="font-medium">{d.label}</span>
                <span className="flex items-center gap-1 text-slate-400">
                  {d.hint}
                  <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
};
