// @jxui/react v3.0.0 — PasswordReveal (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Eye, EyeOff, Copy, Check } from 'lucide-react';

// 16. PasswordReveal — controlled password field with a show/hide toggle
// (aria-pressed + label), a copy button, and a live character count.
export const PasswordReveal: React.FC = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('TactileDesignTokens');
  const [copied, setCopied] = useState(false);
  const { getRadiusClass } = useJXTheme();

  return (
    <div className="w-full flex flex-col gap-1">
      <div className="relative flex items-center w-full">
        <input
          type={show ? 'text' : 'password'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-label="Password"
          className={`w-full min-h-[44px] px-3 py-1.5 pr-20 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white ${getRadiusClass('control')}`}
        />
        <div className="absolute right-1 flex items-center">
          <button
            type="button"
            onClick={async () => {
              await navigator.clipboard?.writeText(value).catch(() => undefined);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
            aria-label="Copy password"
            className="min-w-[36px] min-h-[36px] flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <button
            type="button"
            onClick={() => setShow(!show)}
            aria-label={show ? 'Hide password' : 'Show password'}
            aria-pressed={show}
            className="min-w-[36px] min-h-[36px] flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            {show ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
      <span className="text-[11px] font-mono text-slate-400">
        {value.length} characters · {show ? 'visible' : 'hidden'}
      </span>
    </div>
  );
};
