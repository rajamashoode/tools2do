import type { Metadata } from 'next';
import Link from 'next/link';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/rajamashoode/tools2do' },
  { label: 'TikTok', href: 'https://tiktok.com/@rajamashoode' },
  { label: 'Facebook', href: 'https://facebook.com/rajamashoode' },
  { label: 'Instagram', href: 'https://instagram.com/rajamashoode' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rajamashoode' },
];

export const metadata: Metadata = {
  title: 'About Tools2Do – Free Browser Tools and Pakistan Utilities',
  description:
    'Learn who we are, what Tools2Do provides, how our browser-based tools work, and our independence and trust standards.',
  alternates: { canonical: 'https://tools2do.com/about' },
};

export default function About(): React.ReactElement {
  return (
    <article className="mx-auto max-w-4xl px-4 py-14 md:px-6">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent-action)]">
        About Tools2Do
      </p>

      <h1 className="mt-3 text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">
        Free online tools built for speed, privacy, and everyday usefulness
      </h1>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
        Tools2Do.com is an independent online tools platform that provides fast, free browser-based utilities for developers, students, creators, and everyday users. We also publish practical Pakistan utility helpers for bill checking, subsidy estimation, and public-service information.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5">
          <p className="text-3xl font-extrabold text-[var(--accent-action)]">40+</p>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">browser tools and utility helpers</p>
        </div>
        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5">
          <p className="text-3xl font-extrabold text-[var(--accent-action)]">0</p>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">account signups required</p>
        </div>
        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5">
          <p className="text-3xl font-extrabold text-[var(--accent-action)]">Local</p>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">many tools run in your browser</p>
        </div>
      </div>

      <div className="mt-12 space-y-10 text-[var(--text-secondary)] leading-7">
        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">
            Who We Are
          </h2>
          <p>
            Tools2Do is an independent web project created to make common digital tasks easier. The site focuses on simple interfaces, fast loading, mobile-friendly pages, and practical tools that do not require unnecessary signups.
          </p>
          <p className="mt-3">
            Tools2Do is maintained as an independent website. It is not a government department, electricity company, bank, or public-benefit agency.
          </p>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">
            What We Do
          </h2>
          <p>
            We provide free online tools for formatting data, editing text, generating passwords, working with images, converting files, calculating values, and accessing Pakistan utility guidance.
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-1">
            <li>Developer utilities: JSON Formatter, Regex Tester, Base64, URL Encoder, UUID Generator, and code formatters.</li>
            <li>Image and PDF tools: Image Compressor, Image Converter, Image Resizer, Image to PDF, and PDF Merge/Split.</li>
            <li>Text tools: Word Counter, Character Counter, Case Converter, Find and Replace, and Lorem Ipsum Generator.</li>
            <li>Converters and calculators: Unit Converter, Color Converter, Timestamp Converter, Percentage Calculator, and Age Calculator.</li>
            <li>Pakistan utilities: LESCO, KE, MEPCO, IESCO, FESCO, GEPCO, HESCO, PESCO helpers, BISP verification, Ehsaas tracking, and subsidy calculators.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">
            Our Story
          </h2>
          <p>
            Tools2Do was created after noticing that many simple online tasks were slowed down by cluttered interfaces, login walls, confusing steps, or unnecessary uploads. The goal is to keep useful tools available in one clean place, with clear instructions and fast performance on desktop and mobile.
          </p>
          <p className="mt-3">
            The project started with developer and text utilities, then expanded into image tools, PDF tools, calculators, and Pakistan-focused utility pages for users who need quick access to practical information.
          </p>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">
            Trust & Independence Statement
          </h2>
          <p>
            Tools2Do is an independent informational and utility website. We are not affiliated with PITC, WAPDA, LESCO, MEPCO, IESCO, FESCO, GEPCO, HESCO, PESCO, K-Electric, SNGPL, PTCL, BISP, Ehsaas, NADRA, or any government body unless a page clearly states otherwise.
          </p>
          <p className="mt-3">
            When a Pakistan utility page links to an official portal, we aim to make that clear so users can verify information directly from the relevant authority. We do not ask for sensitive login credentials for basic tool usage.
          </p>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">
            Privacy and Local Processing
          </h2>
          <p>
            Many Tools2Do utilities run directly in your browser using browser APIs such as Canvas, FileReader, Web Workers, and the Crypto API. For tools such as image compression, text formatting, and PDF utilities, the design goal is to process your input locally whenever possible.
          </p>
          <p className="mt-3">
            For more details, read our <Link href="/privacy-policy" className="font-semibold text-[var(--accent-action)] hover:underline">Privacy Policy</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">
            Built in Pakistan
          </h2>
          <p>
            Tools2Do was created in Abbottabad, Pakistan, with attention to mobile users, fast loading on slower connections, and practical utility helpers for local needs.
          </p>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">
            Contact and Social Profiles
          </h2>
          <p>
            Found a bug, want to suggest a tool, or need to report outdated information? Visit our contact page or connect through the profiles below.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-xl bg-[var(--accent-action)] px-4 py-2 text-sm font-bold text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
              Contact Tools2Do
            </Link>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[var(--border-default)] px-4 py-2 text-sm font-semibold hover:bg-[var(--bg-surface-hover)] hover:border-[var(--accent-indigo)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
              >
                {social.label}
              </a>
            ))}
          </div>
        </section>

        <div className="pt-4">
          <Link href="/" className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent-action)] px-5 py-3 font-bold text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
            Browse all tools →
          </Link>
        </div>
      </div>
    </article>
  );
}
