// @jxui/react v3.0.0 — InteractiveTooltip (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Info, ExternalLink } from 'lucide-react';

// 16. InteractiveTooltip — hover or focus the trigger to show a tooltip
// that stays open while you interact with it; its link is clickable.
export const InteractiveTooltip: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [show, setShow] = useState(false);
  const [clicks, setClicks] = useState(0);
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
          aria-describedby="interactive-tooltip"
          onFocus={enter}
          onBlur={leave}
          className={`min-h-[44px] inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white ${palette.bg} ${palette.bgHover} ${getRadiusClass('control')} cursor-pointer`}
        >
          <Info className="w-3.5 h-3.5" />
          Hover me
        </button>
        {show && (
          <div
            id="interactive-tooltip"
            role="tooltip"
            className="absolute left-0 top-full z-30 mt-2 w-64 p-3 bg-slate-900 text-white rounded-lg text-xs shadow-xl"
            onMouseEnter={enter}
            onMouseLeave={leave}
          >
            <p className="font-semibold">Interactive tooltip</p>
            <p className="text-slate-300 mt-1 leading-relaxed">
              This tooltip stays open while you hover it, so the link inside is actually clickable.
            </p>
            <button
              type="button"
              onClick={() => setClicks((c) => c + 1)}
              className={`mt-2 min-h-[36px] inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-semibold cursor-pointer ${palette.bg} text-white`}
            >
              <ExternalLink className="w-3 h-3" />
              Open the docs{clicks > 0 ? ` (${clicks})` : ''}
            </button>
          </div>
        )}
      </div>
      {clicks > 0 && <p className="mt-2 text-xs text-slate-500">Docs link clicked {clicks} time{clicks === 1 ? '' : 's'}.</p>}
    </div>
  );
};
