// @jxui/react v3.0.0 — ConnectionStatus (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { Wifi, WifiOff, RefreshCw } from 'lucide-react';

// 13. ConnectionStatus — live connection indicator: latency ticks every
// 2s while connected, and you can simulate a drop and reconnect.
const LATENCIES = [11, 14, 9, 18, 12, 16, 10, 13];

export const ConnectionStatus: React.FC = () => {
  const [online, setOnline] = useState(true);
  const [tick, setTick] = useState(0);
  const [reconnecting, setReconnecting] = useState(false);

  useEffect(() => {
    if (!online) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setTick((t) => t + 1), 2000);
    return () => clearInterval(id);
  }, [online]);

  const latency = LATENCIES[tick % LATENCIES.length];

  const reconnect = () => {
    setReconnecting(true);
    setTimeout(() => {
      setOnline(true);
      setReconnecting(false);
    }, 900);
  };

  return (
    <div className="w-full space-y-2">
      <div
        className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium ${
          online
            ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400'
            : 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400'
        }`}
        role="status"
      >
        {online ? <Wifi className="w-3.5 h-3.5" /> : <WifiOff className="w-3.5 h-3.5" />}
        <span>{online ? `Websocket Connected · ${latency} ms` : 'Websocket Disconnected'}</span>
        <span className={`w-2 h-2 rounded-full ${online ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
      </div>
      <div className="flex flex-wrap gap-2">
        {online ? (
          <button
            type="button"
            onClick={() => setOnline(false)}
            className="min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"
          >
            Simulate disconnect
          </button>
        ) : (
          <button
            type="button"
            onClick={reconnect}
            disabled={reconnecting}
            className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-600 text-white cursor-pointer disabled:opacity-60 disabled:cursor-default"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${reconnecting ? 'animate-spin' : ''}`} />
            {reconnecting ? 'Reconnecting…' : 'Reconnect'}
          </button>
        )}
      </div>
    </div>
  );
};
