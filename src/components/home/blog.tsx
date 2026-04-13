import React from "react";
import { blogData as data } from "@/data/homeData";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { box3, patta, process1 } from "@/assets";
import Buttonmain from "../global/button";

export default function Blogs({ isHome }: any) {
  return (
    <section
      className={`${
        isHome ? "lg:px-24 md:px-20 sm:p-14 py-6 px-3 bg-gradient-to-br from-orange-100 via-white to-blue-100 relative" : "px-3 pb-5"
      } relative w-full overflow-hidden `}
    >
     {isHome && (
          <Image
            src={process1}
            alt={"Blog image"}
            className="absolute -bottom-12 -right-12   object-contain w-fit h-64 rotate-12  sm:h-96 opacity-60 z-0"
          />
      )}
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-color2/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-white/40 rounded-full blur-[100px] pointer-events-none" />

      {/* ── HEADER — left title + right button ── */}
      {isHome && (
        <div className="flex flex-wrap flex-row items-end justify-between gap-4 mb-10 relative z-10 max-w-7xl mx-auto">
          {/* Left */}
          <div className="sm:space-y-3 space-y-1 max-w-xl">
            {data?.title1 && (
              <span className="block  text-color1 font-bold uppercase max-sm:hidden text-xs tracking-[0.25em]">
                {data.title1}
              </span>
            )}
            <h2 className="text-color1 font-bold leading-tight text-2xl md:text-4xl lg:text-5xl">
              Explore{" "}
              <span className="text-color2">Latest News</span>
            </h2>
          </div>

          {/* Right — See More button */}
          <div className="">
            <Buttonmain href="/blogs" text1="See More Articles" text2="View All Blogs" />
          </div>
        </div>
      )}

      {/* ── GRID ── */}
      <div
        className={`grid lg:grid-cols-4 grid-cols-2 gap-y-6 gap-3 max-w-7xl mx-auto relative z-10`}
      >
        {(isHome ? data?.blog?.slice(0, 4) : data?.blog)?.map(
          (blogs: any, index: number) => (
            <Link
              key={index}
              href={`/blogs/${encodeURIComponent(
                blogs.title.toLowerCase().replace(/\s+/g, "-")
              )}`}
              className="group block bg-color2 relative rounded-md sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 sm:pb-4 pb-1"
            >
              {/* ── IMAGE — top 58% ── */}
              <div className="relative h-32 sm:h-60 overflow-hidden rounded-md sm:rounded-3xl">
                <Image
                  src={blogs?.img || box3}
                  alt={blogs.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-600"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* subtle dark gradient at very bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Date badge — top right */}
                {blogs?.date && (
                  <div className="absolute top-4 right-4 bg-white text-color1 text-center sm:p-3 p-1 rounded-xl shadow-lg min-w-[52px] group-hover:rounded-full duration-1000 border border-gray-100">
                    <p className="sm:text-xl text-base font-black leading-none text-color1">
                      {blogs.date.split(" ")[0]}
                    </p>
                    <p className="sm:text-[10px] text-[6px] uppercase tracking-wider font-bold text-color2 mt-0.5">
                      {blogs.date.split(" ")[1]}
                    </p>
                  </div>
                )}
              </div>

              {/* ── WHITE CONTENT BOX — overlaps image slightly ── */}
              <div className="relative -mt-5 sm:mx-3 mx-1 bg-white sm:rounded-2xl rounded-md sm:p-6 p-3 sm:space-y-3 shadow-sm border border-gray-100/80 z-10">

                {/* Tag */}
                {blogs?.tag && (
                  <span className="text-amber-500 text-[8px] sm:text-xs font-bold uppercase tracking-wider">
                    {blogs.tag}
                  </span>
                )}

                {/* Title */}
                <h2 className="text-zinc-600 font-bold text-base sm:text-xl leading-snug line-clamp-2 group-hover:text-color1 transition-colors duration-300">
                  {blogs.title}
                </h2>

                {/* Description — optional */}
                {blogs?.para && (
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 hidden sm:block">
                    {blogs.para.slice(0, 100)}...
                  </p>
                )}

                {/* Read more */}
                <div className="flex items-center gap-1.5 text-color2 text-xs font-bold uppercase tracking-wider pt-1 group-hover:gap-3 transition-all duration-300">
                  Read More
                  <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </section>
  );
}