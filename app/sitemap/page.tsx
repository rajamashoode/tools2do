import type { Metadata } from 'next';
import Link from 'next/link';
import { GLOBAL_TOOLS, PK_TOOLS } from '@/lib/tools-registry';

export const metadata: Metadata = {
  title: 'Sitemap – All Tools & Pages',
  description: 'Complete sitemap of all tools, Pakistan utility pages, and site pages on Tools2Do.com.',
  alternates: { canonical: 'https://tools2do.com/sitemap' },
};

const sitePages = [
  { href: '/',               label: 'Homepage'         },
  { href: '/pk',             label: 'Pakistan Hub'     },
  { href: '/about',          label: 'About'            },
  { href: '/contact',        label: 'Contact'          },
  { href: '/privacy-policy', label: 'Privacy Policy'   },
  { href: '/terms',          label: 'Terms of Service' },
];

export default function SitemapPage(): React.ReactElement {
  return (
    <article className="mx-auto max-w-5xl px-4 py-14 md:px-6">
      <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Sitemap</h1>
      <p className="mt-3 text-[var(--text-secondary)]">All pages available on Tools2Do.com.</p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-4">Site Pages</h2>
          <ul className="space-y-2">
            {sitePages.map(p => (
              <li key={p.href}>
                <Link href={p.href} className="text-[var(--accent-action)] hover:underline">{p.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-4">Pakistan Utilities ({PK_TOOLS.length})</h2>
          <ul className="space-y-2">
            {PK_TOOLS.map(t => (
              <li key={t.id}>
                <Link href={t.slug} className="text-[var(--accent-action)] hover:underline">{t.name}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="md:col-span-2">
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-4">Developer & Utility Tools ({GLOBAL_TOOLS.length})</h2>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {GLOBAL_TOOLS.map(t => (
              <li key={t.id}>
                <Link href={t.slug} className="text-[var(--accent-action)] hover:underline">{t.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
