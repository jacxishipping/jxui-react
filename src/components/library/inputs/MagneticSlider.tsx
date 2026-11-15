// @jxui/react v3.0.0 — MagneticSlider (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 22. MagneticSlider — a controlled slider whose thumb is magnetically
// attracted to 25% snap points while dragging (the track highlights the
// nearest snap), and settles on the nearest snap on release.
const SNAPS = [0, 25, 50, 75, 100];

export const MagneticSlider: React.FC = () => {
  const [val, setVal] = useState(50);
  const [dragging, setDragging] = useState(false);
  const { palette } = useJXTheme();
  const nearest = SNAPS.reduce((a, b) => (Math.abs(b - val) < Math.abs(a - val) ? b : a));

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="flex items-center gap-2 w-full">
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={val}
          onChange={(e) => setVal(Number(e.target.value))}
          onPointerDown={() => setDragging(true)}
          onPointerUp={() => {
            setDragging(false);
            setVal(nearest);
          }}
          aria-label="Magnetic slider, snaps to 25 percent steps"
          aria-valuetext={`${val}%`}
          className="w-full cursor-pointer"
          style={{ accentColor: palette.hex }}
        />
        <span className="font-mono text-xs text-slate-700 dark:text-slate-300 w-11 text-right shrink-0">{val}%</span>
      </div>
      <div className="flex justify-between text-[10px] font-mono text-slate-400" aria-hidden="true">
        {SNAPS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setVal(s)}
            className={`min-w-[36px] min-h-[24px] rounded cursor-pointer ${nearest === s ? 'font-bold' : ''}`}
            style={nearest === s ? { color: palette.hex } : undefined}
          >
            {s}%
          </button>
        ))}
      </div>
      <span className="text-[11px] text-slate-400">
        {dragging ? `Pulling toward ${nearest}%…` : `Snapped to ${nearest}%`}
      </span>
    </div>
  );
};
