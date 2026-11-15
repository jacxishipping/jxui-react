// @jxui/react v3.0.0 — VisualThemeEditor (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme, AccentColor, ACCENT_PALETTES, RadiusScale } from '../../../context/JXThemeContext';
import { tactile } from '../../../utils/tactileAudio';
import { Palette, Sun, Moon, Check } from 'lucide-react';

// 9. VisualThemeEditor — the theme studio: accent swatches, light/dark mode,
// radius scale, and a live preview that updates as you edit. Edits apply to
// the whole workbench through the theme context.
const RADIUS_OPTIONS: { id: RadiusScale; label: string }[] = [
  { id: 'sharp', label: 'Sharp' },
  { id: 'sm', label: 'Crisp' },
  { id: 'md', label: 'Default' },
  { id: 'lg', label: 'Soft' },
  { id: 'xl', label: 'Ultra' },
];

export const VisualThemeEditor: React.FC = () => {
  const { accent, setAccent, mode, toggleMode, getRadiusClass, radiusScale, setRadiusScale, palette } = useJXTheme();
  const [saved, setSaved] = useState(false);

  const save = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  return (
    <div className={`p-4 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 jx-elevation-1 text-xs flex flex-col gap-3.5 ${getRadiusClass('card')}`}>
      <div className="flex items-center justify-between">
        <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
          <Palette className={`w-4 h-4 ${palette.text}`} />
          <span>Theme Studio Editor</span>
        </span>
        <button
          type="button"
          onClick={() => {
            tactile.playClick(mode === 'light' ? 600 : 850);
            toggleMode();
          }}
          aria-label="Toggle dark mode"
          className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg bg-slate-100 dark:bg-[#1E293B] text-slate-700 dark:text-slate-200 cursor-pointer touch-manipulation active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)]"
        >
          {mode === 'light' ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-400" />}
        </button>
      </div>

      <div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Accent</span>
        <div className="flex flex-wrap items-center gap-2 mt-1">
          {(Object.keys(ACCENT_PALETTES) as AccentColor[]).map((key) => {
            const pal = ACCENT_PALETTES[key];
            const active = accent === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => {
                  tactile.playClick(850);
                  setAccent(key);
                }}
                aria-label={`Select ${pal.name} accent`}
                aria-pressed={active}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer touch-manipulation active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)]"
              >
                <span
                  style={{ backgroundColor: pal.hex }}
                  className={`w-6 h-6 rounded-full transition-transform ${
                    active ? 'ring-2 ring-[var(--jx-accent)] ring-offset-2 scale-110 shadow-sm' : 'opacity-70 hover:opacity-100 hover:scale-105'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Corner radius</span>
        <div className="flex flex-wrap gap-1 mt-1">
          {RADIUS_OPTIONS.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setRadiusScale(r.id)}
              aria-pressed={radiusScale === r.id}
              className={`min-h-[36px] px-2.5 rounded-lg font-semibold cursor-pointer ${radiusScale === r.id ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-[#1E293B] text-slate-600 dark:text-slate-300'}`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <div className={`p-3 border border-slate-200 dark:border-slate-700 ${getRadiusClass('card')}`}>
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Live preview</span>
        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="font-semibold text-slate-800 dark:text-slate-200">{palette.name} · {mode === 'light' ? 'Light' : 'Dark'} · {radiusScale}</span>
          <button type="button" onClick={save} className={`min-h-[44px] px-3 rounded-lg text-white font-semibold cursor-pointer ${palette.bg} ${getRadiusClass('control')}`}>
            {saved ? <span className="inline-flex items-center gap-1"><Check className="w-4 h-4" /> Saved</span> : 'Apply theme'}
          </button>
        </div>
      </div>
    </div>
  );
};
