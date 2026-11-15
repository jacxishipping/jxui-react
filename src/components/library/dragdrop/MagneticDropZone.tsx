// @jxui/react v3.0.0 — MagneticDropZone (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { Magnet } from 'lucide-react';

// 9. MagneticDropZone — draggable tokens snap into the magnetic zone when
// dropped on it; the zone highlights while a token hovers over it.
const TOKENS = ['Token A', 'Token B', 'Token C'];

export const MagneticDropZone: React.FC = () => {
  const [zone, setZone] = useState<string[]>([]);
  const [pool, setPool] = useState<string[]>(TOKENS);
  const [over, setOver] = useState(false);
  const [drag, setDrag] = useState<string | null>(null);

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="flex gap-1.5">
        {pool.map((t) => (
          <div
            key={t}
            draggable
            onDragStart={(e) => { setDrag(t); e.dataTransfer.effectAllowed = 'move'; }}
            onDragEnd={() => setDrag(null)}
            className={`min-h-[36px] px-3 rounded-full border font-semibold cursor-grab active:cursor-grabbing flex items-center bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 ${drag === t ? 'opacity-40' : ''}`}
          >
            {t}
          </div>
        ))}
        {pool.length === 0 && <span className="text-slate-500 py-2">All tokens snapped in.</span>}
      </div>
      <div
        onDragOver={(e) => { e.preventDefault(); setOver(true); }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => {
          e.preventDefault(); setOver(false);
          if (drag) { setZone((z) => [...z, drag]); setPool((p) => p.filter((x) => x !== drag)); setDrag(null); }
        }}
        className={`min-h-[88px] p-3 border-2 rounded-xl text-center transition-all ${over ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 scale-[1.02]' : 'border-emerald-500/40 bg-emerald-50/20 dark:bg-emerald-950/20'} text-emerald-600 dark:text-emerald-400`}
      >
        <div className="flex items-center justify-center gap-1.5 font-semibold"><Magnet className="w-4 h-4" /> Magnetic Snap Target</div>
        {zone.length === 0
          ? <p className="mt-1 text-slate-500">Drag a token here — it snaps in</p>
          : (
            <div className="mt-2 flex flex-wrap gap-1.5 justify-center">
              {zone.map((t) => (
                <button key={t} type="button" onClick={() => { setZone((z) => z.filter((x) => x !== t)); setPool((p) => [...p, t]); }} aria-label={`Remove ${t} from the drop zone`} className="min-h-[36px] px-3 rounded-full bg-emerald-600 text-white font-semibold cursor-pointer">{t} ✕</button>
              ))}
            </div>
          )}
      </div>
    </div>
  );
};
