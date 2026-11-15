// @jxui/react v3.0.0 — ResponsiveGrid (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';

// 11. ResponsiveGrid — a 12-column grid demo: pick a viewport (mobile /
// tablet / desktop) and the tiles re-span to that breakpoint's columns.
const TILES = [
  { id: 'a', label: 'Header', spans: { mobile: 12, tablet: 12, desktop: 12 } },
  { id: 'b', label: 'Sidebar', spans: { mobile: 12, tablet: 4, desktop: 3 } },
  { id: 'c', label: 'Content', spans: { mobile: 12, tablet: 8, desktop: 6 } },
  { id: 'd', label: 'Aside', spans: { mobile: 12, tablet: 12, desktop: 3 } },
  { id: 'e', label: 'Footer', spans: { mobile: 12, tablet: 12, desktop: 12 } },
] as const;
type BP = 'mobile' | 'tablet' | 'desktop';
const BP_WIDTH: Record<BP, string> = { mobile: '100%', tablet: '75%', desktop: '100%' };

export const ResponsiveGrid: React.FC = () => {
  const [bp, setBp] = useState<BP>('desktop');

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="flex items-center gap-1.5 flex-wrap">
        <span className="font-semibold text-slate-700 dark:text-slate-200">Viewport:</span>
        {(['mobile', 'tablet', 'desktop'] as const).map((b) => (
          <button key={b} type="button" onClick={() => setBp(b)} aria-pressed={bp === b} className={`min-h-[36px] px-3 rounded-lg font-semibold capitalize cursor-pointer ${bp === b ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>{b}</button>
        ))}
        <span className="ml-auto font-mono text-slate-500">{bp === 'mobile' ? '390px · 12 cols' : bp === 'tablet' ? '768px · 12 cols' : '1280px · 12 cols'}</span>
      </div>
      <div className="mx-auto transition-all" style={{ width: bp === 'tablet' ? '75%' : '100%' }}>
        <div className="grid grid-cols-12 gap-1.5">
          {TILES.map((t, i) => (
            <div
              key={t.id}
              className={`min-h-[44px] rounded-lg flex items-center justify-center font-bold text-white ${i % 2 ? 'bg-violet-500' : 'bg-indigo-600'}`}
              style={{ gridColumn: `span ${t.spans[bp]}` }}
            >
              {t.label} · {t.spans[bp]}/12
            </div>
          ))}
        </div>
      </div>
      <p className="text-[11px] font-mono text-slate-500">grid-template-columns: repeat(12, 1fr) · breakpoint: {bp}</p>
    </div>
  );
};
