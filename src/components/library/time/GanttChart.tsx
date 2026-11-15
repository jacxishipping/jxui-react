// @jxui/react v3.0.0 — GanttChart (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 4. GanttChart — a real Gantt: 5 tasks on a Nov 16–Dec 11 timeline, hover
// a bar for dates and duration, click to select a task and see its owner
// and progress, drag the progress handle to update % complete.
const TASKS = [
  { name: 'Sprint 1', start: 0, end: 9, owner: 'Elena', progress: 100, status: 'Done' },
  { name: 'Token refactor', start: 3, end: 14, owner: 'Marcus', progress: 60, status: 'Active' },
  { name: 'Charts batch', start: 6, end: 18, owner: 'Sora', progress: 40, status: 'Active' },
  { name: 'QA Audit', start: 14, end: 22, owner: 'Priya', progress: 0, status: 'Next' },
  { name: 'Docs & release', start: 19, end: 25, owner: 'Elena', progress: 0, status: 'Next' },
] as const;
const SPAN = 26;

export const GanttChart: React.FC = () => {
  const { palette } = useJXTheme();
  const [progress, setProgress] = useState<Record<string, number>>(
    Object.fromEntries(TASKS.map((t) => [t.name, t.progress]))
  );
  const [selected, setSelected] = useState<string | null>('Token refactor');
  const [dragging, setDragging] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const setFromPointer = (task: (typeof TASKS)[number], clientX: number, bar: HTMLDivElement) => {
    const rect = bar.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, Math.round(((clientX - rect.left) / rect.width) * 100)));
    setProgress((p) => ({ ...p, [task.name]: pct }));
  };

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 space-y-2">
        <div className="flex justify-between font-mono text-[10px] text-slate-400 px-24">
          <span>Nov 16</span><span>Nov 23</span><span>Nov 30</span><span>Dec 7</span>
        </div>
        {TASKS.map((t) => {
          const pct = progress[t.name];
          const isSelected = selected === t.name;
          return (
            <div key={t.name} className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSelected(isSelected ? null : t.name)}
                aria-pressed={isSelected}
                className={`w-24 shrink-0 min-h-[36px] text-left font-semibold rounded-lg px-2 cursor-pointer truncate ${
                  isSelected ? `${palette.softBg} ${palette.text}` : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {t.name}
              </button>
              <div className="relative flex-1 h-6 rounded-md bg-slate-100 dark:bg-slate-800">
                <div
                  role="slider"
                  aria-label={`${t.name} progress`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={pct}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') setProgress((p) => ({ ...p, [t.name]: Math.min(100, p[t.name] + 5) }));
                    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') setProgress((p) => ({ ...p, [t.name]: Math.max(0, p[t.name] - 5) }));
                  }}
                  onMouseEnter={() => setHovered(t.name)}
                  onMouseLeave={() => setHovered((h) => (h === t.name ? null : h))}
                  onPointerDown={(e) => {
                    e.preventDefault();
                    setDragging(t.name);
                    setFromPointer(t, e.clientX, e.currentTarget as HTMLDivElement);
                  }}
                  onPointerMove={(e) => {
                    if (dragging === t.name) setFromPointer(t, e.clientX, e.currentTarget as HTMLDivElement);
                  }}
                  onPointerUp={() => setDragging(null)}
                  className={`relative h-full rounded-md cursor-pointer touch-none overflow-hidden ${
                    t.status === 'Done' ? 'bg-emerald-500' : t.status === 'Active' ? '' : 'bg-slate-300 dark:bg-slate-600'
                  } ${t.status === 'Active' ? palette.bg : ''}`}
                  style={{ left: `${(t.start / SPAN) * 100}%`, width: `${((t.end - t.start) / SPAN) * 100}%`, position: 'absolute' }}
                >
                  <span className="absolute inset-y-0 left-0 bg-black/20" style={{ width: `${pct}%` }} />
                  <span className="absolute inset-0 flex items-center px-1.5 text-[10px] font-bold text-white whitespace-nowrap overflow-hidden">
                    {t.status} · {pct}%
                  </span>
                </div>
                {hovered === t.name && (
                  <span className="absolute -top-6 left-24 z-10 rounded bg-slate-900 text-white px-2 py-1 font-mono text-[10px] whitespace-nowrap pointer-events-none">
                    Nov {16 + t.start} → Dec {t.end - 14} · {t.end - t.start} days · {t.owner}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-[11px] font-mono text-slate-500" aria-live="polite">
        {selected
          ? `${selected}: ${TASKS.find((t) => t.name === selected)?.owner} · ${progress[selected]}% complete — drag a bar or use arrow keys to change progress.`
          : 'Click a task to select it. Drag a bar to update progress.'}
      </p>
    </div>
  );
};
