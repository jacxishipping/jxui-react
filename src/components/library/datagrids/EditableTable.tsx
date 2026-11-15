// @jxui/react v3.0.0 — EditableTable (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 4. EditableTable — a real editable table: click any cell to edit it in
// place, Enter or blur saves, Escape cancels. Edits persist in state.
type Row = { env: string; region: string; status: string };
const INITIAL: Row[] = [
  { env: 'Production', region: 'us-east-1', status: 'Live' },
  { env: 'Staging', region: 'eu-central-1', status: 'Ready' },
  { env: 'Development', region: 'ap-northeast-1', status: 'Paused' },
];
const COLUMNS: { key: keyof Row; label: string }[] = [
  { key: 'env', label: 'Environment' },
  { key: 'region', label: 'Region' },
  { key: 'status', label: 'Status' },
];

export const EditableTable: React.FC = () => {
  const { palette } = useJXTheme();
  const [rows, setRows] = useState(INITIAL);
  const [editing, setEditing] = useState<{ row: number; col: keyof Row } | null>(null);
  const [draft, setDraft] = useState('');

  const startEdit = (row: number, col: keyof Row) => {
    setEditing({ row, col });
    setDraft(rows[row][col]);
  };
  const save = () => {
    if (!editing) return;
    setRows((rs) => rs.map((r, i) => (i === editing.row ? { ...r, [editing.col]: draft } : r)));
    setEditing(null);
  };

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden text-xs">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300">
            {COLUMNS.map((c) => (
              <th key={c.key} className="px-3 py-2 font-semibold">{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {rows.map((row, ri) => (
            <tr key={ri}>
              {COLUMNS.map((c) => {
                const isEditing = editing?.row === ri && editing?.col === c.key;
                return (
                  <td key={c.key} className="px-3 py-1.5">
                    {isEditing ? (
                      <input
                        autoFocus
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        onBlur={save}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') save();
                          if (e.key === 'Escape') setEditing(null);
                        }}
                        aria-label={`Edit ${c.label} for row ${ri + 1}`}
                        className={`w-full min-h-[32px] px-1.5 rounded border ${palette.border} bg-white dark:bg-slate-800 font-semibold ${palette.text} focus:outline-none`}
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => startEdit(ri, c.key)}
                        title="Click to edit"
                        className="w-full min-h-[32px] text-left px-1.5 rounded font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
                      >
                        {row[c.key]}
                      </button>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-3 py-1.5 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500">
        Click a cell to edit · Enter saves · Esc cancels
      </div>
    </div>
  );
};
