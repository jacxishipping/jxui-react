// @jxui/react v3.0.0 — GradientBorderCard (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Copy, Check } from 'lucide-react';

// 13. GradientBorderCard — a card with a live gradient border. Pick a
// gradient, see it applied instantly, and copy the CSS for it.
const GRADIENTS = [
  { id: 'aurora', label: 'Aurora', css: 'linear-gradient(90deg,#6366f1,#a855f7,#ec4899)', className: 'from-indigo-500 via-purple-500 to-pink-500' },
  { id: 'ocean', label: 'Ocean', css: 'linear-gradient(90deg,#0284c7,#06b6d4,#059669)', className: 'from-sky-500 via-cyan-500 to-emerald-500' },
  { id: 'sunset', label: 'Sunset', css: 'linear-gradient(90deg,#f59e0b,#f97316,#e11d48)', className: 'from-amber-500 via-orange-500 to-rose-500' },
] as const;

export const GradientBorderCard: React.FC = () => {
  const { getRadiusClass } = useJXTheme();
  const [active, setActive] = useState<(typeof GRADIENTS)[number]>(GRADIENTS[0]);
  const [copied, setCopied] = useState(false);

  const copyCss = async () => {
    try {
      await navigator.clipboard.writeText(`background: ${active.css};`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className={`p-0.5 rounded-2xl bg-gradient-to-r ${active.className} transition-all`}>
      <div className={`p-4 bg-white dark:bg-slate-900 rounded-[14px] text-xs flex flex-col gap-3 ${getRadiusClass('card')}`}>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-slate-400" />
          <span className="font-bold text-sm text-slate-900 dark:text-white">Gradient Border</span>
        </div>
        <p className="text-slate-500">A border that is a gradient, not a colour. Pick one:</p>
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Gradient">
          {GRADIENTS.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setActive(g)}
              aria-pressed={active.id === g.id}
              className={`min-h-[36px] px-2.5 py-1.5 rounded-full text-[11px] font-semibold cursor-pointer bg-gradient-to-r ${g.className} text-white ${
                active.id === g.id ? 'ring-2 ring-offset-2 ring-slate-400 dark:ring-slate-500' : 'opacity-70 hover:opacity-100'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={copyCss}
          className="min-h-[36px] self-start inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'CSS copied' : 'Copy gradient CSS'}
        </button>
      </div>
    </div>
  );
};
