"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { footerImage } from "@/assets";
import Image from "next/image";

function CountDown({ data }: any) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <section
      ref={ref}
      className="relative w-full sm:pb-12 pb-6 shadow-lg shadow-black/30 bg-white px-3  md:px-12 lg:px-20"
    >
      <motion.div
        variants={staggerContainer(0.15, 0.1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="relative z-10  mx-auto bg-gray-100 rounded-md shadow-md sm:rounded-3xl py-6 px-4 sm:p-8 md:p-14   overflow-hidden"
      >
            <Image src={footerImage} alt='bag' className='absolute bottom-0 right-0 z-[1] opacity-80 w-full h-full object-cover ' />
        

        <div className="relative z-10 flex flex-wrap flex-row sm:items-center justify-between gap-y-4">
          {data?.map((counts: any, index: number) => (
            <div key={counts?.id} className="max-sm:w-[48%]">

              {/* Stat item */}
              <motion.div
                variants={fadeIn("up", "tween", index * 0.12, 0.5)}
                className="flex items-center gap-2  sm:gap-4  sm:justify-center"
              >
                {/* Colored icon circle */}
                <div
                  className={`sm:w-14 sm:h-14 w-10 h-10 rounded-full flex items-center justify-center text-white sm:text-2xl text-lg shadow-md bg-${counts?.color || "red-500"} `}
                >
                  {counts?.icon}
                </div>

                {/* Number + label */}
                <div>
                  <div className="text-xl sm:text-4xl font-bold text-gray-800 leading-none">
                    {inView ? (
                      <CountUp start={0} end={counts?.Value} duration={2.8} separator="," />
                    ) : "0"}
                    <span className="ml-0.5">{counts?.suffix}</span>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-lg md:text-xl mt-1">{counts?.title}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default CountDown;