import fs from 'fs';
import path from 'path';

const PAGES = [
  // --- WORD COUNTER VARIATIONS ---
  {
    path: 'app/tools/word-counter/essay-word-counter',
    title: 'Essay Word Counter – Check Academic Paper Length',
    description: 'Instantly count the words in your essay, thesis, or academic paper online. Free essay word counter helps you meet assignment requirements.',
    h1: 'Essay Word Counter',
    p1: 'Ensure your school assignment or university thesis meets the required word limits. Check words, sentences, and character counts instantly.',
    schemaCategory: 'WebApplication',
    componentImport: `import { WordCounter } from '@/components/tools/WordCounter';`,
    componentRender: `<WordCounter />`,
    steps: [
      { step: 'Paste Essay', description: 'Copy and paste your entire academic paper.' },
      { step: 'View Statistics', description: 'Look at the live word count and sentence count metrics.' },
      { step: 'Adjust Text', description: 'Edit your essay directly in the box to hit your target length.' }
    ],
    useCases: [
      'Checking if a college admissions essay meets the 500-word limit.',
      'Ensuring a high school English paper hits the minimum requirement.',
      'Analyzing the structural length of academic paragraphs.'
    ],
    relatedTools: [
      { href: '/tools/word-counter/character-counter', name: 'Character Counter', description: 'Count specific characters.' }
    ]
  },
  {
    path: 'app/tools/word-counter/tweet-character-counter',
    title: 'Tweet Character Counter – Check Twitter Limits',
    description: 'Ensure your tweet is under the 280-character limit. Free online tweet character counter tool for social media managers.',
    h1: 'Tweet Character Counter',
    p1: 'Draft your tweets perfectly. Check exactly how many characters you have left before hitting the strict 280-character Twitter limit.',
    schemaCategory: 'WebApplication',
    componentImport: `import { WordCounter } from '@/components/tools/WordCounter';`,
    componentRender: `<WordCounter />`,
    steps: [
      { step: 'Draft Tweet', description: 'Type your tweet directly into the editor.' },
      { step: 'Check Count', description: 'Monitor the character count to ensure it stays below 280.' },
      { step: 'Post', description: 'Copy the perfected tweet to your social media dashboard.' }
    ],
    useCases: [
      'Drafting marketing tweets for a brand campaign.',
      'Writing concise LinkedIn or Facebook social updates.',
      'Ensuring hashtags do not push a post over the character limit.'
    ],
    relatedTools: [
      { href: '/tools/word-counter', name: 'Word Counter', description: 'Count total words.' }
    ]
  },

  // --- IMAGE RESIZER VARIATIONS ---
  {
    path: 'app/tools/image-resizer/resize-image-for-facebook',
    title: 'Resize Image for Facebook – Perfect Cover Photos',
    description: 'Resize your photos for Facebook cover images, profile pictures, and shared posts. Free online social media image resizer.',
    h1: 'Resize Image for Facebook',
    p1: 'Crop and scale your photos perfectly for Facebook. Ensure your profile pictures and cover photos are perfectly aligned and sharp.',
    schemaCategory: 'ImageEditorApplication',
    componentImport: `import { ImageResizer } from '@/components/tools/ImageResizer';`,
    componentRender: `<ImageResizer />`,
    steps: [
      { step: 'Upload Photo', description: 'Drop the photo you wish to upload to Facebook.' },
      { step: 'Set Dimensions', description: 'Input the standard Facebook dimensions (e.g., 820x312 for covers).' },
      { step: 'Download', description: 'Export the correctly sized image.' }
    ],
    useCases: [
      'Creating a perfectly fitted Facebook cover photo for a business page.',
      'Sizing an advertisement image for optimal feed display.',
      'Cropping a profile picture so nothing gets cut off.'
    ],
    relatedTools: [
      { href: '/tools/image-resizer/resize-image-for-instagram', name: 'Resize for Instagram', description: 'Create 1080x1080 square images.' }
    ]
  },
  {
    path: 'app/tools/image-resizer/resize-image-for-youtube-thumbnail',
    title: 'Resize Image for YouTube Thumbnail – 1280x720',
    description: 'Easily resize your graphics to the perfect 1280x720 YouTube thumbnail resolution. Free online thumbnail maker tool.',
    h1: 'Resize Image for YouTube Thumbnail',
    p1: 'Ensure your video thumbnails look crisp and professional. Resize and crop your graphics to exactly 1280x720 pixels.',
    schemaCategory: 'ImageEditorApplication',
    componentImport: `import { ImageResizer } from '@/components/tools/ImageResizer';`,
    componentRender: `<ImageResizer />`,
    steps: [
      { step: 'Select Graphic', description: 'Upload your raw thumbnail artwork.' },
      { step: 'Resize to 720p', description: 'Set the width to 1280 and height to 720.' },
      { step: 'Export', description: 'Download the optimized thumbnail.' }
    ],
    useCases: [
      'Preparing custom artwork for a YouTube video upload.',
      'Resizing a stream highlight graphic for Twitch.',
      'Standardizing blog post featured images.'
    ],
    relatedTools: [
      { href: '/tools/image-resizer/resize-image-to-1080p', name: 'Resize to 1080p', description: 'Scale up to Full HD.' }
    ]
  },

  // --- HTML / CSS / JS FORMATTERS ---
  {
    path: 'app/tools/html-formatter/html-minifier',
    title: 'HTML Minifier – Compress HTML Code Online',
    description: 'Minify HTML code online by removing whitespace, line breaks, and comments. Optimize website speed and reduce file size.',
    h1: 'HTML Minifier',
    p1: 'Compress your HTML files before deploying to production. Stripping out unnecessary characters helps improve your PageSpeed score.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { HtmlFormatter } from '@/components/tools/HtmlFormatter';`,
    componentRender: `<HtmlFormatter />`,
    steps: [
      { step: 'Paste HTML', description: 'Input your beautifully formatted HTML code.' },
      { step: 'Minify', description: 'Click minify to collapse it into a single line.' },
      { step: 'Download', description: 'Copy the minified output for deployment.' }
    ],
    useCases: [
      'Optimizing static HTML websites for faster loading.',
      'Minifying email templates before sending them via Mailchimp.',
      'Reducing the payload size of an embedded widget.'
    ],
    relatedTools: [
      { href: '/tools/html-formatter/html-beautifier', name: 'HTML Beautifier', description: 'Format and indent HTML.' }
    ]
  },
  {
    path: 'app/tools/css-formatter/css-beautifier',
    title: 'CSS Beautifier – Format and Indent CSS Code',
    description: 'Format, indent, and beautify CSS stylesheets online. Make minified CSS readable again with this free developer tool.',
    h1: 'CSS Beautifier',
    p1: 'Turn a massive wall of minified CSS into a perfectly indented, readable stylesheet. Essential for inspecting third-party code.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { CssFormatter } from '@/components/tools/CssFormatter';`,
    componentRender: `<CssFormatter />`,
    steps: [
      { step: 'Paste Minified CSS', description: 'Input the dense CSS string.' },
      { step: 'Beautify', description: 'Click the format button to expand the blocks.' },
      { step: 'Copy Clean Code', description: 'Copy the well-structured stylesheet.' }
    ],
    useCases: [
      'Inspecting a competitor\'s website stylesheet for design inspiration.',
      'Debugging a broken CSS rule that was compressed by a build tool.',
      'Reformatting an old legacy stylesheet for modern development.'
    ],
    relatedTools: [
      { href: '/tools/css-formatter/css-minifier', name: 'CSS Minifier', description: 'Compress CSS.' }
    ]
  },
  {
    path: 'app/tools/javascript-formatter/javascript-beautifier',
    title: 'JavaScript Beautifier – Format JS Code Online',
    description: 'Format, indent, and beautify minified JavaScript. Free online JS beautifier for debugging complex web applications.',
    h1: 'JavaScript Beautifier',
    p1: 'Make unreadable JavaScript understandable. Apply standard indentation and line breaks to quickly debug confusing code blocks.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { JsFormatter } from '@/components/tools/JsFormatter';`,
    componentRender: `<JsFormatter />`,
    steps: [
      { step: 'Input Script', description: 'Paste the minified JavaScript code.' },
      { step: 'Format Code', description: 'Click beautify to properly indent functions and loops.' },
      { step: 'Debug', description: 'Read and debug the newly formatted code structure.' }
    ],
    useCases: [
      'Reverse-engineering a compiled web widget.',
      'Debugging an error thrown by a minified third-party library.',
      'Formatting inline scripts copied from old HTML files.'
    ],
    relatedTools: [
      { href: '/tools/javascript-formatter/js-minifier', name: 'JS Minifier', description: 'Compress JS code.' }
    ]
  },

  // --- MARKDOWN PREVIEWER VARIATIONS ---
  {
    path: 'app/tools/markdown-previewer/markdown-editor',
    title: 'Online Markdown Editor – Write with Live Preview',
    description: 'Write Markdown in a distraction-free online editor with a real-time live preview. Perfect for drafting README files and blogs.',
    h1: 'Online Markdown Editor',
    p1: 'A clean, fast, and completely private Markdown editor. See your formatting render in real-time right alongside your code.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { MarkdownPreviewer } from '@/components/tools/MarkdownPreviewer';`,
    componentRender: `<MarkdownPreviewer />`,
    steps: [
      { step: 'Write Content', description: 'Type standard Markdown syntax in the editor pane.' },
      { step: 'Live Preview', description: 'Watch the rich text render automatically.' },
      { step: 'Export', description: 'Copy the Markdown or the rendered HTML.' }
    ],
    useCases: [
      'Drafting a complex README.md file with tables and lists.',
      'Writing a new blog post before importing it to a CMS.',
      'Taking fast, well-formatted notes during a meeting.'
    ],
    relatedTools: [
      { href: '/tools/markdown-previewer/markdown-to-html', name: 'Markdown to HTML', description: 'Convert MD to HTML.' }
    ]
  },

  // --- REMOVE EXTRA SPACES VARIATIONS ---
  {
    path: 'app/tools/remove-extra-spaces/trim-whitespace',
    title: 'Trim Whitespace Online – Remove Trailing Spaces',
    description: 'Instantly trim leading and trailing whitespace from your text. Clean up bad formatting and invisible characters online.',
    h1: 'Trim Whitespace Online',
    p1: 'Remove invisible leading and trailing spaces that cause validation errors in forms, databases, and spreadsheets.',
    schemaCategory: 'WebApplication',
    componentImport: `import { RemoveExtraSpaces } from '@/components/tools/RemoveExtraSpaces';`,
    componentRender: `<RemoveExtraSpaces />`,
    steps: [
      { step: 'Paste Data', description: 'Input a list of words or paragraphs with extra spaces.' },
      { step: 'Trim Spaces', description: 'Click the button to execute a global trim operation.' },
      { step: 'Copy Cleaned Data', description: 'Retrieve the normalized text strings.' }
    ],
    useCases: [
      'Cleaning a list of email addresses before importing to Mailchimp.',
      'Fixing user inputs that contain accidental spacebar hits.',
      'Preparing data for an exact-match database query.'
    ],
    relatedTools: [
      { href: '/tools/remove-extra-spaces/space-remover', name: 'Space Remover', description: 'Remove double spaces.' }
    ]
  },

  // --- UUID GENERATOR VARIATION ---
  {
    path: 'app/tools/uuid-generator/random-uuid-generator',
    title: 'Random UUID Generator – Create Secure Identifiers',
    description: 'Generate fully random UUIDs (Universally Unique Identifiers). 100% free, secure, and instant developer ID tool.',
    h1: 'Random UUID Generator',
    p1: 'Generate cryptographic-quality random UUIDs for your software projects, database keys, or secure tokens.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { UuidGenerator } from '@/components/tools/UuidGenerator';`,
    componentRender: `<UuidGenerator />`,
    steps: [
      { step: 'Set Type', description: 'Select the standard UUID v4 format.' },
      { step: 'Generate', description: 'Click the button to create a new unique identifier.' },
      { step: 'Implement', description: 'Copy the ID and use it as a primary key or session token.' }
    ],
    useCases: [
      'Assigning unique tracking IDs to anonymous users.',
      'Creating complex, unguessable file names for a cloud storage bucket.',
      'Populating a mock database with realistic unique keys.'
    ],
    relatedTools: [
      { href: '/tools/uuid-generator/uuid-v4-generator', name: 'UUID v4', description: 'Generate Version 4 UUIDs.' }
    ]
  },

  // --- JSON FORMATTER VARIATION ---
  {
    path: 'app/tools/json-formatter/json-viewer',
    title: 'JSON Viewer – Online JSON Tree Viewer & Parser',
    description: 'View and parse complex JSON payloads in an easy-to-read format. Free JSON viewer online with collapsing nodes.',
    h1: 'Online JSON Viewer',
    p1: 'Quickly inspect large JSON objects. Beautify the syntax, validate the structure, and easily copy individual data points.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { JsonFormatter } from '@/components/tools/JsonFormatter';`,
    componentRender: `<JsonFormatter />`,
    steps: [
      { step: 'Input JSON', description: 'Paste the raw API response.' },
      { step: 'Parse Data', description: 'Let the tool structure the data visually.' },
      { step: 'Inspect', description: 'Analyze the formatted object hierarchy.' }
    ],
    useCases: [
      'Reviewing a 1,000-line JSON payload returned by a third-party API.',
      'Checking the specific structure of a GraphQL response.',
      'Validating webhooks visually before writing processing logic.'
    ],
    relatedTools: [
      { href: '/tools/json-formatter/json-beautifier', name: 'JSON Beautifier', description: 'Indent JSON code.' }
    ]
  },

  // --- URL ENCODER VARIATION ---
  {
    path: 'app/tools/url-encoder/url-encode-online',
    title: 'URL Encoder Online – Encode Special Characters',
    description: 'Encode text, spaces, and special characters into URL-safe formats instantly. Free browser-based URL encode tool.',
    h1: 'URL Encoder Online',
    p1: 'Transform raw text strings into a percent-encoded format so they can be safely transmitted as a web URL or query parameter.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { UrlEncoderDecoder } from '@/components/tools/UrlEncoderDecoder';`,
    componentRender: `<UrlEncoderDecoder />`,
    steps: [
      { step: 'Type String', description: 'Enter the raw text or complex string.' },
      { step: 'Select Encode', description: 'Ensure encode mode is activated.' },
      { step: 'Copy URL', description: 'Save the percent-encoded string.' }
    ],
    useCases: [
      'Encoding a full sentence to append it to a WhatsApp share link.',
      'Formatting spaces (as %20) for an API GET request.',
      'Ensuring ampersands do not break a complex redirect URL.'
    ],
    relatedTools: [
      { href: '/tools/url-encoder/url-decoder', name: 'URL Decoder', description: 'Decode percent-encoded strings.' }
    ]
  },

  // --- AGE CALCULATOR VARIATION ---
  {
    path: 'app/tools/age-calculator/chronological-age-calculator',
    title: 'Chronological Age Calculator – Get Exact Age',
    description: 'Calculate chronological age in years, months, and days. Free tool for teachers, testers, and medical professionals.',
    h1: 'Chronological Age Calculator',
    p1: 'Determine an exact chronological age for academic assessments, medical forms, and developmental testing accurately.',
    schemaCategory: 'WebApplication',
    componentImport: `import { AgeCalculator } from '@/components/tools/AgeCalculator';`,
    componentRender: `<AgeCalculator />`,
    steps: [
      { step: 'Enter Birth Date', description: 'Input the exact date of birth.' },
      { step: 'Enter Test Date', description: 'Input the current date or the date the test was administered.' },
      { step: 'Get Results', description: 'View the exact chronological age breakdown.' }
    ],
    useCases: [
      'Calculating chronological age for standardized psychological testing (like WISC).',
      'Determining eligibility age cut-offs for school enrollment.',
      'Checking age brackets for pediatric medical forms.'
    ],
    relatedTools: [
      { href: '/tools/age-calculator/birthday-calculator', name: 'Birthday Calculator', description: 'Count down to a birthday.' }
    ]
  },
  
  // --- PASSWORD GENERATOR VARIATION ---
  {
    path: 'app/tools/password-generator/random-string-generator',
    title: 'Random String Generator – Generate Random Text',
    description: 'Generate fully random strings of text, letters, and numbers. Perfect for tokens, hashes, and dummy data generation.',
    h1: 'Random String Generator',
    p1: 'Instantly generate random alphanumeric strings. Customize the exact length and character sets required for your project.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { PasswordGenerator } from '@/components/tools/PasswordGenerator';`,
    componentRender: `<PasswordGenerator />`,
    steps: [
      { step: 'Define Length', description: 'Set exactly how many characters long the string should be.' },
      { step: 'Toggle Characters', description: 'Turn off symbols if you only want alphanumeric outputs.' },
      { step: 'Generate', description: 'Click to create a new unique random string.' }
    ],
    useCases: [
      'Creating a unique API key or client secret for a web application.',
      'Generating a random referral code string (e.g. 8 uppercase letters).',
      'Creating a non-sequential order ID for an ecommerce platform.'
    ],
    relatedTools: [
      { href: '/tools/uuid-generator/random-uuid-generator', name: 'Random UUID', description: 'Generate UUID identifiers.' }
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
