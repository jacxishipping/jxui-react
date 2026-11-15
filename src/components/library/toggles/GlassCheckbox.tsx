// @jxui/react v3.0.0 — GlassCheckbox (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check } from 'lucide-react';

// 5. GlassCheckbox — a frosted-glass labelled checkbox: backdrop blur, a
// palette-coloured animated check, a 36px row target and proper checkbox
// semantics.
export const GlassCheckbox: React.FC = () => {
  const [checked, setChecked] = useState(true);
  const { palette } = useJXTheme();
  return (
    <button
      type="button"
      onClick={() => setChecked(!checked)}
      role="checkbox"
      aria-checked={checked}
      aria-label="Enable glass notifications"
      className="min-h-[36px] flex items-center gap-2.5 px-1 cursor-pointer text-left"
    >
      <span
        className={`w-6 h-6 min-w-[24px] rounded-md bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border flex items-center justify-center transition-all ${
          checked ? 'border-transparent' : 'border-white/50 dark:border-slate-700'
        }`}
        style={checked ? { backgroundColor: palette.hex } : undefined}
      >
        {checked && <Check className="w-4 h-4 text-white animate-scale-in" />}
      </span>
      <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
        Glass notifications {checked ? '· on' : '· off'}
      </span>
    </button>
  );
};
