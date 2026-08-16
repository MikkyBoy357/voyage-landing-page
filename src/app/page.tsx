"use client"

import Image from "next/image"
import Link from "next/link"
import TravelCategories from "./components/travel-categories"
import PopularTours from "./components/popular-tours"
import Footer from "./components/footer"
import Logo from "./components/logo"
import StoryStack from "./components/story-stack"
import { useState, useEffect } from "react"
import { MapPin, Calendar, Users, ArrowRight, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Categories", href: "#categories" },
  { label: "Tours", href: "#tours" },
]

export default function Home() {
  const [isHeroVisible, setIsHeroVisible] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const heroSection = document.getElementById("hero")
    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.5, rootMargin: "-50px 0px 0px 0px" }
    )
    if (heroSection) observer.observe(heroSection)
    return () => {
      if (heroSection) observer.unobserve(heroSection)
    }
  }, [])

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isHeroVisible
            ? "bg-transparent"
            : "bg-[#0B0F19]/95 backdrop-blur-md border-b border-[#C8A960]/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-16 md:h-20">
          <Link href="#hero" className="flex items-center gap-2">
            <Logo className="text-lg md:text-2xl" markSize={28} />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm tracking-widest uppercase text-[#FAF6EE]/80 hover:text-[#C8A960] transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/articles"
              className="text-sm tracking-widest uppercase text-[#FAF6EE]/80 hover:text-[#C8A960] transition-colors duration-300"
            >
              Journal
            </Link>
            <Link
              href="#contact"
              className="px-5 py-2 border border-[#C8A960] text-[#C8A960] text-sm tracking-widest uppercase hover:bg-[#C8A960] hover:text-[#0B0F19] transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          <button
            className="md:hidden text-[#FAF6EE] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-[#0B0F19]/98 backdrop-blur-md border-b border-[#C8A960]/20 transition-all duration-300 ${
            mobileMenuOpen
              ? "max-h-[400px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm tracking-widest uppercase text-[#FAF6EE]/80 hover:text-[#C8A960] transition-colors py-2 border-b border-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/articles"
              className="text-sm tracking-widest uppercase text-[#FAF6EE]/80 hover:text-[#C8A960] transition-colors py-2 border-b border-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Journal
            </Link>
            <Link
              href="#contact"
              className="text-sm tracking-widest uppercase text-[#C8A960] py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* ═══════════════ HERO ═══════════════ */}
      <section
        id="hero"
        className="relative h-screen w-full snap-start overflow-hidden"
      >
        <Image
          src="/images/hero.jpg"
          alt="Stunning travel destination"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/90 via-[#0B0F19]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 via-transparent to-[#0B0F19]/30" />

        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-4xl">
          <span className="text-[#C8A960] text-xs md:text-sm tracking-[0.3em] uppercase font-light mb-4">
            Premium Travel Experiences
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] font-playfair mb-6">
            Explore The
            <br />
            <span className="text-gradient-gold">Extraordinary</span>
          </h1>
          <p className="text-[#FAF6EE]/70 text-base md:text-lg lg:text-xl max-w-lg mb-8 font-light leading-relaxed">
            We craft journeys that transcend the ordinary. From hidden paradises
            to iconic landmarks, every tour is a masterpiece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#categories"
              className="group inline-flex items-center justify-center gap-3 bg-[#C8A960] text-[#0B0F19] px-8 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[#E4D5A0] transition-all duration-300"
            >
              Discover Tours
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 text-sm tracking-widest uppercase font-light hover:border-[#C8A960] hover:text-[#C8A960] transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Decorative circles (subtle, premium) */}
        <div
          className="hero-orb absolute top-1/4 right-[8%] w-48 h-48 md:w-72 md:h-72 hidden lg:block"
          style={{ animationDelay: "0.45s" }}
        >
          <div className="hero-orb-inner relative w-full h-full rounded-full overflow-hidden border border-[#C8A960]/20 shadow-2xl">
            <Image
              src="/images/highlight-1.jpg"
              alt="Golden dunes at sunset in the Thar Desert"
              fill
              className="object-cover"
              sizes="288px"
            />
            <div className="absolute inset-0 bg-[#0B0F19]/30" />
          </div>
        </div>
        <div
          className="hero-orb absolute bottom-[15%] right-[18%] w-32 h-32 md:w-44 md:h-44 hidden lg:block"
          style={{ animationDelay: "0.75s" }}
        >
          <div
            className="hero-orb-inner relative w-full h-full rounded-full overflow-hidden border border-[#C8A960]/20 shadow-2xl"
            style={{ animationDelay: "1.6s", animationDuration: "9.5s" }}
          >
            <Image
              src="/images/highlight-2.jpg"
              alt="Snow-covered alpine peaks in winter"
              fill
              className="object-cover"
              sizes="176px"
            />
            <div className="absolute inset-0 bg-[#0B0F19]/30" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[#C8A960] text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[#C8A960] to-transparent" />
        </div>
      </section>

      {/* ═══════════════ STATS BAR ═══════════════ */}
      <div className="snap-start bg-[#111827] border-y border-[#C8A960]/10">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "150+", label: "Destinations" },
            { number: "10K+", label: "Happy Travelers" },
            { number: "15+", label: "Years Experience" },
            { number: "98%", label: "Satisfaction Rate" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#C8A960] font-playfair">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm tracking-widest uppercase text-[#FAF6EE]/50 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section
        id="about"
        className="snap-start min-h-screen flex items-center bg-[#0B0F19] relative overflow-hidden py-16 md:py-24"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A960]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C8A960]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Images */}
            <StoryStack />

            {/* Text */}
            <div className="order-1 lg:order-2">
              <span className="text-[#C8A960] text-xs tracking-[0.3em] uppercase">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6 font-playfair leading-tight">
                Crafting Journeys
                <br />
                <span className="text-gradient-gold">Since 2010</span>
              </h2>
              <div className="w-16 h-0.5 bg-[#C8A960] mb-8" />
              <p className="text-[#FAF6EE]/60 text-base md:text-lg leading-relaxed mb-6">
                Odyssey Horizon was born from a passion for exploration and
                a belief that travel should be transformative. We don&apos;t just
                plan trips — we architect experiences that leave lasting
                impressions.
              </p>
              <p className="text-[#FAF6EE]/60 text-base md:text-lg leading-relaxed mb-8">
                From the sun-kissed coasts of the Mediterranean to the untamed
                wilderness of Africa, our curated tours offer exclusive access,
                expert guides, and moments that become lifelong memories.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { icon: MapPin, label: "Global Reach" },
                  { icon: Calendar, label: "Year-Round" },
                  { icon: Users, label: "Expert Guides" },
                ].map(({ icon: Icon, label }, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <div className="w-12 h-12 rounded-full border border-[#C8A960]/30 flex items-center justify-center">
                      <Icon size={20} className="text-[#C8A960]" />
                    </div>
                    <span className="text-xs tracking-wider uppercase text-[#FAF6EE]/50">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ DREAM BANNER ═══════════════ */}
      <section id="dream" className="snap-start relative">
        <div className="bg-[#111827] border-y border-[#C8A960]/10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center py-12 md:py-16 px-6 text-center md:text-left gap-8 md:gap-16">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-playfair">
                Make Your Travel
                <br />
                Dreams <span className="text-gradient-gold">Reality</span>
              </h3>
            </div>
            <div className="hidden md:block w-px h-20 bg-[#C8A960]/30" />
            <div>
              <p className="text-[#FAF6EE]/50 text-lg md:text-xl font-light italic">
                &ldquo;We bring everywhere alive
                <br />
                with tours that cover and
                <br />
                look beyond.&rdquo;
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full h-[50vh] relative bg-fixed-safe"
          style={{
            backgroundImage: "url('/boats.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-[#0B0F19]/50" />
        </div>
      </section>

      {/* ═══════════════ CATEGORIES ═══════════════ */}
      <section id="categories" className="snap-start">
        <TravelCategories />
      </section>

      {/* ═══════════════ TOURS ═══════════════ */}
      <section id="tours" className="snap-start">
        <PopularTours />
      </section>

      {/* ═══════════════ JOURNAL PREVIEW ═══════════════ */}
      <section className="snap-start bg-[#0B0F19] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[#C8A960]/30" />
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <span className="text-[#C8A960] text-xs tracking-[0.3em] uppercase">
              From Our Journal
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 font-playfair">
              Travel <span className="text-gradient-gold">Stories</span>
            </h2>
            <div className="w-16 h-0.5 bg-[#C8A960] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "A Week in Santorini",
                category: "Beach",
                image:
                  "/images/santorini-article.jpg",
              },
              {
                title: "Safari Diaries: The Serengeti",
                category: "Adventure",
                image:
                  "/images/serengeti-article.jpg",
              },
              {
                title: "The Hidden Temples of Bali",
                category: "Culture",
                image:
                  "/images/bali-article.jpg",
              },
            ].map((article, i) => (
              <Link
                key={i}
                href={`/articles/${i + 1}`}
                className="card-lift group block bg-[#111827] border border-[#C8A960]/10 overflow-hidden hover:border-[#C8A960]/30"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase text-[#C8A960] bg-[#0B0F19]/80 px-3 py-1">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#C8A960] transition-colors font-playfair">
                    {article.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-[#C8A960] text-xs tracking-wider uppercase mt-4 group-hover:gap-3 transition-all">
                    Read Story <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/articles"
              className="inline-flex items-center gap-3 border border-[#C8A960] text-[#C8A960] px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#C8A960] hover:text-[#0B0F19] transition-all duration-300"
            >
              View All Stories <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <section id="contact" className="snap-start">
        <Footer />
      </section>
    </div>
  )
}

