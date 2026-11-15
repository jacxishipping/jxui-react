// @jxui/react v3.0.0 — SharedElementTransition (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X } from 'lucide-react';

// 3. SharedElementTransition — click a thumbnail and the same element
// expands into its detail card (the accent header is shared between the
// two states), then shrinks back on close. Layout ID: shared-card.
const CARDS = [
  { id: 'button', title: 'JXButton', body: 'Morphing tactile button with spring thumb, loading and success states.', tag: 'Inputs' },
  { id: 'table', title: 'JXTable', body: 'Virtualized data surface with sorting, selection and bulk actions.', tag: 'Tables' },
  { id: 'chart', title: 'JXCharts', body: 'Interactive SVG telemetry with magnetic crosshair and legend pills.', tag: 'Data Viz' },
];

export const SharedElementTransition: React.FC = () => {
  const { palette } = useJXTheme();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="w-full space-y-2">
      <div className="flex gap-2">
        {CARDS.map((card) => {
          const active = selected === card.id;
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => setSelected(active ? null : card.id)}
              aria-expanded={active}
              aria-label={`${active ? 'Collapse' : 'Expand'} ${card.title}`}
              className={`min-h-[88px] rounded-xl border text-left p-2.5 cursor-pointer transition-all duration-500 ease-in-out overflow-hidden ${
                active ? 'flex-[2.2] border-transparent shadow-lg' : 'flex-1 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md'
              }`}
              style={active ? { backgroundColor: palette.hex } : undefined}
            >
              <div className={`text-xs font-bold ${active ? 'text-white' : 'text-slate-800 dark:text-slate-100'}`}>{card.title}</div>
              <div className={`text-[10px] font-mono mt-0.5 ${active ? 'text-white/80' : 'text-slate-400'}`}>{card.tag}</div>
              {active && <p className="text-[11px] leading-snug text-white/90 mt-2">{card.body}</p>}
              {active && <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-mono text-white/80">shared-card · layout id <X className="w-3 h-3" /></span>}
            </button>
          );
        })}
      </div>
      <span className="text-[11px] text-slate-500">
        {selected ? `Expanded ${CARDS.find((c) => c.id === selected)?.title} — click it again to shrink.` : 'Click a card to expand it in place.'}
      </span>
    </div>
  );
};
