import Image from "next/image"
import Link from "next/link"

export default function TravelCategories() {
  const categories = [
    {
      title: "Road Trip",
      description: "Explore scenic highways and hidden pathways",
      image: "https://s3-alpha-sig.figma.com/img/5e4d/2116/2b26706dbb701c6f268e3e13d9565b99?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sRDTF679jeLtCgW2lotIBz8Zo0cLyy~la8YLxWCl95ua3QfV7IVMdTsaRPpa7vnfzDVyjFfRypWmaZBoJzbQyqrltuL2oPnhm-OhDONM2y2EZWQkAnsUZW66isKloPN7ulGqw-HDZWyVZpKyyGdDlaRnX4x0gQ6T5NAJauvGXivLLiZnqgnp-Ucwt72UnKmDy8h9XZ-rS2QcoMZ~U0SnHajmcjom4VL8xJLNh8n-0f5FX2pD9yHQg0l2F1HtTvrOtQXRoueFbzsVNbWY6~0ehAL4mjrA4HRnpkkc1fLI7CalXgsG3TuDSj1k9BUzhNMtLfZSUc50lwzWy5kPnnoRuw__",
      href: "/categories/road-trip",
    },
    {
      title: "Beach Trip",
      description: "Relax on pristine shores and coastal paradises",
      image: "https://s3-alpha-sig.figma.com/img/f3e4/e8f3/1a9e30eb149922f52b9068515c639f79?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=P4shwAhzmwczDz2CeeRIoyTFZPUpYuiIT97V0W3n1u-fgg8JI101MdLjc7e9XAWFczkRSGXnqUHTCeLidVzu5mRAUj531m~S77gCvAErcUPLUjxsATSvW-GOllmzK6EtYHuPWirh-pc3rjKbzY3HSK3U5TqpVMpZnE0ngzUns5YFf7zz3iXoNq0tJMoS5nlpJ4UsJTlprdotlToKOMUmI-IAxw9x4i0UyD-Ii7eMkt0dV1~JpEsRp07LHWLe41SX4eNb-z4E16-8pEJcMBbbWZo6FXNhbye4bkcqn0pGGTO1yOA2oCt9CoUNUJaoPc6BE6dmjkJYCA6nKRitPSHAIg__",
      href: "/categories/beach-trip",
    },
    {
      title: "Off-Site Tours",
      description: "Discover hidden gems and local adventures",
      image: "https://s3-alpha-sig.figma.com/img/52bf/3051/ee841fd89c2d6767d13d34472e65692c?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WFixMksxBbr~dlTTj-SHijaT7yKBI6Im7kkWe~34FPCN-jNBpZZr1SeNJAlTjE6azeFIcV3V1NT6l~5hHbG-0rd099Zl6Jlk55qj5tlYN~CXtOZJpV4v0AlhcPDfx0PjJRtjepQsXzRvaNZ6m2W8iyqbDmhKHNtJ6qQiJc5yQRhZt3C5Wg0cZXwVe06NhZzjx3c0LFvnnO2bMoxP8i~CLb07W78AhdU228bnIUCt45Kdzgrw-0OwhlF6c6Q1rgOdZ6nKWmtt-lSlov281mOFXYDThdSALXAwcz0evV2hbOnmcPnp9WUwLvx5D4~yTs6ZXQsVWAqOmt85HCSZoYGqHQ__",
      href: "/categories/off-site-tours",
    },
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-b from-white to-[#f2f9f4] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        {/* Heading with decorative elements */}
        <div className="relative mb-8 md:mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B5C1E] inline-block relative font-rammeto-one">
            Travel Categories
            <span className="absolute -left-6 md:-left-8 top-1/2 w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#5fa6b7]" />
            <span className="absolute -right-6 md:-right-8 top-1/2 w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#5fa6b7]"></span>
          </h1>
          <div className="w-16 md:w-24 h-1 bg-[#0B5C1E] mx-auto mt-4 md:mt-6"></div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {categories.map((category, index) => (
            <Link
              href={category.href}
              key={index}
              className="block transform transition duration-500 hover:-translate-y-4 hover:shadow-2xl"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full border border-gray-100">
                {/* Image Container - Taller aspect ratio */}
                <div className="aspect-[4/5] relative">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover transition duration-700 hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Category title positioned at bottom of image */}
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 text-white z-10">
                    <h3 className="text-2xl md:text-3xl font-bold">{category.title}</h3>
                  </div>
                </div>

                {/* Description area */}
                <div className="p-4 md:p-6">
                  <p className="text-gray-600 text-base md:text-lg">{category.description}</p>

                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
