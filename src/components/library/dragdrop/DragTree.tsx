// @jxui/react v3.0.0 — DragTree (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { ChevronRight, Folder, FolderOpen, FileCode } from 'lucide-react';

// 6. DragTree — a draggable folder tree: expand/collapse folders and drag
// files between folders to move them.
type Node = { id: string; name: string; children?: Node[] };
const INITIAL: Node[] = [
  { id: 'f1', name: 'components', children: [{ id: 'a', name: 'JXButton.tsx' }, { id: 'b', name: 'JXTable.tsx' }] },
  { id: 'f2', name: 'data', children: [{ id: 'c', name: 'catalog.ts' }] },
  { id: 'f3', name: 'utils', children: [{ id: 'd', name: 'jxuiLogic.ts' }, { id: 'e', name: 'tactileAudio.ts' }] },
];

export const DragTree: React.FC = () => {
  const [tree, setTree] = useState(INITIAL);
  const [open, setOpen] = useState<Record<string, boolean>>({ f1: true, f2: true, f3: true });
  const [drag, setDrag] = useState<string | null>(null);
  const [over, setOver] = useState<string | null>(null);

  const moveFile = (fileId: string, toFolder: string) => {
    setTree((prev) => {
      let file: Node | undefined;
      const stripped = prev.map((f) => ({ ...f, children: f.children?.filter((c) => { if (c.id === fileId) { file = c; return false; } return true; }) }));
      if (!file || toFolder === (prev.find((f) => f.children?.some((c) => c.id === fileId))?.id ?? '')) return prev;
      return stripped.map((f) => (f.id === toFolder ? { ...f, children: [...(f.children ?? []), file as Node] } : f));
    });
  };

  return (
    <div className="w-full text-xs font-mono">
      {tree.map((folder) => (
        <div
          key={folder.id}
          onDragOver={(e) => { e.preventDefault(); setOver(folder.id); }}
          onDrop={(e) => { e.preventDefault(); if (drag) moveFile(drag, folder.id); setDrag(null); setOver(null); }}
          className={`rounded-lg px-1 py-0.5 ${over === folder.id ? 'ring-2 ring-indigo-500 bg-indigo-50 dark:bg-indigo-950/40' : ''}`}
        >
          <button
            type="button"
            onClick={() => setOpen((o) => ({ ...o, [folder.id]: !o[folder.id] }))}
            aria-expanded={open[folder.id]}
            className="min-h-[36px] flex items-center gap-1.5 text-left cursor-pointer font-semibold text-slate-800 dark:text-slate-200"
          >
            <ChevronRight className={`w-3.5 h-3.5 text-slate-400 transition-transform ${open[folder.id] ? 'rotate-90' : ''}`} />
            {open[folder.id] ? <FolderOpen className="w-4 h-4 text-amber-500" /> : <Folder className="w-4 h-4 text-amber-500" />}
            {folder.name} <span className="text-slate-400">({folder.children?.length ?? 0})</span>
          </button>
          {open[folder.id] && (
            <div className="pl-6 space-y-0.5">
              {folder.children?.map((file) => (
                <div
                  key={file.id}
                  draggable
                  onDragStart={(e) => { setDrag(file.id); e.dataTransfer.effectAllowed = 'move'; }}
                  onDragEnd={() => { setDrag(null); setOver(null); }}
                  className={`min-h-[36px] flex items-center gap-1.5 px-1.5 rounded cursor-grab active:cursor-grabbing text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 ${drag === file.id ? 'opacity-40' : ''}`}
                >
                  <FileCode className="w-3.5 h-3.5 text-emerald-500" /> {file.name}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <p className="mt-1.5 text-[11px] font-sans text-slate-500">Drag a file into another folder to move it.</p>
    </div>
  );
};
