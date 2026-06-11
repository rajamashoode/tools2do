import Script from 'next/script';
import { AdSlot } from '@/components/AdSlot';
import { BentoGrid } from '@/components/BentoGrid';
import { HeroSearchBar } from '@/components/HeroSearchBar';
import { GLOBAL_TOOLS } from '@/lib/tools-registry';

const homeFaqItems = [
  {
    question: 'Are Tools2Do tools free to use?',
    answer:
      'Yes. Tools2Do provides free browser-based utilities for developers, students, creators, and everyday users. No account signup is required for the public tools.',
  },
  {
    question: 'Do my files get uploaded to a server?',
    answer:
      'Most Tools2Do utilities run directly in your browser. For tools such as image, PDF, text, and developer utilities, files are processed locally where possible instead of being uploaded to a server.',
  },
  {
    question: 'What types of tools are available on Tools2Do?',
    answer:
      'Tools2Do includes developer tools, image tools, PDF tools, text utilities, calculators, converters, and Pakistan utility helpers such as bill-checking guides.',
  },
  {
    question: 'Is Tools2Do affiliated with government utility companies?',
    answer:
      'No. Tools2Do is an independent website. Pakistan utility pages provide helpful guidance and links to official portals, but final bill and program data remains with the relevant official provider.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function HomePage(): React.ReactElement {
  return (
    <>
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HeroSearchBar
        title="Free online tools that run instantly in your browser"
        subtitle="Developer utilities, image tools, converters, text helpers, and Pakistan utility guides — no signup, no server processing."
      />
      <AdSlot position="leaderboard" />
      <BentoGrid tools={GLOBAL_TOOLS} />

      <section className="mx-auto max-w-5xl px-4 py-12 md:px-6">
        <div className="rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-action)]">
            FAQ
          </p>
          <h2 className="mt-2 text-[length:var(--text-h2)] font-extrabold text-[var(--text-primary)]">
            Frequently Asked Questions
          </h2>

          <div className="mt-6 grid gap-4">
            {homeFaqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-canvas)] p-4"
              >
                <summary className="cursor-pointer font-bold text-[var(--text-primary)]">
                  {item.question}
                </summary>
                <p className="mt-3 leading-7 text-[var(--text-secondary)]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
