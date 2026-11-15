// @jxui/react v3.0.0 — ParticleLoader (JXUI v3.0 Unified Component Suite)
import React, { useRef, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 4. ParticleLoader — a real canvas particle system: 24 particles orbit a
// centre, trailing and pulsing as they go. Draws one static frame under
// prefers-reduced-motion; cleans up the animation frame on unmount.
const COUNT = 24;

export const ParticleLoader: React.FC = () => {
  const { palette } = useJXTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = window.devicePixelRatio || 1;
    const w = 96;
    const h = 48;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);
    const cx = w / 2;
    const cy = h / 2;
    let raf = 0;

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < COUNT; i++) {
        const angle = (i / COUNT) * Math.PI * 2 + t / 900;
        const radius = 14 + Math.sin(t / 500 + i * 0.7) * 5;
        const x = cx + Math.cos(angle) * radius * 1.6;
        const y = cy + Math.sin(angle) * radius * 0.6;
        const r = 1.5 + Math.sin(t / 300 + i) * 0.8;
        ctx.beginPath();
        ctx.arc(x, y, Math.max(0.5, r), 0, Math.PI * 2);
        ctx.fillStyle = i % 3 === 0 ? '#7c3aed' : i % 3 === 1 ? '#059669' : palette.hex;
        ctx.globalAlpha = 0.45 + 0.55 * ((i % 5) / 4);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = palette.hex;
      ctx.fill();
    };

    if (reduced) {
      draw(0);
      return;
    }
    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [palette.hex]);

  return (
    <div className="flex items-center gap-2" role="status" aria-label="Loading, particles">
      <canvas ref={canvasRef} className="w-24 h-12" aria-hidden="true" />
      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Particles…</span>
    </div>
  );
};
