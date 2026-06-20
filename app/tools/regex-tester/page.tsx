import type { Metadata } from 'next';
import { RegexTester } from '@/components/tools/RegexTester';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Regex Tester – Test Regular Expressions Online',
  description: 'Use Tools2Do\'s free Regex Tester to test regular expressions against sample text online. Highlight matches, test capture groups, and validate expressions.',
  alternates: { canonical: 'https://tools2do.com/tools/regex-tester' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Regex Tester & Matcher',
  description: 'Free browser-based regular expression tester with highlighted matches and capture groups.',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/regex-tester',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Regex Tester</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Test regular expressions with highlighted matches.</p>
      </div>
      <RegexTester />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Enter regex', description: 'Input your regular expression pattern and choose any match flags.' },
          { step: 'Provide test text', description: 'Paste your sample strings into the test area.' },
          { step: 'Inspect matches', description: 'View real-time highlighting of all matching strings and groups.' }
        ]}
        useCases={[
          'Validating regex patterns for form fields or backend code.',
          'Testing text extraction, splitting, or replace rules before deployment.',
          'Learning and debugging regular expressions with live visual feedback.'
        ]}
        privacyNote="Regex matching is run locally via the browser's JavaScript engine. Your input text is never sent to a server."
      />
      <RelatedTools
        tools={[
          { href: '/tools/find-and-replace', name: 'Find and Replace', description: 'Find and replace text with plain text or regex.' },
          { href: '/tools/json-formatter', name: 'JSON Formatter & Validator', description: 'Format, validate, minify and inspect JSON.' },
          { href: '/tools/javascript-formatter', name: 'JavaScript Formatter', description: 'Format or minify JavaScript code.' }
        ]}
      />
</>
  );
}
