// @jxui/react v3.0.0 — VirtualList (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 2. VirtualList — a real windowing list over 100,000 rows: only the rows
// intersecting the viewport (plus a small overscan) are in the DOM, and the
// live counter shows exactly how many DOM nodes are active. A jump control
// scrolls straight to a chosen row.
const TOTAL = 100000;
const ROW_HEIGHT = 28;
const OVERSCAN = 3;

export const VirtualList: React.FC = () => {
  const { palette } = useJXTheme();
  const [scrollTop, setScrollTop] = useState(0);
  const [jump, setJump] = useState('50000');
  const scrollRef = useRef<HTMLDivElement>(null);

  const viewportHeight = 168;
  const startIndex = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - OVERSCAN);
  const endIndex = Math.min(
    TOTAL - 1,
    Math.ceil((scrollTop + viewportHeight) / ROW_HEIGHT) + OVERSCAN
  );
  const visibleCount = endIndex - startIndex + 1;

  const onScroll = useCallback(() => {
    setScrollTop(scrollRef.current?.scrollTop ?? 0);
  }, []);

  const jumpTo = () => {
    const row = Math.max(0, Math.min(TOTAL - 1, parseInt(jump, 10) || 0));
    scrollRef.current?.scrollTo({ top: row * ROW_HEIGHT });
  };

  const rows = [];
  for (let i = startIndex; i <= endIndex; i++) {
    rows.push(
      <div
        key={i}
        style={{ top: i * ROW_HEIGHT, height: ROW_HEIGHT }}
        className="absolute inset-x-0 px-3 flex items-center justify-between text-xs font-mono border-b border-slate-100 dark:border-slate-800/60"
      >
        <span className="font-semibold text-slate-700 dark:text-slate-200">
          Row #{i.toLocaleString()}
        </span>
        <span className="text-slate-400">
          {['Buttons', 'Inputs', 'Cards', 'Navigation'][i % 4]} · {(i * 2654435761 % 1000).toString().padStart(3, '0')}ms
        </span>
      </div>
    );
  }

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="relative overflow-y-auto"
        style={{ height: viewportHeight }}
        tabIndex={0}
        aria-label="Virtual list of 100,000 rows"
      >
        <div style={{ height: TOTAL * ROW_HEIGHT }} className="relative">
          {rows}
        </div>
      </div>
      <div className="px-3 py-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2 flex-wrap">
        <span className="text-xs font-mono text-slate-500" aria-live="polite">
          Virtual viewport: {visibleCount} DOM nodes active · rows {startIndex.toLocaleString()}–{endIndex.toLocaleString()} of {TOTAL.toLocaleString()}
        </span>
        <div className="flex items-center gap-1.5">
          <input
            value={jump}
            onChange={(e) => setJump(e.target.value.replace(/[^0-9]/g, ''))}
            inputMode="numeric"
            aria-label="Row number to jump to"
            className="w-20 min-h-[36px] px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 font-mono text-xs text-slate-900 dark:text-white"
          />
          <button
            type="button"
            onClick={jumpTo}
            className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-semibold text-white cursor-pointer ${palette.bg}`}
          >
            Jump to row
          </button>
        </div>
      </div>
    </div>
  );
};
