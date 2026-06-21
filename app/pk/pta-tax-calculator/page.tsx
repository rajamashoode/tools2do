import type { Metadata } from 'next';
import Link from 'next/link';
import { PtaTaxCalculator } from '@/components/tools/PtaTaxCalculator';

export const metadata: Metadata = {
  title: 'PTA Tax Calculator Pakistan 2026 - Smartphone Tax & Duty',
  description: 'Use the Tools2Do PTA Tax Calculator to estimate smartphone PTA tax, mobile registration cost, regulatory duty impact, and total phone cost in Pakistan. Check PTA tax for iPhone, Samsung, Vivo, Oppo, Xiaomi, and imported phones.',
  openGraph: {
    title: 'PTA Tax Calculator Pakistan - Check Smartphone Tax Online',
    description: 'Estimate PTA tax, mobile registration cost, regulatory duty impact, and total smartphone cost in Pakistan with the free Tools2Do PTA Tax Calculator.',
    url: 'https://tools2do.com/pk/pta-tax-calculator',
    type: 'website'
  },
  alternates: {
    canonical: 'https://tools2do.com/pk/pta-tax-calculator'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'PTA Tax Calculator Pakistan',
      url: 'https://tools2do.com/pk/pta-tax-calculator',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      },
      description: 'Estimate PTA tax, smartphone duty, regulatory duty impact, and mobile registration cost in Pakistan.',
      publisher: {
        '@type': 'Organization',
        name: 'Tools2Do'
      }
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Is PTA tax abolished in Pakistan?', acceptedAnswer: { '@type': 'Answer', text: 'Reports suggest smartphone regulatory duty may be abolished or revised, but users should wait for official FBR/PTA notification before treating it as final.' } },
        { '@type': 'Question', name: 'What is a PTA tax calculator?', acceptedAnswer: { '@type': 'Answer', text: 'A PTA tax calculator estimates possible tax, duty, and registration cost for smartphones in Pakistan.' } },
        { '@type': 'Question', name: 'How can I calculate PTA tax on my phone?', acceptedAnswer: { '@type': 'Answer', text: 'Enter phone value, currency, exchange rate, and registration type. The calculator estimates tax based on editable slabs.' } },
        { '@type': 'Question', name: 'Is Passport PTA tax different from CNIC PTA tax?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, in many cases tax can differ by registration type. The calculator includes both modes.' } },
        { '@type': 'Question', name: 'Does this calculator check my IMEI?', acceptedAnswer: { '@type': 'Answer', text: 'No. It does not verify or store IMEI numbers. Use official PTA/DIRBS channels for IMEI status.' } },
        { '@type': 'Question', name: 'Is this calculator official?', acceptedAnswer: { '@type': 'Answer', text: 'No. Tools2Do is not affiliated with PTA, FBR, DIRBS, or any government department.' } },
        { '@type': 'Question', name: 'What happens if regulatory duty is removed?', acceptedAnswer: { '@type': 'Answer', text: 'The estimated payable amount may decrease depending on the final official notification and the device category.' } },
        { '@type': 'Question', name: 'Can overseas Pakistanis use this calculator?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Overseas Pakistanis can estimate possible mobile registration costs, but final payable tax should be checked officially.' } },
        { '@type': 'Question', name: 'Can I calculate PTA tax for iPhone?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You can select Apple iPhone, enter model and price, and calculate an estimated amount.' } },
        { '@type': 'Question', name: 'Can I calculate PTA tax for Samsung, Vivo, Oppo, Xiaomi or Infinix?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The calculator supports all major smartphone brands and an Other option.' } },
        { '@type': 'Question', name: 'Why is my final official PTA tax different from this estimate?', acceptedAnswer: { '@type': 'Answer', text: 'Rates can change due to official notification, exchange rate, phone value, category, passport/CNIC mode, and FBR/PTA rules.' } },
        { '@type': 'Question', name: 'Does Tools2Do store my phone information?', acceptedAnswer: { '@type': 'Answer', text: 'No. The calculator runs in your browser and does not store phone details.' } }
      ]
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tools2do.com/' },
        { '@type': 'ListItem', position: 2, name: 'Pakistan Utilities', item: 'https://tools2do.com/pk' },
        { '@type': 'ListItem', position: 3, name: 'PTA Tax Calculator', item: 'https://tools2do.com/pk/pta-tax-calculator' }
      ]
    }
  ]
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const faqItems = (jsonLd['@graph'][1] as any)?.mainEntity ?? [];

