// @jxui/react v3.0.0 — SelectableCard (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check } from 'lucide-react';

// 10. SelectableCard — three selectable tier cards (keyboard accessible:
// real buttons with aria-pressed), exactly one selected at a time, with
// the selected card in the theme accent and a check badge.
const TIERS = [
  { name: 'Starter', detail: '1,000 telemetry events / mo' },
  { name: 'Pro', detail: '100,000 telemetry events / mo' },
  { name: 'Enterprise', detail: 'Unlimited telemetry events' },
];

export const SelectableCard: React.FC = () => {
  const [selected, setSelected] = useState('Enterprise');
  const { palette, getRadiusClass } = useJXTheme();
  return (
    <div className="flex flex-col gap-2" role="group" aria-label="Choose a tier">
      {TIERS.map((tier) => {
        const active = selected === tier.name;
        return (
          <button
            key={tier.name}
            type="button"
            onClick={() => setSelected(tier.name)}
            aria-pressed={active}
            className={`w-full min-h-[44px] p-3 border-2 cursor-pointer transition-all text-left ${getRadiusClass('card')} ${
              active ? palette.softBg : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
            }`}
            style={active ? { borderColor: palette.hex } : undefined}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900 dark:text-white">{tier.name} Tier</span>
              {active && (
                <span className={`w-5 h-5 rounded-full ${palette.bg} text-white flex items-center justify-center shrink-0`}>
                  <Check className="w-3.5 h-3.5" />
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-500 mt-1">{tier.detail}</p>
          </button>
        );
      })}
    </div>
  );
};
