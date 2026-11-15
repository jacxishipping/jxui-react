// @jxui/react v3.0.0 — CircularCheckbox (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check } from 'lucide-react';

// 6. CircularCheckbox — a labelled circular checkbox: the filled dot
// animates in on check, the row is a 36px target, and it exposes proper
// checkbox semantics instead of a bare 20px box.
export const CircularCheckbox: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const { palette } = useJXTheme();
  return (
    <button
      type="button"
      onClick={() => setChecked(!checked)}
      role="checkbox"
      aria-checked={checked}
      aria-label="Subscribe to release notes"
      className="min-h-[36px] flex items-center gap-2.5 px-1 cursor-pointer text-left"
    >
      <span
        className={`w-6 h-6 min-w-[24px] rounded-full border-2 flex items-center justify-center transition-all ${
          checked ? `border-transparent ${palette.bg}` : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'
        }`}
      >
        {checked && <Check className="w-3.5 h-3.5 text-white animate-scale-in" />}
      </span>
      <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
        Subscribe to release notes {checked ? '· on' : '· off'}
      </span>
    </button>
  );
};
