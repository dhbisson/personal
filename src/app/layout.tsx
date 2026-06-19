import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/app/components/SiteNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Hampton Bisson — Video Portfolio",
  description: "Selected video work by David Hampton Bisson.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="flex flex-col items-center gap-2 px-6 pt-10 pb-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-indigo-500">
            Director · Editor · Producer · Cinematographer
          </p>
          <Link
            href="/"
            className="font-mono text-base uppercase tracking-[0.35em]"
          >
            David Hampton Bisson
          </Link>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            ⌄ Samples ⌄
          </p>
          <SiteNav />
        </header>
        {children}
      </body>
    </html>
  );
}
