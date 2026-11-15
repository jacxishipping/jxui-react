// @jxui/react v3.0.0 — AnimatedCheckbox (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check } from 'lucide-react';

// 4. AnimatedCheckbox — a labelled checkbox with a springy animated check:
// the tick scales and pops in on check, and the whole row (36px target) is
// clickable, with proper checkbox semantics.
export const AnimatedCheckbox: React.FC = () => {
  const [checked, setChecked] = useState(true);
  const { palette } = useJXTheme();
  return (
    <button
      type="button"
      onClick={() => setChecked(!checked)}
      role="checkbox"
      aria-checked={checked}
      aria-label="Enable telemetry"
      className="min-h-[36px] flex items-center gap-2.5 px-1 cursor-pointer text-left"
    >
      <span
        className={`w-6 h-6 min-w-[24px] rounded-md border-2 flex items-center justify-center transition-all ${
          checked ? `border-transparent text-white ${palette.bg}` : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'
        }`}
      >
        {checked && <Check className="w-4 h-4 animate-scale-in" />}
      </span>
      <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
        Enable telemetry {checked ? '· on' : '· off'}
      </span>
    </button>
  );
};
