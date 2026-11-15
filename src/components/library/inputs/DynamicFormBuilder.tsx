// @jxui/react v3.0.0 — DynamicFormBuilder (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Sparkles, Check, Send, RotateCcw } from 'lucide-react';

interface SchemaField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'select' | 'checkbox';
  options?: string[];
  placeholder?: string;
  required?: boolean;
}

const DEFAULT_SCHEMA: SchemaField[] = [
  { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Jane Doe', required: true },
  { id: 'workEmail', label: 'Work Email', type: 'email', placeholder: 'jane@company.com', required: true },
  { id: 'tier', label: 'Role Tier', type: 'select', options: ['Engineering', 'Design', 'Product', 'Executive'] },
  { id: 'agreed', label: 'Opt in to design system releases', type: 'checkbox' },
];

const INITIAL: Record<string, string | boolean> = {
  fullName: '',
  workEmail: '',
  tier: 'Engineering',
  agreed: true,
};

export const DynamicFormBuilder: React.FC = () => {
  const { palette, getRadiusClass, pushToast } = useJXTheme();
  const [formData, setFormData] = useState<Record<string, string | boolean>>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next: Record<string, string> = {};
    if (String(formData.fullName).trim().length < 2) next.fullName = 'Enter a name (at least 2 characters).';
    const email = String(formData.workEmail).trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.workEmail = 'Enter a valid email address.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    pushToast({
      title: 'Schema Form Validated',
      description: `Payload: ${JSON.stringify(formData)}`,
      variant: 'success',
    });
    setTimeout(() => setSubmitted(false), 2500);
  };

  const set = (id: string, v: string | boolean) => {
    setFormData((d) => ({ ...d, [id]: v }));
    setErrors((e) => ({ ...e, [id]: '' }));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2.5 text-xs text-left" noValidate>
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-1.5 mb-1">
        <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" style={{ color: palette.hex }} />
          <span>Dynamic Schema Engine</span>
        </span>
        <span className="font-mono text-[10px] text-slate-400">4 fields</span>
      </div>

      {DEFAULT_SCHEMA.map((field) => {
        if (field.type === 'checkbox') {
          return (
            <label key={field.id} className="flex items-center gap-2 cursor-pointer pt-0.5 min-h-[36px]">
              <input
                type="checkbox"
                checked={Boolean(formData[field.id])}
                onChange={(e) => set(field.id, e.target.checked)}
                className="w-4 h-4 rounded"
                style={{ accentColor: palette.hex }}
              />
              <span className="text-[11px] text-slate-600 dark:text-slate-400">{field.label}</span>
            </label>
          );
        }

        if (field.type === 'select') {
          return (
            <div key={field.id} className="flex flex-col gap-1">
              <label htmlFor={`jx-dfb-${field.id}`} className="text-[11px] font-medium text-slate-600 dark:text-slate-400">{field.label}</label>
              <select
                id={`jx-dfb-${field.id}`}
                value={String(formData[field.id])}
                onChange={(e) => set(field.id, e.target.value)}
                className={`min-h-[44px] px-2.5 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white ${getRadiusClass('control')} text-xs`}
              >
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          );
        }

        return (
          <div key={field.id} className="flex flex-col gap-1">
            <label htmlFor={`jx-dfb-${field.id}`} className="text-[11px] font-medium text-slate-600 dark:text-slate-400">
              {field.label}{field.required && ' *'}
            </label>
            <input
              id={`jx-dfb-${field.id}`}
              type={field.type}
              value={String(formData[field.id])}
              placeholder={field.placeholder}
              aria-invalid={Boolean(errors[field.id])}
              onChange={(e) => set(field.id, e.target.value)}
              className={`min-h-[44px] px-2.5 py-1.5 bg-slate-50 dark:bg-slate-900 border text-slate-900 dark:text-white ${getRadiusClass('control')} text-xs ${
                errors[field.id] ? 'border-rose-500' : 'border-slate-300 dark:border-slate-700'
              }`}
            />
            {errors[field.id] && <span className="text-[11px] text-rose-600 dark:text-rose-400">{errors[field.id]}</span>}
          </div>
        );
      })}

      <div className="flex gap-2">
        <button
          type="submit"
          className={`flex-1 min-h-[44px] py-1.5 px-3 rounded-lg text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
            submitted ? 'bg-emerald-600' : ''
          }`}
          style={submitted ? undefined : { backgroundColor: palette.hex }}
        >
          {submitted ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
          <span>{submitted ? 'Validated' : 'Submit Schema'}</span>
        </button>
        <button
          type="button"
          onClick={() => {
            setFormData(INITIAL);
            setErrors({});
          }}
          aria-label="Reset form"
          className="min-w-[44px] min-h-[44px] px-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center gap-1 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>
      {submitted && (
        <pre className="px-2.5 py-2 rounded-lg bg-slate-950 text-emerald-400 font-mono text-[11px] overflow-x-auto">
          {JSON.stringify(formData, null, 2)}
        </pre>
      )}
    </form>
  );
};
