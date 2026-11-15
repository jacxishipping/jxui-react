// @jxui/react v3.0.0 — LiquidSwitch (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 1. LiquidSwitch — a liquid switch: the thumb stretches (scales wide)
// while pressed and slides across, with a label and proper switch semantics.
export const LiquidSwitch: React.FC = () => {
  const [checked, setChecked] = useState(true);
  const [pressed, setPressed] = useState(false);
  const { palette } = useJXTheme();
  return (
    <button
      type="button"
      onClick={() => setChecked(!checked)}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      role="switch"
      aria-checked={checked}
      aria-label="Liquid switch"
      className="min-h-[36px] flex items-center gap-2.5 px-1 cursor-pointer"
    >
      <span
        className={`relative w-12 h-7 rounded-full transition-colors duration-300 p-0.5 shrink-0 ${
          checked ? '' : 'bg-slate-300 dark:bg-slate-700'
        }`}
        style={checked ? { backgroundColor: palette.hex } : undefined}
      >
        <span
          className={`absolute top-0.5 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${
            checked ? 'left-[26px]' : 'left-0.5'
          } ${pressed ? 'w-8' : 'w-6'}`}
        />
      </span>
      <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
        Liquid {checked ? '· on' : '· off'}
      </span>
    </button>
  );
};
