import type { Metadata } from 'next';
import Script from 'next/script';
import { LescoBillChecker } from '@/components/tools/LescoBillChecker';

export function generateMetadata(): Metadata {
  return {
    title: 'LESCO Bill Check Online – Enter 14-Digit Reference Number | Tools2Do',
    description: 'LESCO bill check online with 14-digit reference number. Fast duplicate bill helper for Lahore users, Consumer ID and CNIC guidance.',
    openGraph: { title: 'LESCO Bill Check Online – Enter 14-Digit Reference Number | Tools2Do', description: 'LESCO bill check online with 14-digit reference number. Fast duplicate bill helper for Lahore users, Consumer ID and CNIC guidance.', images: ['/images/check-lesco-bill-og.png'], url: 'https://tools2do.com/pk/check-lesco-bill', type: 'website' },
    alternates: { canonical: 'https://tools2do.com/pk/check-lesco-bill', languages: { 'en-PK': 'https://tools2do.com/pk/check-lesco-bill', 'ur-PK': 'https://tools2do.com/pk/check-lesco-bill?lang=ur' } }
  };
}

const jsonLd = {'@context': 'https://schema.org', '@graph': [{'@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'LESCO bill check online kaise karo?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'LESCO bill check online ke liye apna 14-digit Reference Number enter karein aur submit press karein. Live duplicate bill ke liye official LESCO portal use karein, kyun ke final billing data utility company ke server par hota hai.'}}, {'@type': 'Question', 'name': '14-digit LESCO reference number kahan milta hai?', 'acceptedAnswer': {'@type': 'Answer', 'text': '14-digit reference number aap ke purane electricity bill ke top section mein hota hai. Ye Consumer ID ya CNIC se different ho sakta hai, is liye bill par printed Reference Number carefully copy karein.'}}, {'@type': 'Question', 'name': 'LESCO bill kitne din mein update hota hai?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'LESCO bill usually monthly billing cycle ke baad update hota hai. Agar naya bill show na ho to kuch time baad official portal dobara check karein.'}}, {'@type': 'Question', 'name': 'LESCO duplicate bill download kaise karein?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reference Number enter karne ke baad official duplicate bill page par bill open hota hai. Wahan print ya download option browser ke print dialog se PDF ke form mein save kiya ja sakta hai.'}}, {'@type': 'Question', 'name': 'LESCO bill payment last date kya hoti hai?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Payment last date har monthly bill par printed hoti hai. Late surcharge avoid karne ke liye due date se pehle bank, mobile wallet, ATM ya online banking se payment karein.'}}]}, {'@type': 'WebApplication', 'name': 'LESCO Bill Checker', 'applicationCategory': 'UtilityApplication', 'operatingSystem': 'Web Browser', 'offers': {'@type': 'Offer', 'price': '0', 'priceCurrency': 'PKR'}, 'url': 'https://tools2do.com/pk/check-lesco-bill'}, {'@type': 'BreadcrumbList', 'itemListElement': [{'@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://tools2do.com'}, {'@type': 'ListItem', 'position': 2, 'name': 'Pakistan Utilities', 'item': 'https://tools2do.com/pk'}, {'@type': 'ListItem', 'position': 3, 'name': 'LESCO Bill Checker', 'item': 'https://tools2do.com/pk/check-lesco-bill'}]}]};

const faqItems = jsonLd['@graph'][0]?.mainEntity ?? [];

export default function Page(): React.ReactElement {
  return (
    <>
      <Script id="check-lesco-bill-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
