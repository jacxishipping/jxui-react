// @jxui/react v3.0.0 — MultiSelectDrag (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 7. MultiSelectDrag — select several items (click or the select-all toggle),
// then drag the whole selection as one ghost onto the drop target.
const ITEMS = ['Design tokens', 'Button styles', 'Grid system', 'Modal patterns', 'Chart theme', 'Icons'];

export const MultiSelectDrag: React.FC = () => {
  const { palette } = useJXTheme();
  const [selected, setSelected] = useState<string[]>(['Design tokens', 'Button styles', 'Grid system']);
  const [dropped, setDropped] = useState<string[]>([]);
  const [over, setOver] = useState(false);
  const [dragging, setDragging] = useState(false);

  const toggle = (item: string) => setSelected((s) => (s.includes(item) ? s.filter((x) => x !== item) : [...s, item]));

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-slate-700 dark:text-slate-200">{selected.length} selected</span>
        <button
          type="button"
          onClick={() => setSelected(selected.length === ITEMS.length ? [] : [...ITEMS])}
          className="min-h-[36px] px-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
        >
          {selected.length === ITEMS.length ? 'Clear all' : 'Select all'}
        </button>
      </div>
      <ul className="space-y-1">
        {ITEMS.map((item) => (
          <li key={item}>
            <label className={`min-h-[36px] flex items-center gap-2 px-2 rounded-lg border cursor-pointer ${selected.includes(item) ? `${palette.softBg} ${palette.border} border` : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900'}`}>
              <input type="checkbox" checked={selected.includes(item)} onChange={() => toggle(item)} aria-label={`Select ${item}`} className="w-4 h-4 accent-indigo-600" />
              <span className="flex-1">{item}</span>
            </label>
          </li>
        ))}
      </ul>
      <div
        draggable={selected.length > 0}
        onDragStart={(e) => { setDragging(true); e.dataTransfer.effectAllowed = 'move'; }}
        onDragEnd={() => setDragging(false)}
        className={`min-h-[44px] flex items-center gap-2 px-3 rounded-lg border-2 border-dashed cursor-grab active:cursor-grabbing font-semibold ${dragging ? 'opacity-60' : ''} ${palette.text} ${palette.border}`}
      >
        <span className={`px-2 py-0.5 rounded-full text-white text-[11px] ${palette.bg}`}>{selected.length}</span>
        Items Ghost Drag — drag this badge to the target below
      </div>
      <div
        onDragOver={(e) => { e.preventDefault(); setOver(true); }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => { e.preventDefault(); setDropped((d) => [...d, ...selected.filter((s) => !d.includes(s))]); setOver(false); setDragging(false); }}
        className={`min-h-[44px] rounded-lg border-2 border-dashed flex items-center justify-center px-3 text-center ${over ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40' : 'border-slate-300 dark:border-slate-700 text-slate-500'}`}
      >
        {dropped.length ? `Dropped: ${dropped.join(', ')}` : 'Drop target — drop the selection here'}
      </div>
    </div>
  );
};
