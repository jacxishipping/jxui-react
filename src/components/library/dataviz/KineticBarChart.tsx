// @jxui/react v3.0.0 — KineticBarChart (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { TrendingUp, Activity, BarChart2 } from 'lucide-react';

// 1. KineticBarChart
export const KineticBarChart: React.FC = () => {
  // Bars follow the live theme accent (was hardcoded bg-indigo-600).
  const { palette } = useJXTheme();
  return (
    <div className="flex items-end gap-2 h-20 p-2 border rounded-xl">
      {[40, 70, 55, 90, 65, 85].map((h, i) => (
        <div key={i} style={{ height: `${h}%` }} className={`flex-1 ${palette.bg} rounded-t-sm hover:brightness-110 transition-all cursor-pointer`} />
      ))}
    </div>
  );
};
