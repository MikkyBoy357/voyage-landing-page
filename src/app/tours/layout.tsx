import Link from "next/link"
import Logo from "../components/logo"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tours | Odyssey Horizon",
  description:
    "Explore our upcoming bookable tours and plan your next extraordinary adventure with Odyssey Horizon.",
}

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <header className="fixed top-0 w-full z-50 bg-[#0B0F19]/95 backdrop-blur-md border-b border-[#C8A960]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <Link
            href="/#tours"
            className="flex items-center gap-3 text-[#FAF6EE]/60 hover:text-[#C8A960] transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
          <Link href="/">
            <Logo className="text-lg md:text-xl" markSize={24} />
          </Link>
          <div className="w-20" />
        </div>
      </header>

      <main className="pt-16">{children}</main>

      <footer className="border-t border-[#C8A960]/10 py-8 text-center">
        <p className="text-[#FAF6EE]/30 text-xs">
          © {new Date().getFullYear()} Odyssey Horizon. All rights
          reserved.
        </p>
      </footer>
    </div>
  )
}
