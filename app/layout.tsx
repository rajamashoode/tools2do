import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import type { ReactNode } from 'react';
import '@/app/globals.css';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';
import { BackToTop } from '@/components/BackToTop';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap', weight: ['300','400','500','600','700','800','900'] });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-heading-var', display: 'swap', weight: ['400','500','600','700','800'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://tools2do.com'),
  title: { default: 'Tools2Do – Free Online Developer Tools & Pakistan Utilities', template: '%s | Tools2Do' },
  description: 'Free browser-based tools for developers and Pakistan utility helpers. JSON formatter, image compressor, LESCO bill checker and 40+ more tools. No signup, no upload.',
  keywords: ['online tools','developer tools','LESCO bill','image compressor','JSON formatter','Pakistan utilities','free tools'],
  openGraph: {
    siteName: 'Tools2Do',
    type: 'website',
    url: 'https://tools2do.com',
    title: 'Tools2Do – Free Online Developer Tools & Pakistan Utilities',
    description: 'Free browser-based tools for developers and Pakistan utility helpers. 40+ tools, no signup.',
    images: [{ url: 'https://tools2do.com/og-image.png', width: 1200, height: 630, alt: 'Tools2Do – Free Online Tools' }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://tools2do.com' },
};

const GA_ID = 'G-CFHWRFE835';
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? 'ca-pub-0000000000000000';

const websiteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://tools2do.com/#website',
      url: 'https://tools2do.com',
      name: 'Tools2Do',
      description: 'Free browser-based tools for developers and Pakistan utility helpers.',
      publisher: { '@id': 'https://tools2do.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: 'https://tools2do.com/?q={search_term_string}' },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://tools2do.com/#organization',
      name: 'Tools2Do',
      url: 'https://tools2do.com',
      logo: { '@type': 'ImageObject', url: 'https://tools2do.com/logo.svg' },
      contactPoint: { '@type': 'ContactPoint', email: 'rajamashoodelahi@gmail.com', contactType: 'customer support' },
      address: { '@type': 'PostalAddress', addressLocality: 'Abbottabad', addressCountry: 'PK' },
      sameAs: [
        'https://github.com/rajamashoode/tools2do',
        'https://instagram.com/rajamashoodelahi',
        'https://linkedin.com/in/rajamashoodelahi',
        'https://facebook.com/rajamashoodelahi',
        'https://tiktok.com/@rajamashoodelahi',
        'https://youtube.com/@rajamashoodelahi',
      ],
    },
  ],
};

type Props = { children: ReactNode };

export default function RootLayout({ children }: Props): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
        {/* Organization + WebSite Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} bg-[var(--bg-canvas)] font-sans text-[var(--text-primary)] antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}