// @jxui/react v3.0.0 — MegaMenu (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { ChevronDown } from 'lucide-react';

// 8. MegaMenu — a trigger button opens a three-column mega panel; every link
// is a real button that selects a destination, shows it below and closes
// the panel. Escape closes it too.
const COLUMNS = [
  { title: 'Actions', links: ['Magnetic Buttons', 'Hold to Confirm', 'Slide to Action'] },
  { title: 'Surfaces', links: ['Liquid Glass', 'Frosted Panel', 'Adaptive Glass'] },
  { title: 'Enterprise', links: ['Notion Data Grid', 'Waveform Scrubber', 'Canary Splitter'] },
];

export const MegaMenu: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => { if (e.key === 'Escape') setOpen(false); }}
        aria-expanded={open}
        aria-haspopup="true"
        className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer ${
          open ? `${palette.bg} text-white` : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
        }`}
      >
        Browse components
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div
          className={`absolute top-full left-0 mt-2 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl ${getRadiusClass('card')} grid grid-cols-3 gap-4 w-[26rem] max-w-[90vw] z-20`}
          role="menu"
          aria-label="Component categories"
        >
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h5 className="font-bold text-xs text-slate-900 dark:text-white mb-2">{col.title}</h5>
              <div className="flex flex-col gap-0.5">
                {col.links.map((link) => (
                  <button
                    key={link}
                    type="button"
                    role="menuitem"
                    onClick={() => { setSelected(link); setOpen(false); }}
                    className={`min-h-[36px] px-2 py-1.5 rounded text-left text-xs cursor-pointer ${
                      selected === link ? `${palette.softBg} ${palette.text} font-semibold` : 'text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      <p className="mt-2 text-xs text-slate-500" aria-live="polite">
        {selected ? `Selected: ${selected}` : 'Pick a category to jump to it.'}
      </p>
    </div>
  );
};
