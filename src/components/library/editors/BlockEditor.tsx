// @jxui/react v3.0.0 — BlockEditor (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { GripVertical, Plus, Trash2, ArrowUp, ArrowDown, Heading1, Pilcrow, List, Code, Quote } from 'lucide-react';

// 4. BlockEditor — a real block editor: add blocks of different types, edit
// their text inline, reorder by drag-and-drop or arrow buttons, delete blocks.
type BlockType = 'heading' | 'paragraph' | 'list' | 'code' | 'quote';
interface Block { id: number; type: BlockType; text: string; }

const TYPE_LABEL: Record<BlockType, string> = {
  heading: 'Heading', paragraph: 'Paragraph', list: 'Bullet list', code: 'Code', quote: 'Quote',
};
const TYPE_ICON: Record<BlockType, React.ReactNode> = {
  heading: <Heading1 className="w-3.5 h-3.5" />, paragraph: <Pilcrow className="w-3.5 h-3.5" />,
  list: <List className="w-3.5 h-3.5" />, code: <Code className="w-3.5 h-3.5" />, quote: <Quote className="w-3.5 h-3.5" />,
};
const INITIAL: Block[] = [
  { id: 1, type: 'heading', text: 'Design specification' },
  { id: 2, type: 'paragraph', text: 'JXUI ships 361 components across 18 categories.' },
  { id: 3, type: 'list', text: 'Zero layout shift, tactile feedback, glass surfaces' },
];

export const BlockEditor: React.FC = () => {
  const { palette } = useJXTheme();
  const [blocks, setBlocks] = useState<Block[]>(INITIAL);
  const [dragId, setDragId] = useState<number | null>(null);
  const [nextId, setNextId] = useState(4);

  const update = (id: number, text: string) => setBlocks((bs) => bs.map((b) => (b.id === id ? { ...b, text } : b)));
  const remove = (id: number) => setBlocks((bs) => bs.filter((b) => b.id !== id));
  const move = (id: number, dir: -1 | 1) => {
    setBlocks((bs) => {
      const i = bs.findIndex((b) => b.id === id);
      const j = i + dir;
      if (i < 0 || j < 0 || j >= bs.length) return bs;
      const next = [...bs];
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });
  };
  const add = (type: BlockType) => {
    setBlocks((bs) => [...bs, { id: nextId, type, text: type === 'heading' ? 'New heading' : type === 'code' ? 'const x = 1;' : 'New block text' }]);
    setNextId((n) => n + 1);
  };
  const drop = (id: number) => {
    if (dragId === null || dragId === id) return;
    setBlocks((bs) => {
      const from = bs.findIndex((b) => b.id === dragId);
      const to = bs.findIndex((b) => b.id === id);
      const next = [...bs];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
    setDragId(null);
  };

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 space-y-1.5 text-xs">
      {blocks.map((block) => (
        <div
          key={block.id}
          draggable
          onDragStart={() => setDragId(block.id)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => drop(block.id)}
          className={`flex items-center gap-1.5 rounded-lg border px-2 py-1.5 ${dragId === block.id ? 'opacity-40' : 'border-slate-200 dark:border-slate-800'} ${block.type === 'code' ? 'bg-slate-950 text-emerald-300 font-mono' : ''}`}
        >
          <span className="cursor-grab text-slate-400 shrink-0" aria-label="Drag to reorder"><GripVertical className="w-4 h-4" /></span>
          <span className={`flex items-center gap-1 shrink-0 font-semibold ${palette.text}`}>{TYPE_ICON[block.type]}{TYPE_LABEL[block.type]}</span>
          <input
            value={block.text}
            onChange={(e) => update(block.id, e.target.value)}
            aria-label={`${TYPE_LABEL[block.type]} block text`}
            className="flex-1 min-w-0 min-h-[36px] bg-transparent px-1 rounded text-slate-800 dark:text-slate-200"
          />
          <button type="button" onClick={() => move(block.id, -1)} aria-label="Move block up" className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"><ArrowUp className="w-3.5 h-3.5" /></button>
          <button type="button" onClick={() => move(block.id, 1)} aria-label="Move block down" className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"><ArrowDown className="w-3.5 h-3.5" /></button>
          <button type="button" onClick={() => remove(block.id)} aria-label="Delete block" className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 cursor-pointer"><Trash2 className="w-3.5 h-3.5" /></button>
        </div>
      ))}
      <div className="flex flex-wrap items-center gap-1 pt-1">
        <span className="text-[11px] text-slate-400 mr-1">Add block:</span>
        {(Object.keys(TYPE_LABEL) as BlockType[]).map((t) => (
          <button key={t} type="button" onClick={() => add(t)} className={`min-h-[36px] px-2.5 inline-flex items-center gap-1 rounded-lg border font-semibold cursor-pointer ${palette.border} ${palette.text} hover:bg-slate-50 dark:hover:bg-slate-800`}>
            <Plus className="w-3.5 h-3.5" />{TYPE_LABEL[t]}
          </button>
        ))}
      </div>
    </div>
  );
};
