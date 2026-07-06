import Image from "next/image";
import Link from "next/link";
import { Network } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Products", href: "/#products" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-silver-300/10 bg-navy-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/#home"
          className="group flex min-w-0 items-center gap-4 sm:gap-5"
          aria-label="Solven Tech home"
        >
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-silver-300/18 bg-white/[0.075] p-1.5 shadow-[0_0_34px_rgba(59,130,246,0.18)] backdrop-blur-xl transition duration-300 group-hover:border-accent-300/45 group-hover:shadow-[0_0_42px_rgba(59,130,246,0.24)] sm:h-14 sm:w-14">
            <span className="absolute inset-0 rounded-lg bg-accent-500/8" />
            <Image
              alt=""
              className="object-contain opacity-100 [image-rendering:auto]"
              fill
              priority
              quality={100}
              sizes="(min-width: 640px) 56px, 48px"
              src="/logo.svg"
            />
          </span>
          <span className="truncate text-[1.05rem] font-extrabold tracking-[0.08em] text-white transition duration-300 group-hover:text-accent-300 sm:text-xl lg:text-[1.28rem]">
            Solven Tech International Limited
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              className="text-sm font-medium text-silver-300 transition hover:text-white"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#contact"
          className="hidden rounded-md bg-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-400 sm:inline-flex"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-silver-300/10 bg-navy-950/72 px-5 py-14 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 text-sm text-silver-300 lg:grid-cols-[1.1fr_1fr_1fr] lg:items-start">
        <div className="max-w-sm">
          <p className="text-base font-semibold text-white">Solven Tech International Limited</p>
          <p className="mt-3 leading-7">
            Based in ATC Jalingo, Taraba State, Nigeria. Secure digital solutions for
            businesses, institutions, and emerging markets.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 lg:justify-center">
          {navLinks.map((link) => (
            <Link className="transition hover:text-white" href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
        </div>
        <p className="leading-7 lg:text-right">
          Copyright 2026 Solven Tech International Limited. All rights reserved.
        </p>
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
