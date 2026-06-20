import type { Metadata } from 'next';
import Link from 'next/link';

export function generateMetadata(): Metadata {
  return {
    title: 'Ehsaas Program 8171 Tracking – CNIC Verification Guide',
    description: 'Check your Ehsaas Program eligibility status online using your CNIC. Read our verified step-by-step registration and tracking guide.',
    alternates: { canonical: 'https://tools2do.com/pk/ehsaas-program-tracking' },
  };
}

const faqData = [
  {
    q: 'How do I track my Ehsaas Program status by CNIC?',
    a: 'You can check your status by typing your 13-digit CNIC number in an SMS and sending it to 8171. The Ehsaas program will reply with your registration status, eligibility tier, or details on how to collect your cash grant.',
  },
  {
    q: 'What should I do if my CNIC is not registered under Ehsaas?',
    a: 'If your CNIC is not registered, you should visit the nearest WAPDA/BISP registration center to perform a National Socio-Economic Registry (NSER) dynamic survey. A representative will evaluate your household metrics.',
  },
  {
    q: 'Is there an online portal for Ehsaas 8171 tracking?',
    a: 'Yes, the official online tracking portal is hosted at 8171.pass.gov.pk. Beneficiaries can input their CNIC or form number to check live eligibility status without paying any fee.',
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
      <script id="ehsaas-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Ehsaas Program 8171 Tracking – CNIC Eligibility Guide</h1>
        <p className="mt-4 max-w-3xl leading-7 text-[var(--text-secondary)]">
          The Ehsaas Program is a major poverty alleviation initiative in Pakistan. If you need to track your registration, check your CNIC eligibility, or locate cash distribution centers, use our local companion guide to find verified official links safely.
        </p>

        {/* Scam Warning Alert Box */}
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50/50 dark:bg-red-950/20 p-5 text-sm text-red-800 dark:text-red-300">
          <h3 className="font-bold text-red-900 dark:text-red-200">⚠️ Critical Safety Warning Against Scams</h3>
          <p className="mt-2 leading-6">
            Official Ehsaas eligibility notifications are only sent via SMS from the number <strong>8171</strong>. Any other SMS claiming you have won prizes, cash, or asking you to call a mobile number is a scam. <strong>Never send money to anyone claiming they can register you for BISP or Ehsaas.</strong>
          </p>
        </div>

        {/* Dynamic Reference Validator & Guidance Card */}
        <div className="mt-8 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 space-y-4">
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)]">Ehsaas CNIC Eligibility Status</h2>
          <p className="text-[var(--text-secondary)]">To verify your family's eligibility status:</p>
          <ol className="list-decimal pl-5 space-y-2 text-[var(--text-secondary)]">
            <li>Send your 13-digit <strong>CNIC number</strong> (no dashes) via SMS to <strong>8171</strong>.</li>
            <li>You will receive an SMS reply detailing your household PMT status or eligibility for special emergency cash programs.</li>
            <li>To verify online, open the official Ehsaas web portal linked below.</li>
          </ol>
          <div className="pt-2">
            <a href="https://8171.pass.gov.pk" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent-action)] px-5 py-3 font-bold text-sm text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
              Open Official Ehsaas Portal →
            </a>
          </div>
        </div>

        {/* Detailed Informational H2 Section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)]">Ehsaas Kafalat & NSER Dynamic Survey</h2>
          <p className="leading-7 text-[var(--text-secondary)]">
            Under the Ehsaas framework, households are evaluated based on their National Socio-Economic Registry (NSER) database profiles. If your family registration needs updating, visit the nearest regional center. Make sure to bring your Computerized National Identity Card (CNIC), children's Form-B, and household utility statements.
          </p>
        </div>

        {/* Customized Visible FAQs */}
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
          <h3 className="font-bold text-[var(--text-primary)] mb-4">Related Programs & Calculators</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/pk/bisp-payment-verification" className="group rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 hover:border-[var(--accent-indigo)] transition">
              <h4 className="font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-action)]">BISP Payment Verification →</h4>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Verify Benazir Income Support Kafalat payments and dynamic registry procedures.</p>
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
