import type { Metadata } from "next";
import "./globals.css";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Solven Tech International Limited | Secure Digital Solutions",
    template: "%s | Solven Tech International Limited",
  },
  description: company.description,
  keywords: [
    "Solven Tech",
    "Solven Tech International Limited",
    "technology company",
    "software development",
    "fintech solutions",
    "AI automation",
    "digital business systems",
    "IoT embedded systems",
    "Nigeria technology company",
  ],
  openGraph: {
    title: company.name,
    description: company.description,
    type: "website",
    images: ["/logo.svg"],
  },
  twitter: {
    card: "summary",
    title: company.name,
    description: company.description,
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    logo: "/logo.svg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jalingo",
      addressRegion: "Taraba State",
      addressCountry: "NG",
    },
  };

  return (
    <html lang="en">
      <body className="bg-navy-950 text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
