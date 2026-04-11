"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { andman, banner, box3, china, darjeeling, dubai, goa, himanchal, hong, japan, kashmir, kerala, sikkim, thailand, turkey } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  { name: "Goa", tours: goa },
  { name: "Himachal Pradesh", tours: himanchal },
  { name: "Kashmir", tours: kashmir },
  { name: "Kerala", tours: kerala },
  { name: "Turkey", tours: turkey },
  { name: "Sikkim", tours: sikkim },
  { name: "Darjeeling", tours: darjeeling },
  { name: "Dubai", tours: dubai },
  { name: "Thailand", tours: thailand },
  { name: "Hong Kong", tours: hong },
  { name: "China", tours: china },
  { name: "Japan", tours: japan },
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
                width: isHovered ? "300px" : isOtherHovered ? "215px" : "240px",
              }}
            >
              <Link href={`/destinations/${dest.name.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`}>
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
                  src={dest.tours}
                  alt={dest.name}
                  className="w-full object-cover object-center transition-all duration-500 md:h-80 h-44"
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
              </div>              </Link>

            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Destslider;