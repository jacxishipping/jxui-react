// @jxui/react v3.0.0 — DateRangePicker (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 7. DateRangePicker — a real picker: a popover with two mini month
// calendars (Nov + Dec 2026); click a start then an end date, or use a
// preset; the button label and the summary update, Escape closes it.
const MONTHS = [
  { name: 'November 2026', year: 2026, month: 10, days: 30, startWeekday: 6 },
  { name: 'December 2026', year: 2026, month: 11, days: 31, startWeekday: 1 },
] as const;
const PRESETS = [
  { label: 'Today', start: '2026-11-15', end: '2026-11-15' },
  { label: 'Last 7 days', start: '2026-11-09', end: '2026-11-15' },
  { label: 'Last 30 days', start: '2026-10-17', end: '2026-11-15' },
  { label: 'This month', start: '2026-11-01', end: '2026-11-30' },
] as const;

function fmt(iso: string | null) {
  if (!iso) return null;
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
function dayCount(start: string | null, end: string | null) {
  if (!start || !end) return null;
  const s = new Date(start).getTime();
  const e = new Date(end).getTime();
  return Math.round((e - s) / 86400000) + 1;
}

export const DateRangePicker: React.FC = () => {
  const { palette } = useJXTheme();
  const [open, setOpen] = useState(false);
  const [start, setStart] = useState<string | null>('2026-10-17');
  const [end, setEnd] = useState<string | null>('2026-11-15');
  const [hover, setHover] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open ]);

  const pick = (iso: string) => {
    if (!start || (start && end)) {
      setStart(iso);
      setEnd(null);
    } else if (iso < start) {
      setEnd(start);
      setStart(iso);
    } else {
      setEnd(iso);
    }
  };
  const inRange = (iso: string) => {
    if (!start) return false;
    const e = end ?? hover ?? start;
    return iso > start && iso <= e;
  };
  const label = start && end ? `${fmt(start)} → ${fmt(end)}` : start ? `${fmt(start)} → pick an end` : 'Pick a date range';
  const count = dayCount(start, end);

  return (
    <div className="w-full text-xs relative" ref={panelRef}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="min-h-[44px] px-3 border border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-between gap-3 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 cursor-pointer w-full max-w-[280px]"
      >
        <span className="inline-flex items-center gap-2 font-medium">
          <Calendar className="w-4 h-4 text-slate-400" />
          {label}
        </span>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div role="dialog" aria-label="Choose a date range" className="absolute z-20 mt-2 w-[320px] max-w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl p-3 space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {PRESETS.map((p) => (
              <button
                key={p.label}
                type="button"
                onClick={() => { setStart(p.start); setEnd(p.end); }}
                className={`min-h-[36px] px-2.5 rounded-lg font-semibold cursor-pointer ${start === p.start && end === p.end ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
              >
                {p.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {MONTHS.map((m) => (
              <div key={m.name}>
                <div className="font-bold text-center mb-1 text-slate-800 dark:text-slate-200">{m.name}</div>
                <div className="grid grid-cols-7 gap-0.5 text-center text-[10px]">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                    <span key={d} className="text-slate-400 py-0.5">{d}</span>
                  ))}
                  {Array.from({ length: m.startWeekday }).map((_, i) => (
                    <span key={`blank-${i}`} />
                  ))}
                  {Array.from({ length: m.days }, (_, i) => {
                    const iso = `${m.year}-${String(m.month + 1).padStart(2, '0')}-${String(i + 1).padStart(2, '0')}`;
                    const isStart = start === iso;
                    const isEnd = end === iso;
                    const inR = inRange(iso);
                    return (
                      <button
                        key={iso}
                        type="button"
                        onClick={() => pick(iso)}
                        onMouseEnter={() => setHover(iso)}
                        onMouseLeave={() => setHover(null)}
                        aria-pressed={isStart || isEnd}
                        aria-label={`${m.name.split(' ')[0]} ${i + 1}, 2026`}
                        className={`min-h-[28px] rounded-md cursor-pointer font-medium ${
                          isStart || isEnd ? `${palette.bg} text-white font-bold` : inR ? palette.softBg + ' ' + palette.text : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        {i + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-slate-500" aria-live="polite">
              {count ? `${count} day${count === 1 ? '' : 's'} selected` : 'Select a start date'}
            </span>
            <button type="button" onClick={() => setOpen(false)} className={`min-h-[36px] px-3 rounded-lg font-semibold text-white cursor-pointer ${palette.bg}`}>
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
