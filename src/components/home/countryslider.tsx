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
          {data?.map((card: any, index: number) => (
<SwiperSlide key={card.id ?? index}>
  <div className="group my-8 relative bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-[0_32px_64px_rgba(0,179,136,0.18)] hover:-translate-y-3 transition-all duration-500 border border-gray-100">

    {/* ── IMAGE ── */}
    <div className="relative sm:h-60 h-44 overflow-hidden">
      <Image
        src={card.img}
        alt={card.heading}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* multi-layer gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-color2/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Category pill — top left */}
      <span className="absolute top-4 left-4 bg-color2 text-white text-[6px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:px-3 p-1  rounded-full shadow-lg flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 max-sm:hidden bg-white rounded-full animate-pulse" />
        {card.category}
      </span>

      {/* Wishlist heart — top right */}
      <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-rose-500  transition-all duration-300 hover:scale-110">
        <span className="text-lg">♡</span>
      </button>

      {/* Bottom image info row */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-4 flex items-end justify-between">
        {/* Duration */}
        <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm border border-white/15 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
          🕐 {card.duration}
        </div>

        {/* Rating stars */}
        
      </div>
    </div>

    {/* ── FLOATING PRICE CARD — overlaps image ── */}
    <div className="absolute top-28 md:top-44 right-5 z-20 bg-white rounded-2xl sm:p-4 p-2 shadow-xl border border-color2/15 text-center min-w-[70px]">
      <p className="text-color2 font-black text-base sm:text-xl leading-none">{card.price}</p>
      <p className="text-gray-400 text-[9px] uppercase tracking-wider font-bold mt-0.5">per person</p>
    </div>

    {/* ── CONTENT ── */}
    <div className="px-5 pt-6 pb-6 space-y-2 sm:space-y-4">

      {/* Title + location */}
      <div>
        <h3 className="text-zinc-900  font-bold text-lg leading-snug group-hover:text-color1 transition-colors duration-300 ">
          {card.heading}
        </h3>
       <div className="flex items-center gap-1 sm:text-xl text-base">
          <span className="text-amber-400 ">★★★★★</span>
          <span className="text-zinc-700 font-bold ml-0.5">4.9</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-900 max-sm:text-sm leading-relaxed">
        {card.text}
      </p>

      {/* ── Points grid ── */}
      {card.points?.length > 0 && (
        <div className="grid grid-cols-2 gap-2">
          {card.points?.slice(0, 4).map((p: string, i: number) => (
            <div key={i} className="flex items-center gap-2 border shadow-md rounded-xl p-3">
              
              <p className="sm:text-sm text-xs text-color1 font-semibold truncate">{p}</p>
            </div>
          ))}
        </div>
      )}

      {/* ── Stats row ── */}
      <div className="flex items-center justify-between py-3 border-y border-gray-100">
        <div className="text-center">
          <p className="text-color3 font-black text-sm">50+</p>
          <p className="text-gray-400 text-[10px] uppercase tracking-wider">Bookings</p>
        </div>
        <div className="w-px h-8 bg-gray-100" />
        <div className="text-center">
          <p className="text-color3 font-black text-sm">All Inclusive</p>
          <p className="text-gray-400 text-[10px] uppercase tracking-wider">Package</p>
        </div>
        <div className="w-px h-8 bg-gray-100" />
        <div className="text-center">
          <p className="text-color3 font-black text-sm">✈️ Visa</p>
          <p className="text-gray-400 text-[10px] uppercase tracking-wider">Included</p>
        </div>
      </div>

      {/* ── CTA row ── */}
      <div className="flex items-center gap-3">
        {/* Enquire ghost button */}
        <button className="flex-1 flex items-center justify-center gap-1.5 sm:px-4 sm:py-3 p-2 rounded-xl border-2 border-color2/30 text-color2 sm:text-xs text-[8px] font-black uppercase tracking-widest hover:border-color2 hover:bg-color2/5 transition-all duration-300">
          Enquire
        </button>

        {/* View Package solid button */}
        <Link
          href={card.link}
          className="flex-[2] flex items-center justify-center gap-2 sm:px-4 sm:py-3 p-2 rounded-xl
            bg-color2 text-white sm:text-xs text-[8px] font-black uppercase tracking-widest
            hover:bg-color1 transition-all duration-300
            shadow-lg shadow-color2/25 hover:shadow-color1/30 hover:gap-3"
        >
          View Package
          <FaArrowRightLong className="text-[10px] group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>

    {/* ── Bottom glow bar on hover ── */}
    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-color2 via-amber-400 to-color1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>
</SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* NAV BUTTONS */}
      <button
        className={`${uniqueId}-next absolute z-30 right-2 md:right-6 top-[55%] -translate-y-1/2
        w-11 h-11 rounded-full bg-white shadow-lg hover:bg-color1 hover:text-white
        flex items-center justify-center transition-all duration-300`}
      >
        <FaArrowRightLong />
      </button>

      <button
        className={`${uniqueId}-prev absolute z-30 left-2 md:left-6 top-[55%] -translate-y-1/2
        w-11 h-11 rounded-full bg-white shadow-lg hover:bg-color1 hover:text-white
        flex items-center justify-center transition-all duration-300`}
      >
        <FaArrowLeftLong />
      </button>
    </>
  );
}