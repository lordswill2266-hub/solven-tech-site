"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Building2,
  Cpu,
  CreditCard,
  Layers3,
  Lock,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Wifi,
  Workflow,
  Zap,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const solutions = [
  {
    title: "Software Development",
    description:
      "Custom platforms, enterprise applications, and cloud-ready systems designed for long-term reliability.",
    icon: Layers3,
  },
  {
    title: "AI & Automation",
    description:
      "Practical automation and intelligent workflows that reduce operational friction and improve decision speed.",
    icon: Bot,
  },
  {
    title: "Fintech Solutions",
    description:
      "Secure financial technology infrastructure for payments, transactions, compliance, and digital commerce.",
    icon: CreditCard,
  },
  {
    title: "Digital Business Systems",
    description:
      "Modern tools that connect teams, customers, data, and processes across growing organizations.",
    icon: Workflow,
  },
  {
    title: "IoT & Embedded Systems",
    description:
      "Connected hardware, device intelligence, and embedded technology for real-world business environments.",
    icon: Cpu,
  },
];

const heroMetrics = [
  "Secure architecture",
  "Scalable delivery",
  "Market-ready systems",
];

const formspreeEndpoint =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/xqevnwya";

const products = [
  {
    title: "Solven Pay",
    description: "A secure digital payment solution coming soon.",
  },
  {
    title: "Solven Trade",
    description:
      "A smart trading and business transaction platform coming soon.",
  },
];

