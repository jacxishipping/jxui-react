// @jxui/react v3.0.0 — CollapsibleNavigation (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { ChevronDown } from 'lucide-react';

// 7. CollapsibleNavigation — three collapsible sections; links are selectable
// and the active link is highlighted with the theme accent.
const SECTIONS = [
  { id: 'components', title: 'Components', links: ['Buttons (20)', 'Inputs (18)', 'Navigation (20)'] },
  { id: 'surfaces', title: 'Surfaces', links: ['Glassmorphism (20)', 'Cards (18)', 'Modals (16)'] },
  { id: 'enterprise', title: 'Enterprise', links: ['Data Grids (12)', 'Charts (14)', 'AI (13)'] },
];

export const CollapsibleNavigation: React.FC = () => {
  const { palette } = useJXTheme();
  const [open, setOpen] = useState<Record<string, boolean>>({ components: true });
  const [active, setActive] = useState('Buttons (20)');

  return (
    <div className="w-52 text-xs font-medium space-y-1">
      {SECTIONS.map((section) => {
        const isOpen = Boolean(open[section.id]);
        return (
          <div key={section.id}>
            <button
              type="button"
              onClick={() => setOpen((o) => ({ ...o, [section.id]: !o[section.id] }))}
              aria-expanded={isOpen}
              className="w-full min-h-[36px] flex items-center justify-between px-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer text-slate-800 dark:text-slate-200"
            >
              <span>{section.title}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
              <div className="pl-3 flex flex-col gap-0.5 pt-0.5">
                {section.links.map((link) => (
                  <button
                    key={link}
                    type="button"
                    onClick={() => setActive(link)}
                    aria-current={active === link ? 'page' : undefined}
                    className={`min-h-[32px] px-2 py-1 text-left rounded cursor-pointer ${
                      active === link
                        ? `${palette.softBg} ${palette.text} font-semibold`
                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {link}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
      <p className="pt-1 text-[11px] text-slate-400" aria-live="polite">
        Viewing: {active}
      </p>
    </div>
  );
};
