import type { Metadata } from 'next';
import { SlugGenerator } from '@/components/tools/SlugGenerator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'URL Slug Generator – Create SEO-Friendly Links',
  description: "Instantly convert article titles into clean, SEO-friendly URL slugs. Free tool for bloggers and content managers.",
  alternates: { canonical: 'https://tools2do.com/tools/slug-generator/url-slug-generator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"URL Slug Generator","description":"Instantly convert article titles into clean, SEO-friendly URL slugs. Free tool for bloggers and content managers.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/slug-generator/url-slug-generator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">URL Slug Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Transform long blog post titles into perfectly formatted, URL-safe slugs. Automatically removes special characters and spaces.</p>
      </div>
      <SlugGenerator />
      <ToolInfoSection
        howToSteps={[{ step: "Input Title", description: "Paste the headline or title of your article." }, { step: "Generate Slug", description: "The tool will instantly lowercase it and add hyphens." }, { step: "Copy URL Path", description: "Copy the clean string to use in your CMS." }]}
        useCases={["Creating SEO-friendly permalinks for WordPress or Next.js blogs.", "Standardizing database IDs derived from user-generated content names.", "Preparing clean directory names for a server filesystem."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/case-converter', name: 'Case Converter', description: "Convert string casings." }, { href: '/tools/url-encoder', name: 'URL Encoder', description: "Encode URLs with special characters." }]}
      />
    </>
  );
}