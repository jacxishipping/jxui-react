// @jxui/react v3.0.0 — ResizablePanel (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 11. ResizablePanel — drag the corner handle to resize the panel for real;
// the live dimensions are shown and a reset button restores the default.
export const ResizablePanel: React.FC = () => {
  const { palette } = useJXTheme();
  const [size, setSize] = useState({ w: 240, h: 120 });
  const dragRef = useRef<{ startX: number; startY: number; w: number; h: number } | null>(null);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragRef.current = { startX: e.clientX, startY: e.clientY, w: size.w, h: size.h };
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;
    setSize({
      w: Math.max(160, Math.min(420, dragRef.current.w + (e.clientX - dragRef.current.startX))),
      h: Math.max(80, Math.min(240, dragRef.current.h + (e.clientY - dragRef.current.startY))),
    });
  };
  const onPointerUp = () => {
    dragRef.current = null;
  };

  return (
    <div className="w-full space-y-2">
      <div
        className="relative p-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs overflow-hidden"
        style={{ width: size.w, height: size.h, maxWidth: '100%' }}
      >
        <span className="font-semibold text-slate-800 dark:text-slate-200">Resizable Panel</span>
        <p className="text-slate-500 mt-1">Drag the corner handle to resize.</p>
        <p className="font-mono text-[11px] text-slate-400 mt-1">
          {Math.round(size.w)} × {Math.round(size.h)} px
        </p>
        <div
          role="separator"
          aria-label="Resize panel"
          aria-orientation="horizontal"
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') setSize((s) => ({ ...s, w: Math.min(420, s.w + 10) }));
            if (e.key === 'ArrowLeft') setSize((s) => ({ ...s, w: Math.max(160, s.w - 10) }));
            if (e.key === 'ArrowDown') setSize((s) => ({ ...s, h: Math.min(240, s.h + 10) }));
            if (e.key === 'ArrowUp') setSize((s) => ({ ...s, h: Math.max(80, s.h - 10) }));
          }}
          className="absolute bottom-1 right-1 w-8 h-8 flex items-end justify-end cursor-nwse-resize touch-none"
        >
          <span className="w-2.5 h-2.5 border-r-2 border-b-2 border-slate-400" />
        </div>
      </div>
      <button
        type="button"
        onClick={() => setSize({ w: 240, h: 120 })}
        className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${palette.softBg} ${palette.text}`}
      >
        Reset size
      </button>
    </div>
  );
};
