// @jxui/react v3.0.0 — DataExportPanel (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 15. DataExportPanel — real export: pick CSV or JSON and the panel builds
// the file from the table, shows a preview, and downloads it (Blob URL).
const ROWS = [
  { component: 'JXButton', category: 'Inputs', status: 'Stable', latency: 0.8 },
  { component: 'JXTable', category: 'Tables', status: 'Stable', latency: 1.1 },
  { component: 'JXChart', category: 'Data Viz', status: 'Review', latency: 2.4 },
];

function toCSV() {
  return ['component,category,status,latency', ...ROWS.map((r) => `${r.component},${r.category},${r.status},${r.latency}`)].join('\n');
}
function toJSON() {
  return JSON.stringify(ROWS, null, 2);
}

export const DataExportPanel: React.FC = () => {
  const { palette } = useJXTheme();
  const [format, setFormat] = useState<'CSV' | 'JSON'>('CSV');
  const [copied, setCopied] = useState(false);
  const text = format === 'CSV' ? toCSV() : toJSON();
  const fileName = `jxui-components.${format.toLowerCase()}`;

  const download = () => {
    const url = URL.createObjectURL(new Blob([text], { type: format === 'CSV' ? 'text/csv' : 'application/json' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="flex flex-wrap items-center gap-2">
        {(['CSV', 'JSON'] as const).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFormat(f)}
            aria-pressed={format === f}
            className={`min-h-[44px] px-3.5 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-1.5 ${
              format === f ? `${palette.bg} text-white` : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200'
            }`}
          >
            <Download className="w-3.5 h-3.5" /> {f}
          </button>
        ))}
        <button
          type="button"
          onClick={download}
          className={`min-h-[44px] px-3.5 rounded-lg font-semibold text-white cursor-pointer ${palette.bg}`}
        >
          Download {fileName}
        </button>
        <button
          type="button"
          onClick={async () => {
            await navigator.clipboard?.writeText(text).catch(() => undefined);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className="min-h-[44px] px-3.5 rounded-lg font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="w-full max-h-36 overflow-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 text-slate-200 p-3 font-mono text-[11px] leading-relaxed">
        {text}
      </pre>
      <p className="text-[11px] text-slate-500">{ROWS.length} rows · {format} · {new Blob([text]).size} bytes</p>
    </div>
  );
};
