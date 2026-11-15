// @jxui/react v3.0.0 — RangeSlider (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 19. RangeSlider — controlled slider in the theme accent, with a numeric
// readout, an editable value field and quick preset buttons.
export const RangeSlider: React.FC = () => {
  const [val, setVal] = useState(48);
  const [draft, setDraft] = useState('48');
  const { palette } = useJXTheme();

  const apply = (next: number) => {
    const clamped = Math.max(0, Math.min(100, next));
    setVal(clamped);
    setDraft(String(clamped));
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center gap-3 w-full">
        <input
          type="range"
          min={0}
          max={100}
          value={val}
          onChange={(e) => apply(Number(e.target.value))}
          aria-label="Range value"
          className="w-full cursor-pointer"
          style={{ accentColor: palette.hex }}
        />
        <span className="flex items-center gap-0.5 font-mono text-xs text-slate-700 dark:text-slate-300 shrink-0">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value.replace(/[^0-9]/g, ''))}
            onBlur={() => apply(Number(draft) || 0)}
            onKeyDown={(e) => e.key === 'Enter' && apply(Number(draft) || 0)}
            aria-label="Value as a number"
            className="w-11 min-h-[36px] px-1 py-1 text-center bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-slate-900 dark:text-white"
          />
          %
        </span>
      </div>
      <div className="flex gap-1.5" role="group" aria-label="Value presets">
        {[0, 25, 50, 75, 100].map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => apply(p)}
            aria-pressed={val === p}
            className={`min-h-[36px] px-2.5 rounded-lg text-[11px] font-semibold font-mono cursor-pointer ${
              val === p ? 'text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
            style={val === p ? { backgroundColor: palette.hex } : undefined}
          >
            {p}%
          </button>
        ))}
      </div>
    </div>
  );
};
