// @jxui/react v3.0.0 — DiffViewer (JXUI v3.0 Unified Component Suite)
import React, { useState, useMemo } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

// 7. DiffViewer — a real diff: unified vs split view, hide unchanged lines,
// and jump between changes. Lines are computed from two sample versions.
type Line = { type: 'same' | 'del' | 'add'; oldNo: number | null; newNo: number | null; text: string; };
const OLD_LINES = [
  'export const JXButton = () => {',
  '  const lag = 34ms;',
  '  return <button className="px-4 py-2">',
  '    Deploy Build',
  '  </button>;',
  '};',
];
const NEW_LINES = [
  'export const JXButton = () => {',
  '  const zeroShift = true;',
  '  return <button className="px-4 py-2 min-h-[44px]">',
  '    Deploy Build',
  '  </button>;',
  '};',
];

function computeDiff(): Line[] {
  const out: Line[] = [];
  let o = 0, n = 0;
  while (o < OLD_LINES.length || n < NEW_LINES.length) {
    if (OLD_LINES[o] === NEW_LINES[n]) {
      out.push({ type: 'same', oldNo: o + 1, newNo: n + 1, text: OLD_LINES[o] });
      o++; n++;
    } else {
      if (o < OLD_LINES.length) { out.push({ type: 'del', oldNo: o + 1, newNo: null, text: OLD_LINES[o] }); o++; }
      if (n < NEW_LINES.length) { out.push({ type: 'add', oldNo: null, newNo: n + 1, text: NEW_LINES[n] }); n++; }
    }
  }
  return out;
}

export const DiffViewer: React.FC = () => {
  const [split, setSplit] = useState(false);
  const [hideSame, setHideSame] = useState(false);
  const [focusIdx, setFocusIdx] = useState(0);
  const lines = useMemo(computeDiff, []);
  const changes = useMemo(() => lines.map((l, i) => (l.type !== 'same' ? i : -1)).filter((i) => i >= 0), [lines]);
  const visible = lines.filter((l) => !hideSame || l.type !== 'same');
  const adds = lines.filter((l) => l.type === 'add').length;
  const dels = lines.filter((l) => l.type === 'del').length;

  const jump = (dir: 1 | -1) => {
    const next = (focusIdx + dir + changes.length) % changes.length;
    setFocusIdx(next);
    const el = document.getElementById(`diff-line-${changes[next]}`);
    el?.scrollIntoView({ block: 'nearest' });
  };

  const rowClass = (type: Line['type']) =>
    type === 'add' ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300'
    : type === 'del' ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300'
    : 'text-slate-600 dark:text-slate-400';

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden text-xs font-mono">
      <div className="flex flex-wrap items-center gap-2 px-3 py-2 border-b border-slate-200 dark:border-slate-800 font-sans">
        <span className="font-semibold text-slate-800 dark:text-slate-200">JXButton.tsx</span>
        <span className="text-emerald-600 font-mono">+{adds}</span>
        <span className="text-rose-600 font-mono">−{dels}</span>
        <div className="ml-auto flex items-center gap-1">
          <button type="button" onClick={() => setSplit((s) => !s)} aria-pressed={split} className="min-h-[36px] px-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">{split ? 'Split' : 'Unified'}</button>
          <button type="button" onClick={() => setHideSame((h) => !h)} aria-pressed={hideSame} className="min-h-[36px] px-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">{hideSame ? 'Show all' : 'Changes only'}</button>
          <button type="button" onClick={() => jump(-1)} aria-label="Previous change" className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"><ArrowUp className="w-4 h-4" /></button>
          <button type="button" onClick={() => jump(1)} aria-label="Next change" className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"><ArrowDown className="w-4 h-4" /></button>
        </div>
      </div>
      <div className="max-h-44 overflow-y-auto">
        {split ? (
          <div className="grid grid-cols-2">
            <div>
              {lines.filter((l) => l.type !== 'add').map((l, i) => (
                <div key={i} id={`diff-line-${lines.indexOf(l)}`} className={`px-2 py-0.5 whitespace-pre-wrap break-all ${rowClass(l.type)}`}><span className="text-slate-400 mr-2">{l.oldNo ?? ''}</span>{l.type === 'del' ? '− ' : '  '}{l.text}</div>
              ))}
            </div>
            <div className="border-l border-slate-200 dark:border-slate-800">
              {lines.filter((l) => l.type !== 'del').map((l, i) => (
                <div key={i} className={`px-2 py-0.5 whitespace-pre-wrap break-all ${rowClass(l.type)}`}><span className="text-slate-400 mr-2">{l.newNo ?? ''}</span>{l.type === 'add' ? '+ ' : '  '}{l.text}</div>
              ))}
            </div>
          </div>
        ) : (
          visible.map((l) => {
            const idx = lines.indexOf(l);
            return (
              <div key={idx} id={`diff-line-${idx}`} className={`px-2 py-0.5 whitespace-pre-wrap break-all ${rowClass(l.type)} ${changes[focusIdx] === idx ? 'ring-2 ring-inset ring-amber-400' : ''}`}>
                <span className="text-slate-400 mr-2">{l.oldNo ?? ''} {l.newNo ?? ''}</span>
                {l.type === 'add' ? '+ ' : l.type === 'del' ? '− ' : '  '}{l.text}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
