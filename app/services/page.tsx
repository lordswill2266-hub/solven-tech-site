import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { CTASection, GlassCard, SectionHeader } from "@/components/sections";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services | Solven Tech International Limited",
  description:
    "Explore Solven Tech services across software development, AI automation, fintech, IoT, cloud platforms, systems integration, and digital transformation.",
};

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-44 sm:px-8 lg:pb-28 lg:pt-36">
        <SectionHeader
          eyebrow="Services"
          title="Secure digital capabilities for modern organizations."
          description="Solven Tech designs and builds practical systems across software, AI, payments, connected devices, cloud platforms, data, and digital business operations."
        />
        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <GlassCard className="flex min-h-[330px] flex-col" key={service.slug}>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-accent-300/35 bg-accent-500/12">
                  <Icon className="h-6 w-6 text-accent-300" />
                </div>
                <h2 className="mt-6 text-xl font-semibold">{service.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-7 text-silver-300">{service.summary}</p>
                <Link className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-300 transition hover:text-white" href={`/services/${service.slug}`}>
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
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
