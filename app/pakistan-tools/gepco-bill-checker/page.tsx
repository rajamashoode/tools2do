import type { Metadata } from 'next';
import { LescoBillChecker } from '@/components/tools/LescoBillChecker';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'GEPCO Bill Checker – Check Gujranwala Electric Power Company Bill Online',
  description: "Easily check your GEPCO (Gujranwala Electric Power Company) electricity bill online. Enter your 14-digit reference number to safely view your bill status.",
  alternates: { canonical: 'https://tools2do.com/pakistan-tools/gepco-bill-checker' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"GEPCO Bill Checker","description":"Easily check your GEPCO (Gujranwala Electric Power Company) electricity bill online. Enter your 14-digit reference number to safely view your bill status.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"PKR"},"url":"https://tools2do.com/pakistan-tools/gepco-bill-checker"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">GEPCO Bill Checker</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">View and download your Gujranwala Electric Power Company electricity bill online. We securely redirect you to the official PITC portal.</p>
      </div>
      <LescoBillChecker utility={{ shortName: 'GEPCO', fullName: 'Gujranwala Electric Power Company', city: 'Gujranwala', officialUrl: 'https://bill.pitc.com.pk/gepcobill' }} />
      <ToolInfoSection
        howToSteps={[{ step: "Find Reference Number", description: "Locate the 14-digit reference number on your previous GEPCO bill." }, { step: "Enter Details", description: "Enter the 14-digit reference number into the input field." }, { step: "Check Bill", description: "Click the check button to be securely redirected to your official bill." }]}
        useCases={["Checking if your monthly GEPCO bill has been generated yet.", "Finding out your exact Gujranwala electricity bill amount.", "Retrieving a duplicate bill for printing and payment."]}
        privacyNote="Tools2Do is an independent utility and is not affiliated with the government. Data is retrieved from official public sources directly in your browser. We do not store your reference numbers or sensitive data."
      />
      <RelatedTools
        tools={[{ href: '/pakistan-tools/electricity-subsidy-calculator', name: 'Electricity Subsidy Calculator', description: "Check your electricity subsidy eligibility." }]}
      />
    </>
  );
}