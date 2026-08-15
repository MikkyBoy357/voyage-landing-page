"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

/**
 * The three overlapping photos in the "Our Story" section.
 *
 * Two behaviours:
 *  - Reveal: the cards fly in from off-axis and settle, staggered, the first
 *    time the section scrolls into view.
 *  - Hover: the stack fans apart, and whichever card is hovered lifts to the
 *    front while the others recede.
 *
 * Both collapse to a plain fade under prefers-reduced-motion.
 */

type Card = {
  src: string
  alt: string
  /** Resting position within the container. */
  box: string
  /** Resting tilt, degrees. */
  rest: number
  /** Extra tilt when the stack fans open. */
  fan: number
  /** Where the card flies in from. */
  from: string
  border: string
  priority?: boolean
}

const CARDS: Card[] = [
  {
    src: "/images/about-1.jpg",
    alt: "Traveller looking out over a mountain valley",
    box: "left-[5%] top-[12%] w-[55%] h-[75%]",
    rest: -3,
    fan: -7,
    from: "translate3d(-70px,40px,0) rotate(-14deg) scale(.86)",
    border: "border border-[#C8A960]/10",
  },
  {
    src: "/images/about-2.jpg",
    alt: "Group of travellers on a mountain trail",
    box: "right-[5%] top-0 w-[55%] h-[75%]",
    rest: 3,
    fan: 8,
    from: "translate3d(70px,-30px,0) rotate(14deg) scale(.86)",
    border: "border border-[#C8A960]/10",
  },
  {
    src: "/images/about-3.jpg",
    alt: "View from an aircraft window above the clouds",
    box: "left-[20%] bottom-0 w-[55%] h-[45%]",
    rest: -1,
    fan: 3,
    from: "translate3d(0,80px,0) rotate(6deg) scale(.9)",
    border: "border-2 border-[#C8A960]/20",
    priority: true,
  },
]

export default function StoryStack() {
  const ref = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)
  // Once the entrance has played out the stagger delay is dropped, so hover
  // responds immediately instead of waiting out the reveal offset.
  const [settled, setSettled] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)
  const [fanned, setFanned] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Skip straight to the resting state when motion is unwelcome.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true)
      setSettled(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          io.disconnect() // reveal once, never re-run
          // longest stagger + transition duration
          setTimeout(() => setSettled(true), 140 * CARDS.length + 900)
        }
      },
      { threshold: 0.25 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="relative h-[400px] md:h-[550px] order-2 lg:order-1"
      onMouseEnter={() => setFanned(true)}
      onMouseLeave={() => {
        setFanned(false)
        setHovered(null)
      }}
    >
      {/* Glow that blooms behind the stack as it settles */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A960]/10 blur-3xl transition-all duration-1000"
        style={{ opacity: revealed ? 1 : 0, transform: `translate(-50%,-50%) scale(${revealed ? 1 : 0.5})` }}
      />

      {CARDS.map((card, i) => {
        const isHovered = hovered === i
        const dimmed = hovered !== null && !isHovered

        const tilt = fanned ? card.fan : card.rest
        const spread = fanned ? (i === 0 ? -18 : i === 1 ? 18 : 0) : 0
        const rise = fanned ? (i === 2 ? 16 : -10) : 0

        const resting = `translate3d(${spread}px, ${rise}px, 0) rotate(${tilt}deg) scale(${
          isHovered ? 1.06 : dimmed ? 0.97 : 1
        })`

        return (
          <div
            key={card.src}
            onMouseEnter={() => setHovered(i)}
            className={`absolute overflow-hidden rounded-lg shadow-2xl ${card.box} ${card.border}`}
            style={{
              transform: revealed ? resting : card.from,
              opacity: revealed ? (dimmed ? 0.55 : 1) : 0,
              zIndex: isHovered ? 30 : 10 + i,
              filter: dimmed ? "saturate(.65) brightness(.8)" : "none",
              boxShadow: isHovered
                ? "0 30px 60px -18px rgba(0,0,0,.85), 0 0 0 1px rgba(200,169,96,.55), 0 12px 40px -12px rgba(200,169,96,.4)"
                : "0 20px 40px -16px rgba(0,0,0,.7)",
              transition:
                "transform 900ms cubic-bezier(.16,1,.3,1), opacity 700ms ease-out, box-shadow 450ms ease, filter 450ms ease",
              transitionDelay: settled ? "0ms" : `${i * 140}ms`,
              willChange: "transform, opacity",
            }}
          >
            <Image
              src={card.src}
              alt={card.alt}
              fill
              className="object-cover transition-transform duration-700"
              style={{ transform: isHovered ? "scale(1.08)" : "scale(1)" }}
              sizes="(max-width: 768px) 60vw, 30vw"
              priority={card.priority}
            />
            {/* Gold wash on the focused card */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#C8A960]/25 to-transparent transition-opacity duration-500"
              style={{ opacity: isHovered ? 1 : 0 }}
            />
          </div>
        )
      })}
    </div>
  )
}
