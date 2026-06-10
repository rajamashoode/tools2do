import Link from 'next/link';

const devTools = [
  {href:'/tools/json-formatter',       label:'JSON Formatter'},
  {href:'/tools/image-compressor',     label:'Image Compressor'},
  {href:'/tools/word-counter',         label:'Word Counter'},
  {href:'/tools/password-generator',   label:'Password Generator'},
  {href:'/tools/regex-tester',         label:'Regex Tester'},
  {href:'/tools/base64',               label:'Base64 Encoder'},
  {href:'/tools/url-encoder',          label:'URL Encoder'},
  {href:'/tools/case-converter',       label:'Case Converter'},
  {href:'/tools/qr-code-generator',    label:'QR Code Generator'},
  {href:'/tools/age-calculator',       label:'Age Calculator'},
];

const pkTools = [
  {href:'/pk/check-lesco-bill',        label:'LESCO Bill Checker'},
  {href:'/pk/check-ke-electric-bill',  label:'K-Electric Bill'},
  {href:'/pk/check-mepco-bill',        label:'MEPCO Bill Checker'},
  {href:'/pk/check-iesco-bill',        label:'IESCO Bill Checker'},
  {href:'/pk/check-gepco-bill',        label:'GEPCO Bill Checker'},
  {href:'/pk/check-fesco-bill',        label:'FESCO Bill Checker'},
  {href:'/pk/check-hesco-bill',        label:'HESCO Bill Checker'},
  {href:'/pk/check-pesco-bill',        label:'PESCO Bill Checker'},
  {href:'/pk/ehsaas-program-tracking', label:'Ehsaas Tracking'},
  {href:'/pk',                         label:'All Pakistan Tools →'},
];

export function Footer(): React.ReactElement {
  return (
    <footer className="border-t border-[var(--border-default)] bg-[var(--bg-surface)] mt-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <p className="text-xl font-extrabold text-[var(--text-primary)]">
            tools2do<span className="text-[var(--accent-action)]">.com</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--text-secondary)]">
            40+ free browser utilities for developers worldwide and practical Pakistan utility helpers. No signup. No server processing. Ever.
          </p>
        </div>

        <nav aria-label="Developer tools" className="grid gap-1.5 text-sm">
          <h2 className="font-bold text-[var(--text-primary)] mb-1">Developer Tools</h2>
          {devTools.map(t => (
            <Link key={t.href} href={t.href} className="text-[var(--text-secondary)] hover:text-[var(--accent-action)] transition-colors">{t.label}</Link>
          ))}
        </nav>

        <nav aria-label="Pakistan utilities" className="grid gap-1.5 text-sm">
          <h2 className="font-bold text-[var(--text-primary)] mb-1">Pakistan Utilities</h2>
          {pkTools.map(t => (
            <Link key={t.href} href={t.href} className="text-[var(--text-secondary)] hover:text-[var(--accent-action)] transition-colors">{t.label}</Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-[var(--border-default)] px-4 py-4 text-center text-xs text-[var(--text-muted)]">
        © {new Date().getFullYear()} Tools2Do.com ·{' '}
        <Link href="/privacy-policy" className="hover:text-[var(--accent-action)]">Privacy Policy</Link>
        {' '}·{' '}
        <Link href="/about" className="hover:text-[var(--accent-action)]">About</Link>
        {' '}· Ad-supported · All tools run locally in your browser.
      </div>
    </footer>
  );
}
