// @jxui/react v3.0.0 — ScrollProgress (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 3. ScrollProgress — a live scroll-progress bar bound to its own scrollable
// demo panel: scrolling the panel moves the bar and the percentage readout,
// and "Jump to bottom" scrolls to the end.
const LINES = [
  'Design tokens — colours, radii, spacing',
  'Typography scale and hierarchy',
  'Elevation and shadow system',
  'Focus states and keyboard flow',
  'Motion and reduced-motion support',
  'Dark mode and theme switching',
  'Density and responsive breakpoints',
  'Accessibility audit checklist',
];

export const ScrollProgress: React.FC = () => {
  const { palette } = useJXTheme();
  const [progress, setProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    setProgress(max > 0 ? Math.round((el.scrollTop / max) * 100) : 0);
  };

  const jumpTo = (pos: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    el.scrollTo({ top: max * pos, behavior: 'smooth' });
  };

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 flex flex-col gap-2">
      <div
        className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Scroll progress"
      >
        <div style={{ width: `${progress}%` }} className={`h-full ${palette.bg} transition-[width] duration-100`} />
      </div>
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="h-28 overflow-y-auto rounded-lg bg-slate-50 dark:bg-slate-800/60 p-2 text-xs space-y-1.5"
        tabIndex={0}
        aria-label="Scrollable demo content"
      >
        {LINES.map((line, i) => (
          <div key={line} className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <span className="font-mono text-[10px] text-slate-400">{String(i + 1).padStart(2, '0')}</span>
            {line}
          </div>
        ))}
        <div className="text-[11px] text-slate-400 pt-1">— End of demo content —</div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-mono text-slate-500" aria-live="polite">{progress}% scrolled</span>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => jumpTo(0)}
            className="min-h-[36px] px-3 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"
          >
            Top
          </button>
          <button
            type="button"
            onClick={() => jumpTo(1)}
            className={`min-h-[36px] px-3 rounded-lg text-xs font-semibold text-white cursor-pointer ${palette.bg}`}
          >
            Jump to bottom
          </button>
        </div>
      </div>
    </div>
  );
};
