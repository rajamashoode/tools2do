import Link from 'next/link';

interface RelatedTool {
  href: string;
  name: string;
  description: string;
}

interface RelatedToolsProps {
  tools: RelatedTool[];
}

/**
 * RelatedTools — a sitewide cross-linking widget for tool pages.
 *
 * Usage:
 *   <RelatedTools tools={[
 *     { href: '/tools/url-encoder', name: 'URL Encoder', description: 'Encode/decode URL components.' },
 *     { href: '/tools/base64',      name: 'Base64 Encoder', description: 'Encode/decode Base64 strings.' },
 *   ]} />
 *
 * AGENTS.md §14.1 item 14 — every indexable tool page must have related tools.
 * AGENTS.md §20 — internal links between related tools improve crawl depth.
 */
export function RelatedTools({ tools }: RelatedToolsProps): React.ReactElement {
  return (
    <section
      aria-labelledby="related-tools-heading"
      className="mx-auto max-w-5xl px-4 pb-14 md:px-6"
    >
      <h2
        id="related-tools-heading"
        className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-4"
      >
        Related Tools
      </h2>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {tools.map(tool => (
          <li key={tool.href}>
            <Link
              href={tool.href}
              className="block rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 hover:border-[var(--accent-indigo)] hover:bg-[var(--bg-surface-hover)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
            >
              <p className="font-semibold text-[var(--text-primary)] text-sm">{tool.name}</p>
              <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">{tool.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
