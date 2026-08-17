import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { GlassCard, SectionHeader } from "@/components/sections";
import { company, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Book Consultation | Solven Tech International Limited",
  description:
    "Book a technology consultation with Solven Tech International Limited for software, AI automation, fintech, IoT, and digital business systems.",
};

export default function ConsultationPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-44 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:pb-28 lg:pt-36">
        <SectionHeader
          align="left"
          eyebrow="Consultation"
          title="Book a focused technology discussion."
          description="Use this form to request a project discovery conversation, technical review, partnership discussion, or digital transformation consultation."
        />
        <GlassCard className="p-7 sm:p-9">
          <form action={company.formspreeEndpoint} className="grid gap-6" method="POST">
            <input name="_subject" type="hidden" value="Consultation request from Solven Tech website" />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-silver-300">
                Name
                <input className="form-field" name="name" required type="text" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-silver-300">
                Email
                <input className="form-field" name="email" required type="email" />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-medium text-silver-300">
              Consultation focus
              <select className="form-field" name="consultation_focus" defaultValue={services[0].title}>
                {services.map((service) => (
                  <option key={service.slug}>{service.title}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-silver-300">
              Preferred meeting window
              <input className="form-field" name="preferred_window" type="text" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-silver-300">
              What would you like to discuss?
              <textarea className="form-field min-h-40 resize-none" name="message" required />
            </label>
            <button className="btn-primary" type="submit">
              Request Consultation <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </GlassCard>
      </section>
      <SiteFooter />
    </main>
  );
}
