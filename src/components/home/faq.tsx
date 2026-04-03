"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { HomefaqData as data } from "@/data/homeData";
import Faqs from "../global/faqs";
import { man2, patta, secImage } from "@/assets";
import Image from "next/image";

export default function FaqSection() {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="xl:px-32 lg:px-28 md:px-20 sm:p-14 px-6 py-8  mx-auto flex flex-wrap items-stretch justify-between gap-y-7 bg-white relative overflow-hidden"
    >
      <Image
                      src={secImage}
                      alt="About us"
                      fill
                      className="object-contain w-full max-h-max absolute top-0 left-0 z-20"></Image>
      
       <motion.div
        variants={fadeIn("right", "tween", 0.3, 1)}
        className="md:w-[47%] w-full relative min-h-64 space-y-6"
      >
          <Image
                      src={man2}
                      alt="About us"
                      fill
                      className="object-contain h-full object-bottom absolute bottom-0 left-1/4 z-10 max-md:hidden"></Image>
        <Image
                      src={patta}
                      alt="About us"
                      
                      className="object-contain w-full max-h-max absolute bottom-0 left-0 z-20"></Image>
      
      
      </motion.div>


      <motion.div
        variants={fadeIn("right", "tween", 0.3, 1)}
        className="md:w-[47%] w-full  space-y-6"
      >
        
        <h2 className="text-color1 font-bold text-3xl md:text-5xl leading-tight">
          {data?.title2}
          <span className="text-color2">
            {data?.title3}
          </span>
        </h2>

        {data?.para1 && (
          <p className="text-zinc-800 md:text-lg">{data?.para1}</p>
        )}
        <Faqs data={data?.faqs} />

      </motion.div>
    </motion.div>
  );
}





