// @jxui/react v3.0.0 — AIContextPanel (JXUI v3.0 Unified Component Suite)
import React, { useState, useMemo } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Search, FileText, FileCode, Image, Trash2 } from 'lucide-react';

// 11. AIContextPanel — the AI's context window: a token-usage bar and the
// files in context. Toggle a file out (or remove it) and the token count
// drops live; search filters the list.
interface CtxItem { id: number; name: string; kind: 'doc' | 'code' | 'image'; tokens: number; included: boolean; }
const INITIAL: CtxItem[] = [
  { id: 1, name: 'DESIGN.md', kind: 'doc', tokens: 4200, included: true },
  { id: 2, name: 'catalog290.ts', kind: 'code', tokens: 6100, included: true },
  { id: 3, name: 'JXButton.tsx', kind: 'code', tokens: 1800, included: true },
  { id: 4, name: 'architecture.png', kind: 'image', tokens: 3400, included: true },
  { id: 5, name: 'README.md', kind: 'doc', tokens: 2900, included: false },
];
const LIMIT = 200000;

export const AIContextPanel: React.FC = () => {
  const { palette } = useJXTheme();
  const [items, setItems] = useState<CtxItem[]>(INITIAL);
  const [query, setQuery] = useState('');
  const used = items.filter((i) => i.included).reduce((s, i) => s + i.tokens, 0);
  const pct = Math.round((used / LIMIT) * 100);
  const shown = useMemo(() => items.filter((i) => i.name.toLowerCase().includes(query.trim().toLowerCase())), [items, query]);
  const iconFor = (kind: CtxItem['kind']) =>
    kind === 'code' ? <FileCode className="w-4 h-4 text-emerald-500" /> : kind === 'image' ? <Image className="w-4 h-4 text-sky-500" /> : <FileText className="w-4 h-4 text-amber-500" />;

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 space-y-2.5 text-xs">
      <div className="flex items-center justify-between">
        <span className="font-bold text-slate-800 dark:text-slate-200">Context window</span>
        <span className="font-mono font-semibold text-slate-600 dark:text-slate-300">{(used / 1000).toFixed(1)}k / {LIMIT / 1000}k tokens · {pct}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Context usage">
        <div className={`h-full ${palette.bg} transition-all duration-500`} style={{ width: `${Math.max(2, pct)}%` }} />
      </div>
      <div className="relative">
        <Search className="w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Filter context files…" aria-label="Filter context files" className="w-full min-h-[36px] pl-9 pr-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-800 dark:text-slate-200" />
      </div>
      <div className="space-y-1">
        {shown.map((item) => (
          <div key={item.id} className={`flex items-center gap-2 rounded-lg border px-2 py-1.5 ${item.included ? 'border-slate-200 dark:border-slate-800' : 'border-dashed border-slate-200 dark:border-slate-800 opacity-60'}`}>
            {iconFor(item.kind)}
            <span className="flex-1 min-w-0 font-mono font-medium text-slate-800 dark:text-slate-200 truncate">{item.name}</span>
            <span className="font-mono text-[11px] text-slate-400">{(item.tokens / 1000).toFixed(1)}k</span>
            <button
              type="button"
              role="switch"
              aria-checked={item.included}
              aria-label={`Include ${item.name} in context`}
              onClick={() => setItems((xs) => xs.map((x) => (x.id === item.id ? { ...x, included: !x.included } : x)))}
              className={`relative min-h-[36px] w-11 rounded-full cursor-pointer transition-colors ${item.included ? palette.bg : 'bg-slate-200 dark:bg-slate-700'}`}
            >
              <span className={`absolute top-1 h-[28px] w-[28px] rounded-full bg-white shadow transition-all ${item.included ? 'left-[14px]' : 'left-1'}`} />
            </button>
            <button type="button" onClick={() => setItems((xs) => xs.filter((x) => x.id !== item.id))} aria-label={`Remove ${item.name} from context`} className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 cursor-pointer"><Trash2 className="w-4 h-4" /></button>
          </div>
        ))}
        {shown.length === 0 && <p className="text-center text-slate-400 py-2">No context files match “{query}”.</p>}
      </div>
    </div>
  );
};
