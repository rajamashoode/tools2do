import fs from 'fs';
import path from 'path';

const PAGES = [
  // --- CASE CONVERTER ---
  {
    path: 'app/tools/case-converter/pascal-case-converter',
    title: 'Pascal Case Converter – Convert Text to PascalCase',
    description: 'Easily convert spaces, snake_case, and camelCase into PascalCase online. Free text formatting tool for developers and writers.',
    h1: 'Pascal Case Converter',
    p1: 'Quickly transform standard text strings into PascalCase (UpperCamelCase). Perfect for naming classes in JavaScript, C#, and Java.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { CaseConverter } from '@/components/tools/CaseConverter';`,
    componentRender: `<CaseConverter />`,
    steps: [
      { step: 'Input String', description: 'Paste the words you want to convert into the text box.' },
      { step: 'Select PascalCase', description: 'Click the PascalCase button to format your text instantly.' },
      { step: 'Copy Result', description: 'Copy the transformed string to your clipboard.' }
    ],
    useCases: [
      'Generating C# or Java class names from human-readable text.',
      'Formatting React component names.',
      'Standardizing database table naming conventions.'
    ],
    relatedTools: [
      { href: '/tools/case-converter/camel-case-converter', name: 'Camel Case Converter', description: 'Convert text to camelCase.' }
    ]
  },
  {
    path: 'app/tools/case-converter/kebab-case-converter',
    title: 'Kebab Case Converter – Convert Text to kebab-case',
    description: 'Convert normal text and strings into kebab-case online. Free developer tool for generating URL slugs and CSS class names.',
    h1: 'Kebab Case Converter',
    p1: 'Format your text strings with hyphens (dash separated). Essential for writing HTML classes, CSS IDs, and URL parameters.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { CaseConverter } from '@/components/tools/CaseConverter';`,
    componentRender: `<CaseConverter />`,
    steps: [
      { step: 'Paste Content', description: 'Enter the text you need formatted.' },
      { step: 'Apply kebab-case', description: 'Click the formatting button to replace spaces with dashes.' },
      { step: 'Copy String', description: 'Copy your correctly formatted kebab-case text.' }
    ],
    useCases: [
      'Formatting HTML and CSS class names correctly.',
      'Generating URL slugs from blog post titles.',
      'Creating standardized file names for web assets.'
    ],
    relatedTools: [
      { href: '/tools/slug-generator', name: 'URL Slug Generator', description: 'Generate clean URL slugs.' }
    ]
  },
  {
    path: 'app/tools/case-converter/sentence-case-converter',
    title: 'Sentence Case Converter – Format Text Online',
    description: 'Capitalize the first letter of each sentence instantly. Free online sentence case converter for emails and essays.',
    h1: 'Sentence Case Converter',
    p1: 'Fix accidental ALL CAPS typing by converting your text to proper sentence case. We automatically capitalize the first word of every sentence.',
    schemaCategory: 'WebApplication',
    componentImport: `import { CaseConverter } from '@/components/tools/CaseConverter';`,
    componentRender: `<CaseConverter />`,
    steps: [
      { step: 'Input Text', description: 'Paste the messy text block.' },
      { step: 'Click Sentence case', description: 'Instantly fix the capitalization.' },
      { step: 'Download or Copy', description: 'Grab your correctly formatted paragraph.' }
    ],
    useCases: [
      'Fixing an email drafted accidentally with caps lock on.',
      'Formatting user-submitted content before publishing.',
      'Cleaning up scraped data from the web.'
    ],
    relatedTools: [
      { href: '/tools/case-converter/title-case-converter', name: 'Title Case Converter', description: 'Capitalize major words.' }
    ]
  },

  // --- IMAGE TO PDF ---
  {
    path: 'app/tools/image-to-pdf/jpeg-to-pdf-converter',
    title: 'JPEG to PDF Converter – Convert JPEG to PDF Online',
    description: 'Quickly convert multiple JPEG images into one PDF document. Fast, free, and secure online JPEG to PDF converter tool.',
    h1: 'JPEG to PDF Converter',
    p1: 'Compile your high-quality JPEG photos into a clean PDF document for easy sharing and printing. No file uploads to external servers.',
    schemaCategory: 'WebApplication',
    componentImport: `import { ImageToPdf } from '@/components/tools/ImageToPdf';`,
    componentRender: `<ImageToPdf />`,
    steps: [
      { step: 'Upload JPEGs', description: 'Select the JPEG files you want to combine.' },
      { step: 'Rearrange', description: 'Drag the files to set the correct page order.' },
      { step: 'Save PDF', description: 'Download your fully generated PDF document.' }
    ],
    useCases: [
      'Creating a PDF slideshow from a folder of JPEG photographs.',
      'Bundling scanned JPEG documents into a single legal file.',
      'Preparing high-quality architectural blueprints for email.'
    ],
    relatedTools: [
      { href: '/tools/image-to-pdf/jpg-to-pdf-converter', name: 'JPG to PDF', description: 'Convert standard JPGs.' }
    ]
  },

  // --- PDF MERGE SPLIT ---
  {
    path: 'app/tools/pdf-merge-split/combine-pdf',
    title: 'Combine PDF Online – Merge PDF Files Together Free',
    description: 'Combine multiple PDF files into one easily online. Secure, fast, and free PDF combiner with no page limits.',
    h1: 'Combine PDF Online',
    p1: 'Put multiple PDF documents together in a specific order. Our tool processes your files locally to ensure maximum privacy.',
    schemaCategory: 'WebApplication',
    componentImport: `import { PdfMergeSplit } from '@/components/tools/PdfMergeSplit';`,
    componentRender: `<PdfMergeSplit />`,
    steps: [
      { step: 'Select Files', description: 'Upload all the PDFs you need to combine.' },
      { step: 'Drag and Drop', description: 'Reorder the files exactly as they should appear.' },
      { step: 'Combine', description: 'Click merge to combine them into one seamless document.' }
    ],
    useCases: [
      'Combining multiple homework assignments into a single submission.',
      'Merging financial statements for tax preparation.',
      'Assembling an ebook from individually exported chapters.'
    ],
    relatedTools: [
      { href: '/tools/pdf-merge-split/split-pdf', name: 'Split PDF', description: 'Separate pages from a PDF.' }
    ]
  },

  // --- PERCENTAGE CALCULATOR ---
  {
    path: 'app/tools/percentage-calculator/margin-calculator',
    title: 'Margin Calculator – Calculate Profit Margins Online',
    description: 'Calculate gross profit margin, markup, and revenue instantly. Free online margin calculator for business owners and retailers.',
    h1: 'Profit Margin Calculator',
    p1: 'Determine the profitability of your products. Enter your cost and revenue to instantly calculate your exact gross margin percentage.',
    schemaCategory: 'WebApplication',
    componentImport: `import { PercentageCalculator } from '@/components/tools/PercentageCalculator';`,
    componentRender: `<PercentageCalculator />`,
    steps: [
      { step: 'Select Mode', description: 'Choose the percentage change or fraction mode based on your math.' },
      { step: 'Input Costs', description: 'Enter the cost of goods and total revenue.' },
      { step: 'View Margin', description: 'Instantly view your calculated profit margin.' }
    ],
    useCases: [
      'Calculating the necessary markup for a new retail product line.',
      'Checking the profitability of an ongoing ad campaign.',
      'Setting accurate wholesale prices for distributors.'
    ],
    relatedTools: [
      { href: '/tools/percentage-calculator/discount-calculator', name: 'Discount Calculator', description: 'Calculate sale prices.' }
    ]
  },

  // --- TIMESTAMP CONVERTER ---
  {
    path: 'app/tools/timestamp-converter/epoch-to-date',
    title: 'Epoch to Date Converter – Convert Timestamps',
    description: 'Convert Unix epoch timestamps to human readable dates instantly. Free online developer tool for time debugging.',
    h1: 'Epoch to Date Converter',
    p1: 'Translate 10-digit (seconds) or 13-digit (milliseconds) epoch timestamps into readable local time and UTC formats.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { TimestampConverter } from '@/components/tools/TimestampConverter';`,
    componentRender: `<TimestampConverter />`,
    steps: [
      { step: 'Paste Timestamp', description: 'Input the epoch integer.' },
      { step: 'Process', description: 'The tool automatically detects if it is in seconds or milliseconds.' },
      { step: 'View Date', description: 'Copy the parsed standard date format.' }
    ],
    useCases: [
      'Debugging server logs that only record time in epoch seconds.',
      'Verifying the "exp" (expiration) claim in a decoded JWT token.',
      'Converting API response times into user-friendly UI strings.'
    ],
    relatedTools: [
      { href: '/tools/timestamp-converter', name: 'Timestamp Converter', description: 'General time tools.' }
    ]
  },

  // --- TEXT REPEATER ---
  {
    path: 'app/tools/text-repeater/string-repeater',
    title: 'String Repeater – Multiply Text Strings Online',
    description: 'Repeat or multiply any text string up to 10,000 times online. Free string multiplier tool for developers and copywriters.',
    h1: 'String Repeater',
    p1: 'Need a massive block of repeating text? Multiply any string instantly. Perfect for generating dummy data or testing limits.',
    schemaCategory: 'WebApplication',
    componentImport: `import { TextRepeater } from '@/components/tools/TextRepeater';`,
    componentRender: `<TextRepeater />`,
    steps: [
      { step: 'Input String', description: 'Enter the specific string or character to repeat.' },
      { step: 'Set Multiplier', description: 'Choose the exact number of repetitions.' },
      { step: 'Generate', description: 'Copy the resulting massive string.' }
    ],
    useCases: [
      'Generating long strings to test database column character limits.',
      'Creating padding for cryptographic data testing.',
      'Multiplying a specific HTML tag to stress-test a browser.'
    ],
    relatedTools: [
      { href: '/tools/text-repeater/word-repeater', name: 'Word Repeater', description: 'Repeat words.' }
    ]
  },

  // --- PASSWORD GENERATOR ---
  {
    path: 'app/tools/password-generator/wifi-password-generator',
    title: 'WiFi Password Generator – Create Secure Network Keys',
    description: 'Generate highly secure, random WiFi passwords (WPA2/WPA3). Protect your home or business network from hackers.',
    h1: 'WiFi Password Generator',
    p1: 'Create a cryptographically strong, random password for your router. Keep your wireless network completely secure.',
    schemaCategory: 'WebApplication',
    componentImport: `import { PasswordGenerator } from '@/components/tools/PasswordGenerator';`,
    componentRender: `<PasswordGenerator />`,
    steps: [
      { step: 'Set Length', description: 'Choose a long length (we recommend 16+ characters).' },
      { step: 'Select Characters', description: 'Ensure uppercase, lowercase, numbers, and symbols are checked.' },
      { step: 'Copy Key', description: 'Copy the generated password to configure your router.' }
    ],
    useCases: [
      'Setting up a secure WPA3 password for a new home router.',
      'Creating a temporary guest network password.',
      'Updating a compromised corporate WiFi password.'
    ],
    relatedTools: [
      { href: '/tools/password-generator/strong-password-generator', name: 'Strong Password Generator', description: 'Create account passwords.' }
    ]
  },
  {
    path: 'app/tools/password-generator/secure-password-maker',
    title: 'Secure Password Maker – Generate Safe Passwords',
    description: 'Create uncrackable, safe passwords instantly. Free online secure password maker for all your online accounts.',
    h1: 'Secure Password Maker',
    p1: 'Generate a password that is impossible for hackers to guess. Customize the length and character sets to meet any website\'s requirements.',
    schemaCategory: 'WebApplication',
    componentImport: `import { PasswordGenerator } from '@/components/tools/PasswordGenerator';`,
    componentRender: `<PasswordGenerator />`,
    steps: [
      { step: 'Adjust Complexity', description: 'Enable symbols and numbers.' },
      { step: 'Generate', description: 'Click the button to create a new secure password.' },
      { step: 'Save securely', description: 'Copy it directly into your password manager.' }
    ],
    useCases: [
      'Creating a master password for a password management app.',
      'Generating a secure credential for a sensitive banking login.',
      'Updating weak, reused passwords across older accounts.'
    ],
    relatedTools: [
      { href: '/tools/password-generator/random-pin-generator', name: 'Random PIN Generator', description: 'Generate numeric pins.' }
    ]
  },
  
  // --- UNIT CONVERTER ---
  {
    path: 'app/tools/unit-converter/temperature-converter',
    title: 'Temperature Converter – Celsius, Fahrenheit, Kelvin',
    description: 'Instantly convert temperatures between Celsius, Fahrenheit, and Kelvin. Free online temperature conversion calculator.',
    h1: 'Temperature Converter',
    p1: 'Quickly translate weather forecasts and cooking temperatures between global standard units.',
    schemaCategory: 'WebApplication',
    componentImport: `import { UnitConverter } from '@/components/tools/UnitConverter';`,
    componentRender: `<UnitConverter />`,
    steps: [
      { step: 'Select Mode', description: 'Change the conversion category to temperature.' },
      { step: 'Input Degrees', description: 'Type in your starting temperature.' },
      { step: 'View Output', description: 'Read the exact converted temperature instantly.' }
    ],
    useCases: [
      'Converting an oven baking temperature from Fahrenheit to Celsius.',
      'Understanding a foreign weather forecast.',
      'Calculating scientific lab temperatures into Kelvin.'
    ],
    relatedTools: [
      { href: '/tools/unit-converter/length-converter', name: 'Length Converter', description: 'Convert distance and length.' }
    ]
  },

  // --- QR CODE GENERATOR ---
  {
    path: 'app/tools/qr-code-generator/email-qr-code-generator',
    title: 'Email QR Code Generator – Create Scannable Emails',
    description: 'Generate a QR code that instantly drafts an email when scanned. Prefill the recipient, subject, and body online.',
    h1: 'Email QR Code Generator',
    p1: 'Make it incredibly easy for customers to contact you. Create a QR code that automatically opens their email app with your address pre-filled.',
    schemaCategory: 'WebApplication',
    componentImport: `import { QrCodeGenerator } from '@/components/tools/QrCodeGenerator';`,
    componentRender: `<QrCodeGenerator />`,
    steps: [
      { step: 'Format Address', description: 'Format the text as: mailto:your@email.com?subject=Hello' },
      { step: 'Customize', description: 'Change the color of the QR code.' },
      { step: 'Download', description: 'Save the image and place it on your marketing materials.' }
    ],
    useCases: [
      'Putting a contact QR code on a business card.',
      'Adding an easy support email link to a printed manual.',
      'Allowing event attendees to quickly email RSVP confirmations.'
    ],
    relatedTools: [
      { href: '/tools/qr-code-generator/url-qr-code-generator', name: 'URL QR Code Generator', description: 'Create link QR codes.' }
    ]
  },
  {
    path: 'app/tools/qr-code-generator/vcard-qr-code-generator',
    title: 'vCard QR Code Generator – Share Contact Info Instantly',
    description: 'Create a vCard QR code to share your contact information. Scanners can instantly save your name, phone, and email to their contacts.',
    h1: 'vCard QR Code Generator',
    p1: 'Modernize your networking. Generate a QR code that instantly adds your comprehensive contact details directly into someone\'s phonebook.',
    schemaCategory: 'WebApplication',
    componentImport: `import { QrCodeGenerator } from '@/components/tools/QrCodeGenerator';`,
    componentRender: `<QrCodeGenerator />`,
    steps: [
      { step: 'Create vCard String', description: 'Format your details into standard vCard format.' },
      { step: 'Paste Text', description: 'Input the string into the generator.' },
      { step: 'Export Code', description: 'Download the high-resolution QR image.' }
    ],
    useCases: [
      'Printing modern, digital-first business cards.',
      'Displaying a contact QR code at a conference booth.',
      'Adding contact details to real estate yard signs.'
    ],
    relatedTools: [
      { href: '/tools/qr-code-generator/wifi-qr-code-generator', name: 'WiFi QR Code Generator', description: 'Share network access.' }
    ]
  },

  // --- LOREM IPSUM GENERATOR ---
  {
    path: 'app/tools/lorem-ipsum-generator/random-text-generator',
    title: 'Random Text Generator – Generate Gibberish Placeholders',
    description: 'Generate paragraphs of random dummy text for your web designs. Fast, free, and customizable random text generator.',
    h1: 'Random Text Generator',
    p1: 'Fill your empty layout containers with realistic-looking random text. A vital utility for UI/UX designers and frontend developers.',
    schemaCategory: 'WebApplication',
    componentImport: `import { LoremIpsumGenerator } from '@/components/tools/LoremIpsumGenerator';`,
    componentRender: `<LoremIpsumGenerator />`,
    steps: [
      { step: 'Select Type', description: 'Choose between words, sentences, or full paragraphs.' },
      { step: 'Set Number', description: 'Define how much text you need.' },
      { step: 'Copy to Clipboard', description: 'Instantly grab the placeholder text.' }
    ],
    useCases: [
      'Testing text-overflow handling in a CSS layout.',
      'Populating a mock database with sample user biographies.',
      'Designing magazine layouts in Adobe InDesign.'
    ],
    relatedTools: [
      { href: '/tools/lorem-ipsum-generator/dummy-text-generator', name: 'Dummy Text Generator', description: 'Generate Lorem Ipsum.' }
    ]
  },
  
  // --- IMAGE COMPRESSOR ---
  {
    path: 'app/tools/image-compressor/compress-jpeg-online',
    title: 'Compress JPEG Online – Reduce JPEG File Size Free',
    description: 'Compress JPEG images online without losing quality. Free browser-based JPEG compressor to reduce image file size securely.',
    h1: 'Compress JPEG Online',
    p1: 'Shrink your large JPEG files down to a fraction of their original size. Maintain visual fidelity while drastically improving load times.',
    schemaCategory: 'ImageEditorApplication',
    componentImport: `import { ImageCompressor } from '@/components/tools/ImageCompressor';`,
    componentRender: `<ImageCompressor />`,
    steps: [
      { step: 'Upload JPEG', description: 'Drag and drop your JPEG photo.' },
      { step: 'Auto-Compress', description: 'The tool intelligently balances quality and file size.' },
      { step: 'Download File', description: 'Save the significantly smaller JPEG image.' }
    ],
    useCases: [
      'Compressing heavy JPEG photos from a DSLR camera.',
      'Optimizing images for faster loading on a WordPress blog.',
      'Meeting email attachment size limits.'
    ],
    relatedTools: [
      { href: '/tools/image-compressor/compress-image-to-200kb', name: 'Compress Image to 200KB', description: 'Set a strict size limit.' }
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
    "  title: '" + page.title.replace(/'/g, "\'") + "',",
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
    "        tools={[" + page.relatedTools.map(r => "{ href: '" + r.href + "', name: '" + r.name.replace(/'/g, "\'") + "', description: \"" + r.description.replace(/"/g, '\\"') + "\" }").join(', ') + "]}",
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
