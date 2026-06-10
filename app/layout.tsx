import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import '@/app/globals.css';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading-var',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tools2do.com'),
  title: {
    default: 'Tools2Do – Free Online Developer Tools & Pakistan Utilities',
    template: '%s | Tools2Do',
  },
  description:
    'Fast free browser tools for developers and mobile-first Pakistan utility helpers. No signup, no server processing.',
  openGraph: {
    siteName: 'Tools2Do',
    type: 'website',
  },
};

type Props = { children: ReactNode };

export default function RootLayout({ children }: Props): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jakarta.variable} bg-[var(--bg-canvas)] font-sans text-[var(--text-primary)] antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
