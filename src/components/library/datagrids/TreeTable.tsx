// @jxui/react v3.0.0 — TreeTable (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { ChevronRight, Folder, FolderOpen, FileCode } from 'lucide-react';

// 5. TreeTable — a real tree table: folders expand and collapse, each row
// carries columns (name, files, size) like a file explorer.
type Node = { name: string; files?: number; size: string; children?: Node[] };
const TREE: Node[] = [
  {
    name: 'src', size: '6.8 MB', children: [
      { name: 'components', files: 361, size: '5.1 MB', children: [
        { name: 'JXButton.tsx', size: '18 KB' },
        { name: 'JXDataGrid.tsx', size: '24 KB' },
        { name: 'JXCharts.tsx', size: '31 KB' },
      ]},
      { name: 'data', files: 3, size: '240 KB', children: [
        { name: 'catalog.ts', size: '96 KB' },
        { name: 'unifiedCatalog.ts', size: '88 KB' },
      ]},
      { name: 'utils', files: 6, size: '120 KB' },
    ],
  },
  { name: 'public', files: 4, size: '380 KB' },
];

function TreeRows({ nodes, depth, open, toggle }: { nodes: Node[]; depth: number; open: Record<string, boolean>; toggle: (p: string) => void }) {
  return (
    <>
      {nodes.map((node) => {
        const path = `${depth}-${node.name}`;
        const isFolder = Boolean(node.children);
        const isOpen = Boolean(open[path]);
        return (
          <React.Fragment key={path}>
            <tr className="border-b border-slate-100 dark:border-slate-800 last:border-0">
              <td className="px-2 py-1.5">
                <button
                  type="button"
                  onClick={() => isFolder && toggle(path)}
                  aria-expanded={isFolder ? isOpen : undefined}
                  style={{ paddingLeft: depth * 16 }}
                  className="min-h-[32px] flex items-center gap-1.5 text-left font-mono text-slate-800 dark:text-slate-200 cursor-pointer rounded hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  {isFolder ? (
                    <>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                      {isOpen ? <FolderOpen className="w-4 h-4 shrink-0 text-amber-500" /> : <Folder className="w-4 h-4 shrink-0 text-amber-500" />}
                    </>
                  ) : (
                    <FileCode className="w-4 h-4 shrink-0 text-emerald-500 ml-5" />
                  )}
                  <span className="truncate">{node.name}</span>
                </button>
              </td>
              <td className="px-2 py-1.5 text-right text-slate-500">{node.files ?? '—'}</td>
              <td className="px-2 py-1.5 text-right font-mono text-slate-500">{node.size}</td>
            </tr>
            {isFolder && isOpen && node.children && (
              <TreeRows nodes={node.children} depth={depth + 1} open={open} toggle={toggle} />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}

export const TreeTable: React.FC = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({ '0-src': true, '1-components': true });
  const toggle = (path: string) => setOpen((o) => ({ ...o, [path]: !o[path] }));
  return (
    <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden text-xs">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300">
            <th className="px-2 py-2 font-semibold">Name</th>
            <th className="px-2 py-2 font-semibold text-right">Files</th>
            <th className="px-2 py-2 font-semibold text-right">Size</th>
          </tr>
        </thead>
        <tbody>
          <TreeRows nodes={TREE} depth={0} open={open} toggle={toggle} />
        </tbody>
      </table>
    </div>
  );
};
