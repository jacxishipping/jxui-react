// @jxui/react v3.0.0 — MarkdownEditor (JXUI v3.0 Unified Component Suite)
import React, { useState, useMemo } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 5. MarkdownEditor — write markdown and watch it render live. Edit, preview
// or split modes, with word count and a toolbar that inserts markup.
const DEFAULT_MD = `# Heading 1

JXUI ships **361 components** across *18 categories*.

- Zero layout shift
- Tactile feedback
- Glass surfaces

> Design is how it works.`;

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.endsWith('*')) return <em key={i}>{part.slice(1, -1)}</em>;
    if (part.startsWith('`') && part.endsWith('`')) return <code key={i} className="px-1 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[11px]">{part.slice(1, -1)}</code>;
    return <span key={i}>{part}</span>;
  });
}

function renderMarkdown(md: string): React.ReactNode {
  const lines = md.split('\n');
  const out: React.ReactNode[] = [];
  let list: string[] = [];
  const flushList = () => {
    if (list.length) {
      out.push(<ul key={`ul-${out.length}`} className="list-disc pl-5 space-y-0.5">{list.map((item, i) => <li key={i}>{renderInline(item)}</li>)}</ul>);
      list = [];
    }
  };
  lines.forEach((line, i) => {
    if (line.startsWith('### ')) { flushList(); out.push(<h3 key={i} className="text-sm font-bold">{renderInline(line.slice(4))}</h3>); }
    else if (line.startsWith('## ')) { flushList(); out.push(<h2 key={i} className="text-base font-bold">{renderInline(line.slice(3))}</h2>); }
    else if (line.startsWith('# ')) { flushList(); out.push(<h1 key={i} className="text-lg font-extrabold">{renderInline(line.slice(2))}</h1>); }
    else if (line.startsWith('> ')) { flushList(); out.push(<blockquote key={i} className="border-l-4 border-slate-300 dark:border-slate-600 pl-3 italic text-slate-500">{renderInline(line.slice(2))}</blockquote>); }
    else if (line.startsWith('- ')) { list.push(line.slice(2)); }
    else if (line.trim() === '') { flushList(); }
    else { flushList(); out.push(<p key={i}>{renderInline(line)}</p>); }
  });
  flushList();
  return out;
}

export const MarkdownEditor: React.FC = () => {
  const { palette } = useJXTheme();
  const [md, setMd] = useState(DEFAULT_MD);
  const [mode, setMode] = useState<'edit' | 'preview' | 'split'>('split');
  const words = useMemo(() => md.split(/\s+/).filter(Boolean).length, [md]);

  const insert = (snippet: string) => setMd((m) => `${m}\n${snippet}`);

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden text-xs">
      <div className="flex flex-wrap items-center gap-1 px-2 py-2 border-b border-slate-200 dark:border-slate-800">
        <button type="button" onClick={() => insert('# Heading')} className="min-h-[36px] px-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-200 cursor-pointer">H1</button>
        <button type="button" onClick={() => insert('**bold**')} className="min-h-[36px] px-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-200 cursor-pointer">B</button>
        <button type="button" onClick={() => insert('*italic*')} className="min-h-[36px] px-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 italic text-slate-700 dark:text-slate-200 cursor-pointer">I</button>
        <button type="button" onClick={() => insert('- list item')} className="min-h-[36px] px-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer">• List</button>
        <button type="button" onClick={() => insert('> quote')} className="min-h-[36px] px-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer">Quote</button>
        <div className="ml-auto flex gap-1" role="tablist" aria-label="Editor mode">
          {(['edit', 'preview', 'split'] as const).map((m) => (
            <button key={m} type="button" role="tab" aria-selected={mode === m} onClick={() => setMode(m)} className={`min-h-[36px] px-2.5 rounded-lg capitalize font-semibold cursor-pointer ${mode === m ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
              {m}
            </button>
          ))}
        </div>
      </div>
      <div className={mode === 'split' ? 'grid grid-cols-2' : ''}>
        {mode !== 'preview' && (
          <textarea
            value={md}
            onChange={(e) => setMd(e.target.value)}
            aria-label="Markdown source"
            rows={9}
            spellCheck={false}
            className="w-full p-3 bg-transparent font-mono text-xs leading-5 text-slate-800 dark:text-slate-200 resize-none"
          />
        )}
        {mode !== 'edit' && (
          <div className={`p-3 space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed overflow-y-auto max-h-56 ${mode === 'split' ? 'border-l border-slate-200 dark:border-slate-800' : ''}`}>
            {renderMarkdown(md)}
          </div>
        )}
      </div>
      <div className="px-3 py-1.5 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-400">
        {words} words · {md.length} characters
      </div>
    </div>
  );
};
