// @jxui/react v3.0.0 — ResizableGridItem (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';

// 11. ResizableGridItem — drag the south-east handle (pointer events) to
// resize the grid item; its live dimensions are shown inside.
export const ResizableGridItem: React.FC = () => {
  const [size, setSize] = useState({ w: 160, h: 88 });
  const startRef = useRef<{ x: number; y: number; w: number; h: number } | null>(null);

  const onMove = (e: React.PointerEvent) => {
    const s = startRef.current;
    if (!s) return;
    setSize({
      w: Math.max(96, Math.min(320, s.w + (e.clientX - s.x))),
      h: Math.max(56, Math.min(200, s.h + (e.clientY - s.y))),
    });
  };
  const end = () => { startRef.current = null; };

  return (
    <div className="w-full">
      <div
        className="relative border rounded-xl bg-white dark:bg-slate-900 overflow-hidden"
        style={{ width: size.w, height: size.h, maxWidth: '100%' }}
      >
        <div className="p-2 text-xs">
          <div className="font-semibold text-slate-800 dark:text-slate-200">Grid Item</div>
          <div className="font-mono text-slate-500">{Math.round(size.w)} × {Math.round(size.h)} px</div>
        </div>
        <div
          role="slider"
          aria-label="Resize grid item"
          aria-valuenow={Math.round(size.w)}
          aria-valuemin={96}
          aria-valuemax={320}
          tabIndex={0}
          onPointerDown={(e) => { startRef.current = { x: e.clientX, y: e.clientY, w: size.w, h: size.h }; (e.target as HTMLElement).setPointerCapture(e.pointerId); }}
          onPointerMove={onMove}
          onPointerUp={end}
          onPointerCancel={end}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') setSize((s) => ({ ...s, w: Math.min(320, s.w + 8) }));
            if (e.key === 'ArrowLeft') setSize((s) => ({ ...s, w: Math.max(96, s.w - 8) }));
            if (e.key === 'ArrowDown') setSize((s) => ({ ...s, h: Math.min(200, s.h + 8) }));
            if (e.key === 'ArrowUp') setSize((s) => ({ ...s, h: Math.max(56, s.h - 8) }));
          }}
          className="absolute bottom-0 right-0 w-5 h-5 bg-slate-400 dark:bg-slate-600 cursor-se-resize rounded-tl-lg touch-none"
        />
      </div>
      <p className="mt-1.5 text-[11px] text-slate-500">Drag the corner handle (or focus it and use arrow keys).</p>
    </div>
  );
};
