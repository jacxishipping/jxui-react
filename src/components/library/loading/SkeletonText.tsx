// @jxui/react v3.0.0 — SkeletonText (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';

// 9. SkeletonText — shimmer text lines with the line lengths of a real
// paragraph, plus a toggle that swaps in the actual paragraph so the
// geometry match is visible.
export const SkeletonText: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full max-w-64 space-y-2">
      {loaded ? (
        <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
          JXUI ships 361 components across 18 categories, each with a live
          preview, keyboard contract and design-token export.
        </p>
      ) : (
        <div className="flex flex-col gap-1.5" aria-label="Loading text" aria-busy="true">
          <div className="w-full h-2.5 rounded jx-shimmer-wave" />
          <div className="w-full h-2.5 rounded jx-shimmer-wave" />
          <div className="w-4/5 h-2.5 rounded jx-shimmer-wave" />
          <div className="w-3/5 h-2.5 rounded jx-shimmer-wave" />
        </div>
      )}
      <button
        type="button"
        onClick={() => setLoaded((l) => !l)}
        aria-pressed={loaded}
        className="min-h-[36px] px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
      >
        {loaded ? 'Show skeleton' : 'Show loaded text'}
      </button>
    </div>
  );
};
