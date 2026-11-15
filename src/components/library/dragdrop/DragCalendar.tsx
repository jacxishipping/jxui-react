// @jxui/react v3.0.0 — DragCalendar (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 14. DragCalendar — a week calendar: drag appointments between days.
// Each appointment is draggable; drop targets highlight on hover.
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
type Appt = { id: string; title: string; time: string };
const INITIAL: Record<string, Appt[]> = {
  Mon: [{ id: 'a1', title: 'Standup', time: '9:00' }],
  Tue: [{ id: 'a2', title: 'Design Review', time: '14:00' }],
  Wed: [],
  Thu: [{ id: 'a3', title: 'Demo', time: '11:00' }],
  Fri: [{ id: 'a4', title: 'Retro', time: '15:00' }],
};

export const DragCalendar: React.FC = () => {
  const { palette } = useJXTheme();
  const [days, setDays] = useState(INITIAL);
  const [drag, setDrag] = useState<{ day: string; id: string } | null>(null);
  const [over, setOver] = useState<string | null>(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-5 gap-1.5 text-xs">
        {DAYS.map((day) => (
          <div
            key={day}
            onDragOver={(e) => { e.preventDefault(); setOver(day); }}
            onDrop={(e) => {
              e.preventDefault();
              if (drag && drag.day !== day) {
                setDays((prev) => {
                  const appt = prev[drag.day].find((a) => a.id === drag.id);
                  if (!appt) return prev;
                  return { ...prev, [drag.day]: prev[drag.day].filter((a) => a.id !== drag.id), [day]: [...prev[day], appt] };
                });
              }
              setDrag(null); setOver(null);
            }}
            className={`min-h-[96px] rounded-lg border p-1.5 ${over === day ? 'border-indigo-500 ring-2 ring-indigo-200 dark:ring-indigo-900 bg-indigo-50 dark:bg-indigo-950/40' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900'}`}
          >
            <div className="font-bold text-slate-700 dark:text-slate-200 mb-1">{day}</div>
            {days[day].map((a) => (
              <div
                key={a.id}
                draggable
                onDragStart={(e) => { setDrag({ day, id: a.id }); e.dataTransfer.effectAllowed = 'move'; }}
                onDragEnd={() => { setDrag(null); setOver(null); }}
                className={`min-h-[36px] px-1.5 py-1 rounded-md text-white text-[11px] font-semibold cursor-grab active:cursor-grabbing mb-1 ${palette.bg} ${drag?.id === a.id ? 'opacity-40' : ''}`}
              >
                {a.time} · {a.title}
              </div>
            ))}
            {days[day].length === 0 && <div className="text-[11px] text-slate-400">Free</div>}
          </div>
        ))}
      </div>
      <p className="mt-1.5 text-[11px] text-slate-500">Drag “Design Review” to Thursday — the appointment moves with it.</p>
    </div>
  );
};
