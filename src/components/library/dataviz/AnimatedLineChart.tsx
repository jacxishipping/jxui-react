// @jxui/react v3.0.0 — AnimatedLineChart (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

// 2. AnimatedLineChart
export const AnimatedLineChart: React.FC = () => {
  // Use the live theme accent, not a hardcoded indigo hex — otherwise
  // changing the accent in the workbench leaves this chart purple.
  const { palette } = useJXTheme();
  return (
    <div className="w-full h-16 p-1 border rounded-xl flex items-center">
      <svg className="w-full h-full" viewBox="0 0 100 40">
        <path d="M 0 30 Q 25 5 50 20 T 100 10" fill="none" stroke={palette.hex} strokeWidth="2.5" />
      </svg>
    </div>
  );
};
