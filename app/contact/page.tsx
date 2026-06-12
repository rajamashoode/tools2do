import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Tools2Do',
  description: 'Contact Tools2Do to report bugs, suggest tools, request corrections, or ask about privacy and data.',
  alternates: { canonical: 'https://tools2do.com/contact' },
};

export default function ContactPage(): React.ReactElement {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 md:px-6">
      <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Contact Tools2Do</h1>
      <p className="mt-4 text-[var(--text-secondary)] leading-7">
        Use this page to report a problem, suggest a new tool, request a correction, or ask a question about Tools2Do.com.
      </p>

      <div className="mt-8 space-y-6">
        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6">
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">Email</h2>
          <p className="text-[var(--text-secondary)]">For support, bug reports, corrections, and general questions:</p>
          <a
            href="mailto:support@tools2do.com"
            className="mt-3 inline-flex items-center gap-2 rounded-xl bg-[var(--accent-action)] px-5 py-3 font-bold text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
          >
            support@tools2do.com
          </a>
        </div>

        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6">
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">What You Can Contact Us About</h2>
          <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]">
            <li>Report a bug or broken tool</li>
            <li>Suggest a new online tool</li>
            <li>Report outdated Pakistan utility information</li>
            <li>Request a correction to a page</li>
            <li>Ask about privacy, terms, or editorial policies</li>
            <li>Business enquiries or partnerships</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6">
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">Social Profiles</h2>
          <p className="text-[var(--text-secondary)] mb-4">You can also find Tools2Do updates through these profiles:</p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'GitHub',     href: 'https://github.com/rajamashoode/tools2do' },
              { label: 'X / Twitter',href: 'https://x.com/rajamashoode'               },
              { label: 'LinkedIn',   href: 'https://linkedin.com/in/rajamashoode'     },
              { label: 'Facebook',   href: 'https://facebook.com/rajamashoode'        },
              { label: 'Instagram',  href: 'https://instagram.com/rajamashoode'       },
              { label: 'TikTok',     href: 'https://tiktok.com/@rajamashoode'         },
            ].map(s => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[var(--border-default)] px-4 py-2 text-sm font-semibold hover:bg-[var(--bg-surface-hover)] hover:border-[var(--accent-indigo)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6">
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">Important Note</h2>
          <p className="text-[var(--text-secondary)]">
            Tools2Do is an independent website. We cannot access or change your electricity, gas, telecom, subsidy, or government account records.
            For official account changes, payments, or personal records, contact the relevant official provider directly.
          </p>
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        <Link href="/about" className="rounded-xl border border-[var(--border-default)] px-5 py-3 text-sm font-semibold hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">About Tools2Do</Link>
        <Link href="/privacy-policy" className="rounded-xl border border-[var(--border-default)] px-5 py-3 text-sm font-semibold hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Privacy Policy</Link>
      </div>
    </article>
  );
}
