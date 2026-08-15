import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Image Credits | BLAZE UNIVERSAL TOURS 🔱",
  description:
    "Attribution for the photography used across BLAZE UNIVERSAL TOURS, with photographer and licence details for every image.",
}

export default function CreditsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <header className="fixed top-0 w-full z-50 bg-[#0B0F19]/95 backdrop-blur-md border-b border-[#C8A960]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 text-[#FAF6EE]/60 hover:text-[#C8A960] transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
          <Link href="/" className="text-xl font-bold font-playfair">
            <span className="text-[#C8A960]">BLAZE</span>
            <span className="text-white">TOURS</span> 🔱
          </Link>
          <div className="w-20" />
        </div>
      </header>

      <main className="pt-16">{children}</main>

      <footer className="border-t border-[#C8A960]/10 py-8 text-center">
        <p className="text-[#FAF6EE]/30 text-xs">
          © {new Date().getFullYear()} BLAZE UNIVERSAL TOURS. All rights
          reserved.
        </p>
      </footer>
    </div>
  )
}
