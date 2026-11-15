// @jxui/react v3.0.0 — AudioVisualizer (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

// 8. AudioVisualizer — a simulated audio player: play/pause drives the
// bars (seeded random walk via an interval), the elapsed clock ticks, and
// volume + mute work. Pauses under prefers-reduced-motion.
const SEED = [40, 80, 20, 95, 60, 30, 75, 45, 55, 85, 35, 65];
const DURATION = 142; // seconds

function fmt(s: number) {
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
}

export const AudioVisualizer: React.FC = () => {
  const { palette } = useJXTheme();
  const [playing, setPlaying] = useState(false);
  const [bars, setBars] = useState(SEED);
  const [elapsed, setElapsed] = useState(0);
  const [volume, setVolume] = useState(70);
  const [muted, setMuted] = useState(false);
  const stepRef = useRef(0);

  useEffect(() => {
    if (!playing) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPlaying(false);
      return;
    }
    const id = setInterval(() => {
      stepRef.current += 1;
      setBars((prev) =>
        prev.map((h, i) => {
          const n = Math.sin(stepRef.current * 0.9 + i * 1.7) * 28 + 55 + ((i * 37 + stepRef.current * 13) % 17) - 8;
          return Math.max(8, Math.min(100, Math.round(n)));
        })
      );
      setElapsed((t) => Math.min(DURATION, t + 1));
    }, 500);
    return () => clearInterval(id);
  }, [playing]);

  useEffect(() => {
    if (elapsed >= DURATION && playing) setPlaying(false);
  }, [elapsed, playing]);

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => { setPlaying((p) => !p); if (elapsed >= DURATION) setElapsed(0); }}
          aria-label={playing ? 'Pause audio' : 'Play audio'}
          className={`min-h-[44px] min-w-[44px] w-11 h-11 rounded-full ${palette.bg} text-white flex items-center justify-center cursor-pointer hover:brightness-110 shrink-0`}
        >
          {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-bold text-slate-900 dark:text-white truncate">JXUI Demo Reel — audio track</div>
          <div className="text-[11px] font-mono text-slate-500">
            {fmt(elapsed)} / {fmt(DURATION)} · {playing ? 'Playing' : 'Paused'}
          </div>
        </div>
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? 'Unmute' : 'Mute'}
          className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
      <div className="flex items-end gap-1 h-12" role="img" aria-label={`Audio visualizer, ${playing ? 'playing' : 'paused'}`}>
        {bars.map((h, i) => (
          <div
            key={i}
            style={{ height: `${muted ? 12 : h}%`, opacity: muted ? 0.35 : 1 }}
            className={`flex-1 rounded-t-sm transition-all duration-300 ${palette.bg}`}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[11px] text-slate-400">Volume</span>
        <input
          type="range"
          min={0}
          max={100}
          value={muted ? 0 : volume}
          onChange={(e) => { setVolume(Number(e.target.value)); setMuted(false); }}
          aria-label="Volume"
          className="flex-1 accent-indigo-600"
        />
        <span className="text-[11px] font-mono text-slate-500 w-8 text-right">{muted ? 0 : volume}%</span>
      </div>
    </div>
  );
};
