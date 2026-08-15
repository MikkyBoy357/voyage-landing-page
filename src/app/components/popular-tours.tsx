import Image from "next/image"
import Link from "next/link"
import { getAllTours, getUpcomingTours } from "../tours/data"
import { Calendar, Users, Clock, MapPin, ArrowRight } from "lucide-react"

const PopularTours = () => {
  // Fall back to the full list so the section is never empty between seasons.
  const upcoming = getUpcomingTours()
  const tours = upcoming.length > 0 ? upcoming : getAllTours()

  return (
    <section className="relative py-16 md:py-24 bg-[#111827] overflow-hidden grain">
      {/* Decorative blurs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#C8A960]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C8A960]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#C8A960] text-xs tracking-[0.3em] uppercase">
            Upcoming Departures
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 font-playfair">
            Bookable <span className="text-gradient-gold">Tours</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#C8A960] mx-auto mt-6" />
          <p className="text-[#FAF6EE]/50 mt-6 max-w-2xl mx-auto">
            Hand-curated journeys ready for booking. Select a tour to explore the
            full itinerary and reserve your spot.
          </p>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tours.map((tour) => (
            <Link
              key={tour.id}
              href={`/tours/${tour.id}`}
              className="card-lift group block bg-[#0B0F19] border border-[#C8A960]/10 overflow-hidden hover:border-[#C8A960]/40"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase text-[#C8A960] bg-[#0B0F19]/80 px-3 py-1">
                  {tour.category}
                </span>
                <div className="absolute top-4 right-4 bg-[#C8A960] text-[#0B0F19] px-3 py-1 text-sm font-bold">
                  {tour.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#C8A960] text-xs mb-3">
                  <MapPin size={12} />
                  <span className="tracking-wider uppercase">
                    {tour.destination}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#C8A960] transition-colors font-playfair mb-2">
                  {tour.title}
                </h3>
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
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
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

        {/* View All */}
        <div className="text-center mt-12">
          <Link
            href="/tours"
            className="gold-glow group inline-flex items-center gap-3 border border-[#C8A960] text-[#C8A960] px-8 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[#C8A960] hover:text-[#0B0F19] transition-colors duration-300"
          >
            View All Tours
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PopularTours
