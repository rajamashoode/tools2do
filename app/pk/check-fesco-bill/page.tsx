import type { Metadata } from 'next';
import Script from 'next/script';
import { BillChecker } from '@/components/tools/BillChecker';

export function generateMetadata(): Metadata {
  return {
    title: 'FESCO Bill Checker Online – 14-Digit Reference Number | Tools2Do',
    description: 'FESCO bill check online. Enter your 14-digit reference number for Faisalabad and surrounding areas. Fast mobile-friendly helper.',
    openGraph: { title: 'FESCO Bill Checker Online | Tools2Do', url: 'https://tools2do.com/pk/check-fesco-bill', type: 'website' },
    alternates: { canonical: 'https://tools2do.com/pk/check-fesco-bill' },
  };
}

const jsonLd = {'@context':'https://schema.org','@graph':[
  {'@type':'FAQPage','mainEntity':[
    {'@type':'Question','name':'FESCO bill check online kaise karo?','acceptedAnswer':{'@type':'Answer','text':'FESCO bill check ke liye apna 14-digit Reference Number enter karein. Live bill ke liye official FESCO portal use karein.'}},
    {'@type':'Question','name':'14-digit FESCO reference number kahan milta hai?','acceptedAnswer':{'@type':'Answer','text':'Reference number purane bill ke top section mein hota hai. Consumer ID se alag hota hai — bill par printed number copy karein.'}},
    {'@type':'Question','name':'FESCO duplicate bill download kaise karein?','acceptedAnswer':{'@type':'Answer','text':'Official FESCO portal par reference number enter karein. Wahan print ya download browser ke PDF option se ho sakta hai.'}},
    {'@type':'Question','name':'FESCO bill payment last date kya hoti hai?','acceptedAnswer':{'@type':'Answer','text':'Payment due date har bill par printed hoti hai. Late surcharge bachne ke liye due date se pehle payment karein.'}},
    {'@type':'Question','name':'FESCO bill ka unit rate kya hai?','acceptedAnswer':{'@type':'Answer','text':'FESCO unit rates NEPRA ke quarterly notifications ke mutabiq change hote hain. Current rates official FESCO website par dekh saktay hain.'}}
  ]},
  {'@type':'WebApplication','name':'FESCO Bill Checker','applicationCategory':'UtilityApplication','operatingSystem':'Web Browser','offers':{'@type':'Offer','price':'0','priceCurrency':'PKR'},'url':'https://tools2do.com/pk/check-fesco-bill'},
  {'@type':'BreadcrumbList','itemListElement':[
    {'@type':'ListItem','position':1,'name':'Home','item':'https://tools2do.com'},
    {'@type':'ListItem','position':2,'name':'Pakistan Utilities','item':'https://tools2do.com/pk'},
    {'@type':'ListItem','position':3,'name':'FESCO Bill Checker','item':'https://tools2do.com/pk/check-fesco-bill'}
  ]}
]};

const faqItems = (jsonLd['@graph'][0] as any).mainEntity;

export default function Page(): React.ReactElement {
  return (
    <>
      <Script id="check_fesco_bill-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">FESCO Bill Checker – Faisalabad Electric Supply Company</h1>
        <p className="mt-4 max-w-3xl leading-7 text-[var(--text-secondary)]">Validate your FESCO reference number format and access the official bill portal for Faisalabad region. Fast, mobile-friendly, no data stored.</p>
        <div className="mt-8">
          <BillChecker utility={{
            shortName: 'FESCO',
            fullName: 'Faisalabad Electric Supply Company',
            city: 'Faisalabad',
            officialUrl: 'https://bill.pitc.com.pk/fescobill',
          }} />
        </div>
        <section className="mt-10 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6">
          <h2 className="text-[length:var(--text-h2)] font-bold">FESCO Bill Check کیسے کریں؟</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-[var(--text-secondary)]">
            <li>Apna <strong>14-digit Reference Number</strong> purane bill ke top section se copy karein.</li>
            <li>Upar input field mein enter karein aur <strong>Validate</strong> press karein.</li>
            <li>Format correct hone par <strong>official FESCO portal ka link</strong> appear hoga.</li>
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
