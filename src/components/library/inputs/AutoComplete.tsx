// @jxui/react v3.0.0 — AutoComplete (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Search, X } from 'lucide-react';

// 9. AutoComplete — filters a framework list as you type, with full
// keyboard navigation (ArrowUp/Down, Enter to pick, Escape to close),
// aria listbox roles and an empty state.
const ITEMS = ['React 19', 'Next.js 15', 'Vite 8', 'Tailwind v4', 'TypeScript 5.8', 'Motion 12', 'Zustand 5'];

export const AutoComplete: React.FC = () => {
  const [val, setVal] = useState('');
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const { palette, getRadiusClass } = useJXTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = ITEMS.filter((i) => i.toLowerCase().includes(val.toLowerCase()));

  const pick = (item: string) => {
    setVal(item);
    setOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        <input
          ref={inputRef}
          value={val}
          role="combobox"
          aria-expanded={open}
          aria-controls="jx-autocomplete-list"
          aria-activedescendant={open && filtered[highlight] ? `jx-ac-${highlight}` : undefined}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          onChange={(e) => {
            setVal(e.target.value);
            setOpen(true);
            setHighlight(0);
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              setHighlight((h) => Math.min(filtered.length - 1, h + 1));
            } else if (e.key === 'ArrowUp') {
              e.preventDefault();
              setHighlight((h) => Math.max(0, h - 1));
            } else if (e.key === 'Enter' && open && filtered[highlight]) {
              pick(filtered[highlight]);
            } else if (e.key === 'Escape') {
              setOpen(false);
            }
          }}
          placeholder="Type framework (e.g. React)..."
          className={`w-full min-h-[44px] pl-9 pr-9 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white ${getRadiusClass('control')}`}
        />
        {val && (
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              setVal('');
              setHighlight(0);
            }}
            aria-label="Clear autocomplete"
            className="absolute right-1 top-1/2 -translate-y-1/2 min-w-[36px] min-h-[36px] flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      {open && (
        <ul
          id="jx-autocomplete-list"
          role="listbox"
          className={`absolute top-full mt-1 inset-x-0 z-30 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg py-1 ${getRadiusClass('control')}`}
        >
          {filtered.length === 0 && (
            <li className="px-3 py-2 text-xs text-slate-400">No match for &ldquo;{val}&rdquo;</li>
          )}
          {filtered.map((item, i) => (
            <li
              key={item}
              id={`jx-ac-${i}`}
              role="option"
              aria-selected={i === highlight}
              onMouseDown={() => pick(item)}
              onMouseEnter={() => setHighlight(i)}
              className={`px-3 py-2 min-h-[36px] text-xs cursor-pointer flex items-center ${
                i === highlight ? `${palette.softBg} ${palette.text} font-semibold` : 'text-slate-700 dark:text-slate-200'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
