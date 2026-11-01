import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Check,
  Code2,
  Copy,
  Search,
  ShieldCheck,
} from 'lucide-react';
import { JXAccordion } from './surfaces/JXAccordion';
import { JXCard } from './surfaces/JXCard';
import { JXButton } from './inputs/JXButton';
import { JXTextField } from './inputs/JXTextField';
import { JXTabs, JXTabItem } from './navigation/JXTabs';
import { InteractiveComponentPreview } from './InteractiveComponentPreview';
import {
  UNIFIED_CATEGORIES_18,
  UNIFIED_COMPONENTS_351,
  UNIFIED_STATS,
  UnifiedComponentSpec,
} from '../data/unifiedCatalog';
import { copyTextToClipboard } from '../utils/rawSourceLoader';

export interface DocumentationCenterProps {
  onBackToWorkbench: () => void;
}

type ComponentTierFilter = 'all' | 'showcase' | 'primitive';
const DOCS_PAGE_SIZE = 48;

const getInitialComponentId = (): string => {
  if (typeof window === 'undefined') return UNIFIED_COMPONENTS_351[0]?.id || '';
  return new URLSearchParams(window.location.search).get('doc') || UNIFIED_COMPONENTS_351[0]?.id || '';
};

export const DocumentationCenter: React.FC<DocumentationCenterProps> = ({
  onBackToWorkbench,
}) => {
  const [query, setQuery] = useState('');
  const [categoryId, setCategoryId] = useState(() => {
    if (typeof window === 'undefined') return 'all';
    const linkedComponentId = new URLSearchParams(window.location.search).get('doc');
    if (!linkedComponentId) return 'all';
    return UNIFIED_COMPONENTS_351.find((item) => item.id === linkedComponentId)?.categoryId || 'all';
  });
  const [tier, setTier] = useState<ComponentTierFilter>('all');
  const [selectedComponentId, setSelectedComponentId] = useState(getInitialComponentId);
  const [visibleCount, setVisibleCount] = useState(DOCS_PAGE_SIZE);
  const [copied, setCopied] = useState<'install' | 'usage' | null>(null);

  const filteredComponents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return UNIFIED_COMPONENTS_351.filter((component) => {
      if (categoryId !== 'all' && component.categoryId !== categoryId) return false;
      if (tier !== 'all' && component.tier !== tier) return false;
      if (!normalizedQuery) return true;

      return (
        component.name.toLowerCase().includes(normalizedQuery) ||
        component.subtitle.toLowerCase().includes(normalizedQuery) ||
        component.categoryTitle.toLowerCase().includes(normalizedQuery) ||
        component.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery)) ||
        component.doc.summary.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [categoryId, query, tier]);

  useEffect(() => {
    setVisibleCount(DOCS_PAGE_SIZE);
  }, [categoryId, query, tier]);

  const visibleComponents = filteredComponents.slice(0, visibleCount);

  const selectedComponent =
    filteredComponents.find((component) => component.id === selectedComponentId) ||
    filteredComponents[0] ||
    null;

  useEffect(() => {
    if (selectedComponent && selectedComponent.id !== selectedComponentId) {
      setSelectedComponentId(selectedComponent.id);
    }
  }, [selectedComponent, selectedComponentId]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    url.searchParams.set('view', 'docs');
    if (selectedComponent) {
      url.searchParams.set('doc', selectedComponent.id);
    } else {
      url.searchParams.delete('doc');
    }
    window.history.replaceState(null, '', url.toString());
  }, [selectedComponent?.id]);

  const handleCopy = async (value: string, type: 'install' | 'usage') => {
    await copyTextToClipboard(value);
    setCopied(type);
    window.setTimeout(() => setCopied(null), 1600);
  };

  const detailTabs: JXTabItem[] = selectedComponent
    ? [
        {
          id: 'overview',
          label: 'Overview',
          content: (
            <div className="space-y-5">
              <section>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">What it does</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {selectedComponent.doc.summary}
                </p>
              </section>
              <section>
                <div className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                  <Code2 aria-hidden="true" className="h-4 w-4 text-indigo-500" />
                  Interactive preview
                </div>
                <JXCard spotlight={false} hoverLift={false} className="!p-4">
                  <div className="flex min-h-40 items-center justify-center">
                    <InteractiveComponentPreview spec={selectedComponent} />
                  </div>
                </JXCard>
              </section>
              <div className="grid gap-4 lg:grid-cols-2">
                <section>
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Install</h3>
                    <JXButton
                      size="sm"
                      variant="outlined"
                      startIcon={copied === 'install' ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                      onClick={() => handleCopy(selectedComponent.doc.installation, 'install')}
                    >
                      {copied === 'install' ? 'Copied' : 'Copy'}
                    </JXButton>
                  </div>
                  <pre className="overflow-x-auto rounded-lg bg-slate-950 p-3 text-xs leading-5 text-slate-100">
                    <code>{`$ ${selectedComponent.doc.installation}`}</code>
                  </pre>
                </section>
                <section>
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Usage</h3>
                    <JXButton
                      size="sm"
                      variant="outlined"
                      startIcon={copied === 'usage' ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                      onClick={() => handleCopy(selectedComponent.doc.usageCode, 'usage')}
                    >
                      {copied === 'usage' ? 'Copied' : 'Copy'}
                    </JXButton>
                  </div>
                  <pre className="max-h-64 overflow-auto rounded-lg bg-slate-950 p-3 text-xs leading-5 text-slate-100">
                    <code>{selectedComponent.doc.usageCode}</code>
                  </pre>
                </section>
              </div>
            </div>
          ),
        },
        {
          id: 'api',
          label: 'API',
          count: selectedComponent.doc.props.length,
          content: (
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Props</h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {selectedComponent.doc.props.length} documented properties for this component.
                </p>
              </div>
              {selectedComponent.doc.props.length > 0 ? (
                <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
                  <table className="w-full min-w-[620px] border-collapse text-left text-xs">
                    <thead className="bg-slate-100 text-[11px] font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      <tr>
                        <th className="px-3 py-2.5">Property</th>
                        <th className="px-3 py-2.5">Type</th>
                        <th className="px-3 py-2.5">Default</th>
                        <th className="px-3 py-2.5">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      {selectedComponent.doc.props.map((property) => (
                        <tr key={property.name}>
                          <td className="px-3 py-2.5 font-mono font-semibold text-indigo-700 dark:text-indigo-300">
                            {property.name}{property.required ? ' *' : ''}
                          </td>
                          <td className="px-3 py-2.5 font-mono text-slate-600 dark:text-slate-300">{property.type}</td>
                          <td className="px-3 py-2.5 font-mono text-slate-600 dark:text-slate-300">{property.default || '—'}</td>
                          <td className="px-3 py-2.5 text-slate-600 dark:text-slate-300">{property.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="rounded-lg border border-slate-200 p-4 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">
                  No prop specification is available for this entry yet.
                </p>
              )}
            </div>
          ),
        },
        {
          id: 'accessibility',
          label: 'Accessibility',
          content: (
            <div className="space-y-5">
              <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/30">
                <div className="flex items-center gap-2 text-sm font-bold text-emerald-900 dark:text-emerald-200">
                  <ShieldCheck aria-hidden="true" className="h-4 w-4" />
                  Accessibility targets, not certification
                </div>
                <p className="mt-1 text-xs leading-5 text-emerald-800 dark:text-emerald-300">
                  Verify the component against the stated WCAG target with keyboard testing, contrast checks, and assistive technology before relying on conformance.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-bold text-slate-900 dark:text-white">ARIA roles</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedComponent.quality.ariaRoles.map((role) => (
                    <code key={role} className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      {role}
                    </code>
                  ))}
                </div>
              </div>
              <ul className="space-y-2">
                {selectedComponent.doc.accessibilityNotes.map((note) => (
                  <li key={note} className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    {note}
                  </li>
                ))}
              </ul>
              <section>
                <h3 className="mb-2 text-sm font-bold text-slate-900 dark:text-white">Keyboard behavior</h3>
                <ul className="space-y-2">
                  {selectedComponent.doc.keyboardShortcuts.map((shortcut) => (
                    <li key={shortcut} className="rounded-lg bg-slate-100 px-3 py-2 font-mono text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      {shortcut}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          ),
        },
        {
          id: 'responsive',
          label: 'Responsive',
          content: (
            <div className="space-y-5">
              <section>
                <h3 className="mb-2 text-sm font-bold text-slate-900 dark:text-white">Supported layouts</h3>
                <div className="grid gap-2 sm:grid-cols-3">
                  {(['mobile', 'tablet', 'desktop'] as const).map((viewport) => (
                    <div key={viewport} className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
                      <div className="text-sm font-semibold capitalize text-slate-900 dark:text-white">{viewport}</div>
                      <div className={`mt-1 text-xs ${selectedComponent.quality.responsive[viewport] ? 'text-emerald-700 dark:text-emerald-300' : 'text-slate-500 dark:text-slate-400'}`}>
                        {selectedComponent.quality.responsive[viewport] ? 'Listed as supported' : 'Not specified'}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {selectedComponent.doc.responsiveBehavior}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {selectedComponent.quality.responsive.breakpointNotes}
                </p>
              </section>
              <section>
                <h3 className="mb-2 text-sm font-bold text-slate-900 dark:text-white">Framework metadata</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedComponent.frameworks.map((framework) => (
                    <span key={framework} className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:text-slate-200">
                      {framework}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          ),
        },
        {
          id: 'guidance',
          label: 'Guidance',
          content: (
            <div className="space-y-5">
              <div className="grid gap-3 lg:grid-cols-2">
                <section className="rounded-lg border border-rose-200 bg-rose-50 p-4 dark:border-rose-900 dark:bg-rose-950/25">
                  <h3 className="text-sm font-bold text-rose-900 dark:text-rose-200">Common baseline limitation</h3>
                  <p className="mt-1 text-sm leading-6 text-rose-800 dark:text-rose-300">{selectedComponent.muiFlaw}</p>
                </section>
                <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/25">
                  <h3 className="text-sm font-bold text-emerald-900 dark:text-emerald-200">JXUI approach</h3>
                  <p className="mt-1 text-sm leading-6 text-emerald-800 dark:text-emerald-300">{selectedComponent.jxuiUpgrade}</p>
                </section>
              </div>
              <JXAccordion
                allowMultiple
                items={selectedComponent.doc.bestPractices.map((practice, index) => ({
                  id: `practice-${selectedComponent.id}-${index}`,
                  title: `Best practice ${index + 1}`,
                  subtitle: selectedComponent.name,
                  meta: 'Implementation guidance',
                  body: practice,
                }))}
              />
              <div className="flex flex-wrap gap-2">
                {selectedComponent.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ),
        },
      ]
    : [];

  return (
    <main className="mx-auto w-full max-w-[1600px] min-w-0 flex-1 space-y-5 px-3 py-5 sm:px-6 sm:py-7 lg:px-8">
      <header className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-5 dark:border-slate-800">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
            <BookOpen aria-hidden="true" className="h-4 w-4" />
            <span>JXUI Component Reference</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">Documentation</h1>
          <p className="mt-1 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            Browse practical usage, API, accessibility targets, responsive notes, and implementation guidance for every component.
          </p>
        </div>
        <JXButton variant="outlined" startIcon={<ArrowLeft className="h-4 w-4" />} onClick={onBackToWorkbench}>
          Workbench
        </JXButton>
      </header>

      <section className="grid grid-cols-2 gap-3 border-b border-slate-200 pb-5 dark:border-slate-800 sm:grid-cols-4">
        {[
          { label: 'Components', value: UNIFIED_STATS.totalComponents },
          { label: 'Categories', value: UNIFIED_STATS.totalCategories },
          { label: 'Showcases', value: UNIFIED_STATS.totalShowcases },
          { label: 'Primitives', value: UNIFIED_STATS.totalPrimitives },
        ].map((stat) => (
          <div key={stat.label} className="flex items-baseline gap-2">
            <span
              data-testid={stat.label === 'Components' ? 'docs-component-total' : undefined}
              className="font-mono text-xl font-bold tabular-nums text-slate-950 dark:text-white"
            >
              {stat.value}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</span>
          </div>
        ))}
      </section>

      <div className="grid min-w-0 gap-4 xl:grid-cols-[220px_280px_minmax(0,1fr)]">
        <nav aria-label="Documentation categories" className="hidden min-w-0 xl:block">
          <h2 className="mb-2 text-xs font-bold uppercase text-slate-500 dark:text-slate-400">Categories</h2>
          <div className="max-h-[calc(100vh-17rem)] space-y-1 overflow-y-auto pr-1">
            <JXButton
              size="sm"
              fullWidth
              variant={categoryId === 'all' ? 'contained' : 'text'}
              className="justify-start text-left"
              onClick={() => setCategoryId('all')}
            >
              All categories <span className="ml-auto font-mono">{UNIFIED_STATS.totalComponents}</span>
            </JXButton>
            {UNIFIED_CATEGORIES_18.map((category) => (
              <JXButton
                key={category.id}
                size="sm"
                fullWidth
                variant={categoryId === category.id ? 'contained' : 'text'}
                className="justify-start text-left"
                onClick={() => setCategoryId(category.id)}
              >
                <span className="truncate">{category.title.replace(/^Category \d+:\s*/, '')}</span>
                <span className="ml-auto shrink-0 font-mono">{category.totalCount}</span>
              </JXButton>
            ))}
          </div>
        </nav>

        <section className="min-w-0 space-y-3" aria-label="Component index">
          <div className="xl:hidden">
            <label htmlFor="docs-category" className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300">Category</label>
            <select
              id="docs-category"
              value={categoryId}
              onChange={(event) => setCategoryId(event.target.value)}
              className="min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            >
              <option value="all">All categories ({UNIFIED_STATS.totalComponents})</option>
              {UNIFIED_CATEGORIES_18.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title.replace(/^Category \d+:\s*/, '')} ({category.totalCount})
                </option>
              ))}
            </select>
          </div>
          <JXTextField
            label="Find a component"
            value={query}
            onChange={setQuery}
            placeholder="Search names, tags, or descriptions"
            startIcon={<Search className="h-4 w-4" />}
            maxLength={100}
            showCharacterCounter={false}
          />
          <JXTabs
            indicatorVariant="pill"
            value={tier}
            onChange={(value) => setTier(value as ComponentTierFilter)}
            tabs={[
              { id: 'all', label: 'All', count: UNIFIED_STATS.totalComponents },
              { id: 'showcase', label: 'Showcase', count: UNIFIED_STATS.totalShowcases },
              { id: 'primitive', label: 'Primitive', count: UNIFIED_STATS.totalPrimitives },
            ]}
            className="[&_[role=tabpanel]]:hidden"
          />
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>{visibleComponents.length} of {filteredComponents.length} components</span>
            <span>{categoryId === 'all' ? 'All categories' : UNIFIED_CATEGORIES_18.find((item) => item.id === categoryId)?.shortTitle}</span>
          </div>
          <div className="max-h-[420px] space-y-1 overflow-y-auto rounded-lg border border-slate-200 p-2 dark:border-slate-800 xl:max-h-[calc(100vh-25rem)]">
            {visibleComponents.length > 0 ? visibleComponents.map((component) => (
              <button
                key={component.id}
                type="button"
                onClick={() => setSelectedComponentId(component.id)}
                aria-pressed={selectedComponent?.id === component.id}
                data-testid="docs-component-row"
                data-component-id={component.id}
                className={`flex min-h-[40px] w-full min-w-0 items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jx-accent-halo)] ${
                  selectedComponent?.id === component.id
                    ? 'bg-indigo-50 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-200'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-[#1E293B]'
                }`}
              >
                <span className="min-w-0 flex-1 truncate">{component.name}</span>
                <span className="ml-auto shrink-0 font-mono text-[10px] opacity-70">
                  {component.tier === 'showcase' ? `#${component.showcaseNumber}` : 'Primitive'}
                </span>
              </button>
            )) : (
              <div className="px-3 py-8 text-center text-sm text-slate-500 dark:text-slate-400">
                No components match these filters.
              </div>
            )}
          </div>
          {visibleCount < filteredComponents.length && (
            <JXButton
              variant="outlined"
              fullWidth
              onClick={() => setVisibleCount((count) => Math.min(count + DOCS_PAGE_SIZE, filteredComponents.length))}
            >
              Load {Math.min(DOCS_PAGE_SIZE, filteredComponents.length - visibleCount)} more components
            </JXButton>
          )}
        </section>

        <section className="min-w-0" aria-label="Component documentation">
          {selectedComponent ? (
            <div className="space-y-4">
              <header className="border-b border-slate-200 pb-4 dark:border-slate-800">
                <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span>{selectedComponent.categoryTitle.replace(/^Category \d+:\s*/, '')}</span>
                  <span aria-hidden="true">/</span>
                  <span>{selectedComponent.tier === 'showcase' ? 'Showcase' : 'Primitive'}</span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 font-mono dark:bg-slate-800">{selectedComponent.difficulty}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-950 dark:text-white sm:text-2xl">{selectedComponent.name}</h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{selectedComponent.subtitle}</p>
              </header>
              <JXTabs key={selectedComponent.id} indicatorVariant="underline" tabs={detailTabs} />
            </div>
          ) : (
            <div className="flex min-h-64 items-center justify-center rounded-lg border border-dashed border-slate-300 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
              No component is selected. Clear the search or choose another category.
            </div>
          )}
        </section>
      </div>
    </main>
  );
};