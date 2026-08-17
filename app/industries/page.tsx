import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { CTASection, GlassCard, SectionHeader } from "@/components/sections";
import { industries } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Industries | Solven Tech International Limited",
  description:
    "Solven Tech supports financial services, agriculture and trade, government, institutions, SMEs, education, and smart device initiatives.",
};

export default function IndustriesPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-44 sm:px-8 lg:pb-28 lg:pt-36">
        <SectionHeader
          eyebrow="Industries"
          title="Digital systems for organizations that need trust, clarity, and scale."
          description="Solven Tech works from a practical understanding of emerging markets, online-first operations, institutional needs, and business growth."
        />
        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <GlassCard className="min-h-[240px]" key={industry.title}>
                <Icon className="h-7 w-7 text-accent-300" />
                <h2 className="mt-6 text-xl font-semibold">{industry.title}</h2>
                <p className="mt-4 leading-7 text-silver-300">{industry.text}</p>
              </GlassCard>
            );
          })}
        </div>
      </section>
      <CTASection />
      <SiteFooter />
    </main>
  );
}
