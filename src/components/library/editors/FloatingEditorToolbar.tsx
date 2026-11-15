// @jxui/react v3.0.0 — FloatingEditorToolbar (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Bold, Italic, Underline, Code, Strikethrough, Link2 } from 'lucide-react';

// 2. FloatingEditorToolbar — select text in the editor and the floating
// toolbar wraps the selection: bold, italic, underline, strikethrough,
// inline code, or a link. A live preview renders the markup.
const SAMPLE = 'Select some of this text, then use the toolbar above to format it. JXUI makes editing tactile.';

function wrap(text: string, start: number, end: number, before: string, after: string): string {
  if (start === end) return text;
  return text.slice(0, start) + before + text.slice(start, end) + after + text.slice(end);
}
function renderPreview(text: string): React.ReactNode {
  // Minimal inline-markdown renderer for **bold**, *italic*, `code`, [link](url).
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.endsWith('*')) return <em key={i}>{part.slice(1, -1)}</em>;
    if (part.startsWith('`') && part.endsWith('`')) return <code key={i} className="px-1 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[11px]">{part.slice(1, -1)}</code>;
    const m = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (m) return <a key={i} href={m[2]} className="underline" onClick={(e) => e.preventDefault()}>{m[1]}</a>;
    return <span key={i}>{part}</span>;
  });
}

export const FloatingEditorToolbar: React.FC = () => {
  const { palette } = useJXTheme();
  const [text, setText] = useState(SAMPLE);
  const [showPreview, setShowPreview] = useState(true);
  const areaRef = useRef<HTMLTextAreaElement>(null);

  const apply = (before: string, after: string) => {
    const el = areaRef.current;
    if (!el) return;
    const { selectionStart: s, selectionEnd: e } = el;
    if (s === e) return;
    setText((t) => wrap(t, s, e, before, after));
    setTimeout(() => {
      el.focus();
      el.setSelectionRange(s + before.length, e + before.length);
    }, 0);
  };

  const tools: { label: string; icon: React.ReactNode; run: () => void }[] = [
    { label: 'Bold', icon: <Bold className="w-4 h-4" />, run: () => apply('**', '**') },
    { label: 'Italic', icon: <Italic className="w-4 h-4" />, run: () => apply('*', '*') },
    { label: 'Underline', icon: <Underline className="w-4 h-4" />, run: () => apply('<u>', '</u>') },
    { label: 'Strikethrough', icon: <Strikethrough className="w-4 h-4" />, run: () => apply('~~', '~~') },
    { label: 'Inline code', icon: <Code className="w-4 h-4" />, run: () => apply('`', '`') },
    { label: 'Link', icon: <Link2 className="w-4 h-4" />, run: () => apply('[', '](https://example.com)') },
  ];

  return (
    <div className="w-full space-y-2 text-xs">
      <div className={`inline-flex items-center gap-0.5 p-1 rounded-xl shadow-xl text-white ${palette.bg}`}>
        {tools.map((t) => (
          <button key={t.label} type="button" onClick={t.run} aria-label={t.label} title={t.label} className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg hover:bg-white/20 cursor-pointer">
            {t.icon}
          </button>
        ))}
      </div>
      <textarea
        ref={areaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="Editable text"
        rows={3}
        className="w-full min-h-[72px] p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 leading-relaxed"
      />
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-slate-400">{text.length} characters · {text.split(/\s+/).filter(Boolean).length} words</span>
        <button type="button" onClick={() => setShowPreview((s) => !s)} aria-pressed={showPreview} className="min-h-[36px] px-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">
          {showPreview ? 'Hide preview' : 'Show preview'}
        </button>
      </div>
      {showPreview && (
        <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 leading-relaxed">
          {renderPreview(text)}
        </div>
      )}
    </div>
  );
};