export default function PtaTaxCalculatorPage(): React.ReactElement {
  return (
    <>
      <script id="pta-tax-calculator-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <header className="mb-8 text-center md:text-left">
          <h1 className="text-[length:var(--text-h1)] font-extrabold">PTA Tax Calculator Pakistan</h1>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--text-secondary)] md:text-lg">
            Estimate smartphone PTA tax, mobile registration cost, regulatory duty impact, and total phone cost in Pakistan.
          </p>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            This tool runs in your browser and does not store your phone details or IMEI.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
             <a href="#calculator" className="rounded-xl bg-[var(--accent-action)] px-6 py-3 font-bold text-white transition-opacity hover:opacity-90">
               Calculate PTA Tax
             </a>
             <a href="#latest-update" className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-6 py-3 font-semibold hover:bg-[var(--bg-canvas)]">
               Read Latest PTA Tax Update
             </a>
          </div>
        </header>

        <section id="latest-update" className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900/50 dark:bg-blue-950/20">
          <h2 className="flex items-center text-[length:var(--text-h3)] font-bold text-blue-900 dark:text-blue-100">
            <svg className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Latest PTA Tax Update
          </h2>
          <p className="mt-3 leading-relaxed text-blue-800 dark:text-blue-200">
            Reports suggest that smartphone regulatory duty may be abolished or revised in Pakistan. Final payable tax depends on official FBR/PTA notification. Use this calculator for estimates and update the tax values when official rates are confirmed.
          </p>
        </section>

        <section id="calculator" className="mb-16">
          <PtaTaxCalculator />
        </section>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <section className="rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 md:p-8">
              <h2 className="text-[length:var(--text-h2)] font-bold">How to use this PTA Tax Calculator</h2>
              <ol className="mt-6 list-decimal space-y-3 pl-5 text-[var(--text-secondary)] leading-relaxed">
                <li><strong>Select your phone brand:</strong> Choose Apple iPhone, Samsung, Vivo, Oppo, Xiaomi, etc.</li>
                <li><strong>Enter the phone model:</strong> Like iPhone 15 Pro Max or Galaxy S24 Ultra.</li>
                <li><strong>Enter the phone price:</strong> Add the value in USD or PKR.</li>
                <li><strong>Exchange rate:</strong> Add the current USD to PKR exchange rate if needed.</li>
                <li><strong>Choose registration mode:</strong> Select Passport or CNIC based registration.</li>
                <li><strong>Select regulatory duty scenario:</strong> Choose whether to include regulatory duty or compare both scenarios.</li>
                <li><strong>Calculate PTA Tax:</strong> Click the calculate button to see the estimated results.</li>
                <li><strong>Confirm with official sources:</strong> Confirm final payable amount through official PTA/FBR/DIRBS sources.</li>
              </ol>
            </section>

            <section className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
              <div>
                <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">What is PTA tax in Pakistan?</h2>
                <p>PTA tax is a commonly used public term for the taxes, duties, and registration charges that may apply when registering imported smartphones in Pakistan. The final payable amount can depend on FBR rules, PTA/DIRBS registration, device value, registration type, and government notifications.</p>
              </div>

              <div>
                <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">What is DIRBS mobile registration?</h2>
                <p>DIRBS (Device Identification, Registration and Blocking System) is the system used for device identification, registration, and blocking/approval status. It helps ensure that only compliant and tax-paid mobile devices operate on local mobile networks.</p>
              </div>

              <div>
                <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">What is regulatory duty on smartphones?</h2>
                <p>Regulatory duty is one of the possible government charges that may affect the final cost of imported smartphones. If regulatory duty is removed or revised, the final tax payable may decrease, but final calculation depends on official rates announced by the FBR.</p>
              </div>

              <div>
                <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">What changes if regulatory duty is abolished?</h2>
                <p>If regulatory duty is officially abolished on smartphones, the estimated payable amount may decrease depending on the final official notification and the device category. Please verify through official FBR notifications.</p>
              </div>

              <div>
                <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">PTA tax with Passport vs CNIC</h2>
                <p>PTA and mobile tax can differ depending on whether the phone is registered using a Passport or CNIC. The calculator includes both modes to give you an estimate, but final values should be checked officially.</p>
              </div>
            </section>

            <section className="rounded-3xl bg-[var(--bg-canvas)] p-6 md:p-8">
              <h2 className="text-[length:var(--text-h2)] font-bold mb-6">PTA Tax on Popular Phone Brands</h2>
              <div className="grid gap-6 sm:grid-cols-2 text-[var(--text-secondary)]">
                <div>
                  <h3 className="font-bold text-[var(--text-primary)]">PTA tax on iPhone in Pakistan</h3>
                  <p className="mt-2 text-sm leading-relaxed">Apple iPhones usually fall into the highest tax slabs due to their premium pricing. Estimate the cost based on the exact model and price in USD.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)]">PTA tax on Samsung phones</h3>
                  <p className="mt-2 text-sm leading-relaxed">Samsung offers both budget and flagship devices. High-end models like the S24 Ultra attract higher duties compared to mid-range A-series devices.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)]">PTA tax on Vivo, Oppo, Xiaomi, Infinix and Tecno</h3>
                  <p className="mt-2 text-sm leading-relaxed">These brands generally have mid-range and budget options, resulting in lower to moderate tax brackets. Calculate based on the device's dollar value.</p>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)]">PTA tax on used phones</h3>
                  <p className="mt-2 text-sm leading-relaxed">Used phones imported from abroad are also subject to taxes based on customs valuation of the device, regardless of whether they are new or used.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[length:var(--text-h2)] font-bold">Frequently Asked Questions</h2>
              <div className="mt-6 grid gap-4">
                {faqItems.map((item: any) => (
                  <details key={item.name} className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 transition-colors hover:bg-[var(--bg-canvas)]">
                    <summary className="cursor-pointer font-bold text-[var(--text-primary)] outline-none">{item.name}</summary>
                    <p className="mt-3 text-[var(--text-secondary)] leading-relaxed">{item.acceptedAnswer.text}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="rounded-3xl border border-orange-200 bg-orange-50 p-6 dark:border-orange-900/50 dark:bg-orange-950/20">
              <h3 className="font-bold text-orange-900 dark:text-orange-100">Important Disclaimer</h3>
              <p className="mt-3 text-sm leading-relaxed text-orange-800 dark:text-orange-200">
                This PTA Tax Calculator is for educational and estimation purposes only. Tools2Do is not affiliated with PTA, FBR, DIRBS, Pakistan Customs, or any government department. Final tax, duty, approval status, and mobile registration charges should be verified through official PTA/FBR/DIRBS channels.
              </p>
              <div className="mt-4 pt-4 border-t border-orange-200/50 dark:border-orange-900/50">
                <p className="text-xs font-semibold text-orange-900 dark:text-orange-100">Privacy note: This calculator runs in your browser and does not store your phone details, phone value, or IMEI.</p>
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6">
              <h3 className="font-bold text-[var(--text-primary)]">Related Pakistan Tools</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link href="/pk" className="text-[var(--text-secondary)] hover:text-[var(--accent-action)] hover:underline">
                    Pakistan Utility Tools &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/tools" className="text-[var(--text-secondary)] hover:text-[var(--accent-action)] hover:underline">
                    All Free Online Tools &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/tools/percentage-calculator" className="text-[var(--text-secondary)] hover:text-[var(--accent-action)] hover:underline">
                    Free Online Calculators &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[var(--text-secondary)] hover:text-[var(--accent-action)] hover:underline">
                    Contact Tools2Do &rarr;
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
