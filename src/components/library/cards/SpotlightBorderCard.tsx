// @jxui/react v3.0.0 — SpotlightBorderCard (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, ArrowUpRight } from 'lucide-react';

// 12. SpotlightBorderCard — a card whose border glow follows the cursor.
// The spotlight position is tracked with pointer events and rendered as a
// radial gradient; moving the mouse across the card moves the glow.
export const SpotlightBorderCard: React.FC = () => {
  const { palette } = useJXTheme();
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);
  const [cta, setCta] = useState(false);

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="relative p-4 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs"
      style={{
        boxShadow: active
          ? `0 0 24px ${palette.hex}55, inset 0 0 0 1px ${palette.hex}66`
          : undefined,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(180px circle at ${pos.x}% ${pos.y}%, ${palette.hex}33, transparent 70%)`,
        }}
      />
      <div className="relative flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Sparkles className={`w-4 h-4 ${palette.text}`} />
          <span className="font-bold text-sm text-slate-900 dark:text-white">Glow Border Card</span>
        </div>
        <p className="text-slate-500 leading-relaxed">
          Move your cursor across this card — the glow follows it, and the
          border lights up in the theme accent.
        </p>
        <button
          type="button"
          onClick={() => { setCta(true); setTimeout(() => setCta(false), 1500); }}
          className={`min-h-[36px] self-start inline-flex items-center gap-1 font-semibold cursor-pointer ${palette.text}`}
        >
          {cta ? 'Spotlight on!' : 'Try the spotlight'}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
