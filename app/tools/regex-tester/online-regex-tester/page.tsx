import type { Metadata } from 'next';
import { RegexTester } from '@/components/tools/RegexTester';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Online Regex Tester – Test Regular Expressions Free',
  description: "Write, test, and debug regular expressions online. Real-time highlighting and matching for JavaScript regex.",
  alternates: { canonical: 'https://tools2do.com/tools/regex-tester/online-regex-tester' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Online Regex Tester","description":"Write, test, and debug regular expressions online. Real-time highlighting and matching for JavaScript regex.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/regex-tester/online-regex-tester"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Online Regex Tester</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">A fast, developer-friendly tool to test and debug complex regular expressions against target text securely in your browser.</p>
      </div>
      <RegexTester />
      <ToolInfoSection
        howToSteps={[{ step: "Write Regex", description: "Enter your regular expression pattern." }, { step: "Add Test Text", description: "Paste the string you want to search." }, { step: "View Matches", description: "See real-time highlights of where the pattern matched successfully." }]}
        useCases={["Debugging complicated email or phone number validation logic.", "Testing extraction patterns for web scraping scripts.", "Learning how specific regex modifiers (like global or multiline) affect matches."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/find-and-replace', name: 'Find and Replace', description: "Use Regex to replace text." }]}
      />
    </>
  );
}