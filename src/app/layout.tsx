import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: "swap",
});

export const metadata: Metadata = {
  title: "BLAZE UNIVERSAL TOURS 🔱 | Extraordinary Travel Experiences",
  description: "Discover extraordinary destinations with BLAZE UNIVERSAL TOURS. Premium guided tours, exclusive experiences, and unforgettable adventures across the globe.",
  keywords: ["travel", "tours", "luxury travel", "adventure", "guided tours", "BLAZE UNIVERSAL TOURS"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
