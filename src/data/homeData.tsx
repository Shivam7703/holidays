import {
  about2,
  banner,
  banner2,
  banner3,
  bene2,
  box1,
  box2,
  box3,
  cl1,
  cl2,
  cl3,
  cl4,
  cl5,
  cl6,
  cl7,
  cl8,
  cl9,
  immigration,
  Career,
  ielts,
  jobAssist,
  PostLanding,
  profile,
  pte,
  visaDocument,
  famvisa,
  prvisa,
  business,
  touristvisa,
  contactb,
  logo2,
  process1,
  ukflag,
  visa1,
  canadaflag,
  ontario,
  bcPnpProgram,
  alberta,
  novaScotia,
  manitoba,
  saskatchewanPnp,
  bann,
  about,
  back,
  ad1,
  ad2,
} from "@/assets";
import { FaBriefcase, FaGlobeAmericas, FaPlaneDeparture } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiOutlineFlag, HiOutlineLightBulb } from "react-icons/hi";
import { IoSearch, IoSettingsOutline } from "react-icons/io5";
import { MdAttachEmail, MdWifiCalling3 } from "react-icons/md";
import { RiUserFollowLine } from "react-icons/ri";

import { FaUsers, FaGlobe } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { AiFillCar } from "react-icons/ai";



