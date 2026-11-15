// @jxui/react v3.0.0 — SegmentedControl (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 8. SegmentedControl — Daily / Weekly / Monthly with an accent pill on
// the active segment, 36px targets, aria-pressed, and a summary line.
const OPTIONS = ['Daily', 'Weekly', 'Monthly'];
const SUMMARY: Record<string, string> = {
  Daily: '24 data points · updated hourly',
  Weekly: '7 data points · updated daily',
  Monthly: '30 data points · updated weekly',
};

export const SegmentedControl: React.FC = () => {
  const [val, setVal] = useState('Daily');
  const { palette, getRadiusClass } = useJXTheme();
  return (
    <div className="flex flex-col gap-1.5">
      <div className={`inline-flex p-1 bg-slate-100 dark:bg-slate-800 ${getRadiusClass('pill')}`} role="group" aria-label="Time range">
        {OPTIONS.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => setVal(opt)}
            aria-pressed={val === opt}
            className={`min-h-[36px] px-3 py-1 text-xs font-semibold rounded-full cursor-pointer transition-all ${
              val === opt ? `text-white shadow-xs ${palette.bg}` : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      <span className="text-[11px] font-mono text-slate-400">{SUMMARY[val]}</span>
    </div>
  );
};
