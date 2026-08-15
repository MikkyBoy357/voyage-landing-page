/**
 * Brand lockup for Odyssey Horizon: a sun rising over a horizon, inside a ring.
 *
 * Every header and the footer render this, so the mark can be swapped here once
 * rather than in five places. The wordmark inherits font size from the parent.
 */

export function LogoMark({
  size = 26,
  className = "",
}: {
  size?: number
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Ring */}
      <circle
        cx="16"
        cy="16"
        r="14"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.55"
      />
      {/* Rising sun */}
      <path d="M9 20 A7 7 0 0 1 23 20 Z" fill="currentColor" />
      {/* Horizon */}
      <path
        d="M3 20 H29"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Light above the horizon */}
      <path
        d="M16 4.5 V7.5 M25.5 8.5 L23.4 10.6 M6.5 8.5 L8.6 10.6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  )
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
