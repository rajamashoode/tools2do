import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

const devTools = [
  { href: '/tools/json-formatter',        label: 'JSON Formatter'      },
  { href: '/tools/image-compressor',      label: 'Image Compressor'    },
  { href: '/tools/image-converter',       label: 'Image Converter'     },
  { href: '/tools/word-counter',          label: 'Word Counter'        },
  { href: '/tools/password-generator',    label: 'Password Generator'  },
  { href: '/tools/regex-tester',          label: 'Regex Tester'        },
  { href: '/tools/base64',                label: 'Base64 Encoder'      },
  { href: '/tools/url-encoder',           label: 'URL Encoder'         },
  { href: '/tools/qr-code-generator',     label: 'QR Code Generator'   },
  { href: '/tools/age-calculator',        label: 'Age Calculator'      },
];

const pkTools = [
  { href: '/pk/check-lesco-bill',              label: 'LESCO Bill Checker'  },
  { href: '/pk/check-ke-electric-bill',        label: 'K-Electric Bill'     },
  { href: '/pk/check-mepco-bill',              label: 'MEPCO Bill Checker'  },
  { href: '/pk/check-iesco-bill',              label: 'IESCO Bill Checker'  },
  { href: '/pk/check-gepco-bill',              label: 'GEPCO Bill Checker'  },
  { href: '/pk/check-fesco-bill',              label: 'FESCO Bill Checker'  },
  { href: '/pk/check-hesco-bill',              label: 'HESCO Bill Checker'  },
  { href: '/pk/check-pesco-bill',              label: 'PESCO Bill Checker'  },
  { href: '/pk/ehsaas-program-tracking',       label: 'Ehsaas Tracking'     },
  { href: '/pk',                               label: 'All Pakistan Tools →' },
];

const socialLinks = [
  { href: siteConfig.social.github,    label: 'GitHub'    },
  { href: siteConfig.social.instagram, label: 'Instagram' },
  { href: siteConfig.social.linkedin,  label: 'LinkedIn'  },
  { href: siteConfig.social.facebook,  label: 'Facebook'  },
  { href: siteConfig.social.tiktok,    label: 'TikTok'    },
  { href: siteConfig.social.youtube,   label: 'YouTube'   },
];

export function Footer(): React.ReactElement {
  return (
    <footer className="border-t border-[var(--border-default)] bg-[var(--bg-surface)] mt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        {/* Top grid */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="text-xl font-extrabold text-[var(--text-primary)]">
              tools2do<span className="text-[var(--accent-action)]">.com</span>
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
              40+ free browser utilities for developers worldwide and practical Pakistan utility helpers. No signup. No server processing.
            </p>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              📍 Abbottabad, Pakistan<br />
              ✉️ <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--accent-action)] transition-colors">{siteConfig.email}</a>
            </p>
          </div>

          {/* Developer tools */}
          <nav aria-label="Developer tools" className="grid gap-1.5 text-sm">
            <h3 className="font-bold text-[var(--text-primary)] mb-1">Developer Tools</h3>
            {devTools.map(t => (
              <Link key={t.href} href={t.href} className="text-[var(--text-secondary)] hover:text-[var(--accent-action)] transition-colors">{t.label}</Link>
            ))}
          </nav>

          {/* Pakistan utilities */}
          <nav aria-label="Pakistan utilities" className="grid gap-1.5 text-sm">
            <h3 className="font-bold text-[var(--text-primary)] mb-1">Pakistan Utilities</h3>
            {pkTools.map(t => (
              <Link key={t.href} href={t.href} className="text-[var(--text-secondary)] hover:text-[var(--accent-action)] transition-colors">{t.label}</Link>
            ))}
          </nav>

          {/* Company + Social */}
          <div className="grid gap-4 text-sm">
            <nav aria-label="Company links">
              <h3 className="font-bold text-[var(--text-primary)] mb-1">Company</h3>
              <div className="grid gap-1.5">
                <Link href="/about"          className="text-[var(--text-secondary)] hover:text-[var(--accent-action)] transition-colors">About</Link>
                <Link href="/team"           className="text-[var(--text-secondary)] hover:text-[var(--accent-action)] transition-colors">Team</Link>
                <Link href="/contact"        className="text-[var(--text-secondary)] hover:text-[var(--accent-action)] transition-colors">Contact</Link>
                <Link href="/privacy-policy" className="text-[var(--text-secondary)] hover:text-[var(--accent-action)] transition-colors">Privacy Policy</Link>
                <Link href="/terms"          className="text-[var(--text-secondary)] hover:text-[var(--accent-action)] transition-colors">Terms of Service</Link>
                <Link href="/sitemap"        className="text-[var(--text-secondary)] hover:text-[var(--accent-action)] transition-colors">Sitemap</Link>
              </div>
            </nav>
            <nav aria-label="Social media profiles">
              <h3 className="font-bold text-[var(--text-primary)] mb-1">Follow Us</h3>
              <div className="grid gap-1.5">
                {socialLinks.map(s => (
                  <a key={s.href} href={s.href} target="_blank" rel="noreferrer"
                    className="text-[var(--text-secondary)] hover:text-[var(--accent-action)] transition-colors">
                    {s.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-[var(--border-default)] pt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Tools2Do.com · Independent online tools platform · Built in Abbottabad, Pakistan</p>
          <p>Ad-supported · All tools run locally in your browser whenever possible.</p>
        </div>
      </div>
    </footer>
  );
}