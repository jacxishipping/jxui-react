// @jxui/react v3.0.0 — AICitationCard (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { ExternalLink, ChevronDown, Copy, Check, ShieldCheck, FileText } from 'lucide-react';

// 14. AICitationCard — a source citation for an AI answer: relevance score,
// expandable excerpt, copy the citation, and verify the source.
const CITATIONS = [
  { source: 'DESIGN.md', section: '§3 Token system', excerpt: 'Accent, radius and spacing tokens are generated live from the theme context and read by every component through useJXTheme.', relevance: 94 },
  { source: 'catalog290.ts', section: '§18 Advanced utilities', excerpt: 'The 300 primitives are catalogued across 18 categories; 12 are interactive and 219 remain static mockups.', relevance: 81 },
  { source: 'README.md', section: '§1 Overview', excerpt: 'JXUI is a React 19 component library with 61 showcases and 300 modular primitives, published as @jacxishippingorg/jx-ui-react.', relevance: 76 },
];

export const AICitationCard: React.FC = () => {
  const { palette } = useJXTheme();
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [verified, setVerified] = useState(false);
  const [copied, setCopied] = useState(false);
  const c = CITATIONS[index];

  const copy = async () => {
    try { await navigator.clipboard.writeText(`Source: ${c.source} ${c.section} — “${c.excerpt}”`); } catch { /* clipboard unavailable */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 space-y-2 text-xs">
      <div className="flex items-center gap-2">
        <span className={`w-8 h-8 rounded-lg ${palette.softBg} ${palette.text} flex items-center justify-center shrink-0`}><FileText className="w-4 h-4" /></span>
        <button type="button" onClick={() => setExpanded((e) => !e)} aria-expanded={expanded} className="flex-1 min-w-0 min-h-[36px] text-left cursor-pointer">
          <span className={`block font-semibold truncate ${palette.text}`}>Source: {c.source}</span>
          <span className="block text-[11px] text-slate-400">{c.section}</span>
        </button>
        <button type="button" onClick={() => setIndex((i) => (i + 1) % CITATIONS.length)} aria-label="Next citation" className="min-h-[36px] px-2 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-slate-600 dark:text-slate-300 cursor-pointer">
          {index + 1} / {CITATIONS.length}
        </button>
        <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[11px] text-slate-400 shrink-0">Relevance</span>
        <div className="flex-1 h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div className={`h-full ${palette.bg} transition-all duration-500`} style={{ width: `${c.relevance}%` }} />
        </div>
        <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{c.relevance}%</span>
      </div>
      {expanded && (
        <blockquote className="rounded-lg bg-slate-50 dark:bg-slate-800 p-2.5 text-slate-600 dark:text-slate-300 leading-relaxed border-l-4" style={{ borderColor: palette.hex }}>
          “{c.excerpt}”
        </blockquote>
      )}
      <div className="flex items-center gap-2">
        <button type="button" onClick={() => setExpanded((e) => !e)} aria-expanded={expanded} className="min-h-[36px] inline-flex items-center gap-1 px-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">
          {expanded ? 'Hide excerpt' : 'Read excerpt'}
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
        <button type="button" onClick={() => setVerified((v) => !v)} aria-pressed={verified} className={`min-h-[36px] inline-flex items-center gap-1 px-2.5 rounded-lg font-semibold cursor-pointer ${verified ? 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'}`}>
          <ShieldCheck className="w-3.5 h-3.5" /> {verified ? 'Verified' : 'Verify source'}
        </button>
        <button type="button" onClick={copy} className="min-h-[36px] inline-flex items-center gap-1 px-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />} {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
};
