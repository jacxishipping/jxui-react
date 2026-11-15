// @jxui/react v3.0.0 — AIChatPanel (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Bot, Send, Trash2, Sparkles } from 'lucide-react';

// 1. AIChatPanel — a working chat panel: send a message and the agent
// replies with a streaming-style reveal (simulated, no AI calls). Clear the
// chat, and see the typing indicator while the reply streams in.
interface Msg { role: 'user' | 'agent'; text: string; }
const REPLIES = [
  'I analyzed the 18 design categories and synthesized all 300 modular components. The data-viz set is the most complete; the tables set still has 13 static previews.',
  'The accent token is --jx-accent. Changing it in the theme studio repaints the hero, buttons and charts because they read the live palette.',
  'Here is a summary: 61 showcases are real, 12 primitives are now interactive, and 219 mockups remain. Want me to prioritise the tables category next?',
];

export const AIChatPanel: React.FC = () => {
  const { palette } = useJXTheme();
  const [messages, setMessages] = useState<Msg[]>([
    { role: 'agent', text: 'How can I assist your workflow today?' },
  ]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [replyCount, setReplyCount] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, streaming]);

  useEffect(() => () => { if (timerRef.current) window.clearInterval(timerRef.current); }, []);

  const send = () => {
    const text = input.trim();
    if (!text || streaming) return;
    setMessages((ms) => [...ms, { role: 'user', text }]);
    setInput('');
    const reply = REPLIES[replyCount % REPLIES.length];
    setReplyCount((c) => c + 1);
    setStreaming(true);
    setMessages((ms) => [...ms, { role: 'agent', text: '' }]);
    const words = reply.split(' ');
    let i = 0;
    const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setMessages((ms) => { const next = [...ms]; next[next.length - 1] = { role: 'agent', text: reply }; return next; });
      setStreaming(false);
      return;
    }
    timerRef.current = window.setInterval(() => {
      i += 2;
      const partial = words.slice(0, i).join(' ');
      setMessages((ms) => { const next = [...ms]; next[next.length - 1] = { role: 'agent', text: partial }; return next; });
      if (i >= words.length) {
        if (timerRef.current) window.clearInterval(timerRef.current);
        setStreaming(false);
      }
    }, 60);
  };

  return (
    <div className="w-full max-w-sm border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col gap-2 bg-white dark:bg-slate-900 shadow-xl text-xs overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-200 dark:border-slate-800">
        <span className={`w-7 h-7 rounded-full ${palette.bg} text-white flex items-center justify-center shrink-0`}><Bot className="w-4 h-4" /></span>
        <span className="font-bold text-slate-900 dark:text-white">Antigravity AI Agent</span>
        <span className="ml-auto inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Online</span>
        <button type="button" onClick={() => setMessages([{ role: 'agent', text: 'How can I assist your workflow today?' }])} aria-label="Clear chat" className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"><Trash2 className="w-4 h-4" /></button>
      </div>
      <div ref={scrollRef} className="px-3 space-y-2 max-h-56 overflow-y-auto" aria-live="polite">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-2.5 py-2 rounded-xl leading-relaxed ${m.role === 'user' ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'}`}>
              {m.text}
              {streaming && i === messages.length - 1 && m.role === 'agent' && <span className="inline-block w-1.5 h-3.5 ml-1 align-middle animate-pulse" style={{ backgroundColor: palette.hex }} />}
            </div>
          </div>
        ))}
        {streaming && messages[messages.length - 1]?.text === '' && (
          <div className="flex items-center gap-1.5 text-slate-400"><Sparkles className="w-3.5 h-3.5 animate-pulse" /> Agent is typing…</div>
        )}
      </div>
      <div className="flex items-center gap-2 px-3 pb-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') send(); }}
          placeholder="Ask AI anything…"
          aria-label="Message the AI agent"
          className="flex-1 min-w-0 min-h-[44px] px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent text-slate-800 dark:text-slate-200"
        />
        <button type="button" onClick={send} disabled={!input.trim() || streaming} aria-label="Send message" className={`min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-white cursor-pointer disabled:opacity-40 ${palette.bg}`}>
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
