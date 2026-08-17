import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, Mail, MapPin, ShieldCheck, Wifi } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { CTASection, GlassCard, Reveal, SectionHeader, TechVisual } from "@/components/sections";
import { company, industries, processSteps, products, services, whySolven } from "@/lib/site-data";

export default function Home() {
  return (
    <main className="page-shell">
      <SiteHeader />

      <section
        id="home"
        className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-5 pb-24 pt-44 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-36"
      >
        <div className="relative z-10">
          <Reveal className="inline-flex items-center gap-2 rounded-md border border-silver-300/15 bg-white/5 px-4 py-2 text-sm font-medium text-accent-300">
            <ShieldCheck className="h-4 w-4" />
            {company.name}
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {company.tagline}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-silver-300 sm:text-xl">
              Building secure digital solutions for businesses, communities, and emerging markets through software, AI, fintech, IoT, and business systems.
            </p>
          </Reveal>
          <Reveal className="mt-10 flex flex-col gap-4 sm:flex-row" delay={0.24}>
            <Link href="/start-project" className="btn-primary">
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Solutions
            </Link>
            <Link href="/consultation" className="btn-secondary">
              Book Consultation
            </Link>
          </Reveal>
          <Reveal className="mt-12 grid max-w-3xl gap-3 sm:grid-cols-3" delay={0.32}>
            {["Secure architecture", "Scalable delivery", "Business-ready systems"].map((item) => (
              <div className="rounded-lg border border-silver-300/12 bg-white/[0.04] px-4 py-4 text-sm font-semibold text-silver-200" key={item}>
                {item}
              </div>
            ))}
          </Reveal>
        </div>
        <TechVisual />
      </section>

      <section className="border-y border-silver-300/10 bg-navy-900/70 px-5 py-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 text-center text-sm font-semibold text-silver-300 sm:grid-cols-2 lg:grid-cols-5">
          {["Software", "AI", "Fintech", "IoT", "Digital Systems"].map((label) => (
            <div className="rounded-md border border-silver-300/10 bg-white/[0.035] px-4 py-4" key={label}>
              {label}
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="About"
            title="A practical technology company for secure digital growth."
            description="Solven Tech International Limited builds secure, scalable, and modern digital systems for organizations that need dependable infrastructure, clear product thinking, and practical innovation."
          />
          <div className="mt-16 grid gap-7 lg:grid-cols-3">
            {[
              ["Mission", "To design and deliver secure digital products that help businesses, communities, and institutions operate with confidence."],
              ["Vision", "To become a trusted international technology partner for scalable, security-first systems across emerging and global markets."],
              ["Positioning", "Built in Nigeria, online-first, and prepared to serve partners across borders with disciplined execution."],
            ].map(([title, text]) => (
              <GlassCard className="min-h-[230px]" key={title}>
                <CheckCircle2 className="h-7 w-7 text-accent-300" />
                <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 leading-8 text-silver-300">{text}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="border-y border-silver-300/10 bg-navy-900/70 section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Solutions"
            title="Technology capabilities built for trust and scale."
            description="From websites and internal platforms to AI automation, fintech architecture, and embedded systems, Solven Tech focuses on practical systems that solve real business problems."
          />
          <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 9).map((service) => {
              const Icon = service.icon;
              return (
                <GlassCard key={service.slug} className="flex min-h-[300px] flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-accent-300/35 bg-accent-500/12">
                    <Icon className="h-6 w-6 text-accent-300" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-silver-300">{service.summary}</p>
                  <Link className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-300 transition hover:text-white" href={`/services/${service.slug}`}>
                    View service <ArrowRight className="h-4 w-4" />
                  </Link>
                </GlassCard>
              );
            })}
          </div>
          <Reveal className="mt-12 text-center">
            <Link className="btn-secondary" href="/services">
              View All Services
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <SectionHeader
            align="left"
            eyebrow="AI & Automation"
            title="Put AI to work inside your business."
            description="Solven Tech designs AI and automation around real workflows: support, records, reporting, document handling, operations, and decision support."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {["Workflow automation", "AI assistants", "Data and report generation", "Human-reviewed systems"].map((item) => (
              <GlassCard className="min-h-[150px]" key={item}>
                <CheckCircle2 className="h-5 w-5 text-accent-300" />
                <p className="mt-5 font-semibold text-white">{item}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-silver-300/10 bg-navy-900/70 section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="How We Work"
            title="Clear phases from idea to launch."
            description="Every engagement starts with understanding the business problem, then moves through architecture, delivery, testing, and ongoing improvement."
          />
          <div className="mt-16 grid gap-5 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <GlassCard className="min-h-[170px]" key={step}>
                <p className="text-sm font-semibold text-accent-300">0{index + 1}</p>
                <h3 className="mt-5 text-lg font-semibold leading-7">{step}</h3>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Industries" title="Built for institutions, businesses, and communities." />
          <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <GlassCard className="min-h-[220px]" key={industry.title}>
                  <Icon className="h-7 w-7 text-accent-300" />
                  <h3 className="mt-6 text-xl font-semibold">{industry.title}</h3>
                  <p className="mt-4 leading-7 text-silver-300">{industry.text}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section id="products" className="border-y border-silver-300/10 bg-navy-900/70 section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Products"
            title="Official product platforms in development."
            description="Solven Tech is developing secure products for digital payments, trade, and business transaction infrastructure."
          />
          <div className="mt-16 grid gap-7 lg:grid-cols-2">
            {products.map((product) => (
              <GlassCard className="relative min-h-[260px] overflow-hidden" key={product.title}>
                <div className="absolute right-6 top-6 rounded-md border border-silver-300/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-silver-300">
                  Coming Soon
                </div>
                <Building2 className="h-9 w-9 text-accent-300" />
                <h3 className="mt-8 text-3xl font-semibold">{product.title}</h3>
                <p className="mt-4 max-w-xl leading-8 text-silver-300">{product.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Why Choose Us" title="A partner mindset for critical digital work." />
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {whySolven.map((item) => {
              const Icon = item.icon;
              return (
                <GlassCard className="min-h-[170px]" key={item.title}>
                  <Icon className="h-5 w-5 text-accent-300" />
                  <p className="mt-5 font-semibold text-white">{item.title}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-silver-300/10 bg-navy-900/70 section-pad">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeader
            align="left"
            eyebrow="Contact"
            title="Let us discuss your digital infrastructure needs."
            description="Solven Tech is based in ATC Jalingo, Taraba State, Nigeria, with most current activities coordinated online for clients and partners."
          />
          <GlassCard>
            <div className="grid gap-4">
              <p className="flex items-center gap-3 rounded-lg border border-silver-300/12 bg-white/[0.04] px-5 py-4 text-silver-300">
                <MapPin className="h-5 w-5 text-accent-300" />
                {company.location}
              </p>
              <p className="flex items-center gap-3 rounded-lg border border-silver-300/12 bg-white/[0.04] px-5 py-4 text-silver-300">
                <Wifi className="h-5 w-5 text-accent-300" />
                {company.operations}
              </p>
              <p className="flex items-center gap-3 rounded-lg border border-silver-300/12 bg-white/[0.04] px-5 py-4 text-silver-300">
                <Mail className="h-5 w-5 text-accent-300" />
                {company.emailStatus}
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary" href="/contact">
                Send Message
              </Link>
              <Link className="btn-secondary" href="/start-project">
                Start a Project
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>

      <CTASection />
      <SiteFooter />
    </main>
  );
}
