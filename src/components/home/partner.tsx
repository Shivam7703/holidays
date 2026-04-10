import { l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13 } from "@/assets";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Partners() {
  return (
    <section className=" xl:px-32 lg:px-24 p-6 pb-6 sm:pb-10 sm:px-16 bg-white relative "> 

     <Marquee speed={50} pauseOnHover gradient={false} className="py-3 overflow-hidden">
        {[l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13].map((k, i) => (
  <Image
    key={i}
    src={k}
    alt="logo"
    className="mx-8 object-contain h-12 sm:h-16 w-max"
  />
))}
        </Marquee> 
    </section>
  );
}