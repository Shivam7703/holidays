"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import DestinationAside from "./destaside";
import { fadeUp, staggerContainer } from "@/utils/motion";
import { bal1, bal2 } from "@/assets";

const whychoose = [
        {
            heading: "Customized Packages:",
            para: " We offer a variety of Himachal tour packages, including honeymoon specials and adventure trips, tailored to your preferences."
        },
        {
            heading: "Expert Local Knowledge:",
            para: "Our team possesses in-depth knowledge of the region, ensuring you experience hidden gems along with popular destinations."
        },
        {
            heading: "Quality Accommodations:",
            para: " Stay in top-rated hotels and resorts that offer comfort, scenic mountain views, and a relaxing environment."
        },
        {
            heading: "Seamless Travel Experience:",
            para: "From transportation to sightseeing, we handle all arrangements so you can enjoy a stress-free and memorable trip."
        }
    ]

export default function Destdetails({ data }: any) {
  return (
    <div className="lg:px-28 xl:px-32 md:px-20 sm:px-12 px-3 py-12 bg-gradient-to-br from-orange-100 via-white to-blue-100 relative">
      <div className="flex flex-wrap justify-between gap-y-5 relative w-full">
 <Image
                  src={bal1}
                  alt={"Work process image"}
        
                  className="object-contain fixed top-[73%] right-[2%] animate-x -z-1 md:w-44 w-28 opacity-60 pointer-events-none"
                />

                 <Image
                  src={bal2}
                  alt={"Work process image"}
        
                  className="object-contain fixed top-[23%] left-[2%] animate-x z-[2] md:w-32 w-20  pointer-events-none"
                />
        {/* ── MAIN CONTENT ── */}
        <div className="md:w-[64%] w-full space-y-14">

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Title overlay on hover */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <h1 className="text-white text-2xl font-bold">{data?.title}</h1>
            </div>
            <div className="relative aspect-[16/9] z-[3] overflow-hidden">
              <Image
                src={data?.img}
                alt={data?.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

          {/* About Section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl z-[3] font-bold text-zinc-800 border-l-4 border-amber-500 pl-4">
              {data?.heading}
            </h2>
            <p className="text-zinc-600 leading-relaxed text-base sm:text-lg">
              {data?.description}
            </p>
          </motion.div>

          {/* ── Top Attractions ── */}
          {data?.attraction && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl  font-bold text-zinc-800 border-l-4 border-amber-500 pl-4">
                  {data.attraction.heading}
                </h2>
                <p className="text-zinc-500 text-sm sm:text-base pl-5">
                  {data.attraction.para}
                </p>
              </div>

              <div className="grid grid-cols-2  gap-5">
                {data.attraction.cards?.map((card: any, i: number) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="group relative z-[4] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white"
                  >
                    {/* Card image */}
                    <div className="relative h-32  sm:h-44 overflow-hidden">
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <h3 className="absolute bottom-3 left-4 text-white font-bold text-lg">
                        {card.title}
                      </h3>
                    </div>
                    {/* Card body */}
                    <div className="p-4">
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                    {/* Hover accent */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Top Things to Do ── */}
          {data?.topthings && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-800 border-l-4 border-amber-500 pl-4">
                  {data.topthings.heading}
                </h2>
                <p className="text-zinc-500 text-sm sm:text-base pl-5">
                  {data.topthings.para}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
                {data.topthings.cards?.map((card: any, i: number) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="group flex gap-4 bg-white z-[1] rounded-2xl p-5 shadow-sm hover:shadow-lg border border-zinc-100 hover:border-amber-200 transition-all duration-400 hover:-translate-y-1"
                  >
                    {/* Number badge */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 group-hover:bg-amber-600 transition-colors duration-300 flex items-center justify-center text-white font-bold text-sm">
                      {i + 1}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-zinc-800 group-hover:text-amber-600 transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Testimonials ── */}
          {data?.testimonials?.length > 0 && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-800 border-l-4 border-amber-500 pl-4">
                What Our Clients Say
              </h2>

              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={16}
                slidesPerView={2}

                className="!pb-10 z-[5]"
              >
                {data.testimonials.map((t: any, i: number) => (
                  <SwiperSlide key={i}>
                    <div className="bg-white z-[4] rounded-2xl p-6 shadow-md border border-zinc-100 flex flex-col gap-4">
                      {/* Stars */}
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, s) => (
                          <FaStar key={s} className="text-amber-400 text-sm" />
                        ))}
                      </div>
                      {/* Text */}
                      <p className="text-zinc-600 italic text-sm leading-relaxed">
                        "{t.text}"
                      </p>
                      {/* Author */}
                      {/* <div className="flex items-center gap-3 pt-2 border-t border-zinc-100">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-amber-300">
                          <Image
                            src={t.img}
                            alt={"test"}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-zinc-800 text-sm">
                            {t.title}
                          </p>
                          <p className="text-xs text-zinc-400">Verified Traveller</p>
                        </div>
                      </div> */}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          )}

          {/* ── Dynamic Content Sections ── */}
          {data?.content && (
            <article className="space-y-12">
              {data.content.map((section: any, secIndex: number) => (
                <motion.div
                  key={secIndex}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {section?.heading && (
                    <div
                      className="text-2xl sm:text-3xl font-bold text-zinc-800 border-l-4 border-amber-500 pl-4"
                      dangerouslySetInnerHTML={{ __html: section.heading }}
                    />
                  )}
                  {section?.subcontent?.map((item: any, index: number) => (
                    <div key={index} className="space-y-4">
                      {item?.subheading && (
                        <p
                          className="text-xl sm:text-2xl font-semibold text-zinc-800 mt-4"
                          dangerouslySetInnerHTML={{ __html: item.subheading }}
                        />
                      )}
                      {item?.para && (
                        <p
                          className="text-zinc-700 leading-relaxed text-base sm:text-lg"
                          dangerouslySetInnerHTML={{ __html: item.para }}
                        />
                      )}
                      {item?.list && Array.isArray(item.list) && (
                        <motion.ul
                          variants={staggerContainer( 0.1, 0.05 )}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true }}
                          className="space-y-3"
                        >
                          {item.list.map((li: string, i: number) => (
                            <motion.li
                              key={i}
                              variants={fadeUp}
                              className="flex items-start gap-3 text-zinc-700 text-sm sm:text-base
                                bg-amber-50 hover:bg-amber-100 transition-all duration-300
                                p-3 rounded-lg shadow-sm"
                            >
                              <FaCheckCircle className="text-amber-500 mt-1 shrink-0" />
                              <span dangerouslySetInnerHTML={{ __html: li }} />
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                      {item?.table && (
                        <div className="overflow-x-auto rounded-xl border border-zinc-200 shadow-sm">
                          <table className="min-w-full text-sm sm:text-base text-zinc-700">
                            <thead>
                              <tr>
                                {item.table.theading?.map((th: string, thIndex: number) => (
                                  <th
                                    key={thIndex}
                                    className="px-4 py-3 text-left bg-gradient-to-r from-amber-500 to-amber-600 text-white first:rounded-tl-xl last:rounded-tr-xl font-semibold whitespace-nowrap"
                                  >
                                    {th}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {item.table.rows?.map((row: any, rIndex: number) => (
                                <tr key={rIndex} className="even:bg-zinc-50 hover:bg-amber-50 transition">
                                  {row?.colum?.map((col: string, cIndex: number) => (
                                    <td key={cIndex} className="px-4 py-3 border-t border-zinc-200 whitespace-nowrap">
                                      {col}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              ))}
              {/* <Faqs data={data.faq} /> */}
            </article>
          )}

        </div>

        {/* ── SIDEBAR ── */}
        <div className="md:w-[30%] w-full md:sticky md:top-32 h-fit space-y-5">
          <DestinationAside data={whychoose}/>
        </div>

      </div>
    </div>
  );
}