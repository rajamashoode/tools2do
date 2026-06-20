import type { Metadata } from 'next';
import Link from 'next/link';

export function generateMetadata(): Metadata {
  return {
    title: 'PTCL Bill Checker – Find Landline and Broadband Duplicate Bills',
    description: 'Validate your PTCL consumer ID and access your telephone and broadband bills online. Read our verified step-by-step billing helper guide.',
    alternates: { canonical: 'https://tools2do.com/pk/ptcl-bill-checker' },
  };
}

const faqData = [
  {
    q: 'Where can I find my PTCL consumer number?',
    a: 'Your 10-digit PTCL Consumer ID is printed near the top-right corner of your paper billing statement. You will need this Consumer ID to search and generate duplicate bills online.',
  },
  {
    q: 'What is the difference between Consumer ID and Account ID on a PTCL bill?',
    a: 'The Consumer ID (10 digits) is used for checking bills and online payments, whereas the Account ID (12 digits) represents your overall service registration profile with Pakistan Telecommunication Company Limited.',
  },
  {
    q: 'How do I check my PTCL bill via SMS?',
    a: 'You can check your bill by sending "Billinfo [Consumer ID]" to 9058. You will receive an SMS reply detailing your net payable amount and due date.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqData.map(item => ({
    '@type': 'Question',
    'name': item.q,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': item.a,
    },
  })),
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="ptcl-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">PTCL Bill Checker – Duplicate Bill Online Guide</h1>
        <p className="mt-4 max-w-3xl leading-7 text-[var(--text-secondary)]">
          Pakistan Telecommunication Company Limited (PTCL) provides landline telephone, Smart TV, and broadband internet services across Pakistan. If you need to verify your consumer number, retrieve a duplicate bill, or pay your statement online, follow our helper guide to locate official check portals safely.
        </p>

        {/* Scam Warning Alert Box */}
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50/50 dark:bg-red-950/20 p-5 text-sm text-red-800 dark:text-red-300">
          <h3 className="font-bold text-red-900 dark:text-red-200">⚠️ Critical Safety Warning Against Scams</h3>
          <p className="mt-2 leading-6">
            PTCL only communicates billing details through official notifications or registered SMS shortcodes (like <strong>9058</strong>). Ignore calls or text messages from individual mobile numbers demanding immediate payment via personal mobile wallets (EasyPaisa/JazzCash). <strong>Always pay your bills through verified commercial bank apps, retail franchise shops, or official PTCL Smart Shops.</strong>
          </p>
        </div>

        {/* Dynamic Reference Validator & Guidance Card */}
        <div className="mt-8 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 space-y-4">
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)]">PTCL Duplicate Bill Checklist</h2>
          <p className="text-[var(--text-secondary)]">To check your PTCL telephone or broadband bills online:</p>
          <ol className="list-decimal pl-5 space-y-2 text-[var(--text-secondary)]">
            <li>Locate your 10-digit <strong>Consumer ID</strong> and your 12-digit <strong>Account ID</strong> on an older paper invoice.</li>
            <li>Visit the official PTCL self-service bill portal linked below.</li>
            <li>Input your credentials to view, download, or print a duplicate billing PDF copy.</li>
          </ol>
          <div className="pt-2">
            <a href="https://my.ptcl.net.pk" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent-action)] px-5 py-3 font-bold text-sm text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
              Open PTCL Self-Service Portal →
            </a>
          </div>
        </div>

        {/* Independent Status Disclaimer */}
        <div className="mt-8 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)]/50 p-5 text-xs text-[var(--text-muted)]">
          <p className="leading-relaxed">
            <strong>Disclaimer:</strong> Tools2Do is a free, independent helper website. We are not affiliated with, authorized, or sponsored by Pakistan Telecommunication Company Limited (PTCL). We do not collect CNIC, credit card, or telephone numbers, nor do we host direct duplicate databases. Users are strongly advised to check billing details through official PTCL customer service channels or bank portals before completing payments.
          </p>
        </div>

        {/* Detailed FAQ section */}
        <div className="mt-12">
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-6">Frequently Asked Questions (FAQs)</h2>
          <div className="space-y-4">
            {faqData.map((item, idx) => (
              <details key={idx} className="group rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-[var(--text-primary)] focus:outline-none">
                  <span>{item.q}</span>
                  <span className="shrink-0 rounded-full bg-[var(--bg-canvas)] p-1 text-[var(--text-secondary)] transition group-open:-rotate-180">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 leading-7 text-[var(--text-secondary)] border-t border-[var(--border-default)] pt-3">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Related Utilities Navigation */}
        <div className="mt-12 border-t border-[var(--border-default)] pt-8">
          <h3 className="font-bold text-[var(--text-primary)] mb-4">Related Utilities & Checkers</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/pk/sngpl-gas-bill-checker" className="group rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 hover:border-[var(--accent-indigo)] transition">
              <h4 className="font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-action)]">SNGPL Gas Bill Checker →</h4>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Check SNGPL gas duplicate bills and consumer account guides.</p>
            </Link>
            <Link href="/pk/electricity-unit-subsidy-calculator" className="group rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 hover:border-[var(--accent-indigo)] transition">
              <h4 className="font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-action)]">Electricity Unit Subsidy Calculator →</h4>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Estimate potential bill offsets and tariff brackets for lifeline connections.</p>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
