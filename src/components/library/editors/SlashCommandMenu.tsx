// @jxui/react v3.0.0 — SlashCommandMenu (JXUI v3.0 Unified Component Suite)
import React, { useState, useMemo, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Heading1, List, Code, Quote, Minus, Table, Check } from 'lucide-react';

// 3. SlashCommandMenu — type "/" in the editor to open the command menu,
// filter with more typing, navigate with arrow keys, Enter or click to
// insert the block into the document below.
interface Command { id: string; label: string; hint: string; icon: React.ReactNode; insert: string; }
const COMMANDS: Command[] = [
  { id: 'h1', label: 'Heading 1', hint: 'Large section heading', icon: <Heading1 className="w-4 h-4" />, insert: '# New heading' },
  { id: 'bullet', label: 'Bullet list', hint: 'Simple bulleted list', icon: <List className="w-4 h-4" />, insert: '- First item\n- Second item' },
  { id: 'code', label: 'Code snippet', hint: 'Code block with syntax', icon: <Code className="w-4 h-4" />, insert: '```ts\nconst x = 1;\n```' },
  { id: 'quote', label: 'Quote', hint: 'Callout quote block', icon: <Quote className="w-4 h-4" />, insert: '> Design is how it works.' },
  { id: 'divider', label: 'Divider', hint: 'Horizontal rule', icon: <Minus className="w-4 h-4" />, insert: '---' },
  { id: 'table', label: 'Table', hint: '2 x 2 data table', icon: <Table className="w-4 h-4" />, insert: '| A | B |\n|---|---|\n| 1 | 2 |' },
];

export const SlashCommandMenu: React.FC = () => {
  const { palette } = useJXTheme();
  const [value, setValue] = useState('');
  const [doc, setDoc] = useState<string[]>(['# Design specification', '', 'Type / below to insert a block.']);
  const [highlight, setHighlight] = useState(0);
  const [justInserted, setJustInserted] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const query = useMemo(() => {
    const m = /(?:^|\s)\/(\w*)$/.exec(value);
    return m ? m[1].toLowerCase() : null;
  }, [value]);
  const open = query !== null;
  const filtered = useMemo(() => {
    if (query === null) return [];
    return COMMANDS.filter((c) => c.label.toLowerCase().includes(query) || c.id.includes(query));
  }, [query]);

  const insert = (cmd: Command) => {
    setDoc((d) => [...d, cmd.insert]);
    setValue('');
    setHighlight(0);
    setJustInserted(cmd.label);
    setTimeout(() => setJustInserted((j) => (j === cmd.label ? null : j)), 1500);
    inputRef.current?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open || filtered.length === 0) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setHighlight((h) => (h + 1) % filtered.length); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setHighlight((h) => (h - 1 + filtered.length) % filtered.length); }
    if (e.key === 'Enter') { e.preventDefault(); insert(filtered[highlight]); }
    if (e.key === 'Escape') { setValue(''); }
  };

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-3 font-mono text-xs text-slate-700 dark:text-slate-300 whitespace-pre-wrap min-h-[72px]">
        {doc.join('\n')}
      </div>
      <div className="relative">
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => { setValue(e.target.value); setHighlight(0); }}
          onKeyDown={onKeyDown}
          placeholder="Type / for commands…"
          aria-label="Editor input, type slash for commands"
          aria-expanded={open}
          className="w-full min-h-[44px] px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200"
        />
        {open && (
          <div className="absolute z-10 bottom-full mb-1 left-0 w-64 p-1 border rounded-xl shadow-xl bg-white dark:bg-slate-900 text-xs flex flex-col gap-0.5" role="listbox" aria-label="Slash commands">
            <div className="px-2 py-1 font-bold text-slate-400 text-[10px]">BASIC BLOCKS</div>
            {filtered.map((cmd, i) => (
              <button
                key={cmd.id}
                type="button"
                role="option"
                aria-selected={i === highlight}
                onMouseEnter={() => setHighlight(i)}
                onClick={() => insert(cmd)}
                className={`min-h-[36px] px-2 py-1.5 rounded-lg flex items-center gap-2 text-left cursor-pointer ${i === highlight ? `${palette.softBg} ${palette.text}` : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              >
                <span className="shrink-0">{cmd.icon}</span>
                <span className="font-semibold">/{cmd.id}</span>
                <span className="text-slate-400 truncate">{cmd.hint}</span>
              </button>
            ))}
            {filtered.length === 0 && <div className="px-2 py-2 text-slate-400">No command matches “/{query}”.</div>}
          </div>
        )}
      </div>
      <p className="text-[11px] text-slate-400 flex items-center gap-1">
        {justInserted ? (<><Check className="w-3.5 h-3.5 text-emerald-500" /> Inserted {justInserted} into the document.</>) : '↑ ↓ to navigate · Enter to insert · Esc to close.'}
      </p>
    </div>
  );
};
