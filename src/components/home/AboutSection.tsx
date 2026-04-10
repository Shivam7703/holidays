"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, textVariant, staggerContainer } from "@/utils/motion";
import { secImage } from "@/assets";

export default function AboutSection({ data }: any) {
  return (
    <section className="w-full  relative  bg-white">
       <Image
                src={secImage}
                alt="About us"
                fill
                className="object-contain w-full max-h-max absolute top-0 left-0 z-20"/>

      <div className="mx-auto justify-between flex flex-col md:flex-row items-stretch gap-y-4 ">

        {/* ── LEFT: TEXT ── */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex-1 order-2 lg:order-1 lg:px-24 md:w-[48%] w-full md:p-20 sm:p-14 p-6"
        >
         

          {/* Heading */}
          <motion.h2
            variants={textVariant({ delay: 0.2 })}
            className="text-xl md:text-4xl xl:text-5xl font-bold text-color1 !leading-snug mb-5"
          >
            {data?.title2}{" "}
            <span className="text-color2">{data?.title3}</span>
          </motion.h2>

          {/* Para */}
          {data?.para && (
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 0.5)}
              className="text-gray-700 text-sm md:text-lg leading-relaxed mb-8"
            >
              {data?.para}
            </motion.p>
          )}

          {/* Pointers */}
<div className="gap-y-4 mb-10 flex flex-wrap justify-between">
  {data?.pointer?.map((item: any, index: number) => (
    <motion.div
      key={item?.id}
      variants={fadeIn("right", "tween", 0.3 + index * 0.1, 0.5)}
      className="flex items-start gap-4 group md:w-[48%] w-full p-4 rounded-xl border border-transparent
        hover:border-color1/20 hover:bg-color1/5 shadow-lg transition-all duration-300 cursor-pointer"
    >
      {/* Icon box */}
      <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-color1/10 border border-color1/20
        flex items-center justify-center text-color1 text-lg
        group-hover:bg-color1 group-hover:text-white group-hover:border-color1
        group-hover:scale-110 transition-all duration-300 shadow-sm">
        {item?.icon}
      </div>

      {/* Text */}
      <div className="pt-0.5">
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-color1
          transition-colors duration-200 mb-0.5 leading-snug">
          {item?.heading}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {item?.text}
        </p>
      </div>
    </motion.div>
  ))}
</div>

          
        </motion.div>

        {/* ── RIGHT: IMAGE ── */}
        <motion.div
          variants={fadeIn("left", "tween", 0.3, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1 order-1 lg:order-2 md:w-[52%] w-full relative "
        >
          {/* Main image */}
          {data?.img && (
            <div className="relative w-full h-full min-h-[420px] group">
              <Image
                src={data?.img}
                alt="About us"
                fill
                className="object-contain object-right-top h-full group-hover:scale-105 transition-transform duration-700"
              />
             
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}