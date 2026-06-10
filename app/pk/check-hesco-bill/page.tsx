import type { Metadata } from 'next';
import Script from 'next/script';
import { BillChecker } from '@/components/tools/BillChecker';

export function generateMetadata(): Metadata {
  return {
    title: 'HESCO Bill Checker Online – 14-Digit Reference Number | Tools2Do',
    description: 'HESCO bill check online. Enter your 14-digit reference number for Hyderabad and surrounding areas. Fast mobile-friendly helper.',
    openGraph: { title: 'HESCO Bill Checker Online | Tools2Do', url: 'https://tools2do.com/pk/check-hesco-bill', type: 'website' },
    alternates: { canonical: 'https://tools2do.com/pk/check-hesco-bill' },
  };
}

const jsonLd = {'@context':'https://schema.org','@graph':[
  {'@type':'FAQPage','mainEntity':[
    {'@type':'Question','name':'HESCO bill check online kaise karo?','acceptedAnswer':{'@type':'Answer','text':'HESCO bill check ke liye apna 14-digit Reference Number enter karein. Live bill ke liye official HESCO portal use karein.'}},
    {'@type':'Question','name':'14-digit HESCO reference number kahan milta hai?','acceptedAnswer':{'@type':'Answer','text':'Reference number purane bill ke top section mein hota hai. Consumer ID se alag hota hai — bill par printed number copy karein.'}},
    {'@type':'Question','name':'HESCO duplicate bill download kaise karein?','acceptedAnswer':{'@type':'Answer','text':'Official HESCO portal par reference number enter karein. Wahan print ya download browser ke PDF option se ho sakta hai.'}},
    {'@type':'Question','name':'HESCO bill payment last date kya hoti hai?','acceptedAnswer':{'@type':'Answer','text':'Payment due date har bill par printed hoti hai. Late surcharge bachne ke liye due date se pehle payment karein.'}},
    {'@type':'Question','name':'HESCO bill ka unit rate kya hai?','acceptedAnswer':{'@type':'Answer','text':'HESCO unit rates NEPRA ke quarterly notifications ke mutabiq change hote hain. Current rates official HESCO website par dekh saktay hain.'}}
  ]},
  {'@type':'WebApplication','name':'HESCO Bill Checker','applicationCategory':'UtilityApplication','operatingSystem':'Web Browser','offers':{'@type':'Offer','price':'0','priceCurrency':'PKR'},'url':'https://tools2do.com/pk/check-hesco-bill'},
  {'@type':'BreadcrumbList','itemListElement':[
    {'@type':'ListItem','position':1,'name':'Home','item':'https://tools2do.com'},
    {'@type':'ListItem','position':2,'name':'Pakistan Utilities','item':'https://tools2do.com/pk'},
    {'@type':'ListItem','position':3,'name':'HESCO Bill Checker','item':'https://tools2do.com/pk/check-hesco-bill'}
  ]}
]};

const faqItems = (jsonLd['@graph'][0] as any).mainEntity;

export default function Page(): React.ReactElement {
  return (
    <>
      <Script id="check_hesco_bill-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">HESCO Bill Checker – Hyderabad Electric Supply Company</h1>
        <p className="mt-4 max-w-3xl leading-7 text-[var(--text-secondary)]">Validate your HESCO reference number format and access the official bill portal for Hyderabad region. Fast, mobile-friendly, no data stored.</p>
        <div className="mt-8">
          <BillChecker utility={{
            shortName: 'HESCO',
            fullName: 'Hyderabad Electric Supply Company',
            city: 'Hyderabad',
            officialUrl: 'https://bill.pitc.com.pk/hescobill',
          }} />
        </div>
        <section className="mt-10 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6">
          <h2 className="text-[length:var(--text-h2)] font-bold">HESCO Bill Check کیسے کریں؟</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-[var(--text-secondary)]">
            <li>Apna <strong>14-digit Reference Number</strong> purane bill ke top section se copy karein.</li>
            <li>Upar input field mein enter karein aur <strong>Validate</strong> press karein.</li>
            <li>Format correct hone par <strong>official HESCO portal ka link</strong> appear hoga.</li>
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
