// @jxui/react v3.0.0 — AnimatedRadio (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 7. AnimatedRadio — a real radio group: one option is selected at a time,
// the dot animates in with a scale pop, and the group has proper radiogroup
// semantics (a single toggling radio was not a radio at all).
const OPTIONS = ['Starter', 'Pro', 'Enterprise'];

export const AnimatedRadio: React.FC = () => {
  const [selected, setSelected] = useState('Pro');
  const { palette } = useJXTheme();
  return (
    <div className="flex flex-col gap-1" role="radiogroup" aria-label="Choose a plan">
      {OPTIONS.map((opt) => {
        const active = selected === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => setSelected(opt)}
            role="radio"
            aria-checked={active}
            className="min-h-[36px] flex items-center gap-2.5 px-1 cursor-pointer text-left"
          >
            <span
              className="w-6 h-6 min-w-[24px] rounded-full border-2 flex items-center justify-center transition-colors"
              style={{ borderColor: active ? palette.hex : undefined }}
            >
              {active && (
                <span
                  className="w-3 h-3 rounded-full animate-scale-in"
                  style={{ backgroundColor: palette.hex }}
                />
              )}
            </span>
            <span className={`text-xs font-medium ${active ? 'text-slate-900 dark:text-white font-semibold' : 'text-slate-500 dark:text-slate-400'}`}>
              {opt}
            </span>
          </button>
        );
      })}
    </div>
  );
};
