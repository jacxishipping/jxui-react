// @jxui/react v3.0.0 — GradientPicker (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Copy, Check, ArrowLeftRight } from 'lucide-react';

export const GradientPicker: React.FC = () => {
  const { getRadiusClass, pushToast } = useJXTheme();
  const [fromColor, setFromColor] = useState('#6366f1');
  const [toColor, setToColor] = useState('#ec4899');
  const [angle, setAngle] = useState(135);
  const [copied, setCopied] = useState(false);

  const presets = [
    { from: '#6366f1', to: '#ec4899' },
    { from: '#3b82f6', to: '#10b981' },
    { from: '#f59e0b', to: '#ef4444' },
    { from: '#8b5cf6', to: '#06b6d4' },
  ];

  const gradientStyle = `linear-gradient(${angle}deg, ${fromColor}, ${toColor})`;

  const handleCopy = async () => {
    await navigator.clipboard?.writeText(`background: ${gradientStyle};`).catch(() => undefined);
    setCopied(true);
    pushToast({
      title: 'Copied Gradient CSS',
      description: `background: ${gradientStyle}`,
      variant: 'success',
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-2.5 w-full">
      {/* Live Gradient Preview Bar */}
      <div
        className="w-full h-12 rounded-lg shadow-sm border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-end px-2"
        style={{ background: gradientStyle }}
      >
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy gradient CSS"
          className="min-h-[36px] px-2 py-1 rounded bg-black/40 text-white hover:bg-black/60 transition-colors text-[11px] flex items-center gap-1 cursor-pointer"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'Copied' : 'CSS'}</span>
        </button>
      </div>

      <div className="flex items-center justify-between gap-2">
        {/* Color Pickers */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="color"
              value={fromColor}
              onChange={(e) => setFromColor(e.target.value)}
              aria-label="Gradient start colour"
              className="w-8 h-8 min-w-[32px] min-h-[32px] rounded cursor-pointer border-0 p-0"
            />
            <span className="text-[11px] text-slate-500">{fromColor}</span>
          </label>
          <button
            type="button"
            onClick={() => {
              setFromColor(toColor);
              setToColor(fromColor);
            }}
            aria-label="Swap gradient colours"
            className="min-w-[36px] min-h-[36px] flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
          </button>
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="color"
              value={toColor}
              onChange={(e) => setToColor(e.target.value)}
              aria-label="Gradient end colour"
              className="w-8 h-8 min-w-[32px] min-h-[32px] rounded cursor-pointer border-0 p-0"
            />
            <span className="text-[11px] text-slate-500">{toColor}</span>
          </label>
        </div>

        {/* Preset Chips */}
        <div className="flex items-center gap-1" role="group" aria-label="Gradient presets">
          {presets.map((p, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setFromColor(p.from);
                setToColor(p.to);
              }}
              aria-label={`Gradient preset ${idx + 1}`}
              style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
              className="w-6 h-6 min-w-[24px] min-h-[24px] rounded-full border border-white/40 shadow-xs hover:scale-125 transition-transform cursor-pointer"
            />
          ))}
        </div>
      </div>

      <label className="flex items-center gap-3 text-xs text-slate-500">
        <span className="shrink-0 font-mono">Angle {angle}°</span>
        <input
          type="range"
          min={0}
          max={360}
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
          aria-label="Gradient angle"
          className="w-full"
          style={{ accentColor: '#6366f1' }}
        />
      </label>
      <code className={`block px-2.5 py-1.5 text-[11px] font-mono text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 ${getRadiusClass('control')} break-all`}>
        background: {gradientStyle};
      </code>
    </div>
  );
};
