import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solven Tech International Limited | Secure Digital Solutions",
  description:
    "Solven Tech International Limited builds secure, scalable, and modern digital systems for businesses, communities, and emerging markets.",
  keywords: [
    "Solven Tech",
    "technology company",
    "software development",
    "fintech solutions",
    "AI automation",
    "digital business systems",
    "IoT embedded systems",
  ],
  openGraph: {
    title: "Solven Tech International Limited",
    description:
      "Building secure digital solutions for businesses, communities, and emerging markets.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-navy-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
