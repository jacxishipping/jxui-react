// @jxui/react v3.0.0 — AIModelSelector (JXUI v3.0 Unified Component Suite)
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { ChevronDown, Check, Search, Zap, Brain, Gauge } from 'lucide-react';

// 12. AIModelSelector — pick the AI model: a dropdown with provider, context
// window, speed and cost per model, plus search. Selection updates the
// trigger and closes the menu (Escape also closes it).
interface Model { id: string; name: string; provider: string; context: string; speed: 'Fast' | 'Balanced' | 'Deep'; cost: string; }
const MODELS: Model[] = [
  { id: 'flash', name: 'Gemini 2.5 Flash', provider: 'Google', context: '1M tokens', speed: 'Fast', cost: '$0.10 / 1M' },
  { id: 'pro', name: 'Gemini 2.5 Pro', provider: 'Google', context: '1M tokens', speed: 'Deep', cost: '$1.25 / 1M' },
  { id: 'sonnet', name: 'Claude 3.7 Sonnet', provider: 'Anthropic', context: '200k tokens', speed: 'Balanced', cost: '$3.00 / 1M' },
  { id: 'haiku', name: 'Claude 3.5 Haiku', provider: 'Anthropic', context: '200k tokens', speed: 'Fast', cost: '$0.80 / 1M' },
  { id: 'gpt', name: 'GPT-4.1', provider: 'OpenAI', context: '1M tokens', speed: 'Balanced', cost: '$2.00 / 1M' },
];
const SPEED_ICON: Record<Model['speed'], React.ReactNode> = {
  Fast: <Zap className="w-3.5 h-3.5 text-amber-500" />,
  Balanced: <Gauge className="w-3.5 h-3.5 text-sky-500" />,
  Deep: <Brain className="w-3.5 h-3.5 text-violet-500" />,
};

export const AIModelSelector: React.FC = () => {
  const { palette } = useJXTheme();
  const [selected, setSelected] = useState(MODELS[0]);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? MODELS.filter((m) => `${m.name} ${m.provider}`.toLowerCase().includes(q)) : MODELS;
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    const onClick = (e: MouseEvent) => { if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onClick); };
  }, [open ]);

  return (
    <div ref={menuRef} className="relative w-full max-w-xs text-xs">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="w-full min-h-[44px] px-3 flex items-center gap-2 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 cursor-pointer"
      >
        <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${palette.bg}`} />
        <span className="flex-1 min-w-0 text-left">
          <span className="block font-bold truncate">{selected.name}</span>
          <span className="block text-[11px] text-slate-400">{selected.provider} · {selected.context}</span>
        </span>
        <ChevronDown className={`w-4 h-4 shrink-0 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute z-10 mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl overflow-hidden" role="listbox" aria-label="AI models">
          <div className="relative border-b border-slate-200 dark:border-slate-800">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search models…" aria-label="Search models" className="w-full min-h-[36px] pl-9 pr-2 bg-transparent text-slate-800 dark:text-slate-200" />
          </div>
          {shown.map((m) => (
            <button
              key={m.id}
              type="button"
              role="option"
              aria-selected={selected.id === m.id}
              onClick={() => { setSelected(m); setOpen(false); setQuery(''); }}
              className={`w-full min-h-[44px] px-3 py-1.5 flex items-center gap-2 text-left cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 ${selected.id === m.id ? palette.softBg : ''}`}
            >
              <span className="flex-1 min-w-0">
                <span className="block font-semibold text-slate-800 dark:text-slate-200 truncate">{m.name}</span>
                <span className="block text-[11px] text-slate-400">{m.provider} · {m.context} · {m.cost}</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 shrink-0">{SPEED_ICON[m.speed]}{m.speed}</span>
              {selected.id === m.id && <Check className={`w-4 h-4 shrink-0 ${palette.text}`} />}
            </button>
          ))}
          {shown.length === 0 && <p className="px-3 py-2 text-slate-400">No model matches “{query}”.</p>}
        </div>
      )}
    </div>
  );
};
