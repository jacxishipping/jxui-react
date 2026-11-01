import React, { useEffect, useRef } from 'react';
import {
  Search,
  Sparkles,
  Github,
  Zap,
  Layers,
  Compass,
  Sliders,
  CheckCircle2,
  Box,
  Bell,
  LayoutGrid,
  BarChart3,
  Table,
  Volume2,
  Columns,
  Workflow,
  Lock,
  FileCode,
  Clock,
  ShieldCheck,
  X,
  BookOpen,
  Palette,
  Check,
} from 'lucide-react';
import { UNIFIED_CATEGORIES_18, UNIFIED_STATS, UnifiedCategorySpec } from '../../data/unifiedCatalog';
import { useJXTheme } from '../../context/JXThemeContext';
import { tactile } from '../../utils/tactileAudio';

export interface AppSidebarProps {
  activeCategory: string;
  onSelectCategory: (catId: string) => void;
  activeTier: 'all' | 'showcase' | 'primitive' | 'favorites';
  onSelectTier: (tier: 'all' | 'showcase' | 'primitive' | 'favorites') => void;
  sidebarQuery: string;
  onSidebarQueryChange: (q: string) => void;
  filteredCount: number;
  totalCount: number;
  mobileSidebarOpen: boolean;
  onCloseMobileSidebar: () => void;
  currentView: 'workbench' | 'docs' | 'github-page';
  onNavigateToSection: (sectionId: string) => void;
  onOpenEncyclopedia: () => void;
}

const CATEGORY_ICONS_18: Record<string, React.ComponentType<{ className?: string }>> = {
  'buttons-actions': Zap,
  'glass-surfaces': Layers,
  navigation: Compass,
  'inputs-forms': Sliders,
  'toggles-selection': CheckCircle2,
  'modals-overlays': Box,
  'feedback-notifications': Bell,
  'loading-progress': Sparkles,
  'cards-content': LayoutGrid,
  'data-visualization': BarChart3,
  'tables-datagrids': Table,
  'media-audio-visual': Volume2,
  'layout-workspace': Columns,
  'animation-motion': Workflow,
  'security-authentication': Lock,
  'editors-creative': FileCode,
  'time-scheduling': Clock,
  'advanced-utilities': ShieldCheck,
};

