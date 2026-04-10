"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { banner } from "@/assets";
import { fadeIn, staggerContainer } from "@/utils/motion";

function useIsMobile() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}
// ---- Service icons (inline SVG so no extra deps) ----
const services = [
  {
    label: "Customized Tour\nPackages",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    label: "Flight Booking\nServices",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    label: "Hotel & Resort\nReservations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V7a2 2 0 012-2h14a2 2 0 012 2v14M3 21h18M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    label: "Visa\nAssistance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    label: "Honeymoon\nPackages",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    label: "Group & Family\nTours",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Adventure & Activity\nPlanning",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: "Local Sightseeing\n& Transfers",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

// ---- Animated counter ----
function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(target / 60);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}</span>;
}

export default function Aboutchoose() {
  const ref = useRef<HTMLDivElement>(null);

 const isMobile = useIsMobile();
 
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
 
  // Smaller range on mobile, normal on desktop
  const leftY  = useTransform(scrollYProgress, [0, 1], isMobile ? [10, -60] : [50, -90]);
  const rightY = useTransform(scrollYProgress, [0, 1], isMobile ? [-17, 95] : [-40, 160]);
 
  return (
    <motion.section
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full xl:px-32 lg:px-24 md:px-16 sm:p-10 p-6 md:py-20 overflow-hidden relative"
    >
     

      <div className="flex flex-col justify-between flex-wrap md:flex-row items-center gap-y-7 lg:gap-y-14">
        {/* ── LEFT CONTENT ── */}
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="md:w-1/2 w-full space-y-4 sm:space-y-6"
        >
          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-color1 leading-tight">
            Your Trustpoint, GoFly Best for{" "}
            <span className="text-color2">Travel Agency.</span>
          </h2>

          {/* Description */}
          <p className="text-gray-800 font1 md:text-lg text-sm leading-relaxed ">
            At GoFly Travel Agency, we are passionate about creating exceptional travel experiences.{" "}
            <strong className="text-black font-semibold">
              Whether you&apos;re looking for a relaxing beach vacation, an adventurous trek, a luxurious getaway, or a cultural expedition.
            </strong>
          </p>

          {/* Counter */}
          <div className="flex items-center gap-4 pt-2">
            {/* Curved arrow SVG */}
            <svg width="52" height="40" viewBox="0 0 52 40" fill="none" className="text-orange-400 mt-2">
              <path d="M4 8 Q12 2 20 12 Q28 22 36 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M30 10 L36 16 L28 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <div>
              <div className="flex gap-5 items-center">
              <p className="text-6xl font-black text-color1 leading-none">
                <Counter target={15} />
                <span className=" text-gray-500 font-bold ml-1">+</span>
              </p>
              <p className="text-gray-700 text- mt-1">Years<br />of {" "} Experience</p>
           </div> </div>
          </div>

          {/* Services label */}
          <div className="pt-4">
            <p className="text-gray-800 font-semibold md:text-xl text-lg mb-4">
              We Provide to Smart Services
            </p>

            {/* Service chips */}
            <div className="flex flex-wrap gap-3">
              {services.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2.5 bg-white rounded-xl px-3 py-3 shadow-lg border duration-300 cursor-default"
                >
                  <span className="text-color3 flex-shrink-0">{s.icon}</span>
                  <span className="text-gray-700 text-xs md:text-sm font-medium leading-tight whitespace-pre-line">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
  

    <motion.div
      ref={ref}
      variants={fadeIn("left", "tween", 0.2, 1)}
      className="md:w-[45%] w-full flex items-end justify-around h-96 sm:h-[520px] relative"
    >
      {/* Left arched image — moves UP */}
      <motion.div
        style={{ y: leftY }}
        className="relative h-[80%] w-[45%] rounded-t-full overflow-hidden shadow-xl"
      >
        <Image
          src={banner}
          alt="Beach destination"
          fill
          className="object-cover w-full h-full object-center"
        />
      </motion.div>

      {/* Right arched image — moves DOWN */}
      <motion.div
        style={{ y: rightY }}
        className="relative h-[80%] mb-[20%] w-[45%] rounded-t-full overflow-hidden shadow-xl"
      >
        <Image
          src={banner}
          alt="Waterfall adventure"
          fill
          className="object-cover w-full h-full object-center"
        />
      </motion.div>
    </motion.div>
  
<div className="w-full">
          {/* Trustpilot bar */}
          <div className="flex w-max mx-auto items-center gap-2 pt-2">
            <span className="text-gray-700 font-semibold sm:text-sm text-xs">Excellent!</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.447a1 1 0 00-1.175 0l-3.368 2.447c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.062 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.287-3.957z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-500 sm:text-sm text-[8px]">
              5.0 Rating out of 5.0 based on{" "}
              <span className="underline text-gray-700 cursor-pointer">24K+ reviews</span>
            </span>
            <svg viewBox="0 0 100 30" className="w-20 h-5 ml-1" fill="none">
              <text x="0" y="22" fontSize="18" fontWeight="bold" fill="#00b67a">★</text>
              <text x="20" y="22" fontSize="14" fill="#191919" fontFamily="sans-serif">Trustpilot</text>
            </svg>
          </div>
          </div>
      </div>
    </motion.section>
  );
}