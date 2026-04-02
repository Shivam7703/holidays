"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { Whychoose as data } from "@/data/homeData";
import Link from "next/link";
import Buttonmain from "../global/button";
import { bal1, bal2, choose, cloud1, cloud2 } from "@/assets";
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

export default function WhychooseSection() {
  return (
    <section className="w-full relative overflow-hidden bg-white">

  
       {/* ── Decorative background blobs ── */}
      <div className="pointer-events-none absolute bottom-10 -left-32 w-96 h-96 rounded-full bg-amber-200/40 blur-[100px]" />
      <div className="pointer-events-none absolute top-0 -right-32 w-80 h-80 rounded-full bg-rose-200/40 blur-[100px]" />
      <div className="pointer-events-none absolute -top-20 left-1/3 w-72 h-72 rounded-full bg-orange-200/30 blur-[80px]" />

      <motion.div
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto xl:px-28  md:px-20 sm:p-14 px-5 justify-between py-8 lg:px-24 flex flex-col lg:flex-row items-center gap-14 lg:gap-10 relative z-10"
      >

        {/* ══════════ LEFT TEXT SIDE ══════════ */}
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 0.9)}
          className="w-full lg:w-[45%] space-y-7"
        >
          {/* Label */}
          <span className="inline-block text-color2 font-bold uppercase text-xs tracking-[0.25em] border border-color2/30 bg-color2/10 px-4 py-1.5 rounded-full">
            Why Choose Us
          </span>

          {/* Heading */}
          <h2 className="font-bold text-color1 text-3xl sm:text-4xl md:text-5xl leading-[1.15]">
            We Recommend{" "}
            <span className="text-color2">Beautiful</span>{" "}Destinations Every Month
          </h2>

          {/* Para */}
          <p className="text-gray-800 leading-relaxed ">
            {data?.para ??
              "We are a multi-award-winning strategy and content creation agency that specializes in travel marketing and unique experiences."}
          </p>

          {/* ── 24/7 card + features row ── */}
          <div className="flex flex-col sm:flex-row gap-5 items-start">

            {/* 24/7 pill card */}
            <div className="flex-shrink-0 bg-color1 text-white rounded-2xl px-6 py-5 text-center shadow-xl shadow-color1/20 min-w-32">
              <p className="text-3xl font-black leading-none">24/7</p>
              <p className="text-xs font-semibold mt-1 text-white/80 uppercase tracking-wider">Guide</p>
              <p className="text-xs font-semibold text-white/80 uppercase tracking-wider">Support</p>
            </div>

            {/* Feature items */}
            <div className="flex flex-col gap-5 flex-1">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  {/* icon circle */}
                  <div className="flex-shrink-0 w-12 h-12 text-xl rounded-full bg-color2 border text-color1 flex items-center justify-center shadow-lg">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-color1 font-bold text-sm md:text-base">{f.title}</h4>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed mt-0.5">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── CTA row ── */}
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <Buttonmain href="/contact-us" text1="Discover More" text2="About Us" />
          </div>
        </motion.div>

        {/* ══════════ RIGHT IMAGE SIDE ══════════ */}
        <motion.div
          variants={fadeIn("left", "tween", 0.3, 0.9)}
          className="w-full lg:w-[50%] relative md:h-[630px] h-96 flex  items-center justify-center"
        >
        

          {/* ── Big circle frame ── */}
            {/* Outer ring */}
            <div className="absolute top-[10%] right-[15%] w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] rounded-full border-[3px] border-white/70 shadow-2xl z-[3] bg-gradient-to-b from-color2/20 to-rose-200 animate-ripple"/>
             <Image
                src={bal1}
                alt="Why choose us"
                
                className="absolute z-[4] animate-y object-contain sm:h-60 h-44 top-[5%] left-7 w-auto"
              />
                <Image
                src={bal2}
                alt="Why choose us"
                className="absolute z-[5] object-contain sm:h-32 h-28 animate-y  w-auto top-3 right-7 "
                />
                <Image
                src={cloud1}
                alt="Why choose us"
              
                className="absolute z-[6] object-contain sm:h-60 h-44  w-auto top-[30%] left-[2%]"
              />
                  <Image
                src={cloud2}
                alt="Why choose us"
                className="absolute z-[8] object-contain sm:h-60 w-auto h-44 top-0 -right-[7%]"
              />
              <Image
                src={choose}
                alt="Why choose us"
                fill
                className="object-contain object-center !h-[99%] md:!h-[80%] my-auto relative z-10 "
                priority
              />


        </motion.div>

      </motion.div>
    </section>
  );
}