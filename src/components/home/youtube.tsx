"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const vdos = [
  { src: "https://www.youtube.com/embed/Zxemf23tXQU" },
  { src: "https://www.youtube.com/embed/3dDkqeEa3F8" },
  { src: "https://www.youtube.com/embed/l3F3possgec" },
  { src: "https://www.youtube.com/embed/OSydHJ9NZAk" },
];

export default function Youtubevdo() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white lg:px-20 px-4 py-7 sm:p-16">

      {/* ── Decorative background blobs ── */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-200/40 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-rose-200/40 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 left-1/3 w-72 h-72 rounded-full bg-orange-200/30 blur-[80px]" />

      {/* ── Subtle dot grid ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #92400e 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto">

        {/* ── Header ── */}
        <div
          className={`text-center sm:mb-16 mb-8 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-color1 leading-[1.1] tracking-tight mb-4">
            Our Top Destination{" "}
            <span className="text-color2">Tour</span>
          </h2>
          <p className="text-zinc-700 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            A glimpse of the unforgettable moments and experiences shared by our happy travelers.
          </p>
        </div>

        {/* ── Video Swiper ── */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              nextEl: ".gal-next",
              prevEl: ".gal-prev",
            }}
            autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              100:  { slidesPerView: 1, spaceBetween: 6 },
              300:  { slidesPerView: 2, spaceBetween: 8 },
              524: { slidesPerView: 3, spaceBetween: 15 },
              1024: { slidesPerView: 4, spaceBetween: 20 },

            }}
            className="!pb-4"
          >
            {vdos.map((item, index) => (
              <SwiperSlide key={index}>
                {/* ✅ YouTube Shorts aspect ratio — 9:16 */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-xl"
                  style={{ paddingBottom: "177.78%" }}  // 9:16 ratio
                >
                  <iframe
                    src={`${item.src}?rel=0&modestbranding=1`}
                    title={`video-${index}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom nav arrows */}
          <button
            title="prev"
            className="gal-prev absolute top-1/2 -left-4 lg:-left-6 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-xl border border-amber-100 flex items-center justify-center text-amber-600 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            title="next"
            className="gal-next absolute top-1/2 -right-4 lg:-right-6 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-xl border border-amber-100 flex items-center justify-center text-amber-600 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}