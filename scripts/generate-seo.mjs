import fs from 'fs';
import path from 'path';

const PAGES = [
  // --- IMAGE COMPRESSOR PAGES ---
  {
    path: 'app/tools/image-compressor/compress-image-to-50kb',
    title: 'Compress Image to 50KB Online Free – Reduce Photo Size',
    description: 'Compress JPG, PNG, or WebP images to exactly 50KB or less without losing quality. 100% free, private, client-side browser processing.',
    h1: 'Compress Image to 50KB Online',
    p1: 'Upload your photo to instantly reduce its file size to 50KB or below. Perfect for government forms, admission portals, and email attachments.',
    schemaCategory: 'ImageEditorApplication',
    componentImport: `import { ImageCompressor } from '@/components/tools/ImageCompressor';`,
    componentRender: `<ImageCompressor targetSize="50kb" />`,
    steps: [
      { step: 'Upload Image', description: 'Drag and drop your JPEG, PNG, or WebP file into the compressor.' },
      { step: 'Auto Compress', description: 'The tool automatically adjusts the quality to hit the 50KB target.' },
      { step: 'Download File', description: 'Save the optimized image directly to your device.' }
    ],
    useCases: [
      'Uploading photos to government portals or university admission forms that require a strict 50KB limit.',
      'Reducing email attachment sizes to send multiple images at once.',
      'Optimizing images for faster website loading speeds.'
    ],
    relatedTools: [
      { href: '/tools/image-compressor/compress-image-to-100kb', name: 'Compress Image to 100KB', description: 'Reduce image size to 100KB online.' },
      { href: '/tools/image-converter', name: 'Image Converter', description: 'Convert images to JPG, PNG, or WebP format.' },
      { href: '/tools/image-resizer', name: 'Image Resizer', description: 'Resize images with custom dimensions.' }
    ]
  },
  {
    path: 'app/tools/image-compressor/compress-jpeg-to-100kb',
    title: 'Compress JPEG to 100KB Online – Free JPG Size Reducer',
    description: 'Reduce JPEG file size to 100KB or less online. Fast, secure, and private in-browser compression without losing visual quality.',
    h1: 'Compress JPEG to 100KB Online',
    p1: 'Easily compress your JPEG and JPG photos to 100KB for web uploads and form submissions. No server upload required.',
    schemaCategory: 'ImageEditorApplication',
    componentImport: `import { ImageCompressor } from '@/components/tools/ImageCompressor';`,
    componentRender: `<ImageCompressor targetSize="100kb" />`,
    steps: [
      { step: 'Select JPEG', description: 'Choose the JPG/JPEG file you want to compress.' },
      { step: 'Reduce Size', description: 'Our algorithm finds the best quality setting to reach 100KB.' },
      { step: 'Save Photo', description: 'Download the compressed JPEG file.' }
    ],
    useCases: [
      'Meeting strict 100KB file size limits for online job applications.',
      'Compressing scanned documents saved as JPEGs for easy sharing.',
      'Saving storage space on your phone or computer.'
    ],
    relatedTools: [
      { href: '/tools/image-compressor', name: 'Image Compressor', description: 'General image compression tool.' },
      { href: '/tools/image-resizer', name: 'Image Resizer', description: 'Change the dimensions of your JPEG.' }
    ]
  },

  // --- IMAGE CONVERTER PAGES ---
  {
    path: 'app/tools/image-converter/png-to-jpg-converter',
    title: 'PNG to JPG Converter – Convert PNG to JPEG Online Free',
    description: 'Convert PNG images to JPG/JPEG format instantly in your browser. Batch convert multiple files with 100% privacy and no server uploads.',
    h1: 'PNG to JPG Converter Online',
    p1: 'Quickly convert transparent or large PNG images to the highly-compatible and lightweight JPG format. All processing happens locally on your device.',
    schemaCategory: 'ImageEditorApplication',
    componentImport: `import { ImageConverter } from '@/components/tools/ImageConverter';`,
    componentRender: `<ImageConverter targetFormat="image/jpeg" />`,
    steps: [
      { step: 'Upload PNG Files', description: 'Drag and drop one or more PNG files into the converter area.' },
      { step: 'Adjust Quality', description: 'Set your desired JPG output quality using the slider.' },
      { step: 'Convert and Download', description: 'Click convert to instantly generate and save your new JPG files.' }
    ],
    useCases: [
      'Converting screenshots (usually PNG) to JPG to save storage space.',
      'Making images compatible with systems that do not accept PNG files.',
      'Removing transparency from logos or graphics by converting to a solid background JPG.'
    ],
    relatedTools: [
      { href: '/tools/image-converter/jpg-to-png-converter', name: 'JPG to PNG Converter', description: 'Convert JPEG images back to PNG.' },
      { href: '/tools/image-converter/webp-to-jpg-converter', name: 'WebP to JPG Converter', description: 'Convert modern WebP images to standard JPG.' }
    ]
  },
  {
    path: 'app/tools/image-converter/jpg-to-png-converter',
    title: 'JPG to PNG Converter – Convert JPEG to PNG Online Free',
    description: 'Convert JPG/JPEG images to lossless PNG format in your browser. Fast, private, and secure image conversion with no data sent to servers.',
    h1: 'JPG to PNG Converter Online',
    p1: 'Transform your compressed JPG photos into the lossless PNG format. Perfect for when you need a standardized image format for editing.',
    schemaCategory: 'ImageEditorApplication',
    componentImport: `import { ImageConverter } from '@/components/tools/ImageConverter';`,
    componentRender: `<ImageConverter targetFormat="image/png" />`,
    steps: [
      { step: 'Select JPG Files', description: 'Upload the JPEG images you want to convert.' },
      { step: 'Batch Convert', description: 'The tool automatically prepares them for lossless PNG conversion.' },
      { step: 'Download PNG', description: 'Save the converted PNG files to your local drive.' }
    ],
    useCases: [
      'Preparing images for graphic design software that prefers PNG.',
      'Standardizing all images in a project to the PNG format.',
      'Converting photos before running them through background removal tools.'
    ],
    relatedTools: [
      { href: '/tools/image-converter/png-to-jpg-converter', name: 'PNG to JPG Converter', description: 'Convert PNG images to JPG.' },
      { href: '/tools/image-compressor', name: 'Image Compressor', description: 'Reduce the file size of your converted PNGs.' }
    ]
  },
  {
    path: 'app/tools/image-converter/webp-to-jpg-converter',
    title: 'WebP to JPG Converter – Convert WebP to JPEG Online',
    description: 'Easily convert WebP images downloaded from websites into standard JPG/JPEG format. Free, fast, and secure client-side browser tool.',
    h1: 'WebP to JPG Converter',
    p1: 'Convert modern WebP image files back to the universally supported JPG format. No signup and no server uploads required.',
    schemaCategory: 'ImageEditorApplication',
    componentImport: `import { ImageConverter } from '@/components/tools/ImageConverter';`,
    componentRender: `<ImageConverter targetFormat="image/jpeg" />`,
    steps: [
      { step: 'Upload WebP Image', description: 'Drop the WebP file you downloaded into the dropzone.' },
      { step: 'Set JPG Quality', description: 'Choose how much compression you want for the output JPG.' },
      { step: 'Convert to JPG', description: 'Instantly download the file in standard JPEG format.' }
    ],
    useCases: [
      'Converting WebP images downloaded from Google Chrome to use in older software.',
      'Making web images compatible with older mobile devices or email clients.',
      'Converting website assets back into editable formats.'
    ],
    relatedTools: [
      { href: '/tools/image-converter/png-to-jpg-converter', name: 'PNG to JPG Converter', description: 'Convert PNG images to JPG.' }
    ]
  },

  // --- JSON PAGES ---
  {
    path: 'app/tools/json-formatter/json-minifier',
    title: 'JSON Minifier & Compressor – Minify JSON Online Free',
    description: 'Compress and minify your JSON data online. Remove all unnecessary whitespace, line breaks, and comments instantly in your browser.',
    h1: 'JSON Minifier Online',
    p1: 'Reduce the file size of your JSON payloads by removing all extra spaces and indentation. Perfect for preparing data for production APIs.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { JsonFormatter } from '@/components/tools/JsonFormatter';`,
    componentRender: `<JsonFormatter />`,
    steps: [
      { step: 'Paste JSON', description: 'Paste your formatted JSON or upload a .json file.' },
      { step: 'Click Minify', description: 'Hit the Minify button to compress the data into a single line.' },
      { step: 'Copy Result', description: 'Copy the minified JSON string to your clipboard.' }
    ],
    useCases: [
      'Optimizing API responses to reduce network payload size.',
      'Preparing configuration files for production deployment.',
      'Minifying large data dumps to save storage space.'
    ],
    relatedTools: [
      { href: '/tools/json-formatter', name: 'JSON Formatter', description: 'Format and beautify your minified JSON.' },
      { href: '/tools/javascript-formatter', name: 'JavaScript Formatter', description: 'Format or minify JS code.' }
    ]
  },
  {
    path: 'app/tools/json-formatter/json-validator',
    title: 'JSON Validator Online – Check JSON Syntax & Errors',
    description: 'Free online JSON validator. Check your JSON for syntax errors, missing commas, and formatting issues instantly in your browser.',
    h1: 'JSON Validator & Error Checker',
    p1: 'Quickly validate your JSON data. Our tool catches syntax errors and pinpoints the exact line and column where the issue occurred.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { JsonFormatter } from '@/components/tools/JsonFormatter';`,
    componentRender: `<JsonFormatter />`,
    steps: [
      { step: 'Input JSON', description: 'Paste the JSON data you want to validate.' },
      { step: 'Check for Errors', description: 'The tool automatically parses the JSON. If there is an error, a red alert will appear.' },
      { step: 'Fix Syntax', description: 'Use the line and column number provided in the error message to locate and fix the issue.' }
    ],
    useCases: [
      'Debugging "Unexpected token" errors in JavaScript applications.',
      'Validating API requests before sending them via Postman or cURL.',
      'Checking manually written configuration files for typos.'
    ],
    relatedTools: [
      { href: '/tools/json-formatter', name: 'JSON Formatter', description: 'Format valid JSON for easier reading.' }
    ]
  },

  // --- TEXT PAGES ---
  {
    path: 'app/tools/case-converter/lowercase-converter',
    title: 'Lowercase Converter – Convert Text to Lowercase Online',
    description: 'Easily convert all your text to lowercase letters. Free online text case converter that works instantly in your browser.',
    h1: 'Lowercase Text Converter',
    p1: 'Transform any capitalized text, sentences, or paragraphs into completely lowercase letters with a single click.',
    schemaCategory: 'WebApplication',
    componentImport: `import { CaseConverter } from '@/components/tools/CaseConverter';`,
    componentRender: `<CaseConverter />`,
    steps: [
      { step: 'Paste Text', description: 'Type or paste the text you want to convert.' },
      { step: 'Select Lowercase', description: 'Click the "lowercase" button to convert all letters.' },
      { step: 'Copy Text', description: 'Copy the converted text back to your clipboard.' }
    ],
    useCases: [
      'Normalizing text data for database entries or comparisons.',
      'Converting ALL CAPS messages into readable lowercase.',
      'Formatting tags or keywords for SEO purposes.'
    ],
    relatedTools: [
      { href: '/tools/case-converter', name: 'Case Converter', description: 'Convert to uppercase, title case, and more.' },
      { href: '/tools/word-counter', name: 'Word Counter', description: 'Count words and characters in your text.' }
    ]
  },
  {
    path: 'app/tools/case-converter/uppercase-converter',
    title: 'Uppercase Converter – Capitalize All Letters Online',
    description: 'Convert your text to ALL CAPS instantly. Free online uppercase text converter tool.',
    h1: 'Uppercase Text Converter',
    p1: 'Quickly change all letters in your text to uppercase. Useful for headlines, SQL queries, or emphasis.',
    schemaCategory: 'WebApplication',
    componentImport: `import { CaseConverter } from '@/components/tools/CaseConverter';`,
    componentRender: `<CaseConverter />`,
    steps: [
      { step: 'Paste Text', description: 'Type or paste your text.' },
      { step: 'Select Uppercase', description: 'Click the "UPPERCASE" button.' },
      { step: 'Copy Result', description: 'Copy the capitalized text.' }
    ],
    useCases: [
      'Formatting SQL keywords for better readability.',
      'Creating attention-grabbing headlines or warnings.',
      'Standardizing acronyms and abbreviations.'
    ],
    relatedTools: [
      { href: '/tools/case-converter', name: 'Case Converter', description: 'Convert to lowercase, title case, and more.' }
    ]
  },

  // --- PASSWORDS ---
  {
    path: 'app/tools/password-generator/strong-password-generator',
    title: 'Strong Password Generator – Create Secure Passwords Online',
    description: 'Generate highly secure, random strong passwords with symbols, numbers, and mixed casing. Your passwords are never saved or sent to a server.',
    h1: 'Strong Password Generator',
    p1: 'Create uncrackable, complex passwords to secure your online accounts. Our tool generates passwords locally on your device for maximum security.',
    schemaCategory: 'WebApplication',
    componentImport: `import { PasswordGenerator } from '@/components/tools/PasswordGenerator';`,
    componentRender: `<PasswordGenerator />`,
    steps: [
      { step: 'Set Length', description: 'Choose a long password length (we recommend 16+ characters).' },
      { step: 'Include Symbols', description: 'Ensure uppercase, lowercase, numbers, and symbols are all checked.' },
      { step: 'Copy Password', description: 'Click generate and copy the password directly to your password manager.' }
    ],
    useCases: [
      'Creating strong master passwords for password managers like Bitwarden or 1Password.',
      'Securing sensitive banking or cryptocurrency exchange accounts.',
      'Generating unique passwords for database root users.'
    ],
    relatedTools: [
      { href: '/tools/password-generator', name: 'Password Generator', description: 'Customizable random password generator.' },
      { href: '/tools/uuid-generator', name: 'UUID Generator', description: 'Generate random UUID strings.' }
    ]
  },
  {
    path: 'app/tools/password-generator/random-pin-generator',
    title: 'Random PIN Generator – Generate 4-Digit or 6-Digit PINs',
    description: 'Generate secure, random numeric PIN codes. Create 4-digit, 6-digit, or 8-digit PINs instantly in your browser.',
    h1: 'Random PIN Generator',
    p1: 'Need a random numeric code? Generate secure PINs for devices, temporary locks, or verification codes instantly.',
    schemaCategory: 'WebApplication',
    componentImport: `import { PasswordGenerator } from '@/components/tools/PasswordGenerator';`,
    componentRender: `<PasswordGenerator />`,
    steps: [
      { step: 'Select Numbers Only', description: 'Uncheck letters and symbols so only numbers remain.' },
      { step: 'Set PIN Length', description: 'Set the length to 4, 6, or your desired number of digits.' },
      { step: 'Generate PIN', description: 'Click generate to get your random numeric sequence.' }
    ],
    useCases: [
      'Generating a secure 4-digit passcode for a physical padlock or smartphone.',
      'Creating a random 6-digit 2FA backup code.',
      'Generating random numeric IDs for testing purposes.'
    ],
    relatedTools: [
      { href: '/tools/password-generator', name: 'Password Generator', description: 'Generate full alphanumeric passwords.' }
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
    "  description: '" + page.description.replace(/'/g, "\\'") + "',",
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
    "        <p className=\"mt-3 max-w-2xl text-[var(--text-secondary)]\">" + page.p1 + "</p>",
    "      </div>",
    "      " + page.componentRender,
    "      <ToolInfoSection",
    "        howToSteps={[" + page.steps.map(s => "{ step: '" + s.step.replace(/'/g, "\\'") + "', description: '" + s.description.replace(/'/g, "\\'") + "' }").join(', ') + "]}",
    "        useCases={[" + page.useCases.map(u => "'" + u.replace(/'/g, "\\'") + "'").join(', ') + "]}",
    "        privacyNote=\"All processing is executed locally using your browser. Your data is never sent to a server.\"",
    "      />",
    "      <RelatedTools",
    "        tools={[" + page.relatedTools.map(r => "{ href: '" + r.href + "', name: '" + r.name + "', description: '" + r.description.replace(/'/g, "\\'") + "' }").join(', ') + "]}",
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
