"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialData as data } from "@/data/homeData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaQuoteLeft,
} from "react-icons/fa6";
import { secImage } from "@/assets";

export default function Testimonials() {
  const uniqueId = "test123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      140: {
        slidesPerView: 1,
      },

      924: {
        slidesPerView: 2,
      },
      
      1124: {
        slidesPerView: 3,
      },
    },
    speed: 1200,
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Navigation],
  };
  // bg-back
  return (
    <section className="lg:px-28 md:px-20 sm:p-12 p-6  text-center relative flex flex-col bg-gradient-to-br from-orange-100 via-white to-blue-100 items-center">
       <Image
                      src={secImage}
                      alt="About us"
                      fill
                      className="object-contain w-full max-h-max absolute top-0 left-0 z-20"/>
      <div className="w-full text-center flex flex-col items-center gap-y-3 sm:mb-8 ">
        <h2 className="font-bold text-center text-2xl md:text-5xl !leading-tight my-6 max-w-3xl mx-auto text-color1 relative">
          What Our{" "}
          <span className="text-color2">Clients </span> Say
        </h2>
      </div>

      <Swiper
        {...swiperOptions}
        className={`mySwiper w-full max-w-6xl mx-auto px-5 ${uniqueId}`}
      >
        {" "}
        {data?.testimonials?.map((cards: any) => (
         <SwiperSlide key={cards.id} className="py-8">
  <div className="relative group h-full">
    {/* Card */}
    <div className="relative h-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden p-7 flex flex-col gap-5">

      {/* Large faded quote */}
      <FaQuoteLeft className="absolute top-1 right-5 text-6xl text-color1/10 group-hover:text-color1/40 transition-colors duration-300" />

      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-600 leading-relaxed text-left text-sm flex-1">
        "{cards.text}"
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-gray-100" />

      {/* Profile */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-60 blur-sm group-hover:opacity-90 transition-opacity duration-500" />
          <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white">
            <Image
              src={cards.img}
              alt={cards.title}
              width={48}
              height={48}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Name + badge */}
        <div>
          <h3 className="font-bold text-gray-900 text-base leading-tight">
            {cards.title}
          </h3>
          <p className="flex items-center gap-1.5 text-xs text-indigo-500 font-medium mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
            Verified Customer
          </p>
        </div>
      </div>

    </div>
  </div>
</SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`${uniqueId}-next absolute z-30 p-3 hover:bg-color2 bg-color1 shadow-lg hover:shadow-xl text-white right-0 md:right-10 bottom-1/3  max-md:scale-75 rounded-full cursor-pointer transition-all duration-300 hover:scale-110`}
      >
        <FaArrowRightLong className="text-xl font-bold" />
      </div>
      <div
        className={`${uniqueId}-prev absolute z-20 rounded-full hover:bg-color2 p-3 bg-color1 shadow-lg hover:shadow-xl text-white left-0 md:left-10 bottom-1/3 max-md:scale-75 cursor-pointer transition-all duration-300 hover:scale-110`}
      >
        <FaArrowLeftLong className="text-xl font-bold" />
      </div>
    </section>
  );
}
