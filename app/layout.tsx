import { Figtree, Instrument_Sans, Inter, Tinos } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

const tinos = Tinos({
  variable: "--font-tinos",
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  adjustFontFallback: false,
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  adjustFontFallback: false,
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  adjustFontFallback: false,
});

const instrument = Instrument_Sans({
  variable: '--font-instrument',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'David Youm',
  description: 'David Youm Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${figtree.variable} ${tinos.variable} ${inter.variable} ${instrument.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
