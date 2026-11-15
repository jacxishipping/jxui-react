// @jxui/react v3.0.0 — HoverLiftCard (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Heart, ChevronDown } from 'lucide-react';

// 4. HoverLiftCard — lifts on hover and focus, with a like button and an
// expandable detail section. Keyboard accessible: Enter/Space on the card
// toggles the details (it is a real button role, not a dead div).
export const HoverLiftCard: React.FC = () => {
  const { palette } = useJXTheme();
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(42);
  const [open, setOpen] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={() => setOpen((o) => !o)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen((o) => !o); }
      }}
      className="p-4 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 jx-elevation-1 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-1.5 focus-visible:-translate-y-1.5 transition-all cursor-pointer"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <span className="text-xs font-bold text-slate-900 dark:text-white block">Tactile Elevation Lift</span>
          <span className="text-[11px] text-slate-500">Spring physics on hover, press and focus.</span>
        </div>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); setLiked((l) => !l); setLikes((n) => (liked ? n - 1 : n + 1)); }}
          aria-pressed={liked}
          aria-label="Like this card"
          className={`min-h-[36px] min-w-[36px] flex items-center gap-1 rounded-full px-2 cursor-pointer shrink-0 ${
            liked ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-600' : 'text-slate-400 hover:text-rose-500'
          }`}
        >
          <Heart className={`w-4 h-4 ${liked ? 'fill-rose-500 text-rose-500' : ''}`} />
          <span className="text-xs font-semibold">{likes}</span>
        </button>
      </div>
      {open && (
        <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
          Elevation is driven by a spring curve (0.22, 1, 0.36, 1), so the card
          rises and settles instead of snapping. The same lift applies on
          keyboard focus, not just on hover.
        </p>
      )}
      <span className={`mt-2 inline-flex items-center gap-1 text-[11px] font-semibold ${palette.text}`}>
        {open ? 'Show less' : 'Show more'}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </span>
    </div>
  );
};
