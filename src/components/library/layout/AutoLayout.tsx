// @jxui/react v3.0.0 — AutoLayout (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';

// 13. AutoLayout — a flex gap distributor: change the gap, direction and
// alignment and watch the boxes reflow live.
const BOXES = ['A', 'B', 'C', 'D'];

export const AutoLayout: React.FC = () => {
  const [gap, setGap] = useState(8);
  const [dir, setDir] = useState<'row' | 'column'>('row');
  const [align, setAlign] = useState<'flex-start' | 'center' | 'space-between'>('flex-start');

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="flex items-center gap-2 flex-wrap">
        <label className="flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-200">
          Gap {gap}px
          <input type="range" min={0} max={24} value={gap} onChange={(e) => setGap(Number(e.target.value))} aria-label="Flex gap in pixels" className="w-24 accent-indigo-600" />
        </label>
        <div className="flex gap-1" role="group" aria-label="Direction">
          {(['row', 'column'] as const).map((d) => (
            <button key={d} type="button" onClick={() => setDir(d)} aria-pressed={dir === d} className={`min-h-[36px] px-2.5 rounded-lg font-semibold capitalize cursor-pointer ${dir === d ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>{d}</button>
          ))}
        </div>
        <div className="flex gap-1" role="group" aria-label="Alignment">
          {(['flex-start', 'center', 'space-between'] as const).map((a) => (
            <button key={a} type="button" onClick={() => setAlign(a)} aria-pressed={align === a} className={`min-h-[36px] px-2 rounded-lg font-semibold cursor-pointer ${align === a ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>{a === 'flex-start' ? 'Start' : a === 'center' ? 'Centre' : 'Between'}</button>
          ))}
        </div>
      </div>
      <div
        className="rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-2 bg-slate-50 dark:bg-slate-900 flex"
        style={{ gap, flexDirection: dir, justifyContent: align, minHeight: 96 }}
      >
        {BOXES.map((b, i) => (
          <div key={b} className={`rounded-lg text-white font-bold flex items-center justify-center ${i % 2 ? 'bg-violet-500' : 'bg-indigo-600'}`} style={{ width: 44, height: 44 }}>{b}</div>
        ))}
      </div>
      <p className="text-[11px] font-mono text-slate-500">display: flex · flex-direction: {dir} · gap: {gap}px · justify-content: {align}</p>
    </div>
  );
};
