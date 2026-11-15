// @jxui/react v3.0.0 — CursorFollower (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 9. CursorFollower — a trailing radial halo that really follows the
// pointer inside its pad, lerped with requestAnimationFrame for a trailing
// feel. Under reduced motion the halo jumps straight to the pointer.
export const CursorFollower: React.FC = () => {
  const { palette } = useJXTheme();
  const padRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 50, y: 50 });
  const pos = useRef({ x: 50, y: 50 });
  const [coords, setCoords] = useState({ x: 50, y: 50 });
  const [inside, setInside] = useState(false);

  useEffect(() => {
    const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    const loop = () => {
      if (reduced) {
        pos.current = { ...target.current };
      } else {
        pos.current.x += (target.current.x - pos.current.x) * 0.18;
        pos.current.y += (target.current.y - pos.current.y) * 0.18;
      }
      const halo = haloRef.current;
      if (halo) {
        halo.style.transform = `translate(${pos.current.x - 40}px, ${pos.current.y - 40}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={padRef}
      className="relative w-full h-28 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 overflow-hidden cursor-crosshair"
      onMouseMove={(e) => {
        const rect = padRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        target.current = { x, y };
        setCoords({ x: Math.round(x), y: Math.round(y) });
      }}
      onMouseEnter={() => setInside(true)}
      onMouseLeave={() => setInside(false)}
    >
      <div
        ref={haloRef}
        aria-hidden="true"
        className="absolute top-0 left-0 w-20 h-20 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${palette.hex}66 0%, ${palette.hex}22 45%, transparent 70%)`,
          opacity: inside ? 1 : 0,
          transition: 'opacity 200ms',
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 pointer-events-none">
        <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Trailing Radial Ambient Halo</span>
        <span className="font-mono text-[11px] text-slate-500">
          {inside ? `cursor at ${coords.x}, ${coords.y}` : 'Move your cursor over this pad'}
        </span>
      </div>
    </div>
  );
};
