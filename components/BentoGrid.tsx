'use client';
import { useState } from 'react';
import { BentoTile } from '@/components/BentoTile';
import type { Tool, ToolCategory } from '@/lib/tools-registry';

type FilterTab = 'all' | ToolCategory;

const TABS: { key: FilterTab; label: string }[] = [
  { key: 'all',              label: 'All Tools'  },
  { key: 'developer',       label: 'Developer'  },
  { key: 'image',           label: 'Image'      },
  { key: 'text',            label: 'Text'       },
  { key: 'converter',       label: 'Converters' },
  { key: 'calculator',      label: 'Calculators'},
  { key: 'pakistan-utility',label: '🇵🇰 Pakistan' },
];

type Props = { tools: Tool[] };

export function BentoGrid({ tools }: Props): React.ReactElement {
  const [active, setActive] = useState<FilterTab>('all');

  const filtered = active === 'all' ? tools : tools.filter(t => t.category === active);

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
      {/* Category filter tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
        {TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)] ${
              active === tab.key
                ? 'bg-[var(--accent-indigo)] border-[var(--accent-indigo)] text-white'
                : 'border-[var(--border-default)] hover:border-[var(--accent-indigo)] hover:bg-[var(--bg-surface-hover)]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="text-sm text-[var(--text-muted)] mb-4">
        {filtered.length} tool{filtered.length !== 1 ? 's' : ''}
        {active !== 'all' ? ` in ${TABS.find(t => t.key === active)?.label}` : ''}
      </p>

      {/* Bento grid */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {filtered.map(tool => (
          <BentoTile key={tool.id} tool={tool} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center text-[var(--text-muted)]">
          No tools found in this category.
        </div>
      )}
    </section>
  );
}
