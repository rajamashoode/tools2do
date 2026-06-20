import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy – Tools2Do',
  description: 'Privacy policy for Tools2Do.com. Learn how we handle your data — spoiler: we barely collect any.',
  alternates: { canonical: 'https://tools2do.com/privacy-policy' },
};

export default function PrivacyPolicy(): React.ReactElement {
  const updated = 'June 2026';
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 md:px-6">
      <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Privacy Policy</h1>
      <p className="mt-3 text-sm text-[var(--text-muted)]">Last updated: {updated}</p>

      <div className="mt-8 space-y-8 text-[var(--text-secondary)] leading-7">
        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">Overview</h2>
          <p>Tools2Do.com provides free browser-based utility tools. This privacy policy explains what information we collect and how we use it. We are committed to protecting your privacy and keeping data collection minimal.</p>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">Data we do NOT collect</h2>
          <p>All tool processing on Tools2Do.com runs entirely inside your browser. This means:</p>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>Files you upload (images, PDFs) are never sent to our servers.</li>
            <li>Text you paste into tools (JSON, code, passwords) stays on your device.</li>
            <li>Bill reference numbers and CNIC numbers entered into Pakistan utility helpers are never transmitted or stored.</li>
            <li>We do not require account registration or collect personal information.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">Data we do collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-[var(--text-primary)]">Analytics:</strong> We use Google Analytics to collect anonymous usage data including page views, session duration, device type, and country. This helps us understand which tools are most useful. No personally identifiable information is collected.</li>
            <li><strong className="text-[var(--text-primary)]">Cookies:</strong> Google Analytics sets cookies for session tracking. You can opt out using a browser extension or by disabling cookies.</li>
            <li><strong className="text-[var(--text-primary)]">Advertising:</strong> We display Google AdSense advertisements. Google may use cookies to serve ads based on your browsing history. See Google's Privacy Policy for details.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">Third-party services</h2>
          <p>We use the following third-party services:</p>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>Google Analytics — anonymous usage tracking</li>
            <li>Google AdSense — display advertising</li>
            <li>Vercel — hosting and edge delivery</li>
            <li>QR Server API (api.qrserver.com) — QR code generation (your input text is sent to this API)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">Your rights</h2>
          <p>You may disable cookies in your browser settings at any time. For questions about your data or this policy, contact us via the About page.</p>
        </section>

        <section>
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)] mb-3">Changes to this policy</h2>
          <p>We may update this policy occasionally. The last updated date at the top of this page reflects the most recent version.</p>
        </section>
      </div>
    </article>
  );
}
