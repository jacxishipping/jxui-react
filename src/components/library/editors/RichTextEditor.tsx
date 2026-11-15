// @jxui/react v3.0.0 — RichTextEditor (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Bold, Italic, Underline, Strikethrough, Code, List, Heading1, Quote, Eraser } from 'lucide-react';

// 1. RichTextEditor — a real rich-text editor: select text and format it with
// the toolbar, or pick a block style. Word count and clear update live.
const INITIAL_HTML = 'Start writing your <b>design specification</b>… select some text and format it with the toolbar.';

export const RichTextEditor: React.FC = () => {
  const { palette } = useJXTheme();
  const [html, setHtml] = useState(INITIAL_HTML);
  const [words, setWords] = useState(12);
  const [active, setActive] = useState<string[]>([]);
  const editorRef = useRef<HTMLDivElement>(null);

  const exec = (cmd: string, value?: string) => {
    editorRef.current?.focus();
    document.execCommand(cmd, false, value);
    sync();
  };
  const sync = () => {
    const el = editorRef.current;
    if (!el) return;
    setHtml(el.innerHTML);
    setWords(el.innerText.split(/\s+/).filter(Boolean).length);
    const cmds: [string, string][] = [['bold', 'Bold'], ['italic', 'Italic'], ['underline', 'Underline'], ['strikeThrough', 'Strikethrough']];
    setActive(cmds.filter(([cmd]) => { try { return document.queryCommandState(cmd); } catch { return false; } }).map(([, label]) => label));
  };
  const applyBlock = (tag: string) => {
    editorRef.current?.focus();
    document.execCommand('formatBlock', false, tag);
    sync();
  };
  const clear = () => {
    if (editorRef.current) editorRef.current.innerHTML = '';
    setHtml('');
    setWords(0);
  };

  const tools: { label: string; icon: React.ReactNode; run: () => void }[] = [
    { label: 'Bold', icon: <Bold className="w-4 h-4" />, run: () => exec('bold') },
    { label: 'Italic', icon: <Italic className="w-4 h-4" />, run: () => exec('italic') },
    { label: 'Underline', icon: <Underline className="w-4 h-4" />, run: () => exec('underline') },
    { label: 'Strikethrough', icon: <Strikethrough className="w-4 h-4" />, run: () => exec('strikeThrough') },
    { label: 'Inline code', icon: <Code className="w-4 h-4" />, run: () => exec('fontName', 'monospace') },
    { label: 'Bullet list', icon: <List className="w-4 h-4" />, run: () => exec('insertUnorderedList') },
    { label: 'Heading', icon: <Heading1 className="w-4 h-4" />, run: () => applyBlock('h2') },
    { label: 'Quote', icon: <Quote className="w-4 h-4" />, run: () => applyBlock('blockquote') },
    { label: 'Clear formatting', icon: <Eraser className="w-4 h-4" />, run: () => exec('removeFormat') },
  ];

  return (
    <div className="w-full border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden text-xs bg-white dark:bg-slate-900">
      <div className="flex flex-wrap items-center gap-0.5 p-1.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800">
        {tools.map((t) => (
          <button
            key={t.label}
            type="button"
            onClick={t.run}
            aria-label={t.label}
            aria-pressed={active.includes(t.label)}
            title={t.label}
            className={`min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg cursor-pointer text-slate-700 dark:text-slate-200 ${active.includes(t.label) ? `${palette.softBg} ${palette.text}` : 'hover:bg-white dark:hover:bg-slate-700'}`}
          >
            {t.icon}
          </button>
        ))}
        <button type="button" onClick={clear} className="ml-auto min-h-[36px] px-2.5 rounded-lg font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 cursor-pointer">Clear</button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={sync}
        onKeyUp={sync}
        onMouseUp={sync}
        aria-label="Rich text editor"
        dangerouslySetInnerHTML={{ __html: html }}
        className="min-h-[96px] p-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
      />
      <div className="px-3 py-1.5 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-400 flex justify-between">
        <span>{words} words</span>
        <span>{active.length ? `Active: ${active.join(', ')}` : 'No formatting active'}</span>
      </div>
    </div>
  );
};
