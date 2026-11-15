// @jxui/react v3.0.0 — AIStreamingText (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Play, Pause, RotateCcw } from 'lucide-react';

// 5. AIStreamingText — streamed text, token by token: play, pause, replay,
// and pick the speed. Under prefers-reduced-motion the whole answer appears
// at once instead of streaming.
const FULL = 'JXUI ships 361 components across 18 categories. Sixty-one showcases are fully interactive; the primitives are being made real one batch at a time, with verified browser checks after every change.';
const SPEEDS: { id: string; label: string; ms: number }[] = [
  { id: 'slow', label: 'Slow', ms: 120 },
  { id: 'normal', label: 'Normal', ms: 55 },
  { id: 'fast', label: 'Fast', ms: 20 },
];

export const AIStreamingText: React.FC = () => {
  const { palette } = useJXTheme();
  const words = FULL.split(' ');
  const [shown, setShown] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(SPEEDS[1]);
  const timerRef = useRef<number | null>(null);

  useEffect(() => () => { if (timerRef.current) window.clearInterval(timerRef.current); }, []);
  useEffect(() => {
    if (!playing) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(words.length);
      setPlaying(false);
      return;
    }
    timerRef.current = window.setInterval(() => {
      setShown((n) => {
        if (n >= words.length) {
          if (timerRef.current) window.clearInterval(timerRef.current);
          setPlaying(false);
          return n;
        }
        return n + 1;
      });
    }, speed.ms);
    return () => { if (timerRef.current) window.clearInterval(timerRef.current); };
  }, [playing, speed, words.length]);

  const done = shown >= words.length;
  const progress = Math.round((shown / words.length) * 100);

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 space-y-2.5 text-xs">
      <div className="min-h-[72px] font-mono text-xs leading-relaxed text-slate-800 dark:text-slate-200">
        {words.slice(0, shown).join(' ')}
        {!done && <span className="inline-block w-1.5 h-3.5 ml-0.5 align-middle animate-pulse" style={{ backgroundColor: palette.hex }} />}
        {shown === 0 && <span className="text-slate-400">Press play to stream the answer.</span>}
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="Streaming progress">
          <div className={`h-full ${palette.bg} transition-all`} style={{ width: `${progress}%` }} />
        </div>
        <span className="font-mono text-[11px] text-slate-400 w-12 text-right">{shown}/{words.length}</span>
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        <button
          type="button"
          onClick={() => { if (done) setShown(0); setPlaying((p) => !p); }}
          aria-label={playing ? 'Pause streaming' : 'Play streaming'}
          className={`min-h-[44px] px-4 inline-flex items-center gap-1.5 rounded-lg text-white font-semibold cursor-pointer ${palette.bg}`}
        >
          {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          {playing ? 'Pause' : done ? 'Replay' : 'Play'}
        </button>
        <button type="button" onClick={() => { setShown(0); setPlaying(false); }} aria-label="Restart streaming" className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer"><RotateCcw className="w-4 h-4" /></button>
        <div className="ml-auto flex gap-1">
          {SPEEDS.map((s) => (
            <button key={s.id} type="button" onClick={() => setSpeed(s)} aria-pressed={speed.id === s.id} className={`min-h-[36px] px-2.5 rounded-lg font-semibold cursor-pointer ${speed.id === s.id ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
