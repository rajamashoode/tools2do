import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: "Tools2Do Blog - Online Tools, Pakistan Utilities & Tech Guides",
  description:
    "Read Tools2Do blog posts about free online tools, Pakistan utility updates, PTA tax, developer tools, PDF tools, image tools, calculators, and productivity guides.",
  alternates: {
    canonical: "https://tools2do.com/blog",
  },
  openGraph: {
    title: "Tools2Do Blog",
    description:
      "Read guides and updates about free online tools, Pakistan utilities, PTA tax, developer tools, PDF tools, image tools, and productivity.",
    url: "https://tools2do.com/blog",
    siteName: "Tools2Do",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Tools2Do Blog",
  url: "https://tools2do.com/blog",
  description:
    "Guides and updates about free online tools, Pakistan utilities, PTA tax, developer tools, PDF tools, image tools, calculators, and productivity.",
  publisher: {
    "@type": "Organization",
    name: "Tools2Do",
    url: "https://tools2do.com",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://tools2do.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://tools2do.com/blog",
    },
  ],
};

export default function BlogListingPage(): React.ReactElement {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <main className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        
        {/* Hero Section */}
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">
            Tools2Do Blog
          </h1>
          <p className="mt-4 max-w-3xl leading-8 text-[var(--text-secondary)] md:text-lg">
            Read practical guides, updates, and explainers from Tools2Do. We cover free online tools, Pakistan utility updates, PTA tax, smartphone registration, PDF tools, image tools, developer utilities, calculators, and productivity tips.
          </p>
        </header>

        {/* Blog Posts Grid */}
        {blogPosts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="flex flex-col rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 transition-colors hover:bg-[var(--bg-canvas)]">
                <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[var(--accent-action)]">
                  <span>{post.category}</span>
                  <span className="text-[var(--text-tertiary)]">{post.readTime}</span>
                </div>
                <h2 className="mb-3 text-[length:var(--text-h3)] font-bold text-[var(--text-primary)] leading-snug">
                  <Link href={post.href} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mb-6 flex-grow text-[var(--text-secondary)] line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <time dateTime={post.publishedAt} className="text-sm text-[var(--text-tertiary)]">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                  <Link href={post.href} className="text-sm font-bold text-[var(--accent-action)] hover:underline">
                    Read article &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-12 text-center">
            <p className="text-lg text-[var(--text-secondary)]">
              No blog posts published yet. Check back soon for Tools2Do updates, Pakistan utility guides, and free online tool tutorials.
            </p>
          </div>
        )}

        {/* Bottom CTA to tools */}
        <section className="my-16 rounded-3xl bg-[var(--bg-canvas)] p-8 text-center md:p-12 border border-[var(--border-default)]">
          <h2 className="text-[length:var(--text-h2)] font-extrabold text-[var(--text-primary)] mb-4">
            Explore free online tools
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-[var(--text-secondary)] leading-relaxed">
            After reading the latest guides, explore Tools2Do’s free browser-based tools for PDFs, images, text, developers, calculators, and Pakistan utilities.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/tools" className="w-full sm:w-auto rounded-xl bg-[var(--text-primary)] px-8 py-4 font-bold text-[var(--bg-base)] transition-opacity hover:opacity-90">
              Browse all tools
            </Link>
            <Link href="/pk" className="w-full sm:w-auto rounded-xl bg-[var(--bg-surface)] border border-[var(--border-default)] px-8 py-4 font-bold text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-base)]">
              Pakistan utilities
            </Link>
          </div>
        </section>

        {/* Popular Links */}
        <footer className="mt-16 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 md:p-8">
          <h3 className="text-xl font-bold text-[var(--text-primary)]">Popular Tools2Do sections</h3>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            <li>
              <Link href="/tools" className="text-[var(--accent-action)] hover:underline font-medium">
                All Tools
              </Link>
            </li>
            <li>
              <Link href="/pk" className="text-[var(--accent-action)] hover:underline font-medium">
                Pakistan Utilities
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-[var(--accent-action)] hover:underline font-medium">
                About Tools2Do
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[var(--accent-action)] hover:underline font-medium">
                Contact
              </Link>
            </li>
          </ul>
        </footer>

      </main>
    </>
  );
}
