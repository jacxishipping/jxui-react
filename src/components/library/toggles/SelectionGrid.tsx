// @jxui/react v3.0.0 — SelectionGrid (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check } from 'lucide-react';

// 11. SelectionGrid — multi-select plan grid: toggle any of the three
// plans, each selected cell shows a check badge in the theme accent, and a
// summary line reports the selection (with a Select all / Clear control).
const PLANS = [
  { name: 'Plan 1', price: '$9/mo' },
  { name: 'Plan 2', price: '$19/mo' },
  { name: 'Plan 3', price: '$49/mo' },
];

export const SelectionGrid: React.FC = () => {
  const [selected, setSelected] = useState<number[]>([0]);
  const { palette } = useJXTheme();
  const toggle = (i: number) =>
    setSelected((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));

  return (
    <div className="w-full flex flex-col gap-1.5">
      <div className="grid grid-cols-3 gap-2" role="group" aria-label="Select plans">
        {PLANS.map((plan, i) => {
          const active = selected.includes(i);
          return (
            <button
              key={plan.name}
              type="button"
              onClick={() => toggle(i)}
              aria-pressed={active}
              className={`relative min-h-[44px] p-2 text-xs font-bold rounded-lg border text-center cursor-pointer transition-all ${
                active ? '' : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300'
              }`}
              style={active ? { borderColor: palette.hex, backgroundColor: `${palette.hex}14`, color: palette.hex } : undefined}
            >
              {active && (
                <span className={`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full ${palette.bg} text-white flex items-center justify-center`}>
                  <Check className="w-3 h-3" />
                </span>
              )}
              <span className="block">{plan.name}</span>
              <span className="block text-[11px] font-medium text-slate-400">{plan.price}</span>
            </button>
          );
        })}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-mono text-slate-400">
          {selected.length === 0 ? 'Nothing selected' : `${selected.length} selected: ${selected.map((i) => PLANS[i].name).join(', ')}`}
        </span>
        <button
          type="button"
          onClick={() => setSelected(selected.length === PLANS.length ? [] : [0, 1, 2])}
          className="min-h-[36px] px-2 text-[11px] font-semibold cursor-pointer"
          style={{ color: palette.hex }}
        >
          {selected.length === PLANS.length ? 'Clear' : 'Select all'}
        </button>
      </div>
    </div>
  );
};
