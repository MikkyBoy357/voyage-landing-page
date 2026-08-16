/**
 * Brand lockup for Odyssey Horizon.
 *
 * Every header and the footer render this, so the mark changes in one place.
 * All explored marks are kept below — switch brands by changing ACTIVE_MARK,
 * and regenerate the favicon with scripts/make-favicon.py to match.
 */

export type MarkName = "compass" | "horizonRing" | "monogram" | "openHorizon" | "sextant"

/** The mark currently in use. Change this one line to swap the logo. */
export const ACTIVE_MARK: MarkName = "horizonRing"

type MarkProps = { size?: number; className?: string }

function Svg({ size = 26, className = "", children }: MarkProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  )
}

/** Compass rose — a four-point star in a thin ring. Holds its shape at 16px. */
export const CompassMark = (p: MarkProps) => (
  <Svg {...p}>
    <circle cx="16" cy="16" r="13.5" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    <path
      d="M16 2.5 L18.4 13.6 L29.5 16 L18.4 18.4 L16 29.5 L13.6 18.4 L2.5 16 L13.6 13.6 Z"
      fill="currentColor"
    />
  </Svg>
)

/** Sun rising over a horizon, in a ring. The first Odyssey Horizon mark. */
export const HorizonRingMark = (p: MarkProps) => (
  <Svg {...p}>
    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.4" opacity="0.55" />
    <path d="M9 20 A7 7 0 0 1 23 20 Z" fill="currentColor" />
    <path d="M3 20 H29" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path
      d="M16 4.5 V7.5 M25.5 8.5 L23.4 10.6 M6.5 8.5 L8.6 10.6"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      opacity="0.7"
    />
  </Svg>
)

/** O/H monogram. */
export const MonogramMark = (p: MarkProps) => (
  <Svg {...p}>
    <circle cx="16" cy="16" r="13.5" stroke="currentColor" strokeWidth="1.7" />
    <path
      d="M11 9.5 V22.5 M21 9.5 V22.5 M11 16 H21"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
    />
  </Svg>
)

/** Unenclosed horizon curve with a rising sun and a guiding star. */
export const OpenHorizonMark = (p: MarkProps) => (
  <Svg {...p}>
    <path
      d="M1.5 21 Q16 16.5 30.5 21"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
    />
    <path d="M9.5 20.2 A6.5 6.5 0 0 1 22.5 20.2" fill="currentColor" />
    <path
      d="M16 3 L17.3 7.2 L21.5 8.5 L17.3 9.8 L16 14 L14.7 9.8 L10.5 8.5 L14.7 7.2 Z"
      fill="currentColor"
      opacity="0.85"
    />
  </Svg>
)

/** Sextant arc sighting the sun. */
export const SextantMark = (p: MarkProps) => (
  <Svg {...p}>
    <path d="M4 26 A16 16 0 0 1 28 26" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.55" />
    <path d="M4 26 H28" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="16" cy="14.5" r="4.6" fill="currentColor" />
    <path d="M16 26 L16 19.1" stroke="currentColor" strokeWidth="1.4" />
  </Svg>
)

export const MARKS: Record<MarkName, (p: MarkProps) => React.ReactElement> = {
  compass: CompassMark,
  horizonRing: HorizonRingMark,
  monogram: MonogramMark,
  openHorizon: OpenHorizonMark,
  sextant: SextantMark,
}

export function LogoMark({ size = 26, className = "" }: MarkProps) {
  const Mark = MARKS[ACTIVE_MARK]
  return <Mark size={size} className={className} />
}

export default function Logo({
  className = "text-xl",
  markSize = 26,
}: {
  className?: string
  markSize?: number
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 font-bold font-playfair ${className}`}>
      <LogoMark size={markSize} className="text-[#C8A960] shrink-0" />
      <span className="tracking-wide">
        <span className="text-[#C8A960]">ODYSSEY</span>
        <span className="text-white"> HORIZON</span>
      </span>
    </span>
  )
}
