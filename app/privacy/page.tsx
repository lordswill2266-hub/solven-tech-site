import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { GlassCard, SectionHeader } from "@/components/sections";

export const metadata: Metadata = {
  title: "Privacy Policy | Solven Tech International Limited",
  description: "Privacy information for Solven Tech International Limited website visitors and inquiry form users.",
};

export default function PrivacyPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-5 pb-20 pt-44 sm:px-8 lg:pb-28 lg:pt-36">
        <SectionHeader eyebrow="Privacy" title="Privacy Policy" description="This website collects only the information visitors choose to submit through inquiry forms." />
        <GlassCard className="mt-12">
          <div className="space-y-6 leading-8 text-silver-300">
            <p>Form submissions may include your name, email address, organization, project details, and attached documents when provided.</p>
            <p>Messages are processed through Formspree and delivered to the form owner account connected to the Solven Tech website endpoint.</p>
            <p>Solven Tech uses submitted information to respond to inquiries, understand project needs, and coordinate business discussions.</p>
            <p>Do not submit highly sensitive personal, financial, or confidential information through the public website form unless a secure project channel has been established.</p>
          </div>
        </GlassCard>
      </section>
      <SiteFooter />
    </main>
  );
}
