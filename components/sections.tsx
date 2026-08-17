"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.55, delay }}
      viewport={{ once: true, margin: "-90px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
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
    </Reveal>
  );
}

export function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal
      className={`glass-card rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-accent-300/45 sm:p-8 ${className}`}
    >
      {children}
    </Reveal>
  );
}

export function TechVisual() {
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
      aria-hidden="true"
      className="relative mx-auto flex min-h-[340px] items-center justify-center lg:mx-0"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2 }}
    >
      <div className="absolute inset-0 orbital-grid opacity-75" />
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
            transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.2 }}
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

export function CTASection({
  title = "Ready to build secure digital infrastructure?",
  text = "Share your project goals and Solven Tech will help shape the right technical direction.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="glass-card overflow-hidden rounded-lg p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-300">
                Start
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-silver-300">{text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link className="btn-primary" href="/start-project">
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link className="btn-secondary" href="/consultation">
                Book Consultation
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
