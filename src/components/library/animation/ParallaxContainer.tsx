// @jxui/react v3.0.0 — ParallaxContainer (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 7. ParallaxContainer — three depth planes (sky, mountains, foreground
// card) that translate at different rates as the pointer moves, so the
// scene has real depth. A depth slider scales the effect.
export const ParallaxContainer: React.FC = () => {
  const { palette } = useJXTheme();
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [depth, setDepth] = useState(1);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setOffset({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  const layer = (factor: number) => ({
    transform: `translate(${offset.x * 24 * factor * depth}px, ${offset.y * 16 * factor * depth}px)`,
  });

  return (
    <div className="w-full space-y-2">
      <div
        ref={ref}
        className="relative w-full h-32 rounded-xl overflow-hidden cursor-crosshair"
        onMouseMove={handleMove}
        onMouseLeave={() => setOffset({ x: 0, y: 0 })}
        style={{ background: `linear-gradient(180deg, ${palette.hex}33, #0f172a)` }}
      >
        <div className="absolute -inset-6 transition-transform duration-150 ease-out" style={layer(0.3)}>
          <div className="absolute top-3 left-6 w-10 h-10 rounded-full bg-amber-300/80" />
          <div className="absolute top-6 right-10 w-16 h-4 rounded-full bg-white/20" />
          <div className="absolute top-12 left-1/2 w-20 h-4 rounded-full bg-white/10" />
        </div>
        <div className="absolute -inset-6 transition-transform duration-150 ease-out" style={layer(0.7)}>
          <div className="absolute bottom-0 left-0 right-0 h-14" style={{ background: `linear-gradient(180deg, transparent, ${palette.hex}88)`, clipPath: 'polygon(0 100%, 0 45%, 22% 10%, 45% 55%, 68% 15%, 100% 60%, 100% 100%)' }} />
        </div>
        <div className="absolute -inset-6 transition-transform duration-150 ease-out" style={layer(1.4)}>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-2 text-center shadow-lg">
            <div className="text-xs font-bold text-slate-900 dark:text-white">Parallax Depth Plane</div>
            <div className="font-mono text-[10px] text-slate-500">depth {depth.toFixed(1)}× · move your cursor</div>
          </div>
        </div>
      </div>
      <label className="flex items-center gap-2 text-xs text-slate-500">
        Depth
        <input
          type="range"
          min={0}
          max={2}
          step={0.1}
          value={depth}
          onChange={(e) => setDepth(Number(e.target.value))}
          aria-label="Parallax depth"
          className="flex-1 accent-indigo-600"
        />
        <span className="font-mono w-8 text-right">{depth.toFixed(1)}×</span>
      </label>
    </div>
  );
};
