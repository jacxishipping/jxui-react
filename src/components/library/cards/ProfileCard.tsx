// @jxui/react v3.0.0 — ProfileCard (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { MessageCircle, Check } from 'lucide-react';

// 14. ProfileCard — a profile card with follow/unfollow (follower count
// updates), a message button with a sent confirmation, and live stats.
export const ProfileCard: React.FC = () => {
  const { palette } = useJXTheme();
  const [following, setFollowing] = useState(false);
  const [followers, setFollowers] = useState(1284);
  const [messaged, setMessaged] = useState(false);

  return (
    <div className="p-4 border rounded-xl bg-white dark:bg-slate-900 flex flex-col gap-3 text-xs">
      <div className="flex items-center gap-3">
        <div className={`w-11 h-11 rounded-full ${palette.bg} text-white flex items-center justify-center font-bold text-sm shrink-0`}>
          AM
        </div>
        <div className="min-w-0">
          <div className="font-bold text-sm text-slate-900 dark:text-white truncate">Alex Mercer</div>
          <div className="text-[11px] text-slate-500">Core Architect · @jacxishipping</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center">
        {[
          { label: 'Components', value: 61 },
          { label: 'Followers', value: followers },
          { label: 'Following', value: 214 },
        ].map((s) => (
          <div key={s.label} className="rounded-lg bg-slate-50 dark:bg-slate-800 py-1.5">
            <div className="font-mono font-bold text-slate-900 dark:text-white">{s.value.toLocaleString()}</div>
            <div className="text-[10px] text-slate-400">{s.label}</div>
          </div>
        ))}
      </div>
      <p className="text-[11px] leading-relaxed text-slate-500">
        Building the unified React component suite. Previously design systems at scale.
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => { setFollowing((f) => !f); setFollowers((n) => (following ? n - 1 : n + 1)); }}
          aria-pressed={following}
          className={`min-h-[36px] flex-1 rounded-lg font-semibold cursor-pointer text-white ${following ? 'bg-emerald-600' : palette.bg}`}
        >
          {following ? '✓ Following' : 'Follow'}
        </button>
        <button
          type="button"
          onClick={() => { setMessaged(true); setTimeout(() => setMessaged(false), 2000); }}
          className="min-h-[36px] px-3 rounded-lg border border-slate-200 dark:border-slate-700 inline-flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          {messaged ? 'Sent!' : 'Message'}
        </button>
      </div>
      {messaged && (
        <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
          <Check className="w-3.5 h-3.5" /> Message sent to Alex.
        </span>
      )}
    </div>
  );
};
