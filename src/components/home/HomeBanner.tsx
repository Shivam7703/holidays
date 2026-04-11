"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React, { useState } from "react";
import Image from "next/image";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { banner,  bannerImage, box2 } from "@/assets";
import { textVariant, fadeIn, zoomIn, staggerContainer } from "@/utils/motion";
import Link from "next/link";

export default function HomeBanner() {
const slidercontent = [{img:banner,
  title: "Making Every Journey Worth It",
},
{img:box2,
 title: "Plane Best That Suit Your Needs",
},]

  const [destination, setDestination] = useState("");

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: { delay: 0, disableOnInteraction: false },
    loop: true,
    speed: 8000,
    modules: [Autoplay],
  };

  return (
    <section className="relative w-full overflow-hidden h-screen md:h-[130vh]">
      <Swiper {...swiperOptions} className="w-full h-full">
        {slidercontent.map((item:any, index:number) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={item.img}
                alt={item.title}
                fill
                priority={index === 0}
                className="object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* ── Center Content ── */}
      <motion.div
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        animate="show"
        className="absolute inset-0 z-30 flex flex-col items-center justify-center px-4"
      >
        {/* Heading */}
        <div className="text-center mb-8">
          <motion.p
            variants={fadeIn("down", "tween", 0.1, 0.6)}
            className="text-white/90 text-sm md:text-base tracking-[4px] uppercase mb-3 font-light"
          >
Escape the Routine
          </motion.p>

          <motion.h1
            variants={textVariant({ delay: 0.3 })}
            className="text-white text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg"
          >
            Making Every Journey{" "}
            <span className="text-color2">Worth It</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            className="text-white/90 mt-4 text-sm md:text-lg max-w-xl mx-auto"
          >
Handpicked destinations, smooth planning & journeys you’ll truly enjoy
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          variants={zoomIn(0.7, 0.6)}
          className="w-full max-w-xl flex items-center bg-white rounded-full shadow-2xl overflow-hidden"
        >
          <div className="flex items-center gap-3 flex-1 px-5 py-4">
            <FaMapMarkerAlt className="text-color3 text-lg flex-shrink-0" />
            <input
              type="text"
              placeholder="Where do you want to go?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="text-gray-900 text-base bg-transparent outline-none placeholder:text-gray-800 w-full"
            />
          </div>
          <button className="bg-color3 hover:bg-[#4a8522] text-white p-4 m-1 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-md">
            <FaSearch className="text-base" />
          </button>
        </motion.div>

        {/* Popular tags */}
        <motion.div
          variants={fadeIn("up", "tween", 0.9, 0.6)}
          className="flex flex-wrap items-center justify-center gap-2 mt-4"
        >
          <span className="text-white/80 text-xs">Popular:</span>
          {["Jaipur", "Kerala", "Goa", "Dubai", "Kashmir", "Ladakh"].map((tag, i) => (
            <motion.button
              key={tag}
              variants={fadeIn("up", "tween", 1 + i * 0.08, 0.4)}
              onClick={() => setDestination(tag)}
              className="text-xs text-white/80 border border-white/60 hover:border-color2 hover:text-color2 px-3 py-1 rounded-full transition-all duration-200"
            >
             <Link href={`/destinations/${tag.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`}>{tag}</Link> 
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Bottom Banner Image ── */}
      <Image
        src={bannerImage}
        alt="Banner Image"
        className="object-cover w-full object-center absolute bottom-0 left-0 z-40"
      />
    </section>
  );
}