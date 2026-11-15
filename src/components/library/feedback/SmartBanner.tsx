// @jxui/react v3.0.0 — SmartBanner (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { X } from 'lucide-react';

// 7. SmartBanner — dismissible announcement banner with a working CTA
// (clicks counted) and a restore action after dismissal.
export const SmartBanner: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [ctaClicks, setCtaClicks] = useState(0);

  if (!visible) {
    return (
      <div className="w-full">
        <p className="text-xs text-slate-500">Banner dismissed{ctaClicks > 0 ? ` — the CTA was clicked ${ctaClicks} time${ctaClicks === 1 ? '' : 's'} first` : ''}.</p>
        <button
          type="button"
          onClick={() => setVisible(true)}
          className="mt-2 min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"
        >
          Show banner again
        </button>
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs flex items-center justify-between gap-2 rounded-lg">
      <span className="flex-1">JXUI 3.0 includes 300 modular primitives.</span>
      <button
        type="button"
        onClick={() => setCtaClicks((c) => c + 1)}
        className="min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/20 hover:bg-white/30 cursor-pointer"
      >
        Explore{ctaClicks > 0 ? ` (${ctaClicks})` : ''}
      </button>
      <button
        type="button"
        aria-label="Dismiss banner"
        onClick={() => setVisible(false)}
        className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg text-white/80 hover:text-white hover:bg-white/10 cursor-pointer"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
