// @jxui/react v3.0.0 — HoverDistortion (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 14. HoverDistortion — a surface that really distorts under the pointer:
// perspective tilt follows the cursor, a displaced gradient layer shifts
// against the base, and the wave strength reads out live.
export const HoverDistortion: React.FC = () => {
  const { palette } = useJXTheme();
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, strength: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: ny * -14, y: nx * 14, strength: Math.round(Math.hypot(nx, ny) * 200) });
  };

  return (
    <div
      ref={ref}
      className="relative w-full h-28 rounded-xl overflow-hidden cursor-pointer"
      style={{ perspective: '600px' }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setTilt({ x: 0, y: 0, strength: 0 });
      }}
    >
      <div
        className="absolute inset-0 transition-transform duration-150 ease-out"
        style={{
          background: `linear-gradient(135deg, ${palette.hex}, #7c3aed 55%, #ec4899)`,
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovering ? 1.04 : 1})`,
        }}
      />
      <div
        className="absolute inset-0 transition-transform duration-150 ease-out opacity-40"
        style={{
          background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.35) 0 2px, transparent 2px 14px)',
          transform: `translateX(${tilt.y * 1.5}px) translateY(${tilt.x * 1.5}px)`,
        }}
      />
      <div className="relative h-full flex flex-col items-center justify-center text-white">
        <span className="text-xs font-bold drop-shadow">Wave displacement</span>
        <span className="font-mono text-[11px] opacity-90">
          {hovering ? `tilt ${tilt.x.toFixed(0)}° / ${tilt.y.toFixed(0)}° · distortion ${tilt.strength}%` : 'Hover to distort the surface'}
        </span>
      </div>
    </div>
  );
};
