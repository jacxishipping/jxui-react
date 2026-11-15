// @jxui/react v3.0.0 — UploadProgress (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { UploadCloud, Check } from 'lucide-react';

// 14. UploadProgress — a simulated upload: the byte counter, percentage
// bar and transfer speed all advance on a timer. Pause/resume and restart
// work; completes instantly under prefers-reduced-motion.
const TOTAL_MB = 4.0;

export const UploadProgress: React.FC = () => {
  const { palette } = useJXTheme();
  const [uploaded, setUploaded] = useState(0);
  const [paused, setPaused] = useState(false);
  const done = uploaded >= TOTAL_MB;

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setUploaded(TOTAL_MB);
      return;
    }
    if (paused || done) return;
    const id = setInterval(() => {
      setUploaded((u) => Math.min(TOTAL_MB, u + 0.08));
    }, 100);
    return () => clearInterval(id);
  }, [paused, done]);

  const pct = Math.round((uploaded / TOTAL_MB) * 100);
  return (
    <div className="w-full max-w-64 space-y-2">
      <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
        {done ? (
          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
        ) : (
          <UploadCloud className="w-4 h-4 shrink-0 animate-bounce" style={{ color: palette.hex }} />
        )}
        <span className="font-mono">
          {uploaded.toFixed(1)} MB / {TOTAL_MB.toFixed(1)} MB ({pct}%)
        </span>
        <span className="ml-auto font-mono text-[11px] text-slate-400">{done ? 'Complete' : paused ? 'Paused' : '0.8 MB/s'}</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Upload progress">
        <div className="h-full rounded-full transition-all duration-100" style={{ width: `${pct}%`, backgroundColor: done ? '#059669' : palette.hex }} />
      </div>
      <div className="flex gap-1.5">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          disabled={done}
          className="min-h-[36px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-200 cursor-pointer disabled:opacity-50"
        >
          {paused ? 'Resume' : 'Pause'}
        </button>
        <button
          type="button"
          onClick={() => {
            setUploaded(0);
            setPaused(false);
          }}
          className="min-h-[36px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
        >
          Restart upload
        </button>
      </div>
    </div>
  );
};
