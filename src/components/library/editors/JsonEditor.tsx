// @jxui/react v3.0.0 — JsonEditor (JXUI v3.0 Unified Component Suite)
import React, { useState, useMemo } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';

// 8. JsonEditor — edit JSON with live validation: the error message names
// the problem, Format prettifies, Minify compacts, and Copy copies it out.
const DEFAULT_JSON = `{
  "theme": "Tactile Luminescence",
  "components": 361,
  "accent": "indigo",
  "features": ["glass", "motion", "a11y"]
}`;

export const JsonEditor: React.FC = () => {
  const { palette } = useJXTheme();
  const [text, setText] = useState(DEFAULT_JSON);
  const [copied, setCopied] = useState(false);

  const validation = useMemo(() => {
    try {
      const parsed = JSON.parse(text);
      const keys = typeof parsed === 'object' && parsed !== null ? Object.keys(parsed).length : 0;
      return { ok: true as const, message: `Valid JSON · ${keys} top-level keys`, keys };
    } catch (e) {
      return { ok: false as const, message: e instanceof Error ? e.message : 'Invalid JSON', keys: 0 };
    }
  }, [text]);

  const lines = text.split('\n').length;
  const format = () => {
    try { setText(JSON.stringify(JSON.parse(text), null, 2)); } catch { /* keep invalid text as-is */ }
  };
  const minify = () => {
    try { setText(JSON.stringify(JSON.parse(text))); } catch { /* keep invalid text as-is */ }
  };
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); } catch { /* clipboard unavailable */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden text-xs">
      <div className="flex flex-wrap items-center gap-1 px-2 py-2 border-b border-slate-200 dark:border-slate-800">
        <span className="font-mono font-semibold text-slate-800 dark:text-slate-200 mr-1">config.json</span>
        <button type="button" onClick={format} className="min-h-[36px] px-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">Format</button>
        <button type="button" onClick={minify} className="min-h-[36px] px-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">Minify</button>
        <button type="button" onClick={copy} className={`min-h-[36px] px-2.5 inline-flex items-center gap-1 rounded-lg text-white font-semibold cursor-pointer ${palette.bg}`}>
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />} {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <div className="flex">
        <div aria-hidden="true" className="py-2 pl-3 pr-2 text-right font-mono text-[11px] leading-5 text-slate-400 select-none shrink-0">
          {Array.from({ length: lines }, (_, i) => (<div key={i}>{i + 1}</div>))}
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label="JSON editor"
          spellCheck={false}
          rows={8}
          className="flex-1 min-w-0 py-2 pr-3 bg-transparent font-mono text-xs leading-5 text-slate-800 dark:text-slate-200 resize-none"
        />
      </div>
      <div className={`px-3 py-2 border-t flex items-center gap-1.5 font-mono text-[11px] ${validation.ok ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
        {validation.ok ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
        <span className="truncate">{validation.message}</span>
        <span className="ml-auto shrink-0 text-slate-400">{lines} lines · {text.length} chars</span>
      </div>
    </div>
  );
};
