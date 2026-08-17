import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { GlassCard, SectionHeader } from "@/components/sections";
import { company, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Start a Project | Solven Tech International Limited",
  description:
    "Start a software, AI, fintech, IoT, or digital business system project with Solven Tech International Limited.",
};

export default function StartProjectPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-44 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:pb-28 lg:pt-36">
        <SectionHeader
          align="left"
          eyebrow="Start a Project"
          title="Tell us what you want to build."
          description="Use this form for project briefs, MVPs, business platforms, AI workflows, fintech products, IoT systems, and digital transformation planning."
        />
        <GlassCard className="p-7 sm:p-9">
          <form action={company.formspreeEndpoint} className="grid gap-6" method="POST">
            <input name="_subject" type="hidden" value="New project request from Solven Tech website" />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-silver-300">
                Full name
                <input className="form-field" name="name" required type="text" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-silver-300">
                Email
                <input className="form-field" name="email" required type="email" />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-silver-300">
                Organization
                <input className="form-field" name="organization" type="text" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-silver-300">
                Project category
                <select className="form-field" name="project_category" defaultValue={services[0].title}>
                  {services.map((service) => (
                    <option key={service.slug}>{service.title}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-silver-300">
                Budget range
                <select className="form-field" name="budget_range" defaultValue="To be discussed">
                  <option>To be discussed</option>
                  <option>Small MVP</option>
                  <option>Business platform</option>
                  <option>Institutional system</option>
                  <option>Long-term partnership</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-silver-300">
                Timeline
                <select className="form-field" name="timeline" defaultValue="Flexible">
                  <option>Flexible</option>
                  <option>1-2 months</option>
                  <option>3-6 months</option>
                  <option>6+ months</option>
                </select>
              </label>
            </div>
            <label className="grid gap-2 text-sm font-medium text-silver-300">
              Project goals
              <textarea className="form-field min-h-40 resize-none" name="project_goals" required />
            </label>
            <label className="grid gap-2 text-sm font-medium text-silver-300">
              Brief link or extra notes
              <textarea className="form-field min-h-28 resize-none" name="brief_notes" />
            </label>
            <button className="btn-primary" type="submit">
              Submit Project Request <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </GlassCard>
      </section>
      <SiteFooter />
    </main>
  );
}
