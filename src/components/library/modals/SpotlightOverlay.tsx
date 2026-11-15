// @jxui/react v3.0.0 — SpotlightOverlay (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X } from 'lucide-react';

// 12. SpotlightOverlay — trigger dims the whole scene to 75% except for a
// spotlighted card; clicking the card or "Got it" ends the tour.
const STEPS = [
  { title: 'Design tokens', detail: 'Every colour, radius and shadow comes from one token set.' },
  { title: 'Theme engine', detail: 'Light, dark and five accents, persisted per user.' },
  { title: 'Components', detail: '361 primitives and showcases in one catalogue.' },
];

export const SpotlightOverlay: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open ]);

  const finish = () => {
    setDone(true);
    setOpen(false);
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => {
          setStep(0);
          setDone(false);
          setOpen(true);
        }}
        className={`min-h-[44px] px-4 py-2 text-xs font-semibold text-white ${palette.bg} ${palette.bgHover} ${getRadiusClass('control')} cursor-pointer`}
      >
        Start spotlight tour
      </button>
      {done && <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400">Tour finished — all {STEPS.length} steps seen.</p>}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label={`Spotlight step ${step + 1} of ${STEPS.length}`}
            className="relative w-full max-w-sm p-5 bg-slate-900 text-white rounded-2xl shadow-2xl ring-2 ring-white/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className={`font-mono text-[10px] ${palette.text}`}>
                  Spotlight Focus Zone · step {step + 1} of {STEPS.length}
                </span>
                <div className="mt-1 text-sm font-bold">{STEPS[step].title}</div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">{STEPS[step].detail}</p>
              </div>
              <button
                type="button"
                aria-label="End spotlight tour"
                onClick={finish}
                className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg text-slate-300 hover:bg-white/10 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-3 flex items-center gap-1.5" aria-hidden="true">
              {STEPS.map((_, i) => (
                <span key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? 'bg-white' : 'bg-white/25'}`} />
              ))}
            </div>
            <p className="mt-2 text-[11px] font-mono text-slate-400">Backdrop Dim 75% · rest of the page is dimmed</p>
            <div className="mt-4 flex justify-between gap-2">
              <button
                type="button"
                disabled={step === 0}
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className="min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold text-slate-200 hover:bg-white/10 cursor-pointer disabled:opacity-40 disabled:cursor-default"
              >
                Back
              </button>
              {step < STEPS.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => s + 1)}
                  className={`min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold text-white ${palette.bg} cursor-pointer`}
                >
                  Next step
                </button>
              ) : (
                <button
                  type="button"
                  onClick={finish}
                  className={`min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold text-white ${palette.bg} cursor-pointer`}
                >
                  Got it
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
