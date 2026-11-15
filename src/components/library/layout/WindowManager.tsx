// @jxui/react v3.0.0 — WindowManager (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { X, Minus, Plus } from 'lucide-react';

// 4. WindowManager — a window manager: open windows stack with z-order,
// click one to focus it, minimise it to the taskbar, close it, or open a
// new one.
type Win = { id: string; title: string; body: string };
const INITIAL: Win[] = [
  { id: 'w1', title: 'Terminal', body: '$ jxui --version\n3.0.0' },
  { id: 'w2', title: 'Editor', body: 'Deploy.tsx — 11 lines' },
];

export const WindowManager: React.FC = () => {
  const [wins, setWins] = useState(INITIAL);
  const [min, setMin] = useState<string[]>([]);
  const [focus, setFocus] = useState('w1');

  const openWins = wins.filter((w) => !min.includes(w.id));

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => {
            const id = `w${Date.now()}`;
            const n = wins.length + 1;
            setWins((ws) => [...ws, { id, title: `Window ${n}`, body: `New window ${n} — drag me by the title bar.` }]);
            setFocus(id);
          }}
          className="min-h-[36px] px-3 rounded-lg bg-indigo-600 text-white font-semibold flex items-center gap-1 cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" /> New window
        </button>
        <span className="font-mono text-slate-500">{openWins.length} open · {min.length} minimised</span>
      </div>
      <div className="relative h-40 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 overflow-hidden">
        {openWins.map((w, i) => (
          <div
            key={w.id}
            onPointerDown={() => setFocus(w.id)}
            className={`absolute w-56 border rounded-xl shadow-lg overflow-hidden bg-white dark:bg-slate-800 ${focus === w.id ? 'ring-2 ring-indigo-500' : ''}`}
            style={{ left: 12 + i * 28, top: 10 + i * 22, zIndex: focus === w.id ? 10 : i + 1 }}
          >
            <div className="bg-slate-100 dark:bg-slate-700 px-2.5 py-1.5 flex items-center justify-between border-b border-slate-200 dark:border-slate-600 cursor-grab">
              <span className="font-bold text-slate-800 dark:text-slate-200">{w.title}</span>
              <span className="flex gap-0.5">
                <button type="button" aria-label={`Minimise ${w.title}`} onClick={(e) => { e.stopPropagation(); setMin((m) => [...m, w.id]); }} className="min-h-[28px] min-w-[28px] flex items-center justify-center rounded hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer"><Minus className="w-3.5 h-3.5" /></button>
                <button type="button" aria-label={`Close ${w.title}`} onClick={(e) => { e.stopPropagation(); setWins((ws) => ws.filter((x) => x.id !== w.id)); }} className="min-h-[28px] min-w-[28px] flex items-center justify-center rounded hover:bg-rose-100 dark:hover:bg-rose-950 cursor-pointer"><X className="w-3.5 h-3.5" /></button>
              </span>
            </div>
            <div className="p-2.5 font-mono text-[11px] text-slate-500 whitespace-pre-line">{w.body}</div>
          </div>
        ))}
        {openWins.length === 0 && <div className="absolute inset-0 flex items-center justify-center text-slate-500">All windows closed or minimised.</div>}
      </div>
      {min.length > 0 && (
        <div className="flex gap-1.5 flex-wrap" role="group" aria-label="Minimised windows">
          {min.map((id) => {
            const w = wins.find((x) => x.id === id);
            return (
              <button key={id} type="button" onClick={() => { setMin((m) => m.filter((x) => x !== id)); setFocus(id); }} className="min-h-[36px] px-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">
                ▢ {w?.title ?? id} — restore
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
