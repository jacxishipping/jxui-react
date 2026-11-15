// @jxui/react v3.0.0 — TagInput (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { X } from 'lucide-react';

// 11. TagInput — type a tag and press Enter (or comma) to add it. Backspace
// with an empty field removes the last tag, duplicates are rejected with a
// message, and each tag has an accessible remove button.
const MAX_TAGS = 8;

export const TagInput: React.FC = () => {
  const [tags, setTags] = useState(['v3.0', 'stable']);
  const [inputVal, setInputVal] = useState('');
  const [notice, setNotice] = useState('');
  const { palette } = useJXTheme();

  const addTag = (raw: string) => {
    const tag = raw.trim().replace(/,$/, '');
    if (!tag) return;
    if (tags.includes(tag)) {
      setNotice(`“${tag}” is already added.`);
      return;
    }
    if (tags.length >= MAX_TAGS) {
      setNotice(`Maximum ${MAX_TAGS} tags.`);
      return;
    }
    setTags([...tags, tag]);
    setNotice('');
  };

  return (
    <div className="w-full flex flex-col gap-1">
      <div className="flex flex-wrap items-center gap-1.5 p-2 min-h-[44px] bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg">
        {tags.map((t) => (
          <span key={t} className={`px-2 py-0.5 text-xs text-white ${palette.bg} rounded font-mono flex items-center gap-1`}>
            {t}
            <button
              type="button"
              onClick={() => setTags(tags.filter((x) => x !== t))}
              aria-label={`Remove tag ${t}`}
              className="min-w-[24px] min-h-[24px] flex items-center justify-center rounded-full hover:bg-black/15 cursor-pointer"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => {
            if ((e.key === 'Enter' || e.key === ',') && inputVal.trim()) {
              e.preventDefault();
              addTag(inputVal);
              setInputVal('');
            } else if (e.key === 'Backspace' && !inputVal && tags.length > 0) {
              setTags(tags.slice(0, -1));
            }
          }}
          placeholder={tags.length >= MAX_TAGS ? 'Tag limit reached' : 'Type tag & Enter...'}
          disabled={tags.length >= MAX_TAGS}
          aria-label="Add a tag"
          className="text-xs bg-transparent text-slate-900 dark:text-white min-w-[120px] flex-1 min-h-[36px]"
        />
      </div>
      <span className={`text-[11px] font-mono ${notice ? 'text-amber-600 dark:text-amber-400' : 'text-slate-400'}`}>
        {notice || `${tags.length} of ${MAX_TAGS} tags · Enter to add · Backspace to remove last`}
      </span>
    </div>
  );
};
