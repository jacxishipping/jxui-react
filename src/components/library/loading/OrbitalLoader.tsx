// @jxui/react v3.0.0 — OrbitalLoader (JXUI v3.0 Unified Component Suite)
import React from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 3. OrbitalLoader — three satellites on three orbits around a core, each
// ring spinning at its own speed. Static (no spin) under
// prefers-reduced-motion via the global reduced-motion rule.
const ORBITS = [
  { size: 56, duration: '1.6s', dot: 8, color: 'accent', offset: 0 },
  { size: 40, duration: '1.1s', dot: 6, color: '#7c3aed', offset: 120 },
  { size: 26, duration: '0.8s', dot: 5, color: '#059669', offset: 240 },
];

export const OrbitalLoader: React.FC = () => {
  const { palette } = useJXTheme();
  return (
    <div className="flex items-center gap-3" role="status" aria-label="Loading, orbital spinner">
      <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: palette.hex }} />
        {ORBITS.map((o) => (
          <div
            key={o.size}
            className="absolute rounded-full border border-slate-200 dark:border-slate-800 animate-spin"
            style={{ width: o.size, height: o.size, animationDuration: o.duration }}
          >
            <div
              className="absolute rounded-full"
              style={{
                width: o.dot,
                height: o.dot,
                backgroundColor: o.color === 'accent' ? palette.hex : o.color,
                top: -o.dot / 2,
                left: `calc(50% - ${o.dot / 2}px)`,
                transform: `rotate(${o.offset}deg)`,
                transformOrigin: `${o.dot / 2}px ${o.size / 2 + o.dot / 2}px`,
              }}
            />
          </div>
        ))}
      </div>
      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Orbiting…</span>
    </div>
  );
};
