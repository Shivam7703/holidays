"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { bal1, ceo, cloud1, plane } from "@/assets";
import { FaCompass, FaEye, FaPlane } from "react-icons/fa";

const features = [
  {
    icon: <FaCompass  />,
    title: "Trusted Travel Guide",
    desc: "Provides reliable information to help travelers plan their trips efficiently and safely.",
  },
  {
    icon: <FaEye  />,
    title: "Mission & Vision",
    desc: "Aims to connect people to positive experience through travel, helping them see the world differently.",
  },
];

export default function CEOMessage() {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-pink-100 via-white to-indigo-100 ">

  
       {/* ── Decorative background blobs ── */}
      <div className="pointer-events-none absolute bottom-10 -left-32 w-96 h-96 rounded-full bg-blue-200/30 blur-[100px]" />
      <div className="pointer-events-none absolute top-0 -right-32 w-80 h-80 rounded-full bg-rose-300/30 blur-[100px]" />
      <div className="pointer-events-none absolute -top-20 left-1/3 w-72 h-72 rounded-full bg-orange-200/30 blur-[80px]" />

      <motion.div
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto xl:px-28  max-w-[1350px] md:px-20 sm:p-14 px-5 justify-between py-8 lg:px-24 flex flex-col lg:flex-row items-center gap-7 lg:gap-10 relative z-10"
      >

        {/* ══════════ LEFT TEXT SIDE ══════════ */}
         <motion.div
          variants={fadeIn("left", "tween", 0.3, 0.9)}
          className="w-full lg:w-[45%] relative md:h-[630px] h-96 flex items-center !overflow-hidden rounded-b-full  justify-center"
        >
        
            {/* Outer ring */}
            <div className="absolute bottom-0 right-3  sm:right-0 w-[360px] h-[360px] sm:w-[390px] sm:h-[390px] md:w-[500px] md:h-[500px] rounded-full border-[3px] border-white/70 !z-[3] bg-gradient-to-b from-orange-200 via-red-400 to-rose-200 "/>
             {/* <Image
                src={bal1}
                alt="Why choose us"
                
                className="absolute z-[4] animate-y object-contain sm:h-44 h-24 top-[8%] left-2 w-auto"
              />
             
                <Image
                src={cloud1}
                alt="Why choose us"
              
                className="absolute z-[6] object-contain sm:h-60 h-44  w-auto top-[30%] -left-8"
              /> */}
                          <div className="absolute top-3 right-0 w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] md:w-[200px] md:h-[200px] rounded-full border-[3px] border-white/70 shadow-sm shadow-black/50 z-[1] bg-gradient-to-b from-indigo-400  to-blue-200 "/>

                  <Image
                src={plane}
                alt="Why choose us"
                className="absolute z-[8] object-contain sm:h-28 w-auto h-14 top-8 right-0"
              />

              <Image
                src={ceo}
                alt="Why choose us"
                fill
                className="object-contain object-bottom -mb-7 !h-[99%]  mx-auto relative z-10 "
              />


        </motion.div>

        {/* ══════════ RIGHT IMAGE SIDE ══════════ */}
      <motion.div
  variants={fadeIn("right", "tween", 0.2, 0.9)}
  className="w-full lg:w-[46%] space-y-4 sm:space-y-7"
>
  {/* ── Label pill ── */}
 

  {/* ── Heading ── */}
  <h2 className="font-bold text-color1 text-2xl sm:text-4xl md:text-5xl !leading-[1.35]">
   We Design{" "}
    <span className="text-color2">Memorable Travel{" "}</span>
    Experiences Worldwide 
  </h2>

   {/* ── Para ── */}
  <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
   Holidays by Value ADZ is a results-driven travel-planning and experience company specializing in crafting seamless domestic and international journeys. We focus on delivering personalized itineraries, curated stays, and unforgettable experiences that match every traveler’s style. From luxury holidays to budget-friendly trips, our goal is to make travel simple, smooth, and truly memorable.

  </p>

  {/* ── Founder quote pull ── */}
  <div className="border-l-[3px] border-color2 bg-white pl-5 py-2.5 shadow-lg rounded-r-2xl">
    <p className="text-black italic font-semibold leading-relaxed">
      “We started with one simple belief — travel should be easy, trustworthy, and memorable for every traveler.”

    </p>
    <p className="text-color1 text-lg sm:text-xl font-black text-right mr-5 font1 tracking-widest !mt-3">
      — Jonathan A. Mercer, <span className="text-color2 font-medium block text-xs">Founder & CEO</span>
    </p>
  </div>



  
</motion.div>
      </motion.div>
    </section>
  );
}