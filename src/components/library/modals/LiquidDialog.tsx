// @jxui/react v3.0.0 — LiquidDialog (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X, Droplets, Check } from 'lucide-react';

// 2. LiquidDialog — trigger opens a dialog with a liquid gradient header
// and a fluid blob that reacts to the pointer; Confirm records the result.
export const LiquidDialog: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [open, setOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [blob, setBlob] = useState({ x: 50, y: 40 });
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open ]);

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => {
          setConfirmed(false);
          setOpen(true);
        }}
        className={`min-h-[44px] inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white ${palette.bg} ${palette.bgHover} ${getRadiusClass('control')} cursor-pointer`}
      >
        <Droplets className="w-3.5 h-3.5" />
        Open liquid dialog
      </button>
      {confirmed && (
        <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
          <Check className="w-3.5 h-3.5" /> Liquid dialog confirmed.
        </p>
      )}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Liquid viscous dialog"
            className={`w-full max-w-sm bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl border border-[var(--jx-accent-halo)] jx-elevation-2 ${getRadiusClass('card')} overflow-hidden`}
            onClick={(e) => e.stopPropagation()}
            onPointerMove={(e) => {
              const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
              setBlob({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
            }}
          >
            <div
              className={`relative p-5 bg-gradient-to-r ${palette.gradient} text-white overflow-hidden`}
            >
              <div
                className="absolute w-24 h-24 rounded-full bg-white/25 blur-xl transition-all duration-300 pointer-events-none"
                style={{ left: `${blob.x}%`, top: `${blob.y}%`, transform: 'translate(-50%, -50%)' }}
              />
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-bold">Liquid Viscous Dialog</span>
                  <p className="text-[11px] text-white/80 mt-1">Simulated fluid surface tension — move your pointer.</p>
                </div>
                <button
                  type="button"
                  aria-label="Close liquid dialog"
                  onClick={() => setOpen(false)}
                  className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg text-white/80 hover:bg-white/20 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                The blob follows your pointer across the header, like a drop of liquid under glass.
              </p>
              <div className="mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setConfirmed(true);
                    setOpen(false);
                  }}
                  className={`min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold text-white ${palette.bg} ${palette.bgHover} cursor-pointer`}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
