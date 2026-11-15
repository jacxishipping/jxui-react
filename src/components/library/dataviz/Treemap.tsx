// @jxui/react v3.0.0 — Treemap (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 12. Treemap — real treemap: tile area encodes share of the library,
// hover/click a tile to spotlight it and read its component count.
const TILES = [
  { label: 'Core', value: 60, count: 216, color: 'accent' },
  { label: 'Lab', value: 25, count: 90, color: '#059669' },
  { label: 'Docs', value: 15, count: 55, color: '#7c3aed' },
] as const;

export const Treemap: React.FC = () => {
  const { palette } = useJXTheme();
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="w-full space-y-2">
      <div className="w-full h-28 flex gap-1" role="img" aria-label="Treemap of the library: Core 60%, Lab 25%, Docs 15%">
        {TILES.map((t, i) => (
          <button
            key={t.label}
            type="button"
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            style={{
              flexGrow: t.value,
              backgroundColor: t.color === 'accent' ? palette.hex : t.color,
              opacity: active === null || active === i ? 1 : 0.55,
            }}
            className="min-h-[44px] rounded-lg p-2 text-left text-white cursor-pointer transition-all duration-200 hover:brightness-110"
          >
            <span className="block text-xs font-bold">{t.label}</span>
            <span className="block font-mono text-[11px] opacity-90">{t.value}% · {t.count} comps</span>
          </button>
        ))}
      </div>
      <p className="text-xs text-slate-600 dark:text-slate-300" aria-live="polite">
        {active === null
          ? 'Hover a tile to inspect it.'
          : `${TILES[active].label}: ${TILES[active].count} components, ${TILES[active].value}% of the library.`}
      </p>
    </div>
  );
};
