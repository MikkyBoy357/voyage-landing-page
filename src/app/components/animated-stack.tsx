"use client"

import { useState, useEffect, useRef, type TouchEvent, SetStateAction } from "react"
import Image from "next/image"
import { useMediaQuery } from "../hooks/use-media-query"
type ImageType = {
  src: string
  alt?: string
  caption?: string
}

type AnimatedImageStackProps = {
  images: ImageType[]
  size?: {
    width: number
  }
}

const AnimatedImageStack = ({  images, size = { width: 400 } }: AnimatedImageStackProps)=> {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isSpread, setIsSpread] = useState(true) // Set to true by default
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState<number | null>(null)
  const [dragEnd, setDragEnd] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Check if we're on a large screen
  const isLargeScreen = useMediaQuery("(min-width: 1024px)")

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  // Auto rotate images when not hovering or dragging
  useEffect(() => {
    if (isHovering || isDragging) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovering, isDragging, images.length])

  // Calculate dimensions - now square
  const width = size.width || 400
  const height = width // Square shape

  // Handle touch start
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(null) // Reset touchEnd
    setIsHovering(true) // Pause auto-rotation during touch
  }

  // Handle touch move
  const handleTouchMove = (e: TouchEvent) => {
    // Prevent default only if we're actively swiping horizontally
    if (touchStart) {
      const xDiff = touchStart - e.targetTouches[0].clientX
      if (Math.abs(xDiff) > 10) {
        e.preventDefault()
      }
    }
    setTouchEnd(e.targetTouches[0].clientX)
  }

  // Handle touch end
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      // Next image
      setActiveIndex((prev) => (prev + 1) % images.length)
    } else if (isRightSwipe) {
      // Previous image
      setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    // Reset touch positions
    setTouchStart(null)
    setTouchEnd(null)

    // Resume auto-rotation after a delay
    setTimeout(() => {
      setIsHovering(false)
    }, 1000)
  }

  // Handle mouse down (start dragging)
  const handleMouseDown = (e: { preventDefault: () => void; clientX: SetStateAction<number | null> }) => {
    e.preventDefault()
    setIsDragging(true)
    setDragStart(e.clientX)
    setDragEnd(null)
    document.body.style.userSelect = "none" // Prevent text selection while dragging
  }

  // Handle mouse move
  const handleMouseMove = (e: { clientX: SetStateAction<number | null> }) => {
    if (!isDragging) return
    setDragEnd(e.clientX)
  }

  // Handle mouse up (end dragging)
  const handleMouseUp = () => {
    if (!isDragging) return
    document.body.style.userSelect = "" // Re-enable text selection

    if (dragStart !== null && dragEnd !== null) {
      const distance = dragStart - dragEnd
      const isLeftSwipe = distance > minSwipeDistance
      const isRightSwipe = distance < -minSwipeDistance

      if (isLeftSwipe) {
        // Next image
        setActiveIndex((prev) => (prev + 1) % images.length)
      } else if (isRightSwipe) {
        // Previous image
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
      }
    }

    // Reset drag state
    setIsDragging(false)
    setDragStart(null)
    setDragEnd(null)

    // Resume auto-rotation after a delay
    setTimeout(() => {
      setIsHovering(false)
    }, 1000)
  }

  // Handle mouse enter
  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  // Handle mouse leave during drag
  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp() // End drag if mouse leaves the container
    }
    setIsHovering(false)
  }

  // Handle click to toggle spread
  const handleSpreadClick = () => {
    setIsSpread(!isSpread)
  }

  // Add global mouse up event listener to handle cases where mouse is released outside the component
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        handleMouseUp()
      }
    }

    window.addEventListener("mouseup", handleGlobalMouseUp)

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp)
    }
  }, [isDragging, dragStart, dragEnd])

  // Add passive touch event listeners for better performance
  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const touchStartHandler = (e: any) => handleTouchStart(e)
    const touchMoveHandler = (e: any) => handleTouchMove(e)
    const touchEndHandler = () => handleTouchEnd()

    element.addEventListener("touchstart", touchStartHandler, { passive: true })
    element.addEventListener("touchmove", touchMoveHandler, { passive: false })
    element.addEventListener("touchend", touchEndHandler, { passive: true })

    return () => {
      element.removeEventListener("touchstart", touchStartHandler)
      element.removeEventListener("touchmove", touchMoveHandler)
      element.removeEventListener("touchend", touchEndHandler)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ width: `${width}px`, height: `${height}px` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {images.map((image, index) => {
        const isActive = index === activeIndex

        // Calculate position in stack relative to active index
        const positionFromActive = (index - activeIndex + images.length) % images.length

        // Determine if this image is within the visible spread range (2 on each side)
        const isWithinSpreadRange = positionFromActive <= 2 || positionFromActive >= images.length - 2

        // Determine if this is a left or right side image
        const isLeftSide = positionFromActive > images.length / 2
        const isRightSide = !isLeftSide && positionFromActive !== 0

        // Determine if this should be stacked (beyond the first 2 on each side)
        const shouldStack = !isWithinSpreadRange

        // Assign z-index based on position from active
        const zIndex =
          positionFromActive === 0
            ? images.length
            : shouldStack
              ? isLeftSide
                ? 1
                : 2 // Stacked images get lower z-index
              : images.length - positionFromActive // Spread images get higher z-index based on position

        // Base spread factor - smaller for large screens to prevent excessive spread
        const baseSpreadFactor = isLargeScreen ? 0.8 : 1.2

        // Calculate position for spread images
        let offsetX = 0
        let offsetY = 0
        let rotation = 0

        if (isActive) {
          // Active image stays centered
          offsetX = 0
          offsetY = 0
          rotation = 0
        } else if (shouldStack) {
          // Stacked images - put them behind the last visible spread image on each side
          if (isLeftSide) {
            // Left stack - position behind the leftmost spread image
            offsetX = (-width / 3) * baseSpreadFactor
            offsetY = 5
            rotation = -10
          } else {
            // Right stack - position behind the rightmost spread image
            offsetX = (width / 3) * baseSpreadFactor
            offsetY = 5
            rotation = 10
          }
        } else {
          // Spread images - calculate based on position from active
          if (isLeftSide) {
            // Left side images
            const distanceFromEnd = images.length - positionFromActive
            offsetX = -(distanceFromEnd * (width / 6) * baseSpreadFactor)
            offsetY = Math.abs(distanceFromEnd) * 5
            rotation = -(distanceFromEnd * 5)
          } else {
            // Right side images
            offsetX = positionFromActive * (width / 6) * baseSpreadFactor
            offsetY = Math.abs(positionFromActive) * 5
            rotation = positionFromActive * 5
          }
        }

        // Calculate dynamic drag offset for active image when dragging
        let dragOffset = 0
        if (isActive && isDragging && dragStart !== null && dragEnd !== null) {
          dragOffset = (dragEnd - dragStart) / 5 // Divide by 5 to reduce the movement
        }

        // Calculate scale based on position
        const scale = isActive ? 1 : shouldStack ? 0.8 : 0.9

        return (
          <div
            key={index}
            className="absolute transition-all duration-500 ease-in-out shadow-lg overflow-hidden cursor-pointer"
            style={{
              zIndex,
              transform: isActive
                ? `translate3d(${dragOffset}px, 0, 0)`
                : `translate3d(${offsetX}px, ${offsetY}px, 0) rotate(${rotation}deg) scale(${scale})`,
              width: "100%",
              height: "100%",
              opacity: isActive ? 1 : shouldStack ? 0.7 : 0.9,
              border: "4px solid white",
              boxShadow: isActive
                ? "0 10px 30px rgba(0, 0, 0, 0.2)"
                : shouldStack
                  ? "0 5px 15px rgba(0, 0, 0, 0.1)"
                  : "0 15px 25px rgba(0, 0, 0, 0.15)",
              borderRadius: "4px",
              transition: isDragging && isActive ? "none" : "transform 300ms ease-out, opacity 300ms ease-out",
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
            onClick={() => {
              if (!isDragging) {
                if (!isActive) {
                  setActiveIndex(index)
                } else {
                  handleSpreadClick()
                }
              }
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt || `Image ${index + 1}`}
                fill
                className="object-cover"
                sizes={`${width}px`}
                draggable={false}
              />

              {/* Caption overlay - more visible and structured */}
              <div
                className={`absolute bottom-0 left-0 w-full bg-black/60 p-3 transform transition-transform duration-300 ${isActive ? "translate-y-0" : "translate-y-full"}`}
              >
                <h3 className="text-white font-bold text-lg">{image.caption}</h3>
              </div>
            </div>

            
          </div>
        )
      })}


      {/* Navigation buttons - make them clickable */}
      <div className="absolute top-1/2 left-0 right-0 z-50 flex justify-between pointer-events-none">
        <button
          className="bg-white/50 hover:bg-white/80 p-2 rounded-r-lg text-black shadow-md pointer-events-auto transition-colors"
          onClick={(e) => {
            e.stopPropagation()
            setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
          }}
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          className="bg-white/50 hover:bg-white/80 p-2 rounded-l-lg text-black shadow-md pointer-events-auto transition-colors"
          onClick={(e) => {
            e.stopPropagation()
            setActiveIndex((prev) => (prev + 1) % images.length)
          }}
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Mouse drag indicator */}
      {isDragging && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/30 p-3 rounded-lg text-white pointer-events-none">
          {dragStart !== null && dragEnd !== null && dragEnd < dragStart ? "←" : "→"}
        </div>
      )}
    </div>
  )
}

export default AnimatedImageStack

