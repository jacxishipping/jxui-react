// @jxui/react v3.0.0 — SlidingTabs (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 12. SlidingTabs — tabs with a sliding accent indicator (its position is
// measured from the active button) and a real content panel per tab, with
// arrow-key navigation between tabs.
const TABS = [
  { id: 'specs', label: 'Specs', content: '361 components · 18 categories · React 19 + TypeScript. Every primitive ships with a live preview and a copyable JSX snippet.' },
  { id: 'props', label: 'Props', content: 'variant, tone, size, disabled, loading and label. Style-prop components respond to all of them; prop-less components render a static preview.' },
  { id: 'changelog', label: 'Changelog', content: 'v3.0.0 — unified catalog, theme tokens, deferred previews. v2.4.0 — glass surfaces. v2.0.0 — first 290 primitives.' },
];

export const SlidingTabs: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const measure = (idx: number) => {
    const el = tabRefs.current[idx];
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  };

  const select = (idx: number) => {
    setActive(idx);
    measure(idx);
  };

  useEffect(() => {
    measure(active);
    // Measure once on mount so the indicator starts under the active tab.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full max-w-sm">
      <div
        role="tablist"
        aria-label="Component details"
        className="relative flex border-b border-slate-200 dark:border-slate-800 text-xs font-semibold"
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') select((active + 1) % TABS.length);
          if (e.key === 'ArrowLeft') select((active - 1 + TABS.length) % TABS.length);
        }}
      >
        {TABS.map((tab, i) => (
          <button
            key={tab.id}
            ref={(el) => { tabRefs.current[i] = el; }}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => select(i)}
            className={`min-h-[44px] px-4 py-2 relative cursor-pointer ${
              active === i ? palette.text : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
        <div
          aria-hidden="true"
          style={{ left: indicator.left, width: indicator.width || undefined }}
          className={`absolute bottom-0 h-0.5 ${palette.bg} transition-all duration-200 ${indicator.width ? '' : 'w-16 left-0'}`}
        />
      </div>
      <div role="tabpanel" className={`mt-3 p-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 ${getRadiusClass('card')}`}>
        {TABS[active].content}
      </div>
    </div>
  );
};
