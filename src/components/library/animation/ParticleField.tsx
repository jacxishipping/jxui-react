// @jxui/react v3.0.0 — ParticleField (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 12. ParticleField — a real canvas particle field: particles drift and
// bounce, and lines connect neighbours within range. Density is adjustable
// and the field pauses; one static frame under prefers-reduced-motion.
type P = { x: number; y: number; vx: number; vy: number; r: number };

function seededParticles(count: number, w: number, h: number): P[] {
  let seed = 42;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  return Array.from({ length: count }, () => ({
    x: rand() * w,
    y: rand() * h,
    vx: (rand() - 0.5) * 0.5,
    vy: (rand() - 0.5) * 0.5,
    r: 1 + rand() * 1.8,
  }));
}

export const ParticleField: React.FC = () => {
  const { palette } = useJXTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [density, setDensity] = useState(45);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = window.devicePixelRatio || 1;
    const w = 280;
    const h = 110;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);
    const parts = seededParticles(density, w, h);
    let raf = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const dx = parts[i].x - parts[j].x;
          const dy = parts[i].y - parts[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 42) {
            ctx.beginPath();
            ctx.moveTo(parts[i].x, parts[i].y);
            ctx.lineTo(parts[j].x, parts[j].y);
            ctx.strokeStyle = palette.hex;
            ctx.globalAlpha = (1 - d / 42) * 0.25;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      for (const p of parts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = palette.hex;
        ctx.fill();
      }
    };

    const step = () => {
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      draw();
    };

    if (reduced || paused) {
      draw();
      return;
    }
    const loop = () => {
      step();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [density, paused, palette.hex]);

  return (
    <div className="w-full space-y-2">
      <canvas ref={canvasRef} className="w-full h-28 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" aria-label="Particle field" role="img" />
      <div className="flex items-center gap-2">
        <label className="flex flex-1 items-center gap-2 text-xs text-slate-500">
          Density
          <input
            type="range"
            min={15}
            max={70}
            step={5}
            value={density}
            onChange={(e) => setDensity(Number(e.target.value))}
            aria-label="Particle density"
            className="flex-1 accent-indigo-600"
          />
          <span className="font-mono w-6 text-right">{density}</span>
        </label>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          className="min-h-[36px] px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
        >
          {paused ? 'Resume' : 'Pause'}
        </button>
      </div>
    </div>
  );
};
