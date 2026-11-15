// @jxui/react v3.0.0 — ImageComparison (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 6. ImageComparison — drag the divider (or use the presets / arrow keys)
// to compare the two versions. The JXUI side wipes over the MUI side and
// the split percentage is shown live.
export const ImageComparison: React.FC = () => {
  const { palette } = useJXTheme();
  const [slider, setSlider] = useState(50);

  return (
    <div className="w-full max-w-xs flex flex-col gap-2">
      <div className="w-64 h-28 border rounded-xl overflow-hidden relative select-none">
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
          <div className="text-center">
            <div className="text-xs font-bold text-slate-500">MUI</div>
            <div className="text-[10px] text-slate-400">34ms render · 412 KB</div>
          </div>
        </div>
        <div
          style={{ width: `${slider}%` }}
          className="absolute inset-y-0 left-0 overflow-hidden"
        >
          <div className={`w-64 h-28 bg-gradient-to-br ${palette.gradient} text-white flex items-center justify-center`}>
            <div className="text-center">
              <div className="text-xs font-bold">JXUI</div>
              <div className="text-[10px] text-white/80">0.8ms render · 96 KB</div>
            </div>
          </div>
        </div>
        <div
          style={{ left: `${slider}%` }}
          aria-hidden="true"
          className="absolute inset-y-0 w-0.5 bg-white shadow-md -translate-x-1/2"
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white text-slate-700 shadow flex items-center justify-center text-[10px] font-bold">
            ↔
          </div>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={slider}
          onChange={(e) => setSlider(Number(e.target.value))}
          aria-label={`Comparison split, ${slider} percent JXUI`}
          className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
        />
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-1" role="group" aria-label="Split presets">
          {[0, 25, 50, 75, 100].map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setSlider(v)}
              aria-pressed={slider === v}
              className={`min-h-[32px] px-2 rounded-lg text-[11px] font-mono font-semibold cursor-pointer ${
                slider === v ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              {v}%
            </button>
          ))}
        </div>
        <span className="text-[11px] font-mono text-slate-500" aria-live="polite">
          {slider}% JXUI
        </span>
      </div>
    </div>
  );
};
