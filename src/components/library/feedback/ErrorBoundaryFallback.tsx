// @jxui/react v3.0.0 — ErrorBoundaryFallback (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { RefreshCw, XCircle, ChevronDown } from 'lucide-react';

// 15. ErrorBoundaryFallback — a live error-boundary demo: crash the child
// on demand to see the fallback, inspect the (deterministic) error detail,
// then retry to recover. Retries are counted.
export const ErrorBoundaryFallback: React.FC = () => {
  const [crashed, setCrashed] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  if (!crashed) {
    return (
      <div className="w-full rounded-xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/20 p-4 text-xs text-emerald-800 dark:text-emerald-200">
        <div className="flex items-center justify-between gap-2">
          <span className="font-bold">Child component is healthy.</span>
          <span className="font-mono text-[11px]">retries: {attempts}</span>
        </div>
        <p className="mt-1 text-emerald-700 dark:text-emerald-300">Rendering normally — no error boundary needed.</p>
        <button
          type="button"
          onClick={() => setCrashed(true)}
          className="mt-3 min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold bg-rose-600 text-white cursor-pointer"
        >
          Simulate crash
        </button>
      </div>
    );
  }

  return (
    <div className="w-full rounded-xl border border-rose-300 dark:border-rose-900 bg-rose-50/50 dark:bg-rose-950/20 p-4 text-xs text-rose-800 dark:text-rose-200" role="alert">
      <div className="flex items-start justify-between gap-2">
        <div>
          <span className="font-bold flex items-center gap-1.5">
            <XCircle className="w-4 h-4" />
            Execution Error
          </span>
          <p className="text-[11px] text-rose-600 mt-1">Component crashed safely. The rest of the app kept running.</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setAttempts((a) => a + 1);
            setCrashed(false);
          }}
          className="min-h-[44px] px-3.5 py-2 bg-rose-600 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Retry
        </button>
      </div>
      <button
        type="button"
        aria-expanded={showDetails}
        onClick={() => setShowDetails((v) => !v)}
        className="mt-2 min-h-[36px] inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-semibold text-rose-700 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-950/60 cursor-pointer"
      >
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showDetails ? 'rotate-180' : ''}`} />
        {showDetails ? 'Hide error details' : 'Show error details'}
      </button>
      {showDetails && (
        <pre className="mt-2 p-2 bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900 rounded-lg font-mono text-[11px] overflow-x-auto">
          {`TypeError: Cannot read properties of undefined (reading 'render')\n    at JXButton.render (JXButton.tsx:42)\n    at ErrorBoundary.catch (ErrorBoundary.tsx:18)`}
        </pre>
      )}
    </div>
  );
};
