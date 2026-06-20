import type { Metadata } from 'next';
import { BillChecker } from '@/components/tools/BillChecker';

export function generateMetadata(): Metadata {
  return {
    title: 'GEPCO Bill Checker Online – 14-Digit Reference Number',
    description: 'GEPCO bill check online. Enter your 14-digit reference number for Gujranwala and surrounding areas. Fast mobile-friendly helper.',
    openGraph: { title: 'GEPCO Bill Checker Online', url: 'https://tools2do.com/pk/check-gepco-bill', type: 'website' },
    alternates: { canonical: 'https://tools2do.com/pk/check-gepco-bill' },
  };
}

const jsonLd = {'@context': 'https://schema.org', '@graph': [{'@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'GEPCO bill check online kaise karein?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'GEPCO electricity bill validation check 14-digit unique reference identifier se trace hoti hai. Gujranwala, Sialkot, Gujarat aur Hafizabad region limits check parameters perform ho sakte hain.'}} ,{'@type': 'Question', 'name': 'GEPCO commercial aur industrial billing accounts details kahan dekhein?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'High-voltage industrial meters ya commercial connections check validation parameters standard domestic meters se differ karte hain. Inki official ledger print operations special query links verify kiye jate hain.'}} ,{'@type': 'Question', 'name': 'GEPCO corporate helpdesk location contact details kya hain?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'GEPCO headquarters Sialkot Road, Model Town Gujranwala par located hai. Billing errors verification help check customer complaints contact toll line (055) 9200507 hai.'}} ,{'@type': 'Question', 'name': 'GEPCO duplicate bills verify kaise hote hain?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Security barcode values print validation complete hone par official utility server direct authentication sheet provide karta hai, jo all banks/post office counters par acceptable hoti hai.'}} ]}, {'@type': 'WebApplication', 'name': 'GEPCO Bill Checker', 'applicationCategory': 'UtilityApplication', 'operatingSystem': 'Web Browser', 'offers': {'@type': 'Offer', 'price': '0', 'priceCurrency': 'PKR'}, 'url': 'https://tools2do.com/pk/check-gepco-bill'}, {'@type': 'BreadcrumbList', 'itemListElement': [{'@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://tools2do.com'}, {'@type': 'ListItem', 'position': 2, 'name': 'Pakistan Utilities', 'item': 'https://tools2do.com/pk'}, {'@type': 'ListItem', 'position': 3, 'name': 'GEPCO Bill Checker', 'item': 'https://tools2do.com/pk/check-gepco-bill'}]}]};

const faqItems = (jsonLd['@graph'][0] as any).mainEntity;

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="check_gepco_bill-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">GEPCO Bill Checker – Gujranwala Electric Power Company</h1>
        <p className="mt-4 max-w-3xl leading-7 text-[var(--text-secondary)]">Validate your GEPCO reference number format and access the official bill portal for Gujranwala region. Fast, mobile-friendly, no data stored.</p>
        <div className="mt-8">
          <BillChecker utility={{
            shortName: 'GEPCO',
            fullName: 'Gujranwala Electric Power Company',
            city: 'Gujranwala',
            officialUrl: 'https://bill.pitc.com.pk/gepcobill',
          }} />
        </div>
        <section className="mt-10 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6">
          <h2 className="text-[length:var(--text-h2)] font-bold">GEPCO Bill Check کیسے کریں؟</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-[var(--text-secondary)]">
            <li>Apna <strong>14-digit Reference Number</strong> purane bill ke top section se copy karein.</li>
            <li>Upar input field mein enter karein aur <strong>Validate</strong> press karein.</li>
            <li>Format correct hone par <strong>official GEPCO portal ka link</strong> appear hoga.</li>
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
