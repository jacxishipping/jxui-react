// @jxui/react v3.0.0 — SkeletonCard (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 7. SkeletonCard — a real shimmer skeleton with the exact geometry of the
// loaded card (image block, title line, subtitle line, action row). The
// toggle swaps to the loaded card so the geometry match is visible.
export const SkeletonCard: React.FC = () => {
  const { palette } = useJXTheme();
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-56 space-y-2">
      {loaded ? (
        <div className="p-3 border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col gap-2 bg-white dark:bg-slate-900">
          <div className="w-full h-20 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ background: `linear-gradient(135deg, ${palette.hex}, #7c3aed)` }}>
            JXUI Pro
          </div>
          <div className="h-3 text-sm font-bold text-slate-900 dark:text-white">JXUI Pro — Design System</div>
          <div className="h-2.5 text-xs text-slate-500">361 components · zero layout shift</div>
          <div className={`h-8 rounded-lg ${palette.bg} text-white text-xs font-semibold flex items-center justify-center`}>Get started</div>
        </div>
      ) : (
        <div className="p-3 border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col gap-2" aria-label="Loading card" aria-busy="true">
          <div className="w-full h-20 rounded-lg jx-shimmer-wave" />
          <div className="w-3/4 h-3 rounded jx-shimmer-wave" />
          <div className="w-1/2 h-2.5 rounded jx-shimmer-wave" />
          <div className="w-full h-8 rounded-lg jx-shimmer-wave" />
        </div>
      )}
      <button
        type="button"
        onClick={() => setLoaded((l) => !l)}
        aria-pressed={loaded}
        className="min-h-[36px] px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
      >
        {loaded ? 'Show skeleton' : 'Show loaded card'}
      </button>
    </div>
  );
};
