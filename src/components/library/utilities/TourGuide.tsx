// @jxui/react v3.0.0 — TourGuide (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// 10. TourGuide — a four-step product tour: Start opens step 1, Next/Back
// move through the steps with a live progress bar, Skip / Finish dismisses
// it, and the tour can be restarted.
const STEPS = [
  { title: 'Search everything', body: 'Click ⌘K anytime to search all 361 components by name or category.' },
  { title: 'Live previews', body: 'Every component renders live. Change variant, tone and size to see it update instantly.' },
  { title: 'Theme tokens', body: 'Pick an accent and radius — the whole workbench follows. Export the tokens as CSS or JSON.' },
  { title: 'Copy & ship', body: 'Copy the install snippet, import the component and it just works in your app.' },
] as const;

export const TourGuide: React.FC = () => {
  const { palette } = useJXTheme();
  const [step, setStep] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const open = step !== null;
  const current = step === null ? null : STEPS[step];

  return (
    <div className="w-full flex flex-col items-start gap-2">
      {!open && (
        <button
          type="button"
          onClick={() => { setStep(0); setFinished(false); }}
          className={`min-h-[44px] px-4 rounded-xl text-xs font-bold text-white cursor-pointer ${palette.bg}`}
        >
          {finished ? '↻ Restart the tour' : '▶ Start the tour'}
        </button>
      )}
      {finished && !open && (
        <span className="text-[11px] text-emerald-600 font-medium">
          Tour complete — you saw all {STEPS.length} steps. ✓
        </span>
      )}
      {open && current && (
        <div className="p-3.5 bg-slate-900 text-white rounded-xl text-xs flex flex-col gap-2 w-64 shadow-2xl animate-fadeIn" role="dialog" aria-label={`Tour step ${step! + 1} of ${STEPS.length}`}>
          <div className="flex items-center justify-between">
            <span className={`font-bold ${palette.text}`}>
              Step {step! + 1} of {STEPS.length}
            </span>
            <button
              type="button"
              onClick={() => setStep(null)}
              aria-label="Close tour"
              className="min-h-[32px] min-w-[32px] rounded-full text-slate-400 hover:text-white hover:bg-white/10 flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="w-full h-1 bg-white/15 rounded-full overflow-hidden">
            <div style={{ width: `${((step! + 1) / STEPS.length) * 100}%` }} className={`h-full ${palette.bg} transition-[width] duration-300`} />
          </div>
          <div className="font-bold text-sm">{current.title}</div>
          <p className="text-[11px] leading-relaxed text-slate-300">{current.body}</p>
          <div className="flex items-center justify-between gap-2 pt-1">
            <button
              type="button"
              onClick={() => setStep(null)}
              className="min-h-[36px] px-2 text-slate-400 hover:text-white font-semibold cursor-pointer"
            >
              Skip tour
            </button>
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, (s ?? 1) - 1))}
                disabled={step === 0}
                aria-label="Previous step"
                className="min-h-[36px] min-w-[36px] rounded-lg bg-white/10 flex items-center justify-center cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {step! < STEPS.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => (s ?? 0) + 1)}
                  className={`min-h-[36px] px-3 rounded-lg font-bold text-white cursor-pointer inline-flex items-center gap-1 ${palette.bg}`}
                >
                  Next <ChevronRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => { setStep(null); setFinished(true); }}
                  className="min-h-[36px] px-3 rounded-lg font-bold text-white bg-emerald-600 cursor-pointer"
                >
                  Finish
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
