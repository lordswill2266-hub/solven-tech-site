import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Globe2, ShieldCheck } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { CTASection, GlassCard, SectionHeader } from "@/components/sections";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About | Solven Tech International Limited",
  description:
    "Learn about Solven Tech International Limited, a technology company building secure, scalable digital systems from Nigeria for emerging and global markets.",
};

const foundations = [
  {
    title: "Mission",
    text: "To design and deliver secure digital products that help organizations operate with confidence.",
    icon: ShieldCheck,
  },
  {
    title: "Vision",
    text: "To become a trusted international technology partner for scalable systems across emerging and global markets.",
    icon: Globe2,
  },
  {
    title: "Values",
    text: "Security, trust, practical innovation, disciplined delivery, and long-term partner thinking.",
    icon: BadgeCheck,
  },
];

export default function AboutPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-44 sm:px-8 lg:pb-28 lg:pt-36">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeader
            align="left"
            eyebrow="About"
            title="Secure, scalable technology for practical digital transformation."
            description="Solven Tech International Limited is a technology company focused on building modern digital systems for businesses, communities, institutions, and partners."
          />
          <GlassCard>
            <p className="text-lg leading-8 text-silver-300">
              Based in {company.location}, Solven Tech operates online-first while building a foundation for global technology partnerships. The company focuses on dependable software, AI automation, fintech architecture, IoT, embedded systems, and digital business systems.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary" href="/leadership">Leadership</Link>
              <Link className="btn-secondary" href="/contact">Contact</Link>
            </div>
          </GlassCard>
        </div>
      </section>
      <section className="border-y border-silver-300/10 bg-navy-900/70 section-pad">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-3">
          {foundations.map(({ title, text, icon: Icon }) => (
            <GlassCard className="min-h-[250px]" key={title}>
              <Icon className="h-7 w-7 text-accent-300" />
              <h2 className="mt-6 text-2xl font-semibold">{title}</h2>
              <p className="mt-4 leading-8 text-silver-300">{text}</p>
            </GlassCard>
          ))}
        </div>
      </section>
      <CTASection />
      <SiteFooter />
    </main>
  );
}
