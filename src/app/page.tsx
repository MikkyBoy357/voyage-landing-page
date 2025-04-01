import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-[#5fa6b7] text-white py-4 px-2 shadow-md">
        <div className=" mx-10 flex justify-between items-center">
          <Link href="#" className="py-4">
            <img src="voyage-white.svg" alt="logo" className="h-[65]" />
          </Link>
          <div className="hidden md:flex space-x-8 text-xl">
            <Link href="#" className="transition hover:text-[#05415E]">About Us</Link>
            <Link href="#" className="transition hover:text-[#05415E]">Categories</Link>
            <Link href="#" className="transition hover:text-[#05415E]">Activities</Link>
            <Link href="#" className="transition hover:text-[#05415E]">Contact Us</Link>
          </div>
          <button className="md:hidden">☰</button>
        </div>
      </nav>

      {/* Home image */}
      <div
        className="w-full"
        style={{
          height: "calc(100vh - 8rem)", // Adjust height to full screen minus header height
          backgroundImage: "url('https://s3-alpha-sig.figma.com/img/e428/ba77/fbfaab5cd60ef9d6f22f0501106038d1?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lfBqQTzvVwjWRrGAYHHMLDyMPM7rtXBI4B4OVtO9fnRk7rtCDRSkSYg4p-koaew6OieY-DYiCQVR~55MMapx3DrzOEH~gcy20kqeQL4m6ihqaR3~Z31YaJbihtg6eya5N40r0VLlar8pQlQbaHpwM452NHDN28az5WlMOoAaAKJUfu2YfgLF1fBygC2-JVPimHqP3n36Iu2lrJ9TY7XxeRKQQMXoNDZJF~FGB1B70kaVvwNagndYzedvyrMFJAzQusMghRapmmuVdA1nR0VxYZfK0Zf~0yCBE-Njh3wfHxcIaOsSY-zPtWZ9e~G1Tm9xOES87RawR4hAM5Ic9KXpvQ__')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <section>
        {/* Make your travel */}
        <div>
          <div className="bg-[#fef3ea]">
            <div className="flex flex-col mx-15 md:flex-row items-center justify-center py-10 text-center md:text-left">
              <span className="text-2xl md:text-4xl font-medium text-[#11435c]">Make Your Travel <br />Dreams Reality</span>
              <div
                className="mx-20 h-6 md:h-22 w-px"
                style={{
                  backgroundImage: 'linear-gradient(to bottom, gray 50%, rgba(255, 255, 255, 0) 50%)',
                  backgroundSize: '1px 10px', // Adjust the second value (height) to control the dash length
                }}
              ></div>
              <span className="text-xl md:text-2xl font-medium text-[#7E3F2B]">We bring everywhere alive <br />with tours that cover and <br />look beyond.</span>
            </div>
          </div>
          <div
            className="w-full"
            style={{
              height: "65vh", // 1/4 of the screen height
              backgroundImage: "url('https://s3-alpha-sig.figma.com/img/c9ee/75c6/38b22360c3eb291efebfe73aeedb3342?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MLjhWRb6ArtcXEIdGSNQ96wlB0MMkqAjvNSFMMsotkSNMZh02Dr6srC8F6X3JRmAEKSsrY0yNK5fh8LplRGzP7HRhVbN2qnKAFfDcDy1kDUN8WcdvET35MOKBfbYIRRIEvvM0BL43tE-EMKQnxlTzzYiDsSh~~9cJwLN0hhh2RAD8Ki6O1C1G6O2lc5k77eHqN2SgIVmN1Cu3MndBl4SUXzMctzkBNKEy3IST3-fnL2Xw4R4-z2GQrl1nOnmqBbin8lToj0HRypCdagy6-GOBC085csAp-73dN3eHHLStRCXi0-pEoDxCcxjSKPsAKqAvmEUMAMzzU8qpq59sjCGbA__')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="bg-light-bg text-text flex-grow py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-poor md:text-5xl font-bold text-primary mb-6">
            Make Your Travel <br />
            <span className="text-accent">Dreams Reality</span>
          </h1>
          <p className="text-lg mb-8">
            We bring everywhere alive with tours that cover and look beyond.
          </p>
          <button className="bg-secondary hover:bg-primary text-white font-bold py-3 px-8 rounded-full transition">
            Explore Tours
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-2 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0F5524] mb-8">About Us</h2>
          <p className="text-lg text-text mb-4">
            Voyage is your go-to guide for <br />unforgettable travel experiences, offering <br />tips, recommendations, and insights on <br />top destinations, local cuisine, and <br />hidden gems. Start your adventure with us today!
          </p>
        </div>
      </section>
    </div>
  );
}