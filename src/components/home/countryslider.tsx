"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

export default function Countryslider({ data, uniqueId }: any) {
  return (
    <>
      <div className="relative px-4 md:px-10">
        <Swiper className="max-sm:w-[75vw]"
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation={{
            nextEl: `.${uniqueId}-next`,
            prevEl: `.${uniqueId}-prev`,
          }}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            500: { slidesPerView: 2 },
            924: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {data?.map((card: any, index: number) => {
            // Generate link slug based on your requirement
            const slug = card.title.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");
            
            return (
              <SwiperSlide key={index}>
                <div className="group my-8 relative bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-[0_32px_64px_rgba(0,179,136,0.18)] hover:-translate-y-3 transition-all duration-500 border border-gray-100">

                  {/* ── IMAGE ── */}
                  <div className="relative sm:h-60 h-44 overflow-hidden">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <span className="absolute top-4 left-4 bg-color2 text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-lg">
                      {card.cat}
                    </span>

                    <div className="absolute bottom-0 left-0 right-0 px-4 py-4">
                      <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm border border-white/15 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full w-fit">
                        🕐 {card.duration}
                      </div>
                    </div>
                  </div>

                  {/* ── FLOATING PRICE ── */}
                  <div className="absolute top-28 md:top-44 right-5 z-20 bg-white rounded-2xl sm:p-4 p-2 shadow-xl border border-color2/15 text-center min-w-[70px]">
                    <p className="text-color2 font-black text-base sm:text-xl leading-none">
                      {card.allPricingVariants?.variants[0]?.displayPrice}
                    </p>
                    <p className="text-gray-400 text-[9px] uppercase tracking-wider font-bold mt-0.5">Starting</p>
                  </div>

                  {/* ── CONTENT ── */}
                  <div className="px-5 pt-6 pb-6 space-y-4">
                    <h3 className="text-zinc-900 font-bold text-lg leading-snug group-hover:text-color1 transition-colors duration-300">
                      {card.title}
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                      {card.description}
                    </p>

                    <div className="flex items-center justify-between py-3 border-y border-gray-100">
                      <div className="text-center text-[10px] text-gray-400 uppercase font-bold">
                        {card.includesAndExcludes.includes.length} Inclusions
                      </div>
                      <div className="text-center text-[10px] text-gray-400 uppercase font-bold">
                        Verified
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button className="flex-1 p-2 rounded-xl border-2 border-color2/30 text-color2 text-[10px] font-black uppercase hover:bg-color2/5 transition-all">
                        Enquire
                      </button>
                      <Link
                        href={`/packages/${slug}`}
                        className="flex-[2] flex items-center justify-center gap-2 p-2 rounded-xl bg-color2 text-white text-[10px] font-black uppercase hover:bg-color1 transition-all"
                      >
                        View Package <FaArrowRightLong />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Nav Buttons */}
      <button className={`${uniqueId}-next absolute z-30 right-2 top-[50%] w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center`}>
        <FaArrowRightLong />
      </button>
      <button className={`${uniqueId}-prev absolute z-30 left-2 top-[50%] w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center`}>
        <FaArrowLeftLong />
      </button>
    </>
  );
}