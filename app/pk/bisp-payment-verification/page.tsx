import type { Metadata } from 'next';
import Link from 'next/link';

export function generateMetadata(): Metadata {
  return {
    title: 'BISP 8171 Check Online – CNIC Eligibility Tracking Guide',
    description: 'Learn how to check your BISP Kafalat and Benazir Income Support Programme status using your CNIC. Read our verified step-by-step registration and tracking guide.',
    alternates: { canonical: 'https://tools2do.com/pk/bisp-payment-verification' },
  };
}

const faqData = [
  {
    q: 'How do I check my BISP eligibility by CNIC?',
    a: 'You can check your BISP eligibility by sending your 13-digit Computerized National Identity Card (CNIC) number without any dashes or spaces to the official SMS shortcode 8171. You will receive an automated response detailing your eligibility status.',
  },
  {
    q: 'What is the BISP dynamic registry survey?',
    a: 'The BISP dynamic registry is a continuous survey system conducted at local BISP registration centers. It updates household socio-economic status to check eligibility for the Kafalat cash grant program.',
  },
  {
    q: 'How do I withdraw BISP cash payments?',
    a: 'Eligible beneficiaries can withdraw their quarterly BISP payments through designated biometric ATMs and retail agent points of partner banks: HBL (Habib Bank Limited) in Punjab, Sindh, and Balochistan; and Bank Alfalah in KPK, AJK, and Gilgit-Baltistan.',
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
      <script id="bisp-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">BISP 8171 Check Online – CNIC Verification & Kafalat Guide</h1>
        <p className="mt-4 max-w-3xl leading-7 text-[var(--text-secondary)]">
          The Benazir Income Support Programme (BISP) is Pakistan's premier social safety net. If you are looking to check your registration eligibility or payment status, follow our verified local helper guide to navigate official portals safely.
        </p>

        {/* Scam Warning Alert Box */}
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50/50 dark:bg-red-950/20 p-5 text-sm text-red-800 dark:text-red-300">
          <h3 className="font-bold text-red-900 dark:text-red-200">⚠️ Critical Safety Warning Against Scams</h3>
          <p className="mt-2 leading-6">
            BISP and the government of Pakistan only send official eligibility or payment text messages from the shortcode <strong>8171</strong>. Ignore all messages or WhatsApp notifications sent from individual mobile numbers claiming you have won a cash grant. <strong>Never share your CNIC details, bank OTPs, or pay any commission fees to unauthorized agents.</strong>
          </p>
        </div>

        {/* Dynamic Reference Validator & Guidance Card */}
        <div className="mt-8 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 space-y-4">
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)]">BISP CNIC Status Guidance</h2>
          <p className="text-[var(--text-secondary)]">To verify your registration status or active payments:</p>
          <ol className="list-decimal pl-5 space-y-2 text-[var(--text-secondary)]">
            <li>SMS your 13-digit <strong>CNIC number</strong> (without spaces or dashes) to the shortcode <strong>8171</strong>.</li>
            <li>You will receive a response detailing your dynamic registry PMT score status.</li>
            <li>Visit the official BISP portal with your CNIC for detailed payment histories and local survey registration desks.</li>
          </ol>
          <div className="pt-2">
            <a href="https://bisp.gov.pk" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent-action)] px-5 py-3 font-bold text-sm text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
              Open BISP Official Portal →
            </a>
          </div>
        </div>

        {/* Detailed Informational H2 Section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)]">Dynamic Survey Registry & Verification Process</h2>
          <p className="leading-7 text-[var(--text-secondary)]">
            If your household PMT (Proxy Means Test) score is not currently registered or has expired, you must visit the nearest BISP tehsil office registry desk. Ensure you bring your original CNIC, your children's Form-B, and a recent electricity bill to verify your household metrics. The dynamic registration process is completely free of charge.
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
            <Link href="/pk/ehsaas-program-tracking" className="group rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 hover:border-[var(--accent-indigo)] transition">
              <h4 className="font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-action)]">Ehsaas Program 8171 Tracking →</h4>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Check dynamic registration instructions and cash grants eligibility guides.</p>
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
