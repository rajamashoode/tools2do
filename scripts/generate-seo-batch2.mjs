import fs from 'fs';
import path from 'path';

const PAGES = [
  // --- BASE 64 PAGES ---
  {
    path: 'app/tools/base64-encoder/base64-encode-string',
    title: 'Base64 Encoder – Encode Text to Base64 Online',
    description: 'Free online tool to encode any text or string to Base64 format instantly. Secure, private, and processes entirely in your browser.',
    h1: 'Base64 Encoder',
    p1: 'Convert standard text or code strings into Base64 encoded format. Essential for embedding data or preparing strings for APIs.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { Base64Tool } from '@/components/tools/Base64Tool';`,
    componentRender: `<Base64Tool />`,
    steps: [
      { step: 'Paste Text', description: 'Enter the plain text or string you want to encode.' },
      { step: 'Select Encode', description: 'Ensure the tool is set to encode mode.' },
      { step: 'Copy Base64', description: 'Instantly copy the resulting Base64 output.' }
    ],
    useCases: [
      'Encoding credentials for basic HTTP authentication.',
      'Converting text strings to safely embed them in URLs.',
      'Encoding JSON payloads for JWT tokens.'
    ],
    relatedTools: [
      { href: '/tools/base64-encoder/base64-decode-string', name: 'Base64 Decoder', description: 'Decode Base64 back to text.' },
      { href: '/tools/url-encoder', name: 'URL Encoder', description: 'Encode text for URLs.' }
    ]
  },
  {
    path: 'app/tools/base64-encoder/base64-decode-string',
    title: 'Base64 Decoder – Decode Base64 to Text Online',
    description: 'Decode Base64 strings back into readable plain text. Fast, free, and secure online Base64 decoding tool.',
    h1: 'Base64 Decoder',
    p1: 'Easily convert Base64 encoded data back into its original text format. All processing is done securely in your browser.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { Base64Tool } from '@/components/tools/Base64Tool';`,
    componentRender: `<Base64Tool />`,
    steps: [
      { step: 'Paste Base64', description: 'Input your Base64 encoded string into the text area.' },
      { step: 'Select Decode', description: 'Ensure the tool is set to decode mode.' },
      { step: 'Read Text', description: 'The original plain text will instantly appear for you to copy.' }
    ],
    useCases: [
      'Decoding hidden messages or encoded URLs.',
      'Extracting plain text from email headers.',
      'Debugging encoded API responses.'
    ],
    relatedTools: [
      { href: '/tools/base64-encoder/base64-encode-string', name: 'Base64 Encoder', description: 'Encode text into Base64.' }
    ]
  },

  // --- WORD COUNTER PAGES ---
  {
    path: 'app/tools/word-counter/character-counter',
    title: 'Character Counter – Count Characters Online Free',
    description: 'Easily count the number of characters in your text with or without spaces. Perfect for tweets, meta descriptions, and essays.',
    h1: 'Character Counter Online',
    p1: 'Quickly find out the exact character count of your text. Useful for meeting strict character limits on social media or forms.',
    schemaCategory: 'WebApplication',
    componentImport: `import { WordCounter } from '@/components/tools/WordCounter';`,
    componentRender: `<WordCounter />`,
    steps: [
      { step: 'Type or Paste Text', description: 'Input your text into the box.' },
      { step: 'View Character Count', description: 'The tool instantly updates the character count, including and excluding spaces.' },
      { step: 'Edit Live', description: 'Continue typing to see the count update in real time.' }
    ],
    useCases: [
      'Ensuring tweets stay under the 280-character limit.',
      'Writing SEO meta titles (under 60 characters) and descriptions (under 160 characters).',
      'Filling out application forms with strict character constraints.'
    ],
    relatedTools: [
      { href: '/tools/word-counter', name: 'Word Counter', description: 'Get detailed text statistics including word count.' },
      { href: '/tools/case-converter', name: 'Case Converter', description: 'Format your text to proper casing.' }
    ]
  },
  {
    path: 'app/tools/word-counter/sentence-counter',
    title: 'Sentence Counter – Count Sentences in Text Online',
    description: 'Free online tool to count sentences, words, and paragraphs in your writing. Improve your text readability by tracking sentence length.',
    h1: 'Sentence Counter',
    p1: 'Find out exactly how many sentences are in your essay, article, or document. Helps in evaluating readability and pacing.',
    schemaCategory: 'WebApplication',
    componentImport: `import { WordCounter } from '@/components/tools/WordCounter';`,
    componentRender: `<WordCounter />`,
    steps: [
      { step: 'Paste Writing', description: 'Copy and paste your document into the input field.' },
      { step: 'Check Sentences', description: 'Look at the statistics panel to see your total sentence count.' },
      { step: 'Analyze Text', description: 'Use the count to determine if your sentences are too long on average.' }
    ],
    useCases: [
      'Checking academic essays for structural balance.',
      'Improving blog post readability by ensuring varied sentence lengths.',
      'Meeting specific sentence requirements for school assignments.'
    ],
    relatedTools: [
      { href: '/tools/word-counter/character-counter', name: 'Character Counter', description: 'Count characters with or without spaces.' }
    ]
  },

  // --- CASE CONVERTER PAGES ---
  {
    path: 'app/tools/case-converter/title-case-converter',
    title: 'Title Case Converter – Capitalize Titles Online',
    description: 'Convert your text to Title Case. Automatically capitalize the first letter of major words for essays, blog posts, and headlines.',
    h1: 'Title Case Converter',
    p1: 'Properly format your headlines, book titles, and article names. Our tool capitalizes major words while keeping minor words lowercase.',
    schemaCategory: 'WebApplication',
    componentImport: `import { CaseConverter } from '@/components/tools/CaseConverter';`,
    componentRender: `<CaseConverter />`,
    steps: [
      { step: 'Input Title', description: 'Paste your unformatted headline or title.' },
      { step: 'Select Title Case', description: 'Click the Title Case button.' },
      { step: 'Copy Result', description: 'Copy the correctly formatted title.' }
    ],
    useCases: [
      'Formatting blog post titles for publication.',
      'Capitalizing book titles or academic paper headers.',
      'Standardizing product names for an e-commerce store.'
    ],
    relatedTools: [
      { href: '/tools/case-converter/uppercase-converter', name: 'Uppercase Converter', description: 'Convert text to ALL CAPS.' },
      { href: '/tools/case-converter/camel-case-converter', name: 'Camel Case Converter', description: 'Convert text to camelCase for coding.' }
    ]
  },
  {
    path: 'app/tools/case-converter/camel-case-converter',
    title: 'Camel Case Converter – Convert Text to camelCase',
    description: 'Easily convert normal text, snake_case, or kebab-case strings into camelCase. Free developer tool for programming formatting.',
    h1: 'Camel Case Converter',
    p1: 'Transform variables, file names, or regular sentences into camelCase. A quick utility for developers formatting JavaScript or Java code.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { CaseConverter } from '@/components/tools/CaseConverter';`,
    componentRender: `<CaseConverter />`,
    steps: [
      { step: 'Paste Variables', description: 'Input your raw text or incorrectly formatted variables.' },
      { step: 'Convert', description: 'Select camelCase to instantly transform the text.' },
      { step: 'Copy Code', description: 'Copy your newly formatted camelCase strings.' }
    ],
    useCases: [
      'Converting JSON keys from snake_case to camelCase for JavaScript consumption.',
      'Formatting long variable names consistently.',
      'Generating clean, programming-friendly IDs from regular sentences.'
    ],
    relatedTools: [
      { href: '/tools/case-converter/snake-case-converter', name: 'Snake Case Converter', description: 'Convert text to snake_case.' }
    ]
  },
  {
    path: 'app/tools/case-converter/snake-case-converter',
    title: 'Snake Case Converter – Convert Text to snake_case',
    description: 'Convert text, spaces, and camelCase into snake_case. Free developer tool for Python, Ruby, and database naming conventions.',
    h1: 'Snake Case Converter',
    p1: 'Format your strings with underscores. Essential for writing Python variables, database column names, and file naming conventions.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { CaseConverter } from '@/components/tools/CaseConverter';`,
    componentRender: `<CaseConverter />`,
    steps: [
      { step: 'Input Text', description: 'Enter the text you need to format.' },
      { step: 'Apply snake_case', description: 'Click the snake_case option to replace spaces with underscores.' },
      { step: 'Copy Result', description: 'Copy the formatted string to your clipboard.' }
    ],
    useCases: [
      'Creating SQL database column names.',
      'Formatting variable names for Python or Ruby.',
      'Standardizing file names for web assets to avoid space-related URL issues.'
    ],
    relatedTools: [
      { href: '/tools/case-converter/camel-case-converter', name: 'Camel Case Converter', description: 'Convert text to camelCase.' }
    ]
  },

  // --- UUID GENERATOR ---
  {
    path: 'app/tools/uuid-generator/uuid-v4-generator',
    title: 'UUID v4 Generator – Generate Random UUIDs Online',
    description: 'Generate fully random, secure Version 4 UUIDs instantly. Create single or bulk UUIDs for your database or app development needs.',
    h1: 'UUID v4 Generator',
    p1: 'Instantly generate cryptographically secure Version 4 Universally Unique Identifiers (UUIDs). Generate thousands at once.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { UuidGenerator } from '@/components/tools/UuidGenerator';`,
    componentRender: `<UuidGenerator />`,
    steps: [
      { step: 'Select Version', description: 'Ensure the tool is set to generate v4 UUIDs.' },
      { step: 'Set Quantity', description: 'Choose how many UUIDs you need generated.' },
      { step: 'Generate', description: 'Click generate and copy the list of unique IDs.' }
    ],
    useCases: [
      'Creating unique primary keys for database records.',
      'Generating random session IDs for web applications.',
      'Creating unique file names to avoid upload collisions.'
    ],
    relatedTools: [
      { href: '/tools/password-generator', name: 'Password Generator', description: 'Generate random secure passwords.' }
    ]
  },
  {
    path: 'app/tools/uuid-generator/guid-generator',
    title: 'Bulk GUID Generator – Generate Multiple GUIDs Online',
    description: 'Generate multiple GUIDs (Globally Unique Identifiers) at once. Free, fast, and secure developer tool for C# and Windows environments.',
    h1: 'Bulk GUID Generator',
    p1: 'Quickly generate batches of GUIDs for your Microsoft/C# development projects. Copy them instantly with a single click.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { UuidGenerator } from '@/components/tools/UuidGenerator';`,
    componentRender: `<UuidGenerator />`,
    steps: [
      { step: 'Enter Amount', description: 'Specify the number of GUIDs you wish to generate (e.g., 100).' },
      { step: 'Generate Batch', description: 'Click the generate button to create your bulk list.' },
      { step: 'Copy All', description: 'Use the copy button to grab the entire list at once.' }
    ],
    useCases: [
      'Generating bulk IDs for testing a database seed script.',
      'Creating unique identifiers for Microsoft COM components.',
      'Populating sample data for C# application testing.'
    ],
    relatedTools: [
      { href: '/tools/uuid-generator/uuid-v4-generator', name: 'UUID v4 Generator', description: 'Generate standard UUIDs.' }
    ]
  },

  // --- URL ENCODER ---
  {
    path: 'app/tools/url-encoder/url-decoder',
    title: 'URL Decoder – Decode URL Encoded Strings Online',
    description: 'Easily decode percent-encoded URLs and strings back into readable text. Free, fast, and completely private browser-based tool.',
    h1: 'URL Decoder Online',
    p1: 'Translate unreadable percent-encoded URL strings (like %20 or %3F) back into normal text. Perfect for debugging complex web links.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { UrlEncoderDecoder } from '@/components/tools/UrlEncoderDecoder';`,
    componentRender: `<UrlEncoderDecoder />`,
    steps: [
      { step: 'Paste URL', description: 'Enter the encoded URL or query string.' },
      { step: 'Select Decode', description: 'Ensure the decode mode is active.' },
      { step: 'View Output', description: 'Instantly view and copy the human-readable decoded URL.' }
    ],
    useCases: [
      'Reading complex, messy tracking URLs to see where they lead.',
      'Debugging API query parameters that failed to parse correctly.',
      'Extracting plain text from deep-link URLs.'
    ],
    relatedTools: [
      { href: '/tools/url-encoder', name: 'URL Encoder', description: 'Encode normal text into a URL-safe format.' },
      { href: '/tools/base64-encoder', name: 'Base64 Encoder', description: 'Encode strings into Base64 format.' }
    ]
  },
  
  // --- ADDITIONAL IMAGE COMPRESSORS ---
  {
    path: 'app/tools/image-compressor/compress-image-to-200kb',
    title: 'Compress Image to 200KB Online – Free Photo Reducer',
    description: 'Compress JPG, PNG, or WebP images to 200KB or less without losing noticeable quality. Free, fast, private image compression.',
    h1: 'Compress Image to 200KB',
    p1: 'Reduce your photo file size to exactly 200KB. An ideal tool for optimizing website images and meeting medium-size upload limits.',
    schemaCategory: 'ImageEditorApplication',
    componentImport: `import { ImageCompressor } from '@/components/tools/ImageCompressor';`,
    componentRender: `<ImageCompressor targetSize="200kb" />`,
    steps: [
      { step: 'Select Image', description: 'Drop your high-resolution image into the box.' },
      { step: 'Process Automatically', description: 'The tool compresses the image while aiming for a maximum of 200KB.' },
      { step: 'Download', description: 'Save the highly optimized image.' }
    ],
    useCases: [
      'Compressing blog post featured images to improve SEO load times.',
      'Meeting 200KB upload limits on forums and profile picture systems.',
      'Saving storage space while keeping images looking sharp.'
    ],
    relatedTools: [
      { href: '/tools/image-compressor/compress-image-to-500kb', name: 'Compress Image to 500KB', description: 'Compress images to a larger 500KB limit.' }
    ]
  },
  {
    path: 'app/tools/image-compressor/compress-image-to-500kb',
    title: 'Compress Image to 500KB Online – High Quality Compressor',
    description: 'Reduce high-resolution photos to 500KB while maintaining excellent quality. Free browser-based image compressor tool.',
    h1: 'Compress Image to 500KB',
    p1: 'Compress large photos from your camera or phone down to 500KB. Perfect for sharing high-quality images without huge file sizes.',
    schemaCategory: 'ImageEditorApplication',
    componentImport: `import { ImageCompressor } from '@/components/tools/ImageCompressor';`,
    componentRender: `<ImageCompressor targetSize="500kb" />`,
    steps: [
      { step: 'Upload Large Photo', description: 'Select the large photo you wish to shrink.' },
      { step: 'Wait a Second', description: 'The tool quickly processes the image down to 500KB.' },
      { step: 'Save File', description: 'Download your optimized high-quality image.' }
    ],
    useCases: [
      'Preparing high-resolution portfolio images for the web.',
      'Compressing photos taken on an iPhone or DSLR before emailing them.',
      'Reducing PDF embedding sizes by shrinking the source images first.'
    ],
    relatedTools: [
      { href: '/tools/image-compressor/compress-image-to-100kb', name: 'Compress Image to 100KB', description: 'Compress images to a strict 100KB limit.' }
    ]
  },
  
  // --- ADDITIONAL IMAGE CONVERTERS ---
  {
    path: 'app/tools/image-converter/webp-to-png-converter',
    title: 'WebP to PNG Converter – Convert WebP to PNG Online Free',
    description: 'Convert downloaded WebP images back to transparent, lossless PNG format in your browser. Fast, private, and secure.',
    h1: 'WebP to PNG Converter',
    p1: 'WebP images are great for the web, but hard to edit. Convert WebP files back to highly-compatible PNG images instantly.',
    schemaCategory: 'ImageEditorApplication',
    componentImport: `import { ImageConverter } from '@/components/tools/ImageConverter';`,
    componentRender: `<ImageConverter targetFormat="image/png" />`,
    steps: [
      { step: 'Upload WebP', description: 'Drop the WebP file into the converter.' },
      { step: 'Convert', description: 'The tool automatically prepares a lossless PNG version.' },
      { step: 'Download', description: 'Save the PNG file for editing.' }
    ],
    useCases: [
      'Converting WebP logos downloaded from sites back to transparent PNGs.',
      'Preparing web images for use in Adobe Photoshop or Illustrator.',
      'Making images compatible with older CMS platforms.'
    ],
    relatedTools: [
      { href: '/tools/image-converter/webp-to-jpg-converter', name: 'WebP to JPG Converter', description: 'Convert WebP images to JPG.' }
    ]
  },
  {
    path: 'app/tools/image-converter/png-to-webp-converter',
    title: 'PNG to WebP Converter – Convert PNG to WebP Online',
    description: 'Convert transparent PNG images to next-gen WebP format. Reduce file size significantly while preserving transparency.',
    h1: 'PNG to WebP Converter',
    p1: 'Speed up your website by converting heavy PNG graphics into highly compressed WebP images. Supports transparency.',
    schemaCategory: 'ImageEditorApplication',
    componentImport: `import { ImageConverter } from '@/components/tools/ImageConverter';`,
    componentRender: `<ImageConverter targetFormat="image/webp" />`,
    steps: [
      { step: 'Select PNGs', description: 'Upload the PNG files you want to optimize.' },
      { step: 'Convert to WebP', description: 'The tool compresses the files into the WebP format.' },
      { step: 'Download', description: 'Save the optimized WebP images.' }
    ],
    useCases: [
      'Optimizing transparent graphics for faster website loading speeds.',
      'Creating smaller image assets for mobile applications.',
      'Improving Google PageSpeed Insights scores.'
    ],
    relatedTools: [
      { href: '/tools/image-compressor', name: 'Image Compressor', description: 'Further compress your images.' }
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
