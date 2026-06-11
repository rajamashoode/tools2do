import type { Metadata } from 'next';
import Link from 'next/link';

const contactReasons = [
  'Report a bug or broken tool',
  'Suggest a new online tool',
  'Report outdated Pakistan utility information',
  'Request a correction to a page',
  'Ask about privacy, terms, or editorial policies',
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/rajamashoode/tools2do' },
  { label: 'TikTok', href: 'https://tiktok.com/@rajamashoode' },
  { label: 'Facebook', href: 'https://facebook.com/rajamashoode' },
  { label: 'Instagram', href: 'https://instagram.com/rajamashoode' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rajamashoode' },
];

export const metadata: Metadata = {
  title: 'Contact Tools2Do',
  description: 'Contact Tools2Do to report bugs, suggest tools, request corrections, or ask about privacy and terms.',
  alternates: { canonical: 'https://tools2do.com/contact' },
};

export default function Contact(): React.ReactElement {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 md:px-6">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent-action)]">
        Contact
      </p>

      <h1 className="mt-3 text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">
        Contact Tools2Do
      </h1>

      <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
        Use this page to report a problem, suggest a new tool, request a correction, or ask a question about Tools2Do.com.
      </p>

      <section className="mt-8 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6">
        <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)]">
          Email
        </h2>
        <p className="mt-3 text-[var(--text-secondary)] leading-7">
          For support, corrections, and general questions, email us at:
        </p>
        <a
          href="mailto:support@tools2do.com"
          className="mt-3 inline-flex rounded-xl bg-[var(--accent-action)] px-5 py-3 font-bold text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
        >
          support@tools2do.com
        </a>
        <p className="mt-4 text-sm text-[var(--text-muted)]">
          If that mailbox is not active yet, update this page with your preferred contact email before deployment.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">
          What You Can Contact Us About
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          {contactReasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">
          Social Profiles
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          You can also find Tools2Do updates and project links through these profiles.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[var(--border-default)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] hover:border-[var(--accent-indigo)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
            >
              {social.label}
            </a>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6">
        <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)]">
          Important Note
        </h2>
        <p className="mt-3 text-[var(--text-secondary)] leading-7">
          Tools2Do is an independent website. We cannot access or change your electricity, gas, telecom, subsidy, or government account records. For official account changes, payments, or personal records, contact the relevant official provider directly.
        </p>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/about" className="rounded-xl border border-[var(--border-default)] px-5 py-3 font-semibold hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
          About Tools2Do
        </Link>
        <Link href="/privacy-policy" className="rounded-xl border border-[var(--border-default)] px-5 py-3 font-semibold hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
          Privacy Policy
        </Link>
      </div>
    </article>
  );
}
