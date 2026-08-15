import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getAllTours } from "../tours/data"

/** Maps each display category onto the tour categories it should surface. */
const categories = [
  {
    title: "Road Trip",
    filter: "Road Trip",
    description:
      "Explore scenic highways and hidden pathways across continents",
    image: "/images/category-road-trip.jpg",
  },
  {
    title: "Beach Trip",
    filter: "Beach & Islands",
    description: "Pristine shores, crystal waters, and coastal paradise awaits",
    image: "/images/category-beach.jpg",
  },
  {
    title: "Off-Site Tours",
    filter: "Adventure",
    description:
      "Discover hidden gems and authentic local adventures off the beaten path",
    image: "/images/category-offsite.jpg",
  },
]

export default function TravelCategories() {
  const tours = getAllTours()

  return (
    <section className="py-16 md:py-24 px-6 bg-[#0B0F19] min-h-screen flex items-center relative overflow-hidden grain">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[#C8A960]/20" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C8A960]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#C8A960] text-xs tracking-[0.3em] uppercase">
            Explore by Category
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 font-playfair">
            Travel <span className="text-gradient-gold">Categories</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#C8A960] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => {
            const count = tours.filter(
              (t) => t.category === category.filter
            ).length

            return (
              <Link
                key={category.title}
                href={`/tours?category=${encodeURIComponent(category.filter)}`}
                className="card-lift group relative block overflow-hidden bg-[#111827] border border-[#C8A960]/10 hover:border-[#C8A960]/40"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/20 to-transparent" />

                  {/* Corner bracket accent */}
                  <div className="absolute top-5 right-5 w-8 h-8 border-t border-r border-[#C8A960]/40 group-hover:w-12 group-hover:h-12 transition-all duration-500" />

                  {count > 0 && (
                    <span className="absolute top-5 left-5 text-[10px] tracking-widest uppercase text-[#C8A960] bg-[#0B0F19]/80 px-3 py-1">
                      {count} {count === 1 ? "Tour" : "Tours"}
                    </span>
                  )}

                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                    <div className="w-8 h-0.5 bg-[#C8A960] mb-4 group-hover:w-12 transition-all duration-500" />
                    <h3 className="text-2xl md:text-3xl font-bold text-white font-playfair mb-2 group-hover:text-[#C8A960] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-[#FAF6EE]/50 text-sm">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#C8A960] text-xs tracking-widest uppercase mt-5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      Browse Tours <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
