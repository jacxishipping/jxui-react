// @jxui/react v3.0.0 — PanelGroup (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { ChevronDown, Sliders, Layers, Eye } from 'lucide-react';

// 14. PanelGroup — a group of inspector panels: each panel expands and
// collapses, and the Properties panel has a drag handle to resize it.
const PANELS = [
  { id: 'inspector', title: 'Inspector', Icon: Eye, body: 'Selected element: JXButton. Variant contained, tone primary, size md.' },
  { id: 'properties', title: 'Properties', Icon: Sliders, body: 'Radius 12px · Elevation 2 · Motion spring · Focus ring on.' },
  { id: 'layers', title: 'Layers', Icon: Layers, body: 'Button / Icon / Label — 3 layers, topmost is the label.' },
] as const;

export const PanelGroup: React.FC = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({ inspector: true, properties: true, layers: false });
  const [propH, setPropH] = useState(64);
  const dragRef = useRef<{ y: number; h: number } | null>(null);

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden text-xs divide-y divide-slate-100 dark:divide-slate-800">
      {PANELS.map(({ id, title, Icon, body }) => {
        const isOpen = Boolean(open[id]);
        const isProps = id === 'properties';
        return (
          <div key={id}>
            <button
              type="button"
              onClick={() => setOpen((o) => ({ ...o, [id]: !o[id] }))}
              aria-expanded={isOpen}
              className="w-full min-h-[44px] flex items-center gap-2 px-3 py-2 font-bold text-slate-800 dark:text-slate-200 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/40 text-left"
            >
              <Icon className="w-4 h-4 text-slate-400" />
              <span className="flex-1">{title}</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
              <div
                className="px-3 pb-2 text-slate-500 leading-relaxed overflow-hidden"
                style={isProps ? { height: propH } : undefined}
              >
                {body}
                {isProps && (
                  <div
                    role="slider"
                    aria-label="Resize Properties panel"
                    aria-valuenow={propH}
                    aria-valuemin={48}
                    aria-valuemax={140}
                    tabIndex={0}
                    onPointerDown={(e) => { dragRef.current = { y: e.clientY, h: propH }; (e.target as HTMLElement).setPointerCapture(e.pointerId); }}
                    onPointerMove={(e) => { const d = dragRef.current; if (d) setPropH(Math.max(48, Math.min(140, d.h + (e.clientY - d.y)))); }}
                    onPointerUp={() => { dragRef.current = null; }}
                    onPointerCancel={() => { dragRef.current = null; }}
                    onKeyDown={(e) => { if (e.key === 'ArrowDown') setPropH((h) => Math.min(140, h + 8)); if (e.key === 'ArrowUp') setPropH((h) => Math.max(48, h - 8)); }}
                    className="mt-1 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 cursor-ns-resize touch-none"
                  />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
