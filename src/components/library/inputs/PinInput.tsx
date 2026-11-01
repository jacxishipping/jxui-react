// @jxui/react v3.0.0 — PinInput (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

export interface PinInputProps {
  length?: number;
  onComplete?: (pin: string) => void;
  mask?: boolean;
}

export const PinInput: React.FC<PinInputProps> = ({
  length = 4,
  onComplete,
  mask = true,
}) => {
  const { palette, getRadiusClass } = useJXTheme();
  const [values, setValues] = useState<string[]>(Array(length).fill(''));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, val: string) => {
    const char = val.slice(-1);
    if (!/^\d*$/.test(char)) return;

    const next = [...values];
    next[index] = char;
    setValues(next);

    if (char && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (next.every((v) => v !== '')) {
      onComplete?.(next.join(''));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
    if (!pasted) return;
    const next = [...values];
    for (let i = 0; i < pasted.length; i++) {
      next[i] = pasted[i];
    }
    setValues(next);
    const nextFocus = Math.min(pasted.length, length - 1);
    inputsRef.current[nextFocus]?.focus();
    if (next.every((v) => v !== '')) {
      onComplete?.(next.join(''));
    }
  };

  return (
    <div className="flex items-center gap-2.5" onPaste={handlePaste}>
      {values.map((v, i) => (
        <div key={i} className="relative flex items-center justify-center">
          <input
            ref={(el) => {
              inputsRef.current[i] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={v}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            aria-label={`PIN Digit ${i + 1}`}
            className={`min-h-[44px] min-w-[44px] w-11 h-11 text-center font-mono text-base font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-[#111827] border ${
              v
                ? 'border-indigo-500 ring-2 ring-[var(--jx-accent-halo)]'
                : 'border-slate-300 dark:border-slate-700'
            } ${getRadiusClass('control')} focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-[var(--jx-accent-halo)] transition-all touch-manipulation`}
          />
          {mask && v && (
            <div className="absolute pointer-events-none w-2.5 h-2.5 rounded-full bg-indigo-600" />
          )}
        </div>
      ))}
    </div>
  );
};
