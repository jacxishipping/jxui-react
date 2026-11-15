// @jxui/react v3.0.0 — ExpandableTable (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// 3. ExpandableTable — a real expandable table: each row expands to its
// detail panel. Rows expand independently; the chevron and aria-expanded
// track the state.
const ROWS = [
  { id: 'tokens', title: 'Design Token Palette', detail: '5 dynamic accents: Indigo, Violet, Emerald, Rose, Ocean. Accent and radius tokens are generated live from the theme.' },
  { id: 'theme', title: 'Theme Engine', detail: 'Light and dark modes with a persisted preference, plus compare mode for side-by-side inspection.' },
  { id: 'a11y', title: 'Accessibility Contracts', detail: 'Keyboard navigation, focus-visible rings and screen-reader announcements are specified per component.' },
];

export const ExpandableTable: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ tokens: true });
  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden text-xs divide-y divide-slate-100 dark:divide-slate-800">
      {ROWS.map((row) => {
        const open = Boolean(expanded[row.id]);
        return (
          <div key={row.id}>
            <button
              type="button"
              onClick={() => setExpanded((e) => ({ ...e, [row.id]: !e[row.id] }))}
              aria-expanded={open}
              className="w-full min-h-[44px] flex items-center justify-between gap-2 px-3 py-2 cursor-pointer font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-left"
            >
              <span>{row.title}</span>
              <ChevronDown className={`w-4 h-4 shrink-0 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>
            {open && <div className="px-3 pb-3 text-slate-500 dark:text-slate-400 leading-relaxed">{row.detail}</div>}
          </div>
        );
      })}
    </div>
  );
};
