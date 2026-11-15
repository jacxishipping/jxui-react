// @jxui/react v3.0.0 — PageTransition (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 4. PageTransition — a mini browser with three pages. Switching pages
// really transitions: the outgoing content fades and slides 12px down,
// then the new page fades and slides in. Instant swap under reduced motion.
const PAGES = [
  { id: 'home', label: 'Home', title: 'Welcome to JXUI', body: '361 components, one unified system.' },
  { id: 'docs', label: 'Docs', title: 'Component Docs', body: 'Every component ships a keyboard contract and token export.' },
  { id: 'settings', label: 'Settings', title: 'Workspace Settings', body: 'Accent, radius and density live here.' },
];

export const PageTransition: React.FC = () => {
  const { palette } = useJXTheme();
  const [page, setPage] = useState(PAGES[0].id);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, [page]);

  const current = PAGES.find((p) => p.id === page) ?? PAGES[0];
  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="flex gap-1 bg-slate-100 dark:bg-slate-800/70 p-1.5">
        {PAGES.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setPage(p.id)}
            aria-current={page === p.id ? 'page' : undefined}
            className={`min-h-[36px] flex-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
              page === p.id ? `${palette.bg} text-white` : 'text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>
      <div
        key={page}
        className="p-4 bg-white dark:bg-slate-900 transition-all duration-300 ease-out"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(12px)' }}
      >
        <div className="text-sm font-bold text-slate-900 dark:text-white">{current.title}</div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{current.body}</p>
        <p className="font-mono text-[10px] text-slate-400 mt-2">Page enter: fade & slide 12px</p>
      </div>
    </div>
  );
};
