import type { Metadata } from 'next';
import Link from 'next/link';
import { GLOBAL_TOOLS, PK_TOOLS } from '@/lib/tools-registry';

export const metadata: Metadata = {
  title: 'HTML Sitemap',
  description:
    'Browse the complete Tools2Do HTML sitemap, including online tools, Pakistan utility pages, and company pages.',
  alternates: { canonical: 'https://tools2do.com/html-sitemap' },
};

const companyPages = [
  { href: '/', label: 'Home' },
  { href: '/pk', label: 'Pakistan Utilities' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/feed.xml', label: 'RSS Feed' },
];

export default function HtmlSitemapPage(): React.ReactElement {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-action)]">
          Sitemap
        </p>
        <h1 className="mt-3 text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">
          Tools2Do HTML Sitemap
        </h1>
        <p className="mt-4 max-w-3xl leading-8 text-[var(--text-secondary)]">
          Use this page to browse every important Tools2Do page, including free online tools,
          Pakistan utility helpers, and company information pages.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <nav aria-labelledby="company-pages-heading" className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-canvas)] p-5">
            <h2 id="company-pages-heading" className="text-xl font-bold text-[var(--text-primary)]">
              Main Pages
            </h2>
            <ul className="mt-4 grid gap-2 text-sm">
              {companyPages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="text-[var(--text-secondary)] hover:text-[var(--accent-action)] hover:underline">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="global-tools-heading" className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-canvas)] p-5">
            <h2 id="global-tools-heading" className="text-xl font-bold text-[var(--text-primary)]">
              Online Tools
            </h2>
            <ul className="mt-4 grid gap-2 text-sm">
              {GLOBAL_TOOLS.map((tool) => (
                <li key={tool.id}>
                  <Link href={tool.slug} className="text-[var(--text-secondary)] hover:text-[var(--accent-action)] hover:underline">
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="pk-tools-heading" className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-canvas)] p-5">
            <h2 id="pk-tools-heading" className="text-xl font-bold text-[var(--text-primary)]">
              Pakistan Utilities
            </h2>
            <ul className="mt-4 grid gap-2 text-sm">
              {PK_TOOLS.map((tool) => (
                <li key={tool.id}>
                  <Link href={tool.slug} className="text-[var(--text-secondary)] hover:text-[var(--accent-action)] hover:underline">
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
