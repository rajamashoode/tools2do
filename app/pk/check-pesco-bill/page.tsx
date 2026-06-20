import type { Metadata } from 'next';
import { BillChecker } from '@/components/tools/BillChecker';

export function generateMetadata(): Metadata {
  return {
    title: 'PESCO Bill Checker Online – 14-Digit Reference Number',
    description: 'PESCO bill check online. Enter your 14-digit reference number for Peshawar and surrounding areas. Fast mobile-friendly helper.',
    openGraph: { title: 'PESCO Bill Checker Online', url: 'https://tools2do.com/pk/check-pesco-bill', type: 'website' },
    alternates: { canonical: 'https://tools2do.com/pk/check-pesco-bill' },
  };
}

const jsonLd = {'@context': 'https://schema.org', '@graph': [{'@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'PESCO bill check online kaise karein?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'PESCO consumers billing validation details check-in parameters 14-digit meter reference configurations run check execute options run follow updates use process. Peshawar, Mardan, Swat, Bannu aur Hazara regions covers key utilities check verify updates.'}} ,{'@type': 'Question', 'name': 'PESCO connection category rules differences checks guidelines details kya hain?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Domestic tariff structures commercial standard industrial settings parameters options limit ranges calculations brackets variables define rules run verify criteria apply rules update indicators use records.'}} ,{'@type': 'Question', 'name': 'PESCO customer helpline services telephone contacts location kya hai?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'PESCO head offices Shami Road, Peshawar based active support coordinates base line telephone numbers (091) 9212010 ya toll services complaint registration dial 118 active state guidelines standard utilize checks.'}} ,{'@type': 'Question', 'name': 'PESCO monthly billings update dates notification cycle updates kab follow hoti hain?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Weekly calendar distribution target records meters check updates database entries typical schedule load details 4th week month verify profile updates check target records display check.'}} ]}, {'@type': 'WebApplication', 'name': 'PESCO Bill Checker', 'applicationCategory': 'UtilityApplication', 'operatingSystem': 'Web Browser', 'offers': {'@type': 'Offer', 'price': '0', 'priceCurrency': 'PKR'}, 'url': 'https://tools2do.com/pk/check-pesco-bill'}, {'@type': 'BreadcrumbList', 'itemListElement': [{'@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://tools2do.com'}, {'@type': 'ListItem', 'position': 2, 'name': 'Pakistan Utilities', 'item': 'https://tools2do.com/pk'}, {'@type': 'ListItem', 'position': 3, 'name': 'PESCO Bill Checker', 'item': 'https://tools2do.com/pk/check-pesco-bill'}]}]};

const faqItems = (jsonLd['@graph'][0] as any).mainEntity;

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="check_pesco_bill-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">PESCO Bill Checker – Peshawar Electric Supply Company</h1>
        <p className="mt-4 max-w-3xl leading-7 text-[var(--text-secondary)]">Validate your PESCO reference number format and access the official bill portal for Peshawar region. Fast, mobile-friendly, no data stored.</p>
        <div className="mt-8">
          <BillChecker utility={{
            shortName: 'PESCO',
            fullName: 'Peshawar Electric Supply Company',
            city: 'Peshawar',
            officialUrl: 'https://bill.pitc.com.pk/pescobill',
          }} />
        </div>
        <section className="mt-10 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6">
          <h2 className="text-[length:var(--text-h2)] font-bold">PESCO Bill Check کیسے کریں؟</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-[var(--text-secondary)]">
            <li>Apna <strong>14-digit Reference Number</strong> purane bill ke top section se copy karein.</li>
            <li>Upar input field mein enter karein aur <strong>Validate</strong> press karein.</li>
            <li>Format correct hone par <strong>official PESCO portal ka link</strong> appear hoga.</li>
            <li>Official portal par actual bill amount aur due date check karein.</li>
          </ol>
        </section>
        <section className="mt-10">
          <h2 className="text-[length:var(--text-h2)] font-bold">Frequently Asked Questions</h2>
          <div className="mt-4 grid gap-4">
            {faqItems.map((item: any) => (
              <details key={item.name} className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4">
                <summary className="cursor-pointer font-bold">{item.name}</summary>
                <p className="mt-3 text-[var(--text-secondary)]">{item.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
