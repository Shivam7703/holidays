"use client";
import React from 'react'
import Image from 'next/image'
import { advertise } from '@/data/homeData'
import Link from 'next/link'
import { fadeIn } from '@/utils/motion'
import { motion } from 'motion/react'
import { footerImage, process1 } from '@/assets';
export default function Advertise() {
  return (
    <section className="w-full  bg-white flex-wrap flex items-stretch justify-between gap-y-7  sm:pb-9 p-6 md:px-12 lg:px-24">
        {advertise?.ads?.map((item:any,index:number)=>(
            <div key={index} className="relative w-full md:w-[48%] rounded-lg overflow-hidden shadow-lg shadow-black/50">
                <Image src={item} alt={`Advertise ${index + 1}`} className="w-full h-full object-contain" />
            </div>
        ))}

       <div className="w-full shadow-lg shadow-black/40 rounded-2xl md:p-10 p-6 bg-orange-50  relative overflow-hidden ">
    <Image src={footerImage} alt='bag' className='absolute bottom-0 right-0 z-[1] opacity-80 w-full h-full object-cover ' />


  {/* Top row */}
  <div className="relative z-10 flex items-start justify-between mb-2">
      <p className="text-color2 text-xs font-semibold uppercase flex items-center gap-2">
        <span className="inline-block w-6 h-[2px] bg-color1" />
        Special Offers
      </p>
     
    
    <Link
      href="/offers"
      className="text-sm font-semibold text-color1 hover:text-white border border-color1
        hover:bg-color1 px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap"
    >
      View All →
    </Link>
  </div> <h2 className="text-xl md:text-4xl font-bold text-color1 leading-snug max-w-lg">
        {advertise?.title}
      </h2>

  {/* Points */}
  <div className="relative z-10 flex flex-wrap gap-y-3 mt-6">
    {advertise?.points?.map((item: any, index: number) => (
      <motion.div
        key={index}
        variants={fadeIn("up", "tween", 0.2 + index * 0.1, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex items-start gap-4 
          group md:w-[31%] w-full "
      >
        {/* Icon */}
        <div className="w-10 h-10 flex-shrink-0 rounded-full bg-color2/10 border border-color2/20
          flex items-center justify-center text-color2 text-2xl
          group-hover:bg-color1 group-hover:text-white group-hover:border-color1
          group-hover:scale-110 transition-all duration-300">
          {item.icon}
        </div>

        {/* Text */}
        <div>
          <h3 className="text-gray-800 font-semibold sm:text-xl text-lg leading-snug mb-0.5
            group-hover:text-color1 transition-colors duration-200">
            {item.heading}
          </h3>
          <p className="text-gray-700 sm:text-lg text-sm leading-relaxed">
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
