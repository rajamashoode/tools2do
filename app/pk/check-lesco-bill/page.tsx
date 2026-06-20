import type { Metadata } from 'next';
import { LescoBillChecker } from '@/components/tools/LescoBillChecker';

export function generateMetadata(): Metadata {
  return {
    title: 'LESCO Bill Check Online – Enter 14-Digit Reference Number',
    description: 'LESCO bill check online with 14-digit reference number. Fast duplicate bill helper for Lahore users, Consumer ID and CNIC guidance.',
    openGraph: { title: 'LESCO Bill Check Online – Enter 14-Digit Reference Number', description: 'LESCO bill check online with 14-digit reference number. Fast duplicate bill helper for Lahore users, Consumer ID and CNIC guidance.', images: ['/images/check-lesco-bill-og.png'], url: 'https://tools2do.com/pk/check-lesco-bill', type: 'website' },
    alternates: { canonical: 'https://tools2do.com/pk/check-lesco-bill', languages: { 'en-PK': 'https://tools2do.com/pk/check-lesco-bill', 'ur-PK': 'https://tools2do.com/pk/check-lesco-bill?lang=ur' } }
  };
}

const jsonLd = {'@context': 'https://schema.org', '@graph': [{'@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'LESCO bill check online kaise karein?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'LESCO bill check online karne ke liye apna 14-digit Reference Number enter karein. Lahore, Kasur, Okara, aur Sheikhupura divisions ke residential/commercial users is helper tool se billing details access kar sakte hain.'}} ,{'@type': 'Question', 'name': 'LESCO reference number aur consumer ID mein kya farq hai?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reference number 14 digits ka unique identifier hota hai jo online billing system use karta hai. Consumer ID 10-digit ki hoti hai jo banks aur mobile wallets (jaise Easypaisa/JazzCash) ke billing lists mein payment authentication ke liye required hoti hai.'}} ,{'@type': 'Question', 'name': 'LESCO helpline aur support numbers kya hain?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Electricity outage ya metering complaints ke liye LESCO customer service helpline 118 par call karein. LESCO Head Office Lahore ka contact number (042) 99204820 hai jahan general billing enquiries solve ki jati hain.'}} ,{'@type': 'Question', 'name': 'LESCO Light mobile app ke kya benefits hain?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'LESCO Light mobile application ke help se aap net metering inputs monitor kar sakte hain, electricity breakdown reports trace kar sakte hain, aur load-shedding schedules key indicators view kar sakte hain.'}} ]}, {'@type': 'WebApplication', 'name': 'LESCO Bill Checker', 'applicationCategory': 'UtilityApplication', 'operatingSystem': 'Web Browser', 'offers': {'@type': 'Offer', 'price': '0', 'priceCurrency': 'PKR'}, 'url': 'https://tools2do.com/pk/check-lesco-bill'}, {'@type': 'BreadcrumbList', 'itemListElement': [{'@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://tools2do.com'}, {'@type': 'ListItem', 'position': 2, 'name': 'Pakistan Utilities', 'item': 'https://tools2do.com/pk'}, {'@type': 'ListItem', 'position': 3, 'name': 'LESCO Bill Checker', 'item': 'https://tools2do.com/pk/check-lesco-bill'}]}]};

const faqItems = jsonLd['@graph'][0]?.mainEntity ?? [];

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="check-lesco-bill-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold">LESCO Online Bill Check – Lahore Electric Supply Company</h1>
        <p className="mt-4 max-w-3xl leading-7 text-[var(--text-secondary)]">Use this fast LESCO helper to validate your reference number format and understand the bill check process before opening the official portal.</p>
        <div className="mt-8"><LescoBillChecker utility={{ shortName: 'LESCO', fullName: 'Lahore Electric Supply Company', city: 'Lahore', officialUrl: 'https://bill.pitc.com.pk/lescobill' }} /></div>
        <section className="mt-10 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6"><h2 className="text-[length:var(--text-h2)] font-bold">LESCO Bill Check کیسے کریں؟ (Step-by-Step)</h2><ol className="mt-4 list-decimal space-y-3 pl-5 text-[var(--text-secondary)]"><li>Apna <strong>14-digit Reference Number</strong> purane bill ke top section se copy karein.</li><li>Agar portal Consumer ID maange to bill par printed <strong>Consumer ID</strong> use karein.</li><li>CNIC sirf relevant support ya verification flow mein use hota hai; bill reference field mein CNIC enter na karein.</li></ol></section>
        <section className="mt-10"><h2 className="text-[length:var(--text-h2)] font-bold">Frequently Asked Questions</h2><div className="mt-4 grid gap-4">{faqItems.map((item) => <details key={item.name} className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4"><summary className="cursor-pointer font-bold">{item.name}</summary><p className="mt-3 text-[var(--text-secondary)]">{item.acceptedAnswer.text}</p></details>)}</div></section>
      </article>
    </>
  );
}
