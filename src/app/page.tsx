import AboutSection from "@/components/home/AboutSection";

import Blogs from "@/components/home/blog";
import CountDown from "@/components/home/Contdown";
import Greenbox from "@/components/home/greenbox";
import BannerSlider from "@/components/home/HomeBanner";
import Testimonials from "@/components/home/testimonial";
import { aboutdata, countDown } from "@/data/homeData";
import FaqSection from "@/components/home/faq";
import VisaSlider from "@/components/home/visaslider";
import WorkProcessSlider from "@/components/home/workingprocess";
import Canadapnp from "@/components/home/canadapnp";
import WhychooseSection from "@/components/home/whychoose";
import Award from "@/components/home/award";
import Studyabrod from "@/components/home/studyabroad";
import Dreamcountry from "@/components/home/dreamcountry";
import Coaching from "@/components/home/coaching";
import Team from "@/components/global/team";
import Partners from "@/components/home/partner";
import Advertise from "@/components/home/advertise";
import Destination from "@/components/home/destination";
import WorkProcess from "@/components/home/workingprocess";
import Gallery from "@/components/home/gallery";

export default function Home() {
  return (
    <div className="">
<BannerSlider/>
<Partners/>
<AboutSection  data ={aboutdata} />
<Advertise/>
<CountDown data={countDown}/>
<Destination/>
<WorkProcess/>
<Gallery/>
<WhychooseSection/>
<FaqSection/>
<Blogs isHome={true} />
{/* <VisaSlider/>
<Canadapnp/>
<Award/>
<WorkProcessSlider/>
<Testimonials/>
<Studyabrod/>
<Dreamcountry/>
<Partners/>
<Coaching/>
<Team/>
 */}

  </div>
  );
}

