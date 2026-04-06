"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { fadeIn } from '@/utils/motion'
import { motion } from 'motion/react'
import { footerImage, process1 } from '@/assets';
import { AiFillCar } from 'react-icons/ai';

export default function Advertise() {
 const  points = [
      {
        icon: <AiFillCar />,
        heading: "Our Mission",
        text:
          "To make travel simple, affordable, and memorable by offering well-planned holiday experiences with seamless booking, transparent pricing, and personalized support for every traveler.",
      },
      {
        icon: <AiFillCar />,
        heading: "Our Vision",
        text:
          "To become a trusted travel partner known for delivering value-driven holidays, creating unforgettable journeys, and making global travel accessible to everyone.",
      },
      {
        icon: <AiFillCar />,
        heading: "Our Values",
        text:
          "We believe in honesty, customer satisfaction, and quality service. Our focus is on delivering real value, building long-term relationships, and ensuring every trip is smooth, safe, and truly enjoyable.",
      },
    ];
  return (
    <section className="w-full  bg-white p-6 md:p-12 lg:px-24">
       
       <div className="w-full rounded-2xl md:p-10 p-6 bg-blue-50  relative overflow-hidden shadow-sm">
    <Image src={footerImage} alt='bag' className='absolute bottom-0 right-0 z-[1] opacity-80 w-full h-full object-cover ' />


  {/* Top row */}
  <div className="relative z-10 flex items-start justify-between mb-2">
      
    
    
  </div> 
  <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-center font-bold text-color1 leading-snug ">
Our Mission &{" "} <span className='text-color2'>Vision</span>      </h2>
<div className='mt-2 mx-auto h-px w-80 bg-gradient-to-r from-color2/30 via-color2/90 to-color2/30'/>
  {/* Points */}
  <div className="relative z-10 flex flex-wrap gap-y-3 md:mt-12 mt-7">
    {points?.map((item: any, index: number) => (
      <motion.div
        key={index}
        variants={fadeIn("up", "tween", 0.2 + index * 0.1, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex items-start gap-4 
          group md:w-[32%] w-full "
      >
        {/* Icon */}
        <div className={`w-12 h-12 ${index + 1 == 2 ? "bg-blue-700 text-white" : "bg-color2 text-black"} flex-shrink-0 rounded-full border border-color2/20
          flex items-center justify-center  text-3xl
          group-hover:bg-color1 group-hover:text-white group-hover:border-color1
          group-hover:scale-110 transition-all duration-300`}>
          {item.icon}
        </div>

        {/* Text */}
        <div>
          <h3 className="text-gray-800 font-bold text-2xl leading-snug mb-3
            group-hover:text-color1 transition-colors duration-200">
            {item.heading}
          </h3>
          <p className="text-gray-700 sm:text-lg text-semibold leading-relaxed">
            {item.text}
          </p>
        </div>
      </motion.div>
    ))}
  </div>

</div>
    </section>
  )
}
