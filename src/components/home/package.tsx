"use client";
import React, { useState } from "react";
import { packages as data } from "@/data/homeData";
import Countryslider from "./countryslider";
import { bal2, patta, patta2, rope, rope2 } from "@/assets";
import Image from "next/image";

export default function Package() {
  const categories = ["domestic", "international"];

  const [cat, setCat] = useState("domestic");

  // ✅ Filtered Data
  const filteredPackages = data?.cards?.filter(
    (item:any) => item.category === cat
  );

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-red-100 via-white to-blue-100">
  
      <div className="absolute h-1/2 w-full bg-color1 bottom-0 left-0" />

<Image
            src={bal2}
            alt={"Blog image"}
            className="absolute -top-7 right-[3%]  object-contain w-fit h-0  animate-y sm:h-44 opacity-40 z-0"
          />

          <Image
            src={rope2}
            alt={"Blog image"}
            className="absolute -top-5 left-0   object-contain w-fit h-1/2 opacity-30 z-0"
          />


<Image
            src={patta}
            alt={"Blog image"}
            className="absolute -bottom-5 -right-[10%]   object-contain w-fit h-64   sm:h-96 opacity-60 z-0"
          />
       
      {/* Header */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-9 pb-20 md:pt-12 md:pb-24">
        <h2 className="text-color1 font-bold text-2xl md:text-5xl !leading-tight mb-6 max-w-3xl mx-auto">
          {data?.title2}{" "}
          <span className="text-color2">{data?.title3}</span>
        </h2>

        {/* ✅ Category Buttons */}
        <div className="flex gap-4 mt-4">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCat(item)}
              className={`sm:px-6 sm:py-2 px-3 py-1 sm:text-base text-sm rounded-full  font-medium transition-all duration-300
                ${
                  cat === item
                    ? "bg-color2 text-white"
                    : "bg-white text-color1 border border-color1"
                }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div className="sm:p-12 md:p-16 lg:px-20 -mt-20 md:-mt-28">
        <Countryslider data={filteredPackages} uniqueId={"packageSlider123"} />
      </div>

    </section>
  );
}