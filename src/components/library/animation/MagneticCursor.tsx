// @jxui/react v3.0.0 — MagneticCursor (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles } from 'lucide-react';

// 8. MagneticCursor — a cursor ring that is magnetically attracted to the
// nearest target inside its pad: within range it snaps onto the target,
// otherwise it trails the pointer. The snapped target is named below.
const TARGETS = [
  { id: 'home', label: 'Home', x: 18, y: 50 },
  { id: 'search', label: 'Search', x: 50, y: 50 },
  { id: 'settings', label: 'Settings', x: 82, y: 50 },
];

export const MagneticCursor: React.FC = () => {
  const { palette } = useJXTheme();
  const padRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 50, y: 50 });
  const pos = useRef({ x: 50, y: 50 });
  const [snapped, setSnapped] = useState<string | null>(null);

  useEffect(() => {
    const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    const loop = () => {
      const rect = padRef.current?.getBoundingClientRect();
      if (rect) {
        const tx = (target.current.x / 100) * rect.width;
        const ty = (target.current.y / 100) * rect.height;
        let best: { x: number; y: number; label: string } | null = null;
        let bestDist = 56;
        for (const t of TARGETS) {
          const px = (t.x / 100) * rect.width;
          const py = (t.y / 100) * rect.height;
          const d = Math.hypot(tx - px, ty - py);
          if (d < bestDist) {
            bestDist = d;
            best = { x: t.x, y: t.y, label: t.label };
          }
        }
        const goal = best ? { x: best.x, y: best.y } : target.current;
        setSnapped((prev) => {
          const next = best ? best.label : null;
          return prev === next ? prev : next;
        });
        if (reduced) {
          pos.current = { ...goal };
        } else {
          pos.current.x += (goal.x - pos.current.x) * 0.22;
          pos.current.y += (goal.y - pos.current.y) * 0.22;
        }
      }
      const ring = ringRef.current;
      if (ring && padRef.current) {
        const rect = padRef.current.getBoundingClientRect();
        ring.style.transform = `translate(${(pos.current.x / 100) * rect.width - 14}px, ${(pos.current.y / 100) * rect.height - 14}px) scale(${snapped ? 1.35 : 1})`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [snapped]);

  return (
    <div className="w-full space-y-2">
      <div
        ref={padRef}
        className="relative w-full h-24 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 overflow-hidden cursor-none"
        onMouseMove={(e) => {
          const rect = padRef.current?.getBoundingClientRect();
          if (!rect) return;
          target.current = { x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 };
        }}
      >
        {TARGETS.map((t) => (
          <div
            key={t.id}
            className={`absolute w-11 h-11 min-h-[44px] min-w-[44px] -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors ${
              snapped === t.label ? 'text-white' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
            }`}
            style={{ left: `${t.x}%`, top: `${t.y}%`, backgroundColor: snapped === t.label ? palette.hex : undefined }}
          >
            {t.label.slice(0, 2)}
          </div>
        ))}
        <div
          ref={ringRef}
          aria-hidden="true"
          className="absolute top-0 left-0 w-7 h-7 rounded-full border-2 pointer-events-none"
          style={{ borderColor: palette.hex }}
        />
      </div>
      <span className="text-xs font-medium text-slate-600 dark:text-slate-300 inline-flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5" style={{ color: palette.hex }} />
        Magnetic cursor snapping{snapped ? ` · snapped to ${snapped}` : ' · move over the pad'}
      </span>
    </div>
  );
};