// homepage
export const navigationMenu = {
  primaryMenu: [
    { id: 2, label: "About Us", href: "/about-us" },
 {
    id: 3,
    label: "Destination",
    href: "#",
    subNav: [
      {
        id: 1,
        label: "Domestic",
        href: "#",
        subNav: [
          {
            id: 1,
            label: "Himachal Pradesh",
            href: "/destinations/himachal-pradesh",
          },
          {
            id: 2,
            label: "Andaman & Nicobar",
            href: "/destinations/andaman-nicobar-islands",
          },
          { id: 3, label: "Kashmir", href: "/destinations/kashmir" },
          {
            id: 4,
            label: "Sikkim",
            href: "/destinations/sikkim",
          },
          { id: 5, label: "Kerala", href: "/destinations/kerala" },
          { id: 6, label: "Goa", href: "/destinations/goa" },
          {
            id: 7,
            label: "Leh-Ladakh",
            href: "/destinations/leh-ladakh",
          },
          { id: 8, label: "Darjeeling", href: "/destinations/darjeeling" },
          {
            id: 9,
            label: "Jaipur",
            href: "/destinations/jaipur",
          },
          {
            id: 10,
            label: "Agra",
            href: "/destinations/agra",
          },
          {
            id: 11,
            label: "Ranthambore",
            href: "/destinations/ranthambore",
          },
           {
            id: 12,
            label: "Rishikesh",
            href: "/destinations/rishikesh",
          },
        ],
      },
      {
        id: 2,
        label: "International",
        href: "#",
        subNav: [
          {
            id: 1,
            label: "Dubai",
            href: "/destinations/dubai",
          },
          { id: 2, label: "Thailand", href: "/destinations/thailand" },
          {
            id: 3,
            label: "Vietnam",
            href: "/destinations/vietnam",
          },
          {
            id: 4,
            label: "Maldives",
            href: "/destinations/maldives",
          },
          {
            id: 5,
            label: "Hong Kong",
            href: "/destinations/hong-kong",
          },
          { id: 6, label: "Turkey", href: "/destinations/turkey" },
          {
            id: 7,
            label: "China",
            href: "/destinations/china",
          },
          {
            id: 8,
            label: "Abu Dhabi",
            href: "/destinations/abu-dhabi",
          },
          {
            id: 9,
            label: "Switzerland",
            href: "/destinations/switzerland,-usa",
          },
          {
            id: 10,
            label: "Almaty",
            href: "/destinations/almaty",
          },
          {
            id: 11,
            label: "Georgia",
            href: "/destinations/georgia",
          },
          { id: 12, label: "Azerbaijan", href: "/destinations/azerbaijan" },

          {
            id: 14,
            label: "Bhutan",
            href: "/destinations/bhutan",
          },
          {
            id: 15,
            label: "Russia",
            href: "/destinations/russia",
          },
          { id: 16, label: "Japan", href: "/destinations/japan" },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Packages",
    href: "#",
    subNav: [
      {
        id: 1,
        label: "Domestic",
        href: "#",
        subNav: [
          {
            id: 1,
            label: "Golden Triangle Tour",
            href: "/packages/golden-triangle-tour",
          },
          {
            id: 2,
            label: "Jodhpur – Jaisalmer Tour",
            href: "/packages/jodhpur-–-jaisalmer-tour",
          },
          {
            id: 3,
            label: "Paradise on Earth – Kashmir Tour",
            href: "/packages/paradise-on-earth-–-kashmir-tour",
          },
          {
            id: 4,
            label: "The Andaman Tour",
            href: "/packages/the-andaman-tour",
          },
          { id: 5, label: "Goa Tour", href: "/packages/goa-tour" },
          {
            id: 6,
            label: "Ladakh Tour",
            href: "/packages/ladakh-tour",
          },
          {
            id: 7,
            label: "South India Temple Tour 5N 6D",
            href: "/packages/south-india-temple-tour-5n-6d",
          },
          {
            id: 8,
            label: "Exotic kerala Tour 3N 4D",
            href: "/packages/exotic-kerala-tour-3n-4d",
          },
          {
            id: 9,
            label: "Exotic kerala Tour 7N 8D",
            href: "/packages/exotic-kerala-tour-7n-8d",
          },
          {
            id: 10,
            label: "Darjeeling Tour",
            href: "/packages/darjeeling-tour",
          },
          {
            id: 11,
            label: "Assam Meghalaya Tour",
            href: "/packages/assam-meghalaya-tour",
          },
          {
            id: 12,
            label: "Dajeeling Gangtok Tour",
            href: "/packages/darjeeling-gangtok-tour",
          },
          {
            id: 13,
            label: "South India Tour",
            href: "/packages/south-india-tour",
          },
        ],
      },
      {
        id: 2,
        label: "International",
        href: "#",
        subNav: [
          {
            id: 1,
            label: "Vietnam Adventure Tour",
            href: "/packages/vietnam-adventure-tour",
          },
          {
            id: 2,
            label: "Bali Discovery Trip",
            href: "/packages/bali-discovery-trip",
          },
          {
            id: 3,
            label: "Best of Turkey",
            href: "/packages/best-of-turkey",
          },
          {
            id: 4,
            label: "Enchanting Sri Lanka",
            href: "/packages/enchanting-sri-lanka-tour",
          },
          {
            id: 5,
            label: "Greece Tour",
            href: "/packages/greece-tour",
          },
          {
            id: 6,
            label: "Mesmerizing Japan",
            href: "/packages/mesmerizing-japan",
          },
          {
            id: 7,
            label: "Thailand Tour",
            href: "/packages/thailand-tour",
          },
          {
            id: 8,
            label: "Dubai Tour",
            href: "/packages/dubai-tour",
          },
          {
            id: 9,
            label: "Singapore Tour",
            href: "/packages/singapore-tour",
          },
        ],
      },
    ],
  },

    {
      id: 7,
      label: "Blog",
      href: "/blogs",
    },

    { id: 8, label: "Contact Us", href: "/contact-us" },
  ],
};

export const aboutdata = {
  img: about,
  title2: "Your Reliable Travel ",
  title3: "Partner",
  para:
    "We create hassle-free travel experiences with curated destinations, expert planning, and end-to-end support. From booking to boarding, we make sure your journey is smooth, exciting, and unforgettable. With personalized itineraries and attention to every detail, we turn your travel plans into effortless experiences. Our dedicated team is always there to guide you, ensuring comfort, convenience, and peace of mind throughout your trip.",
  pointer: [
    {
      id: 1,
      heading: "Transparency",
      text: "Clear pricing, honest recommendations, and no hidden surprises—just smooth travel planning you can trust.",
      icon: <IoSearch />,
    },
    {
      id: 2,
      heading: "Customer Satisfaction",
      text: "Focused on creating memorable journeys, comfort, and experiences that you’ll truly enjoy.",
      icon: <RiUserFollowLine />,
    },
    {
      id: 3,
      heading: "Reliability",
      text: "On-time bookings, dependable support, and well-planned trips you can count on every time.",
      icon: <IoSearch />,
    },
    {
      id: 4,
      heading: "Personalized Experience",
      text: "Trips tailored to your preferences, ensuring every journey feels just right for you.",
      icon: <RiUserFollowLine />,
    },
  ],
};

export const advertise = {
  title: "Travel to your dream destinations with exclusive packages.",
  ads: [ad1, ad2],
  points: [
    {
      icon: <AiFillCar />,
      heading: "Quick & Easy Booking",
      text:
        "Plan and book your entire trip in just a few simple steps—fast and convenient.",
    },
    {
      icon: <AiFillCar />,
      heading: "Stress-Free Travel",
      text:
        "Leave the planning to us while you enjoy a smooth and relaxed journey.",
    },
    {
      icon: <AiFillCar />,
      heading: "All-in-One Travel Support",
      text:
        "From flights to stays and tours, everything you need is handled in one place.",
    },
  ],
};

export const countDown = [
  {
    id: 1,
    icon: <FaUsers className="text-color1" />,
    suffix: "+",
    title: "Clients Served",
    Value: 2000,
    color: "color4",
  },
  {
    id: 2,
    icon: <MdVerified className="text-white" />,
    suffix: "%",
    title: "Success Rate",
    Value: 96,
    color: "color2",
  },
  {
    id: 3,
    icon: <BiTime className="text-white" />,
    suffix: "hrs",
    title: "Average Approval Time",
    Value: 42,
    color: "color1",
  },
  {
    id: 4,
    icon: <FaGlobe className="text-white" />,
    suffix: "+",
    title: "Countries Operations",
    Value: 60,
    color: "color3",
  },
];

export const packages = {
  title2: "Our Most Presious ",
  title3: "Packages",

  cards: [
  {
    id: 1,
    img: ontario,
    category: "international",
    heading: "Canada Tour Package – Ontario",
    duration: "6 Days / 5 Nights",
    price: "₹1,25,000",
    points: ["• Toronto City Tour", "• Niagara Falls Visit"],
    text: "Explore Ontario with vibrant city life, natural beauty, and iconic attractions.",
    link: "/packages/canada-ontario",
  },
  {
    id: 2,
    img: bcPnpProgram,
    category: "international",
    heading: "Canada Tour – British Columbia",
    duration: "5 Days / 4 Nights",
    price: "₹1,20,000",
    points: ["• Vancouver City Tour", "• Mountain Views"],
    text: "Discover scenic landscapes, coastal beauty, and adventure in British Columbia.",
    link: "/packages/canada-bc",
  },
  {
    id: 3,
    img: alberta,
    category: "international",
    heading: "Alberta Nature Tour",
    duration: "6 Days / 5 Nights",
    price: "₹1,30,000",
    points: ["• Banff National Park", "• Lake Louise Visit"],
    text: "Experience breathtaking mountains, lakes, and wildlife in Alberta.",
    link: "/packages/canada-alberta",
  },
  {
    id: 4,
    img: saskatchewanPnp,
    category: "international",
    heading: "Saskatchewan Explorer Package",
    duration: "5 Days / 4 Nights",
    price: "₹1,10,000",
    points: ["• Cultural Experience", "• Nature Trails"],
    text: "Enjoy peaceful landscapes and cultural heritage in Saskatchewan.",
    link: "/packages/canada-saskatchewan",
  },
  {
    id: 5,
    img: manitoba,
    category: "international",
    heading: "Manitoba Adventure Tour",
    duration: "5 Days / 4 Nights",
    price: "₹1,15,000",
    points: ["• Wildlife Experience", "• Northern Lights Chance"],
    text: "Explore lakes, wildlife, and unique northern experiences in Manitoba.",
    link: "/packages/canada-manitoba",
  },
  {
    id: 6,
    img: novaScotia,
    category: "international",
    heading: "Nova Scotia Coastal Tour",
    duration: "6 Days / 5 Nights",
    price: "₹1,25,000",
    points: ["• Coastal Drive", "• Lighthouse Visit"],
    text: "Experience stunning coastlines, seafood, and maritime culture.",
    link: "/packages/canada-nova-scotia",
  },

  // Domestic Packages (using same images as requested)
  {
    id: 7,
    img: manitoba,
    category: "domestic",
    heading: "Himachal Hill Station Tour",
    duration: "5 Days / 4 Nights",
    price: "₹14,999",
    points: ["• Manali Visit", "• Snow Activities"],
    text: "Enjoy scenic mountains, snowfall, and adventure in Himachal Pradesh.",
    link: "/packages/himachal-tour",
  },
  {
    id: 8,
    img: novaScotia,
    category: "domestic",
    heading: "Kerala Backwater Tour",
    duration: "5 Days / 4 Nights",
    price: "₹18,999",
    points: ["• Houseboat Stay", "• Tea Gardens"],
    text: "Relax in Alleppey backwaters and explore Munnar’s greenery.",
    link: "/packages/kerala-tour",
  },
  {
    id: 9,
    img: manitoba,
    category: "domestic",
    heading: "Goa Beach Holiday",
    duration: "4 Days / 3 Nights",
    price: "₹12,999",
    points: ["• Beach Stay", "• Water Sports"],
    text: "Enjoy beaches, nightlife, and water sports in Goa.",
    link: "/packages/goa-tour",
  },
  {
    id: 10,
    img: novaScotia,
    category: "domestic",
    heading: "Kashmir Paradise Tour",
    duration: "6 Days / 5 Nights",
    price: "₹22,999",
    points: ["• Houseboat Stay", "• Gulmarg Visit"],
    text: "Explore Srinagar, Gulmarg, and Pahalgam in this beautiful destination.",
    link: "/packages/kashmir-tour",
  },
]
};

export const testimonialData = {
  title1: "Testimonial",
  title2: "What Our Client Says",
  testimonials: [
    {
      title: "Suresh Dixit",
      text:
        "valueadzcore guided my Canada PR smoothly with honest advice, clear timelines, and perfect documentation. Truly the best immigration consultants in Noida for anyone seeking transparent, professional, and reliable immigration support.",
      img: cl1,
    },
    {
      title: "Mohan Rane",
      text:
        "Excellent support for my work permit application. The team explained every step, handled documents professionally, and kept me updated. Their guidance reduced stress and helped me make confident decisions abroad.",
      img: cl1,
    },
    {
      title: "Manoj Saini",
      text:
        "valueadzcore helped us reunite through family sponsorship with clear communication and ethical advice. We experienced the best Visa consultants in Noida, with personalized attention and smooth processing throughout the entire journey.",
      img: cl1,
    },
    {
      title: "Sam Goyal",
      text:
        "From IELTS coaching to visa filing, the service was professional and supportive. Trainers and consultants worked together to strengthen my profile and guide me confidently toward my overseas goals successfully.",
      img: cl1,
    },
  ],
};

export const HomefaqData = {
  title1: "FAQs",
  title2: "Frequently Asked ",
  title3: " Questions",

  para1:
    "Find answers to the most common travel queries—from planning and bookings to documents and on-trip support—so you can travel with confidence and ease.",
 
  faqs: [
    {
      que: "How do I manage my budget during the trip?",
      ans:
        "We help you plan a realistic budget before your trip, including stays, transport, and activities. You’ll also get tips on local pricing, saving options, and where to spend wisely without compromising your experience.",
    },
    {
      que: "Can I make last-minute travel bookings?",
      ans:
        "Yes, last-minute bookings are possible depending on availability. We try to secure the best options quickly, but prices may be higher and choices limited, so early planning is always recommended for better deals.",
    },
    {
      que: "Are group tours or private trips better?",
      ans:
        "It depends on your preference. Group tours are cost-effective and social, while private trips offer flexibility and privacy. We help you choose the right option based on your travel style and comfort.",
    },
    {
      que: "What kind of local experiences can I expect?",
      ans:
        "We include authentic experiences like local food tours, cultural visits, and hidden spots. These add a unique touch to your journey, helping you connect more deeply with the destination beyond typical sightseeing.",
    },
    {
      que: " How do you ensure safety during travel?",
      ans:
        "Your safety is our priority. We work with trusted partners, verified stays, and reliable transport services. We also provide guidance, emergency support, and important travel tips to keep your journey safe and smooth.",
    },
  ],
};

export const footer = {
  logo: logo2,
  text:
    "From dream destinations to perfect itineraries, Holidays by Value ADZ makes travel easy, enjoyable, and stress-free for every traveler.",

  socials: {
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com//",
    linkedin: "https://www.linkedin.com/school//",
    youtube: "https://www.youtube.com/c/",
  },
  copyrightText: "Copyrights © 2026 . Designed and Manage by ",
  list1: {
    title: "Our Services",
    links: [
      { id: 1, label: "IELTS", href: "/services/ielts-coaching-preparation" },
      {
        id: 2,
        label: "PTE Exam",
        href: "/services/pte-exam-coaching-preparation",
      },
      {
        id: 3,
        label: "Post Landing Assistance",
        href: "/services/post-landing-assistance",
      },
      {
        id: 4,
        label: "Job Assistance",
        href: "/services/job-assistance",
      },
      {
        id: 5,
        label: "Immigration Services",
        href: "/services/immigration",
      },
    ],
  },

  list2: {
    title: "Our Services",
    links: [
      { id: 1, label: "IELTS", href: "about" },
      { id: 2, label: "PTE Exam", href: "career" },
      { id: 3, label: "Post Landing Assistance", href: "sustainability" },
      { id: 4, label: "Job Assistance", href: "blogs" },
      { id: 5, label: "Immigration Services", href: "contact-us" },
    ],
  },

  newLetter: {
    title: "Contact Us",
  },
};

export let blogData = {
  title1: "Latest Blogs",
  title2: "Get Updated With Our Recent Articles",
  blog: [
    {
      img: box3,
      date: "20 June 2026",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Name",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: box3,
      date: "20 June 2026",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Category",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: box3,
      date: "20 June 2026",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Section",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: box3,
      date: "20 June 2026",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Application",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: box3,
      date: "20 June 2026",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Country",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
  ],
};

export const contactdetail = [
  {
    icon: <MdWifiCalling3 />,
    title: "Call Us",
    text: "+919311936564",
    slug: "tel:+919311936564",
  },
  {
    icon: <MdAttachEmail />,
    title: "Email Us",
    text: "info@valueadzcoreoverseas.com",
    slug: "mailto:info@valueadzcoreoverseas.com",
  },
  {
    icon: <FaMapLocationDot />,
    title: "Location",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
    slug: "#",
  },
];

