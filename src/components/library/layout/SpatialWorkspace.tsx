// @jxui/react v3.0.0 — SpatialWorkspace (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 3. SpatialWorkspace — a 3D spatial layer view: pick a layer to bring it
// to the front, and the depth slider spreads the layers in 3D space.
const LAYERS = [
  { id: 'bg', label: 'Background', color: '#e2e8f0' },
  { id: 'content', label: 'Content', color: '#4f46e5' },
  { id: 'overlay', label: 'Overlay', color: '#059669' },
  { id: 'modal', label: 'Modal', color: '#d97706' },
];

export const SpatialWorkspace: React.FC = () => {
  const { palette } = useJXTheme();
  const [depth, setDepth] = useState(40);
  const [front, setFront] = useState('modal');

  const order = [...LAYERS].sort((a, b) => (a.id === front ? 1 : 0) - (b.id === front ? 1 : 0));

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="flex items-center gap-2 flex-wrap">
        <label className="flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-200">
          Depth {depth}px
          <input type="range" min={0} max={120} value={depth} onChange={(e) => setDepth(Number(e.target.value))} aria-label="3D depth in pixels" className="w-28 accent-indigo-600" />
        </label>
        <span className="font-mono text-slate-500">Front layer: {LAYERS.find((l) => l.id === front)?.label}</span>
      </div>
      <div className="relative h-36 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 overflow-hidden" style={{ perspective: '600px' }}>
        {order.map((layer, i) => {
          const isFront = layer.id === front;
          return (
            <button
              key={layer.id}
              type="button"
              onClick={() => setFront(layer.id)}
              aria-pressed={isFront}
              className={`absolute left-1/2 top-1/2 w-44 min-h-[44px] rounded-xl text-white font-bold flex items-center justify-center cursor-pointer shadow-lg transition-all ${isFront ? 'ring-2 ring-offset-2 ring-slate-400' : 'opacity-85'}`}
              style={{
                backgroundColor: layer.id === 'content' ? palette.hex : layer.color,
                color: layer.id === 'bg' ? '#334155' : '#fff',
                transform: `translate(-50%, -50%) translateZ(${(i - 1.5) * depth}px)`,
                zIndex: i + 1,
              }}
            >
              {layer.label} · z {i + 1}
            </button>
          );
        })}
      </div>
      <p className="text-[11px] text-slate-500">Click a layer to bring it to the front.</p>
    </div>
  );
};
