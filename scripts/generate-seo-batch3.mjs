import fs from 'fs';
import path from 'path';

const PAGES = [
  // --- AGE CALCULATOR ---
  {
    path: 'app/tools/age-calculator/birthday-calculator',
    title: 'Birthday Calculator – Find Exact Age and Days Until Birthday',
    description: 'Calculate your exact age in years, months, and days. Free online birthday calculator instantly finds out how many days until your next birthday.',
    h1: 'Birthday Calculator',
    p1: 'Find your precise age and see a fun countdown to your next birthday. All calculations happen instantly in your browser.',
    schemaCategory: 'WebApplication',
    componentImport: `import { AgeCalculator } from '@/components/tools/AgeCalculator';`,
    componentRender: `<AgeCalculator />`,
    steps: [
      { step: 'Select Birthday', description: 'Enter your date of birth using the date picker.' },
      { step: 'Pick Target Date', description: 'Leave it as today, or pick a future date to find out how old you will be.' },
      { step: 'View Results', description: 'Instantly view your age in years, months, days, and total days.' }
    ],
    useCases: [
      'Finding out exactly how old you are down to the day.',
      'Checking how many days are left until your upcoming birthday.',
      'Calculating the exact age gap between two different dates.'
    ],
    relatedTools: [
      { href: '/tools/age-calculator/baby-age-calculator', name: 'Baby Age Calculator', description: 'Calculate exact age in months and weeks.' }
    ]
  },
  {
    path: 'app/tools/age-calculator/baby-age-calculator',
    title: 'Baby Age Calculator – Calculate Age in Weeks and Months',
    description: "Calculate your baby's exact age in weeks, months, and days. Free online baby age calculator for milestones and doctor visits.",
    h1: 'Baby Age Calculator',
    p1: "Quickly convert your baby's birth date into exact weeks and months. Perfect for tracking developmental milestones.",
    schemaCategory: 'WebApplication',
    componentImport: `import { AgeCalculator } from '@/components/tools/AgeCalculator';`,
    componentRender: `<AgeCalculator />`,
    steps: [
      { step: 'Enter Birth Date', description: "Input your baby's date of birth." },
      { step: 'Select Today', description: 'Keep the comparison date as today to get the current age.' },
      { step: 'Read Details', description: 'View the total age in months and total weeks.' }
    ],
    useCases: [
      'Determining if your baby is ready for certain developmental milestones.',
      'Providing exact week-based age to pediatricians during visits.',
      'Tracking weekly growth accurately.'
    ],
    relatedTools: [
      { href: '/tools/age-calculator', name: 'Age Calculator', description: 'General purpose age calculator.' }
    ]
  },

  // --- PERCENTAGE CALCULATOR ---
  {
    path: 'app/tools/percentage-calculator/discount-calculator',
    title: 'Discount Calculator – Calculate Sale Price and Savings',
    description: 'Easily calculate the final price after a percentage discount. Find out exactly how much money you save during sales.',
    h1: 'Discount Calculator',
    p1: 'Shopping a sale? Enter the original price and the percentage off to instantly see the final price and your total savings.',
    schemaCategory: 'WebApplication',
    componentImport: `import { PercentageCalculator } from '@/components/tools/PercentageCalculator';`,
    componentRender: `<PercentageCalculator />`,
    steps: [
      { step: 'Select Mode', description: 'Choose the "What is X% of Y" calculation mode.' },
      { step: 'Enter Values', description: 'Input the discount percentage and original price.' },
      { step: 'Get Final Price', description: 'Subtract the result from the original price.' }
    ],
    useCases: [
      'Calculating the final cost of an item during a Black Friday sale.',
      'Finding out exactly how much a 20% coupon will save you.',
      'Verifying store discounts at the checkout counter.'
    ],
    relatedTools: [
      { href: '/tools/percentage-calculator/percentage-increase-calculator', name: 'Percentage Increase Calculator', description: 'Calculate growth over time.' }
    ]
  },
  {
    path: 'app/tools/percentage-calculator/percentage-increase-calculator',
    title: 'Percentage Increase Calculator – Find Growth & Margin',
    description: 'Calculate the percentage increase or decrease between two numbers. Ideal for tracking financial growth, profit margins, and statistical changes.',
    h1: 'Percentage Increase Calculator',
    p1: 'Find out the exact percentage change between an old value and a new value. Useful for tracking business growth or stock market gains.',
    schemaCategory: 'WebApplication',
    componentImport: `import { PercentageCalculator } from '@/components/tools/PercentageCalculator';`,
    componentRender: `<PercentageCalculator />`,
    steps: [
      { step: 'Select Change Mode', description: 'Choose the "Percentage increase/decrease" mode.' },
      { step: 'Input Numbers', description: 'Enter your starting value and your ending value.' },
      { step: 'View Change', description: 'Instantly see if it is an increase or decrease and by what percent.' }
    ],
    useCases: [
      'Calculating month-over-month revenue growth for a business.',
      'Tracking percentage gains or losses in a stock portfolio.',
      'Finding the percentage markup on retail products.'
    ],
    relatedTools: [
      { href: '/tools/percentage-calculator', name: 'Percentage Calculator', description: 'General percentage math.' }
    ]
  },

  // --- QR CODE GENERATOR ---
  {
    path: 'app/tools/qr-code-generator/url-qr-code-generator',
    title: 'URL QR Code Generator – Create QR Codes for Links',
    description: 'Generate high-quality QR codes for any URL or website link. Free, private, and customizable browser-based QR generator.',
    h1: 'URL QR Code Generator',
    p1: 'Quickly create a scannable QR code for your website, social media profile, or YouTube video. Works instantly without server uploads.',
    schemaCategory: 'WebApplication',
    componentImport: `import { QrCodeGenerator } from '@/components/tools/QrCodeGenerator';`,
    componentRender: `<QrCodeGenerator />`,
    steps: [
      { step: 'Paste Link', description: 'Type or paste the full URL (including https://) into the text box.' },
      { step: 'Customize Color', description: 'Change the foreground and background colors to match your brand.' },
      { step: 'Download Image', description: 'Save the generated QR code as a high-resolution PNG image.' }
    ],
    useCases: [
      'Creating a QR code for a restaurant menu link.',
      'Putting a scannable link to a portfolio on a printed resume.',
      'Generating a quick link to a promotional landing page for flyers.'
    ],
    relatedTools: [
      { href: '/tools/qr-code-generator/wifi-qr-code-generator', name: 'WiFi QR Code Generator', description: 'Create QR codes to share WiFi.' }
    ]
  },
  {
    path: 'app/tools/qr-code-generator/wifi-qr-code-generator',
    title: 'WiFi QR Code Generator – Share Network Access Easily',
    description: 'Create a QR code that automatically connects guests to your WiFi network when scanned. Free and secure browser-based tool.',
    h1: 'WiFi QR Code Generator',
    p1: 'Stop giving out your long WiFi password. Generate a secure QR code that your guests can scan to connect instantly.',
    schemaCategory: 'WebApplication',
    componentImport: `import { QrCodeGenerator } from '@/components/tools/QrCodeGenerator';`,
    componentRender: `<QrCodeGenerator />`,
    steps: [
      { step: 'Format Text', description: 'Format your WiFi details as: WIFI:S:NetworkName;T:WPA;P:Password;;' },
      { step: 'Generate Code', description: 'The tool will instantly generate the connection QR code.' },
      { step: 'Print and Share', description: 'Download and print the QR code to place in your home or cafe.' }
    ],
    useCases: [
      'Creating a convenient WiFi access point for a cafe or restaurant.',
      'Setting up a guest network sign-in card for your home.',
      'Providing quick internet access in a corporate waiting room.'
    ],
    relatedTools: [
      { href: '/tools/password-generator', name: 'Password Generator', description: 'Create a strong WiFi password.' }
    ]
  },

  // --- TEXT REPEATER ---
  {
    path: 'app/tools/text-repeater/word-repeater',
    title: 'Word Repeater – Repeat Words Multiple Times Online',
    description: 'Repeat a specific word or phrase up to 10,000 times instantly. Free online text multiplier tool for copy-pasting.',
    h1: 'Word Repeater Online',
    p1: 'Need to repeat a word thousands of times? Our tool multiplies your text instantly without crashing your browser.',
    schemaCategory: 'WebApplication',
    componentImport: `import { TextRepeater } from '@/components/tools/TextRepeater';`,
    componentRender: `<TextRepeater />`,
    steps: [
      { step: 'Enter Word', description: 'Type the word or phrase you want to repeat.' },
      { step: 'Set Count', description: 'Specify how many times you want the word to be duplicated.' },
      { step: 'Copy Text', description: 'Click repeat and copy the massive block of text.' }
    ],
    useCases: [
      'Generating dummy text for design mockups.',
      'Creating a massive text file for load-testing an application.',
      'Spamming repeated phrases in game chats (where allowed).'
    ],
    relatedTools: [
      { href: '/tools/lorem-ipsum-generator', name: 'Lorem Ipsum Generator', description: 'Generate random placeholder text.' }
    ]
  },
  
  // --- REMOVE EXTRA SPACES ---
  {
    path: 'app/tools/remove-extra-spaces/space-remover',
    title: 'Extra Space Remover – Clean Up Formatting Online',
    description: 'Remove double spaces, trailing spaces, and unwanted tabs from your text. Clean up messy copy-pasted content instantly.',
    h1: 'Extra Space Remover',
    p1: 'Fix formatting errors by automatically stripping out double spaces and unnecessary whitespace. Perfect for cleaning up PDF copies.',
    schemaCategory: 'WebApplication',
    componentImport: `import { RemoveExtraSpaces } from '@/components/tools/RemoveExtraSpaces';`,
    componentRender: `<RemoveExtraSpaces />`,
    steps: [
      { step: 'Paste Text', description: 'Input your poorly formatted text.' },
      { step: 'Clean Whitespace', description: 'Click the button to collapse multiple spaces into single spaces.' },
      { step: 'Copy Cleaned Text', description: 'Retrieve your perfectly formatted document.' }
    ],
    useCases: [
      'Cleaning up text copied from a poorly formatted PDF.',
      'Fixing double-spacing errors before publishing a blog post.',
      'Normalizing user input data before saving it to a database.'
    ],
    relatedTools: [
      { href: '/tools/find-and-replace', name: 'Find and Replace', description: 'Replace specific words in your text.' }
    ]
  },

  // --- FIND AND REPLACE ---
  {
    path: 'app/tools/find-and-replace/text-replacer',
    title: 'Text Replacer – Find and Replace Words Online',
    description: 'Easily find and replace words, phrases, or characters in your text online. Supports case-sensitive matching and regex.',
    h1: 'Online Text Replacer',
    p1: 'Swap out specific words in a large document instantly. Use regular expressions for advanced text manipulation right in your browser.',
    schemaCategory: 'WebApplication',
    componentImport: `import { FindAndReplace } from '@/components/tools/FindAndReplace';`,
    componentRender: `<FindAndReplace />`,
    steps: [
      { step: 'Input Document', description: 'Paste the large text you want to edit.' },
      { step: 'Find Word', description: 'Enter the target word you want to locate.' },
      { step: 'Replace All', description: 'Enter the replacement word and click Replace All.' }
    ],
    useCases: [
      'Changing a character name throughout an entire story draft.',
      'Updating an outdated company name in a legal privacy policy.',
      'Swapping specific code snippets across a long file.'
    ],
    relatedTools: [
      { href: '/tools/remove-extra-spaces', name: 'Remove Extra Spaces', description: 'Clean up whitespace formatting.' }
    ]
  },

  // --- TIMESTAMP CONVERTER ---
  {
    path: 'app/tools/timestamp-converter/unix-epoch-converter',
    title: 'Unix Epoch Converter – Convert Timestamp to Date',
    description: 'Convert Unix epoch timestamps to human-readable dates and vice-versa. Free tool for developers dealing with server times.',
    h1: 'Unix Epoch Converter',
    p1: 'Quickly translate standard 10-digit or 13-digit Unix timestamps into your local timezone. A must-have tool for debugging API dates.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { TimestampConverter } from '@/components/tools/TimestampConverter';`,
    componentRender: `<TimestampConverter />`,
    steps: [
      { step: 'Enter Epoch', description: 'Paste the Unix timestamp (seconds or milliseconds).' },
      { step: 'View Date', description: 'The tool instantly parses it into GMT and your local timezone.' },
      { step: 'Format Date', description: 'Copy the human-readable date string.' }
    ],
    useCases: [
      'Debugging database records that store time as integers.',
      'Verifying the expiration time of a JWT token.',
      'Translating server logs into a readable format.'
    ],
    relatedTools: [
      { href: '/tools/timestamp-converter', name: 'Timestamp Converter', description: 'General date and time tools.' }
    ]
  },

  // --- CODE FORMATTERS ---
  {
    path: 'app/tools/javascript-formatter/js-minifier',
    title: 'JS Minifier – Compress JavaScript Code Online',
    description: 'Minify and compress your JavaScript code. Remove whitespace and comments to reduce file size and improve website load times.',
    h1: 'JavaScript Minifier',
    p1: 'Optimize your JS code for production by stripping out all unnecessary characters without changing how it runs.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { JsFormatter } from '@/components/tools/JsFormatter';`,
    componentRender: `<JsFormatter />`,
    steps: [
      { step: 'Paste JS', description: 'Input your raw JavaScript code.' },
      { step: 'Minify', description: 'Click minify to collapse the code into a single lightweight string.' },
      { step: 'Copy Code', description: 'Copy the compressed output for production use.' }
    ],
    useCases: [
      'Reducing the file size of JavaScript libraries before deployment.',
      'Obfuscating basic logic to make it slightly harder to read.',
      'Improving website performance scores by serving smaller assets.'
    ],
    relatedTools: [
      { href: '/tools/javascript-formatter', name: 'JavaScript Formatter', description: 'Beautify minified JS code.' },
      { href: '/tools/css-formatter', name: 'CSS Formatter', description: 'Minify and format CSS.' }
    ]
  },
  {
    path: 'app/tools/html-formatter/html-beautifier',
    title: 'HTML Beautifier – Format and Indent HTML Code',
    description: 'Format, indent, and beautify messy HTML code. Free online tool to make your web code readable and well-structured.',
    h1: 'HTML Beautifier Online',
    p1: 'Turn unreadable, minified HTML into a beautifully indented document. Easy to use tool for web developers and designers.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { HtmlFormatter } from '@/components/tools/HtmlFormatter';`,
    componentRender: `<HtmlFormatter />`,
    steps: [
      { step: 'Paste HTML', description: 'Input your messy or minified HTML string.' },
      { step: 'Beautify', description: 'Click format to automatically add correct indentation and line breaks.' },
      { step: 'Copy Result', description: 'Copy the clean code to your editor.' }
    ],
    useCases: [
      'Making scraped HTML content from websites readable.',
      'Formatting inline HTML strings found inside JavaScript templates.',
      'Cleaning up code generated by WYSIWYG editors.'
    ],
    relatedTools: [
      { href: '/tools/css-formatter', name: 'CSS Formatter', description: 'Beautify CSS stylesheets.' }
    ]
  },
  {
    path: 'app/tools/css-formatter/css-minifier',
    title: 'CSS Minifier – Compress CSS Stylesheets Online',
    description: 'Minify CSS code by removing spaces, line breaks, and comments. Optimize your website performance with smaller stylesheets.',
    h1: 'CSS Minifier Online',
    p1: 'Compress your CSS before pushing to production. Our tool safely removes unnecessary characters to save bandwidth.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { CssFormatter } from '@/components/tools/CssFormatter';`,
    componentRender: `<CssFormatter />`,
    steps: [
      { step: 'Paste CSS', description: 'Input your formatted stylesheet.' },
      { step: 'Minify', description: 'Click the minify button to compress the text.' },
      { step: 'Download', description: 'Copy the single-line CSS output.' }
    ],
    useCases: [
      'Optimizing CSS payload size for faster First Contentful Paint.',
      'Minifying small inline style blocks.',
      'Preparing theme files for distribution.'
    ],
    relatedTools: [
      { href: '/tools/css-formatter', name: 'CSS Formatter', description: 'Format and beautify CSS.' }
    ]
  },

  // --- MARKDOWN PREVIEWER ---
  {
    path: 'app/tools/markdown-previewer/markdown-to-html',
    title: 'Markdown to HTML Converter – Convert MD to HTML Online',
    description: 'Live Markdown to HTML converter. Type markdown syntax and instantly see the raw HTML equivalent and visual preview.',
    h1: 'Markdown to HTML Converter',
    p1: 'Easily write in Markdown and export clean HTML code. Perfect for writing blog posts, documentation, and README files.',
    schemaCategory: 'DeveloperApplication',
    componentImport: `import { MarkdownPreviewer } from '@/components/tools/MarkdownPreviewer';`,
    componentRender: `<MarkdownPreviewer />`,
    steps: [
      { step: 'Write Markdown', description: 'Type or paste your Markdown text into the left editor.' },
      { step: 'View Live Preview', description: 'See the formatted document render instantly on the right.' },
      { step: 'Export HTML', description: 'Copy the generated HTML code to use on your website.' }
    ],
    useCases: [
      'Writing content for a CMS that only accepts HTML input.',
      'Testing GitHub README.md formatting before committing.',
      'Quickly drafting well-formatted documentation.'
    ],
    relatedTools: [
      { href: '/tools/html-formatter', name: 'HTML Formatter', description: 'Format the outputted HTML code.' }
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
