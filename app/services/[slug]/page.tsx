import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { CTASection, GlassCard, SectionHeader } from "@/components/sections";
import { services } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | Solven Tech International Limited`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-44 sm:px-8 lg:pb-28 lg:pt-36">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-md border border-silver-300/15 bg-white/5 px-4 py-2 text-sm font-medium text-accent-300">
              <Icon className="h-4 w-4" />
              Service
            </p>
            <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-silver-300">{service.summary}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary" href="/start-project">
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link className="btn-secondary" href="/consultation">
                Book Consultation
              </Link>
            </div>
          </div>
          <GlassCard className="min-h-[360px]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-300">
              What This Service Supports
            </p>
            <div className="mt-8 grid gap-4">
              {service.useCases.map((useCase) => (
                <div className="rounded-md border border-silver-300/12 bg-white/[0.04] px-4 py-4 font-semibold text-silver-200" key={useCase}>
                  {useCase}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="border-y border-silver-300/10 bg-navy-900/70 section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Capabilities" title="Designed for measurable business usefulness." />
          <div className="mt-16 grid gap-7 md:grid-cols-2">
            {service.outcomes.map((outcome) => (
              <GlassCard className="min-h-[150px]" key={outcome}>
                <CheckCircle2 className="h-5 w-5 text-accent-300" />
                <p className="mt-5 font-semibold leading-7 text-white">{outcome}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {[
            ["Discovery", "We clarify business goals, users, risks, existing systems, and launch priorities before choosing the technical path."],
            ["Architecture", "We design a system structure that supports security, scalability, maintainability, and practical delivery."],
            ["Delivery", "We build in focused phases with review points, testing, and clear communication until the product is ready to launch."],
          ].map(([title, text]) => (
            <GlassCard className="min-h-[230px]" key={title}>
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="mt-4 leading-8 text-silver-300">{text}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <CTASection title={`Discuss ${service.title}`} />
      <SiteFooter />
    </main>
  );
}
