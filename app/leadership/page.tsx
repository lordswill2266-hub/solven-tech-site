"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Cpu,
  Layers3,
  ShieldCheck,
  Sparkles,
  UserRound,
  Workflow,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const skills = [
  "Software Development",
  "IoT & Embedded Systems",
  "AI & Automation",
  "System Integration",
  "Digital Business Systems",
  "Leadership",
];

const projects = [
  "Farm2Market IoT-Based Smart Farm-to-Market System",
  "30W Audio Amplifier",
  "Embedded Systems Projects",
];

const profileFacts = [
  { label: "Role", value: "Founder & Chief Executive Officer", icon: BriefcaseBusiness },
  { label: "Education", value: "BSc Computer Science; Global MBA in progress", icon: BadgeCheck },
  { label: "Focus", value: "Secure systems for emerging and global markets", icon: ShieldCheck },
];

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),linear-gradient(180deg,#050914_0%,#08111f_44%,#050914_100%)] text-white">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-44 sm:px-8 lg:pb-28 lg:pt-36">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-300">
            Leadership
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Executive leadership built around secure, practical innovation.
          </h1>
          <p className="mt-6 text-lg leading-8 text-silver-300">
            Meet the founder guiding Solven Tech International Limited&apos;s vision for
            secure systems, connected technology, and business-focused digital platforms.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
          <motion.div
            className="glass-card overflow-hidden rounded-lg p-3"
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative min-h-[560px] overflow-hidden rounded-md border border-silver-300/12 bg-navy-950 sm:min-h-[680px] lg:h-full">
              <Image
                alt="Solomon Garlama, Founder and Chief Executive Officer of Solven Tech International Limited"
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                src="/ceo.jpg"
                style={{ objectPosition: "56% 42%" }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950 via-navy-950/72 to-transparent p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-300">
                  Founder Profile
                </p>
                <h2 className="mt-3 text-3xl font-semibold">Solomon Garlama</h2>
              <p className="mt-2 text-silver-300">Founder & Chief Executive Officer</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-card rounded-lg p-6 sm:p-8 lg:p-10"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="inline-flex items-center gap-2 rounded-md border border-silver-300/15 bg-white/5 px-4 py-2 text-sm font-medium text-accent-300">
                  <UserRound className="h-4 w-4" />
                  CEO Profile
                </p>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Solomon Garlama
                </h2>
                <p className="mt-3 text-lg text-silver-300">
                  Founder & Chief Executive Officer
                </p>
              </div>
            </div>

            <p className="mt-8 text-base leading-8 text-silver-300 sm:text-lg">
              Solomon Garlama is the Founder and Chief Executive Officer of Solven Tech
              International Limited. He holds a Bachelor&apos;s degree in Computer Science and
              is currently pursuing a Global Master of Business Administration. With a
              background in Electrical and Electronic Engineering, software development,
              IoT, embedded systems, and digital business systems, he leads Solven Tech
              with a focus on building secure, scalable, and practical technology solutions
              for emerging and global markets.
            </p>

            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {profileFacts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div
                    className="rounded-lg border border-silver-300/14 bg-white/[0.045] p-5"
                    key={fact.label}
                  >
                    <Icon className="h-5 w-5 text-accent-300" />
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-silver-500">
                      {fact.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white">{fact.value}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-accent-300" />
                <h3 className="text-xl font-semibold">Highlighted Skills</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    className="rounded-md border border-silver-300/16 bg-navy-950/70 px-4 py-3 text-sm font-semibold text-silver-200"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-silver-300/10 bg-navy-900/72 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-300">
              Project Experience
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Practical engineering across software, hardware, and connected systems.
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => {
              const icons = [Workflow, Layers3, Cpu];
              const Icon = icons[index];
              return (
                <motion.div
                  className="glass-card rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-accent-300/45"
                  initial={{ opacity: 0, y: 24 }}
                  key={project}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true, margin: "-80px" }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-accent-300/35 bg-accent-500/12">
                    <Icon className="h-6 w-6 text-accent-300" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-8">{project}</h3>
                  <p className="mt-4 text-sm leading-7 text-silver-300">
                    Experience applying technical judgment to real systems that connect
                    digital platforms, electronics, data, and operational workflows.
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="mx-auto mt-14 max-w-4xl rounded-lg border border-silver-300/14 bg-white/[0.045] p-6 text-center sm:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <BadgeCheck className="mx-auto h-8 w-8 text-accent-300" />
            <p className="mt-5 text-lg leading-8 text-silver-300">
              Solven Tech&apos;s leadership combines academic growth, engineering foundations,
              and market-aware product thinking to build trusted technology for partners,
              institutions, and emerging businesses.
            </p>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
