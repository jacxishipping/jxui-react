// @jxui/react v3.0.0 — InteractiveGauge (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 19. InteractiveGauge — a real gauge: drag the slider (or use the buttons)
// and the arc, needle and readout follow. Colour shifts with the value.
const R = 40;
const CIRC = Math.PI * R; // half circle

export const InteractiveGauge: React.FC = () => {
  const { palette } = useJXTheme();
  const [value, setValue] = useState(88);
  const frac = value / 100;
  const angle = -90 + frac * 180;
  const label = value < 40 ? 'Low' : value < 75 ? 'Good' : 'Excellent';
  const color = value < 40 ? '#f59e0b' : value < 75 ? palette.hex : '#059669';

  return (
    <div className="w-full flex flex-col items-center gap-2">
      <div className="relative w-36 h-[72px]">
        <svg viewBox="0 0 100 56" className="w-full h-full">
          <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" strokeWidth="9" strokeLinecap="round" className="stroke-slate-200 dark:stroke-slate-800" />
          <path
            d="M 10 50 A 40 40 0 0 1 90 50"
            fill="none"
            stroke={color}
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={`${frac * CIRC} ${CIRC}`}
            className="transition-all duration-300"
          />
          <line
            x1="50"
            y1="50"
            x2={50 + 30 * Math.cos((angle * Math.PI) / 180)}
            y2={50 + 30 * Math.sin((angle * Math.PI) / 180)}
            stroke="currentColor"
            strokeWidth="2"
            className="text-slate-700 dark:text-slate-200 transition-all duration-300"
          />
          <circle cx="50" cy="50" r="4" className="fill-slate-700 dark:fill-slate-200" />
        </svg>
        <div className="absolute inset-x-0 bottom-0 text-center">
          <span className="font-mono text-lg font-bold text-slate-900 dark:text-white">{value}</span>
          <span className="text-[11px] text-slate-500"> / 100 · {label}</span>
        </div>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        aria-label="Gauge value"
        className="w-full accent-indigo-600"
      />
      <div className="flex gap-1.5">
        {[0, 25, 50, 75, 100].map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setValue(v)}
            aria-pressed={value === v}
            className={`min-h-[32px] px-2.5 rounded-lg text-[11px] font-semibold font-mono cursor-pointer ${
              value === v ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
};
