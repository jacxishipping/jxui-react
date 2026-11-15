// @jxui/react v3.0.0 — MultiLevelMenu (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { ChevronRight, Check } from 'lucide-react';

// 19. MultiLevelMenu — three top-level items, each opening a real submenu on
// click (hover also opens). Submenu choices are selectable with a checkmark,
// Escape closes everything, and the selection is shown below.
const MENU = [
  { id: 'export', label: 'Export', items: ['JSON Tokens', 'CSS Variables', 'Tailwind Config'] },
  { id: 'share', label: 'Share', items: ['Copy link', 'Embed code', 'Send to team'] },
  { id: 'view', label: 'View', items: ['Grid', 'List', 'Compact'] },
];

export const MultiLevelMenu: React.FC = () => {
  const { palette, getRadiusClass } = useJXTheme();
  const [openId, setOpenId] = useState<string | null>(null);
  const [selected, setSelected] = useState<{ parent: string; item: string } | null>(null);

  return (
    <div className="relative">
      <div
        className={`w-48 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl ${getRadiusClass('control')} text-xs`}
        onKeyDown={(e) => { if (e.key === 'Escape') setOpenId(null); }}
      >
        {MENU.map((group) => (
          <button
            key={group.id}
            type="button"
            onClick={() => setOpenId((o) => (o === group.id ? null : group.id))}
            onMouseEnter={() => setOpenId(group.id)}
            aria-expanded={openId === group.id}
            aria-haspopup="true"
            className={`w-full min-h-[36px] flex items-center justify-between px-2.5 py-1.5 rounded cursor-pointer ${
              openId === group.id ? `${palette.softBg} ${palette.text} font-semibold` : 'hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <span>{group.label}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        ))}
      </div>
      {openId && (
        <div
          onMouseLeave={() => setOpenId(null)}
          className={`absolute top-0 left-52 ml-1 w-44 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl ${getRadiusClass('control')} text-xs z-20`}
          role="menu"
          aria-label={`${MENU.find((m) => m.id === openId)?.label} options`}
        >
          {MENU.find((m) => m.id === openId)?.items.map((item) => {
            const isSelected = selected?.parent === openId && selected?.item === item;
            return (
              <button
                key={item}
                type="button"
                role="menuitem"
                onClick={() => { setSelected({ parent: openId, item }); setOpenId(null); }}
                className={`w-full min-h-[36px] flex items-center justify-between px-2 py-1.5 rounded cursor-pointer text-left ${
                  isSelected ? `${palette.softBg} ${palette.text} font-semibold` : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>{item}</span>
                {isSelected && <Check className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>
      )}
      <p className="mt-2 text-xs text-slate-500" aria-live="polite">
        {selected ? `Selected: ${selected.parent} → ${selected.item}` : 'Open a menu and pick an option.'}
      </p>
    </div>
  );
};
