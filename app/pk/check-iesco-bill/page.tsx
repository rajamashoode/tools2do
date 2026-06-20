import type { Metadata } from 'next';
import { LescoBillChecker } from '@/components/tools/LescoBillChecker';

export function generateMetadata(): Metadata {
  return {
    title: 'IESCO Bill Check Online – Enter 14-Digit Reference Number',
    description: 'IESCO bill check online helper for Islamabad and Rawalpindi users with reference number and duplicate bill guidance.',
    openGraph: { title: 'IESCO Bill Check Online – Enter 14-Digit Reference Number', description: 'IESCO bill check online helper for Islamabad and Rawalpindi users with reference number and duplicate bill guidance.', images: ['/images/check-iesco-bill-og.png'], url: 'https://tools2do.com/pk/check-iesco-bill', type: 'website' },
    alternates: { canonical: 'https://tools2do.com/pk/check-iesco-bill', languages: { 'en-PK': 'https://tools2do.com/pk/check-iesco-bill', 'ur-PK': 'https://tools2do.com/pk/check-iesco-bill?lang=ur' } }
  };
}

const jsonLd = {'@context': 'https://schema.org', '@graph': [{'@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'IESCO bill check online kaise karein?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'IESCO bill portal update check-in ke liye 14-digit consumer reference code paste karein. Islamabad, Rawalpindi, Attock, Chakwal, aur Jhelum consumer database query parameters resolve kiye jate hain.'}} ,{'@type': 'Question', 'name': 'IESCO Net Metering solar bill records kaise check karein?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Net metering consumers ke bills mein import/export units dynamic summary layout blocks contain karte hain jo monthly calculations report balance sheet form mein show karte hain.'}} ,{'@type': 'Question', 'name': 'IESCO complaint head office support location kya hai?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'IESCO Head Office Sector G-7/4, Street 40, Islamabad par active hai. Meter changes, errors ya load-shedding reports ke liye inki central assistance helpline (051) 9252937 par call karein.'}} ,{'@type': 'Question', 'name': 'IESCO billing tariff rates check kaise karein?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Residential, commercial, aur industrial consumers ke applicable base units rates NEPRA tariff notifications ke mutabiq load kiye jate hain, jinhe IESCO duplicate billing sheets ke reverse details check kiya ja sakta hai.'}} ]}, {'@type': 'WebApplication', 'name': 'IESCO Bill Checker', 'applicationCategory': 'UtilityApplication', 'operatingSystem': 'Web Browser', 'offers': {'@type': 'Offer', 'price': '0', 'priceCurrency': 'PKR'}, 'url': 'https://tools2do.com/pk/check-iesco-bill'}, {'@type': 'BreadcrumbList', 'itemListElement': [{'@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://tools2do.com'}, {'@type': 'ListItem', 'position': 2, 'name': 'Pakistan Utilities', 'item': 'https://tools2do.com/pk'}, {'@type': 'ListItem', 'position': 3, 'name': 'IESCO Bill Checker', 'item': 'https://tools2do.com/pk/check-iesco-bill'}]}]};

const faqItems = jsonLd['@graph'][0]?.mainEntity ?? [];

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="check-iesco-bill-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold">IESCO Online Bill Check – Islamabad Electric Supply Company</h1>
        <p className="mt-4 max-w-3xl leading-7 text-[var(--text-secondary)]">Use this fast IESCO helper to validate your reference number format and understand the bill check process before opening the official portal.</p>
        <div className="mt-8"><LescoBillChecker utility={{ shortName: 'IESCO', fullName: 'Islamabad Electric Supply Company', city: 'Islamabad', officialUrl: 'https://bill.pitc.com.pk/iescobill' }} /></div>
        <section className="mt-10 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6"><h2 className="text-[length:var(--text-h2)] font-bold">IESCO Bill Check کیسے کریں؟ (Step-by-Step)</h2><ol className="mt-4 list-decimal space-y-3 pl-5 text-[var(--text-secondary)]"><li>Apna <strong>14-digit Reference Number</strong> purane bill ke top section se copy karein.</li><li>Agar portal Consumer ID maange to bill par printed <strong>Consumer ID</strong> use karein.</li><li>CNIC sirf relevant support ya verification flow mein use hota hai; bill reference field mein CNIC enter na karein.</li></ol></section>
        <section className="mt-10"><h2 className="text-[length:var(--text-h2)] font-bold">Frequently Asked Questions</h2><div className="mt-4 grid gap-4">{faqItems.map((item) => <details key={item.name} className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4"><summary className="cursor-pointer font-bold">{item.name}</summary><p className="mt-3 text-[var(--text-secondary)]">{item.acceptedAnswer.text}</p></details>)}</div></section>
      </article>
    </>
  );
}
