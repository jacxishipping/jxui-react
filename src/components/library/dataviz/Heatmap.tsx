// @jxui/react v3.0.0 — Heatmap (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 10. Heatmap — a real activity heatmap: 7 days x 5 weeks, hover or focus a
// cell to see its value, colour intensity follows the live theme accent.
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
function valueAt(day: number, week: number) {
  return (day * 7 + week * 13 + 5) % 5;
}

export const Heatmap: React.FC = () => {
  const { palette } = useJXTheme();
  const [hover, setHover] = useState<{ day: number; week: number } | null>(null);
  const [selected, setSelected] = useState<{ day: number; week: number } | null>(null);
  const active = hover ?? selected;

  return (
    <div className="w-full space-y-2">
      <div className="flex gap-1.5">
        <div className="flex flex-col gap-1.5 justify-between py-0.5 text-[10px] text-slate-400">
          {DAYS.map((d) => (
            <span key={d} className="h-5 leading-5">{d}</span>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-1.5">
          {Array.from({ length: 5 }, (_, week) =>
            DAYS.map((_, day) => {
              const v = valueAt(day, week);
              const isActive = active?.day === day && active?.week === week;
              return (
                <button
                  key={`${week}-${day}`}
                  type="button"
                  aria-label={`${DAYS[day]}, week ${week + 1}: activity ${v} of 4`}
                  onMouseEnter={() => setHover({ day, week })}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setSelected({ day, week })}
                  onClick={() => setSelected({ day, week })}
                  style={{ opacity: 0.25 + v * 0.19, backgroundColor: palette.hex }}
                  className={`w-5 h-5 rounded cursor-pointer transition-transform hover:scale-110 ${isActive ? 'ring-2 ring-offset-1 ring-slate-400 dark:ring-slate-500 scale-110' : ''}`}
                />
              );
            })
          )}
        </div>
      </div>
      <div className="flex items-center justify-between text-[11px] text-slate-500">
        <span>Less</span>
        <span className="font-mono">
          {active ? `${DAYS[active.day]} · week ${active.week + 1} · activity ${valueAt(active.day, active.week)}/4` : 'Hover a cell to inspect it'}
        </span>
        <span>More</span>
      </div>
    </div>
  );
};
