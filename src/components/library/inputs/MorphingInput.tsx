// @jxui/react v3.0.0 — MorphingInput (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Maximize2, Minimize2 } from 'lucide-react';

// 5. MorphingInput — a single-line input that morphs into a multi-line
// textarea on focus (or via the expand button) and back on collapse.
// The text is preserved across the morph, with a live character count.
export const MorphingInput: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState('');
  const { palette, getRadiusClass } = useJXTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const areaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="w-full flex flex-col gap-1">
      <div className="relative">
        {expanded ? (
          <textarea
            ref={areaRef}
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Morphing into multi-line markdown..."
            rows={3}
            aria-label="Expanded multi-line input"
            className={`w-full min-h-[88px] p-2.5 pr-9 text-xs bg-white dark:bg-slate-900 border rounded-lg text-slate-900 dark:text-white ${getRadiusClass('control')}`}
            style={{ borderColor: palette.hex }}
          />
        ) : (
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setExpanded(true)}
            placeholder="Click to morph into multi-line textarea..."
            aria-label="Single-line input, focus to expand"
            className={`w-full min-h-[44px] px-3 py-2 pr-9 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white cursor-pointer ${getRadiusClass('control')}`}
          />
        )}
        <button
          type="button"
          onClick={() => {
            setExpanded((e) => !e);
            setTimeout(() => (expanded ? inputRef.current?.focus() : areaRef.current?.focus()), 0);
          }}
          aria-label={expanded ? 'Collapse to single-line input' : 'Expand to multi-line textarea'}
          className="absolute right-1 top-1 min-w-[36px] min-h-[36px] flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer"
        >
          {expanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>
      </div>
      <span className="text-[11px] font-mono text-slate-400">
        {value.length} characters · {expanded ? 'multi-line' : 'single-line'}
      </span>
    </div>
  );
};
