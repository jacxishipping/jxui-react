// @jxui/react v3.0.0 — MorphSwitch (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Check, X } from 'lucide-react';

// 2. MorphSwitch — the thumb morphs between a cross (off) and a palette
// check (on), with a label and proper switch semantics.
export const MorphSwitch: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const { palette } = useJXTheme();
  return (
    <button
      type="button"
      onClick={() => setChecked(!checked)}
      role="switch"
      aria-checked={checked}
      aria-label="Morph switch"
      className="min-h-[36px] flex items-center gap-2.5 px-1 cursor-pointer"
    >
      <span
        className={`w-11 h-6 rounded-full flex items-center p-0.5 transition-colors cursor-pointer shrink-0 ${
          checked ? '' : 'bg-slate-300 dark:bg-slate-700'
        }`}
        style={checked ? { backgroundColor: palette.hex } : undefined}
      >
        <span className={`w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-xs transition-transform ${checked ? 'translate-x-5' : 'translate-x-0'}`}>
          {checked ? <Check className="w-3 h-3" style={{ color: palette.hex }} /> : <X className="w-3 h-3 text-slate-400" />}
        </span>
      </span>
      <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
        Morph {checked ? '· on' : '· off'}
      </span>
    </button>
  );
};
