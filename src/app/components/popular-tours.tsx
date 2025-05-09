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
            src: "https://firebasestorage.googleapis.com/v0/b/flash-chat-3a9a7.appspot.com/o/voyage%2Fsection4(1).png?alt=media&token=4d9dc34b-6cc2-468d-82ea-b22f95282cf3",
            alt: "Featured tour destination 1",
            caption: "Tropical Paradise",
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/flash-chat-3a9a7.appspot.com/o/voyage%2Fsection4(2).jpg?alt=media&token=2315203a-4a6a-45b0-9548-ba6276dd25b6",
            alt: "Featured tour destination 2",
            caption: "Mountain Adventure",
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/flash-chat-3a9a7.appspot.com/o/voyage%2Fsection4(3).jpg?alt=media&token=837336b3-2a23-44f3-92ef-cca22d2ae299",
            alt: "Featured tour destination 3",
            caption: "Cultural Experience",
        },

    ]
    useEffect(() => {
        const updateSizes = () => {
            const width = window.innerWidth
            if (width < 640) {
                setStackWidth(280)
                setCircleSize({ center: "w-72 h-72", sides: "w-40 h-40" })
            } else if (width < 1024) {
                setStackWidth(350)
                setCircleSize({ center: "w-80 h-80", sides: "w-56 h-56" })
            } else {
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
                    const showOnMobile = index === 1
                    return (
                        <div
                            key={index}
                            className={`${index === 1 ? circleSize.center : circleSize.sides} rounded-full overflow-hidden border-4 border-[#0B5C1E] relative transition duration-500 hover:shadow-xl group ${showOnMobile ? "block" : "hidden sm:block"}`}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="https://firebasestorage.googleapis.com/v0/b/flash-chat-3a9a7.appspot.com/o/voyage%2Fsection4.jpg?alt=media&token=ec0ba623-e3eb-404e-a95a-cf9e2782b10d"
                                    alt={`Popular tour ${index + 1}`}
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 224px, 256px"
                                />
                                {/* Hover overlay */}

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

