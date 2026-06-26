export type BlogPost = {
  title: string;
  slug: string;
  href: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  keywords?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    title: "PTA Tax Abolished in Pakistan? Smartphone Regulatory Duty Update Explained",
    slug: "pta-tax-abolished-pakistan-smartphones-regulatory-duty-update",
    href: "/blog/pta-tax-abolished-pakistan-smartphones-regulatory-duty-update",
    excerpt:
      "A clear explanation of the latest PTA tax and smartphone regulatory duty update in Pakistan, what may change, and how users can estimate mobile registration cost.",
    category: "Pakistan Utilities",
    publishedAt: "2026-06-21",
    readTime: "6 min read",
    keywords: [
      "PTA tax abolished Pakistan",
      "PTA tax update Pakistan",
      "smartphone regulatory duty Pakistan",
      "PTA tax calculator Pakistan",
      "mobile phone tax Pakistan"
    ],
  },
  {
    title: "How to Compress Image to 100KB Online (Best Free Tool 2026, Fast, No Signup)",
    slug: "how-to-compress-image-to-100kb-online",
    href: "/blog/how-to-compress-image-to-100kb-online",
    excerpt: "Learn how to compress your images to 100KB online for free. A simple guide to reducing photo size for government forms and fast web uploads. Best free tool 2026, no signup, fast compression.",
    category: "Image Tools",
    publishedAt: new Date().toISOString().split('T')[0],
    readTime: "5 min read",
    keywords: ["compress image to 100KB", "reduce image size", "online image compressor", "compress photo for forms", "free image compression", "best free tool 2026", "fast", "no signup", "compress image fast"]
  },
  {
    title: "How to Reduce Photo Size for Government Forms in Pakistan",
    slug: "reduce-photo-size-government-forms-pakistan",
    href: "/blog/reduce-photo-size-government-forms-pakistan",
    excerpt: "Learn how to reduce photo size for Pakistani government forms, job applications, admission forms, and online portals using free Tools2Do image tools.",
    category: "Image Tools",
    publishedAt: new Date().toISOString().split('T')[0],
    readTime: "5 min read",
    keywords: ["reduce photo size for government forms Pakistan", "compress photo for government form", "reduce image size for online form Pakistan", "photo size reducer Pakistan", "compress image for CNIC form"]
  },
  {
    title: "JPG vs PNG vs WebP: Which Is Best for Compression?",
    slug: "jpg-vs-png-vs-webp-compression",
    href: "/blog/jpg-vs-png-vs-webp-compression",
    excerpt: "Compare JPG, PNG, and WebP for image compression. Learn which format is best for photos, transparent images, websites, forms, and small file sizes.",
    category: "Image Tools",
    publishedAt: new Date().toISOString().split('T')[0],
    readTime: "6 min read",
    keywords: ["JPG vs PNG vs WebP compression", "best image format for compression", "JPG vs PNG", "WebP vs JPG", "PNG vs WebP"]
  },
  {
    title: "How to Convert JPG to PDF Online | Best Free JPG to PDF Converter 2026",
    slug: "how-to-convert-jpg-to-pdf-online",
    href: "/blog/how-to-convert-jpg-to-pdf-online",
    excerpt: "Learn how to convert JPG images to PDF online for free. Combine one or multiple photos into a PDF using Tools2Do's browser-based JPG to PDF converter. Best free JPG to PDF converter 2026, fast, no watermark.",
    category: "PDF Tools",
    publishedAt: new Date().toISOString().split('T')[0],
    readTime: "4 min read",
    keywords: ["how to convert JPG to PDF online", "convert JPG to PDF", "JPG to PDF converter", "image to PDF converter", "photo to PDF", "best free JPG to PDF converter 2026", "fast JPG to PDF", "no watermark PDF"]
  },
  {
    title: "How to Merge PDF Files Online",
    slug: "how-to-merge-pdf-files-online",
    href: "/blog/how-to-merge-pdf-files-online",
    excerpt: "Learn how to merge PDF files online for free. Combine multiple PDFs into one document directly in your browser with Tools2Do.",
    category: "PDF Tools",
    publishedAt: new Date().toISOString().split('T')[0],
    readTime: "5 min read",
    keywords: ["how to merge PDF files online", "merge PDF online", "combine PDF files", "PDF merger", "merge PDFs free"]
  },
  {
    title: "How to Split PDF Pages Safely",
    slug: "how-to-split-pdf-pages-safely",
    href: "/blog/how-to-split-pdf-pages-safely",
    excerpt: "Learn how to split PDF pages safely, extract pages, and create smaller documents using free browser-based PDF tools on Tools2Do.",
    category: "PDF Tools",
    publishedAt: new Date().toISOString().split('T')[0],
    readTime: "5 min read",
    keywords: ["how to split PDF pages safely", "split PDF pages", "extract PDF pages", "split PDF online", "separate PDF pages"]
  },
  {
    title: "Best Free PDF Tools for Students and Office Work",
    slug: "best-free-pdf-tools-students-office-work",
    href: "/blog/best-free-pdf-tools-students-office-work",
    excerpt: "Explore free PDF tools for students, teachers, freelancers, and office users. Merge PDFs, split PDFs, convert images to PDF, and manage documents online.",
    category: "PDF Tools",
    publishedAt: new Date().toISOString().split('T')[0],
    readTime: "6 min read",
    keywords: ["best free PDF tools", "free PDF tools for students", "PDF tools for office work", "merge PDF online", "split PDF online"]
  },
  {
    title: "What Is JSON Formatting? (Best Free JSON Formatter Tool 2026)",
    slug: "what-is-json-formatting",
    href: "/blog/what-is-json-formatting",
    excerpt: "Learn what JSON formatting means, why developers use it, and how to make messy JSON readable with the free Tools2Do JSON formatter. Use the best free JSON formatter tool 2026.",
    category: "Developer Tools",
    publishedAt: new Date().toISOString().split('T')[0],
    readTime: "5 min read",
    keywords: ["what is JSON formatting", "JSON formatting", "format JSON", "JSON formatter", "JSON beautifier", "best free JSON formatter tool 2026", "JSON formatter online free", "fast JSON formatter"]
  },
  {
    title: "How to Fix Invalid JSON Errors",
    slug: "how-to-fix-invalid-json-errors",
    href: "/blog/how-to-fix-invalid-json-errors",
    excerpt: "Learn how to fix invalid JSON errors such as missing commas, quotes, brackets, and trailing commas. Use Tools2Do to format and inspect JSON online.",
    category: "Developer Tools",
    publishedAt: new Date().toISOString().split('T')[0],
    readTime: "6 min read",
    keywords: ["how to fix invalid JSON errors", "invalid JSON", "JSON error fixer", "JSON syntax error", "fix JSON online"]
  },
  {
    title: "JSON Formatter vs JSON Validator: What's the Difference?",
    slug: "json-formatter-vs-json-validator",
    href: "/blog/json-formatter-vs-json-validator",
    excerpt: "Understand the difference between a JSON formatter and a JSON validator. Learn when to beautify code and when to check for syntax errors online.",
    category: "Developer Tools",
    publishedAt: new Date().toISOString().split('T')[0],
    readTime: "5 min read",
    keywords: ["JSON formatter vs JSON validator", "JSON formatter", "JSON validator", "difference between format and validate JSON", "JSON beautifier"]
  },
  {
    title: "How to Check FESCO Bill Online Guide 2026",
    slug: "how-to-check-fesco-bill-online",
    href: "/blog/how-to-check-fesco-bill-online",
    excerpt: "Learn how to check your FESCO electricity bill online using your 14-digit reference number. A simple guide to finding your FESCO bill without hassle.",
    category: "Pakistan Utilities",
    publishedAt: new Date().toISOString().split('T')[0],
    readTime: "4 min read",
    keywords: ["how to check FESCO bill online", "FESCO online bill", "FESCO duplicate bill", "check FESCO bill by reference number", "Faisalabad electricity bill check"]
  },
  {
    title: "How to Find Your MEPCO Bill Reference Number",
    slug: "mepco-bill-reference-number-guide",
    href: "/blog/mepco-bill-reference-number-guide",
    excerpt: "Learn how to find your 14-digit MEPCO bill reference number to check your electricity bill online in Multan and South Punjab. Simple visual guide.",
    category: "Pakistan Utilities",
    publishedAt: new Date().toISOString().split('T')[0],
    readTime: "5 min read",
    keywords: ["MEPCO bill reference number", "find MEPCO reference number", "check MEPCO bill", "MEPCO online bill", "Multan electricity bill"]
  },
  {
    title: "How to Check BISP 8171 Payment Status Online 2026",
    slug: "how-to-check-bisp-8171-payment-status",
    href: "/blog/how-to-check-bisp-8171-payment-status",
    excerpt: "Learn how to check your BISP 8171 payment status safely. A guide on using the official 8171 web portal, CNIC verification, and avoiding scams.",
    category: "Pakistan Utilities",
    publishedAt: new Date().toISOString().split('T')[0],
    readTime: "6 min read",
    keywords: ["how to check BISP 8171 payment status", "BISP 8171 check online", "8171 web portal", "check ehsaas program money", "BISP CNIC check"]
  },
  {
    title: "How to Get LESCO Bill via SMS - Registration Guide",
    slug: "lesco-bill-sms-registration-guide",
    href: "/blog/lesco-bill-sms-registration-guide",
    excerpt: "Learn how to register your mobile number to get your LESCO bill via SMS. Never miss a due date with free monthly LESCO SMS alerts in Lahore.",
    category: "Pakistan Utilities",
    publishedAt: new Date().toISOString().split('T')[0],
    readTime: "4 min read",
    keywords: ["LESCO bill SMS", "get LESCO bill via SMS", "LESCO SMS registration", "LESCO bill on mobile", "check LESCO bill"]
  },
  {
    title: "Is It Safe to Check Electricity Bills Online in Pakistan? (100% Secure)",
    slug: "is-it-safe-to-check-bills-online-pakistan",
    href: "/blog/is-it-safe-to-check-bills-online-pakistan",
    excerpt: "Learn the safety risks of checking electricity bills online in Pakistan. How to avoid scam apps and use official portals safely for LESCO, MEPCO, and FESCO. 100% secure, check bill safely online.",
    category: "Pakistan Utilities",
    publishedAt: new Date().toISOString().split('T')[0],
    readTime: "5 min read",
    keywords: ["safe to check bills online Pakistan", "check electricity bill online", "avoid scam bill apps", "safe online bill checking", "Pakistan utility bills online", "100% secure check bill", "check bill safely online Pakistan"]
  }
];
