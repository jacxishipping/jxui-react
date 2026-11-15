// @jxui/react v3.0.0 — AvailabilityGrid (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 8. AvailabilityGrid — a real booking grid: pick a day, click an open
// slot to book it (it becomes "Booked"), click again to cancel; booked
// slots are unavailable.
const DAYS = ['Mon 16', 'Tue 17', 'Wed 18', 'Thu 19'] as const;
const SLOTS = ['9 AM', '10 AM', '11 AM', '1 PM', '2 PM', '3 PM'] as const;
const BOOKED_INITIAL = new Set(['Mon 16|11 AM', 'Tue 17|9 AM', 'Wed 18|1 PM']);

export const AvailabilityGrid: React.FC = () => {
  const { palette } = useJXTheme();
  const [day, setDay] = useState<(typeof DAYS)[number]>('Mon 16');
  const [booked, setBooked] = useState<Set<string>>(BOOKED_INITIAL);
  const [mine, setMine] = useState<Set<string>>(new Set());

  const toggle = (slot: string) => {
    const key = `${day}|${slot}`;
    if (booked.has(key) && !mine.has(key)) return;
    setBooked((b) => {
      const next = new Set(b);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
    setMine((m) => {
      const next = new Set(m);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };
  const myCount = mine.size;

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="flex gap-1" role="tablist" aria-label="Pick a day">
        {DAYS.map((d) => (
          <button
            key={d}
            type="button"
            role="tab"
            aria-selected={day === d}
            onClick={() => setDay(d)}
            className={`min-h-[36px] px-2.5 rounded-lg font-semibold cursor-pointer ${day === d ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
          >
            {d}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {SLOTS.map((slot) => {
          const key = `${day}|${slot}`;
          const isMine = mine.has(key);
          const isTaken = booked.has(key) && !isMine;
          return (
            <button
              key={slot}
              type="button"
              disabled={isTaken}
              onClick={() => toggle(slot)}
              aria-pressed={isMine}
              className={`min-h-[36px] rounded-lg font-semibold cursor-pointer transition-colors ${
                isMine
                  ? `${palette.bg} text-white`
                  : isTaken
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                    : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-900'
              }`}
            >
              {slot} {isMine ? '· Booked' : isTaken ? '· Taken' : '✓'}
            </button>
          );
        })}
      </div>
      <p className="text-[11px] font-mono text-slate-500" aria-live="polite">
        {day}: {myCount === 0 ? 'no bookings yet — click an open slot.' : `you have ${myCount} booking${myCount === 1 ? '' : 's'} this week.`}
      </p>
    </div>
  );
};
