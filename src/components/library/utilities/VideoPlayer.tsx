// @jxui/react v3.0.0 — VideoPlayer (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw } from 'lucide-react';

// 7. VideoPlayer — a simulated video player (no real media): play/pause
// advances the timeline and the animated backdrop, the seek bar is
// clickable, volume/mute work, and replay restarts from zero.
const DURATION = 96; // seconds, 1:36

function fmt(s: number) {
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
}

export const VideoPlayer: React.FC = () => {
  const { palette } = useJXTheme();
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [volume, setVolume] = useState(80);
  const [muted, setMuted] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [ended, setEnded] = useState(false);
  const seekRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!playing) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPlaying(false);
      return;
    }
    const id = setInterval(() => {
      setTime((t) => Math.min(DURATION, t + 0.5));
    }, 500);
    return () => clearInterval(id);
  }, [playing]);

  useEffect(() => {
    if (time >= DURATION && playing) {
      setPlaying(false);
      setEnded(true);
    }
  }, [time, playing]);

  const seek = (clientX: number) => {
    const el = seekRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    setTime(ratio * DURATION);
    setEnded(false);
  };

  const progress = (time / DURATION) * 100;

  return (
    <div className={`w-full ${maximized ? 'max-w-lg' : 'max-w-xs'} rounded-xl overflow-hidden bg-slate-950 text-white shadow-lg transition-all`}>
      <div className={`relative w-full ${maximized ? 'h-56' : 'h-32'} bg-gradient-to-br ${palette.gradient} flex items-center justify-center`}>
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden opacity-30">
          <div className={`absolute -left-6 top-4 w-24 h-24 rounded-full bg-white/40 blur-xl ${playing ? 'animate-pulse' : ''}`} />
          <div className={`absolute right-4 bottom-3 w-16 h-16 rounded-full bg-white/30 blur-lg ${playing ? 'animate-pulse' : ''}`} />
        </div>
        {ended ? (
          <button
            type="button"
            onClick={() => { setTime(0); setEnded(false); setPlaying(true); }}
            aria-label="Replay video"
            className="relative min-h-[44px] px-4 rounded-full bg-white/90 text-slate-900 font-bold text-xs inline-flex items-center gap-1.5 cursor-pointer hover:bg-white"
          >
            <RotateCcw className="w-4 h-4" /> Replay
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? 'Pause video' : 'Play video'}
            className="relative min-h-[44px] min-w-[44px] w-11 h-11 rounded-full bg-black/45 backdrop-blur flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
          >
            {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </button>
        )}
        <div className="absolute top-2 left-2 text-[10px] font-bold bg-black/40 px-1.5 py-0.5 rounded">JXUI Demo Reel</div>
        <div className="absolute top-2 right-2 text-[10px] bg-black/40 px-1.5 py-0.5 rounded">1080p60</div>
      </div>
      <div className="p-2.5 flex flex-col gap-2">
        <div
          ref={seekRef}
          role="slider"
          aria-label="Seek"
          aria-valuenow={Math.round(time)}
          aria-valuemin={0}
          aria-valuemax={DURATION}
          tabIndex={0}
          onClick={(e) => seek(e.clientX)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') setTime((t) => Math.max(0, t - 5));
            if (e.key === 'ArrowRight') setTime((t) => Math.min(DURATION, t + 5));
          }}
          className="w-full h-2 bg-slate-700 rounded-full cursor-pointer group"
        >
          <div style={{ width: `${progress}%` }} className={`h-full ${palette.bg} rounded-full group-hover:brightness-110`} />
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? 'Pause video' : 'Play video'}
            className="min-h-[36px] min-w-[36px] flex items-center justify-center cursor-pointer hover:bg-white/10 rounded-full"
          >
            {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <span className="text-[11px] font-mono text-slate-300" aria-live="off">
            {fmt(time)} / {fmt(DURATION)}
          </span>
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? 'Unmute' : 'Mute'}
            className="min-h-[36px] min-w-[36px] flex items-center justify-center cursor-pointer hover:bg-white/10 rounded-full"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <input
            type="range"
            min={0}
            max={100}
            value={muted ? 0 : volume}
            onChange={(e) => { setVolume(Number(e.target.value)); setMuted(false); }}
            aria-label="Volume"
            className="w-16"
          />
          <button
            type="button"
            onClick={() => setMaximized((m) => !m)}
            aria-label={maximized ? 'Exit fullscreen size' : 'Expand player'}
            className="ml-auto min-h-[36px] min-w-[36px] flex items-center justify-center cursor-pointer hover:bg-white/10 rounded-full"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
