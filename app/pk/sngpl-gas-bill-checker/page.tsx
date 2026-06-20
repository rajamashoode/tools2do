import type { Metadata } from 'next';
import Link from 'next/link';

export function generateMetadata(): Metadata {
  return {
    title: 'SNGPL Gas Bill Checker – Sui Northern Duplicate Bills Helper',
    description: 'Check your SNGPL Sui Northern Gas duplicate bills online. Learn how to locate consumer numbers and access official billing portals.',
    alternates: { canonical: 'https://tools2do.com/pk/sngpl-gas-bill-checker' },
  };
}

const faqData = [
  {
    q: 'Where is the consumer number on SNGPL gas bills?',
    a: 'Your SNGPL Consumer Number is a 10-digit number located at the top-left area of your paper bill statement, right below the Account Number row. It is required for both check queries and payment transactions.',
  },
  {
    q: 'What should I do if my region is served by SSGC instead of SNGPL?',
    a: 'Sui Northern Gas Pipelines Limited (SNGPL) serves Punjab, KPK, and Federal regions, while Sui Southern Gas Company (SSGC) serves Sindh and Balochistan. If you reside in the south, you must use the official SSGC duplicate bill portal.',
  },
  {
    q: 'How do I download a duplicate gas bill in PDF format?',
    a: 'By inputting your 10-digit consumer ID on the official SNGPL portal, the system generates an official duplicate layout that you can directly print or download as a PDF document.',
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
      <script id="sngpl-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">SNGPL Gas Bill Checker – Duplicate Bill Guide</h1>
        <p className="mt-4 max-w-3xl leading-7 text-[var(--text-secondary)]">
          Sui Northern Gas Pipelines Limited (SNGPL) distributes natural gas across northern and central Pakistan. If you need to retrieve your billing details, verify your customer codes, or download a duplicate PDF invoice, use our local reference helper to access the official portals securely.
        </p>

        {/* Scam Warning Alert Box */}
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50/50 dark:bg-red-950/20 p-5 text-sm text-red-800 dark:text-red-300">
          <h3 className="font-bold text-red-900 dark:text-red-200">⚠️ Critical Safety Warning Against Scams</h3>
          <p className="mt-2 leading-6">
            Always verify that you are visiting official government or bank payment portals when checking bills. Ignore third-party SMS alerts claiming your gas line will be disconnected unless you send money via personal mobile accounts. <strong>Official bills must only be paid through commercial banks or official SNGPL customer service centers.</strong>
          </p>
        </div>

        {/* Dynamic Reference Validator & Guidance Card */}
        <div className="mt-8 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 space-y-4">
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)]">SNGPL Gas Duplicate Bill Checklist</h2>
          <p className="text-[var(--text-secondary)]">To verify your gas statement online:</p>
          <ol className="list-decimal pl-5 space-y-2 text-[var(--text-secondary)]">
            <li>Find your 10-digit <strong>Consumer Number</strong> on a previous physical bill (located at the top-left area).</li>
            <li>Visit the official SNGPL online duplicate bill portal linked below.</li>
            <li>Input your Consumer Number to check your invoice and download the official PDF.</li>
          </ol>
          <div className="pt-2">
            <a href="https://www.sngpl.com.pk/online-bill" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent-action)] px-5 py-3 font-bold text-sm text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
              Open SNGPL Bill Portal →
            </a>
          </div>
        </div>

        {/* Independent Status Disclaimer */}
        <div className="mt-8 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)]/50 p-5 text-xs text-[var(--text-muted)]">
          <p className="leading-relaxed">
            <strong>Disclaimer:</strong> Tools2Do is a free, independent helper website. We are not affiliated with, authorized, or sponsored by Sui Northern Gas Pipelines Limited (SNGPL) or Sui Southern Gas Company (SSGC). We do not host gas accounts databases or log user search parameters. Please verify all details on official bills or customer service centers before completing payments.
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
            <Link href="/pk/ptcl-bill-checker" className="group rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 hover:border-[var(--accent-indigo)] transition">
              <h4 className="font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-action)]">PTCL Bill Checker →</h4>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Check PTCL telephone and broadband duplicate bills online.</p>
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
