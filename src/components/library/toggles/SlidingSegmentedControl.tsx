// @jxui/react v3.0.0 — SlidingSegmentedControl (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 9. SlidingSegmentedControl — Dev / Stage / Prod with a pill that slides
// (translateX by thirds) under the active segment, 36px targets, and a
// one-line description of the selected environment.
const ENVS = [
  { name: 'Dev', detail: 'Local builds · hot reload' },
  { name: 'Stage', detail: 'Pre-production · review apps' },
  { name: 'Prod', detail: 'Live traffic · 99.99% SLA' },
];

export const SlidingSegmentedControl: React.FC = () => {
  const [active, setActive] = useState('Dev');
  const { palette } = useJXTheme();
  const idx = ENVS.findIndex((e) => e.name === active);

  return (
    <div className="w-full flex flex-col gap-1.5">
      <div className="relative flex border border-slate-300 dark:border-slate-700 rounded-lg p-0.5 text-xs font-medium" role="group" aria-label="Environment">
        <span
          aria-hidden="true"
          className={`absolute top-0.5 bottom-0.5 w-[calc((100%-4px)/3)] rounded-md ${palette.bg} shadow-xs transition-transform duration-300`}
          style={{ transform: `translateX(${idx * 100}%)` }}
        />
        {ENVS.map((env) => (
          <button
            key={env.name}
            type="button"
            onClick={() => setActive(env.name)}
            aria-pressed={active === env.name}
            className={`relative z-10 flex-1 min-h-[36px] px-3 py-1 rounded-md transition-colors cursor-pointer ${
              active === env.name ? 'text-white font-semibold' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            {env.name}
          </button>
        ))}
      </div>
      <span className="text-[11px] font-mono text-slate-400">{ENVS[idx].detail}</span>
    </div>
  );
};
