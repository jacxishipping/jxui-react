// @jxui/react v3.0.0 — SpotlightSearch (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Search, FileText, Layers, Settings } from 'lucide-react';

// 19. SpotlightSearch — fullscreen ⌘K search: type to filter pages and
// components, arrow keys to move, Enter to open, Escape to close.
const RESULTS = [
  { id: 'button', label: 'JXButton — Buttons & Actions', icon: Layers, kind: 'Component' },
  { id: 'table', label: 'JXTable — Tables & Data Grids', icon: Layers, kind: 'Component' },
  { id: 'charts', label: 'JXCharts — Data Visualization', icon: Layers, kind: 'Component' },
  { id: 'tokens', label: 'Design tokens', icon: FileText, kind: 'Page' },
  { id: 'theme', label: 'Theme settings', icon: Settings, kind: 'Page' },
  { id: 'a11y', label: 'Accessibility checklist', icon: FileText, kind: 'Page' },
] as const;

export const SpotlightSearch: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [opened, setOpened] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = RESULTS.filter((r) => r.label.toLowerCase().includes(query.toLowerCase()));

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

  const choose = (label: string) => {
    setOpened(label);
    setOpen(false);
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`min-h-[44px] w-full max-w-sm px-3 py-2 ${palette.softBg} border ${palette.border} rounded-xl text-xs flex items-center justify-between gap-2 cursor-pointer ${getRadiusClass('control')}`}
      >
        <span className={`font-semibold ${palette.text}`}>Fullscreen Spotlight Engine</span>
        <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-800 rounded text-[10px] font-mono text-slate-500">⌘K</kbd>
      </button>
      {opened && <p className="mt-2 text-xs text-slate-500">Opened: {opened}</p>}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/80 backdrop-blur-sm p-4 pt-24"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Spotlight search"
            className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 dark:border-slate-800">
              <Search className={`w-5 h-5 shrink-0 ${palette.text}`} />
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
                  if (e.key === 'Enter' && filtered[active]) choose(filtered[active].label);
                }}
                placeholder="Search components, pages, settings..."
                aria-label="Spotlight search"
                className="flex-1 min-w-0 bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-400"
              />
              <kbd className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-mono text-slate-500">ESC</kbd>
            </div>
            <ul role="listbox" aria-label="Search results" className="max-h-64 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-4 text-xs text-slate-500 text-center">Nothing found for “{query}”.</li>
              )}
              {filtered.map((r, i) => (
                <li key={r.id}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={i === active}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => choose(r.label)}
                    className={`min-h-[44px] w-full flex items-center gap-3 px-3 rounded-lg text-xs text-left cursor-pointer ${
                      i === active ? `${palette.softBg} ${palette.text} font-semibold` : 'text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    <r.icon className="w-4 h-4 shrink-0" />
                    <span className="flex-1">{r.label}</span>
                    <span className="text-[10px] text-slate-400">{r.kind}</span>
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
