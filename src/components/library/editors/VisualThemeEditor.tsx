// @jxui/react v3.0.0 — VisualThemeEditor (JXUI v3.0 Unified Component Suite)
import React from 'react';
import { useJXTheme, AccentColor, ACCENT_PALETTES } from '../../../context/JXThemeContext';
import { tactile } from '../../../utils/tactileAudio';
import { Palette, Sun, Moon } from 'lucide-react';

// 9. VisualThemeEditor
export const VisualThemeEditor: React.FC = () => {
  const { accent, setAccent, mode, toggleMode, getRadiusClass } = useJXTheme();

  return (
    <div className={`p-4 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 jx-elevation-1 text-xs flex flex-col gap-3.5 ${getRadiusClass('card')}`}>
      <div className="flex items-center justify-between">
        <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
          <Palette className="w-4 h-4 text-indigo-500" />
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

      <div className="flex flex-wrap items-center gap-2">
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
  );
};
