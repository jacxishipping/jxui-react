// @jxui/react v3.0.0 — MotionSequence (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Zap, Play, Pause, RotateCcw } from 'lucide-react';

// 15. MotionSequence — a real 4-keyframe sequence: a dot fades in, slides,
// scales up and rotates, with a stage label, progress bar and play/pause/
// replay controls. Jumps to the final keyframe under reduced motion.
const STAGES = [
  { name: 'Fade in', transform: 'translateX(0px) scale(0.6) rotate(0deg)', opacity: 0.25 },
  { name: 'Slide', transform: 'translateX(56px) scale(0.8) rotate(0deg)', opacity: 0.6 },
  { name: 'Scale up', transform: 'translateX(112px) scale(1.25) rotate(90deg)', opacity: 1 },
  { name: 'Rotate home', transform: 'translateX(168px) scale(1) rotate(180deg)', opacity: 1 },
];

export const MotionSequence: React.FC = () => {
  const { palette } = useJXTheme();
  const [stage, setStage] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStage(STAGES.length - 1);
      setPlaying(false);
      return;
    }
    if (!playing) return;
    const id = setInterval(() => {
      setStage((s) => (s >= STAGES.length - 1 ? 0 : s + 1));
    }, 1100);
    return () => clearInterval(id);
  }, [playing]);

  const current = STAGES[stage];
  return (
    <div className="w-full space-y-2">
      <div className="relative w-full h-16 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 overflow-hidden">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-full max-w-56 h-0.5 bg-slate-200 dark:bg-slate-800 rounded" />
        <div
          className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-700 ease-in-out"
          style={{ transform: `translateY(-50%) ${current.transform}`, opacity: current.opacity, backgroundColor: palette.hex }}
        >
          <Zap className="w-4 h-4" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-mono text-[11px] text-slate-600 dark:text-slate-300">
          Stage: Keyframe {stage + 1}/{STAGES.length} · {current.name} {playing ? '· Running' : '· Paused'}
        </span>
        <div className="ml-auto flex gap-1.5">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? 'Pause sequence' : 'Play sequence'}
            className="min-h-[36px] min-w-[36px] px-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer flex items-center justify-center"
          >
            {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={() => {
              setStage(0);
              setPlaying(true);
            }}
            aria-label="Replay sequence"
            className="min-h-[36px] min-w-[36px] px-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer flex items-center justify-center"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex gap-1">
        {STAGES.map((s, i) => (
          <button
            key={s.name}
            type="button"
            onClick={() => setStage(i)}
            aria-label={`Jump to keyframe ${i + 1}: ${s.name}`}
            className="flex-1 min-h-[36px] rounded-full cursor-pointer"
            style={{ backgroundColor: i <= stage ? palette.hex : undefined }}
          >
            <span className={`block w-full h-1.5 rounded-full ${i <= stage ? '' : 'bg-slate-200 dark:bg-slate-800'}`} />
          </button>
        ))}
      </div>
    </div>
  );
};
