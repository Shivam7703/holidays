"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode, EffectCards } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/effect-cards";

import {  gal1, gal2, gal3, gal4 } from "@/assets";

const imgs = [
  gal1,  
    gal2,  
  gal3,   
    gal4,
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxSwiper, setLightboxSwiper] = useState<SwiperType | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [lightboxOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowLeft") lightboxSwiper?.slidePrev();
      else if (e.key === "ArrowRight") lightboxSwiper?.slideNext();
      else if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, lightboxSwiper]);

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

      <div className="relative z-10  mx-auto">

        {/* ── Header ── */}
        <div
          className={`text-center sm:mb-16 mb-8  transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
         

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-color1 leading-[1.1] tracking-tight mb-4">
            Captured Travel{" "}
            <span className="text-color2">
Stories</span>
          </h2>
          <p className="text-zinc-700 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
A glimpse of the unforgettable moments and experiences shared by our happy travelers.
          </p>

         
        </div>

        {/* ── Main Gallery Swiper ── */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".gal-next",
              prevEl: ".gal-prev",
            }}
            pagination={{ clickable: true, el: ".gal-dots" }}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              100:  { slidesPerView: 2, spaceBetween: 8 },
                            600:  { slidesPerView: 3, spaceBetween: 16 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            className="!pb-4"
          >
            {imgs.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => { setCurrentIndex(index); setLightboxOpen(true); }}
                  className="group relative cursor-pointer rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={item}
                    alt={"gallery"}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* gradient overlay — always soft at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom nav arrows */}
          <button title="slide" className="gal-prev absolute top-1/2 -left-4 lg:-left-6 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-xl border border-amber-100 flex items-center justify-center text-amber-600 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 hover:scale-110">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button title="slide" className="gal-next absolute top-1/2 -right-4 lg:-right-6 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-xl border border-amber-100 flex items-center justify-center text-amber-600 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 hover:scale-110">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>

      {/* ══════════════ LIGHTBOX ══════════════ */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col">

          {/* top bar */}
          <div className="flex items-center justify-between px-6 py-4 flex-shrink-0">
            <div className="flex items-center gap-3">
              <span className="text-white/40 text-sm font-medium">
                {currentIndex + 1} <span className="text-white/20">/</span> {imgs.length}
              </span>
             
            </div>
            <button title="slide"
              onClick={() => setLightboxOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* main image area */}
          <div className="flex-1 relative overflow-hidden" onClick={() => setLightboxOpen(false)}>
            <div className="absolute inset-0 flex items-center justify-center p-4" onClick={e => e.stopPropagation()}>
              <Swiper
                modules={[Navigation, FreeMode]}
                spaceBetween={20}
                slidesPerView={1}
                initialSlide={currentIndex}
                navigation={{ nextEl: ".lb-next", prevEl: ".lb-prev" }}
                onSwiper={setLightboxSwiper}
                onSlideChange={sw => setCurrentIndex(sw.activeIndex)}
                className="w-full h-full"
              >
                {imgs.map((item, index) => (
                  <SwiperSlide key={index} className="flex items-center justify-center">
                    <div className="relative w-full h-full max-w-5xl mx-auto" style={{ maxHeight: "70vh" }}>
                      <Image
                        src={item}
                        alt={"Our Gallery"}
                        fill
                        className="object-contain"
                        priority={index === currentIndex}
                        sizes="100vw"
                      />
                    </div>
                  </SwiperSlide>
                ))}

                <button title="slide" className="lb-prev absolute top-1/2 left-3 md:left-6 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-amber-500 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button title="slide" className="lb-next absolute top-1/2 right-3 md:right-6 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-amber-500 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </Swiper>
            </div>
          </div>

          {/* thumbnail strip */}
          <div className="flex-shrink-0 px-4 py-4">
            <div className="max-w-2xl mx-auto">
              <Swiper
                modules={[FreeMode]}
                spaceBetween={10}
                slidesPerView="auto"
                freeMode
                className="thumbnail-strip"
              >
                {imgs.map((item, index) => (
                  <SwiperSlide key={index} className="!w-16 !h-16 md:!w-20 md:!h-20">
                    <div
                      onClick={() => lightboxSwiper?.slideTo(index)}
                      className={`relative w-full h-full rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ring-offset-2 ring-offset-black ${
                        currentIndex === index
                          ? "ring-2 ring-amber-400 scale-105 opacity-100"
                          : "opacity-40 hover:opacity-70"
                      }`}
                    >
                      <Image src={item} alt={"Gallery Imgs"} fill className="object-cover" sizes="80px" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}

   
    </section>
  );
}