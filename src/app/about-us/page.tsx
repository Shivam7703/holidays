import Aboutchoose from "@/components/about/aboutchoose";
import CEOMessage from "@/components/about/founder";
import Mission from "@/components/about/mission";

import Banner from "@/components/global/banner";
import Partners from "@/components/home/partner";
import Testimonials from "@/components/home/testimonial";

export default function About() {
  return (
    <>
      <Banner
        title={"About Us"}
       
        slug={"about-us"}
      />
      {/* <AboutSection data ={aboutdata2} /> */}
            <Mission /> 
            <CEOMessage/>
               <Aboutchoose/>
               <Partners/>
               <Testimonials/>
    </>
  );
}
