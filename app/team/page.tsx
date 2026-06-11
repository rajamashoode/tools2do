import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Meet the Tools2Do team and learn who maintains the free browser-based tools and Pakistan utility guides on Tools2Do.com.',
  alternates: { canonical: 'https://tools2do.com/team' },
};

export default function TeamPage(): React.ReactElement {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <div className="rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-action)]">
          Tools2Do Team
        </p>
        <h1 className="mt-3 text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">
          People behind Tools2Do
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
          Tools2Do is maintained as an independent online tools platform focused on simple,
          fast, and privacy-conscious utilities for developers, students, creators, and everyday users.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-canvas)] p-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--bg-surface)] text-3xl font-extrabold text-[var(--accent-action)]">
              RM
            </div>
            <h2 className="mt-4 text-xl font-bold text-[var(--text-primary)]">
              Raja Mashood Elahi
            </h2>
            <p className="mt-1 text-sm font-semibold text-[var(--accent-action)]">
              Founder and maintainer
            </p>
            <p className="mt-3 leading-7 text-[var(--text-secondary)]">
              Raja maintains the Tools2Do product experience, tool pages, Pakistan utility guides,
              privacy-focused browser workflows, and ongoing site improvements.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a
                href="https://github.com/rajamashoode/tools2do"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--accent-action)] hover:underline"
              >
                GitHub repository
              </a>
              <a
                href="https://x.com/rajamashoodelahi"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--accent-action)] hover:underline"
              >
                X / Twitter
              </a>
              <a
                href="https://linkedin.com/in/rajamashoodelahi"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--accent-action)] hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </article>

          <article className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-canvas)] p-5">
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              Editorial and technical standards
            </h2>
            <p className="mt-3 leading-7 text-[var(--text-secondary)]">
              Tools2Do pages are written to be practical, clear, and independent. Utility guide pages
              link users to official portals where relevant, and tool pages are designed to run locally
              in the browser whenever possible.
            </p>
            <p className="mt-3 leading-7 text-[var(--text-secondary)]">
              For corrections, feedback, partnership requests, or reporting a technical issue, contact
              the team through the contact page.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-xl bg-[var(--accent-action)] px-5 py-3 font-bold text-white hover:opacity-90"
            >
              Contact Tools2Do
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
