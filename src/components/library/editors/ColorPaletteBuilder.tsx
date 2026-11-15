// @jxui/react v3.0.0 — ColorPaletteBuilder (JXUI v3.0 Unified Component Suite)
import React, { useState, useMemo } from 'react';
import { Check, Copy } from 'lucide-react';

// 12. ColorPaletteBuilder — pick a base colour and a harmony, get a 5-step
// palette. Click a swatch to copy its hex value.
type Harmony = 'analogous' | 'complementary' | 'triadic' | 'monochrome';
const HARMONIES: { id: Harmony; label: string; offsets: number[] }[] = [
  { id: 'analogous', label: 'Analogous', offsets: [-30, -15, 0, 15, 30] },
  { id: 'complementary', label: 'Complementary', offsets: [0, 0, 180, 180, 0] },
  { id: 'triadic', label: 'Triadic', offsets: [0, 120, 240, 60, 180] },
  { id: 'monochrome', label: 'Monochrome', offsets: [0, 0, 0, 0, 0] },
];

function hexToHsl(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  const r = ((n >> 16) & 255) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  const h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return [h * 60, s, l];
}
function hslToHex(h: number, s: number, l: number): string {
  const hh = (((h % 360) + 360) % 360) / 360;
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const f = (t: number) => {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  const to = (v: number) => Math.round(v * 255).toString(16).padStart(2, '0');
  return `#${to(f(hh + 1 / 3))}${to(f(hh))}${to(f(hh - 1 / 3))}`;
}

export const ColorPaletteBuilder: React.FC = () => {
  const [base, setBase] = useState('#4f46e5');
  const [harmony, setHarmony] = useState<Harmony>('analogous');
  const [copied, setCopied] = useState<string | null>(null);

  const swatches = useMemo(() => {
    const [h, s, l] = hexToHsl(base);
    const def = HARMONIES.find((x) => x.id === harmony) ?? HARMONIES[0];
    const lightness = [0.32, 0.45, 0.55, 0.68, 0.8];
    return def.offsets.map((off, i) => {
      const sat = harmony === 'monochrome' ? s * (0.4 + i * 0.15) : s;
      const light = harmony === 'monochrome' ? lightness[i] : Math.min(0.85, Math.max(0.25, l + (i - 2) * 0.09));
      return hslToHex(h + off, sat, light);
    });
  }, [base, harmony]);

  const copy = async (hex: string) => {
    try { await navigator.clipboard.writeText(hex); } catch { /* clipboard unavailable */ }
    setCopied(hex);
    setTimeout(() => setCopied((c) => (c === hex ? null : c)), 1200);
  };

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 space-y-3 text-xs">
      <div className="flex flex-wrap items-center gap-2">
        <input type="color" value={base} onChange={(e) => setBase(e.target.value)} aria-label="Base colour" className="w-11 h-11 min-h-[44px] min-w-[44px] rounded-lg cursor-pointer bg-transparent" />
        <input
          value={base}
          onChange={(e) => { if (/^#[0-9a-fA-F]{0,6}$/.test(e.target.value)) setBase(e.target.value); }}
          aria-label="Base colour hex"
          className="w-24 min-h-[36px] px-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent font-mono text-slate-800 dark:text-slate-200"
        />
        <div className="flex flex-wrap gap-1">
          {HARMONIES.map((h) => (
            <button key={h.id} type="button" onClick={() => setHarmony(h.id)} aria-pressed={harmony === h.id} className={`min-h-[36px] px-2.5 rounded-lg border font-semibold cursor-pointer ${harmony === h.id ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'}`}>
              {h.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {swatches.map((hex) => (
          <button key={hex} type="button" onClick={() => copy(hex)} aria-label={`Copy colour ${hex}`} className="group rounded-lg overflow-hidden cursor-pointer text-left">
            <span className="block h-14 w-full" style={{ backgroundColor: hex }} />
            <span className="mt-1 flex items-center gap-1 font-mono text-[11px] text-slate-600 dark:text-slate-300">
              {copied === hex ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3 text-slate-400" />}
              {hex}
            </span>
          </button>
        ))}
      </div>
      <p className="text-[11px] text-slate-400">Harmonious palette generated from {base} · {HARMONIES.find((h) => h.id === harmony)?.label} · click a swatch to copy</p>
    </div>
  );
};
