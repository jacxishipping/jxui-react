// @jxui/react v3.0.0 — FilterBuilder (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 11. FilterBuilder — a real query builder: add/remove rule rows (field,
// operator, value), switch AND/OR, and the live SQL-style query plus the
// matching rows update as you build.
const ROWS = [
  { name: 'JXButton', status: 'active', cls: 0, latency: 0.8 },
  { name: 'JXTable', status: 'active', cls: 0, latency: 1.1 },
  { name: 'JXModal', status: 'review', cls: 0.02, latency: 2.4 },
  { name: 'JXChart', status: 'active', cls: 0.01, latency: 2.1 },
  { name: 'JXInput', status: 'draft', cls: 0, latency: 0.6 },
] as const;
const FIELDS = ['status', 'cls', 'latency'] as const;
const OPERATORS = ['=', '!=', '<', '>', '<='] as const;
const VALUES: Record<string, string[]> = {
  status: ['active', 'review', 'draft'],
  cls: ['0', '0.01', '0.02'],
  latency: ['0.6', '0.8', '1.1', '2.1', '2.4'],
};
type Rule = { field: (typeof FIELDS)[number]; op: (typeof OPERATORS)[number]; value: string };

function matches(row: (typeof ROWS)[number], rule: Rule) {
  const v = row[rule.field];
  const target = rule.field === 'status' ? rule.value : Number(rule.value);
  switch (rule.op) {
    case '=': return v === target;
    case '!=': return v !== target;
    case '<': return (v as number) < (target as number);
    case '>': return (v as number) > (target as number);
    case '<=': return (v as number) <= (target as number);
    default: return true;
  }
}

export const FilterBuilder: React.FC = () => {
  const { palette } = useJXTheme();
  const [rules, setRules] = useState<Rule[]>([
    { field: 'status', op: '=', value: 'active' },
    { field: 'cls', op: '=', value: '0' },
  ]);
  const [join, setJoin] = useState<'AND' | 'OR'>('AND');
  const query = rules.length === 0 ? 'WHERE (no rules — all rows match)' : `WHERE ${rules.map((r) => `\`${r.field}\` ${r.op} '${r.value}'`).join(` ${join} `)}`;
  const matched = ROWS.filter((row) => (rules.length === 0 ? true : join === 'AND' ? rules.every((r) => matches(row, r)) : rules.some((r) => matches(row, r))));

  const update = (i: number, patch: Partial<Rule>) => {
    setRules((rs) => rs.map((r, j) => {
      if (j !== i) return r;
      const next = { ...r, ...patch };
      if (patch.field) next.value = VALUES[patch.field][0];
      return next;
    }));
  };

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-bold text-slate-900 dark:text-white">Filter builder</span>
          <div className="flex gap-1" role="group" aria-label="Combine rules with">
            {(['AND', 'OR'] as const).map((j) => (
              <button
                key={j}
                type="button"
                onClick={() => setJoin(j)}
                aria-pressed={join === j}
                className={`min-h-[36px] px-3 rounded-lg font-mono font-bold cursor-pointer ${join === j ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
              >
                {j}
              </button>
            ))}
          </div>
        </div>
        {rules.map((r, i) => (
          <div key={i} className="flex flex-wrap items-center gap-1.5">
            <select value={r.field} onChange={(e) => update(i, { field: e.target.value as Rule['field'] })} aria-label={`Rule ${i + 1} field`} className="min-h-[36px] px-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 cursor-pointer">
              {FIELDS.map((f) => <option key={f} value={f}>{f}</option>)}
            </select>
            <select value={r.op} onChange={(e) => update(i, { op: e.target.value as Rule['op'] })} aria-label={`Rule ${i + 1} operator`} className="min-h-[36px] px-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 cursor-pointer">
              {OPERATORS.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
            <select value={r.value} onChange={(e) => update(i, { value: e.target.value })} aria-label={`Rule ${i + 1} value`} className="min-h-[36px] px-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 cursor-pointer">
              {VALUES[r.field].map((v) => <option key={v} value={v}>{v}</option>)}
            </select>
            <button type="button" onClick={() => setRules((rs) => rs.filter((_, j) => j !== i))} aria-label={`Remove rule ${i + 1}`} className="min-h-[36px] min-w-[36px] rounded-lg bg-rose-50 dark:bg-rose-950 text-rose-600 font-bold cursor-pointer">×</button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => setRules((rs) => [...rs, { field: 'status', op: '=', value: 'active' }])}
          className={`min-h-[36px] px-3 rounded-lg font-semibold cursor-pointer ${palette.softBg} ${palette.text}`}
        >
          + Add rule
        </button>
        <div className="rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-2 font-mono text-[11px] text-slate-700 dark:text-slate-200 break-words">{query}</div>
      </div>
      <p className="font-mono text-[11px] text-slate-500">
        {matched.length} of {ROWS.length} rows match{matched.length > 0 ? `: ${matched.map((r) => r.name).join(', ')}` : ''}
      </p>
    </div>
  );
};
