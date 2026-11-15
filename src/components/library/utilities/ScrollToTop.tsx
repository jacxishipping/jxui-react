// @jxui/react v3.0.0 — ScrollToTop (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { ArrowUp } from 'lucide-react';

// 4. ScrollToTop — a scrollable demo panel whose "back to top" button only
// appears after scrolling down, and scrolls the panel back to the top on
// click. A live readout shows the panel's current scroll offset.
const ROWS = Array.from({ length: 24 }, (_, i) => `Row ${i + 1} — component registry entry`);

export const ScrollToTop: React.FC = () => {
  const { palette } = useJXTheme();
  const [scrollY, setScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      setScrollY(el.scrollTop);
      setScrolled(el.scrollTop > 40);
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
      <div
        ref={scrollRef}
        className="h-36 overflow-y-auto p-2 text-xs space-y-1"
        tabIndex={0}
        aria-label="Scrollable demo list"
      >
        {ROWS.map((row) => (
          <div key={row} className="px-2 py-1 rounded bg-slate-50 dark:bg-slate-800/60 font-mono text-slate-600 dark:text-slate-300">
            {row}
          </div>
        ))}
      </div>
      <div className="px-3 py-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <span className="text-[11px] font-mono text-slate-500" aria-live="polite">
          Scroll offset: {Math.round(scrollY)}px
        </span>
        <span className="text-[11px] text-slate-400">{scrolled ? 'Button visible ↑' : 'Scroll down to reveal the button'}</span>
      </div>
      {scrolled && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className={`absolute bottom-12 right-3 w-11 h-11 rounded-full ${palette.bg} text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer animate-fadeIn`}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
