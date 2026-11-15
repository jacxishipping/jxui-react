// @jxui/react v3.0.0 — PasswordStrength (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

// 15. PasswordStrength — scores the password on length, case, digits and
// symbols (not just length), with a labelled meter and a live checklist.
const RULES = [
  { id: 'len', label: 'At least 8 characters', test: (pw: string) => pw.length >= 8 },
  { id: 'case', label: 'Upper and lower case', test: (pw: string) => /[a-z]/.test(pw) && /[A-Z]/.test(pw) },
  { id: 'digit', label: 'A number', test: (pw: string) => /\d/.test(pw) },
  { id: 'symbol', label: 'A symbol (! @ # …)', test: (pw: string) => /[^A-Za-z0-9]/.test(pw) },
];
const LABELS = ['Very weak', 'Weak', 'Fair', 'Good', 'Strong'];
const COLORS = ['bg-rose-500', 'bg-rose-500', 'bg-amber-500', 'bg-emerald-500', 'bg-emerald-500'];

export const PasswordStrength: React.FC = () => {
  const [pw, setPw] = useState('Secret!2026');
  const [show, setShow] = useState(false);
  const passed = RULES.filter((r) => r.test(pw)).length;
  const pct = (passed / RULES.length) * 100;

  return (
    <div className="w-full flex flex-col gap-1.5">
      <div className="relative">
        <input
          type={show ? 'text' : 'password'}
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          aria-label="Password"
          aria-describedby="jx-pw-meter"
          className="w-full min-h-[44px] px-3 py-1.5 pr-16 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          aria-label={show ? 'Hide password' : 'Show password'}
          aria-pressed={show}
          className="absolute right-1 top-1/2 -translate-y-1/2 min-w-[36px] min-h-[36px] px-2 text-[11px] font-semibold text-slate-500 hover:text-slate-700 cursor-pointer"
        >
          {show ? 'Hide' : 'Show'}
        </button>
      </div>
      <div id="jx-pw-meter" className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden" role="meter" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Password strength">
        <div style={{ width: `${pct}%` }} className={`h-full transition-all duration-300 ${COLORS[passed]}`} />
      </div>
      <span className="text-[11px] text-slate-500 font-mono">
        {LABELS[passed]} · {passed} of {RULES.length} rules · {pw.length} characters
      </span>
      <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
        {RULES.map((r) => {
          const ok = r.test(pw);
          return (
            <li key={r.id} className={`flex items-center gap-1 text-[11px] ${ok ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
              {ok ? <Check className="w-3 h-3 shrink-0" /> : <X className="w-3 h-3 shrink-0" />}
              {r.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
