// @jxui/react v3.0.0 — KineticKanban (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 1. KineticKanban — a working kanban: drag cards between columns, add a
// card, and the per-column counts update live.
type Card = { id: string; title: string };
type Col = 'Todo' | 'In Progress' | 'Done';
const INITIAL: Record<Col, Card[]> = {
  Todo: [{ id: 'c1', title: 'Token CSS' }, { id: 'c2', title: 'Audit a11y' }],
  'In Progress': [{ id: 'c3', title: 'Theme tokens' }],
  Done: [{ id: 'c4', title: 'Buttons' }, { id: 'c5', title: 'Grid' }, { id: 'c6', title: 'Modal' }, { id: 'c7', title: 'Docs' }],
};
const COLS: Col[] = ['Todo', 'In Progress', 'Done'];

export const KineticKanban: React.FC = () => {
  const { palette } = useJXTheme();
  const [cols, setCols] = useState(INITIAL);
  const [drag, setDrag] = useState<{ col: Col; id: string } | null>(null);
  const [over, setOver] = useState<Col | null>(null);
  const [draft, setDraft] = useState('');

  const moveCard = (to: Col) => {
    if (!drag) return;
    setCols((prev) => {
      const card = prev[drag.col].find((c) => c.id === drag.id);
      if (!card) return prev;
      return {
        ...prev,
        [drag.col]: prev[drag.col].filter((c) => c.id !== drag.id),
        [to]: drag.col === to ? prev[to] : [...prev[to], card],
      };
    });
  };

  return (
    <div className="w-full">
      <div className="flex gap-2">
        {COLS.map((col) => (
          <div
            key={col}
            onDragOver={(e) => { e.preventDefault(); setOver(col); }}
            onDrop={(e) => { e.preventDefault(); moveCard(col); setDrag(null); setOver(null); }}
            className={`flex-1 min-w-24 p-2 rounded-lg text-xs ${over === col ? 'ring-2 ring-indigo-500 bg-indigo-50 dark:bg-indigo-950/40' : 'bg-slate-100 dark:bg-slate-800'}`}
          >
            <div className="font-bold mb-1.5">{col} ({cols[col].length})</div>
            <div className="space-y-1.5">
              {cols[col].map((card) => (
                <div
                  key={card.id}
                  draggable
                  onDragStart={(e) => { setDrag({ col, id: card.id }); e.dataTransfer.effectAllowed = 'move'; }}
                  onDragEnd={() => { setDrag(null); setOver(null); }}
                  className={`min-h-[36px] px-2 py-1.5 bg-white dark:bg-slate-900 rounded shadow-xs cursor-grab active:cursor-grabbing flex items-center ${drag?.id === card.id ? 'opacity-40' : ''}`}
                >
                  {card.title}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-1.5">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && draft.trim()) {
              setCols((p) => ({ ...p, Todo: [...p.Todo, { id: `c${Date.now()}`, title: draft.trim() }] }));
              setDraft('');
            }
          }}
          placeholder="New card… (Enter to add to Todo)"
          aria-label="New card title"
          className="flex-1 min-h-[36px] px-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs"
        />
        <button
          type="button"
          onClick={() => {
            if (!draft.trim()) return;
            setCols((p) => ({ ...p, Todo: [...p.Todo, { id: `c${Date.now()}`, title: draft.trim() }] }));
            setDraft('');
          }}
          className={`min-h-[36px] px-3 rounded-lg text-xs font-semibold text-white cursor-pointer ${palette.bg}`}
        >
          Add
        </button>
      </div>
    </div>
  );
};
