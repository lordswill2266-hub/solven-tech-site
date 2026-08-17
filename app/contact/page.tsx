import type { Metadata } from "next";
import { ArrowRight, Mail, MapPin, Wifi } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { GlassCard, SectionHeader } from "@/components/sections";
import { company, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact | Solven Tech International Limited",
  description:
    "Contact Solven Tech International Limited for software, AI automation, fintech, IoT, and digital business system inquiries.",
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-44 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:pb-28 lg:pt-36">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Contact"
            title="Send a project, partnership, or business inquiry."
            description="Messages submitted here are delivered through Formspree to the form owner account connected to the Solven Tech endpoint."
          />
          <div className="mt-10 grid gap-4">
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
        </div>
        <GlassCard className="p-7 sm:p-9">
          <form action={company.formspreeEndpoint} className="grid gap-6" method="POST">
            <input name="_subject" type="hidden" value="New message from Solven Tech website" />
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
              Company or organization
              <input className="form-field" name="company" type="text" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-silver-300">
              Inquiry type
              <select className="form-field" name="inquiry_type" defaultValue="Project inquiry">
                <option>Project inquiry</option>
                <option>Partnership</option>
                <option>Investor or institution</option>
                <option>General message</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-silver-300">
              Area of interest
              <select className="form-field" name="service_interest" defaultValue={services[0].title}>
                {services.slice(0, 8).map((service) => (
                  <option key={service.slug}>{service.title}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-silver-300">
              Message
              <textarea className="form-field min-h-40 resize-none" name="message" required />
            </label>
            <button className="btn-primary" type="submit">
              Send Message <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </GlassCard>
      </section>
      <SiteFooter />
    </main>
  );
}
