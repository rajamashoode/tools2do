import Script from 'next/script';
import { AdSlot } from '@/components/AdSlot';
import { BentoGrid } from '@/components/BentoGrid';
import { HeroSearchBar } from '@/components/HeroSearchBar';
import { GLOBAL_TOOLS, PK_TOOLS } from '@/lib/tools-registry';

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
      contactPoint: { '@type': 'ContactPoint', email: 'support@tools2do.com', contactType: 'customer support' },
      address: { '@type': 'PostalAddress', addressLocality: 'Abbottabad', addressCountry: 'PK' },
      sameAs: [
        'https://github.com/rajamashoode/tools2do',
        'https://x.com/rajamashoode',
        'https://linkedin.com/in/rajamashoode',
        'https://facebook.com/rajamashoode',
        'https://instagram.com/rajamashoode',
        'https://tiktok.com/@rajamashoode',
        'https://youtube.com/@rajamashoode',
      ],
    },
  ],
};

export default function HomePage(): React.ReactElement {
  const allTools = [...GLOBAL_TOOLS, ...PK_TOOLS];
  return (
    <>
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HeroSearchBar
        title="Free online tools that run instantly in your browser"
        subtitle="Developer utilities, image tools, converters, text helpers, and Pakistan utility guides — no signup, no server processing."
      />
      <AdSlot position="leaderboard" />
      <BentoGrid tools={allTools} />
    </>
  );
}
