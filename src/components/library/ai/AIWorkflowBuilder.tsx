// @jxui/react v3.0.0 — AIWorkflowBuilder (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect, useRef } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Zap, Bot, Send, Plus, Trash2, Play, ArrowRight, CheckCircle2 } from 'lucide-react';

// 15. AIWorkflowBuilder — build an agent workflow: nodes in a chain, click
// one to select it and rename it, add or delete nodes, then Run to watch
// each node execute in sequence.
interface Node { id: number; kind: 'trigger' | 'agent' | 'output'; label: string; }
const KIND_ICON = { trigger: Zap, agent: Bot, output: Send } as const;
const KIND_LABEL = { trigger: 'Trigger', agent: 'LLM Agent', output: 'Output' } as const;
const INITIAL: Node[] = [
  { id: 1, kind: 'trigger', label: 'On push to main' },
  { id: 2, kind: 'agent', label: 'Audit agent' },
  { id: 3, kind: 'output', label: 'Post summary' },
];

export const AIWorkflowBuilder: React.FC = () => {
  const { palette } = useJXTheme();
  const [nodes, setNodes] = useState<Node[]>(INITIAL);
  const [selected, setSelected] = useState(2);
  const [nextId, setNextId] = useState(4);
  const [running, setRunning] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => () => { timers.current.forEach((t) => window.clearTimeout(t)); }, []);

  const selectedNode = nodes.find((n) => n.id === selected);
  const rename = (label: string) => setNodes((ns) => ns.map((n) => (n.id === selected ? { ...n, label } : n)));
  const addNode = (kind: Node['kind']) => {
    const id = nextId;
    setNodes((ns) => [...ns, { id, kind, label: kind === 'trigger' ? 'New trigger' : kind === 'agent' ? 'New agent step' : 'New output' }]);
    setSelected(id);
    setNextId((n) => n + 1);
  };
  const removeNode = () => {
    if (nodes.length <= 1) return;
    setNodes((ns) => ns.filter((n) => n.id !== selected));
    setSelected(nodes.find((n) => n.id !== selected)?.id ?? 0);
  };
  const run = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
    setFinished(false);
    const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setRunning(null); setFinished(true); return; }
    nodes.forEach((n, i) => {
      timers.current.push(window.setTimeout(() => setRunning(n.id), i * 700));
    });
    timers.current.push(window.setTimeout(() => { setRunning(null); setFinished(true); }, nodes.length * 700 + 300));
  };

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 space-y-3 text-xs">
      <div className="flex flex-wrap items-center gap-1.5">
        {nodes.map((node, i) => {
          const Icon = KIND_ICON[node.kind];
          const isRunning = running === node.id;
          return (
            <React.Fragment key={node.id}>
              {i > 0 && <ArrowRight className="w-4 h-4 shrink-0 text-slate-300 dark:text-slate-600" />}
              <button
                type="button"
                onClick={() => setSelected(node.id)}
                aria-pressed={selected === node.id}
                className={`min-h-[44px] px-3 flex items-center gap-1.5 rounded-xl border font-semibold cursor-pointer transition-all ${
                  selected === node.id ? `${palette.border} ${palette.softBg} ${palette.text}` : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'
                } ${isRunning ? 'ring-2 ring-amber-400 scale-105' : ''}`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isRunning ? 'animate-pulse' : ''}`} />
                <span className="max-w-24 truncate">{node.label}</span>
                {finished && <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-500" />}
              </button>
            </React.Fragment>
          );
        })}
      </div>
      {selectedNode && (
        <div className="rounded-lg bg-slate-50 dark:bg-slate-800 p-2.5 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{KIND_LABEL[selectedNode.kind]} node</span>
          <label className="flex items-center gap-2">
            <span className="shrink-0 font-semibold text-slate-700 dark:text-slate-200">Label</span>
            <input
              value={selectedNode.label}
              onChange={(e) => rename(e.target.value)}
              aria-label="Selected node label"
              className="flex-1 min-w-0 min-h-[36px] px-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200"
            />
          </label>
          <div className="flex flex-wrap gap-1">
            <span className="text-[11px] text-slate-400 mr-1 self-center">Add:</span>
            {(['trigger', 'agent', 'output'] as const).map((k) => (
              <button key={k} type="button" onClick={() => addNode(k)} className="min-h-[36px] px-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">
                {KIND_LABEL[k]}
              </button>
            ))}
            <button type="button" onClick={removeNode} disabled={nodes.length <= 1} className="ml-auto min-h-[36px] px-2.5 inline-flex items-center gap-1 rounded-lg text-rose-600 dark:text-rose-400 font-semibold cursor-pointer disabled:opacity-40">
              <Trash2 className="w-3.5 h-3.5" /> Delete node
            </button>
          </div>
        </div>
      )}
      <div className="flex items-center gap-2">
        <button type="button" onClick={run} disabled={running !== null} className={`min-h-[44px] px-4 inline-flex items-center gap-1.5 rounded-lg text-white font-semibold cursor-pointer disabled:opacity-50 ${palette.bg}`}>
          <Play className="w-4 h-4" /> {running !== null ? 'Running…' : finished ? 'Run again' : 'Run workflow'}
        </button>
        <span className="text-[11px] text-slate-400">
          {finished ? '✓ Workflow completed — all nodes executed.' : running !== null ? `Executing node ${nodes.findIndex((n) => n.id === running) + 1} of ${nodes.length}…` : `${nodes.length} nodes · click one to edit it.`}
        </span>
      </div>
    </div>
  );
};
