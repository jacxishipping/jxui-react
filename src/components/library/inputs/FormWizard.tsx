// @jxui/react v3.0.0 — FormWizard (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';

// 24. FormWizard — a real 3-step wizard: Account (name + email, validated),
// Billing (plan picker), Review (summary + submit). Next is gated on the
// current step being valid; steps are clickable once reached.
const PLANS = ['Starter', 'Pro', 'Enterprise'];

export const FormWizard: React.FC = () => {
  const [step, setStep] = useState(0);
  const [maxStep, setMaxStep] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState('Pro');
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);
  const { palette } = useJXTheme();
  const steps = ['Account', 'Billing', 'Review'];

  const goTo = (next: number) => {
    if (next <= maxStep) setStep(next);
  };

  const next = () => {
    if (step === 0) {
      if (name.trim().length < 2) return setError('Enter your name (at least 2 characters).');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setError('Enter a valid email address.');
    }
    setError('');
    const n = Math.min(2, step + 1);
    setStep(n);
    setMaxStep((m) => Math.max(m, n));
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex items-center gap-1.5 text-xs font-semibold" role="group" aria-label="Wizard steps">
        {steps.map((label, i) => (
          <React.Fragment key={label}>
            <button
              type="button"
              onClick={() => goTo(i)}
              disabled={i > maxStep}
              aria-current={step === i ? 'step' : undefined}
              className="flex items-center gap-1.5 cursor-pointer disabled:cursor-default"
            >
              <span
                className={`w-6 h-6 min-w-[24px] rounded-full flex items-center justify-center text-[11px] ${
                  i < step || done ? 'bg-emerald-500 text-white' : step === i ? 'text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                }`}
                style={step === i && !done ? { backgroundColor: palette.hex } : undefined}
              >
                {i < step || done ? <Check className="w-3.5 h-3.5" /> : i + 1}
              </span>
              <span className={step === i ? 'text-slate-900 dark:text-white' : 'text-slate-500'}>{label}</span>
            </button>
            {i < steps.length - 1 && <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
          </React.Fragment>
        ))}
      </div>

      {done ? (
        <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 p-3 text-xs text-emerald-700 dark:text-emerald-300">
          ✓ Account created for <strong>{name}</strong> ({email}) on the <strong>{plan}</strong> plan.
          <button type="button" onClick={() => { setDone(false); setStep(0); setMaxStep(0); }} className="block mt-2 font-semibold underline cursor-pointer">
            Start over
          </button>
        </div>
      ) : step === 0 ? (
        <div className="flex flex-col gap-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            aria-label="Full name"
            className="min-h-[44px] px-3 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            type="email"
            aria-label="Email address"
            className="min-h-[44px] px-3 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
          />
          {error && <span className="text-[11px] text-rose-600 dark:text-rose-400">{error}</span>}
        </div>
      ) : step === 1 ? (
        <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Choose a plan">
          {PLANS.map((p) => (
            <button
              key={p}
              type="button"
              role="radio"
              aria-checked={plan === p}
              onClick={() => setPlan(p)}
              className={`min-h-[44px] px-2 py-2 rounded-lg border text-xs font-semibold cursor-pointer ${
                plan === p ? 'text-white' : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300'
              }`}
              style={plan === p ? { backgroundColor: palette.hex, borderColor: palette.hex } : undefined}
            >
              {p}
            </button>
          ))}
        </div>
      ) : (
        <dl className="text-xs space-y-1 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3">
          <div className="flex justify-between"><dt className="text-slate-500">Name</dt><dd className="font-semibold text-slate-900 dark:text-white">{name}</dd></div>
          <div className="flex justify-between"><dt className="text-slate-500">Email</dt><dd className="font-semibold text-slate-900 dark:text-white">{email}</dd></div>
          <div className="flex justify-between"><dt className="text-slate-500">Plan</dt><dd className="font-semibold text-slate-900 dark:text-white">{plan}</dd></div>
        </dl>
      )}

      {!done && (
        <div className="flex gap-2">
          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="min-h-[44px] px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Back
            </button>
          )}
          <button
            type="button"
            onClick={() => (step === 2 ? setDone(true) : next())}
            className="flex-1 min-h-[44px] px-3 py-2 rounded-lg text-xs font-semibold text-white flex items-center justify-center gap-1 cursor-pointer"
            style={{ backgroundColor: palette.hex }}
          >
            {step === 2 ? 'Create account' : 'Next'} <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
};
