import Link from "next/link"
import Logo from "./logo"
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#080C16] text-[#FAF6EE] relative overflow-hidden">
      {/* Top decorative line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A960]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-16 md:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="mb-4">
              <Logo className="text-2xl" markSize={30} />
            </h3>
            <p className="text-[#FAF6EE]/50 text-sm leading-relaxed mb-6">
              Crafting extraordinary travel experiences across the globe. Your
              journey to the extraordinary begins here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-[#C8A960] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#hero" },
                { label: "About Us", href: "#about" },
                { label: "Categories", href: "#categories" },
                { label: "Tours", href: "#tours" },
                { label: "Journal", href: "/articles" },
                { label: "Contact", href: "#contact" },
                { label: "Image Credits", href: "/credits" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#FAF6EE]/50 hover:text-[#C8A960] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-[#C8A960] mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-[#C8A960] mt-1 shrink-0"
                />
                <span className="text-[#FAF6EE]/50">
                  123 Travel Lane, Adventure City, World 54321
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#C8A960] shrink-0" />
                <Link
                  href="tel:+229019603836"
                  className="text-[#FAF6EE]/50 hover:text-[#C8A960] transition-colors"
                >
                  +229 01 96 03 836
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#C8A960] shrink-0" />
                <Link
                  href="mailto:info@blazetours.com"
                  className="text-[#FAF6EE]/50 hover:text-[#C8A960] transition-colors"
                >
                  info@blazetours.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-[#C8A960] mb-6">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-[#C8A960]/20 flex items-center justify-center hover:bg-[#C8A960] hover:text-[#0B0F19] text-[#FAF6EE]/50 transition-all duration-300"
                >
                  <Icon size={16} />
                  <span className="sr-only">{Icon.displayName}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#FAF6EE]/30">
            © {new Date().getFullYear()} Odyssey Horizon. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-[#FAF6EE]/30">
            <Link
              href="#"
              className="hover:text-[#C8A960] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="hover:text-[#C8A960] transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="hover:text-[#C8A960] transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <div className="text-center pb-6">
        <Link
          href="#hero"
          className="inline-flex items-center justify-center w-10 h-10 border border-[#C8A960]/20 hover:bg-[#C8A960] hover:text-[#0B0F19] text-[#C8A960] transition-all duration-300"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          <span className="sr-only">Back to top</span>
        </Link>
      </div>
    </footer>
  )
}

