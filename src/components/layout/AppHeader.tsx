import React from 'react';
import {
  Menu,
  Terminal,
  SplitSquareHorizontal,
  Sun,
  Moon,
  Github,
} from 'lucide-react';
import {
  useJXTheme,
  ACCENT_PALETTES,
  AccentColor,
  RadiusScale,
} from '../../context/JXThemeContext';
import { tactile } from '../../utils/tactileAudio';

export interface AppHeaderProps {
  onOpenCmd: () => void;
  onOpenMobileSidebar: () => void;
  currentView: 'workbench' | 'github-page';
  onToggleView: () => void;
}

const RADIUS_OPTIONS: { id: RadiusScale; label: string; scaleLabel: string }[] = [
  { id: 'sharp', label: 'Sharp (0px)', scaleLabel: '0.5x' },
  { id: 'sm', label: 'Crisp (8px)', scaleLabel: '0.75x' },
  { id: 'md', label: 'Default (12px)', scaleLabel: '1.0x' },
  { id: 'lg', label: 'Soft (16px)', scaleLabel: '1.35x' },
  { id: 'xl', label: 'Ultra (24px)', scaleLabel: '1.75x' },
];

export const AppHeader: React.FC<AppHeaderProps> = ({
  onOpenCmd,
  onOpenMobileSidebar,
  currentView,
  onToggleView,
}) => {
  const {
    mode,
    toggleMode,
    accent,
    setAccent,
    radiusScale,
    setRadiusScale,
    compareMode,
    setCompareMode,
  } = useJXTheme();

  return (
    <header className="h-16 px-3 sm:px-6 lg:px-8 border-b border-slate-200/70 dark:border-slate-800/80 bg-white/85 dark:bg-[#0B0F19]/85 backdrop-blur-md flex items-center justify-between sticky top-0 z-30 w-full min-w-0">
      <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 mr-2 sm:mr-4">
        {/* Mobile Sidebar Hamburger */}
        <button
          type="button"
          onClick={() => {
            tactile.playClick(700);
            onOpenMobileSidebar();
          }}
          aria-label="Open navigation sidebar"
          className="lg:hidden min-h-[44px] min-w-[44px] p-2.5 rounded-xl bg-slate-100 dark:bg-[#1E293B] text-slate-700 dark:text-slate-200 border border-slate-200/70 dark:border-slate-700 cursor-pointer flex items-center justify-center touch-manipulation active:scale-95 transition-transform shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)]"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Quick Find / Cmd+K Search Trigger */}
        <button
          type="button"
          onClick={() => {
            tactile.playClick(900);
            onOpenCmd();
          }}
          aria-label="Quick Find or Jump to Component (Command K)"
          className="flex items-center gap-2 sm:gap-2.5 bg-slate-100 dark:bg-[#1E293B]/70 hover:bg-slate-200/70 dark:hover:bg-[#1E293B] px-3 py-2 min-h-[44px] rounded-xl cursor-pointer transition-all text-slate-500 dark:text-slate-400 text-xs flex-1 max-w-[220px] sm:max-w-xs md:max-w-sm border border-transparent hover:border-slate-300 dark:hover:border-slate-700 touch-manipulation active:scale-[0.98] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)]"
        >
          <Terminal className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
          <span className="font-medium text-slate-600 dark:text-slate-300 truncate">
            <span className="hidden sm:inline">Quick Find / Jump to Component...</span>
            <span className="inline sm:hidden">Search 351 comps...</span>
          </span>
          <kbd className="hidden sm:inline-flex ml-auto px-1.5 py-0.5 rounded bg-white dark:bg-[#111827] font-mono text-[10px] text-slate-600 dark:text-slate-300 shadow-xs border border-slate-200 dark:border-slate-700 shrink-0">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Top Right Controls Toolbar */}
      <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 shrink-0">
        {/* Color Accent Swatches (Desktop) */}
        <div className="hidden lg:flex items-center gap-0.5 bg-slate-100 dark:bg-[#1E293B]/80 p-1 rounded-xl">
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
                title={`${pal.name} Palette`}
                aria-label={`Select ${pal.name} accent`}
                className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-full cursor-pointer touch-manipulation active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)]"
              >
                <span
                  style={{ backgroundColor: pal.hex }}
                  className={`w-5 h-5 rounded-full transition-transform ${
                    active
                      ? 'ring-2 ring-[var(--jx-accent)] ring-offset-1 scale-110'
                      : 'opacity-70 hover:opacity-100 hover:scale-105'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Radius Scale Multipliers */}
        <div className="hidden xl:flex items-center bg-slate-100 dark:bg-[#1E293B]/80 p-0.5 rounded-lg text-[11px] font-semibold">
          {RADIUS_OPTIONS.slice(1, 4).map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => {
                tactile.playClick(800);
                setRadiusScale(r.id);
              }}
              className={`min-h-[32px] px-2.5 py-1 rounded-md transition-all cursor-pointer touch-manipulation active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)] ${
                radiusScale === r.id
                  ? 'bg-white dark:bg-[#111827] text-slate-900 dark:text-white shadow-xs font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {r.scaleLabel}
            </button>
          ))}
        </div>

        {/* Split Compare Mode Toggle */}
        <button
          type="button"
          onClick={() => {
            tactile.playClick(750);
            setCompareMode(compareMode === 'jxui' ? 'split' : 'jxui');
          }}
          title="Toggle MUI vs JXUI Split Compare"
          aria-label="Toggle MUI vs JXUI Split Compare"
          className={`min-h-[44px] min-w-[44px] p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer touch-manipulation active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)] ${
            compareMode === 'split'
              ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-[var(--jx-accent-halo)]'
              : 'bg-slate-100 dark:bg-[#1E293B] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-[#1E293B]/80'
          }`}
        >
          <SplitSquareHorizontal className="w-4 h-4 shrink-0" />
          <span className="hidden xl:inline">Split Compare</span>
        </button>

        {/* Theme Luminance Toggle (Light/Dark) */}
        <button
          type="button"
          onClick={() => {
            tactile.playClick(mode === 'light' ? 600 : 850);
            toggleMode();
          }}
          data-testid="theme-mode-toggle"
          aria-label={`Switch to ${mode === 'light' ? 'Dark' : 'Light'} mode (current: ${mode})`}
          aria-pressed={mode === 'dark'}
          title={`Switch to ${mode === 'light' ? 'Dark Obsidian' : 'Light Alabaster'} (Saved to localStorage)`}
          className="min-h-[44px] min-w-[44px] rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 bg-slate-100/70 dark:bg-[#1E293B]/70 hover:bg-slate-200/80 dark:hover:bg-[#1E293B] transition-all cursor-pointer touch-manipulation active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)]"
        >
          {mode === 'light' ? (
            <Sun className="w-4 h-4 text-amber-500" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-400" />
          )}
        </button>

        {/* GitHub Showcase Page View Toggle */}
        <button
          type="button"
          onClick={() => {
            tactile.playClick(800);
            onToggleView();
          }}
          title={currentView === 'workbench' ? 'Switch to GitHub Showcase Page' : 'Return to Interactive Workbench'}
          aria-label={currentView === 'workbench' ? 'Switch to GitHub Showcase Page' : 'Return to Interactive Workbench'}
          className={`min-h-[44px] min-w-[44px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer touch-manipulation active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)] ${
            currentView === 'github-page'
              ? 'bg-[#238636] text-white shadow-sm ring-2 ring-[#238636]/30'
              : 'bg-slate-100 dark:bg-[#1E293B] hover:bg-slate-200/70 dark:hover:bg-[#1E293B]/80 text-slate-700 dark:text-slate-200'
          }`}
        >
          <Github className="w-4 h-4 shrink-0" />
          <span className="hidden sm:inline">{currentView === 'github-page' ? 'Workbench' : 'GitHub Page'}</span>
        </button>
      </div>
    </header>
  );
};