export const AppSidebar: React.FC<AppSidebarProps> = ({
  activeCategory,
  onSelectCategory,
  activeTier,
  onSelectTier,
  sidebarQuery,
  onSidebarQueryChange,
  filteredCount,
  totalCount,
  mobileSidebarOpen,
  onCloseMobileSidebar,
  currentView,
  onNavigateToSection,
  onOpenEncyclopedia,
}) => {
  const { palette } = useJXTheme();
  const mobileDrawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileSidebarOpen) return;

    const drawer = mobileDrawerRef.current;
    if (!drawer) return;

    const previouslyFocused = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    drawer.querySelector<HTMLInputElement>('input')?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      const focusableElements = Array.from(
        drawer.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => element.getClientRects().length > 0);

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const focusIsOutsideDrawer = !drawer.contains(document.activeElement);

      if (event.shiftKey && (document.activeElement === firstElement || focusIsOutsideDrawer)) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && (document.activeElement === lastElement || focusIsOutsideDrawer)) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (previouslyFocused?.isConnected) previouslyFocused.focus();
    };
  }, [mobileSidebarOpen]);

  const content = (
    <div className="flex flex-col h-full justify-between overflow-hidden bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-xl">
      <div className="flex flex-col flex-1 min-h-0">
        {/* Brand Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-slate-200/70 dark:border-slate-800/80 bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-2.5">
            <img
              src="./favicon.png"
              alt="JXUI Logo"
              width={36}
              height={36}
              className="w-9 h-9 rounded-xl object-contain shadow-sm ring-1 ring-slate-200/80 dark:ring-slate-800 bg-slate-950/5 dark:bg-white/5"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white">
                  JXUI
                </span>
                <span className="px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[10px] font-semibold">
                  v3.0.0
                </span>
              </div>
              <span className="font-mono text-[11px] text-slate-600 dark:text-slate-400">@jacxishippingorg/jx-ui-react · {UNIFIED_STATS.totalComponents} Components</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onCloseMobileSidebar}
            aria-label="Close navigation sidebar"
            className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer touch-manipulation active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Search Input */}
        <div className="px-3.5 py-2.5 border-b border-slate-200/50 dark:border-slate-800/50 shrink-0">
          <div className="relative flex items-center">
            <Search className="w-3.5 h-3.5 absolute left-3 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={sidebarQuery}
              onChange={(e) => onSidebarQueryChange(e.target.value)}
              placeholder={`Search all ${totalCount} components...`}
              aria-label={`Search all ${totalCount} components`}
              className="w-full pl-9 pr-12 py-2 min-h-[44px] rounded-xl bg-slate-100 dark:bg-[#1E293B]/70 text-xs text-slate-900 dark:text-slate-100 placeholder:text-slate-600 dark:placeholder:text-slate-400 focus:outline-none focus:bg-white dark:focus:bg-[#111827] border border-transparent focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)] transition-colors"
            />
            <span className="absolute right-2.5 px-1.5 py-0.5 rounded bg-slate-200/70 dark:bg-[#1E293B] text-[10px] font-mono font-medium text-slate-600 dark:text-slate-300">
              {filteredCount}
            </span>
          </div>
        </div>

        {/* Global Component Tier Quick Filters */}
        <div className="p-3 border-b border-slate-200/50 dark:border-slate-800/50 space-y-1.5 shrink-0 text-xs">
          {/* All Components */}
          <button
            type="button"
            onClick={() => {
              tactile.playClick(750);
              onSelectCategory('all');
              onSelectTier('all');
              onCloseMobileSidebar();
            }}
            className={`w-full min-h-[44px] flex items-center justify-between px-3 py-2 rounded-xl font-medium transition-all cursor-pointer touch-manipulation active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)] ${
              activeCategory === 'all' && activeTier === 'all'
                ? 'bg-indigo-600 text-white font-semibold shadow-sm ring-2 ring-[var(--jx-accent-halo)]'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#1E293B]/60'
            }`}
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>All {totalCount} Components</span>
            </span>
            <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 font-bold">
              {totalCount}
            </span>
          </button>

        </div>

        {/* 18 Unified Categories Single Scroll List */}
        <div className="flex-1 overflow-y-auto px-2.5 py-2 space-y-1 text-xs">
          <div className="px-2.5 pt-1 pb-1.5 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
            <span>18 Unified Categories</span>
            <span className="font-mono">Combined</span>
          </div>

          {UNIFIED_CATEGORIES_18.map((cat: UnifiedCategorySpec) => {
            const Icon = CATEGORY_ICONS_18[cat.id] || Box;
            const isCatActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  tactile.playClick(750);
                  onSelectCategory(cat.id);
                  onCloseMobileSidebar();
                }}
                className={`w-full min-h-[44px] flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all cursor-pointer touch-manipulation active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)] ${
                  isCatActive
                    ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-semibold ring-2 ring-[var(--jx-accent-halo)]'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/80 dark:hover:bg-[#1E293B]/60 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    isCatActive
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-[#1E293B] text-slate-700 dark:text-slate-300'
                  }`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col min-w-0 truncate">
                    <span className="text-xs truncate font-medium">
                      {cat.title.replace(/^Category \d+:\s*/, '')}
                    </span>
                    <span className="text-[10px] text-slate-600 dark:text-slate-400 font-mono">
                      {cat.showcaseCount} showcases · {cat.primitiveCount} primitives
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 ml-2">
                  {cat.showcaseCount > 0 && (
                    <span className="text-[10px] text-amber-500 font-bold" title={`${cat.showcaseCount} Flagship Showcases`}>
                      ★
                    </span>
                  )}
                  <span className={`font-mono text-[11px] px-1.5 py-0.5 rounded-full ${
                    isCatActive
                      ? 'bg-indigo-200/70 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 font-bold'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}>
                    {cat.totalCount}
                  </span>
                </div>
              </button>
            );
          })}

          {/* Studio Tools & Fast Links Section */}
          <div className="pt-3 pb-1">
            <div className="px-2.5 pb-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
              Studio &amp; Governance
            </div>

            <div className="space-y-1">
              <button
                type="button"
                onClick={() => {
                  tactile.playClick(800);
                  onNavigateToSection('docs');
                  onCloseMobileSidebar();
                }}
                aria-current={currentView === 'docs' ? 'page' : undefined}
                className={`w-full min-h-[44px] flex items-center justify-between px-3 py-2 rounded-xl transition-all cursor-pointer text-left touch-manipulation active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)] ${
                  currentView === 'docs'
                    ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#1E293B]/60 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="h-3.5 w-3.5 text-indigo-500" />
                  <span>Component Documentation</span>
                </span>
                <span className="font-mono text-[10px] text-slate-600 dark:text-slate-400">361</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  tactile.playClick(800);
                  onNavigateToSection('jx-live-playground');
                  onCloseMobileSidebar();
                }}
                className="w-full min-h-[44px] flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#1E293B]/60 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer text-left touch-manipulation active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)]"
              >
                <span className="flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Live Component Playground</span>
                </span>
                <span className="font-mono text-[10px] text-indigo-600 dark:text-indigo-400 font-bold">Live</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  tactile.playClick(800);
                  onOpenEncyclopedia();
                  onCloseMobileSidebar();
                }}
                className="w-full min-h-[44px] flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#1E293B]/60 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer text-left touch-manipulation active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)]"
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                  <span>61 MUI Flaws vs JXUI</span>
                </span>
                <span className="font-mono text-[10px] text-indigo-600 dark:text-indigo-400 font-bold">Delta</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  tactile.playClick(800);
                  onNavigateToSection('jx-design-token-exporter');
                  onCloseMobileSidebar();
                }}
                className="w-full min-h-[44px] flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#1E293B]/60 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer text-left touch-manipulation active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)]"
              >
                <span className="flex items-center gap-2">
                  <Palette className="w-3.5 h-3.5 text-violet-500" />
                  <span>Design Token Studio</span>
                </span>
                <span className="font-mono text-[10px] text-slate-600 dark:text-slate-400">JSON/CSS</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  tactile.playClick(800);
                  onNavigateToSection('jx-accessibility-aria-standards');
                  onCloseMobileSidebar();
                }}
                className="w-full min-h-[44px] flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#1E293B]/60 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer text-left touch-manipulation active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)]"
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>WCAG 2.1 AA Checklist</span>
                </span>
                <span className="font-mono text-[10px] text-emerald-700 dark:text-emerald-400 font-bold">100%</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  tactile.playClick(800);
                  onNavigateToSection('github-page');
                  onCloseMobileSidebar();
                }}
                className={`w-full min-h-[44px] flex items-center justify-between px-3 py-2 rounded-xl transition-all cursor-pointer text-left touch-manipulation active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)] ${
                  currentView === 'github-page'
                    ? 'bg-[#238636] text-white font-semibold ring-2 ring-[#238636]/30'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#1E293B]/60 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Showcase</span>
                </span>
                <span className="font-mono text-[10px] text-emerald-700 dark:text-emerald-300 font-bold">v3.0</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Compliance & Framework Footer */}
      <div className="p-3.5 border-t border-slate-200/70 dark:border-slate-800 bg-slate-50/60 dark:bg-[#0B0F19]/60 space-y-2 shrink-0">
        <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Accessibility checklist</span>
          </span>
        </div>
        <p className="text-[10px] text-slate-600 dark:text-slate-400 font-mono flex items-center justify-between">
          <span>Keyboard · ARIA · Focus</span>
          <span>React 19</span>
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Left Nav Rail */}
      <aside className="hidden lg:block w-72 shrink-0 border-r border-slate-200/70 dark:border-slate-800 bg-white dark:bg-[#0B0F19] h-screen sticky top-0 z-40">
        {content}
      </aside>

      {/* Mobile Slide-over Drawer Backdrop */}
      {mobileSidebarOpen && (
        <div
          id="mobile-navigation-drawer"
          ref={mobileDrawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation drawer"
          className="fixed inset-0 z-50 lg:hidden flex"
        >
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobileSidebar}
          />
          <div className="relative w-80 max-w-[calc(100vw-3.5rem)] bg-white dark:bg-[#0B0F19] shadow-2xl h-full z-10 flex flex-col">
            {content}
          </div>
        </div>
      )}
    </>
  );
};
