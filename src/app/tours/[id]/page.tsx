import { getTour, getAllTours } from "../data"
import Image from "next/image"
import Link from "next/link"
import {
  Calendar,
  Users,
  Clock,
  MapPin,
  ArrowRight,
  Check,
  X as XIcon,
  Mail,
  MessageCircle,
} from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const tour = getTour(parseInt(id))
  if (!tour) return { title: "Tour Not Found" }
  return {
    title: `${tour.title} | BLAZE UNIVERSAL TOURS`,
    description: tour.overview,
    openGraph: {
      title: tour.title,
      description: tour.tagline,
      images: [tour.coverImage],
    },
  }
}

const WHATSAPP_NUMBER = "229019603836"
const EMAIL_ADDRESS = "info@blazetours.com"

function buildWhatsAppUrl(tourTitle: string, startDate: string, price: string) {
  const message = `Hello BLAZE UNIVERSAL TOURS! 🔱\n\nI'm interested in booking the following tour:\n\n🗺️ Tour: ${tourTitle}\n📅 Date: ${startDate}\n💰 Price: ${price}\n\nPlease send me more information about availability, booking process, and any current offers.\n\nThank you!`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

function buildEmailUrl(tourTitle: string, startDate: string, price: string) {
  const subject = `Booking Inquiry — ${tourTitle}`
  const body = `Hello BLAZE UNIVERSAL TOURS,\n\nI'm interested in booking the following tour:\n\n🗺️ Tour: ${tourTitle}\n📅 Date: ${startDate}\n💰 Price: ${price}\n\nPlease send me more details about availability, booking process, and any current offers.\n\nBest regards`
  return `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const tour = getTour(parseInt(id))

  if (!tour) notFound()

  const allTours = getAllTours()
  const otherTours = allTours.filter((t) => t.id !== tour.id).slice(0, 3)

  const whatsappUrl = buildWhatsAppUrl(tour.title, tour.startDate, tour.price)
  const emailUrl = buildEmailUrl(tour.title, tour.startDate, tour.price)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[65vh]">
        <Image
          src={tour.coverImage}
          alt={tour.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/50 to-[#0B0F19]/30" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-5xl mx-auto">
            <span className="text-[#C8A960] text-xs tracking-widest uppercase">
              {tour.category} — {tour.destination}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 font-playfair leading-tight">
              {tour.title}
            </h1>
            <p className="text-[#FAF6EE]/60 text-lg mt-4 max-w-2xl">
              {tour.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Info Strip */}
      <div className="bg-[#111827] border-y border-[#C8A960]/10">
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-6 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {[
            { icon: Calendar, label: "Starts", value: tour.startDate },
            { icon: Clock, label: "Duration", value: tour.duration },
            { icon: Users, label: "Group", value: tour.groupSize },
            { icon: MapPin, label: "Destination", value: tour.destination },
          ].map(({ icon: Icon, label, value }, i) => (
            <div key={i}>
              <Icon size={18} className="text-[#C8A960] mx-auto mb-2" />
              <div className="text-[10px] tracking-widest uppercase text-[#FAF6EE]/30 mb-1">
                {label}
              </div>
              <div className="text-sm text-white font-medium">{value}</div>
            </div>
          ))}
          <div>
            <div className="text-2xl md:text-3xl font-bold text-[#C8A960] font-playfair">
              {tour.price}
            </div>
            <div className="text-[10px] tracking-widest uppercase text-[#FAF6EE]/30 mt-1">
              Per Person
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-16">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-playfair mb-6">
            Tour <span className="text-gradient-gold">Overview</span>
          </h2>
          <p className="text-[#FAF6EE]/60 text-base md:text-lg leading-relaxed">
            {tour.overview}
          </p>
        </section>

        {/* Gallery */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {tour.galleryImages.map((img, i) => (
              <div
                key={i}
                className="aspect-[4/3] relative overflow-hidden border border-[#C8A960]/10"
              >
                <Image
                  src={img}
                  alt={`${tour.title} gallery ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-playfair mb-6">
            Tour <span className="text-gradient-gold">Highlights</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tour.highlights.map((highlight, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-[#111827] border border-[#C8A960]/10 p-4"
              >
                <div className="w-6 h-6 rounded-full bg-[#C8A960]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} className="text-[#C8A960]" />
                </div>
                <span className="text-[#FAF6EE]/70 text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Itinerary */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-playfair mb-8">
            Day-by-Day{" "}
            <span className="text-gradient-gold">Itinerary</span>
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[#C8A960]/20 hidden md:block" />

            <div className="space-y-6">
              {tour.itinerary.map((day) => (
                <div key={day.day} className="flex gap-4 md:gap-6">
                  {/* Day badge */}
                  <div className="shrink-0 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-[#C8A960]/10 border border-[#C8A960]/30 flex items-center justify-center">
                      <span className="text-[#C8A960] text-xs font-bold">
                        {String(day.day).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 bg-[#111827] border border-[#C8A960]/10 p-5 md:p-6">
                    <h3 className="text-white font-semibold font-playfair mb-2">
                      {day.title}
                    </h3>
                    <p className="text-[#FAF6EE]/50 text-sm leading-relaxed">
                      {day.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Included / Not Included */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white font-playfair mb-4">
              <span className="text-[#C8A960]">✓</span> What&apos;s Included
            </h3>
            <ul className="space-y-3">
              {tour.included.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-[#FAF6EE]/60"
                >
                  <Check
                    size={14}
                    className="text-[#C8A960] mt-0.5 shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-playfair mb-4">
              <span className="text-[#FAF6EE]/30">✗</span> Not Included
            </h3>
            <ul className="space-y-3">
              {tour.notIncluded.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-[#FAF6EE]/40"
                >
                  <XIcon
                    size={14}
                    className="text-[#FAF6EE]/20 mt-0.5 shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══════ BOOKING CTA ═══════ */}
        <section className="mb-16">
          <div className="bg-[#111827] border border-[#C8A960]/20 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-playfair mb-3">
              Ready to <span className="text-gradient-gold">Book?</span>
            </h2>
            <p className="text-[#FAF6EE]/50 mb-8 max-w-lg mx-auto">
              Tap a button below to send us your interest. We&apos;ll get back to you
              with availability, final pricing, and everything you need to
              secure your spot.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[#1ebe5a] transition-all duration-300"
              >
                <MessageCircle size={18} />
                Book via WhatsApp
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href={emailUrl}
                className="group inline-flex items-center justify-center gap-3 border border-[#C8A960] text-[#C8A960] px-8 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[#C8A960] hover:text-[#0B0F19] transition-all duration-300"
              >
                <Mail size={18} />
                Book via Email
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C8A960]/30 to-transparent mb-16" />

        {/* Other Tours */}
        <section>
          <h2 className="text-2xl font-bold text-white font-playfair mb-8">
            More <span className="text-gradient-gold">Tours</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherTours.map((t) => (
              <Link
                key={t.id}
                href={`/tours/${t.id}`}
                className="group block bg-[#111827] border border-[#C8A960]/10 overflow-hidden hover:border-[#C8A960]/30 transition-all duration-500"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={t.coverImage}
                    alt={t.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
                  <div className="absolute top-4 right-4 bg-[#C8A960] text-[#0B0F19] px-2 py-0.5 text-xs font-bold">
                    {t.price}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-white group-hover:text-[#C8A960] transition-colors font-playfair">
                    {t.title}
                  </h3>
                  <div className="flex items-center gap-3 text-[10px] text-[#FAF6EE]/30 mt-2">
                    <span>{t.duration}</span>
                    <span>·</span>
                    <span>{t.startDate}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[#C8A960] text-xs tracking-wider uppercase mt-3 group-hover:gap-3 transition-all">
                    View Tour <ArrowRight size={10} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Back */}
        <div className="mt-12 text-center">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-[#C8A960] text-sm tracking-wider uppercase hover:gap-3 transition-all"
          >
            <ArrowRight size={14} className="rotate-180" /> Back to All Tours
          </Link>
        </div>
      </div>
    </div>
  )
}
