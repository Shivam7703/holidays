"use client";
import React, { useState } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function Faq({ data }: { data: { que: string; ans: string }[] }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setExpandedIndex(expandedIndex === index ? null : index);
  }

  return (
    <div className="space-y-3">
      {data.map((item, index) => {
        const isOpen = expandedIndex === index;

        return (
          <div
            key={index}
            className={`group relative rounded-2xl border transition-all duration-300 overflow-hidden
              ${isOpen
                ? "border-color2/40 shadow-lg"
                : "border-gray-200 hover:border-color2/30 hover:shadow-md bg-white"
              }`}
          >
            {/* Left accent bar */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-[4px] rounded-l-2xl transition-all duration-300
                ${isOpen
                  ? "bg-gradient-to-b from-color2 to-color2"
                  : "bg-transparent group-hover:bg-color2/30"
                }`}
            />

            {/* Question row */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <div className="flex items-center gap-4">
                {/* Number badge */}
                <span
                  className={`text-[11px] font-black tracking-widest shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                    ${isOpen
                      ? "bg-color2 text-white shadow-md shadow-color2/30"
                      : "bg-color2/20 text-color2/60  group-hover:text-color2"
                    }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  className={`text-sm text-color1 md:text-base font-semibold transition-colors duration-300 leading-snug
                  `}
                >
                  {item.que}
                </h3>
              </div>

              {/* Arrow icon */}
              <BsArrowUpRightCircleFill
                className={`text-xl shrink-0 transition-all duration-500
                  ${isOpen
                    ? "rotate-[135deg] text-color2 drop-shadow-sm"
                    : "rotate-0 text-color2/25 group-hover:text-color2"
                  }`}
              />
            </button>

            {/* Divider — only when open */}
            {isOpen && (
              <div className="mx-6 h-px bg-gradient-to-r from-color2/40 via-color2/20 to-transparent" />
            )}

            {/* Answer */}
            <div
              className={`grid transition-all duration-500 ease-in-out
                ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-5 pt-4 pl-[4.5rem]">
                  <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
                    {item.ans}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Faq;