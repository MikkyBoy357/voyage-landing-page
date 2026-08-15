import Image from "next/image"
import Link from "next/link"
import { getAllTours } from "./data"
import {
  Calendar,
  Users,
  Clock,
  MapPin,
  Mountain,
  ArrowRight,
} from "lucide-react"

/** Pulls the digits out of display strings like "$3,450" or "Max 14 Guests". */
function toNumber(value: string): number {
  return Number(value.replace(/[^0-9]/g, ""))
}

export default function ToursPage() {
  const tours = [...getAllTours()].sort(
    (a, b) =>
      new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  )

  const destinations = new Set(tours.map((t) => t.destination)).size
  const lowestPrice = tours.reduce(
    (min, t) => (toNumber(t.price) < toNumber(min) ? t.price : min),
    tours[0].price
  )
  const largestGroup = tours.reduce(
    (max, t) => Math.max(max, toNumber(t.groupSize)),
    0
  )

  return (
    <div className="min-h-screen">
      {/* Heading */}
      <section className="relative pt-8 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A960]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <span className="text-[#C8A960] text-xs tracking-[0.3em] uppercase">
            Upcoming Departures
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 font-playfair">
            Bookable <span className="text-gradient-gold">Tours</span>
          </h1>
          <div className="w-16 h-0.5 bg-[#C8A960] mt-6" />
          <p className="text-[#FAF6EE]/50 mt-6 max-w-2xl text-lg">
            Every journey we run, in one place. Small groups, hand-built
            itineraries, and nothing left to chance. Select a tour to see the
            day-by-day plan and reserve your spot.
          </p>
        </div>
      </section>

      {/* Quick Info Strip */}
      <div className="bg-[#111827] border-y border-[#C8A960]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: MapPin, label: "Destinations", value: `${destinations}` },
            { icon: Calendar, label: "Departures", value: `${tours.length}` },
            { icon: Users, label: "Group Size", value: `Max ${largestGroup}` },
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
              {lowestPrice}
            </div>
            <div className="text-[10px] tracking-widest uppercase text-[#FAF6EE]/30 mt-1">
              Starting From
            </div>
          </div>
        </div>
      </div>

      {/* Tour Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {tours.map((tour) => (
              <Link
                key={tour.id}
                href={`/tours/${tour.id}`}
                className="group flex flex-col bg-[#111827] border border-[#C8A960]/10 overflow-hidden hover:border-[#C8A960]/40 transition-all duration-500"
              >
                {/* Image */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={tour.coverImage}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase text-[#C8A960] bg-[#0B0F19]/80 px-3 py-1">
                    {tour.category}
                  </span>
                  <div className="absolute top-4 right-4 bg-[#C8A960] text-[#0B0F19] px-3 py-1 text-sm font-bold">
                    {tour.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[#C8A960] text-xs mb-3">
                    <MapPin size={12} />
                    <span className="tracking-wider uppercase">
                      {tour.destination}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-white group-hover:text-[#C8A960] transition-colors font-playfair mb-2">
                    {tour.title}
                  </h2>
                  <p className="text-[#FAF6EE]/40 text-sm mb-4 line-clamp-2">
                    {tour.tagline}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-[11px] text-[#FAF6EE]/30 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {tour.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={11} /> {tour.groupSize}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mountain size={11} /> {tour.difficulty}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-auto border-t border-white/5">
                    <span className="flex items-center gap-1.5 text-xs text-[#FAF6EE]/40">
                      <Calendar size={11} />
                      {tour.startDate}
                    </span>
                    <span className="inline-flex items-center gap-2 text-[#C8A960] text-xs tracking-wider uppercase group-hover:gap-3 transition-all">
                      View Tour <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Journey CTA */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-[#111827] border border-[#C8A960]/20 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-playfair mb-3">
              Don&apos;t See Your{" "}
              <span className="text-gradient-gold">Dream Trip?</span>
            </h2>
            <p className="text-[#FAF6EE]/50 mb-8 max-w-lg mx-auto">
              Tell us where you want to go and we&apos;ll build the itinerary
              around you — same small groups, same attention to detail.
            </p>
            <Link
              href="/#contact"
              className="group inline-flex items-center justify-center gap-3 border border-[#C8A960] text-[#C8A960] px-8 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[#C8A960] hover:text-[#0B0F19] transition-all duration-300"
            >
              Plan a Custom Journey
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
