// @jxui/react v3.0.0 — FeedbackGlassNotification (GlassNotification feedback variant)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Info, X, Bell } from 'lucide-react';

// 4. FeedbackGlassNotification — a frosted-glass notification that slides
// in on demand and auto-dismisses after 5 seconds (pausing while hovered).
export const FeedbackGlassNotification: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [visible, setVisible] = useState(false);
  const [remaining, setRemaining] = useState(5);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (!visible) return;
    setRemaining(5);
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(id);
          setVisible(false);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [visible]);

  return (
    <div className="w-full space-y-2">
      <button
        type="button"
        onClick={() => setVisible(true)}
        className={`min-h-[44px] inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white ${palette.bg} ${palette.bgHover} ${getRadiusClass('control')} cursor-pointer`}
      >
        <Bell className="w-3.5 h-3.5" />
        Show glass notification
      </button>
      {visible && (
        <div
          role="status"
          className="p-3 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/40 dark:border-slate-700 rounded-xl shadow-lg text-xs flex items-center gap-2"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
        >
          <Info className="w-4 h-4 text-sky-500 shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-slate-900 dark:text-white">Frosted Glass Ambient Notification</div>
            <div className="text-slate-500">Auto-dismisses in {remaining}s — hover to pause.</div>
            <div className="mt-1.5 h-1 bg-slate-200/70 dark:bg-slate-700/70 rounded-full overflow-hidden">
              <div className="h-full bg-sky-500 transition-all duration-1000" style={{ width: `${(remaining / 5) * 100}%` }} />
            </div>
          </div>
          <button
            type="button"
            aria-label="Dismiss notification"
            onClick={() => setVisible(false)}
            className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg text-slate-400 hover:bg-white/60 dark:hover:bg-slate-800/60 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
