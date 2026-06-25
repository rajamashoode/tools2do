import fs from 'fs';
import path from 'path';

const PAGES = [
  // --- COLOR CONVERTER ---
  {
    path: 'app/tools/color-converter/hex-to-rgb',
    title: 'HEX to RGB Converter – Convert Color Codes Online',
    description: 'Easily convert HEX color codes to RGB values online. Free developer tool for web designers and frontend engineers.',
    h1: 'HEX to RGB Converter',
    p1: 'Quickly translate web HEX colors (like #FFFFFF) into RGB format (255, 255, 255). Perfect for CSS formatting and UI design.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { ColorConverter } from '@/components/tools/ColorConverter';`,
    componentRender: `<ColorConverter />`,
    steps: [
      { step: 'Enter HEX', description: 'Type or paste your 6-digit HEX code.' },
      { step: 'View RGB', description: 'The tool instantly translates it to RGB.' },
      { step: 'Copy Value', description: 'Copy the CSS-ready RGB string to your clipboard.' }
    ],
    useCases: [
      'Converting brand color guidelines into usable CSS variables.',
      'Translating HEX values for graphic design software like Photoshop.',
      'Debugging inconsistent colors across stylesheets.'
    ],
    relatedTools: [
      { href: '/tools/color-converter/rgb-to-hex', name: 'RGB to HEX Converter', description: 'Convert RGB to HEX.' },
      { href: '/tools/color-palette-generator', name: 'Color Palette Generator', description: 'Generate harmonious color schemes.' }
    ]
  },
  {
    path: 'app/tools/color-converter/rgb-to-hex',
    title: 'RGB to HEX Converter – Convert RGB to Web Colors',
    description: 'Convert RGB values to web-safe HEX codes online. Fast, free, and accurate color converter for web development.',
    h1: 'RGB to HEX Converter',
    p1: 'Turn RGB color values into standard 6-digit HEX codes. Essential for HTML and CSS web development.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { ColorConverter } from '@/components/tools/ColorConverter';`,
    componentRender: `<ColorConverter />`,
    steps: [
      { step: 'Input RGB', description: 'Enter the Red, Green, and Blue values.' },
      { step: 'Convert', description: 'Instantly see the HEX equivalent.' },
      { step: 'Copy HEX', description: 'Click to copy the HEX string for your CSS.' }
    ],
    useCases: [
      'Translating digital screen RGB colors to web stylesheets.',
      'Extracting HEX codes from image color picker tools.',
      'Standardizing UI color tokens.'
    ],
    relatedTools: [
      { href: '/tools/color-converter/hex-to-rgb', name: 'HEX to RGB Converter', description: 'Convert HEX to RGB.' }
    ]
  },

  // --- COLOR PALETTE GENERATOR ---
  {
    path: 'app/tools/color-palette-generator/random-color-generator',
    title: 'Random Color Generator – Discover Unique Hex Codes',
    description: 'Generate beautiful random colors and palettes instantly. Copy HEX, RGB, and HSL values for your next design project.',
    h1: 'Random Color Generator',
    p1: 'Hit the spacebar to generate random colors. Get inspired for your next web design, logo, or graphic art project.',
    schemaCategory: 'DesignApplication',
    componentImport: `import { ColorPalettePicker } from '@/components/tools/ColorPalettePicker';`,
    componentRender: `<ColorPalettePicker />`,
    steps: [
      { step: 'Generate', description: 'Click generate or press spacebar to create a new color.' },
      { step: 'Review Palette', description: 'Explore matching tints, shades, and complementary colors.' },
      { step: 'Copy Codes', description: 'Click any color to copy its HEX code instantly.' }
    ],
    useCases: [
      'Finding inspiration for a new website theme.',
      'Picking random distinct colors for data visualization charts.',
      'Brainstorming logo color schemes.'
    ],
    relatedTools: [
      { href: '/tools/color-converter', name: 'Color Converter', description: 'Convert between color formats.' }
    ]
  },

  // --- CSV TO JSON ---
  {
    path: 'app/tools/csv-to-json/csv-to-json-converter',
    title: 'CSV to JSON Converter – Convert Data Securely Online',
    description: 'Convert CSV spreadsheet data into structured JSON objects. Fast, free, and completely local browser-based parsing.',
    h1: 'CSV to JSON Converter',
    p1: 'Easily transform comma-separated values (CSV) into JavaScript Object Notation (JSON) format. Great for data migration and APIs.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { CsvToJson } from '@/components/tools/CsvToJson';`,
    componentRender: `<CsvToJson />`,
    steps: [
      { step: 'Paste CSV', description: 'Input your raw CSV text or spreadsheet data.' },
      { step: 'Parse Data', description: 'The tool securely processes the data locally in your browser.' },
      { step: 'Copy JSON', description: 'Download or copy the newly formatted JSON array.' }
    ],
    useCases: [
      'Converting exported Excel spreadsheets to JSON for web apps.',
      'Migrating flat data files into NoSQL databases like MongoDB.',
      'Generating mock API data from spreadsheets.'
    ],
    relatedTools: [
      { href: '/tools/json-formatter', name: 'JSON Formatter', description: 'Format and validate JSON.' }
    ]
  },

  // --- IMAGE RESIZER ---
  {
    path: 'app/tools/image-resizer/resize-image-for-instagram',
    title: 'Resize Image for Instagram Online – Free Square Crop',
    description: 'Easily resize your photos to perfect Instagram dimensions (1080x1080). Crop, scale, and adjust your images online for free.',
    h1: 'Resize Image for Instagram',
    p1: 'Ensure your photos look perfect on your feed. Resize and crop images to 1080x1080 pixels securely in your browser.',
    schemaCategory: 'ImageEditorApplication',
    componentImport: `import { ImageResizer } from '@/components/tools/ImageResizer';`,
    componentRender: `<ImageResizer />`,
    steps: [
      { step: 'Upload Photo', description: 'Drop your high-resolution image into the tool.' },
      { step: 'Set Dimensions', description: 'Set width and height to 1080x1080 or select a 1:1 aspect ratio.' },
      { step: 'Download Image', description: 'Save the perfectly sized photo for your feed.' }
    ],
    useCases: [
      'Creating perfectly square images for an Instagram feed.',
      'Preventing Instagram from cropping important parts of a photo.',
      'Standardizing product images for social media marketing.'
    ],
    relatedTools: [
      { href: '/tools/image-compressor', name: 'Image Compressor', description: 'Compress images to reduce file size.' },
      { href: '/tools/image-resizer/resize-image-to-1080p', name: 'Resize to 1080p', description: 'Resize images to Full HD.' }
    ]
  },
  {
    path: 'app/tools/image-resizer/resize-image-to-1080p',
    title: 'Resize Image to 1080p Online – Free Full HD Resizer',
    description: 'Resize any photo to 1920x1080 (Full HD) resolution. Fast, free, and private online image resizer.',
    h1: 'Resize Image to 1080p',
    p1: 'Need a Full HD image? Quickly scale or crop your photos to exactly 1920x1080 pixels for wallpapers or video thumbnails.',
    schemaCategory: 'ImageEditorApplication',
    componentImport: `import { ImageResizer } from '@/components/tools/ImageResizer';`,
    componentRender: `<ImageResizer />`,
    steps: [
      { step: 'Upload Image', description: 'Select the image you want to resize.' },
      { step: 'Select 1080p', description: 'Set the width to 1920 and the height to 1080.' },
      { step: 'Export', description: 'Download your Full HD image.' }
    ],
    useCases: [
      'Creating YouTube thumbnails at the perfect 1080p resolution.',
      'Resizing photos to use as desktop wallpapers.',
      'Standardizing images for a video presentation slide deck.'
    ],
    relatedTools: [
      { href: '/tools/image-resizer', name: 'Image Resizer', description: 'Custom image resizer tool.' }
    ]
  },

  // --- IMAGE TO PDF ---
  {
    path: 'app/tools/image-to-pdf/jpg-to-pdf-converter',
    title: 'JPG to PDF Converter – Convert Images to PDF Online',
    description: 'Turn your JPG and JPEG images into a single PDF document. Free, fast, and completely secure browser-based tool.',
    h1: 'JPG to PDF Converter',
    p1: 'Combine multiple JPG photos into a single, easy-to-share PDF document. All processing is done securely on your device.',
    schemaCategory: 'WebApplication',
    componentImport: `import { ImageToPdf } from '@/components/tools/ImageToPdf';`,
    componentRender: `<ImageToPdf />`,
    steps: [
      { step: 'Select JPGs', description: 'Upload one or more JPG images.' },
      { step: 'Arrange Order', description: 'Drag and drop to put the photos in the correct sequence.' },
      { step: 'Generate PDF', description: 'Click convert and download your new PDF file.' }
    ],
    useCases: [
      'Compiling photos of receipts into an expense report PDF.',
      'Turning scanned homework assignments into a single file for submission.',
      'Creating a simple portfolio document from exported designs.'
    ],
    relatedTools: [
      { href: '/tools/image-to-pdf/png-to-pdf-converter', name: 'PNG to PDF Converter', description: 'Convert PNG images to PDF.' },
      { href: '/tools/pdf-merge-split', name: 'PDF Merge & Split', description: 'Combine multiple PDFs.' }
    ]
  },
  {
    path: 'app/tools/image-to-pdf/png-to-pdf-converter',
    title: 'PNG to PDF Converter – Convert PNGs to PDF Online',
    description: 'Convert transparent and high-quality PNG images into a PDF document. Free online tool with no uploads required.',
    h1: 'PNG to PDF Converter',
    p1: 'Easily bundle multiple PNG images into one cohesive PDF document for printing, sharing, or archiving.',
    schemaCategory: 'WebApplication',
    componentImport: `import { ImageToPdf } from '@/components/tools/ImageToPdf';`,
    componentRender: `<ImageToPdf />`,
    steps: [
      { step: 'Upload PNGs', description: 'Select the PNG files you wish to convert.' },
      { step: 'Adjust Settings', description: 'Choose your preferred page orientation and margins.' },
      { step: 'Download PDF', description: 'Instantly download the combined PDF file.' }
    ],
    useCases: [
      'Converting exported UI mockups into a client presentation PDF.',
      'Archiving high-resolution digital art.',
      'Creating instructional documents from software screenshots.'
    ],
    relatedTools: [
      { href: '/tools/image-to-pdf/jpg-to-pdf-converter', name: 'JPG to PDF Converter', description: 'Convert JPG images to PDF.' }
    ]
  },

  // --- JSON FORMATTER ---
  {
    path: 'app/tools/json-formatter/json-validator',
    title: 'JSON Validator – Validate and Check JSON Online',
    description: 'Check if your JSON code is valid. Free online JSON validator catches syntax errors, missing quotes, and trailing commas.',
    h1: 'JSON Validator Online',
    p1: 'Find out exactly why your JSON payload is breaking. Instantly detect syntax errors, missing brackets, and invalid formatting.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { JsonFormatter } from '@/components/tools/JsonFormatter';`,
    componentRender: `<JsonFormatter />`,
    steps: [
      { step: 'Paste Payload', description: 'Input your raw JSON string.' },
      { step: 'Check Validity', description: 'The tool will automatically highlight any parsing errors.' },
      { step: 'Fix Errors', description: 'Use the provided error message to correct your syntax.' }
    ],
    useCases: [
      'Debugging a failing API request due to malformed payload data.',
      'Validating complex configuration files before deploying them.',
      'Checking hand-written JSON strings for missing quotes.'
    ],
    relatedTools: [
      { href: '/tools/json-formatter/json-beautifier', name: 'JSON Beautifier', description: 'Format and indent JSON.' }
    ]
  },
  {
    path: 'app/tools/json-formatter/json-beautifier',
    title: 'JSON Beautifier – Format and Indent JSON Online',
    description: 'Beautify messy or minified JSON code online. Easily format and indent JSON strings for human readability.',
    h1: 'JSON Beautifier',
    p1: 'Make dense, unreadable JSON strings beautiful. Apply perfect indentation and syntax highlighting right in your browser.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { JsonFormatter } from '@/components/tools/JsonFormatter';`,
    componentRender: `<JsonFormatter />`,
    steps: [
      { step: 'Paste Data', description: 'Input your minified JSON string.' },
      { step: 'Format', description: 'Click format to apply spaces or tabs.' },
      { step: 'Copy Clean JSON', description: 'Copy the easily readable, well-structured output.' }
    ],
    useCases: [
      'Reading complex server responses copied from a network tab.',
      'Formatting JSON strings stored in database columns for readability.',
      'Preparing code snippets for documentation.'
    ],
    relatedTools: [
      { href: '/tools/json-formatter/json-validator', name: 'JSON Validator', description: 'Check JSON syntax.' }
    ]
  },

  // --- LOREM IPSUM GENERATOR ---
  {
    path: 'app/tools/lorem-ipsum-generator/dummy-text-generator',
    title: 'Dummy Text Generator – Generate Placeholder Text',
    description: 'Generate standard dummy text for web design and publishing. Free, fast Lorem Ipsum generator for your mockups.',
    h1: 'Dummy Text Generator',
    p1: 'Quickly grab paragraphs, sentences, or words of classic Lorem Ipsum text to use as placeholders in your design mockups.',
    schemaCategory: 'WebApplication',
    componentImport: `import { LoremIpsumGenerator } from '@/components/tools/LoremIpsumGenerator';`,
    componentRender: `<LoremIpsumGenerator />`,
    steps: [
      { step: 'Select Format', description: 'Choose whether you want paragraphs, sentences, or words.' },
      { step: 'Set Amount', description: 'Pick the exact number you need.' },
      { step: 'Copy Text', description: 'Instantly copy the generated dummy text.' }
    ],
    useCases: [
      'Filling out wireframes and UI mockups in Figma.',
      'Testing typography and font choices on a new website.',
      'Drafting layout templates before actual content is ready.'
    ],
    relatedTools: [
      { href: '/tools/text-repeater', name: 'Text Repeater', description: 'Repeat specific words or sentences.' }
    ]
  },

  // --- PDF MERGE & SPLIT ---
  {
    path: 'app/tools/pdf-merge-split/merge-pdf',
    title: 'Merge PDF Online – Combine Multiple PDFs for Free',
    description: 'Combine multiple PDF files into one single document securely. Free browser-based PDF merger with no file size limits.',
    h1: 'Merge PDF Online',
    p1: 'Easily bundle multiple PDF documents into a single file. Our secure tool processes your files locally so they never leave your device.',
    schemaCategory: 'WebApplication',
    componentImport: `import { PdfMergeSplit } from '@/components/tools/PdfMergeSplit';`,
    componentRender: `<PdfMergeSplit />`,
    steps: [
      { step: 'Upload PDFs', description: 'Select the PDF files you want to combine.' },
      { step: 'Reorder', description: 'Drag and drop the files to set the correct sequence.' },
      { step: 'Merge and Download', description: 'Click merge to generate your single, consolidated document.' }
    ],
    useCases: [
      'Combining scanned pages of a contract into a single document.',
      'Merging a cover letter and resume before sending a job application.',
      'Bundling multiple invoices into a single monthly report.'
    ],
    relatedTools: [
      { href: '/tools/pdf-merge-split/split-pdf', name: 'Split PDF', description: 'Extract pages from a PDF.' },
      { href: '/tools/image-to-pdf', name: 'Image to PDF', description: 'Convert photos to PDF.' }
    ]
  },
  {
    path: 'app/tools/pdf-merge-split/split-pdf',
    title: 'Split PDF Online – Extract Pages from PDF for Free',
    description: 'Extract specific pages or split a large PDF into smaller files. Secure, free online PDF splitter tool.',
    h1: 'Split PDF Online',
    p1: 'Remove unwanted pages or split a massive document into smaller, manageable pieces securely in your browser.',
    schemaCategory: 'WebApplication',
    componentImport: `import { PdfMergeSplit } from '@/components/tools/PdfMergeSplit';`,
    componentRender: `<PdfMergeSplit />`,
    steps: [
      { step: 'Select PDF', description: 'Upload the large PDF file you want to split.' },
      { step: 'Select Pages', description: 'Choose which pages to extract or remove.' },
      { step: 'Download Parts', description: 'Save the new, smaller PDF documents.' }
    ],
    useCases: [
      'Extracting a single signed page from a massive legal document.',
      'Splitting a huge textbook PDF into individual chapters for easier reading.',
      'Removing blank or unnecessary pages from a scanned file.'
    ],
    relatedTools: [
      { href: '/tools/pdf-merge-split/merge-pdf', name: 'Merge PDF', description: 'Combine PDFs together.' }
    ]
  },

  // --- REGEX TESTER ---
  {
    path: 'app/tools/regex-tester/online-regex-tester',
    title: 'Online Regex Tester – Test Regular Expressions Free',
    description: 'Write, test, and debug regular expressions online. Real-time highlighting and matching for JavaScript regex.',
    h1: 'Online Regex Tester',
    p1: 'A fast, developer-friendly tool to test and debug complex regular expressions against target text securely in your browser.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { RegexTester } from '@/components/tools/RegexTester';`,
    componentRender: `<RegexTester />`,
    steps: [
      { step: 'Write Regex', description: 'Enter your regular expression pattern.' },
      { step: 'Add Test Text', description: 'Paste the string you want to search.' },
      { step: 'View Matches', description: 'See real-time highlights of where the pattern matched successfully.' }
    ],
    useCases: [
      'Debugging complicated email or phone number validation logic.',
      'Testing extraction patterns for web scraping scripts.',
      'Learning how specific regex modifiers (like global or multiline) affect matches.'
    ],
    relatedTools: [
      { href: '/tools/find-and-replace', name: 'Find and Replace', description: 'Use Regex to replace text.' }
    ]
  },

  // --- SLUG GENERATOR ---
  {
    path: 'app/tools/slug-generator/url-slug-generator',
    title: 'URL Slug Generator – Create SEO-Friendly Links',
    description: 'Instantly convert article titles into clean, SEO-friendly URL slugs. Free tool for bloggers and content managers.',
    h1: 'URL Slug Generator',
    p1: 'Transform long blog post titles into perfectly formatted, URL-safe slugs. Automatically removes special characters and spaces.',
    schemaCategory: 'WebApplication',
    componentImport: `import { SlugGenerator } from '@/components/tools/SlugGenerator';`,
    componentRender: `<SlugGenerator />`,
    steps: [
      { step: 'Input Title', description: 'Paste the headline or title of your article.' },
      { step: 'Generate Slug', description: 'The tool will instantly lowercase it and add hyphens.' },
      { step: 'Copy URL Path', description: 'Copy the clean string to use in your CMS.' }
    ],
    useCases: [
      'Creating SEO-friendly permalinks for WordPress or Next.js blogs.',
      'Standardizing database IDs derived from user-generated content names.',
      'Preparing clean directory names for a server filesystem.'
    ],
    relatedTools: [
      { href: '/tools/case-converter', name: 'Case Converter', description: 'Convert string casings.' },
      { href: '/tools/url-encoder', name: 'URL Encoder', description: 'Encode URLs with special characters.' }
    ]
  },

  // --- UNIT CONVERTER ---
  {
    path: 'app/tools/unit-converter/length-converter',
    title: 'Length Converter – Convert Meters, Feet, and Inches',
    description: 'Easily convert between meters, centimeters, feet, inches, miles, and kilometers. Free online unit conversion tool.',
    h1: 'Length Converter',
    p1: 'Instantly translate measurements between the metric system and imperial system. Accurate and simple to use.',
    schemaCategory: 'WebApplication',
    componentImport: `import { UnitConverter } from '@/components/tools/UnitConverter';`,
    componentRender: `<UnitConverter />`,
    steps: [
      { step: 'Select Units', description: 'Choose the length category and specify your starting and target units.' },
      { step: 'Enter Value', description: 'Input the number you wish to convert.' },
      { step: 'Read Result', description: 'Instantly view the mathematically accurate conversion.' }
    ],
    useCases: [
      "Converting a person's height from centimeters to feet and inches.",
      'Translating driving distances from miles to kilometers.',
      'Calculating fabric measurements for a sewing project.'
    ],
    relatedTools: [
      { href: '/tools/unit-converter/weight-converter', name: 'Weight Converter', description: 'Convert pounds, kilograms, and ounces.' }
    ]
  },
  {
    path: 'app/tools/unit-converter/weight-converter',
    title: 'Weight Converter – Convert Kilograms to Pounds',
    description: 'Convert between kilograms, grams, pounds, and ounces instantly. Accurate, free, and easy-to-use online weight converter.',
    h1: 'Weight Converter',
    p1: 'Translate weight measurements between metric and imperial units. Perfect for cooking, fitness, and shipping calculations.',
    schemaCategory: 'WebApplication',
    componentImport: `import { UnitConverter } from '@/components/tools/UnitConverter';`,
    componentRender: `<UnitConverter />`,
    steps: [
      { step: 'Choose Weight', description: 'Select the weight or mass category.' },
      { step: 'Input Values', description: 'Enter the amount in your starting unit.' },
      { step: 'Get Conversion', description: 'Instantly see the exact equivalent in your target unit.' }
    ],
    useCases: [
      'Converting a baking recipe from grams to ounces.',
      'Tracking gym progress by converting kilograms to pounds.',
      'Calculating package shipping weight limits.'
    ],
    relatedTools: [
      { href: '/tools/unit-converter/length-converter', name: 'Length Converter', description: 'Convert distances and lengths.' }
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
