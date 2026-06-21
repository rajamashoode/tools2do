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
];
