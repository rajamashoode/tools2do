'use client';

import { ArrowRight, Search, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TOOLS_REGISTRY, type Tool } from '@/lib/tools-registry';

type Props = { open: boolean; onClose: () => void };

function scoreTool(tool: Tool, query: string): number {
  const haystack = `${tool.name} ${tool.description} ${tool.keywords.join(' ')}`.toLowerCase();
  const needle = query.trim().toLowerCase();
  if (!needle) return tool.isFeatured ? 3 : 1;
  if (tool.name.toLowerCase().includes(needle)) return 15;
  if (haystack.includes(needle)) return 10;
  return needle.split('').every((ch) => haystack.includes(ch)) ? 4 : 0;
}

export function CommandPalette({ open, onClose }: Props): React.ReactElement | null {
  const [query, setQuery]       = useState('');
  const [selected, setSelected] = useState(0);
  const router = useRouter();

  const results = useMemo<Tool[]>(() => {
    return TOOLS_REGISTRY
      .map((tool) => ({ tool, score: scoreTool(tool, query) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
      .map((item) => item.tool);
  }, [query]);

  useEffect(() => { setSelected(0); }, [query, open]);

  // Reset query when palette closes
  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent): void {
      // Ctrl+K / Cmd+K — open palette (fired from Navbar button, HeroSearchBar, or keyboard)
      if (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        // If already open, close; otherwise the parent (Navbar) will open via its own state
        if (open) onClose();
        return;
      }

      if (!open) return;

      if (event.key === 'Escape') { onClose(); return; }

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setSelected((v) => Math.min(v + 1, results.length - 1));
        return;
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setSelected((v) => Math.max(v - 1, 0));
        return;
      }
      if (event.key === 'Enter' && results[selected]) {
        router.push(results[selected].slug);
        onClose();
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, open, results, router, selected]);

  if (!open) return null;

  const groups: Array<{ title: string; tools: Tool[] }> = [
    { title: 'Developer Tools',    tools: results.filter((t) => !t.isPakistani) },
    { title: 'Pakistan Utilities', tools: results.filter((t) =>  t.isPakistani) },
  ];

  return (
    <div
      className="fixed inset-0 z-[80] bg-black/60 p-4 backdrop-blur-lg"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      {/* Click-outside to close */}
      <button
        type="button"
        aria-label="Close command palette"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
        tabIndex={-1}
      />

      <div className="relative mx-auto mt-16 max-w-3xl overflow-hidden rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-2xl">
        {/* Input row */}
        <div className="flex items-center gap-3 border-b border-[var(--border-default)] px-4 py-3">
          <Search className="h-5 w-5 shrink-0 text-[var(--text-muted)]" aria-hidden="true" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a tool name or shortcut... (⌘K)"
            className="w-full bg-transparent text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]"
            aria-label="Search tools"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-2 text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[65vh] overflow-y-auto p-3">
          {groups.map((group) =>
            group.tools.length > 0 ? (
              <section key={group.title} className="py-2" aria-labelledby={`group-${group.title.replaceAll(' ', '-')}`}>
                <h2
                  id={`group-${group.title.replaceAll(' ', '-')}`}
                  className="px-3 py-2 text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)]"
                >
                  {group.title}
                </h2>
                <ul className="space-y-1" role="listbox">
                  {group.tools.map((tool) => {
                    const idx    = results.findIndex((t) => t.id === tool.id);
                    const active = idx === selected;
                    return (
                      <li key={tool.id} role="option" aria-selected={active}>
                        <button
                          type="button"
                          onMouseEnter={() => setSelected(idx)}
                          onClick={() => { router.push(tool.slug); onClose(); }}
                          className={`flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)] ${active ? 'bg-[var(--bg-surface-hover)]' : 'hover:bg-[var(--bg-surface-hover)]'}`}
                        >
                          <span>
                            <span className="block font-semibold text-[var(--text-primary)]">{tool.name}</span>
                            <span className="block text-sm text-[var(--text-secondary)]">{tool.description}</span>
                          </span>
                          <ArrowRight className="h-4 w-4 shrink-0 text-[var(--text-muted)]" aria-hidden="true" />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ) : null
          )}
          {results.length === 0 && (
            <p className="p-8 text-center text-[var(--text-secondary)]">
              No matching tools found for &ldquo;{query}&rdquo;.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
