// @jxui/react v3.0.0 — InfiniteScroll (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 1. InfiniteScroll — a scrollable list that loads more rows as the
// IntersectionObserver sentinel scrolls into view, up to 120 items, with a
// live counter and a "Load more" fallback button.
const TOTAL = 120;
const PAGE = 20;

export const InfiniteScroll: React.FC = () => {
  const { palette } = useJXTheme();
  const [count, setCount] = useState(PAGE);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(() => {
    setCount((c) => Math.min(TOTAL, c + PAGE));
  }, []);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { root: el.parentElement, threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [loadMore]);

  const done = count >= TOTAL;

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="h-44 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800 text-xs">
        {Array.from({ length: count }, (_, i) => (
          <div key={i} className="px-3 py-1.5 flex items-center justify-between font-mono">
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Component #{String(i + 1).padStart(3, '0')}
            </span>
            <span className="text-slate-400">{['Buttons', 'Inputs', 'Cards', 'Navigation'][i % 4]}</span>
          </div>
        ))}
        <div ref={sentinelRef} aria-hidden="true" className="h-1" />
        {!done && (
          <div className="px-3 py-2 text-center text-[11px] text-slate-400">Loading more…</div>
        )}
      </div>
      <div className="px-3 py-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
        <span className="text-xs font-mono text-slate-500" aria-live="polite">
          Intersection sentinel: {count} of {TOTAL} items loaded
        </span>
        {!done && (
          <button
            type="button"
            onClick={loadMore}
            className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-semibold text-white cursor-pointer ${palette.bg}`}
          >
            Load more
          </button>
        )}
        {done && <span className="text-xs font-semibold text-emerald-600">All items loaded ✓</span>}
      </div>
    </div>
  );
};
