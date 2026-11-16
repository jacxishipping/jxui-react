// @jxui/react v3.0.0 — QRCodeGenerator (JXUI v3.0 Unified Component Suite)
import React, { useMemo, useState } from 'react';
import QRCode from 'qrcode';
import { useJXTheme } from '../../../context/JXThemeContext';

// 9. QRCodeGenerator — renders a real, standards-compliant QR code for the
// typed text using the `qrcode` encoder (byte mode, auto version, selectable
// error-correction level). The matrix is drawn as SVG with the required
// 4-module quiet zone, so it scans with a phone camera. Editing the text
// regenerates a new code; text that is empty or too long for QR version 40
// shows an error instead of a fake pattern.
const QUIET_ZONE = 4;
const LEVELS = ['L', 'M', 'Q', 'H'] as const;
type ECLevel = (typeof LEVELS)[number];

export const QRCodeGenerator: React.FC = () => {
  const { palette } = useJXTheme();
  const [text, setText] = useState('jxui.dev/spec');
  const [dark, setDark] = useState(true);
  const [level, setLevel] = useState<ECLevel>('M');

  const qr = useMemo(() => {
    if (!text) return { error: 'Type something to encode.' as string | null, code: null };
    try {
      const code = QRCode.create(text, { errorCorrectionLevel: level });
      return { error: null, code };
    } catch {
      return {
        error: 'Text is too long for a QR code (max ~2,953 bytes). Shorten it.',
        code: null,
      };
    }
  }, [text, level]);

  const size = qr.code?.modules.size ?? 0;
  const viewSize = size + QUIET_ZONE * 2;
  const fill = dark ? '#0f172a' : palette.hex;

  return (
    <div className="inline-flex flex-col items-start gap-2">
      <div className="p-2.5 bg-white rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {qr.code ? (
          <svg
            viewBox={`0 0 ${viewSize} ${viewSize}`}
            className="w-32 h-32"
            role="img"
            aria-label={`QR code for ${text}`}
            shapeRendering="crispEdges"
          >
            <rect width={viewSize} height={viewSize} fill="white" />
            {Array.from({ length: size }, (_, y) =>
              Array.from({ length: size }, (_, x) =>
                qr.code!.modules.data[y * size + x] ? (
                  <rect
                    key={`${x}-${y}`}
                    x={x + QUIET_ZONE}
                    y={y + QUIET_ZONE}
                    width={1}
                    height={1}
                    fill={fill}
                  />
                ) : null
              )
            )}
          </svg>
        ) : (
          <div className="w-32 h-32 flex items-center justify-center px-3 text-center text-xs text-slate-500">
            {qr.error}
          </div>
        )}
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
        <label className="flex items-center gap-1 text-xs text-slate-500">
          <span>EC</span>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value as ECLevel)}
            aria-label="Error correction level"
            className="min-h-[36px] px-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-semibold cursor-pointer"
          >
            {LEVELS.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </label>
      </div>
      <span className="font-mono text-[10px] text-slate-400">
        {qr.code
          ? `Version ${qr.code.version} · ${size} × ${size} modules · EC ${level}`
          : 'No code — see above'}
      </span>
    </div>
  );
};
