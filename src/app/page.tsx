import AboutSection from "@/components/home/AboutSection";

import Blogs from "@/components/home/blog";
import CountDown from "@/components/home/Contdown";
import BannerSlider from "@/components/home/HomeBanner";
import { aboutdata, countDown } from "@/data/homeData";
import FaqSection from "@/components/home/faq";
import WhychooseSection from "@/components/home/whychoose";
import Partners from "@/components/home/partner";
import Advertise from "@/components/home/advertise";
import Destination from "@/components/home/destination";
import WorkProcess from "@/components/home/workingprocess";
import Gallery from "@/components/home/gallery";
import Package from "@/components/home/package";
import Logotext from "@/components/home/logobg";

export default function Home() {
  return (
    <div className="">
<BannerSlider/>
<Partners/>
<AboutSection  data ={aboutdata} />
<Advertise/>
<Package/>
<Destination/>
<CountDown data={countDown}/>
<Logotext/>

<WorkProcess/>
<Gallery/>
<WhychooseSection/>
<FaqSection/>
<Blogs isHome={true} />

  </div>
  );
}

