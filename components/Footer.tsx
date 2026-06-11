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

const companyLinks = [
  {href:'/about',          label:'About'},
  {href:'/team',           label:'Team'},
  {href:'/contact',        label:'Contact'},
  {href:'/html-sitemap',   label:'HTML Sitemap'},
  {href:'/privacy-policy', label:'Privacy Policy'},
  {href:'/terms',          label:'Terms of Service'},
  {href:'/feed.xml',       label:'RSS Feed'},
];

const socialLinks = [
  { href: 'https://github.com/rajamashoode/tools2do', label: 'GitHub' },
  { href: 'https://x.com/rajamashoodelahi', label: 'X / Twitter' },
  { href: 'https://linkedin.com/in/rajamashoodelahi', label: 'LinkedIn' },
  { href: 'https://facebook.com/rajamashoodelahi', label: 'Facebook' },
  { href: 'https://instagram.com/rajamashoodelahi', label: 'Instagram' },
  { href: 'https://youtube.com/@rajamashoodelahi', label: 'YouTube' },
  { href: 'https://tools2do.com/feed.xml', label: 'RSS Feed' },
];

export function Footer(): React.ReactElement {
  return (
    <footer className="border-t border-[var(--border-default)] bg-[var(--bg-surface)] mt-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div>
          <p className="text-xl font-extrabold text-[var(--text-primary)]">
            tools2do<span className="text-[var(--accent-action)]">.com</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--text-secondary)]">
            40+ free browser utilities for developers worldwide and practical Pakistan utility helpers. No signup. No server processing whenever possible.
          </p>
          <p className="mt-4 text-sm text-[var(--text-secondary)]">
            Contact:{' '}
            <a href="mailto:support@tools2do.com" className="font-semibold text-[var(--accent-action)] hover:underline">
              support@tools2do.com
            </a>
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

        <div className="grid gap-6 text-sm content-start">
          <nav aria-label="Company pages" className="grid gap-1.5">
            <h2 className="font-bold text-[var(--text-primary)] mb-1">Company</h2>
            {companyLinks.map(t => (
              <Link key={t.href} href={t.href} className="text-[var(--text-secondary)] hover:text-[var(--accent-action)] transition-colors">{t.label}</Link>
            ))}
          </nav>

          <nav aria-label="Social profiles" className="grid gap-1.5">
            <h2 className="font-bold text-[var(--text-primary)] mb-1">Social</h2>
            {socialLinks.map(s => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--accent-action)] transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-[var(--border-default)] px-4 py-4 text-center text-xs text-[var(--text-muted)]">
        © {new Date().getFullYear()} Tools2Do.com · Independent online tools platform ·{' '}
        <Link href="/privacy-policy" className="hover:text-[var(--accent-action)]">Privacy Policy</Link>
        {' '}·{' '}
        <Link href="/terms" className="hover:text-[var(--accent-action)]">Terms</Link>
        {' '}·{' '}
        <Link href="/contact" className="hover:text-[var(--accent-action)]">Contact</Link>
        {' '}· All tools run locally in your browser whenever possible.
      </div>
    </footer>
  );
}
