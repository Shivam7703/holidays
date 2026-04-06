"use client";
import { bal1, bal2, cloud1, cloud2,cloud3, plane, pro1, pro2, pro3, pro4, process1 } from "@/assets";
import Image from "next/image";
import React from "react";
import { FaAngleDoubleDown, FaWpforms } from "react-icons/fa";
import { LuHandshake } from "react-icons/lu";
import { MdOutlineEngineering, MdOutlineSettings } from "react-icons/md";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { fadeUp, nodePop} from "@/utils/motion";

export const slideIn = (dir: "left" | "right") => ({
  hidden: { opacity: 0, x: dir === "left" ? -80 : 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
});


const data = [
  {
    img: pro1,
    icon: <FaWpforms />,
    heading: "Travel Planning & Assessment",
    year: "step 01",
    text: "Understanding your travel preferences, budget, destinations, and timelines to design the perfect trip.",
  },
  {
    img: pro2,
    icon: <MdOutlineSettings />,
    heading: "Itinerary Design",
    year: "step 02",
    text: "Creating a personalized travel plan with selected destinations, activities, stays, and experiences tailored to you.",
  },
  {
    img: pro3,
    icon: <MdOutlineEngineering />,
    heading: "Booking & Arrangements",
    year: "step 03",
    text: "Managing flights, hotels, and tours with seamless coordination and confirmed reservations.",
  },
  {
    img: pro4,
    icon: <LuHandshake />,
    heading: "Travel Support & Assistance",
    year: "step 04",
    text: "Providing complete guidance and on-trip support to ensure a smooth, stress-free, and enjoyable journey.",
  },
];

/* ── Scroll-driven timeline line ── */
function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const scaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={ref}
      className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]"
    >
      <div className="absolute inset-0 bg-black/10" />
      <motion.div
        className="absolute top-0 left-0 w-full h-full origin-top bg-gradient-to-b from-color2 via-yellow-400 to-color2"
        style={{ scaleY }}
      />
    </div>
  );
}

