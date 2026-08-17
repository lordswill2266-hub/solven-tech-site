import type { Metadata } from "next";
import { Cpu, Workflow } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { CTASection, GlassCard, SectionHeader } from "@/components/sections";
import { products, projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects | Solven Tech International Limited",
  description:
    "Explore Solven Tech project experience and official product platforms currently in development.",
};

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-44 sm:px-8 lg:pb-28 lg:pt-36">
        <SectionHeader
          eyebrow="Projects"
          title="Practical experience across software, IoT, and embedded systems."
          description="This page highlights real project experience and product platforms in development without presenting prototypes as launched company products."
        />
        <div className="mt-16 grid gap-7 lg:grid-cols-3">
          {projects.map((project) => (
            <GlassCard className="min-h-[280px]" key={project.title}>
              <Cpu className="h-7 w-7 text-accent-300" />
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-silver-500">{project.type}</p>
              <h2 className="mt-4 text-xl font-semibold leading-8">{project.title}</h2>
              <p className="mt-4 leading-7 text-silver-300">{project.text}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="border-y border-silver-300/10 bg-navy-900/70 section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="In Development" title="Official Solven Tech product platforms." />
          <div className="mt-16 grid gap-7 lg:grid-cols-2">
            {products.map((product) => (
              <GlassCard className="min-h-[240px]" key={product.title}>
                <Workflow className="h-7 w-7 text-accent-300" />
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-silver-400">Coming Soon</p>
                <h2 className="mt-4 text-3xl font-semibold">{product.title}</h2>
                <p className="mt-4 leading-8 text-silver-300">{product.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
      <SiteFooter />
    </main>
  );
}
