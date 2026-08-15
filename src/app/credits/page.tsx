import Image from "next/image"
import credits from "./credits.json"

type Credit = {
  file: string
  artist: string | null
  license: string
  license_url: string | null // public-domain entries have no licence page
  source: string
  original_px: string
}

const CREDITS = credits as Record<string, Credit>

/** Grouped for readability: destination galleries first, then site furniture. */
const GROUPS: { label: string; match: (slot: string) => boolean }[] = [
  { label: "Greece", match: (s) => s.startsWith("santorini") },
  { label: "Tanzania", match: (s) => s.startsWith("serengeti") },
  { label: "Indonesia", match: (s) => s.startsWith("bali") },
  { label: "Morocco", match: (s) => s.startsWith("morocco") },
  { label: "Norway", match: (s) => s.startsWith("norway") },
  { label: "Japan", match: (s) => s.startsWith("japan") },
  { label: "Around the Site", match: () => true },
]

function groupSlots() {
  const remaining = new Set(Object.keys(CREDITS))
  return GROUPS.map(({ label, match }) => {
    const slots = [...remaining].filter(match).sort()
    slots.forEach((s) => remaining.delete(s))
    return { label, slots }
  }).filter((g) => g.slots.length > 0)
}

export default function CreditsPage() {
  const groups = groupSlots()
  const total = Object.keys(CREDITS).length

  return (
    <div className="min-h-screen">
      <section className="pt-8 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <span className="text-[#C8A960] text-xs tracking-[0.3em] uppercase">
            Attribution
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 font-playfair">
            Image <span className="text-gradient-gold">Credits</span>
          </h1>
          <div className="w-16 h-0.5 bg-[#C8A960] mt-6" />
          <p className="text-[#FAF6EE]/50 mt-6 max-w-2xl text-lg">
            All {total} photographs on this site come from Wikimedia Commons and
            are used under open licences. Each is credited below to its
            photographer, with a link to the original file and its licence
            terms.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-12">
          {groups.map(({ label, slots }) => (
            <div key={label}>
              <h2 className="text-xl font-bold text-white font-playfair mb-5">
                {label}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {slots.map((slot) => {
                  const c = CREDITS[slot]
                  return (
                    <div
                      key={slot}
                      className="flex gap-4 bg-[#111827] border border-[#C8A960]/10 p-4"
                    >
                      <div className="relative w-24 h-16 shrink-0 overflow-hidden">
                        <Image
                          src={`/images/${slot}.jpg`}
                          alt={c.file.replace(/^File:/, "")}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </div>
                      <div className="min-w-0 text-sm">
                        <p className="text-white/90 truncate" title={c.file}>
                          {c.file.replace(/^File:/, "").replace(/\.[a-z]+$/i, "")}
                        </p>
                        <p className="text-[#FAF6EE]/40 text-xs mt-1 truncate">
                          {c.artist ?? "Unknown photographer"}
                        </p>
                        <div className="flex items-center gap-3 mt-2 text-xs">
                          {c.license_url ? (
                            <a
                              href={c.license_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#C8A960] hover:underline"
                            >
                              {c.license}
                            </a>
                          ) : (
                            <span className="text-[#C8A960]">{c.license}</span>
                          )}
                          <a
                            href={c.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#FAF6EE]/30 hover:text-[#C8A960] transition-colors"
                          >
                            Original
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
