// @jxui/react v3.0.0 — StaggeredReveal (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 5. StaggeredReveal — five items that reveal one after another with a
// 150ms stagger once you press Reveal (or automatically on mount), each
// fading and sliding up. Replay hides them and runs the stagger again.
const ITEMS = ['Design tokens', 'Spring motion', 'Keyboard contracts', 'Dark mode', 'Token export'];

export const StaggeredReveal: React.FC = () => {
  const { palette } = useJXTheme();
  const [shown, setShown] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(ITEMS.length);
      return;
    }
    setShown(ITEMS.length);
  }, []);

  useEffect(() => {
    if (!running) return;
    if (shown >= ITEMS.length) {
      setRunning(false);
      return;
    }
    const id = setTimeout(() => setShown((s) => s + 1), 150);
    return () => clearTimeout(id);
  }, [running, shown]);

  const reveal = () => {
    setShown(0);
    setRunning(true);
  };

  return (
    <div className="w-full space-y-2">
      <div className="flex flex-wrap gap-1.5">
        {ITEMS.map((item, i) => (
          <div
            key={item}
            className="px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-all duration-500"
            style={{
              opacity: i < shown ? 1 : 0,
              transform: i < shown ? 'translateY(0)' : 'translateY(8px)',
              borderColor: i < shown ? palette.hex : undefined,
              color: i < shown ? palette.hex : undefined,
              backgroundColor: i < shown ? `${palette.hex}14` : undefined,
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-slate-500">
          {shown}/{ITEMS.length} revealed · 150ms stagger
        </span>
        <button
          type="button"
          onClick={reveal}
          className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-semibold text-white cursor-pointer ${palette.bg}`}
        >
          Replay stagger
        </button>
      </div>
    </div>
  );
};
