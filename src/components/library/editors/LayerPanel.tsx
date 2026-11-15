// @jxui/react v3.0.0 — LayerPanel (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Eye, EyeOff, Lock, Unlock, Plus, Trash2, ArrowUp, ArrowDown } from 'lucide-react';

// 11. LayerPanel — a real layers panel: select a layer, toggle its
// visibility and lock, reorder it, delete it, or add a new one. The preview
// stack on the right reflects which layers are visible.
interface Layer { id: number; name: string; visible: boolean; locked: boolean; color: string; }
const INITIAL: Layer[] = [
  { id: 1, name: 'Header Glass', visible: true, locked: false, color: '#4f46e5' },
  { id: 2, name: 'Bento Grid', visible: true, locked: false, color: '#059669' },
  { id: 3, name: 'Background Blur', visible: true, locked: true, color: '#7c3aed' },
  { id: 4, name: 'Footer', visible: false, locked: false, color: '#e11d48' },
];

export const LayerPanel: React.FC = () => {
  const { palette } = useJXTheme();
  const [layers, setLayers] = useState<Layer[]>(INITIAL);
  const [selected, setSelected] = useState(1);
  const [nextId, setNextId] = useState(5);
  const colors = ['#4f46e5', '#059669', '#7c3aed', '#e11d48', '#0284c7', '#d97706'];

  const patch = (id: number, p: Partial<Layer>) => setLayers((ls) => ls.map((l) => (l.id === id ? { ...l, ...p } : l)));
  const move = (id: number, dir: -1 | 1) => {
    setLayers((ls) => {
      const i = ls.findIndex((l) => l.id === id);
      const j = i + dir;
      if (i < 0 || j < 0 || j >= ls.length) return ls;
      const next = [...ls];
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });
  };
  const add = () => {
    const color = colors[(nextId - 1) % colors.length];
    setLayers((ls) => [...ls, { id: nextId, name: `Layer ${nextId}`, visible: true, locked: false, color }]);
    setSelected(nextId);
    setNextId((n) => n + 1);
  };
  const visibleCount = layers.filter((l) => l.visible).length;

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 text-xs flex gap-2">
      <div className="flex-1 min-w-0 space-y-1">
        <div className="flex items-center justify-between px-1">
          <span className="font-bold text-slate-800 dark:text-slate-200">Layers · {layers.length} ({visibleCount} visible)</span>
          <button type="button" onClick={add} aria-label="Add layer" className={`min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg text-white cursor-pointer ${palette.bg}`}><Plus className="w-4 h-4" /></button>
        </div>
        {layers.map((layer) => (
          <div
            key={layer.id}
            className={`flex items-center gap-1 rounded-lg border px-1.5 py-1 ${selected === layer.id ? `${palette.border} ${palette.softBg}` : 'border-transparent'}`}
          >
            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: layer.color }} />
            <button type="button" onClick={() => setSelected(layer.id)} aria-pressed={selected === layer.id} className="flex-1 min-w-0 min-h-[36px] text-left truncate font-medium text-slate-800 dark:text-slate-200 cursor-pointer">
              {layer.name}
            </button>
            <button type="button" onClick={() => patch(layer.id, { visible: !layer.visible })} aria-label={`${layer.visible ? 'Hide' : 'Show'} ${layer.name}`} className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
              {layer.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
            </button>
            <button type="button" onClick={() => patch(layer.id, { locked: !layer.locked })} aria-label={`${layer.locked ? 'Unlock' : 'Lock'} ${layer.name}`} className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
              {layer.locked ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
            </button>
            <button type="button" onClick={() => move(layer.id, -1)} disabled={layer.locked} aria-label={`Move ${layer.name} up`} className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer disabled:opacity-30"><ArrowUp className="w-3.5 h-3.5" /></button>
            <button type="button" onClick={() => move(layer.id, 1)} disabled={layer.locked} aria-label={`Move ${layer.name} down`} className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer disabled:opacity-30"><ArrowDown className="w-3.5 h-3.5" /></button>
            <button type="button" onClick={() => setLayers((ls) => ls.filter((l) => l.id !== layer.id))} disabled={layer.locked} aria-label={`Delete ${layer.name}`} className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 cursor-pointer disabled:opacity-30"><Trash2 className="w-3.5 h-3.5" /></button>
          </div>
        ))}
      </div>
      <div className="w-24 shrink-0 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-1.5 flex flex-col-reverse gap-1" aria-label="Layer stack preview">
        {layers.map((l) => (
          <div key={l.id} className={`h-6 rounded flex items-center px-1.5 text-[10px] font-semibold text-white transition-opacity ${l.visible ? 'opacity-100' : 'opacity-25 line-through'}`} style={{ backgroundColor: l.color }}>
            {l.name}
          </div>
        ))}
      </div>
    </div>
  );
};
