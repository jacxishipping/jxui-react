// @jxui/react v3.0.0 — TriStateToggle (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check, Minus } from 'lucide-react';

// 13. TriStateToggle — cycles Unchecked → Indeterminate → Checked, with a
// label naming the current state, aria-checked="mixed" for the middle state,
// and a 36px row target.
type TriState = 'unchecked' | 'indeterminate' | 'checked';
const ORDER: TriState[] = ['unchecked', 'indeterminate', 'checked'];
const LABELS: Record<TriState, string> = {
  unchecked: 'Unchecked',
  indeterminate: 'Partially selected',
  checked: 'Checked',
};

export const TriStateToggle: React.FC = () => {
  const [state, setState] = useState<TriState>('indeterminate');
  const { palette } = useJXTheme();
  const cycle = () => setState((s) => ORDER[(ORDER.indexOf(s) + 1) % ORDER.length]);

  return (
    <button
      type="button"
      onClick={cycle}
      role="checkbox"
      aria-checked={state === 'indeterminate' ? 'mixed' : state === 'checked'}
      aria-label={`Tri-state toggle, currently ${LABELS[state].toLowerCase()}`}
      className="min-h-[36px] flex items-center gap-2.5 px-1 cursor-pointer text-left"
    >
      <span
        className={`w-6 h-6 min-w-[24px] rounded-md border-2 flex items-center justify-center transition-all ${
          state === 'checked'
            ? `border-transparent text-white ${palette.bg}`
            : state === 'indeterminate'
              ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/40'
              : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'
        }`}
      >
        {state === 'checked' && <Check className="w-4 h-4 animate-scale-in" />}
        {state === 'indeterminate' && <Minus className="w-4 h-4 text-amber-500" />}
      </span>
      <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
        Tri-state · <span className="font-semibold">{LABELS[state]}</span>
      </span>
    </button>
  );
};
