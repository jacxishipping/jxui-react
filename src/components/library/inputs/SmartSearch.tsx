// @jxui/react v3.0.0 — SmartSearch (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Search, X } from 'lucide-react';

// 7. SmartSearch — controlled search over the component catalogue: typing
// filters the list, clicking a suggestion or pressing Enter runs the
// search, and recent searches are kept below the box.
const CATALOG = ['JXButton', 'JXDataGrid', 'JXGlassCard', 'JXModal', 'JXInput', 'JXChart', 'JXTable', 'JXToast', 'JXSidebar', 'JXForm'];
const SUGGESTED = ['Button', 'DataGrid', 'Glass'];

export const SmartSearch: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState('');
  const [recent, setRecent] = useState<string[]>(['Button']);
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = CATALOG.filter((c) => c.toLowerCase().includes(query.toLowerCase()));
  const visible = query ? results : [];

  const runSearch = (q: string) => {
    const term = q.trim();
    if (!term) return;
    setSearched(term);
    setRecent((r) => [term, ...r.filter((x) => x !== term)].slice(0, 4));
    setOpen(false);
    inputRef.current?.blur();
  };

  return (
    <div className="relative flex flex-col gap-1.5 w-full">
      <div className={`flex items-center gap-2 px-3 py-2 min-h-[44px] bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 ${getRadiusClass('control')}`}>
        <Search className="w-4 h-4 shrink-0" style={{ color: palette.hex }} />
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') runSearch(query || results[0] || '');
            if (e.key === 'Escape') setOpen(false);
          }}
          placeholder="Search with smart suggestions..."
          aria-label="Smart search"
          aria-expanded={open}
          className="w-full bg-transparent text-xs text-slate-900 dark:text-white placeholder-slate-400"
        />
        {query && (
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              setQuery('');
              setSearched('');
            }}
            aria-label="Clear search"
            className="min-w-[36px] min-h-[36px] flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      {open && query && (
        <ul className={`absolute top-[52px] inset-x-0 z-30 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg py-1 ${getRadiusClass('control')}`}>
          {visible.length === 0 && <li className="px-3 py-2 text-xs text-slate-400">No components match “{query}”</li>}
          {visible.map((r) => (
            <li key={r}>
              <button
                type="button"
                onMouseDown={() => {
                  setQuery(r);
                  runSearch(r);
                }}
                className="w-full min-h-[36px] px-3 py-1.5 text-left text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                {r}
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500">
        <span>Suggested:</span>
        {SUGGESTED.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => {
              setQuery(t);
              runSearch(t);
            }}
            className={`px-2 py-1 min-h-[32px] rounded-full cursor-pointer ${palette.softBg} ${palette.text} font-medium`}
          >
            {t}
          </button>
        ))}
        {recent.length > 0 && <span className="ml-1 text-slate-400">Recent: {recent.join(' · ')}</span>}
      </div>
      {searched && (
        <span className="text-[11px] font-mono text-slate-400">
          {results.length} result{results.length === 1 ? '' : 's'} for “{searched}”
        </span>
      )}
    </div>
  );
};
