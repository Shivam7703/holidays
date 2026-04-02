import { logo } from "@/assets";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Partners() {
  return (
    <section className=" xl:px-32 lg:px-24 p-6 py-8 sm:p-16 bg-gradient-to-b relative from-gray-200 to-white"> <div className="absolute z-10 w-2/3 top-0 left-0 bg-gradient-to-r h-6 from-zinc-200 via-white to-transparent"/>  <div className="absolute z-10 w-1/2 top-5 left-6 bg-gradient-to-r h-6 from-transparent via-white/50 to-transparent"/>
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