// @jxui/react v3.0.0 — DesignTokenEditor (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Copy, Check } from 'lucide-react';

// 15. DesignTokenEditor — edit design tokens (radius, spacing, font size)
// and see a live preview update. Copy the tokens out as JSON.
interface Token { name: string; value: string; }
const INITIAL: Token[] = [
  { name: '--jx-radius-control', value: '12px' },
  { name: '--jx-radius-card', value: '16px' },
  { name: '--jx-spacing', value: '8px' },
  { name: '--jx-font-size', value: '14px' },
];

export const DesignTokenEditor: React.FC = () => {
  const { palette } = useJXTheme();
  const [tokens, setTokens] = useState<Token[]>(INITIAL);
  const [copied, setCopied] = useState(false);
  const get = (name: string) => tokens.find((t) => t.name === name)?.value ?? '';
  const set = (name: string, value: string) => setTokens((ts) => ts.map((t) => (t.name === name ? { ...t, value } : t)));

  const copyJson = async () => {
    const obj = Object.fromEntries(tokens.map((t) => [t.name, t.value]));
    try { await navigator.clipboard.writeText(JSON.stringify(obj, null, 2)); } catch { /* clipboard unavailable */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 space-y-3 text-xs">
      <div className="space-y-1.5">
        {tokens.map((t) => (
          <label key={t.name} className="flex items-center gap-2">
            <span className="w-40 shrink-0 font-mono text-slate-600 dark:text-slate-300 truncate">{t.name}</span>
            <input
              value={t.value}
              onChange={(e) => set(t.name, e.target.value)}
              aria-label={`Value for ${t.name}`}
              className="flex-1 min-w-0 min-h-[36px] px-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent font-mono text-slate-800 dark:text-slate-200"
            />
          </label>
        ))}
      </div>
      <div
        className="p-3 border flex items-center justify-between"
        style={{ borderRadius: get('--jx-radius-card'), gap: get('--jx-spacing') }}
      >
        <span style={{ fontSize: get('--jx-font-size') }} className="font-semibold text-slate-800 dark:text-slate-200">Live preview card</span>
        <span className={`px-3 py-1.5 text-white font-semibold ${palette.bg}`} style={{ borderRadius: get('--jx-radius-control'), fontSize: get('--jx-font-size') }}>Button</span>
      </div>
      <button type="button" onClick={copyJson} className={`min-h-[44px] px-3 inline-flex items-center gap-1.5 rounded-lg text-white font-semibold cursor-pointer ${palette.bg}`}>
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        {copied ? 'Copied JSON' : 'Copy tokens as JSON'}
      </button>
    </div>
  );
};
