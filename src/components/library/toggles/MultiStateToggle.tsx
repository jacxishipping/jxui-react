// @jxui/react v3.0.0 — MultiStateToggle (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Power, Leaf, Zap } from 'lucide-react';

// 12. MultiStateToggle — cycles Off → Eco → Turbo. Each state has its own
// colour and icon, the button shows the current mode, and three dots below
// jump straight to a state.
const STATES = [
  { label: 'Off', icon: Power, className: 'bg-slate-100 dark:bg-slate-800 text-slate-500' },
  { label: 'Eco', icon: Leaf, className: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' },
  { label: 'Turbo', icon: Zap, className: 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300' },
];

export const MultiStateToggle: React.FC = () => {
  const [state, setState] = useState(0); // 0: Off, 1: Eco, 2: Turbo
  const { palette } = useJXTheme();
  const current = STATES[state];
  const Icon = current.icon;

  return (
    <div className="flex flex-col gap-1.5">
      <button
        type="button"
        onClick={() => setState((s) => (s + 1) % 3)}
        aria-label={`Power mode: ${current.label}. Activate to change.`}
        className={`min-h-[44px] px-3 py-1.5 text-xs font-semibold rounded-lg cursor-pointer flex items-center gap-2 ${current.className}`}
      >
        <Icon className="w-4 h-4" />
        Mode: <span className="font-bold" style={state === 0 ? { color: palette.hex } : undefined}>{current.label}</span>
        <span className="ml-auto text-[11px] opacity-70">tap to cycle</span>
      </button>
      <div className="flex gap-1.5" role="group" aria-label="Jump to a power mode">
        {STATES.map((s, i) => (
          <button
            key={s.label}
            type="button"
            onClick={() => setState(i)}
            aria-label={`Set mode to ${s.label}`}
            aria-pressed={state === i}
            className={`flex-1 min-h-[36px] rounded-lg text-[11px] font-semibold cursor-pointer ${s.className} ${state === i ? 'ring-2 ring-offset-1' : 'opacity-60'}`}
            style={state === i ? ({ '--tw-ring-color': palette.hex } as React.CSSProperties) : undefined}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
};