const whyChooseUs = [
  "Trustworthy technology",
  "Scalable systems",
  "Security-first mindset",
  "Business-focused innovation",
  "Emerging market understanding",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-300">
        {eyebrow}
      </p>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-silver-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

function AnimatedSphere() {
  const lines = [8, 42, 82, 122, 160, 204, 246, 292];
  const nodes = [
    ["21%", "34%"],
    ["38%", "19%"],
    ["62%", "28%"],
    ["76%", "49%"],
    ["57%", "72%"],
    ["30%", "68%"],
    ["46%", "49%"],
  ];

  return (
    <motion.div
      className="relative mx-auto flex min-h-[340px] items-center justify-center lg:mx-0"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 orbital-grid opacity-80" />
      <motion.div
        className="network-sphere"
        animate={{ rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      >
        {lines.map((rotation) => (
          <span
            className="sphere-line"
            key={rotation}
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        ))}
        {nodes.map(([left, top], index) => (
          <motion.span
            className="sphere-node"
            key={`${left}-${top}`}
            style={{ left, top }}
            animate={{ opacity: [0.45, 1, 0.45], scale: [0.85, 1.18, 0.85] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}
      </motion.div>
      <div className="hero-logo-badge">
        <Image
          alt="Solven Tech International Limited logo"
          className="object-contain"
          fill
          priority
          quality={100}
          sizes="(min-width: 1024px) 156px, 118px"
          src="/logo.svg"
        />
      </div>
    </motion.div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`glass-card rounded-lg p-7 transition duration-300 hover:-translate-y-1 hover:border-accent-300/45 sm:p-8 ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),linear-gradient(180deg,#050914_0%,#08111f_44%,#050914_100%)] text-white">
      <SiteHeader />

      <section
        id="home"
        className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-5 pb-24 pt-44 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:pb-32 lg:pt-36"
      >
        <div className="relative z-10">
          <motion.p
            className="inline-flex items-center gap-2 rounded-md border border-silver-300/15 bg-white/5 px-4 py-2 text-sm font-medium text-accent-300"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <ShieldCheck className="h-4 w-4" />
            Solven Tech International Limited
          </motion.p>
          <motion.h1
            className="mt-8 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            Secure digital systems for modern markets.
          </motion.h1>
          <motion.p
            className="mt-7 max-w-2xl text-lg leading-8 text-silver-300 sm:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            We build practical, scalable technology for businesses, communities,
            and institutions operating in fast-moving digital economies.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
          >
            <a
              href="#solutions"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-500 px-6 py-4 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-400"
            >
              Explore Solutions
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-silver-300/25 px-6 py-4 text-sm font-semibold text-white transition hover:border-accent-300/55 hover:bg-white/5"
            >
              Contact Us
            </a>
          </motion.div>
          <motion.div
            className="mt-12 grid max-w-3xl gap-3 sm:grid-cols-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
          >
            {heroMetrics.map((metric) => (
              <div
                className="rounded-lg border border-silver-300/12 bg-white/[0.04] px-4 py-4 text-sm font-semibold text-silver-200"
                key={metric}
              >
                {metric}
              </div>
            ))}
          </motion.div>
        </div>
        <AnimatedSphere />
      </section>

      <section id="about" className="border-y border-silver-300/10 bg-navy-900/72 px-5 py-28 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="About"
            title="Secure systems for modern institutions."
            description="Solven Tech International Limited is a technology company focused on building secure, scalable, and modern digital systems for organizations that need dependable infrastructure and thoughtful innovation."
          />
          <div className="mt-16 grid gap-7 lg:grid-cols-2">
            <Card>
              <Sparkles className="h-8 w-8 text-accent-300" />
              <h3 className="mt-6 text-2xl font-semibold">Mission</h3>
              <p className="mt-4 leading-8 text-silver-300">
                To design and deliver secure digital products that help businesses,
                communities, and institutions operate with confidence in a connected economy.
              </p>
            </Card>
            <Card>
              <Zap className="h-8 w-8 text-accent-300" />
              <h3 className="mt-6 text-2xl font-semibold">Vision</h3>
              <p className="mt-4 leading-8 text-silver-300">
                To become a trusted international technology partner for scalable,
                security-first systems across emerging and established markets.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="solutions" className="px-5 py-28 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Solutions"
            title="Technology capabilities built for trust and scale."
          />
          <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Card key={solution.title} className="min-h-[280px]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-accent-300/35 bg-accent-500/12">
                    <Icon className="h-6 w-6 text-accent-300" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{solution.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-silver-300">
                    {solution.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="products" className="border-y border-silver-300/10 bg-navy-900/72 px-5 py-28 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Products"
            title="Official product platforms in development."
            description="Solven Tech is developing secure products for digital payments, trade, and business transaction infrastructure."
          />
          <div className="mt-16 grid gap-7 lg:grid-cols-2">
            {products.map((product) => (
              <Card key={product.title} className="relative overflow-hidden">
                <div className="absolute right-6 top-6 rounded-md border border-silver-300/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-silver-300">
                  Coming Soon
                </div>
                <Building2 className="h-9 w-9 text-accent-300" />
                <h3 className="mt-8 text-3xl font-semibold">{product.title}</h3>
                <p className="mt-4 max-w-xl leading-8 text-silver-300">
                  {product.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-28 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A partner mindset for critical digital work."
          />
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <motion.div
                className="min-h-[150px] rounded-lg border border-silver-300/14 bg-white/[0.045] p-6"
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45 }}
              >
                <Lock className="h-5 w-5 text-accent-300" />
                <p className="mt-5 font-semibold text-white">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-silver-300/10 bg-navy-900/72 px-5 py-28 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s discuss your digital infrastructure needs."
              description="Solven Tech International Limited is based in ATC Jalingo, Taraba State, Nigeria, with most operations currently coordinated online for clients and partners."
            />
            <div className="mx-auto mt-10 max-w-md space-y-4 text-silver-300 lg:mx-0">
              <p className="flex items-center justify-center gap-3 rounded-lg border border-silver-300/12 bg-white/[0.04] px-5 py-4 lg:justify-start">
                <MapPin className="h-5 w-5 text-accent-300" />
                ATC Jalingo, Taraba State, Nigeria
              </p>
              <p className="flex items-center justify-center gap-3 rounded-lg border border-silver-300/12 bg-white/[0.04] px-5 py-4 lg:justify-start">
                <Wifi className="h-5 w-5 text-accent-300" />
                Online-first operations for current projects
              </p>
              <p className="flex items-center justify-center gap-3 rounded-lg border border-silver-300/12 bg-white/[0.04] px-5 py-4 lg:justify-start">
                <Mail className="h-5 w-5 text-accent-300" />
                Official domain email coming soon
              </p>
            </div>
          </div>

          <Card className="p-7 sm:p-9">
            <form action={formspreeEndpoint} className="grid gap-6" method="POST">
              <input
                name="_subject"
                type="hidden"
                value="New message from Solven Tech website"
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-silver-300">
                  Name
                  <input
                    className="rounded-md border border-silver-300/16 bg-navy-950/70 px-4 py-3 text-white outline-none transition placeholder:text-silver-500 focus:border-accent-300/70"
                    name="name"
                    placeholder="Your name"
                    required
                    type="text"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-silver-300">
                  Email
                  <input
                    className="rounded-md border border-silver-300/16 bg-navy-950/70 px-4 py-3 text-white outline-none transition placeholder:text-silver-500 focus:border-accent-300/70"
                    name="email"
                    placeholder="you@company.com"
                    required
                    type="email"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-medium text-silver-300">
                Company
                <input
                  className="rounded-md border border-silver-300/16 bg-navy-950/70 px-4 py-3 text-white outline-none transition placeholder:text-silver-500 focus:border-accent-300/70"
                  name="company"
                  placeholder="Company or organization"
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-silver-300">
                Message
                <textarea
                  className="min-h-36 resize-none rounded-md border border-silver-300/16 bg-navy-950/70 px-4 py-3 text-white outline-none transition placeholder:text-silver-500 focus:border-accent-300/70"
                  name="message"
                  placeholder="Tell us about your project or partnership inquiry"
                  required
                />
              </label>
              <button
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-500 px-6 py-4 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-400"
                type="submit"
              >
                Send Message
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </Card>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
