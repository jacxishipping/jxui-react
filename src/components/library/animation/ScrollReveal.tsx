// @jxui/react v3.0.0 — ScrollReveal (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 6. ScrollReveal — a real IntersectionObserver reveal: items inside a
// scrollable viewport fade and slide in as they enter view. Scroll the
// box to watch them appear; Replay hides them again.
const ITEMS = [
  { title: 'Zero layout shift', body: 'Geometry is pre-allocated before paint.' },
  { title: 'Keyboard contracts', body: 'Every component documents its keys.' },
  { title: 'Token export', body: 'Accent and radius export as W3C tokens.' },
  { title: 'Dark mode', body: 'A single data-theme attribute flips the page.' },
  { title: '361 components', body: '61 showcases and 300 primitives.' },
  { title: 'Spring motion', body: 'Cubic-bezier springs on every transition.' },
];

export const ScrollReveal: React.FC = () => {
  const { palette } = useJXTheme();
  const rootRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [run, setRun] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(Object.fromEntries(ITEMS.map((_, i) => [i, true])));
      return;
    }
    setRevealed({});
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.idx);
            setRevealed((r) => ({ ...r, [idx]: true }));
          }
        }
      },
      { root, threshold: 0.4 }
    );
    root.querySelectorAll('[data-idx]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [run]);

  const count = Object.keys(revealed).length;
  return (
    <div className="w-full space-y-2">
      <div
        ref={rootRef}
        className="h-36 overflow-y-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 space-y-2"
        aria-label="Scrollable reveal viewport"
      >
        {ITEMS.map((item, i) => (
          <div
            key={item.title}
            data-idx={i}
            className="rounded-lg border border-slate-200 dark:border-slate-800 p-2.5 transition-all duration-500"
            style={{ opacity: revealed[i] ? 1 : 0, transform: revealed[i] ? 'translateY(0)' : 'translateY(12px)' }}
          >
            <div className="text-xs font-bold text-slate-800 dark:text-slate-100">{item.title}</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">{item.body}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-slate-500">
          IntersectionObserver · {count}/{ITEMS.length} revealed
        </span>
        <button
          type="button"
          onClick={() => {
            rootRef.current?.scrollTo({ top: 0 });
            setRun((r) => r + 1);
          }}
          className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-semibold text-white cursor-pointer ${palette.bg}`}
        >
          Replay reveal
        </button>
      </div>
    </div>
  );
};
