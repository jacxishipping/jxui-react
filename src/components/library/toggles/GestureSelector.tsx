// @jxui/react v3.0.0 — GestureSelector (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 14. GestureSelector — a real drag-to-toggle: drag the handle (pointer
// events) left or right past the midpoint to switch it off or on, or just
// click the track. The thumb follows the pointer while dragging.
export const GestureSelector: React.FC = () => {
  const [on, setOn] = useState(false);
  const [dragX, setDragX] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { palette } = useJXTheme();

  const setFromClientX = (clientX: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const frac = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    setDragX(frac);
  };

  const endDrag = () => {
    if (dragX !== null) setOn(dragX > 0.5);
    setDragX(null);
  };

  // Thumb position: while dragging it follows the pointer, otherwise it
  // rests at the on/off end.
  const frac = dragX !== null ? dragX : on ? 1 : 0;

  return (
    <div className="w-full flex flex-col gap-1.5">
      <div
        ref={trackRef}
        role="switch"
        aria-checked={on}
        aria-label="Gesture selector"
        tabIndex={0}
        onClick={() => setOn((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            setOn((o) => !o);
          } else if (e.key === 'ArrowRight') setOn(true);
          else if (e.key === 'ArrowLeft') setOn(false);
        }}
        onPointerDown={(e) => {
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (dragX !== null) setFromClientX(e.clientX);
        }}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="relative w-full max-w-[220px] h-11 min-h-[44px] rounded-full cursor-pointer select-none touch-none transition-colors"
        style={{ backgroundColor: on ? palette.hex : undefined }}
      >
        <div className="absolute inset-0 rounded-full bg-slate-200 dark:bg-slate-800 -z-10" aria-hidden="true" />
        <div
          className="absolute top-1 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-xs font-bold text-slate-700"
          style={{ left: `calc(4px + ${frac} * (100% - 44px))` }}
        >
          {on ? 'ON' : 'OFF'}
        </div>
      </div>
      <span className="text-[11px] font-mono text-slate-400">
        {dragX !== null ? 'Dragging…' : on ? 'On — drag left or press ← to turn off' : 'Off — drag right or press → to turn on'}
      </span>
    </div>
  );
};
