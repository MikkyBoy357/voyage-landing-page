import Image from "next/image"
import Link from "next/link"

export default function TravelCategories() {
  const categories = [
    {
      title: "Road Trip",
      description: "Explore scenic highways and hidden pathways",
      image: "https://firebasestorage.googleapis.com/v0/b/flash-chat-3a9a7.appspot.com/o/voyage%2Fsection3(1).png?alt=media&token=848532f7-4485-4117-bd0d-8c10aa6d5248"
    },
    {
      title: "Beach Trip",
      description: "Relax on pristine shores and coastal paradises",
      image: "https://firebasestorage.googleapis.com/v0/b/flash-chat-3a9a7.appspot.com/o/voyage%2Fsection3(2).png?alt=media&token=def19f3f-22dd-4a6d-be82-8402f6dec36e",
    },
    {
      title: "Off-Site Tours",
      description: "Discover hidden gems and local adventures",
      image: "https://firebasestorage.googleapis.com/v0/b/flash-chat-3a9a7.appspot.com/o/voyage%2Fsection3(3).png?alt=media&token=b0dc948f-c712-4854-a8e0-bfb7cf6f71c0",
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
            <div
              
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
