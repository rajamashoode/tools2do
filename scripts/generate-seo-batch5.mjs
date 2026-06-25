import fs from 'fs';
import path from 'path';

const UTILITIES = [
  { shortName: 'LESCO', fullName: 'Lahore Electric Supply Company', city: 'Lahore', officialUrl: 'https://bill.pitc.com.pk/lescobill' },
  { shortName: 'MEPCO', fullName: 'Multan Electric Power Company', city: 'Multan', officialUrl: 'https://bill.pitc.com.pk/mepcobill' },
  { shortName: 'FESCO', fullName: 'Faisalabad Electric Supply Company', city: 'Faisalabad', officialUrl: 'https://bill.pitc.com.pk/fescobill' },
  { shortName: 'GEPCO', fullName: 'Gujranwala Electric Power Company', city: 'Gujranwala', officialUrl: 'https://bill.pitc.com.pk/gepcobill' },
  { shortName: 'HESCO', fullName: 'Hyderabad Electric Supply Company', city: 'Hyderabad', officialUrl: 'https://bill.pitc.com.pk/hescobill' },
  { shortName: 'SEPCO', fullName: 'Sukkur Electric Power Company', city: 'Sukkur', officialUrl: 'https://bill.pitc.com.pk/sepcobill' },
  { shortName: 'PESCO', fullName: 'Peshawar Electric Supply Company', city: 'Peshawar', officialUrl: 'https://bill.pitc.com.pk/pescobill' },
  { shortName: 'TESCO', fullName: 'Tribal Areas Electric Supply Company', city: 'Tribal Areas', officialUrl: 'https://bill.pitc.com.pk/tescobill' },
  { shortName: 'QESCO', fullName: 'Quetta Electric Supply Company', city: 'Quetta', officialUrl: 'https://bill.pitc.com.pk/qescobill' },
  { shortName: 'IESCO', fullName: 'Islamabad Electric Supply Company', city: 'Islamabad', officialUrl: 'https://bill.pitc.com.pk/iescobill' }
];

const PAGES = [];

for (const util of UTILITIES) {
  PAGES.push({
    path: `app/pakistan-tools/${util.shortName.toLowerCase()}-bill-checker`,
    title: `${util.shortName} Bill Checker – Check ${util.fullName} Bill Online`,
    description: `Easily check your ${util.shortName} (${util.fullName}) electricity bill online. Enter your 14-digit reference number to safely view your bill status.`,
    h1: `${util.shortName} Bill Checker`,
    p1: `View and download your ${util.fullName} electricity bill online. We securely redirect you to the official PITC portal.`,
    schemaCategory: 'WebApplication',
    componentImport: `import { LescoBillChecker } from '@/components/tools/LescoBillChecker';`,
    componentRender: `<LescoBillChecker utility={{ shortName: '${util.shortName}', fullName: '${util.fullName}', city: '${util.city}', officialUrl: '${util.officialUrl}' }} />`,
    steps: [
      { step: 'Find Reference Number', description: `Locate the 14-digit reference number on your previous ${util.shortName} bill.` },
      { step: 'Enter Details', description: 'Enter the 14-digit reference number into the input field.' },
      { step: 'Check Bill', description: 'Click the check button to be securely redirected to your official bill.' }
    ],
    useCases: [
      `Checking if your monthly ${util.shortName} bill has been generated yet.`,
      `Finding out your exact ${util.city} electricity bill amount.`,
      'Retrieving a duplicate bill for printing and payment.'
    ],
    relatedTools: [
      { href: '/pakistan-tools/electricity-subsidy-calculator', name: 'Electricity Subsidy Calculator', description: 'Check your electricity subsidy eligibility.' }
    ]
  });
}

// Add remaining Pakistan Tools
PAGES.push(
  {
    path: 'app/pakistan-tools/electricity-subsidy-calculator',
    title: 'Electricity Subsidy Calculator Pakistan – Check Bill Subsidy',
    description: 'Calculate your electricity bill subsidy and check your eligibility for the Punjab CM Roshan Gharana Scheme. Free online calculator.',
    h1: 'Electricity Subsidy Calculator',
    p1: 'Find out exactly how much relief you will receive on your electricity bill based on your units consumed under the Punjab Government Relief scheme.',
    schemaCategory: 'WebApplication',
    componentImport: `import { ElectricitySubsidyCalculator } from '@/components/tools/ElectricitySubsidyCalculator';`,
    componentRender: `<ElectricitySubsidyCalculator />`,
    steps: [
      { step: 'Select Month', description: 'Choose your billing month (e.g. August or September 2024).' },
      { step: 'Enter Units', description: 'Input the total units consumed as shown on your bill.' },
      { step: 'View Subsidy', description: 'The tool calculates your per-unit rate and total subsidy instantly.' }
    ],
    useCases: [
      'Verifying if your household qualifies for the 14 rupees per unit relief.',
      'Checking your expected bill amount for August or September 2024.',
      'Understanding the breakdown of the Punjab CM Electricity Relief plan.'
    ],
    relatedTools: [
      { href: '/pakistan-tools/lesco-bill-checker', name: 'LESCO Bill Checker', description: 'Check your LESCO electricity bill.' }
    ]
  },
  {
    path: 'app/pakistan-tools/pta-tax-calculator',
    title: 'PTA Tax Calculator – Check Mobile Phone Tax in Pakistan',
    description: 'Calculate PTA tax on imported mobile phones including iPhone and Android. Updated PTA taxes for passport and CNIC registration.',
    h1: 'PTA Tax Calculator',
    p1: 'Find out the exact PTA tax required to register your imported mobile phone in Pakistan. View taxes based on CNIC or Passport.',
    schemaCategory: 'WebApplication',
    componentImport: `import { PtaTaxCalculator } from '@/components/tools/PtaTaxCalculator';`,
    componentRender: `<PtaTaxCalculator />`,
    steps: [
      { step: 'Select Phone Brand', description: 'Choose whether you are checking an iPhone, Samsung, or another brand.' },
      { step: 'Choose Model', description: 'Select the specific model of your phone.' },
      { step: 'View Taxes', description: 'Instantly view the tax rates for both Passport and CNIC registration.' }
    ],
    useCases: [
      'Finding out the PTA tax required before importing an iPhone to Pakistan.',
      'Deciding whether to register a mobile phone on a CNIC or a Passport.',
      'Budgeting for mobile phone registration fees at the airport.'
    ],
    relatedTools: [
      { href: '/pakistan-tools/electricity-subsidy-calculator', name: 'Electricity Subsidy Calculator', description: 'Calculate bill relief.' }
    ]
  }
);

function generatePageTemplate(page) {
  const schemaStr = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: page.h1,
    description: page.description,
    applicationCategory: page.schemaCategory,
    operatingSystem: 'Web Browser',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'PKR' },
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
    "        privacyNote=\"Tools2Do is an independent utility and is not affiliated with the government. Data is retrieved from official public sources directly in your browser. We do not store your reference numbers or sensitive data.\"",
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
