import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import type { ReactNode } from 'react';
import '@/app/globals.css';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap', weight: ['300','400','500','600','700','800','900'] });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-heading-var', display: 'swap', weight: ['400','500','600','700','800'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://tools2do.com'),
  title: { default: 'Tools2Do – Free Online Developer Tools & Pakistan Utilities', template: '%s | Tools2Do' },
  description: 'Free browser-based tools for developers and Pakistan utility helpers. JSON formatter, image compressor, LESCO bill checker and 40+ more tools. No signup, no upload.',
  keywords: ['online tools','developer tools','LESCO bill','image compressor','JSON formatter','Pakistan utilities','free tools'],
  openGraph: { siteName: 'Tools2Do', type: 'website', url: 'https://tools2do.com', title: 'Tools2Do – Free Online Developer Tools & Pakistan Utilities', description: 'Free browser-based tools for developers and Pakistan utility helpers. 40+ tools, no signup.' },
  twitter: { card: 'summary_large_image', title: 'Tools2Do – Free Online Developer Tools & Pakistan Utilities', description: '40+ free browser tools. No signup, no server processing.' },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '512x512', type: 'image/png' }],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://tools2do.com',
    types: {
      'application/rss+xml': 'https://tools2do.com/feed.xml',
    },
  },
};

const GA_ID = 'G-CFHWRFE835';
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? 'ca-pub-0000000000000000';
const SITE_URL = 'https://tools2do.com';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Tools2Do',
  alternateName: 'tools2do.com',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  email: 'support@tools2do.com',
  description:
    'Tools2Do is an independent online tools platform offering free browser-based developer tools, PDF tools, image tools, text utilities, calculators, and Pakistan utility guides.',
  foundingDate: '2026',
  sameAs: [
    'https://github.com/rajamashoode/tools2do',
    'https://x.com/rajamashoodelahi',
    'https://linkedin.com/in/rajamashoodelahi',
    'https://facebook.com/rajamashoodelahi',
    'https://instagram.com/rajamashoodelahi',
    'https://youtube.com/@rajamashoodelahi',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'support@tools2do.com',
    url: `${SITE_URL}/contact`,
    availableLanguage: ['English'],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Tools2Do',
  alternateName: 'tools2do.com',
  url: SITE_URL,
  description:
    'Free browser-based tools for developers, creators, students, and everyday users, including Pakistan utility helpers.',
  inLanguage: 'en',
  publisher: {
    '@id': `${SITE_URL}/#organization`,
  },
};

type Props = { children: ReactNode };

export default function RootLayout({ children }: Props): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Google Analytics */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
        {/* Google AdSense */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} bg-[var(--bg-canvas)] font-sans text-[var(--text-primary)] antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
