import Link from 'next/link';
import type { Metadata } from 'next';
import { TOOLS_REGISTRY } from '@/lib/tools-registry';

export const metadata: Metadata = { title: 'Page Not Found – Tools2Do' };

export default function NotFound(): React.ReactElement {
  const featured = TOOLS_REGISTRY.filter(t => t.isFeatured).slice(0, 6);
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 text-center md:px-6">
      <p className="text-8xl font-extrabold text-[var(--accent-indigo)] opacity-20">404</p>
      <h1 className="mt-4 text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Page not found</h1>
      <p className="mt-4 text-[var(--text-secondary)]">This page doesn't exist or was moved. Try one of these tools instead:</p>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {featured.map(tool => (
          <Link key={tool.id} href={tool.slug} className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 text-left hover:border-[var(--accent-indigo)] hover:bg-[var(--bg-surface-hover)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
            <p className="font-bold text-sm text-[var(--text-primary)]">{tool.name}</p>
            <p className="mt-1 text-xs text-[var(--text-secondary)] line-clamp-2">{tool.description}</p>
          </Link>
        ))}
      </div>
      <Link href="/" className="mt-8 inline-block rounded-xl bg-[var(--accent-action)] px-6 py-3 font-bold text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
        Back to all tools
      </Link>
    </div>
  );
}
