// @jxui/react v3.0.0 — NestedDragList (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { ChevronRight, Folder, FileText, ArrowLeft, ArrowRight } from 'lucide-react';

// 5. NestedDragList — a nested list: drag items to reorder, indent/outdent
// them with the arrow buttons, and collapse folders.
type Item = { id: string; label: string; depth: number; folder?: boolean };
const INITIAL: Item[] = [
  { id: 'r', label: 'Root', depth: 0, folder: true },
  { id: 'f1', label: 'File A', depth: 1 },
  { id: 'f2', label: 'File B', depth: 1 },
  { id: 's', label: 'Subfolder', depth: 1, folder: true },
  { id: 'f3', label: 'File C', depth: 2 },
];

export const NestedDragList: React.FC = () => {
  const [items, setItems] = useState(INITIAL);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [drag, setDrag] = useState<number | null>(null);
  const [over, setOver] = useState<number | null>(null);

  const visible = items.filter((it, idx) => {
    // hidden if any earlier folder with a smaller depth is collapsed
    for (let j = idx - 1; j >= 0; j--) {
      const anc = items[j];
      if (anc.depth < it.depth && anc.folder && collapsed[anc.id]) return false;
    }
    return true;
  });

  const move = (from: number, to: number) => {
    setItems((xs) => { const next = [...xs]; const [it] = next.splice(from, 1); next.splice(to, 0, it); return next; });
  };
  const indent = (i: number, dir: 1 | -1) => {
    setItems((xs) => xs.map((x, j) => (j === i ? { ...x, depth: Math.max(0, Math.min(3, x.depth + dir)) } : x)));
  };

  return (
    <div className="w-full text-xs font-mono">
      {visible.map((it) => {
        const idx = items.indexOf(it);
        return (
          <div
            key={it.id}
            draggable
            onDragStart={(e) => { setDrag(idx); e.dataTransfer.effectAllowed = 'move'; }}
            onDragOver={(e) => { e.preventDefault(); setOver(idx); }}
            onDrop={(e) => { e.preventDefault(); if (drag !== null && drag !== idx) move(drag, idx); setDrag(null); setOver(null); }}
            onDragEnd={() => { setDrag(null); setOver(null); }}
            style={{ paddingLeft: it.depth * 18 }}
            className={`min-h-[36px] flex items-center gap-1 rounded px-1 cursor-grab active:cursor-grabbing ${over === idx ? 'ring-2 ring-indigo-500 bg-indigo-50 dark:bg-indigo-950/40' : ''} ${drag === idx ? 'opacity-40' : ''}`}
          >
            {it.folder ? (
              <button type="button" aria-label={collapsed[it.id] ? `Expand ${it.label}` : `Collapse ${it.label}`} aria-expanded={!collapsed[it.id]} onClick={(e) => { e.stopPropagation(); setCollapsed((c) => ({ ...c, [it.id]: !c[it.id] })); }} className="min-h-[32px] min-w-[32px] flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${collapsed[it.id] ? '' : 'rotate-90'}`} />
              </button>
            ) : <span className="w-8" />}
            {it.folder ? <Folder className="w-4 h-4 text-amber-500 shrink-0" /> : <FileText className="w-4 h-4 text-emerald-500 shrink-0" />}
            <span className="flex-1 truncate text-slate-800 dark:text-slate-200">{it.label}</span>
            <button type="button" aria-label={`Outdent ${it.label}`} onClick={() => indent(idx, -1)} className="min-h-[32px] min-w-[32px] flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"><ArrowLeft className="w-3.5 h-3.5" /></button>
            <button type="button" aria-label={`Indent ${it.label}`} onClick={() => indent(idx, 1)} className="min-h-[32px] min-w-[32px] flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"><ArrowRight className="w-3.5 h-3.5" /></button>
          </div>
        );
      })}
      <p className="mt-1.5 text-[11px] font-sans text-slate-500">Drag to reorder · arrows change nesting level.</p>
    </div>
  );
};
