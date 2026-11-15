// @jxui/react v3.0.0 — PricingCard (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check } from 'lucide-react';

// 16. PricingCard — a pricing card with monthly/annual billing (annual
// saves 20%), a feature list and a working plan selector.
const FEATURES = ['361 components', 'Theme tokens & dark mode', 'Priority support', 'Commercial licence'];

export const PricingCard: React.FC = () => {
  const { palette } = useJXTheme();
  const [annual, setAnnual] = useState(true);
  const [selected, setSelected] = useState(false);
  const price = annual ? 39 : 49;

  return (
    <div className={`p-4 border-2 ${palette.border} rounded-2xl ${palette.softBg} text-xs flex flex-col gap-3`}>
      <div className="flex items-center justify-between">
        <div className="font-bold text-sm text-slate-900 dark:text-white">Enterprise</div>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${palette.bg} text-white`}>
          {annual ? 'Save 20%' : 'Most popular'}
        </span>
      </div>
      <div className="flex items-center gap-1" role="group" aria-label="Billing period">
        {([
          { id: false, label: 'Monthly' },
          { id: true, label: 'Annual' },
        ] as const).map((opt) => (
          <button
            key={opt.label}
            type="button"
            onClick={() => setAnnual(opt.id)}
            aria-pressed={annual === opt.id}
            className={`min-h-[36px] px-3 py-1.5 rounded-lg font-semibold cursor-pointer ${
              annual === opt.id ? `${palette.bg} text-white` : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
      <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
        ${price}
        <span className="text-xs font-normal text-slate-500">/mo{annual ? ' · billed annually' : ''}</span>
      </div>
      <ul className="space-y-1.5">
        {FEATURES.map((f) => (
          <li key={f} className="flex items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-300">
            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => setSelected((s) => !s)}
        aria-pressed={selected}
        className={`min-h-[44px] w-full rounded-xl font-bold text-white cursor-pointer ${selected ? 'bg-emerald-600' : palette.bg}`}
      >
        {selected ? '✓ Enterprise plan selected' : 'Choose Enterprise'}
      </button>
    </div>
  );
};
