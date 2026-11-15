// @jxui/react v3.0.0 — TimePicker (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 6. TimePicker — a real time picker: a popover with hour/minute wheels
// and an AM/PM + timezone selector; the button shows the chosen time, and
// "Now" jumps to the current time.
const ZONES = ['EST', 'CST', 'MST', 'PST', 'UTC'] as const;

export const TimePicker: React.FC = () => {
  const { palette } = useJXTheme();
  const [open, setOpen] = useState(false);
  const [hour, setHour] = useState(2);
  const [minute, setMinute] = useState(30);
  const [period, setPeriod] = useState<'AM' | 'PM'>('PM');
  const [zone, setZone] = useState<(typeof ZONES)[number]>('EST');
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

  const label = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')} ${period} ${zone}`;
  const setNow = () => {
    const now = new Date();
    let h = now.getHours();
    const p = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    setHour(h);
    setMinute(now.getMinutes());
    setPeriod(p);
  };

  return (
    <div className="relative text-xs" ref={panelRef}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="min-h-[44px] inline-flex items-center gap-2 px-3 border border-slate-200 dark:border-slate-800 rounded-lg font-mono bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 cursor-pointer"
      >
        <Clock className="w-4 h-4" style={{ color: palette.hex }} />
        {label}
      </button>
      {open && (
        <div role="dialog" aria-label="Choose a time" className="absolute z-20 mt-2 w-[280px] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl p-3 space-y-3">
          <div className="grid grid-cols-3 gap-2">
            <div>
              <div className="font-semibold text-center mb-1 text-slate-500">Hour</div>
              <div className="max-h-36 overflow-y-auto rounded-lg border border-slate-200 dark:border-slate-800">
                {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                  <button
                    key={h}
                    type="button"
                    onClick={() => setHour(h)}
                    aria-pressed={hour === h}
                    className={`w-full min-h-[36px] font-mono cursor-pointer ${hour === h ? `${palette.bg} text-white font-bold` : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                  >
                    {String(h).padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="font-semibold text-center mb-1 text-slate-500">Minute</div>
              <div className="max-h-36 overflow-y-auto rounded-lg border border-slate-200 dark:border-slate-800">
                {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map((mm) => (
                  <button
                    key={mm}
                    type="button"
                    onClick={() => setMinute(mm)}
                    aria-pressed={minute === mm}
                    className={`w-full min-h-[36px] font-mono cursor-pointer ${minute === mm ? `${palette.bg} text-white font-bold` : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                  >
                    {String(mm).padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-center mb-1 text-slate-500">Period</div>
              {(['AM', 'PM'] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPeriod(p)}
                  aria-pressed={period === p}
                  className={`w-full min-h-[36px] rounded-lg font-bold cursor-pointer ${period === p ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
                >
                  {p}
                </button>
              ))}
              <select
                value={zone}
                onChange={(e) => setZone(e.target.value as typeof zone)}
                aria-label="Timezone"
                className="w-full min-h-[36px] rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 cursor-pointer text-center font-mono"
              >
                {ZONES.map((z) => <option key={z} value={z}>{z}</option>)}
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-slate-500" aria-live="polite">Selected: {label}</span>
            <div className="flex gap-1.5">
              <button type="button" onClick={setNow} className="min-h-[36px] px-3 rounded-lg font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer">Now</button>
              <button type="button" onClick={() => setOpen(false)} className={`min-h-[36px] px-3 rounded-lg font-semibold text-white cursor-pointer ${palette.bg}`}>Done</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
