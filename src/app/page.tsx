"use client"
import Image from "next/image"
import Link from "next/link"
import TravelCategories from "./components/travel-categories"
import PopularTours from "./components/popular-tours"
import Footer from "./components/footer"
import { useState, useEffect } from "react"

export default function Home() {
  const [isHeroVisible, setIsHeroVisible] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const heroSection = document.getElementById("hero")
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting)
      },
      {
        threshold: 0.5, // Trigger when 50% of hero is visible
        rootMargin: "-50px 0px 0px 0px", // Adjust this offset as needed
      },
    )

    if (heroSection) {
      observer.observe(heroSection)
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection)
      }
    }
  }, [])

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      {/* Navigation - simplified logic */}
      <nav
        className={`fixed top-0 left-0 w-full ${isHeroVisible ? "bg-transparent" : "bg-[#84B8C3]"} text-white py-4 px-2 z-50 transition-colors duration-300`}
      >
        <div className="mx-4 md:mx-10 flex justify-between items-center">
          <Link href="#hero" className="py-2">
            <img src="voyage-white.svg" alt="logo" className="h-8 md:h-12" />
          </Link>
          <div className="hidden md:flex space-x-4 lg:space-x-8 text-base lg:text-lg text-white">
            <Link href="#hero" className="transition hover:text-[#5fa6b7] py-2 text-gray-700">
              Home
            </Link>
            <Link href="#about" className="transition hover:text-[#5fa6b7] py-2 text-gray-700">
              About Us
            </Link>
            <Link href="#categories" className="transition hover:text-[#5fa6b7] py-2 text-gray-700">
              Categories
            </Link>
            <Link href="#tours" className="transition hover:text-[#5fa6b7] py-2 text-gray-700">
              Tours
            </Link>
            <Link href="#contact" className="transition hover:text-[#5fa6b7] py-2 text-gray-700">
              Contact Us
            </Link>
          </div>
          <button
            className="md:hidden p-2 transition-transform duration-300 ease-in-out"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ transform: mobileMenuOpen ? "rotate(90deg)" : "rotate(0)" }}
          >
            ☰
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-[#84B8C3] text-white py-4 px-6 z-50 shadow-lg transition-all duration-300 ease-in-out ${mobileMenuOpen
            ? "max-h-[300px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2 overflow-hidden py-0"
            }`}
        >
          <div className="flex flex-col space-y-4">
            <Link
              href="#hero"
              className="transition hover:text-[#5fa6b7] py-2 transform hover:translate-x-2 duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="transition hover:text-[#5fa6b7] py-2 transform hover:translate-x-2 duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#categories"
              className="transition hover:text-[#5fa6b7] py-2 transform hover:translate-x-2 duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="#tours"
              className="transition hover:text-[#5fa6b7] py-2 transform hover:translate-x-2 duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tours
            </Link>
            <Link
              href="#contact"
              className="transition hover:text-[#5fa6b7] py-2 transform hover:translate-x-2 duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with text overlaid on image - adjusted for shorter navbar */}
      <section
        id="hero"
        className="relative h-screen w-full flex flex-col md:flex-row items-center mt-[50px] snap-start overflow-hidden"
      >
        {/* Image - Full width on mobile, 45% on desktop */}
        <div className="w-full md:w-[45%] h-[40vh] md:h-full relative order-1">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/flash-chat-3a9a7.appspot.com/o/voyage%2Fsection1(1).png?alt=media&token=9bb77c1d-11af-4e94-ae7a-6baf55c7edd0"
            alt="Travel destination background"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent to-[#5fa6b7]/20"></div>
        </div>

        {/* Text and circles container */}
        <div className="w-full md:w-[55%] flex-1 md:h-full relative flex items-center justify-center md:justify-start order-2 py-8 md:py-0">
          {/* Text Content - Centered on mobile, left-aligned on desktop */}
          <div className="relative z-10 px-6 md:px-10 max-w-xl text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-poor-story text-[#05415E]">
              Make Your Travel
              <br />
              Dreams Reality
            </h1>
            <p className="text-base sm:text-2xl md:text-3xl text-[#7E3F2B] mt-4 font-poor-story">
              We bring everywhere alive with tours that cover and look beyond.
            </p>
          </div>

          {/* Decorative circles - Repositioned as requested */}
          {/* Circle 1 (biggest) - Middle right, half disappearing outside screen */}
          <div className="absolute top-1/2 -right-[100px] sm:-right-[120px] md:-right-[80px] transform -translate-y-1/2 w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] rounded-full overflow-hidden border-2 sm:border-3 md:border-4 border-white shadow-sm z-0">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/flash-chat-3a9a7.appspot.com/o/voyage%2Fsection1(2).png?alt=media&token=e7b7ad61-ad21-4bcf-a3f5-0e7f4fbaa9ab"
              alt="Decorative travel image 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Circle 2 (second biggest) - Bottom right corner */}
          <div className="absolute bottom-[5%] right-[5%] sm:bottom-[5%] sm:right-[5%] md:bottom-[5%] md:right-[5%] w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[130px] md:h-[130px] lg:w-[170px] lg:h-[170px] rounded-full overflow-hidden border-2 sm:border-3 md:border-4 border-white shadow-sm z-0">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/flash-chat-3a9a7.appspot.com/o/voyage%2Fsection1(3).png?alt=media&token=9562b343-11be-4b59-b492-c152642d42f7"
              alt="Decorative travel image 2"
              fill
              className="object-cover"
            />
          </div>

          {/* Circle 3 (smallest) - Bottom left */}
          <div className="absolute bottom-[7%] left-[20%] sm:bottom-[7%] sm:left-[20%] md:bottom-[7%] md:left-[20%] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] rounded-full overflow-hidden border-2 sm:border-3 md:border-4 border-white shadow-sm z-0">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/flash-chat-3a9a7.appspot.com/o/voyage%2Fsection1(4).png?alt=media&token=42401bd6-8ddd-4b09-92c8-52ac47bc731b"
              alt="Decorative travel image 3"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 md:w-10 md:h-10 text-[#5fa6b7]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden py-16 min-h-screen snap-start flex items-center">
        <div className="absolute bottom-[-150px] left-[-150px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] z-0">
          <div className="absolute w-full h-full border-[20px] md:border-[30px] border-[#0B5C1E] rounded-full"></div>
          <div className="absolute w-[66%] h-[66%] border-[15px] md:border-[20px] border-[#B2D6D9] rounded-full ml-[17%] mt-[17%]"></div>
          <div className="absolute w-[33%] h-[33%] border-[8px] md:border-[10px] border-white rounded-full ml-[33%] mt-[33%]"></div>
        </div>

        <div className="flex flex-wrap relative px-4 md:left-20 md:top-20 max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="w-full md:w-1/2 lg:pr-12 mb-8 md:mb-0">
            <h1 className="text-[#0B5C1E] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 font-rammeto-one">
              About Us
            </h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed font-poppins">
              Voyage is your go-to guide for unforgettable travel experiences, offering tips, recommendations, and
              insights on top destinations, local cuisine, and hidden gems. Start your adventure with us today!
            </p>
          </div>

          {/* Stacked Images Container - Responsive */}
          <div className="w-full md:w-1/2 relative h-[300px] sm:h-[400px] md:h-[550px] md:left-50 md:top-20">
            {/* Third image (bottom) */}
            <div className="absolute right-[40%] top-[20%] w-[60%] h-full overflow-hidden bg-black z-10 rounded-[20px] md:rounded-[40px] rounded-r-none">
              <div className="w-full h-full overflow-hidden">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/flash-chat-3a9a7.appspot.com/o/voyage%2Fsection2(2).jpg?alt=media&token=16787e5e-f1d1-45b8-9984-978da9e91707"
                  alt="Travel destination 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
            </div>

            {/* Second image (middle) */}
            <div className="absolute right-[20%] top-[10%] w-[60%] h-full overflow-hidden bg-blue-800 z-20 rounded-[20px] md:rounded-[40px] rounded-r-none">
              <div className="w-full h-full overflow-hidden">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/flash-chat-3a9a7.appspot.com/o/voyage%2Fsection2(3).jpg?alt=media&token=ff773596-e77c-4b75-8d0c-b5e925590270"
                  alt="Travel destination 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>
            </div>

            <div className="absolute right-0 top-0 w-[60%] h-full overflow-hidden bg-purple-600 z-30 rounded-[20px] md:rounded-[40px] rounded-r-none">
              <div className="w-full h-full overflow-hidden">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/flash-chat-3a9a7.appspot.com/o/voyage%2Fsection2(4).jpg?alt=media&token=c6b1579a-f207-4e75-9b6c-17185da27ec8"
                  alt="Travel destination 3"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 30vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dream" className="snap-start  flex flex-col justify-center h-screen">
        {/* Make your travel */}
        <div>
          <div className="bg-[#fef3ea]">
            <div className="flex flex-col mx-4 md:mx-15 md:flex-row items-center justify-center py-8 md:py-10 text-center md:text-left">
              <span className="text-xl sm:text-2xl md:text-4xl font-medium text-[#11435c] font-poor-story">
                Make Your Travel <br />
                Dreams Reality
              </span>
              <div
                className="mx-10 md:mx-20 h-6 md:h-22 w-px my-4 md:my-0"
                style={{
                  backgroundImage: "linear-gradient(to bottom, gray 50%, rgba(255, 255, 255, 0) 50%)",
                  backgroundSize: "1px 10px",
                }}
              ></div>
              <span className="text-lg sm:text-xl md:text-2xl font-medium text-[#7E3F2B] font-princess-sofia">
                We bring everywhere alive <br />
                with tours that cover and <br />
                look beyond.
              </span>
            </div>
          </div>
          <div
            className="w-full"
            style={{
              height: "50vh",
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/flash-chat-3a9a7.appspot.com/o/voyage%2Fsection2(1).png?alt=media&token=0e147700-fbbc-4201-9484-c08227925dd1')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </section>

      <section id="categories" className="snap-start">
        <TravelCategories />
      </section>

      <section id="tours" className="snap-start">
        <PopularTours />
      </section>

      <section id="contact" className="snap-start">
        <Footer />
      </section>
    </div>
  )
}

