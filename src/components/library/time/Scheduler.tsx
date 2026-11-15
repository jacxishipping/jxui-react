// @jxui/react v3.0.0 — Scheduler (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Calendar } from 'lucide-react';

// 5. Scheduler — a real week scheduler: pick a day and an hour, see what's
// booked, and book a free slot. Booked events persist in state.
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const HOURS = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function fmt(hour: number) {
  const h = hour % 12 === 0 ? 12 : hour % 12;
  return `${h}:00 ${hour < 12 ? 'AM' : 'PM'}`;
}

const INITIAL_EVENTS: Record<string, string> = {
  'Mon-14': 'Design Review',
  'Tue-9': 'Standup',
  'Wed-11': 'Sprint Planning',
  'Thu-15': 'Demo',
  'Fri-10': 'Retro',
};

export const Scheduler: React.FC = () => {
  const { palette } = useJXTheme();
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [selected, setSelected] = useState({ day: 'Mon', hour: 14 });
  const key = `${selected.day}-${selected.hour}`;
  const booked = events[key];

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 space-y-2 text-xs">
      <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
        <Calendar className="w-4 h-4" />
        Calendar Schedule
      </div>
      <div className="grid grid-cols-5 gap-1">
        {DAYS.map((day) => (
          <button
            key={day}
            type="button"
            onClick={() => setSelected((s) => ({ ...s, day }))}
            aria-pressed={selected.day === day}
            className={`min-h-[36px] rounded-lg font-semibold cursor-pointer ${
              selected.day === day ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-1">
        {HOURS.map((hour) => {
          const isBooked = Boolean(events[`${selected.day}-${hour}`]);
          const isSelected = selected.hour === hour;
          return (
            <button
              key={hour}
              type="button"
              onClick={() => setSelected({ day: selected.day, hour })}
              aria-pressed={isSelected}
              className={`min-h-[36px] px-2 rounded-lg font-mono cursor-pointer ${
                isSelected
                  ? `${palette.bg} text-white`
                  : isBooked
                    ? `${palette.softBg} ${palette.text} font-semibold`
                    : 'bg-slate-50 dark:bg-slate-800/60 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {fmt(hour)}
            </button>
          );
        })}
      </div>
      <div className={`rounded-lg px-3 py-2 font-medium ${booked ? `${palette.softBg} ${palette.text}` : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>
        {booked ? `${fmt(selected.hour)} · ${booked}` : `${fmt(selected.hour)} · Free — no event booked`}
      </div>
      {!booked && (
        <button
          type="button"
          onClick={() => setEvents((e) => ({ ...e, [key]: 'New event' }))}
          className={`min-h-[36px] w-full rounded-lg text-xs font-semibold text-white cursor-pointer ${palette.bg}`}
        >
          Book {fmt(selected.hour)} on {selected.day}
        </button>
      )}
    </div>
  );
};
