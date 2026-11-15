// @jxui/react v3.0.0 — RangeCalendar (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 2. RangeCalendar — a real range calendar: October 2026 month grid, click
// a start then an end day, the range highlights, and the footer shows the
// selected span in days (with previous/next month navigation).
const MONTHS = [
  { name: 'October 2026', year: 2026, month: 9, days: 31, startWeekday: 3 },
  { name: 'November 2026', year: 2026, month: 10, days: 30, startWeekday: 6 },
] as const;

export const RangeCalendar: React.FC = () => {
  const { palette } = useJXTheme();
  const [monthIdx, setMonthIdx] = useState(0);
  const [start, setStart] = useState<number | null>(12);
  const [end, setEnd] = useState<number | null>(24);
  const m = MONTHS[monthIdx];

  const pick = (day: number) => {
    if (start === null || (start !== null && end !== null)) {
      setStart(day);
      setEnd(null);
    } else if (day < start) {
      setEnd(start);
      setStart(day);
    } else {
      setEnd(day);
    }
  };
  const inRange = (day: number) => start !== null && end !== null && day > start && day < end;
  const span = start !== null && end !== null ? end - start + 1 : null;

  return (
    <div className="w-full max-w-[320px] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 text-xs space-y-2">
      <div className="flex items-center justify-between">
        <button type="button" onClick={() => setMonthIdx(0)} disabled={monthIdx === 0} aria-label="Previous month" className="min-h-[36px] min-w-[36px] rounded-lg bg-slate-100 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-200 cursor-pointer disabled:opacity-40">‹</button>
        <span className="font-bold text-slate-900 dark:text-white">{m.name}</span>
        <button type="button" onClick={() => setMonthIdx(1)} disabled={monthIdx === 1} aria-label="Next month" className="min-h-[36px] min-w-[36px] rounded-lg bg-slate-100 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-200 cursor-pointer disabled:opacity-40">›</button>
      </div>
      <div className="grid grid-cols-7 gap-0.5 text-center">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
          <span key={d} className="text-slate-400 py-1 text-[10px]">{d}</span>
        ))}
        {Array.from({ length: m.startWeekday }).map((_, i) => (
          <span key={`blank-${i}`} />
        ))}
        {Array.from({ length: m.days }, (_, i) => {
          const day = i + 1;
          const isEndpoint = day === start || day === end;
          return (
            <button
              key={day}
              type="button"
              onClick={() => pick(day)}
              aria-pressed={isEndpoint}
              aria-label={`${m.name.split(' ')[0]} ${day}, ${m.year}`}
              className={`min-h-[36px] rounded-lg font-medium cursor-pointer ${
                isEndpoint
                  ? `${palette.bg} text-white font-bold`
                  : inRange(day)
                    ? `${palette.softBg} ${palette.text}`
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
      <p className="font-mono text-[11px] text-slate-500 text-center" aria-live="polite">
        {start !== null && end !== null
          ? `${m.name.split(' ')[0]} ${start} → ${m.name.split(' ')[0]} ${end} (${span} days selected)`
          : start !== null
            ? `${m.name.split(' ')[0]} ${start} → pick an end day`
            : 'Pick a start day'}
      </p>
      {start !== null && end !== null && (
        <button type="button" onClick={() => { setStart(null); setEnd(null); }} className="w-full min-h-[36px] rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">
          Clear range
        </button>
      )}
    </div>
  );
};
