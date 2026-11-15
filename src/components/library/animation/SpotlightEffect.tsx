// @jxui/react v3.0.0 — SpotlightEffect (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 13. SpotlightEffect — a dark panel where a radial spotlight really
// follows the pointer, lighting up the content underneath it. Toggle the
// spotlight off to compare the dimmed state.
export const SpotlightEffect: React.FC = () => {
  const { palette } = useJXTheme();
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [on, setOn] = useState(true);
  const [inside, setInside] = useState(false);

  return (
    <div className="w-full space-y-2">
      <div
        ref={ref}
        className="relative w-full h-28 rounded-xl overflow-hidden bg-slate-950 cursor-crosshair"
        onMouseMove={(e) => {
          const rect = ref.current?.getBoundingClientRect();
          if (!rect) return;
          setPos({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
        }}
        onMouseEnter={() => setInside(true)}
        onMouseLeave={() => setInside(false)}
      >
        <div
          className="absolute inset-0 transition-opacity duration-200"
          style={{
            opacity: on && inside ? 1 : 0,
            background: `radial-gradient(circle 90px at ${pos.x}% ${pos.y}%, ${palette.hex}55 0%, ${palette.hex}22 45%, transparent 70%)`,
          }}
        />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <span className="text-xs font-bold text-white">Spotlight Glow Shading</span>
          <span className="font-mono text-[11px] text-slate-400">
            {on ? (inside ? `spotlight at ${Math.round(pos.x)}%, ${Math.round(pos.y)}%` : 'Move your cursor over the panel') : 'Spotlight off — panel fully dimmed'}
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setOn((v) => !v)}
        aria-pressed={on}
        className="min-h-[36px] px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
      >
        {on ? 'Turn spotlight off' : 'Turn spotlight on'}
      </button>
    </div>
  );
};
