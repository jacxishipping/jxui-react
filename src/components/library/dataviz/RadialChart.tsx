// @jxui/react v3.0.0 — RadialChart (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 4. RadialChart — real radial progress: a slider and preset buttons drive
// the ring and the centre readout; the ring uses the theme accent.
const R = 14;
const CIRC = 2 * Math.PI * R;

export const RadialChart: React.FC = () => {
  const { palette } = useJXTheme();
  const [value, setValue] = useState(65);

  return (
    <div className="w-full flex flex-col items-center gap-2">
      <div className="w-24 h-24 relative flex items-center justify-center">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36" role="img" aria-label={`Radial progress ${value} percent`}>
          <circle cx="18" cy="18" r={R} fill="none" strokeWidth="3" className="stroke-slate-200 dark:stroke-slate-800" />
          <circle
            cx="18"
            cy="18"
            r={R}
            fill="none"
            stroke={palette.hex}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            strokeDashoffset={CIRC * (1 - value / 100)}
            className="transition-all duration-300"
          />
        </svg>
        <span className="absolute font-mono text-sm font-bold text-slate-900 dark:text-white">{value}%</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        aria-label="Radial progress value"
        className="w-full max-w-[220px]"
      />
      <div className="flex gap-1.5">
        {[0, 25, 50, 75, 100].map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setValue(v)}
            aria-pressed={value === v}
            className={`min-h-[36px] px-2.5 rounded-lg text-xs font-semibold font-mono cursor-pointer ${
              value === v ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            {v}%
          </button>
        ))}
      </div>
    </div>
  );
};
