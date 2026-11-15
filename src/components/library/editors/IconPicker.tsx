// @jxui/react v3.0.0 — IconPicker (JXUI v3.0 Unified Component Suite)
import React, { useState, useMemo } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Search, Copy, Check, Bold, Italic, Link, Code, Eye, Layers, Palette, Smile, Check as CheckIcon, Plus, Sliders, Star, Heart, Zap, Search as SearchIcon, Settings, Home, User, Bell, Calendar, Camera, Music, Globe, Lock, Download, Upload, Trash2, Edit, Save, Filter, Menu, X, ChevronRight, ArrowRight } from 'lucide-react';

// 13. IconPicker — search the icon set, pick one, see it large and copy the
// import statement for it.
const ICONS: { name: string; icon: React.ReactNode }[] = [
  { name: 'Bold', icon: <Bold className="w-5 h-5" /> }, { name: 'Italic', icon: <Italic className="w-5 h-5" /> },
  { name: 'Link', icon: <Link className="w-5 h-5" /> }, { name: 'Code', icon: <Code className="w-5 h-5" /> },
  { name: 'Eye', icon: <Eye className="w-5 h-5" /> }, { name: 'Layers', icon: <Layers className="w-5 h-5" /> },
  { name: 'Palette', icon: <Palette className="w-5 h-5" /> }, { name: 'Smile', icon: <Smile className="w-5 h-5" /> },
  { name: 'Check', icon: <CheckIcon className="w-5 h-5" /> }, { name: 'Plus', icon: <Plus className="w-5 h-5" /> },
  { name: 'Sliders', icon: <Sliders className="w-5 h-5" /> }, { name: 'Star', icon: <Star className="w-5 h-5" /> },
  { name: 'Heart', icon: <Heart className="w-5 h-5" /> }, { name: 'Zap', icon: <Zap className="w-5 h-5" /> },
  { name: 'Search', icon: <SearchIcon className="w-5 h-5" /> }, { name: 'Settings', icon: <Settings className="w-5 h-5" /> },
  { name: 'Home', icon: <Home className="w-5 h-5" /> }, { name: 'User', icon: <User className="w-5 h-5" /> },
  { name: 'Bell', icon: <Bell className="w-5 h-5" /> }, { name: 'Calendar', icon: <Calendar className="w-5 h-5" /> },
  { name: 'Camera', icon: <Camera className="w-5 h-5" /> }, { name: 'Music', icon: <Music className="w-5 h-5" /> },
  { name: 'Globe', icon: <Globe className="w-5 h-5" /> }, { name: 'Lock', icon: <Lock className="w-5 h-5" /> },
  { name: 'Download', icon: <Download className="w-5 h-5" /> }, { name: 'Upload', icon: <Upload className="w-5 h-5" /> },
  { name: 'Trash', icon: <Trash2 className="w-5 h-5" /> }, { name: 'Edit', icon: <Edit className="w-5 h-5" /> },
  { name: 'Save', icon: <Save className="w-5 h-5" /> }, { name: 'Filter', icon: <Filter className="w-5 h-5" /> },
  { name: 'Menu', icon: <Menu className="w-5 h-5" /> }, { name: 'Close', icon: <X className="w-5 h-5" /> },
  { name: 'ChevronRight', icon: <ChevronRight className="w-5 h-5" /> }, { name: 'ArrowRight', icon: <ArrowRight className="w-5 h-5" /> },
];

export const IconPicker: React.FC = () => {
  const { palette } = useJXTheme();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(ICONS[0]);
  const [copied, setCopied] = useState(false);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? ICONS.filter((i) => i.name.toLowerCase().includes(q)) : ICONS;
  }, [query]);

  const copy = async () => {
    try { await navigator.clipboard.writeText(`import { ${selected.name} } from 'lucide-react';`); } catch { /* clipboard unavailable */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 space-y-2.5 text-xs">
      <div className="flex items-center gap-2">
        <div className="relative flex-1 min-w-0">
          <Search className="w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search icons…" aria-label="Search icons" className="w-full min-h-[36px] pl-9 pr-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-800 dark:text-slate-200" />
        </div>
        <div className={`min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg ${palette.softBg} ${palette.text}`} aria-label="Selected icon preview">{selected.icon}</div>
      </div>
      <div className="grid grid-cols-8 gap-1 max-h-40 overflow-y-auto pr-1">
        {shown.map((item) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setSelected(item)}
            aria-label={`Pick ${item.name} icon`}
            aria-pressed={selected.name === item.name}
            title={item.name}
            className={`min-h-[44px] min-w-[44px] rounded-lg flex items-center justify-center cursor-pointer text-slate-700 dark:text-slate-200 ${selected.name === item.name ? `ring-2 ${palette.border} ${palette.softBg}` : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            {item.icon}
          </button>
        ))}
        {shown.length === 0 && <p className="col-span-8 text-center text-slate-400 py-2">No icon matches “{query}”.</p>}
      </div>
      <div className="flex items-center gap-2">
        <code className="flex-1 min-w-0 min-h-[36px] px-2 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono text-[11px] text-slate-600 dark:text-slate-300 truncate">{`import { ${selected.name} } from 'lucide-react';`}</code>
        <button type="button" onClick={copy} className={`min-h-[44px] px-3 inline-flex items-center gap-1.5 rounded-lg text-white font-semibold cursor-pointer ${palette.bg}`}>
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
};
