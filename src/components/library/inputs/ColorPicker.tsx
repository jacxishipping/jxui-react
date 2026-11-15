// @jxui/react v3.0.0 — ColorPicker (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Copy, Check } from 'lucide-react';

// 17. ColorPicker — native colour input plus a swatch palette, an editable
// hex field (validated) and a copy-to-clipboard button.
const SWATCHES = ['#4f46e5', '#7c3aed', '#059669', '#e11d48', '#0284c7', '#d97706', '#111827', '#f8fafc'];

export const ColorPicker: React.FC = () => {
  const [color, setColor] = useState('#4f46e5');
  const [hexInput, setHexInput] = useState('#4f46e5');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const { getRadiusClass } = useJXTheme();

  const apply = (next: string) => {
    setColor(next);
    setHexInput(next);
    setError('');
  };

  const commitHex = () => {
    const v = hexInput.trim();
    if (/^#[0-9a-fA-F]{6}$/.test(v)) {
      apply(v.toLowerCase());
    } else {
      setError('Use a 6-digit hex like #4f46e5');
      setHexInput(color);
    }
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={color}
          onChange={(e) => apply(e.target.value)}
          aria-label="Pick a colour"
          className="w-11 h-11 min-w-[44px] rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer bg-white dark:bg-slate-900 p-0.5"
        />
        <div
          className={`flex-1 h-11 min-h-[44px] ${getRadiusClass('control')} border border-slate-200 dark:border-slate-700`}
          style={{ backgroundColor: color }}
          aria-hidden="true"
        />
        <input
          value={hexInput}
          onChange={(e) => setHexInput(e.target.value)}
          onBlur={commitHex}
          onKeyDown={(e) => e.key === 'Enter' && commitHex()}
          aria-label="Hex colour value"
          className="w-24 min-h-[44px] px-2 py-2 font-mono text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
        />
        <button
          type="button"
          onClick={async () => {
            await navigator.clipboard?.writeText(color).catch(() => undefined);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          aria-label="Copy hex value"
          className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="flex items-center gap-1.5" role="group" aria-label="Colour swatches">
        {SWATCHES.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => apply(s)}
            aria-label={`Choose colour ${s}`}
            aria-pressed={color === s}
            style={{ backgroundColor: s }}
            className={`w-7 h-7 min-w-[28px] min-h-[28px] rounded-full border cursor-pointer transition-transform hover:scale-110 ${
              color === s ? 'ring-2 ring-offset-2 ring-slate-400 dark:ring-slate-500' : 'border-slate-300 dark:border-slate-600'
            }`}
          />
        ))}
      </div>
      {error && <span className="text-[11px] text-rose-600 dark:text-rose-400">{error}</span>}
    </div>
  );
};
