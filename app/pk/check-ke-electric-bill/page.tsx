import type { Metadata } from 'next';
import { LescoBillChecker } from '@/components/tools/LescoBillChecker';

export function generateMetadata(): Metadata {
  return {
    title: 'K-Electric Bill Check Online – Enter Account Number',
    description: 'K-Electric bill check online helper for Karachi users with account number, reference guidance and duplicate bill steps.',
    openGraph: { title: 'K-Electric Bill Check Online – Enter Account Number', description: 'K-Electric bill check online helper for Karachi users with account number, reference guidance and duplicate bill steps.', images: ['/images/check-ke-electric-bill-og.png'], url: 'https://tools2do.com/pk/check-ke-electric-bill', type: 'website' },
    alternates: { canonical: 'https://tools2do.com/pk/check-ke-electric-bill', languages: { 'en-PK': 'https://tools2do.com/pk/check-ke-electric-bill', 'ur-PK': 'https://tools2do.com/pk/check-ke-electric-bill?lang=ur' } }
  };
}

const jsonLd = {'@context': 'https://schema.org', '@graph': [{'@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'K-Electric bill check online kaise karein?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'KE bill view verification ke liye apna 13-digit account number (ya 10-digit consumer code) enter karein. Karachi region, Hub, aur Uthal utility meters ke live billing sheets retrieve kiye ja sakte hain.'}} ,{'@type': 'Question', 'name': 'KE Live mobile app ke major features kya hain?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'KE Live application utility users ko load-shedding alert notifications details trace karne, payment history summaries review karne, aur instantly billing adjustments log tracking follow karne ki options provide karti hai.'}} ,{'@type': 'Question', 'name': 'K-Electric customer support head office location address kya hai?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'K-Electric corporate HQ DHA Phase II, Sunset Boulevard, Karachi par established hai. Power supply outages ya general payment complaints ke liye inka direct support line 118 or (021) 99000 hai.'}} ,{'@type': 'Question', 'name': 'Time of Use (ToU) metering units calculate kaise hote hain?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'KE smart meters peak hours (specific duration) aur off-peak hours rates different calculations structure logic display karte hain jo normal rates ke muqable extra units rate scale apply karti hain.'}} ]}, {'@type': 'WebApplication', 'name': 'K-Electric Bill Checker', 'applicationCategory': 'UtilityApplication', 'operatingSystem': 'Web Browser', 'offers': {'@type': 'Offer', 'price': '0', 'priceCurrency': 'PKR'}, 'url': 'https://tools2do.com/pk/check-ke-electric-bill'}, {'@type': 'BreadcrumbList', 'itemListElement': [{'@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://tools2do.com'}, {'@type': 'ListItem', 'position': 2, 'name': 'Pakistan Utilities', 'item': 'https://tools2do.com/pk'}, {'@type': 'ListItem', 'position': 3, 'name': 'K-Electric Bill Checker', 'item': 'https://tools2do.com/pk/check-ke-electric-bill'}]}]};

const faqItems = jsonLd['@graph'][0]?.mainEntity ?? [];

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="check-ke-electric-bill-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold">K-Electric Online Bill Check – K-Electric Karachi</h1>
        <p className="mt-4 max-w-3xl leading-7 text-[var(--text-secondary)]">Use this fast K-Electric helper to validate your reference number format and understand the bill check process before opening the official portal.</p>
        <div className="mt-8"><LescoBillChecker utility={{ shortName: 'K-Electric', fullName: 'K-Electric Karachi', city: 'Karachi', officialUrl: 'https://www.ke.com.pk/customer-services/bill-and-e-payment/' }} /></div>
        <section className="mt-10 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6"><h2 className="text-[length:var(--text-h2)] font-bold">K-Electric Bill Check کیسے کریں؟ (Step-by-Step)</h2><ol className="mt-4 list-decimal space-y-3 pl-5 text-[var(--text-secondary)]"><li>Apna <strong>14-digit Reference Number</strong> purane bill ke top section se copy karein.</li><li>Agar portal Consumer ID maange to bill par printed <strong>Consumer ID</strong> use karein.</li><li>CNIC sirf relevant support ya verification flow mein use hota hai; bill reference field mein CNIC enter na karein.</li></ol></section>
        <section className="mt-10"><h2 className="text-[length:var(--text-h2)] font-bold">Frequently Asked Questions</h2><div className="mt-4 grid gap-4">{faqItems.map((item) => <details key={item.name} className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4"><summary className="cursor-pointer font-bold">{item.name}</summary><p className="mt-3 text-[var(--text-secondary)]">{item.acceptedAnswer.text}</p></details>)}</div></section>
      </article>
    </>
  );
}
