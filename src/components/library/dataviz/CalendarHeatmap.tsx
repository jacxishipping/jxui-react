// @jxui/react v3.0.0 — CalendarHeatmap (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 11. CalendarHeatmap — GitHub-style contribution heatmap: 12 weeks x 7 days,
// accent intensity encodes activity, hover/focus a cell to inspect it.
const WEEKS = 12;
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
function activity(week: number, day: number) {
  return (week * 7 + day * 3 + 2) % 5;
}

export const CalendarHeatmap: React.FC = () => {
  const { palette } = useJXTheme();
  const [active, setActive] = useState<{ week: number; day: number } | null>({ week: 10, day: 2 });
  const total = Array.from({ length: WEEKS }, (_, w) => DAYS.map((_, d) => activity(w, d))).flat().reduce((s, v) => s + v, 0);

  return (
    <div className="w-full space-y-2">
      <div className="flex gap-1 overflow-x-auto pb-1">
        {Array.from({ length: WEEKS }, (_, week) => (
          <div key={week} className="flex flex-col gap-1 shrink-0">
            {DAYS.map((_, day) => {
              const v = activity(week, day);
              const isActive = active?.week === week && active?.day === day;
              return (
                <button
                  key={day}
                  type="button"
                  aria-label={`Week ${week + 1}, ${DAYS[day]}: ${v} contributions`}
                  onMouseEnter={() => setActive({ week, day })}
                  onFocus={() => setActive({ week, day })}
                  onClick={() => setActive({ week, day })}
                  style={{ backgroundColor: palette.hex, opacity: 0.15 + v * 0.2 }}
                  className={`w-4 h-4 min-w-[16px] rounded-sm cursor-pointer transition-transform hover:scale-125 ${isActive ? 'ring-2 ring-slate-500 dark:ring-slate-300 scale-125' : ''}`}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between text-[11px] text-slate-500">
        <span>{total} contributions in the last {WEEKS} weeks</span>
        <span className="font-mono" aria-live="polite">
          {active ? `Week ${active.week + 1} · ${DAYS[active.day]} · ${activity(active.week, active.day)} contributions` : 'Hover a cell'}
        </span>
      </div>
    </div>
  );
};
