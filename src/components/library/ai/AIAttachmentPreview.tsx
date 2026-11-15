// @jxui/react v3.0.0 — AIAttachmentPreview (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { FileText, FileCode, Image, X, Plus, Download } from 'lucide-react';

// 13. AIAttachmentPreview — attachments for an AI chat: image, document and
// code files with previews. Click one to expand it, remove it, or add a
// simulated file. The total size updates live.
interface Attachment { id: number; name: string; size: string; kind: 'image' | 'doc' | 'code'; detail: string; }
const INITIAL: Attachment[] = [
  { id: 1, name: 'architecture.png', size: '142 KB', kind: 'image', detail: '1280 × 720 · system diagram' },
  { id: 2, name: 'DESIGN.md', size: '18 KB', kind: 'doc', detail: '12 sections · design tokens' },
  { id: 3, name: 'JXButton.tsx', size: '9 KB', kind: 'code', detail: '184 lines · TypeScript' },
];
const EXTRA: Attachment[] = [
  { id: 4, name: 'screenshot.png', size: '96 KB', kind: 'image', detail: '1366 × 900 · workbench' },
  { id: 5, name: 'audit.md', size: '11 KB', kind: 'doc', detail: 'UI/UX audit findings' },
];

export const AIAttachmentPreview: React.FC = () => {
  const { palette } = useJXTheme();
  const [items, setItems] = useState<Attachment[]>(INITIAL);
  const [expanded, setExpanded] = useState<number | null>(1);
  const [extraIdx, setExtraIdx] = useState(0);

  const totalKb = items.reduce((s, it) => s + parseInt(it.size, 10), 0);
  const iconFor = (kind: Attachment['kind']) =>
    kind === 'image' ? <Image className="w-4 h-4 text-sky-500" /> : kind === 'code' ? <FileCode className="w-4 h-4 text-emerald-500" /> : <FileText className="w-4 h-4 text-amber-500" />;

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 space-y-1.5 text-xs">
      <div className="flex items-center justify-between px-1">
        <span className="font-bold text-slate-800 dark:text-slate-200">Attachments · {items.length} · {totalKb} KB total</span>
        <button
          type="button"
          onClick={() => { const next = EXTRA[extraIdx % EXTRA.length]; if (!items.some((i) => i.id === next.id)) setItems((xs) => [...xs, next]); setExtraIdx((i) => i + 1); }}
          className={`min-h-[36px] px-2.5 inline-flex items-center gap-1 rounded-lg font-semibold text-white cursor-pointer ${palette.bg}`}
        >
          <Plus className="w-3.5 h-3.5" /> Add file
        </button>
      </div>
      {items.map((item) => (
        <div key={item.id} className="rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="flex items-center gap-2 px-2 py-1.5">
            {item.kind === 'image' ? (
              <span className="w-9 h-9 shrink-0 rounded bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500 flex items-center justify-center text-white font-bold text-[10px]">IMG</span>
            ) : (
              <span className="w-9 h-9 shrink-0 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center">{iconFor(item.kind)}</span>
            )}
            <button type="button" onClick={() => setExpanded((e) => (e === item.id ? null : item.id))} aria-expanded={expanded === item.id} className="flex-1 min-w-0 min-h-[36px] text-left cursor-pointer">
              <span className="block font-semibold text-slate-800 dark:text-slate-200 truncate">{item.name}</span>
              <span className="block text-[11px] text-slate-400">{item.size} · {item.detail}</span>
            </button>
            <button type="button" onClick={() => {}} aria-label={`Download ${item.name}`} className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"><Download className="w-4 h-4" /></button>
            <button type="button" onClick={() => setItems((xs) => xs.filter((x) => x.id !== item.id))} aria-label={`Remove ${item.name}`} className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded text-slate-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 hover:text-rose-500 cursor-pointer"><X className="w-4 h-4" /></button>
          </div>
          {expanded === item.id && (
            <div className="px-2 pb-2">
              {item.kind === 'image' ? (
                <div className="h-20 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500 flex items-center justify-center text-white font-mono text-[11px]">{item.name} · preview</div>
              ) : item.kind === 'code' ? (
                <pre className="p-2 rounded-lg bg-slate-950 text-emerald-300 font-mono text-[11px] overflow-x-auto">{`export const JXButton = () => {\n  return <button>Deploy Build</button>;\n};`}</pre>
              ) : (
                <p className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 leading-relaxed"># Design tokens{'\n'}Accent, radius and spacing tokens are generated live from the theme.</p>
              )}
            </div>
          )}
        </div>
      ))}
      {items.length === 0 && <p className="text-center text-slate-400 py-3">No attachments. Add a file to include it in the AI context.</p>}
    </div>
  );
};
