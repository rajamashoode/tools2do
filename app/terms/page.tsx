import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service – Tools2Do',
  description: 'Read the Terms of Service for using Tools2Do.com free online tools and Pakistan utility helpers.',
  alternates: { canonical: 'https://tools2do.com/terms' },
};

export default function Terms(): React.ReactElement {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 md:px-6">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent-action)]">
        Legal
      </p>

      <h1 className="mt-3 text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">
        Terms of Service
      </h1>

      <p className="mt-4 text-sm text-[var(--text-muted)]">Last updated: June 2026</p>

      <div className="mt-8 space-y-8 text-[var(--text-secondary)] leading-7">
        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">
            1. Acceptance of These Terms
          </h2>
          <p>
            By accessing or using Tools2Do.com, you agree to these Terms of Service. If you do not agree with these terms, please do not use the website.
          </p>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">
            2. What Tools2Do Provides
          </h2>
          <p>
            Tools2Do provides free browser-based tools, calculators, converters, image utilities, PDF utilities, text helpers, developer tools, and Pakistan utility information pages. The website is provided for general informational and convenience purposes.
          </p>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">
            3. No Official Affiliation
          </h2>
          <p>
            Tools2Do is an independent website. We are not affiliated with PITC, WAPDA, LESCO, MEPCO, IESCO, FESCO, GEPCO, HESCO, PESCO, K-Electric, SNGPL, PTCL, BISP, Ehsaas, NADRA, or any government body unless a page clearly states otherwise.
          </p>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">
            4. Use at Your Own Responsibility
          </h2>
          <p>
            We try to keep tools accurate and useful, but we do not guarantee that every result, calculation, conversion, link, or utility page will always be complete, current, or error-free. You are responsible for verifying important information from official sources before making decisions.
          </p>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">
            5. Local Browser Processing
          </h2>
          <p>
            Many tools are designed to run locally in your browser. However, you should avoid uploading, entering, or processing highly sensitive information unless you are comfortable doing so and understand how the specific tool works.
          </p>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">
            6. Advertising and Third-Party Links
          </h2>
          <p>
            Tools2Do may display advertisements and may link to third-party websites, including official utility portals and external resources. We are not responsible for the content, privacy practices, availability, or accuracy of third-party websites.
          </p>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">
            7. Prohibited Use
          </h2>
          <p>
            You agree not to misuse the website, attempt to disrupt its operation, reverse engineer protected parts of the service, use the site for unlawful activity, or overload the website with automated requests.
          </p>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">
            8. Changes to These Terms
          </h2>
          <p>
            We may update these Terms of Service from time to time. Continued use of Tools2Do.com after changes are posted means you accept the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">
            9. Contact
          </h2>
          <p>
            For questions about these terms, corrections, or support, please visit the <Link href="/contact" className="font-semibold text-[var(--accent-action)] hover:underline">Contact page</Link>.
          </p>
        </section>
      </div>
    </article>
  );
}
