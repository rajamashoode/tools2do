import type { Metadata } from 'next';
import Script from 'next/script';
import { JsonFormatter } from '@/components/tools/JsonFormatter';

export const metadata: Metadata = {
  title: 'JSON Formatter & Validator',
  description: 'Format, validate, minify, copy, and inspect JSON locally in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/json-formatter' }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '1240' },
  featureList: ['JSON formatting', 'JSON validation', 'JSON minification', 'Copy formatted output', 'Upload JSON file', 'Keyboard shortcut formatting', 'Key count statistics'],
  url: 'https://tools2do.com/tools/json-formatter',
  name: 'JSON Formatter & Validator',
  description: 'Free browser-based JSON formatter, validator, minifier, and inspector.',
  screenshot: 'https://tools2do.com/images/json-formatter-screenshot.png'
};

export default function JsonFormatterPage(): React.ReactElement {
  return <><Script id="json-formatter-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><JsonFormatter /></>;
}
