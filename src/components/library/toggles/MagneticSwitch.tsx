// @jxui/react v3.0.0 — MagneticSwitch (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 8. MagneticSwitch — a switch whose thumb is magnetically pulled toward
// the cursor as it approaches (it leans up to 4px toward the pointer), and
// which fills with the theme accent when on.
export const MagneticSwitch: React.FC = () => {
  const [active, setActive] = useState(false);
  const [lean, setLean] = useState(0);
  const { palette } = useJXTheme();

  return (
    <button
      type="button"
      onClick={() => setActive(!active)}
      role="switch"
      aria-checked={active}
      aria-label="Magnetic switch"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        setLean(Math.max(-4, Math.min(4, x * 8)));
      }}
      onMouseLeave={() => setLean(0)}
      className="min-h-[36px] flex items-center gap-2.5 px-1 cursor-pointer"
    >
      <span
        className="relative w-14 h-7 rounded-full p-1 shrink-0 transition-colors"
        style={{ backgroundColor: active ? palette.hex : undefined }}
      >
        <span className="absolute inset-0 rounded-full bg-slate-200 dark:bg-slate-800 -z-10" aria-hidden="true" />
        <span
          className="block w-5 h-5 bg-white dark:bg-slate-950 rounded-full shadow-sm transition-transform duration-300"
          style={{ transform: `translateX(${active ? 28 + lean : lean}px)` }}
        />
      </span>
      <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
        Magnetic {active ? '· on' : '· off'}
      </span>
    </button>
  );
};
