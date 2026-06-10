import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About – Tools2Do',
  description: 'About Tools2Do.com — free browser-based tools for developers and Pakistan utility helpers.',
  alternates: { canonical: 'https://tools2do.com/about' },
};

export default function About(): React.ReactElement {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 md:px-6">
      <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">About Tools2Do</h1>

      <div className="mt-8 space-y-8 text-[var(--text-secondary)] leading-7">
        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">What is Tools2Do?</h2>
          <p>Tools2Do.com is a free collection of browser-based utility tools built for two audiences: developers and tech users worldwide who need fast everyday utilities, and Pakistani consumers who need quick access to utility bill helpers, government program tracking, and local services.</p>
          <p className="mt-3">Every tool on this site runs entirely in your browser. No files are uploaded. No text is sent to a server. No account is needed.</p>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">Our tools</h2>
          <p>We offer 40+ tools across these categories:</p>
          <ul className="mt-3 list-disc pl-5 space-y-1">
            <li>Developer utilities — JSON Formatter, Regex Tester, Base64, URL Encoder, UUID Generator</li>
            <li>Image tools — Image Compressor, Converter, Resizer, Image to PDF</li>
            <li>Text tools — Word Counter, Case Converter, Find & Replace, Lorem Ipsum</li>
            <li>Converters — Unit Converter, Color Converter, Timestamp, CSV to JSON</li>
            <li>Pakistan utilities — LESCO, KE, MEPCO, IESCO, FESCO, GEPCO, HESCO, PESCO bill checkers, Ehsaas tracking, BISP verification</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">Built in Pakistan</h2>
          <p>Tools2Do was created in Abbottabad, Pakistan. We understand the needs of Pakistani mobile users — fast loading on slower connections, Roman Urdu guidance, and practical utility helpers that actually work.</p>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">Technology</h2>
          <p>Built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Deployed on Vercel's global edge network for instant load times worldwide. All tool logic uses browser-native APIs — Canvas, Web Workers, FileReader, and the Crypto API.</p>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">Contact</h2>
          <p>Found a bug or want to suggest a tool? Reach out on social media:</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {[
              { label: 'TikTok', href: 'https://tiktok.com/@rajamashoode' },
              { label: 'Facebook', href: 'https://facebook.com/rajamashoode' },
              { label: 'Instagram', href: 'https://instagram.com/rajamashoode' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/rajamashoode' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="rounded-xl border border-[var(--border-default)] px-4 py-2 text-sm font-semibold hover:bg-[var(--bg-surface-hover)] hover:border-[var(--accent-indigo)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
                {s.label}
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
