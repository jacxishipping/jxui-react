// @jxui/react v3.0.0 — MorphingCard (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Maximize2, Minimize2, ChevronRight, Activity, ArrowUpRight } from 'lucide-react';

import { tactile } from '../../../utils/tactileAudio';

export const MorphingCard: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [layout, setLayout] = useState<'compact' | 'expanded' | 'detail'>('compact');

  const cycleLayout = () => {
    tactile.playClick();
    setLayout((curr) => {
      if (curr === 'compact') return 'expanded';
      if (curr === 'expanded') return 'detail';
      return 'compact';
    });
  };

  return (
    <div
      onClick={cycleLayout}
      className={`w-full bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 jx-elevation-1 hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden touch-manipulation active:scale-[0.99] ${getRadiusClass('card')} ${
        layout === 'detail' ? 'p-4 ring-2 ring-[var(--jx-accent-halo)]' : layout === 'expanded' ? 'p-3.5' : 'p-3'
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <Activity className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-xs text-slate-900 dark:text-white">
            Morphing Card
          </span>
        </div>
        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-[#1E293B] text-slate-500 capitalize">
          {layout}
        </span>
      </div>

      {layout !== 'compact' && (
        <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-1.5 animate-fadeIn">
          <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
            <span>Throughput:</span>
            <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">99.98%</span>
          </div>
          {layout === 'detail' && (
            <div className="flex flex-col gap-1 text-[10px] text-slate-500 font-mono bg-slate-50 dark:bg-[#0B0F19] p-2 rounded-lg">
              <span>Latency: 4.2ms</span>
              <span>Memory: 18.4 MB</span>
              <span>Zero CLS Guarantee: Active</span>
            </div>
          )}
        </div>
      )}

      <div className="mt-2 text-[10px] text-slate-400 flex items-center justify-between">
        <span>Click to cycle layout</span>
        <ChevronRight className="w-3 h-3" />
      </div>
    </div>
  );
};
