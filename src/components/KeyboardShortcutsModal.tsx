import React from 'react';
import { X, Keyboard, Command, Sparkles } from 'lucide-react';

export interface KeyboardShortcutsModalProps {
  open: boolean;
  onClose: () => void;
}

const SHORTCUTS = [
  { key: '⌘ K / Ctrl K', desc: 'Open Command Finder / JX Spotlight', category: 'Navigation' },
  { key: '?', desc: 'Open this Keyboard Shortcuts cheat sheet', category: 'Help' },
  { key: 'Esc', desc: 'Close modals, drawers, or dropdowns', category: 'Navigation' },
  { key: 'Tab / Shift Tab', desc: 'Move focus sequentially (WCAG compliant)', category: 'Focus' },
  { key: 'Enter / Space', desc: 'Trigger selected interactive control', category: 'Actions' },
];

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="shortcuts-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl jx-elevation-2 p-6 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <Keyboard className="w-4 h-4" />
            </div>
            <div>
              <h3 id="shortcuts-title" className="text-sm font-bold text-slate-900 dark:text-white">
                Keyboard Shortcuts
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Ergonomic hotkeys for power users
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close shortcuts modal"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#1E293B] transition-colors touch-manipulation active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-4 space-y-2.5">
          {SHORTCUTS.map((sc) => (
            <div
              key={sc.key}
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-[#1E293B]/50 border border-slate-200/50 dark:border-slate-800"
            >
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                {sc.desc}
              </span>
              <kbd className="px-2 py-1 rounded bg-white dark:bg-[#111827] font-mono text-xs font-bold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 shadow-2xs">
                {sc.key}
              </kbd>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>Press ESC to dismiss</span>
          <span className="flex items-center gap-1 text-indigo-500 font-sans">
            <Sparkles className="w-3 h-3" />
            JXUI Kinematics
          </span>
        </div>
      </div>
    </div>
  );
};
