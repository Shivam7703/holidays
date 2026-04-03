 "use client";

// Import required modules
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { aboutb, bann, banner, cl1, cloud1, cloud3, plane } from "@/assets";
import { sliderText, } from "@/utils/motion";




export default function Banner({title, para, img, slug}:any) {

 // Trigger useEffect whenever currentSlide changes

  return (
    <>
      <div>
        <AnimatePresence>
              <div className="w-full h-max relative">
                            <Image
                  className="w-full md:h-[630px] min-h-[440px] object-cover object-top"
                  src={aboutb}
                  alt="sliding image"
                  
                />

<Image
                  className="w-full md:h-32 h-14 object-contain marque opacity-70 absolute z-[5] top-[18%] -right-3"
                  src={cloud3}
                  alt="sliding image"
                  
                />

                <Image
                  className="w-full md:h-36 h-16 object-contain aeo absolute z-[5] opacity-85 top-[20%] left-0"
                  src={plane}
                  alt="sliding image"
                  
                />

                <div className="overlay w-full h-full z-20 absolute top-0 left-0 text-color1">
                  <motion.div
                  
                variants={sliderText} // Using the sliderText motion variants
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ easings: ["easeIn", "easeOut"] }}
                                        className=" flex flex-col h-full justify-center items-center my-auto p-[8%] w-full text-center"
                  >
                  
                  
                      <motion.h2 className="lg:text-6xl font-bold mb-8 text-4xl">
                        {title}
                      </motion.h2>
                 
                 

                   <motion.p className="py-3 w-max  bg-[#f0f0f046] border border-white/60 backdrop-blur-sm text-sm rounded-3xl px-6">Home &nbsp;/ &nbsp; <span className="text-color2 font-bold">{slug}</span>
                   </motion.p>
                   
                  </motion.div>
                </div>
              </div>
        </AnimatePresence>
      </div>
    
    </>
  );
}
