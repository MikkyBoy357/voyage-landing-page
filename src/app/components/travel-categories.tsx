import Image from "next/image"

export default function TravelCategories() {
  const categories = [
    {
      title: "Road Trip",
      description:
        "Explore scenic highways and hidden pathways across continents",
      image:
        "/images/category-road-trip.jpg",
    },
    {
      title: "Beach Trip",
      description:
        "Pristine shores, crystal waters, and coastal paradise awaits",
      image:
        "/images/category-beach.jpg",
    },
    {
      title: "Off-Site Tours",
      description:
        "Discover hidden gems and authentic local adventures off the beaten path",
      image:
        "/images/category-offsite.jpg",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-6 bg-[#0B0F19] min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[#C8A960]/20" />

      <div className="max-w-7xl mx-auto w-full">
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
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-[#111827] border border-[#C8A960]/10 hover:border-[#C8A960]/40 transition-all duration-500"
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

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                  <div className="w-8 h-0.5 bg-[#C8A960] mb-4 group-hover:w-12 transition-all duration-500" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-playfair mb-2">
                    {category.title}
                  </h3>
                  <p className="text-[#FAF6EE]/50 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
