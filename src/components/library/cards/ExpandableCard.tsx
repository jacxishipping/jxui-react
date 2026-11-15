// @jxui/react v3.0.0 — ExpandableCard (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { ChevronDown, Check, Copy } from 'lucide-react';

// 2. ExpandableCard — expands to a full detail panel: feature list, stats
// and a copyable install snippet (with a "Copied" confirmation).
export const ExpandableCard: React.FC = () => {
  const { palette } = useJXTheme();
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const copySnippet = async () => {
    try {
      await navigator.clipboard.writeText('npm i @jacxishippingorg/jx-ui-react');
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="p-4 border rounded-2xl bg-white dark:bg-slate-900 text-xs">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        className="w-full min-h-[36px] flex items-center justify-between gap-2 text-left font-bold text-sm text-slate-900 dark:text-white cursor-pointer"
      >
        <span>Module Details</span>
        <ChevronDown className={`w-4 h-4 shrink-0 text-slate-400 transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>
      <p className="text-slate-500">Provides deep integration with the JXUI styling engine.</p>
      {expanded && (
        <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
          <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
            {['361 components across 18 categories', 'Theme tokens: accent + radius scales', 'Zero-CLS geometry locking'].map((f) => (
              <li key={f} className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg bg-slate-950 text-slate-200 font-mono text-[11px]">
            <span className="truncate">npm i @jacxishippingorg/jx-ui-react</span>
            <button
              type="button"
              onClick={copySnippet}
              aria-label="Copy install command"
              className="min-h-[32px] min-w-[32px] flex items-center justify-center rounded hover:bg-slate-800 cursor-pointer shrink-0"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className={`font-semibold ${palette.text}`} aria-live="polite">
            {copied ? 'Copied to clipboard.' : 'v3.0.0 · MIT licensed'}
          </p>
        </div>
      )}
    </div>
  );
};
