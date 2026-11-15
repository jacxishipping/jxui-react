// @jxui/react v3.0.0 — FormGlassInput (GlassInput form variant)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Search, X, Check } from 'lucide-react';

// 4. FormGlassInput — a frosted-glass search input: controlled value, live
// result count against a deterministic list, clear button, and an accent
// glow ring while focused.
const ITEMS = ['JXButton', 'JXDataGrid', 'JXCard', 'JXModal', 'JXInput', 'JXChart', 'JXTable', 'JXToast'];

export const FormGlassInput: React.FC = () => {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const { palette, getRadiusClass } = useJXTheme();
  const results = ITEMS.filter((i) => i.toLowerCase().includes(value.toLowerCase()));

  return (
    <div className="w-full flex flex-col gap-1.5">
      <div
        className={`flex items-center gap-2 px-3.5 py-2 min-h-[44px] bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border ${getRadiusClass('control')} transition-all ${
          focused ? 'shadow-lg' : 'border-white/40 dark:border-slate-700/60'
        }`}
        style={focused ? { borderColor: palette.hex } : undefined}
      >
        <Search className="w-4 h-4 shrink-0 text-slate-400" style={focused ? { color: palette.hex } : undefined} />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Glassmorphic input — search components..."
          aria-label="Glass search input"
          className="w-full bg-transparent text-xs text-slate-900 dark:text-white placeholder-slate-400"
        />
        {value ? (
          <button
            type="button"
            onClick={() => setValue('')}
            aria-label="Clear search"
            className="min-w-[36px] min-h-[36px] flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        ) : (
          <Check className="w-4 h-4 shrink-0 text-slate-300" aria-hidden="true" />
        )}
      </div>
      <span className="text-[11px] font-mono text-slate-400">
        {value ? `${results.length} result${results.length === 1 ? '' : 's'} for “${value}”` : `${ITEMS.length} components indexed`}
      </span>
      {value && results.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {results.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setValue(r)}
              className={`px-2 py-1 min-h-[32px] text-[11px] font-mono rounded-full cursor-pointer ${palette.softBg} ${palette.text}`}
            >
              {r}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
