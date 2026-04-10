import { logo } from "@/assets";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Partners() {
  return (
    <section className=" xl:px-32 lg:px-24 p-6 py-8 sm:p-16 bg-gradient-to-b relative from-gray-200 to-white"> 
    
     <Marquee speed={50} pauseOnHover gradient={false} className="py-3 overflow-hidden">
        {Array.from({ length: 7 }).map((_, i) => (
  <Image
    key={i}
    src={logo}
    alt="logo"
    width={150}
    height={50}
    className="mx-8"
  />
))}
        </Marquee> 
    </section>
  );
}