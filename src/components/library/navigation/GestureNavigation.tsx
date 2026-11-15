// @jxui/react v3.0.0 — GestureNavigation (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { ArrowLeft, ArrowRight, Compass, Shield, Zap, Sparkles } from 'lucide-react';

const STEPS = [
  { id: 1, title: 'Luminescence', icon: Sparkles, desc: 'Zero CLS dynamic radiance' },
  { id: 2, title: 'Tactile Physics', icon: Zap, desc: 'Spring kinematic velocity' },
  { id: 3, title: 'WCAG AAA', icon: Shield, desc: 'High-contrast ARIA audited' },
];

// GestureNavigation — swipe/drag between steps, with arrow buttons, dot
// indicators and keyboard support (Left/Right arrows). Already interactive;
// this version adds labels, 36px targets, the theme accent and a live region.
export const GestureNavigation: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);

  const prevStep = () => setActiveStep((curr) => Math.max(0, curr - 1));
  const nextStep = () => setActiveStep((curr) => Math.min(STEPS.length - 1, curr + 1));

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - startX.current);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}

    if (dragOffset > 40) {
      prevStep();
    } else if (dragOffset < -40) {
      nextStep();
    }
    setDragOffset(0);
  };

  const current = STEPS[activeStep];
  const Icon = current.icon;

  return (
    <div className="w-full flex flex-col items-center gap-2 select-none">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={`Gesture navigation, step ${activeStep + 1} of ${STEPS.length}`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') prevStep();
          if (e.key === 'ArrowRight') nextStep();
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{ transform: `translateX(${dragOffset}px)` }}
        className={`w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm cursor-grab active:cursor-grabbing transition-transform ${
          isDragging ? 'duration-0' : 'duration-200'
        } ${getRadiusClass('card')} flex items-center justify-between gap-3`}
      >
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); prevStep(); }}
          disabled={activeStep === 0}
          aria-label="Previous step"
          className="min-h-[36px] min-w-[36px] p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer flex items-center justify-center"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 min-w-0 text-center" aria-live="polite">
          <div className={`w-9 h-9 rounded ${palette.softBg} ${palette.text} flex items-center justify-center shrink-0`}>
            <Icon className="w-4 h-4" />
          </div>
          <div className="min-w-0 text-left">
            <span className="text-xs font-bold text-slate-900 dark:text-white block truncate">
              {current.title}
            </span>
            <span className="text-[11px] text-slate-400 block truncate">
              {current.desc}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); nextStep(); }}
          disabled={activeStep === STEPS.length - 1}
          aria-label="Next step"
          className="min-h-[36px] min-w-[36px] p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer flex items-center justify-center"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center gap-1.5">
        {STEPS.map((step, idx) => (
          <button
            key={step.id}
            type="button"
            onClick={() => setActiveStep(idx)}
            aria-label={`Go to step ${idx + 1}: ${step.title}`}
            aria-current={activeStep === idx}
            className={`h-2 min-h-[8px] rounded-full transition-all cursor-pointer ${
              activeStep === idx ? `w-5 ${palette.bg}` : 'w-2 bg-slate-300 dark:bg-slate-700'
            }`}
          />
        ))}
      </div>
      <span className="text-[11px] font-mono text-slate-400">Swipe, drag, or use arrow keys</span>
    </div>
  );
};
