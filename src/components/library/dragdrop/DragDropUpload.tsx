// @jxui/react v3.0.0 — DragDropUpload (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { UploadCloud, X, FileText } from 'lucide-react';

// 8. DragDropUpload — a working upload dropzone: drag files in (or pick
// them), see the file list with sizes, and remove files.
type F = { name: string; size: number };
const fmt = (n: number) => (n > 1024 * 1024 ? `${(n / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(n / 1024))} KB`);

export const DragDropUpload: React.FC = () => {
  const [files, setFiles] = useState<F[]>([{ name: 'tokens.json', size: 4560 }, { name: 'hero.png', size: 184320 }]);
  const [over, setOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const add = (list: FileList | null) => {
    if (!list) return;
    setFiles((f) => [...f, ...Array.from(list).map((x) => ({ name: x.name, size: x.size }))]);
  };

  return (
    <div className="w-full space-y-2 text-xs">
      <div
        onDragOver={(e) => { e.preventDefault(); setOver(true); }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => { e.preventDefault(); setOver(false); add(e.dataTransfer.files); }}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click(); }}
        className={`w-full min-h-[88px] border-2 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer transition-colors ${over ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600' : 'border-slate-300 dark:border-slate-700 text-slate-500'}`}
      >
        <UploadCloud className="w-5 h-5 mb-1" />
        <span>{over ? 'Release to upload' : 'Drop files to upload, or click to browse'}</span>
        <input ref={inputRef} type="file" multiple className="hidden" onChange={(e) => add(e.target.files)} aria-label="Choose files to upload" />
      </div>
      {files.length > 0 && (
        <ul className="space-y-1">
          {files.map((f, i) => (
            <li key={`${f.name}-${i}`} className="min-h-[36px] flex items-center gap-2 px-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
              <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="flex-1 truncate font-mono">{f.name}</span>
              <span className="text-slate-500">{fmt(f.size)}</span>
              <button type="button" aria-label={`Remove ${f.name}`} onClick={() => setFiles((x) => x.filter((_, j) => j !== i))} className="min-h-[32px] min-w-[32px] flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"><X className="w-3.5 h-3.5" /></button>
            </li>
          ))}
        </ul>
      )}
      <p className="text-[11px] text-slate-500">{files.length} file{files.length === 1 ? '' : 's'} queued</p>
    </div>
  );
};
