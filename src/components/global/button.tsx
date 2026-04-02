import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

/* Main Wrapper */
function Buttonmain({ href, text1, text2 }: { href: string; text1: string; text2: string }) {
  const isTel =
    href.startsWith("tel:") ||
    href.startsWith("https") ||
    href.startsWith("mailto:") ||
    href.startsWith("www");

  if (isTel) {
    return (
      <a href={href} className="w-max inline-block group/btn">
        <Button text11={text1} text12={text2} />
      </a>
    );
  }

  return (
    <Link href={href} className="w-max inline-block group/btn">
      <Button text11={text1} text12={text2} />
    </Link>
  );
}

export default Buttonmain;

/* Button UI */
export const Button = ({ text11, text12 }: any) => {
  return (
    <div
      className="group relative flex items-center gap-3 px-7 py-3.5 rounded-full
      font-bold text-[14px] tracking-widest uppercase overflow-hidden cursor-pointer
      transition-all duration-500 hover:-translate-y-[2px]
      bg-color1 hover:bg-color2 text-white
      "
    >
      {/* shimmer sweep */}
      <span
        className="absolute top-0 left-[-120%] w-[60%] h-full
        bg-gradient-to-r from-transparent via-white/30 to-transparent
        -skew-x-12 pointer-events-none animate-shimmer"
      />

      {/* outer ring pulse on hover */}
      <span
        className="absolute inset-0 rounded-full border-2 border-white/0
        group-hover:border-white/20 transition-all duration-500 scale-100
        group-hover:scale-110 opacity-0 group-hover:opacity-100"
      />

      {/* text swap */}
      <span className="relative overflow-hidden h-[1.2em] flex items-center z-10">
        <span className="block transition-transform duration-300 group-hover:-translate-y-full whitespace-nowrap">
          {text11}
        </span>
        <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0 whitespace-nowrap">
          {text12}
        </span>
      </span>

      {/* arrow */}
      <FaArrowRight className="text-[13px] z-10 transition-all duration-300 group-hover:translate-x-1.5" />
    </div>
  );
};