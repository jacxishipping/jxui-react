// @jxui/react v3.0.0 — LiquidInput (JXUI v3.0 Unified Component Suite)
import React from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 1. LiquidInput
export interface LiquidInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

export const LiquidInput: React.FC<LiquidInputProps> = ({ className = '', children, ...props }) => {
  const { palette, getRadiusClass } = useJXTheme();
  return (
    <div className="relative w-full">
      <input
        className={`w-full min-h-[44px] px-3.5 py-2 text-sm bg-white dark:bg-[#111827] border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white ${getRadiusClass('control')} focus:outline-none focus:ring-2 focus:ring-[var(--jx-accent-halo)] transition-all touch-manipulation ${className}`}
        {...props}
      />
      <div className={`absolute bottom-0 inset-x-2 h-0.5 ${palette.bg} opacity-0 focus-within:opacity-100 transition-opacity`} />
    </div>
  );
};