/* ── Single row ── */
function TimelineRow({ item, i }: { item: any; i: number }) {
  const isLeft = i % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="relative grid lg:grid-cols-2 gap-8 max-w-screen-2xl mx-auto lg:gap-0 items-center mb-8 lg:mb-14"
    >
      {/* ── Center node ── */}
      <motion.div
        className="hidden lg:flex absolute left-[46.5%] -translate-x-1/2 flex-col items-center z-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={nodePop}
      >
        <div className="w-14 h-14 rounded-full border-2 border-color2 bg-white flex items-center justify-center shadow-lg">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-color2 to-yellow-500 flex items-center justify-center text-white text-sm">
            {item.icon}
          </div>
        </div>
        <motion.div
          className="mt-2 px-3 pb-0.5 rounded-full bg-orange-50  border border-color2"
          variants={{
            hidden: { opacity: 0, y: 6 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.4 } },
          }}
        >
          <span className="text-color2 text-[10px] font-bold tracking-widest uppercase">
            {item.year}
          </span>
        </motion.div>
      </motion.div>

      {/* ── Image ── */}
      <motion.div
        className={`${isLeft ? "lg:pr-28" : "lg:order-last lg:pl-28"}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideIn(isLeft ? "left" : "right")}
      >
        {/* clean image — no bg, no overlay, no hover effects */}
        <div className="relative w-full h-72 sm:h-96">

<div
  className="absolute group inset-0 h-9 w-9 z-0 rounded-full top-1/2 left-[45%] bg-red-700"
  style={{
    boxShadow: "0 0 12px 10px rgba(0,0,0,0.7), 0 0 80px 40px rgba(0,0,0,0.5), 0 0 160px 80px rgba(0,0,0,0.4), 0 0 300px 150px rgba(0,0,0,0.1)",
  }}
/>       <Image
            src={item.img}
            alt={item.heading}
            fill
            className="object-contain mx-auto group-hover:-translate-y-10 transition-transform duration-500"
          />
        </div>
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        className={`${isLeft ? "lg:pl-28" : "lg:pr-28"} flex flex-col justify-center`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideIn(isLeft ? "right" : "left")}
      >
        <div className="space-y-3 md:space-y-6">
          <motion.p
            className="text-color2 text-[10px] font-bold uppercase tracking-[0.3em]"
            variants={fadeUp}
             whileInView="visible"
            custom={0}
          >
            Step {String(i + 1).padStart(2, "0")}
          </motion.p>

          <motion.h3
            className="text-color1 text-2xl md:text-3xl font-bold leading-tight"
            variants={fadeUp}
            whileInView="visible"
            custom={1}
          >
            {item.heading}
          </motion.h3>

          <motion.div
            className="h-[2px] bg-gradient-to-r from-color2 to-yellow-400 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          />

          <motion.p
            className="text-zinc-700 max-w-sm"
            variants={fadeUp}
            whileInView="visible"
            custom={2}
          >
            {item.text}{" "}{item.text}
          </motion.p>
        
        </div>
      </motion.div>
    </div>
  );
}

export default function WorkProcess() {
  return (
    <div className="lg:px-20 sm:p-12 p-6  relative overflow-hidden bg-gradient-to-br from-orange-100 via-white to-blue-100">
 <Image
            src={bal2}
            alt={"Work process image"}
  
            className="object-contain absolute top-[3%] right-[2%] animate-x z-0 opacity-70 pointer-events-none"
          />
           <Image
            src={bal1}
            alt={"Work process image"}
  
            className="object-contain absolute top-[15%] left-[15%] animate-y z-0 md:w-44 opacity-70 pointer-events-none"
          />

            <Image
            src={cloud1}
            alt={"Work process image"}
  
            className="object-contain absolute top-[14%] left-[2%]  z-0 opacity-80 pointer-events-none"
          />

            <Image
            src={cloud2}
            alt={"Work process image"}
  
            className="object-contain absolute top-[50%] right-[2%] marque z-0 opacity-80 pointer-events-none"
          />
          <Image
            src={bal1}
            alt={"Work process image"}
  
            className="object-contain absolute top-[73%] right-[2%] animate-x z-0 md:w-44 opacity-80 pointer-events-none"
          />
           <Image
            src={plane}
            alt={"Work process image"}
  
            className="object-contain absolute top-[73%] left-[2%] aeo z-0 md:w-44 w-16 opacity-80 pointer-events-none"
          />
           <Image
            src={bal2}
            alt={"Work process image"}
  
            className="object-contain absolute top-[30%] left-[2%] aeo md:w-56 z-0 opacity-40 pointer-events-none"
          />


            <Image
            src={cloud3}
            alt={"Work process image"}
  
            className="object-contain absolute top-[80%] right-[2%] marque z-0 opacity-50 pointer-events-none"
          />
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] rounded-full bg-color2/8 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[450px] h-[700px] bg-yellow-600/5 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[450px] h-[700px] bg-color2/6 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-color2/7 blur-[120px] pointer-events-none" />

      {/* Accent lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-color2/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-color2/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Heading ── */}
        <motion.div
          className="w-full text-center flex flex-col items-center gap-5 mb-9 md:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
      

          <motion.h2
            className="font-bold text-3xl text-color1 md:text-5xl max-w-3xl mx-auto leading-tight"
            variants={fadeUp}
            custom={1}
          >
            How We Plan{" "}
            <span className="text-color2">
          Your Journey</span>
          </motion.h2>

          <motion.p
            className="text-zinc-800  max-w-2xl text-center leading-relaxed"
            variants={fadeUp}
            custom={2}
          >
A thoughtful approach combining expertise, attention to detail, and reliable support to create stress-free and enjoyable travel experiences.
          </motion.p>

          {/* Scroll cue */}
          <motion.div
            className="flex flex-col items-center gap-1 mt-2 opacity-50"
            variants={fadeUp}
            custom={3}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-[1px] h-8 bg-gradient-to-b from-color2 to-transparent" />
            <FaAngleDoubleDown className="text-color2 text-lg animate-bounce" />
          </motion.div>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          <TimelineLine />
          <div className="flex flex-col gap-0">
            {data.map((item, i) => (
              <TimelineRow key={i} item={item} i={i} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}