// @jxui/react v3.0.0 — AIComposer (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Paperclip, Send, X, Sparkles, Check } from 'lucide-react';

// 3. AIComposer — the message composer: type a prompt, attach files, pick a
// suggestion chip, and send. Sending shows a confirmation and clears the box.
const SUGGESTIONS = [
  'Summarise the audit findings',
  'Which components are still mockups?',
  'Explain the theme token system',
];
const MAX_CHARS = 500;

export const AIComposer: React.FC = () => {
  const { palette } = useJXTheme();
  const [text, setText] = useState('');
  const [attachments, setAttachments] = useState<string[]>([]);
  const [sent, setSent] = useState<string | null>(null);
  const [attachOpen, setAttachOpen] = useState(false);

  const send = () => {
    const t = text.trim();
    if (!t) return;
    setSent(t);
    setText('');
    setAttachments([]);
    setTimeout(() => setSent((s) => (s === t ? null : s)), 2500);
  };
  const addAttachment = (name: string) => {
    if (!attachments.includes(name)) setAttachments((a) => [...a, name]);
    setAttachOpen(false);
  };

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2.5 space-y-2 text-xs">
      {attachments.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {attachments.map((a) => (
            <span key={a} className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium">
              <Paperclip className="w-3 h-3" /> {a}
              <button type="button" onClick={() => setAttachments((xs) => xs.filter((x) => x !== a))} aria-label={`Remove attachment ${a}`} className="min-h-[24px] min-w-[24px] flex items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"><X className="w-3 h-3" /></button>
            </span>
          ))}
        </div>
      )}
      <div className="flex items-start gap-2">
        <div className="relative">
          <button type="button" onClick={() => setAttachOpen((o) => !o)} aria-label="Attach a file" aria-expanded={attachOpen} className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
            <Paperclip className="w-4 h-4" />
          </button>
          {attachOpen && (
            <div className="absolute bottom-full mb-1 left-0 w-44 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl p-1 z-10">
              {['architecture.png', 'DESIGN.md', 'audit.md'].map((f) => (
                <button key={f} type="button" onClick={() => addAttachment(f)} className="w-full min-h-[36px] px-2 text-left rounded-lg font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">{f}</button>
              ))}
            </div>
          )}
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, MAX_CHARS))}
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
          placeholder="Ask AI anything…"
          aria-label="Ask AI anything"
          rows={2}
          className="flex-1 min-w-0 min-h-[44px] px-2 py-2.5 bg-transparent text-slate-800 dark:text-slate-200 resize-none"
        />
        <button type="button" onClick={send} disabled={!text.trim()} aria-label="Send message" className={`min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-white cursor-pointer disabled:opacity-40 ${palette.bg}`}>
          <Send className="w-4 h-4" />
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-1">
        <Sparkles className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        {SUGGESTIONS.map((s) => (
          <button key={s} type="button" onClick={() => setText(s)} className="min-h-[36px] px-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700">
            {s}
          </button>
        ))}
        <span className="ml-auto font-mono text-[11px] text-slate-400">{text.length}/{MAX_CHARS}</span>
      </div>
      {sent && (
        <div className="flex items-center gap-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-2 font-semibold text-emerald-700 dark:text-emerald-300">
          <Check className="w-4 h-4" /> Sent: “{sent.length > 60 ? `${sent.slice(0, 60)}…` : sent}”
        </div>
      )}
    </div>
  );
};
