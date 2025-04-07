"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import AnimatedImageStack from "./animated-stack"

const PopularTours = () => {
  const [stackWidth, setStackWidth] = useState(450)
  const [circleSize, setCircleSize] = useState({ center: "w-104 h-104", sides: "w-74 h-74" })

  const tourImages = ["/path/to/tour-image-1.jpg", "/path/to/tour-image-2.jpg", "/path/to/tour-image-3.jpg"]

  const stackImages = [
    {
      src: "https://s3-alpha-sig.figma.com/img/a285/a419/998bfe0e8c75ef0c4cd871d10a0231d4?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fEKF~yqz1OqVl4AdyVUR9rXQuIUZ4CuMmSNsCfa1iCLuMfppUeKgljTVFXzzklbiA7mD~7WBoOXeMHUd~i6fPAto1XIvxP2ngMR7sMO37A9k9DxqK8mxuzXpFfW60jE4CUFMATNkNy93UxEbFceVi1dd7oRqi6mAmPasAk9GMT0TCeuNrC7Z1MWZoNHm3aGoGSLY6M9Vcx0FMI5GWppjkIZ~JBoCCCtMjuzwmR5uDRET4k-yr-EB62wYQp4mq2K9DlkAt9DhPQTc5BQEy9FDiKW4Wg4adBiq~C1mF-aTu-xo9HWqLUwD9CsDPtcRXM90SsyijeAvTv8zGIcKfLAyug__", // Replace with your actual image paths
      alt: "Featured tour destination 1",
      caption: "Tropical Paradise",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/3dec/bb71/21d3a311604f2f7d0407a88f1c2e3971?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WBV3bj89ZFmz-In8LAFnDa9bMONmDW4YMCPQQmiOoiQgg~wZYCWbF1t-Pql8~Op~MHVpilFdGwCrTD~TUrSLCXOXT4yGo3swueXgx5Q4USkGTN2q2jEOGFlD-x4urL2ClXJ3XHXzj0zSv1bkYBYKXn-afWgsTjSx7gagVstxanClKEepwrinYp9jPnGsRpu7Cop~DLdQQhNQ9G0rshKno1xYiGJk2M5VpSfUkmNJ3ph~tH6CI-~O7hjYjM5yknVQiYzp5JgEmfqckvtpZUtRNVU-JOoGOeltf8v1~2on88UM~G5Zi2wLvXvUX0CaMUCV8nyMoxD7T4dmmd~RA9gGvg__",
      alt: "Featured tour destination 2",
      caption: "Mountain Adventure",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/de86/fd9f/e21a934e8116c34c716d6ba9ea7f8266?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YRfOFys0ivBvtPsd~2i~V7SMzVp751V1wYO8WsHDpLPkXv8JYKFdtw8Y4HubaEU2sD-a9mw-iOYVN88OEX7jrO~9ck3N9Y60q20DdItrhrTZ7eFoVYusc-pxvOe0PHYyGpmAShU~xjtTsl6IN--LuuaoUdjQdFgzm55RECYbVbvlYBA6qqQIb17y9E2KbTq3kpNL6-FaywCYSnTeJgqnw~RehkWs0zSXDrzGmBWXNOVUd56-WMATZ4xJ9YOCP5UxyvwfT-NzCyWBILZG~bFjhg-Ayev9C1qgZymjmOwJ2akLpQGnCDdFAzS7FlOmA~0r~~CnFI-9Eg3UrfCuJMk3~A__",
      alt: "Featured tour destination 3",
      caption: "Cultural Experience",
    },
    {
        src: "https://s3-alpha-sig.figma.com/img/de86/fd9f/e21a934e8116c34c716d6ba9ea7f8266?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YRfOFys0ivBvtPsd~2i~V7SMzVp751V1wYO8WsHDpLPkXv8JYKFdtw8Y4HubaEU2sD-a9mw-iOYVN88OEX7jrO~9ck3N9Y60q20DdItrhrTZ7eFoVYusc-pxvOe0PHYyGpmAShU~xjtTsl6IN--LuuaoUdjQdFgzm55RECYbVbvlYBA6qqQIb17y9E2KbTq3kpNL6-FaywCYSnTeJgqnw~RehkWs0zSXDrzGmBWXNOVUd56-WMATZ4xJ9YOCP5UxyvwfT-NzCyWBILZG~bFjhg-Ayev9C1qgZymjmOwJ2akLpQGnCDdFAzS7FlOmA~0r~~CnFI-9Eg3UrfCuJMk3~A__",
        alt: "Featured tour destination 3",
        caption: "Cultural Experience",
      },
      {
        src: "https://s3-alpha-sig.figma.com/img/de86/fd9f/e21a934e8116c34c716d6ba9ea7f8266?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YRfOFys0ivBvtPsd~2i~V7SMzVp751V1wYO8WsHDpLPkXv8JYKFdtw8Y4HubaEU2sD-a9mw-iOYVN88OEX7jrO~9ck3N9Y60q20DdItrhrTZ7eFoVYusc-pxvOe0PHYyGpmAShU~xjtTsl6IN--LuuaoUdjQdFgzm55RECYbVbvlYBA6qqQIb17y9E2KbTq3kpNL6-FaywCYSnTeJgqnw~RehkWs0zSXDrzGmBWXNOVUd56-WMATZ4xJ9YOCP5UxyvwfT-NzCyWBILZG~bFjhg-Ayev9C1qgZymjmOwJ2akLpQGnCDdFAzS7FlOmA~0r~~CnFI-9Eg3UrfCuJMk3~A__",
        alt: "Featured tour destination 3",
        caption: "Cultural Experience",
      },
      {
        src: "https://s3-alpha-sig.figma.com/img/de86/fd9f/e21a934e8116c34c716d6ba9ea7f8266?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YRfOFys0ivBvtPsd~2i~V7SMzVp751V1wYO8WsHDpLPkXv8JYKFdtw8Y4HubaEU2sD-a9mw-iOYVN88OEX7jrO~9ck3N9Y60q20DdItrhrTZ7eFoVYusc-pxvOe0PHYyGpmAShU~xjtTsl6IN--LuuaoUdjQdFgzm55RECYbVbvlYBA6qqQIb17y9E2KbTq3kpNL6-FaywCYSnTeJgqnw~RehkWs0zSXDrzGmBWXNOVUd56-WMATZ4xJ9YOCP5UxyvwfT-NzCyWBILZG~bFjhg-Ayev9C1qgZymjmOwJ2akLpQGnCDdFAzS7FlOmA~0r~~CnFI-9Eg3UrfCuJMk3~A__",
        alt: "Featured tour destination 3",
        caption: "Cultural Experience",
      },
      {
        src: "https://s3-alpha-sig.figma.com/img/de86/fd9f/e21a934e8116c34c716d6ba9ea7f8266?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YRfOFys0ivBvtPsd~2i~V7SMzVp751V1wYO8WsHDpLPkXv8JYKFdtw8Y4HubaEU2sD-a9mw-iOYVN88OEX7jrO~9ck3N9Y60q20DdItrhrTZ7eFoVYusc-pxvOe0PHYyGpmAShU~xjtTsl6IN--LuuaoUdjQdFgzm55RECYbVbvlYBA6qqQIb17y9E2KbTq3kpNL6-FaywCYSnTeJgqnw~RehkWs0zSXDrzGmBWXNOVUd56-WMATZ4xJ9YOCP5UxyvwfT-NzCyWBILZG~bFjhg-Ayev9C1qgZymjmOwJ2akLpQGnCDdFAzS7FlOmA~0r~~CnFI-9Eg3UrfCuJMk3~A__",
        alt: "Featured tour destination 3",
        caption: "Cultural Experience",
      },
      {
        src: "https://s3-alpha-sig.figma.com/img/de86/fd9f/e21a934e8116c34c716d6ba9ea7f8266?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YRfOFys0ivBvtPsd~2i~V7SMzVp751V1wYO8WsHDpLPkXv8JYKFdtw8Y4HubaEU2sD-a9mw-iOYVN88OEX7jrO~9ck3N9Y60q20DdItrhrTZ7eFoVYusc-pxvOe0PHYyGpmAShU~xjtTsl6IN--LuuaoUdjQdFgzm55RECYbVbvlYBA6qqQIb17y9E2KbTq3kpNL6-FaywCYSnTeJgqnw~RehkWs0zSXDrzGmBWXNOVUd56-WMATZ4xJ9YOCP5UxyvwfT-NzCyWBILZG~bFjhg-Ayev9C1qgZymjmOwJ2akLpQGnCDdFAzS7FlOmA~0r~~CnFI-9Eg3UrfCuJMk3~A__",
        alt: "Featured tour destination 3",
        caption: "Cultural Experience",
      },
      {
        src: "https://s3-alpha-sig.figma.com/img/de86/fd9f/e21a934e8116c34c716d6ba9ea7f8266?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YRfOFys0ivBvtPsd~2i~V7SMzVp751V1wYO8WsHDpLPkXv8JYKFdtw8Y4HubaEU2sD-a9mw-iOYVN88OEX7jrO~9ck3N9Y60q20DdItrhrTZ7eFoVYusc-pxvOe0PHYyGpmAShU~xjtTsl6IN--LuuaoUdjQdFgzm55RECYbVbvlYBA6qqQIb17y9E2KbTq3kpNL6-FaywCYSnTeJgqnw~RehkWs0zSXDrzGmBWXNOVUd56-WMATZ4xJ9YOCP5UxyvwfT-NzCyWBILZG~bFjhg-Ayev9C1qgZymjmOwJ2akLpQGnCDdFAzS7FlOmA~0r~~CnFI-9Eg3UrfCuJMk3~A__",
        alt: "Featured tour destination 3",
        caption: "Cultural Experience",
      },
  ]
  useEffect(() => {
    const updateSizes = () => {
      const width = window.innerWidth
      if (width < 640) {
        // Mobile - larger center circle since it's the only one shown
        setStackWidth(280)
        setCircleSize({ center: "w-72 h-72", sides: "w-40 h-40" })
      } else if (width < 1024) {
        // Tablet
        setStackWidth(350)
        setCircleSize({ center: "w-80 h-80", sides: "w-56 h-56" })
      } else {
        // Desktop
        setStackWidth(450)
        setCircleSize({ center: "w-104 h-104", sides: "w-74 h-74" })
      }
    }

    updateSizes()
    window.addEventListener("resize", updateSizes)
    return () => window.removeEventListener("resize", updateSizes)
  }, [])

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden min-h-[80vh] flex flex-col justify-center items-center">
      {/* Heading */}
      <div className="relative mb-16 md:mb-24 text-center w-full">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B5C1E] inline-block relative font-rammeto-one">
          Popular Tours
          <span className="absolute -left-6 md:-left-8 top-1/2 w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#5fa6b7]" />
          <span className="absolute -right-6 md:-right-8 top-1/2 w-3 md:w-4 h-3 md:h-4 rounded-full bg-[#5fa6b7]"></span>
        </h2>
        <div className="w-16 md:w-24 h-1 bg-[#0B5C1E] mx-auto mt-4 md:mt-6"></div>
      </div>

      {/* Circular Images */}
      <div className="flex justify-center items-center gap-4 sm:gap-8 md:gap-16 lg:gap-24 xl:gap-32 mb-0">
        {tourImages.map((imagePath, index) => {
          // On mobile, only show the middle image (index 1)
          const showOnMobile = index === 1
          return (
            <div
              key={index}
              className={`${index === 1 ? circleSize.center : circleSize.sides} rounded-full overflow-hidden border-4 border-[#0B5C1E] relative transition duration-500 hover:shadow-xl group ${showOnMobile ? "block" : "hidden sm:block"}`}
            >
              <div className="relative w-full h-full">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/78c1/b891/ca8d88921a8ca03d9fd46fd02228e61f?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gaJU4ZrueH0mMdYgQwWsYeJQ7HgwMR4vn7N63Ie05GNp63b5aX7yVBZs0t5EPxbtCzGJ3j4zNuRW3hbEX3KiMZXHRRnMzHXsUrLnM7tNmGG2m9BCY7Z-IvSuXZUYi24l9~OjYtmBJ8D~QGs3mthOCIpt6KkPB42inttT8QtIdeuctJsvV93tKO49aSJU-~wlN2Ia3KmebiMLmCPISxBP6bF6yK6c1YeD8YcW2K0rKfVAReruyVaEhvDqRJvpUMWa3XfT841R0yRwLNog9JpCJ~aR6yhKSAivAs1luYzR9~7pxKpTOAp-E-xHqh~7Um3RxXMj3gFhhBWCBI73lkRN6Q__"
                  alt={`Popular tour ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 224px, 256px"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0B5C1E]/0 group-hover:bg-[#0B5C1E]/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white font-bold text-base md:text-lg transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    View Tour
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Animated Image Stack - centered absolutely */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="p-4 transition-all duration-500">
          <AnimatedImageStack images={stackImages} size={{ width: stackWidth }} />
        </div>
      </div>
    </section>
  )
}

export default PopularTours

