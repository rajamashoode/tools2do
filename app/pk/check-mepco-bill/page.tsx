import type { Metadata } from 'next';
import { LescoBillChecker } from '@/components/tools/LescoBillChecker';

export function generateMetadata(): Metadata {
  return {
    title: 'MEPCO Bill Check Online – Enter 14-Digit Reference Number',
    description: 'MEPCO bill check online helper for Multan users with 14-digit reference number, Consumer ID and duplicate bill steps.',
    openGraph: { title: 'MEPCO Bill Check Online – Enter 14-Digit Reference Number', description: 'MEPCO bill check online helper for Multan users with 14-digit reference number, Consumer ID and duplicate bill steps.', images: ['/images/check-mepco-bill-og.png'], url: 'https://tools2do.com/pk/check-mepco-bill', type: 'website' },
    alternates: { canonical: 'https://tools2do.com/pk/check-mepco-bill', languages: { 'en-PK': 'https://tools2do.com/pk/check-mepco-bill', 'ur-PK': 'https://tools2do.com/pk/check-mepco-bill?lang=ur' } }
  };
}

const jsonLd = {'@context': 'https://schema.org', '@graph': [{'@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'MEPCO bill check online kaise karein?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'MEPCO billing record verify karne ke liye 14-digit reference code use karein. Ye Multan division, Bahawalpur, Dera Ghazi Khan, Khanewal, aur Sahiwal key regions ke electric meters cover karta hai.'}} ,{'@type': 'Question', 'name': 'MEPCO bill SMS service kaise subscribe karein?', 'acceptedAnswer': {'@type': 'Answer', 'text': "Apne mobile se 'MEPCO<space>14-digit reference number' type karein aur 8118 par send karein. Aap ko monthly billing details SMS alerts ke zariye automatic deliver ho jayengi."}} ,{'@type': 'Question', 'name': 'MEPCO head office location aur helpline details kya hain?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'MEPCO headquarters Khanewal Road, Multan par based hai. Central billing operations complaint resolution ke liye inka specific helpline number (061) 9210334 ya general toll-free 118 hai.'}} ,{'@type': 'Question', 'name': 'MEPCO duplicate bill online PDF print options kya hain?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reference verification confirm hone ke baad, official server redirect use kar ke duplicate bill print preview load kiya ja sakta hai. Browser print commands se is page ko save as PDF file export kar sakte hain.'}} ]}, {'@type': 'WebApplication', 'name': 'MEPCO Bill Checker', 'applicationCategory': 'UtilityApplication', 'operatingSystem': 'Web Browser', 'offers': {'@type': 'Offer', 'price': '0', 'priceCurrency': 'PKR'}, 'url': 'https://tools2do.com/pk/check-mepco-bill'}, {'@type': 'BreadcrumbList', 'itemListElement': [{'@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://tools2do.com'}, {'@type': 'ListItem', 'position': 2, 'name': 'Pakistan Utilities', 'item': 'https://tools2do.com/pk'}, {'@type': 'ListItem', 'position': 3, 'name': 'MEPCO Bill Checker', 'item': 'https://tools2do.com/pk/check-mepco-bill'}]}]};

const faqItems = jsonLd['@graph'][0]?.mainEntity ?? [];

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="check-mepco-bill-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold">MEPCO Online Bill Check – Multan Electric Power Company</h1>
        <p className="mt-4 max-w-3xl leading-7 text-[var(--text-secondary)]">Use this fast MEPCO helper to validate your reference number format and understand the bill check process before opening the official portal.</p>
        <div className="mt-8"><LescoBillChecker utility={{ shortName: 'MEPCO', fullName: 'Multan Electric Power Company', city: 'Multan', officialUrl: 'https://bill.pitc.com.pk/mepcobill' }} /></div>
        <section className="mt-10 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6"><h2 className="text-[length:var(--text-h2)] font-bold">MEPCO Bill Check کیسے کریں؟ (Step-by-Step)</h2><ol className="mt-4 list-decimal space-y-3 pl-5 text-[var(--text-secondary)]"><li>Apna <strong>14-digit Reference Number</strong> purane bill ke top section se copy karein.</li><li>Agar portal Consumer ID maange to bill par printed <strong>Consumer ID</strong> use karein.</li><li>CNIC sirf relevant support ya verification flow mein use hota hai; bill reference field mein CNIC enter na karein.</li></ol></section>
        <section className="mt-10"><h2 className="text-[length:var(--text-h2)] font-bold">Frequently Asked Questions</h2><div className="mt-4 grid gap-4">{faqItems.map((item) => <details key={item.name} className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4"><summary className="cursor-pointer font-bold">{item.name}</summary><p className="mt-3 text-[var(--text-secondary)]">{item.acceptedAnswer.text}</p></details>)}</div></section>
      </article>
    </>
  );
}
