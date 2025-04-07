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
            src="https://s3-alpha-sig.figma.com/img/e428/ba77/fbfaab5cd60ef9d6f22f0501106038d1?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lfBqQTzvVwjWRrGAYHHMLDyMPM7rtXBI4B4OVtO9fnRk7rtCDRSkSYg4p-koaew6OieY-DYiCQVR~55MMapx3DrzOEH~gcy20kqeQL4m6ihqaR3~Z31YaJbihtg6eya5N40r0VLlar8pQlQbaHpwM452NHDN28az5WlMOoAaAKJUfu2YfgLF1fBygC2-JVPimHqP3n36Iu2lrJ9TY7XxeRKQQMXoNDZJF~FGB1B70kaVvwNagndYzedvyrMFJAzQusMghRapmmuVdA1nR0VxYZfK0Zf~0yCBE-Njh3wfHxcIaOsSY-zPtWZ9e~G1Tm9xOES87RawR4hAM5Ic9KXpvQ__"
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
              src="https://s3-alpha-sig.figma.com/img/2fdc/db7f/153172422d31a9f0916d548c95fa6511?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c~7y084KXtXHYOdR6BU66OVxI683QfKm1EiN~7ujxEK~y1A~nFx83HH-dWcsa~V6LpE3~qz2EFneRDMSEWT5pCqCcM2-qszwMr~ouXIzS~~1TxOqs4FtPQKFMday9PpOYjjvEHWOq4ewFgEoJvAKW0tYkVCUQV986P7J1s~IWTV6hfXQm4GpeV8DJddLj4i6MD5angoreAXu2rzp3GrxohkAZf4LXPfTNzirvpT~sbSrzMNj6jGC36K5uATNDN7gMTELZSR4tRjmUSXOD5-ySfC~XNAZ1Pg20lUp7hG5aPKYLXqv9dUGt0bPDEuSdMRF6fAFlHhaoRO94JRr-QExdA__"
              alt="Decorative travel image 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Circle 2 (second biggest) - Bottom right corner */}
          <div className="absolute bottom-[5%] right-[5%] sm:bottom-[5%] sm:right-[5%] md:bottom-[5%] md:right-[5%] w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[130px] md:h-[130px] lg:w-[170px] lg:h-[170px] rounded-full overflow-hidden border-2 sm:border-3 md:border-4 border-white shadow-sm z-0">
            <Image
              src="https://s3-alpha-sig.figma.com/img/3c40/0f89/748e48de93a93a9e5ae56e553a9796cd?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eSLRNIC0lL2bsN94uznGDs10rZxdL7PNJnpdhE8wUaYEi1Yhim8BXWasqLNuX9b1bTNLXqpG-r0ZbNA3VU4sNk1s~Ylp~ilcg9-2UnAucXADipsfP-DhTNPahSvirh8902V7tv21HMzC9OWu2Divs~fVRNvl4YhX3TG3zo97EAJXRyNxHcpywDRr494CMmDMN7XZevIM7SDYu5VcK0bHnnouwU7Jq5KXg1JNgIp5Wm3iJ15LX4Ee7~Uzav2ykWc~ylsDUeMtLJUxeqCP3y7dtwigFX3we8dzPtpk-P7JBDRw0UDbT3OWQ8Qbmdus7BqRInh6pz6lou3CY1~KK1nr9g__"
              alt="Decorative travel image 2"
              fill
              className="object-cover"
            />
          </div>

          {/* Circle 3 (smallest) - Bottom left */}
          <div className="absolute bottom-[7%] left-[20%] sm:bottom-[7%] sm:left-[20%] md:bottom-[7%] md:left-[20%] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] rounded-full overflow-hidden border-2 sm:border-3 md:border-4 border-white shadow-sm z-0">
            <Image
              src="https://s3-alpha-sig.figma.com/img/d2c2/61e1/3c60d4aa4b6cb9973c2016a641f98e5f?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kSVzCowuvRuwHfvUtH1kQlhtKxYtM6ailIu7eBzV~pAArc63eD8R8dtfj5iLHR4rxbhQjZQLZ72JoD5eg2z245iBXKKixqBQtqlkBUBrzEuZ7B8SefQ7WqEIvTW3mfpTs64~IGo9btOQfi4fmZ1OobE5uM-MmWe1vtlrZcTvFL3yPYd5nR8APYShO4JNK31zt8p-HvE20rMPUppo7GFrCa~Oy65QQ1OwdRArJ0~suqxovqGBOeer0XOHUvcjythrRhrFhIXYyB~txE6RobRNnOBScaqwv1WNj0M6yYRfGqijUS4znJRmKVjuWfDtVHusEQ1q1ikZ2pvFRm47mCOmJQ__"
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
                  src="https://s3-alpha-sig.figma.com/img/6c15/5650/947fb4578d92e908a39d65a164d57195?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XVDZ9GD3srEQb~R84MNfqRMj40SMdoew2HDOMEBTCaBQ3~NXRVIrjmovkaQdubvfbLD9nuDjXx6VypNnUHqmqwKotlJ7WFF1S7IkECVEn04PAVCeGcG9bGpK5qH9Q8nmOynaUItog3BPso9I7mec1VD3GcWOSLvXzdnK-OCO~mqoVQYUMVRIrZW~UrKpepIUjaSM11NEdf1wM0D1UwXdZ75GdSri5HO6DqgIv~TYf8io595pQ72p54aK3MBy2xAO3W2xB22MiEOdL9tUIUxKqtRd2VTZn3k2nEXTCaCYHqNFJ9GVczG3OHjWVwM2q4xuqtFwJFpg7nEIsACC-Gqb2w__"
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
                  src="https://s3-alpha-sig.figma.com/img/8f65/c6a6/33fce8b1250c94a28bb08cfd14f18b7f?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NXuVEuSWfEKjXs8L6hrmRksrReIHt0Zj-XQ2x-B3XhyAAhyuL2p2nVcLhP5kBhoUE1stkzRYJB89bx~HliZkkVZZpyEmg7g8W6k~AT0w5O-gWrovt23Jx1PrylLrwPNylvcR0xiTmMpjZF8KD2wIk4UPx4PEOtmTGU-y1UHv3YG5tA9P~PDkGujCqzU4-zjSOpvX0hUUoYI9CPRFVjjCGmkEGRKXKIUvPNA69RZxHZX-HJaisUxRiNhNCp1c5YitC-wvAuVMjyOGRr2pf0zyaDTXH-3ravmfqegEyionHeBoXq8QTbfrTwXQqe0DHNxjXWDPqUoR6TMvHfa9zUMUOw__"
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
                  src="https://s3-alpha-sig.figma.com/img/c631/6699/65bc1e1246d3e040fd5ea716e7c20d65?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tnHyXjEk4S9hjTfXv2~DNYo-H6hOaGqIr3h4i3uFxuyLWxWR6tpjMYrKIxIBmLTt6l3QcmNwGDkEg6aQ7f16ooSC4kiC7pd53SZGEYSI7Pjunj2VZdyGM0vTY51uWk~78~4mzwznZc5YoU7WN9Tg1I4Gk2AsJ9vML~LoEWW8ViwfKafdDsrCB2XblRygHfUni0-H-o2hZ2BsRcTBP4X4ZxjZVILy0iSH0mar0V9c9Vnva0bDaFJtKQoCOLuCwHr01xjhPYcFIsue3Jm~KkDMVO3rlhFfz3c8X0MyAlmaz8yD~ko91s2PobjhwuMmD6qNNIocDyOzbpfUFgYCFQPgyg__"
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
                "url('https://s3-alpha-sig.figma.com/img/c9ee/75c6/38b22360c3eb291efebfe73aeedb3342?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MLjhWRb6ArtcXEIdGSNQ96wlB0MMkqAjvNSFMMsotkSNMZh02Dr6srC8F6X3JRmAEKSsrY0yNK5fh8LplRGzP7HRhVbN2qnKAFfDcDy1kDUN8WcdvET35MOKBfbYIRRIEvvM0BL43tE-EMKQnxlTzzYiDsSh~~9cJwLN0hhh2RAD8Ki6O1C1G6O2lc5k77eHqN2SgIVmN1Cu3MndBl4SUXzMctzkBNKEy3IST3-fnL2Xw4R4-z2GQrl1nOnmqBbin8lToj0HRypCdagy6-GOBC085csAp-73dN3eHHLStRCXi0-pEoDxCcxjSKPsAKqAvmEUMAMzzU8qpq59sjCGbA__')",
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

