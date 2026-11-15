// @jxui/react v3.0.0 — SmartCalendar (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 1. SmartCalendar — a real calendar: month navigation across Oct–Dec
// 2026, click a day to select it, days with events show a dot, and the
// selected day's events list below.
const EVENTS: Record<string, string[]> = {
  '2026-10-10': ['Sprint review — 10:00', 'Design sync — 14:30'],
  '2026-10-15': ['v3.0.0 release — 09:00'],
  '2026-10-21': ['QA audit — 11:00'],
  '2026-11-05': ['Token refactor demo — 15:00'],
  '2026-11-16': ['Sprint 1 kickoff — 09:30'],
  '2026-12-03': ['Docs freeze — 17:00'],
};
const MONTHS = [
  { name: 'October 2026', year: 2026, month: 9, days: 31, startWeekday: 3 },
  { name: 'November 2026', year: 2026, month: 10, days: 30, startWeekday: 6 },
  { name: 'December 2026', year: 2026, month: 11, days: 31, startWeekday: 1 },
] as const;

export const SmartCalendar: React.FC = () => {
  const { palette } = useJXTheme();
  const [monthIdx, setMonthIdx] = useState(0);
  const [selected, setSelected] = useState('2026-10-10');
  const m = MONTHS[monthIdx];
  const iso = (day: number) => `${m.year}-${String(m.month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const [selY, selM, selD] = selected.split('-').map(Number);
  const selLabel = new Date(selY, selM - 1, selD).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  const selEvents = EVENTS[selected] ?? [];

  return (
    <div className="w-full max-w-[300px] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 text-xs space-y-2">
      <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
        <button type="button" onClick={() => setMonthIdx((i) => Math.max(0, i - 1))} disabled={monthIdx === 0} aria-label="Previous month" className="min-h-[36px] min-w-[36px] rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer disabled:opacity-40">‹</button>
        <span className="inline-flex items-center gap-1.5">
          {m.name}
          <Calendar className="w-4 h-4" style={{ color: palette.hex }} />
        </span>
        <button type="button" onClick={() => setMonthIdx((i) => Math.min(MONTHS.length - 1, i + 1))} disabled={monthIdx === MONTHS.length - 1} aria-label="Next month" className="min-h-[36px] min-w-[36px] rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer disabled:opacity-40">›</button>
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
          const key = iso(day);
          const isSelected = selected === key;
          const hasEvents = key in EVENTS;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setSelected(key)}
              aria-pressed={isSelected}
              aria-label={`${m.name.split(' ')[0]} ${day}, ${m.year}${hasEvents ? `, ${EVENTS[key].length} event${EVENTS[key].length === 1 ? '' : 's'}` : ''}`}
              className={`min-h-[36px] rounded-lg cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                isSelected ? `${palette.bg} text-white font-bold` : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <span>{day}</span>
              {hasEvents && <span aria-hidden="true" className={`w-1 h-1 rounded-full ${isSelected ? 'bg-white' : ''}`} style={isSelected ? undefined : { backgroundColor: palette.hex }} />}
            </button>
          );
        })}
      </div>
      <div className={`rounded-lg px-3 py-2 ${palette.softBg}`}>
        <div className="font-bold text-slate-900 dark:text-white">{selLabel}</div>
        {selEvents.length > 0 ? (
          <ul className="mt-1 space-y-0.5">
            {selEvents.map((e) => (
              <li key={e} className="text-slate-600 dark:text-slate-300">• {e}</li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-500 mt-0.5">No events — a free day.</p>
        )}
      </div>
    </div>
  );
};
