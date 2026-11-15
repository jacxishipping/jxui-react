// @jxui/react v3.0.0 — AnimatedInput (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, X, Check } from 'lucide-react';

// 3. AnimatedInput — controlled input with an animated focus reaction: the
// icon and border follow the theme accent on focus, a check appears once
// the value is valid (>= 3 chars), and the clear button empties it.
export const AnimatedInput: React.FC = () => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('');
  const { palette, getRadiusClass } = useJXTheme();
  const valid = value.trim().length >= 3;

  return (
    <div className="w-full flex flex-col gap-1">
      <div
        className={`flex items-center gap-2 px-3 py-2 min-h-[44px] bg-white dark:bg-slate-900 border ${getRadiusClass('control')} transition-all ${
          active ? 'shadow-sm' : 'border-slate-300 dark:border-slate-700'
        }`}
        style={active ? { borderColor: palette.hex } : undefined}
      >
        <Sparkles
          className={`w-4 h-4 shrink-0 transition-transform ${active ? 'scale-110' : 'text-slate-400'}`}
          style={active ? { color: palette.hex } : undefined}
        />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          placeholder="Animated focus reaction..."
          aria-label="Animated input"
          className="w-full bg-transparent text-xs text-slate-900 dark:text-white placeholder-slate-400"
        />
        {valid && <Check className="w-4 h-4 shrink-0 text-emerald-500" aria-label="Valid" />}
        {value && (
          <button
            type="button"
            onClick={() => setValue('')}
            aria-label="Clear input"
            className="min-w-[36px] min-h-[36px] flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      <span className="text-[11px] font-mono text-slate-400">
        {value.length} characters{valid ? ' · looks good' : ' · type at least 3'}
      </span>
    </div>
  );
};
