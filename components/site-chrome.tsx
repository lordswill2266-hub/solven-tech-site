"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Network, X } from "lucide-react";
import { useState } from "react";
import { company, services } from "@/lib/site-data";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Solutions", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "AI & Automation", href: "/services/ai-automation" },
  { label: "Projects", href: "/projects" },
  { label: "Products", href: "/#products" },
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-silver-300/10 bg-navy-950/82 backdrop-blur-xl">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
        <Link
          href="/#home"
          className="group flex min-w-0 items-center gap-4 sm:gap-5"
          aria-label="Solven Tech home"
          onClick={() => setOpen(false)}
        >
          <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-silver-300/18 bg-white/[0.075] p-2 shadow-[0_0_34px_rgba(59,130,246,0.2)] backdrop-blur-xl transition duration-300 group-hover:border-accent-300/45 group-hover:shadow-[0_0_42px_rgba(59,130,246,0.28)] sm:h-16 sm:w-16">
            <span className="absolute inset-0 rounded-lg bg-accent-500/8" />
            <Image
              alt=""
              className="object-contain"
              fill
              priority
              quality={100}
              sizes="(min-width: 640px) 64px, 56px"
              src="/logo.svg"
            />
          </span>
          <span className="hidden text-[1.08rem] font-extrabold tracking-[0.09em] text-white transition duration-300 group-hover:text-accent-300 sm:block sm:text-xl xl:text-[1.32rem]">
            {company.name}
          </span>
          <span className="block text-lg font-extrabold tracking-[0.08em] text-white sm:hidden">
            {company.shortName}
          </span>
        </Link>

        <div className="hidden items-center gap-6 xl:flex">
          {navLinks.slice(0, 7).map((link) => (
            <Link
              className="text-sm font-medium text-silver-300 transition hover:text-white"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <Link className="btn-secondary hidden lg:inline-flex" href="/contact">
            Contact Us
          </Link>
          <Link className="btn-primary" href="/start-project">
            Start a Project
          </Link>
        </div>

        <button
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-silver-300/16 bg-white/[0.05] text-white transition hover:border-accent-300/45 xl:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-silver-300/10 bg-navy-950/96 px-5 py-6 shadow-2xl backdrop-blur-xl xl:hidden">
          <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2">
            {navLinks.map((link) => (
              <Link
                className="rounded-md border border-silver-300/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-silver-200 transition hover:border-accent-300/45 hover:text-white"
                href={link.href}
                key={link.label}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mx-auto mt-5 grid max-w-7xl gap-3 sm:grid-cols-2">
            <Link className="btn-primary justify-center" href="/start-project" onClick={() => setOpen(false)}>
              Start a Project
            </Link>
            <Link className="btn-secondary justify-center" href="/consultation" onClick={() => setOpen(false)}>
              Book Consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-silver-300/10 bg-navy-950/76 px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 text-sm text-silver-300 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr] lg:items-start">
        <div className="max-w-md">
          <Link href="/#home" className="inline-flex items-center gap-4">
            <span className="relative flex h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-silver-300/16 bg-white/[0.07] p-1.5 shadow-[0_0_26px_rgba(59,130,246,0.18)]">
              <Image alt="" className="object-contain" fill sizes="48px" src="/logo.svg" />
            </span>
            <span className="font-bold tracking-[0.08em] text-white">{company.name}</span>
          </Link>
          <p className="mt-5 leading-7">
            Secure digital solutions for businesses, institutions, partners, and emerging markets.
          </p>
          <p className="mt-4 leading-7">{company.location}</p>
        </div>
        <div>
          <p className="font-semibold text-white">Quick Links</p>
          <div className="mt-5 grid gap-3">
            {navLinks.slice(0, 6).map((link) => (
              <Link className="transition hover:text-white" href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Services</p>
          <div className="mt-5 grid gap-3">
            {services.slice(0, 5).map((service) => (
              <Link className="transition hover:text-white" href={`/services/${service.slug}`} key={service.slug}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Contact</p>
          <p className="mt-5 leading-7">{company.operations}</p>
          <Link className="mt-5 inline-flex text-accent-300 transition hover:text-white" href="/contact">
            Send a message
          </Link>
          <p className="mt-8 leading-7">
            Copyright 2026 {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function BrandMark() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent-300/45 bg-accent-500/12 shadow-glow">
      <Network className="h-5 w-5 text-accent-300" />
    </span>
  );
}
