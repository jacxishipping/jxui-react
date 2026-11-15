// @jxui/react v3.0.0 — FeatureCard (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Heart, ArrowUpRight } from 'lucide-react';

// 19. FeatureCard — a feature highlight with a like button, an expandable
// "Learn more" section and a call to action.
export const FeatureCard: React.FC = () => {
  const { palette } = useJXTheme();
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(128);
  const [learnMore, setLearnMore] = useState(false);

  return (
    <div className="p-4 border rounded-2xl bg-white dark:bg-slate-900 flex flex-col gap-2 text-xs">
      <div className="flex items-start justify-between">
        <Sparkles className={`w-5 h-5 ${palette.text}`} />
        <button
          type="button"
          onClick={() => { setLiked((l) => !l); setLikes((n) => (liked ? n - 1 : n + 1)); }}
          aria-pressed={liked}
          aria-label={liked ? 'Unlike Zero Layout Shift' : 'Like Zero Layout Shift'}
          className={`min-h-[36px] min-w-[36px] flex items-center gap-1 rounded-full px-2 cursor-pointer ${
            liked ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-600' : 'text-slate-400 hover:text-rose-500'
          }`}
        >
          <Heart className={`w-4 h-4 ${liked ? 'fill-rose-500 text-rose-500' : ''}`} />
          <span className="font-mono font-semibold">{likes}</span>
        </button>
      </div>
      <span className="font-bold text-sm text-slate-900 dark:text-white">Zero Layout Shift</span>
      <p className="text-slate-500 text-[11px] leading-relaxed">
        Stable geometry for supported state transitions.
      </p>
      {learnMore && (
        <p className="text-slate-500 text-[11px] leading-relaxed">
          Geometry is pre-allocated before content mounts, so buttons, cards
          and tables never jump when data arrives — measured CLS stays at 0.00
          across the whole workbench.
        </p>
      )}
      <button
        type="button"
        onClick={() => setLearnMore((v) => !v)}
        aria-expanded={learnMore}
        className={`min-h-[36px] self-start inline-flex items-center gap-1 font-semibold cursor-pointer ${palette.text}`}
      >
        {learnMore ? 'Show less' : 'Learn more'}
        <ArrowUpRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
