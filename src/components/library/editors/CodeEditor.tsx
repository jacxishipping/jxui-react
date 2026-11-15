// @jxui/react v3.0.0 — CodeEditor (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { Code } from 'lucide-react';

// 6. CodeEditor — a real editable code editor: editable text, line numbers
// that track the content and scroll with it, and a copy button.
const DEFAULT_CODE = `import { MagneticButton } from '@jxui/react';

export function Deploy() {
  return (
    <MagneticButton onClick={() => deploy()}>
      Deploy Build
    </MagneticButton>
  );
}
`;

export const CodeEditor: React.FC = () => {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [copied, setCopied] = useState(false);
  const gutterRef = useRef<HTMLDivElement>(null);
  const lines = code.split('\n').length;

  return (
    <div className="w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-200">
      <div className="flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800">
        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold">
          <Code className="w-3.5 h-3.5 text-indigo-400" />
          Deploy.tsx · TypeScript
        </span>
        <button
          type="button"
          onClick={async () => {
            await navigator.clipboard?.writeText(code).catch(() => undefined);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className="min-h-[32px] px-2.5 py-1 rounded-md bg-slate-800 text-xs font-semibold text-slate-200 hover:bg-slate-700 cursor-pointer"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <div className="flex">
        <div
          ref={gutterRef}
          aria-hidden="true"
          className="py-2 pl-3 pr-2 text-right text-[11px] leading-5 font-mono text-slate-600 select-none overflow-hidden shrink-0"
        >
          {Array.from({ length: lines }, (_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <textarea
          aria-label="Code editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onScroll={(e) => {
            if (gutterRef.current) gutterRef.current.scrollTop = e.currentTarget.scrollTop;
          }}
          spellCheck={false}
          rows={8}
          className="flex-1 min-w-0 py-2 pr-3 bg-transparent font-mono text-xs leading-5 text-slate-200 focus:outline-none resize-none overflow-auto"
        />
      </div>
      <div className="px-3 py-1.5 bg-slate-900 border-t border-slate-800 text-[11px] font-mono text-slate-500">
        {lines} lines · {code.length} chars · editable
      </div>
    </div>
  );
};
