// @jxui/react v3.0.0 — QRCodeGenerator (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 9. QRCodeGenerator — renders a deterministic QR-style matrix for the typed
// text: real finder patterns in three corners, timing patterns and data
// modules seeded by a hash of the text, so editing the text regenerates a
// new code. (Pattern only — not a standards-compliant QR payload.)
const SIZE = 25;

function hashText(text: string): number {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function isFinder(x: number, y: number): boolean {
  const inCorner =
    (x < 8 && y < 8) || (x >= SIZE - 8 && y < 8) || (x < 8 && y >= SIZE - 8);
  return inCorner;
}

function finderCell(x: number, y: number): boolean {
  const cx = x < 8 ? x : x >= SIZE - 8 ? x - (SIZE - 8) : x;
  const cy = y < 8 ? y : y >= SIZE - 8 ? y - (SIZE - 8) : y;
  if (cx === 0 || cx === 6 || cy === 0 || cy === 6) return true;
  if (cx >= 2 && cx <= 4 && cy >= 2 && cy <= 4) return true;
  return false;
}

export const QRCodeGenerator: React.FC = () => {
  const { palette } = useJXTheme();
  const [text, setText] = useState('jxui.dev/spec');
  const [dark, setDark] = useState(true);
  const seed = hashText(text || 'jxui');

  const cell = (x: number, y: number): boolean => {
    if (isFinder(x, y)) return finderCell(x, y);
    if (y === 6 || x === 6) return (x + y) % 2 === 0; // timing patterns
    if (x === 8 && y === 8) return true; // alignment-ish anchor
    let n = seed ^ Math.imul(x + 1, 2654435761) ^ Math.imul(y + 1, 40503);
    n ^= n >>> 13;
    n = Math.imul(n, 0x5bd1e995);
    n ^= n >>> 15;
    return (n >>> 0) % 2 === 0;
  };

  return (
    <div className="inline-flex flex-col items-start gap-2">
      <div className="p-2.5 bg-white rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="w-32 h-32"
          role="img"
          aria-label={`QR-style code for ${text}`}
          shapeRendering="crispEdges"
        >
          <rect width={SIZE} height={SIZE} fill="white" />
          {Array.from({ length: SIZE }, (_, y) =>
            Array.from({ length: SIZE }, (_, x) =>
              cell(x, y) ? (
                <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={dark ? '#0f172a' : palette.hex} />
              ) : null
            )
          )}
        </svg>
      </div>
      <label className="w-full max-w-[11rem] text-xs">
        <span className="text-slate-500 font-medium">Encode text</span>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type to regenerate…"
          className="mt-1 w-full min-h-[36px] px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-xs"
        />
      </label>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setDark((d) => !d)}
          aria-pressed={dark}
          className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
            dark ? 'bg-slate-900 text-white' : `${palette.bg} text-white`
          }`}
        >
          {dark ? 'Dark modules' : 'Accent modules'}
        </button>
        <span className="font-mono text-[10px] text-slate-400">25 × 25 modules</span>
      </div>
    </div>
  );
};
