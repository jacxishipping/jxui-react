// @jxui/react v3.0.0 — TableToolbar (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { Search, Filter, RefreshCw } from 'lucide-react';
import { useJXTheme } from '../../../context/JXThemeContext';

// 13. TableToolbar — a working table toolbar: search filters the rows,
// the status filter narrows them, density switches row height, and
// refresh re-stamps the "last refreshed" time.
const ROWS = [
  { name: 'JXButton', status: 'Stable', latency: '0.8ms' },
  { name: 'JXTable', status: 'Stable', latency: '1.1ms' },
  { name: 'JXModal', status: 'Review', latency: '2.4ms' },
  { name: 'JXChart', status: 'Stable', latency: '2.1ms' },
  { name: 'JXInput', status: 'Draft', latency: '0.6ms' },
] as const;

export const TableToolbar: React.FC = () => {
  const { palette } = useJXTheme();
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<'All' | 'Stable' | 'Review' | 'Draft'>('All');
  const [density, setDensity] = useState<'comfortable' | 'compact'>('comfortable');
  const [refreshed, setRefreshed] = useState<Date | null>(null);
  const [spinning, setSpinning] = useState(false);

  const filtered = ROWS.filter(
    (r) => (status === 'All' || r.status === status) && r.name.toLowerCase().includes(query.toLowerCase())
  );
  const refresh = () => {
    setSpinning(true);
    setTimeout(() => {
      setRefreshed(new Date());
      setSpinning(false);
    }, 500);
  };

  return (
    <div className="w-full space-y-2 text-xs">
      <div className="flex flex-wrap items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2">
        <div className="relative flex-1 min-w-[140px]">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search records..."
            aria-label="Search records"
            className="w-full min-h-[36px] pl-9 pr-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 placeholder:text-slate-400"
          />
        </div>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as typeof status)}
          aria-label="Filter by status"
          className="min-h-[36px] px-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 cursor-pointer"
        >
          <option value="All">All statuses</option>
          <option value="Stable">Stable</option>
          <option value="Review">Review</option>
          <option value="Draft">Draft</option>
        </select>
        <button
          type="button"
          onClick={() => setDensity((d) => (d === 'comfortable' ? 'compact' : 'comfortable'))}
          aria-pressed={density === 'compact'}
          className={`min-h-[36px] px-3 rounded-lg font-semibold cursor-pointer ${density === 'compact' ? `${palette.softBg} ${palette.text}` : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
        >
          <Filter className="w-3.5 h-3.5 inline mr-1" />
          {density === 'comfortable' ? 'Comfortable' : 'Compact'}
        </button>
        <button
          type="button"
          onClick={refresh}
          aria-label="Refresh table"
          className={`min-h-[36px] px-3 rounded-lg font-semibold cursor-pointer inline-flex items-center gap-1.5 ${palette.softBg} ${palette.text}`}
        >
          <RefreshCw className={`w-3.5 h-3.5 ${spinning ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800 overflow-hidden">
        {filtered.map((r) => (
          <div key={r.name} className={`px-3 flex items-center justify-between bg-white dark:bg-slate-900 ${density === 'comfortable' ? 'py-2.5' : 'py-1'}`}>
            <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">{r.name}</span>
            <span className="text-slate-500">{r.status} · {r.latency}</span>
          </div>
        ))}
        {filtered.length === 0 && <div className="px-3 py-3 bg-white dark:bg-slate-900 text-slate-500">No records match.</div>}
      </div>
      <p className="font-mono text-[11px] text-slate-500">
        {filtered.length} of {ROWS.length} records · density: {density}
        {refreshed ? ` · refreshed ${refreshed.toLocaleTimeString()}` : ''}
      </p>
    </div>
  );
};
