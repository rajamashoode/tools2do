import fs from 'fs';
import path from 'path';

const PAGES = [
  {
    path: 'app/tools/url-encoder/url-decode-online',
    title: 'URL Decoder Online – Decode URL Encoded Strings',
    description: 'Instantly decode percent-encoded URL strings back into human-readable text. Free developer tool for inspecting web links.',
    h1: 'URL Decoder Online',
    p1: 'Quickly decode unreadable percent-encoded URLs (like %20 for space) back into normal text strings for easy inspection and debugging.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { UrlEncoderDecoder } from '@/components/tools/UrlEncoderDecoder';`,
    componentRender: `<UrlEncoderDecoder />`,
    steps: [
      { step: 'Paste Encoded String', description: 'Input your string containing % symbols.' },
      { step: 'Select Decode', description: 'Ensure the tool is in decode mode.' },
      { step: 'Read Text', description: 'Copy the newly decoded human-readable text.' }
    ],
    useCases: [
      'Debugging query parameters on a redirecting URL.',
      'Translating an encoded foreign language search query.',
      'Inspecting tracking links in marketing emails.'
    ],
    relatedTools: [
      { href: '/tools/url-encoder/url-encode-online', name: 'URL Encoder', description: 'Encode URLs for safety.' }
    ]
  },
  {
    path: 'app/tools/percentage-calculator/tax-calculator',
    title: 'Sales Tax Calculator – Calculate Tax Fast',
    description: 'Instantly calculate sales tax, GST, or VAT percentages. Free online tax calculator for accounting and shopping.',
    h1: 'Online Sales Tax Calculator',
    p1: 'Find the exact final price after tax. Enter the base price and the tax percentage to instantly calculate the total cost.',
    schemaCategory: 'WebApplication',
    componentImport: `import { PercentageCalculator } from '@/components/tools/PercentageCalculator';`,
    componentRender: `<PercentageCalculator />`,
    steps: [
      { step: 'Enter Amount', description: 'Type the base price of your item.' },
      { step: 'Set Tax Rate', description: 'Input the local tax percentage rate.' },
      { step: 'Calculate', description: 'View the total amount including calculated tax.' }
    ],
    useCases: [
      'Calculating final retail prices at the checkout register.',
      'Checking GST or VAT on a wholesale invoice.',
      'Budgeting for a large purchase like a car or house.'
    ],
    relatedTools: [
      { href: '/tools/percentage-calculator/margin-calculator', name: 'Margin Calculator', description: 'Calculate profit margins.' }
    ]
  }
];

function generatePageTemplate(page) {
  const schemaStr = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: page.h1,
    description: page.description,
    applicationCategory: page.schemaCategory,
    operatingSystem: 'Web Browser',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: "https://tools2do.com/" + page.path.replace('app/', ''),
  });

  return [
    "import type { Metadata } from 'next';",
    page.componentImport,
    "import { ToolInfoSection } from '@/components/ToolInfoSection';",
    "import { RelatedTools } from '@/components/RelatedTools';",
    "",
    "export const metadata: Metadata = {",
    "  title: '" + page.title.replace(/'/g, "\\'") + "',",
    "  description: \"" + page.description.replace(/"/g, '\\"') + "\",",
    "  alternates: { canonical: 'https://tools2do.com/" + page.path.replace('app/', '') + "' },",
    "};",
    "",
    "const jsonLd = " + schemaStr + ";",
    "",
    "export default function Page(): React.ReactElement {",
    "  return (",
    "    <>",
    "      <script id=\"tool-schema\" type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />",
    "      <div className=\"mx-auto max-w-5xl px-4 pt-10 md:px-6\">",
    "        <h1 className=\"text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]\">" + page.h1 + "</h1>",
    "        <p className=\"mt-3 max-w-2xl text-[var(--text-secondary)]\">" + page.p1.replace(/'/g, "&apos;") + "</p>",
    "      </div>",
    "      " + page.componentRender,
    "      <ToolInfoSection",
    "        howToSteps={[" + page.steps.map(s => "{ step: \"" + s.step.replace(/"/g, '\\"') + "\", description: \"" + s.description.replace(/"/g, '\\"') + "\" }").join(', ') + "]}",
    "        useCases={[" + page.useCases.map(u => "\"" + u.replace(/"/g, '\\"') + "\"").join(', ') + "]}",
    "        privacyNote=\"All processing is executed locally using your browser. Your data is never sent to a server.\"",
    "      />",
    "      <RelatedTools",
    "        tools={[" + page.relatedTools.map(r => "{ href: '" + r.href + "', name: '" + r.name.replace(/'/g, "\\'") + "', description: \"" + r.description.replace(/"/g, '\\"') + "\" }").join(', ') + "]}",
    "      />",
    "    </>",
    "  );",
    "}"
  ].join('\n');
}

async function main() {
  for (const page of PAGES) {
    const fullDir = path.resolve(page.path);
    if (!fs.existsSync(fullDir)) {
      fs.mkdirSync(fullDir, { recursive: true });
    }
    const filePath = path.join(fullDir, 'page.tsx');
    fs.writeFileSync(filePath, generatePageTemplate(page));
    console.log("Created " + filePath);
  }
}

main().catch(console.error);
