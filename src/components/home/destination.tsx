"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, textVariant, staggerContainer } from "@/utils/motion";
import { cl1, cl2,  man } from "@/assets"; // apne assets use karo
import Destslider from "./destslider";

export default function Destination() {
    const data= {
        para: "Our most loved destinations are carefully selected to offer unforgettable travel experiences. From scenic mountains and peaceful beaches to vibrant cities and cultural hotspots, each place is chosen to match every traveler’s dream. Enjoy seamless planning, comfortable stays, and unique experiences that make every journey special. Whether you're looking for relaxation, adventure, or cultural charm, we bring you destinations that truly stand out and create lasting memories."
    }
  return (
    <section className="w-full overflow-hidden  py-10 bg-white p-0 md:px-12 lg:px-20">
     
<div className="bg-color1 overflow-hidden md:rounded-3xl relative ">
      <div className="relative z-10 flex flex-wrap justify-between  items-center  p-6 py-8 sm:py-14">

        {/* ── LEFT TEXT ── */}
        <motion.div
          variants={staggerContainer(0.15, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col justify-center md:w-[38%] w-full"
        >
          {/* Heading */}
          <motion.h2
            variants={textVariant({ delay: 0.1 })}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-4"
          >
            <span className="text-[#f5a623]">Most Favorite</span>{" "}
            Tour Places!
          </motion.h2>

          {/* Para */}
          <motion.p
            variants={fadeIn("up", "tween", 0.25, 0.5)}
            className="text-white md:text-lg leading-relaxed mb-8"
          >
            {data?.para}
          </motion.p>

          {/* cls + count */}
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 0.5)}
            className="flex items-center gap-4"
          >
            {/* Stacked cls */}
            <div className="flex -space-x-3">
              {[cl1, cl2, cl1].map((src, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border border-color2 overflow-hidden relative"
                >
                  <Image src={src} alt={`user ${i}`} fill className="object-cover" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-color3 font-bold text-xl leading-none">3.5k</p>
              <p className="text-white uppercase tracking-widest font-semibold">
                Happy Customer
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CENTER: BIG TEXT ── */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className=" md:w-[57%] w-full  px-4 select-none  pointer-events-none"
        >
          <p
            className="font-black text-5xl mt-4 md:text-8xl font1 leading-none text-color2"
          >
            TOP{" "} <span
            className="text-white"
          >
            DESTINATION
          </span>
          </p>
         
        </motion.div>

        {/* ── RIGHT: PERSON IMAGE ── */}
        <motion.div
          variants={fadeIn("left", "tween", 0.3, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="absolute sm:-top-14 !z-20 -top-8 -right-6 h-1/2 max-sm:hidden"
        >
          <Image
            src={man}
            alt="Top Destination"
            className="object-contain object-right-top opacity-35 sm:opacity-80"
          />
        </motion.div>

      </div>
<div className="mb-8 ">
<Destslider/>
</div>
      </div>
    </section>
  );
}