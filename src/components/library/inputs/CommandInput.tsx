// @jxui/react v3.0.0 — CommandInput (JXUI v3.0 Unified Component Suite)
import React, { useState, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Terminal } from 'lucide-react';

// 8. CommandInput — a working mini-terminal: Enter runs the command and
// appends a canned response, ArrowUp recalls previous commands, `clear`
// wipes the log and `help` lists commands.
const COMMANDS: Record<string, string> = {
  help: 'Available: help, version, add <name>, list, clear',
  version: 'jxui-cli 3.0.0 (React 19 · Tailwind v4)',
  list: 'button · input · datagrid · chart · modal',
};

export const CommandInput: React.FC = () => {
  const { getRadiusClass } = useJXTheme();
  const [value, setValue] = useState('');
  const [log, setLog] = useState<{ cmd: string; out: string }[]>([
    { cmd: '', out: 'Type "help" to list commands.' },
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const logRef = useRef<HTMLDivElement>(null);

  const run = () => {
    const cmd = value.trim();
    if (!cmd) return;
    const [name, ...args] = cmd.split(/\s+/);
    let out: string;
    if (name === 'clear') {
      setLog([]);
      setValue('');
      setHistory((h) => [...h, cmd]);
      return;
    } else if (name === 'add' && args[0]) {
      out = `✓ Added @jxui/${args[0]} to your project.`;
    } else if (COMMANDS[name]) {
      out = COMMANDS[name];
    } else {
      out = `command not found: ${name} — try "help"`;
    }
    setLog((l) => [...l.slice(-5), { cmd, out }]);
    setHistory((h) => [...h, cmd]);
    setHistIdx(-1);
    setValue('');
    requestAnimationFrame(() => {
      logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
    });
  };

  return (
    <div className={`w-full bg-slate-950 text-emerald-400 font-mono text-xs ${getRadiusClass('control')} overflow-hidden`}>
      <div ref={logRef} className="max-h-28 overflow-y-auto px-3 pt-2 pb-1 space-y-1">
        {log.map((entry, i) => (
          <div key={i}>
            {entry.cmd && <div className="text-slate-300"><span className="text-emerald-500">$ </span>{entry.cmd}</div>}
            <div className="text-slate-400">{entry.out}</div>
          </div>
        ))}
        {log.length === 0 && <div className="text-slate-500">Log cleared.</div>}
      </div>
      <div className="flex items-center gap-2 px-3 py-2 border-t border-slate-800">
        <Terminal className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
        <span className="text-emerald-500">$</span>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') run();
            else if (e.key === 'ArrowUp') {
              e.preventDefault();
              const idx = histIdx === -1 ? history.length - 1 : Math.max(0, histIdx - 1);
              if (history[idx]) {
                setHistIdx(idx);
                setValue(history[idx]);
              }
            } else if (e.key === 'ArrowDown') {
              e.preventDefault();
              if (histIdx >= 0 && histIdx < history.length - 1) {
                const idx = histIdx + 1;
                setHistIdx(idx);
                setValue(history[idx]);
              } else {
                setHistIdx(-1);
                setValue('');
              }
            }
          }}
          placeholder="npx @jxui/cli add button"
          aria-label="Command input"
          className="w-full min-h-[36px] bg-transparent placeholder-slate-600 text-white"
        />
      </div>
    </div>
  );
};
