// @jxui/react v3.0.0 — AIResponseActions (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { ThumbsUp, ThumbsDown, Copy, RefreshCw, Check, Share2 } from 'lucide-react';

// 10. AIResponseActions — actions for an AI response: like / dislike (one
// at a time), copy, share, and regenerate — which cycles through alternate
// simulated responses with a brief loading state.
const VARIANTS = [
  'JXUI ships 361 components across 18 categories, with 61 showcases and 300 primitives.',
  'In short: 361 components — 61 real showcases, 300 primitives, 12 of which are now interactive.',
  'The library covers inputs, tables, data-viz, AI, editors and more; the tables category is the next to make real.',
];

export const AIResponseActions: React.FC = () => {
  const { palette } = useJXTheme();
  const [vote, setVote] = useState<'up' | 'down' | null>(null);
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const [variant, setVariant] = useState(0);
  const [regenerating, setRegenerating] = useState(false);

  const copy = async () => {
    try { await navigator.clipboard.writeText(VARIANTS[variant]); } catch { /* clipboard unavailable */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  const regenerate = () => {
    setRegenerating(true);
    setTimeout(() => {
      setVariant((v) => (v + 1) % VARIANTS.length);
      setRegenerating(false);
    }, 700);
  };
  const share = () => {
    setShared(true);
    setTimeout(() => setShared(false), 1500);
  };

  const btn = 'min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg cursor-pointer text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200';

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 text-slate-700 dark:text-slate-300 leading-relaxed min-h-[64px]">
        {regenerating ? (
          <span className="inline-flex items-center gap-2 text-slate-400"><RefreshCw className="w-4 h-4 animate-spin" /> Regenerating response…</span>
        ) : (
          VARIANTS[variant]
        )}
      </div>
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => setVote((v) => (v === 'up' ? null : 'up'))} aria-label="Helpful" aria-pressed={vote === 'up'} className={`${btn} ${vote === 'up' ? 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400' : ''}`}>
          <ThumbsUp className="w-4 h-4" />
        </button>
        <button type="button" onClick={() => setVote((v) => (v === 'down' ? null : 'down'))} aria-label="Not helpful" aria-pressed={vote === 'down'} className={`${btn} ${vote === 'down' ? 'bg-rose-100 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400' : ''}`}>
          <ThumbsDown className="w-4 h-4" />
        </button>
        <button type="button" onClick={copy} aria-label="Copy response" className={btn}>
          {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
        </button>
        <button type="button" onClick={regenerate} disabled={regenerating} aria-label="Regenerate response" className={`${btn} disabled:opacity-50`}>
          <RefreshCw className={`w-4 h-4 ${regenerating ? 'animate-spin' : ''}`} />
        </button>
        <button type="button" onClick={share} aria-label="Share response" className={btn}>
          {shared ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
        </button>
        <span className="ml-auto text-[11px] font-mono text-slate-400">
          {vote === 'up' ? 'Thanks for the feedback!' : vote === 'down' ? 'We will improve this answer.' : `${VARIANTS[variant].split(' ').length} words · variant ${variant + 1}/3`}
        </span>
      </div>
    </div>
  );
};
