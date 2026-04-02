"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { banner, box3 } from "@/assets";
import Image from "next/image";

const destinations = [
  { name: "California", tours: 2 },
  { name: "America", tours: 0 },
  { name: "Iran", tours: 0 },
  { name: "Israel", tours: 0 },
  { name: "Turkey", tours: 3 },
  { name: "Italy", tours: 1 },
  { name: "Spain", tours: 1 },
  { name: "Germany", tours: 0 },
  { name: "France", tours: 2 },
  { name: "Netherlands", tours: 0 },
  { name: "Sweden", tours: 0 },
  { name: "Norway", tours: 1 },
];

function Destslider() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      <style>{`
        .dest-swiper .swiper-slide {
          transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
      `}</style>

      <Swiper
        modules={[FreeMode, Autoplay]}
        freeMode
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        slidesPerView="auto"
        spaceBetween={14}
        className="dest-swiper relative !z-30"
      >
        {destinations.map((dest, i) => {
          const isHovered = hoveredIndex === i;
          const isOtherHovered = hoveredIndex !== null && !isHovered;

          return (
            <SwiperSlide
              key={dest.name}
              style={{
                width: isHovered ? "280px" : isOtherHovered ? "205px" : "220px",
              }}
            >
              <div
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  relative rounded-2xl overflow-hidden cursor-pointer
                  border border-white p-3
                  transition-all duration-500
                  ${isHovered ? "bg-white" : "bg-transparent"}
                `}
              >
                <Image
                  src={i % 2 === 0 ? banner : box3}
                  alt={dest.name}
                  className="w-full object-cover object-center transition-all duration-500 md:h-80 h-64"
                />

                <div className="p-3 w-full text-center">
                  <p
                    className={`
                      font1 text-xl font-semibold whitespace-nowrap transition-all duration-300
                      ${isHovered ? "text-black" : "text-white"}
                    `}
                  >
                    {dest.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Destslider;