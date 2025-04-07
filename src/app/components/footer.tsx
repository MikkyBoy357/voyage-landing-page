import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#05415E] text-white pt-12 md:pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Decorative circles */}
        <div className="absolute -right-32 -bottom-32 w-64 h-64 bg-[#5fa6b7]/10 rounded-full"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-grape-nuts">Voyage</h3>
            <p className="mb-4 md:mb-6 text-gray-200 text-sm md:text-base">
              Your go-to guide for unforgettable travel experiences, offering tips, recommendations, and insights on top
              destinations.
            </p>
          </div>

        

          {/* Contact Info */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Contact Us</h3>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-[#84B8C3]" />
                <span>123 Travel Lane, Adventure City, World 54321</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#84B8C3]" />
                <Link href="tel:+15551234567" className="hover:text-[#84B8C3] transition">
                  +1 (555) 123-4567
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#84B8C3]" />
                <Link href="mailto:info@voyagetravel.com" className="hover:text-[#84B8C3] transition">
                  info@voyagetravel.com
                </Link>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 mr-3 text-[#84B8C3]"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9 14a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Z" />
                </svg>
                <Link href="https://wa.me/15551234567" className="hover:text-[#84B8C3] transition">
                  WhatsApp Chat
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-[#84B8C3] transition">
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-[#84B8C3] transition">
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-[#84B8C3] transition">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-[#84B8C3] transition">
              <Youtube className="w-6 h-6" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 md:mt-12 text-center text-gray-300 border-t border-gray-700 pt-6">
          <div className="flex justify-center space-x-4 md:space-x-6 text-xs md:text-sm mb-4">
            <Link href="#" className="hover:text-[#84B8C3] transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#84B8C3] transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-[#84B8C3] transition">
              Cookie Policy
            </Link>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Voyage Travel. All rights reserved.</p>
          <Link
            href="#hero"
            className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-[#84B8C3] rounded-full mt-4 hover:bg-[#5fa6b7] transition"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
            <span className="sr-only">Back to top</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

