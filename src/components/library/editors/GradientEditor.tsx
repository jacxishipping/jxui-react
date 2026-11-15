// @jxui/react v3.0.0 — GradientEditor (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Copy, Check, Plus, Trash2 } from 'lucide-react';

// 10. GradientEditor — build a linear gradient: pick up to 4 colour stops,
// drag the angle, see a live preview and copy the CSS.
interface Stop { color: string; pos: number; }
const INITIAL: Stop[] = [
  { color: '#4f46e5', pos: 0 },
  { color: '#ec4899', pos: 100 },
];

export const GradientEditor: React.FC = () => {
  const { palette } = useJXTheme();
  const [stops, setStops] = useState<Stop[]>(INITIAL);
  const [angle, setAngle] = useState(90);
  const [copied, setCopied] = useState(false);
  const [selected, setSelected] = useState(0);

  const css = `linear-gradient(${angle}deg, ${stops.map((s) => `${s.color} ${s.pos}%`).join(', ')})`;
  const update = (i: number, patch: Partial<Stop>) => setStops((ss) => ss.map((s, j) => (j === i ? { ...s, ...patch } : s)));
  const addStop = () => {
    if (stops.length >= 4) return;
    setStops((ss) => [...ss, { color: '#10b981', pos: 50 }].sort((a, b) => a.pos - b.pos));
    setSelected(stops.length);
  };
  const removeStop = (i: number) => {
    if (stops.length <= 2) return;
    setStops((ss) => ss.filter((_, j) => j !== i));
    setSelected(0);
  };
  const copy = async () => {
    try { await navigator.clipboard.writeText(`background: ${css};`); } catch { /* clipboard unavailable */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 space-y-3 text-xs">
      <div className="h-20 rounded-xl border border-slate-200 dark:border-slate-800" style={{ background: css }} aria-label="Gradient preview" />
      <div className="flex flex-wrap items-center gap-2">
        {stops.map((s, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setSelected(i)}
            aria-label={`Select colour stop ${i + 1}`}
            aria-pressed={selected === i}
            className={`min-h-[44px] min-w-[44px] rounded-full border-4 cursor-pointer ${selected === i ? 'border-slate-900 dark:border-white scale-110' : 'border-white dark:border-slate-800'}`}
            style={{ backgroundColor: s.color }}
          />
        ))}
        <button type="button" onClick={addStop} disabled={stops.length >= 4} aria-label="Add colour stop" className="min-h-[44px] min-w-[44px] rounded-full border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-500 cursor-pointer disabled:opacity-40">
          <Plus className="w-4 h-4" />
        </button>
        <button type="button" onClick={() => removeStop(selected)} disabled={stops.length <= 2} aria-label="Remove selected colour stop" className="min-h-[36px] px-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer disabled:opacity-40">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <input type="color" value={stops[selected]?.color ?? '#000000'} onChange={(e) => update(selected, { color: e.target.value })} aria-label="Selected stop colour" className="w-11 h-11 min-h-[44px] min-w-[44px] rounded-lg cursor-pointer bg-transparent" />
        <label className="flex items-center gap-2 font-mono text-slate-600 dark:text-slate-300">
          {stops[selected]?.color ?? ''}
        </label>
        <label className="flex items-center gap-2 ml-auto text-slate-600 dark:text-slate-300">
          Position
          <input type="range" min={0} max={100} value={stops[selected]?.pos ?? 0} onChange={(e) => update(selected, { pos: Number(e.target.value) })} aria-label="Selected stop position" className="w-24" />
          <span className="font-mono w-10">{stops[selected]?.pos ?? 0}%</span>
        </label>
      </div>
      <label className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
        Angle
        <input type="range" min={0} max={360} value={angle} onChange={(e) => setAngle(Number(e.target.value))} aria-label="Gradient angle" className="flex-1" />
        <span className="font-mono w-12">{angle}°</span>
      </label>
      <div className="flex items-center gap-2">
        <code className="flex-1 min-w-0 min-h-[36px] px-2 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono text-[11px] text-slate-600 dark:text-slate-300 truncate">{css}</code>
        <button type="button" onClick={copy} className={`min-h-[44px] px-3 inline-flex items-center gap-1.5 rounded-lg text-white font-semibold cursor-pointer ${palette.bg}`}>
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? 'Copied' : 'Copy CSS'}
        </button>
      </div>
    </div>
  );
};
