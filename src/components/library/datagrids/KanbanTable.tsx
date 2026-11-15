// @jxui/react v3.0.0 — KanbanTable (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 7. KanbanTable — a real kanban board: drag cards between columns (HTML5
// drag and drop), move them with the column buttons as a keyboard-friendly
// alternative, and add new cards.
const COLUMNS = ['Backlog', 'In Dev', 'Done'] as const;
type Card = { id: number; title: string; column: (typeof COLUMNS)[number] };
const INITIAL: Card[] = [
  { id: 1, title: 'Token CSS variables', column: 'Backlog' },
  { id: 2, title: 'Buttons a11y audit', column: 'Backlog' },
  { id: 3, title: 'Charts legend', column: 'In Dev' },
  { id: 4, title: 'Focus ring tokens', column: 'Done' },
  { id: 5, title: 'Docs for 361 comps', column: 'Done' },
];

export const KanbanTable: React.FC = () => {
  const { palette } = useJXTheme();
  const [cards, setCards] = useState(INITIAL);
  const [dragId, setDragId] = useState<number | null>(null);
  const [overCol, setOverCol] = useState<string | null>(null);
  const [draft, setDraft] = useState('');

  const move = (id: number, column: Card['column']) => setCards((cs) => cs.map((c) => (c.id === id ? { ...c, column } : c)));
  const add = () => {
    const title = draft.trim();
    if (!title) return;
    setCards((cs) => [...cs, { id: Math.max(0, ...cs.map((c) => c.id)) + 1, title, column: 'Backlog' }]);
    setDraft('');
  };

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="grid grid-cols-3 gap-2">
        {COLUMNS.map((col) => (
          <div
            key={col}
            onDragOver={(e) => { e.preventDefault(); setOverCol(col); }}
            onDragLeave={() => setOverCol((c) => (c === col ? null : c))}
            onDrop={(e) => {
              e.preventDefault();
              const id = Number(e.dataTransfer.getData('text/plain'));
              if (id) move(id, col);
              setDragId(null);
              setOverCol(null);
            }}
            className={`rounded-xl border p-2 space-y-2 min-h-[120px] transition-colors ${
              overCol === col ? `${palette.softBg} border ${palette.border}` : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40'
            }`}
          >
            <div className="flex items-center justify-between font-bold text-slate-800 dark:text-slate-200">
              <span>{col}</span>
              <span className="font-mono text-[11px] text-slate-500">{cards.filter((c) => c.column === col).length}</span>
            </div>
            {cards.filter((c) => c.column === col).map((card) => (
              <div
                key={card.id}
                draggable
                onDragStart={(e) => { e.dataTransfer.setData('text/plain', String(card.id)); setDragId(card.id); }}
                onDragEnd={() => { setDragId(null); setOverCol(null); }}
                className={`rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2 shadow-sm cursor-grab active:cursor-grabbing ${dragId === card.id ? 'opacity-50' : ''}`}
              >
                <div className="font-medium text-slate-800 dark:text-slate-200 leading-snug">{card.title}</div>
                <div className="flex gap-1 mt-1.5">
                  {COLUMNS.filter((c) => c !== card.column).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => move(card.id, c)}
                      aria-label={`Move ${card.title} to ${c}`}
                      className="min-h-[28px] px-1.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-600 dark:text-slate-300 cursor-pointer"
                    >
                      → {c}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            {cards.filter((c) => c.column === col).length === 0 && (
              <div className="text-[11px] text-slate-400 py-2 text-center">Drop cards here</div>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-1.5">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') add(); }}
          placeholder="New card title…"
          aria-label="New card title"
          className="flex-1 min-w-0 min-h-[36px] px-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 placeholder:text-slate-400"
        />
        <button type="button" onClick={add} className={`min-h-[36px] px-3 rounded-lg font-semibold text-white cursor-pointer ${palette.bg}`}>
          Add to Backlog
        </button>
      </div>
    </div>
  );
};
