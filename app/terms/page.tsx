import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { GlassCard, SectionHeader } from "@/components/sections";

export const metadata: Metadata = {
  title: "Terms | Solven Tech International Limited",
  description: "Website terms for Solven Tech International Limited.",
};

export default function TermsPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-5 pb-20 pt-44 sm:px-8 lg:pb-28 lg:pt-36">
        <SectionHeader eyebrow="Terms" title="Website Terms" description="These terms apply to general website use and inquiry submissions." />
        <GlassCard className="mt-12">
          <div className="space-y-6 leading-8 text-silver-300">
            <p>The information on this website is provided for general company, service, and project inquiry purposes.</p>
            <p>Submitting a form does not create a binding agreement, project contract, or service commitment. Formal work requires written agreement and confirmed scope.</p>
            <p>Product descriptions marked as coming soon refer to platforms in development and should not be treated as launched public services.</p>
            <p>Website content may be updated as Solven Tech expands its operations, domain, official email, and service infrastructure.</p>
          </div>
        </GlassCard>
      </section>
      <SiteFooter />
    </main>
  );
}
