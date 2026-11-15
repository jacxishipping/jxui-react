// @jxui/react v3.0.0 — HoverCard (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { ExternalLink } from 'lucide-react';

// 17. HoverCard — hover or focus the trigger to reveal a profile card with
// a working Follow toggle and a link that reports being opened.
export const HoverCard: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [following, setFollowing] = useState(false);
  const [opened, setOpened] = useState(false);
  const [show, setShow] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setShow(true);
  };
  const leave = () => {
    hideTimer.current = setTimeout(() => setShow(false), 150);
  };

  return (
    <div className="w-full">
      <div className="relative inline-block" onMouseEnter={enter} onMouseLeave={leave}>
        <button
          type="button"
          aria-describedby="hover-card"
          onFocus={enter}
          onBlur={leave}
          className={`min-h-[44px] px-4 py-2 text-xs font-semibold text-white ${palette.bg} ${palette.bgHover} ${getRadiusClass('control')} cursor-pointer`}
        >
          @jxui/react
        </button>
        {show && (
          <div
            id="hover-card"
            role="dialog"
            aria-label="Profile card for jxui/react"
            className="absolute left-0 top-full z-30 mt-2 w-64 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl text-xs"
            onMouseEnter={enter}
            onMouseLeave={leave}
          >
            <div className="flex items-center gap-2">
              <span className={`w-9 h-9 rounded-full ${palette.bg} text-white flex items-center justify-center font-bold`}>JX</span>
              <div>
                <div className="font-bold text-slate-900 dark:text-white">@jxui/react</div>
                <div className="text-[11px] text-slate-500">361 components · 0 stars</div>
              </div>
            </div>
            <p className="text-slate-500 mt-2">High-performance zero-shift design library.</p>
            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                aria-pressed={following}
                onClick={() => setFollowing((v) => !v)}
                className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                  following ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200' : `text-white ${palette.bg}`
                }`}
              >
                {following ? 'Following' : 'Follow'}
              </button>
              <button
                type="button"
                onClick={() => setOpened(true)}
                className="min-h-[36px] inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Visit
              </button>
            </div>
            {opened && <p className="mt-2 text-[11px] text-emerald-600 dark:text-emerald-400">Opened the repository link.</p>}
          </div>
        )}
      </div>
      <p className="mt-2 text-xs text-slate-500">Hover or focus the button to preview the profile card.</p>
    </div>
  );
};
