// @jxui/react v3.0.0 — EmojiPicker (JXUI v3.0 Unified Component Suite)
import React, { useState, useMemo } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Search, Check } from 'lucide-react';

// 14. EmojiPicker — search and pick an emoji by category. The selected emoji
// is shown large, and recently picked emojis are kept at the top.
const CATEGORIES: { id: string; label: string; emojis: { e: string; name: string }[] }[] = [
  { id: 'smileys', label: 'Smileys', emojis: [
    { e: '😀', name: 'grinning' }, { e: '😂', name: 'joy' }, { e: '😍', name: 'heart eyes' }, { e: '🤔', name: 'thinking' },
    { e: '😎', name: 'cool' }, { e: '🥳', name: 'party' }, { e: '😴', name: 'sleepy' }, { e: '🤯', name: 'mind blown' },
  ]},
  { id: 'animals', label: 'Animals', emojis: [
    { e: '🐶', name: 'dog' }, { e: '🦊', name: 'fox' }, { e: '🦁', name: 'lion' }, { e: '🐼', name: 'panda' },
    { e: '🦄', name: 'unicorn' }, { e: '🐸', name: 'frog' }, { e: '🦋', name: 'butterfly' }, { e: '🐝', name: 'bee' },
  ]},
  { id: 'food', label: 'Food', emojis: [
    { e: '🍕', name: 'pizza' }, { e: '🍔', name: 'burger' }, { e: '🍩', name: 'donut' }, { e: '☕', name: 'coffee' },
    { e: '🍓', name: 'strawberry' }, { e: '🥑', name: 'avocado' }, { e: '🍦', name: 'ice cream' }, { e: '🧁', name: 'cupcake' },
  ]},
  { id: 'objects', label: 'Objects', emojis: [
    { e: '🚀', name: 'rocket' }, { e: '✨', name: 'sparkles' }, { e: '🔥', name: 'fire' }, { e: '💎', name: 'gem' },
    { e: '⚡', name: 'bolt' }, { e: '🎨', name: 'palette' }, { e: '📦', name: 'package' }, { e: '🔑', name: 'key' },
  ]},
];

export const EmojiPicker: React.FC = () => {
  const { palette } = useJXTheme();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('smileys');
  const [selected, setSelected] = useState<{ e: string; name: string } | null>(null);
  const [recent, setRecent] = useState<string[]>([]);

  const shown = useMemo(() => {
    const all = CATEGORIES.flatMap((c) => c.emojis);
    const q = query.trim().toLowerCase();
    if (q) return all.filter((x) => x.name.includes(q) || x.e.includes(q));
    return CATEGORIES.find((c) => c.id === category)?.emojis ?? [];
  }, [query, category]);

  const pick = (item: { e: string; name: string }) => {
    setSelected(item);
    setRecent((r) => [item.e, ...r.filter((x) => x !== item.e)].slice(0, 6));
  };

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 space-y-2.5 text-xs">
      <div className="flex items-center gap-2">
        <div className="relative flex-1 min-w-0">
          <Search className="w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search emoji…"
            aria-label="Search emoji"
            className="w-full min-h-[36px] pl-9 pr-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-800 dark:text-slate-200"
          />
        </div>
        <div className={`min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-2xl ${palette.softBg}`} aria-label="Selected emoji">
          {selected ? selected.e : '😀'}
        </div>
      </div>
      {!query && (
        <div className="flex flex-wrap gap-1">
          {CATEGORIES.map((c) => (
            <button key={c.id} type="button" onClick={() => setCategory(c.id)} aria-pressed={category === c.id} className={`min-h-[36px] px-2.5 rounded-lg font-semibold cursor-pointer ${category === c.id ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
              {c.label}
            </button>
          ))}
        </div>
      )}
      {recent.length > 0 && !query && (
        <div className="flex items-center gap-1">
          <span className="text-[11px] text-slate-400 mr-1">Recent:</span>
          {recent.map((e) => (
            <button key={e} type="button" onClick={() => pick({ e, name: e })} aria-label={`Pick ${e}`} className="min-h-[36px] min-w-[36px] text-lg rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">{e}</button>
          ))}
        </div>
      )}
      <div className="grid grid-cols-8 gap-1">
        {shown.map((item) => (
          <button
            key={item.e}
            type="button"
            onClick={() => pick(item)}
            aria-label={`Pick ${item.name} ${item.e}`}
            title={item.name}
            className={`min-h-[44px] min-w-[44px] text-xl rounded-lg cursor-pointer flex items-center justify-center ${selected?.e === item.e ? `ring-2 ${palette.border} ${palette.softBg}` : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            {item.e}
          </button>
        ))}
        {shown.length === 0 && <p className="col-span-8 text-center text-slate-400 py-2">No emoji matches “{query}”.</p>}
      </div>
      <p className="text-[11px] text-slate-400 flex items-center gap-1">
        {selected ? (<><Check className="w-3.5 h-3.5 text-emerald-500" /> Selected: {selected.e} :{selected.name}:</>) : 'Pick an emoji to insert it.'}
      </p>
    </div>
  );
};
