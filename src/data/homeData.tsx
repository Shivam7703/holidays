import {
 
  box3,
  cl1,
 
  logo2,
 
  about,
  ad1,
  ad2,
  banner,
  cl2,
  cl3,
  cl4,
  bl1,
  bl2,
  bl4,
  thailand,
} from "@/assets";
import { FaBookmark, FaMapLocationDot, FaUserCheck } from "react-icons/fa6";
import { IoAirplane, IoSearch } from "react-icons/io5";
import { MdAttachEmail, MdOutlineMoreTime, MdOutlineSupportAgent, MdWifiCalling3 } from "react-icons/md";
import { RiUserFollowLine } from "react-icons/ri";

import { FaUsers, FaGlobe } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import { SiAdguard } from "react-icons/si";



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
          {
            id: 13,
            label: "Golden Triangle",
            href: "/destinations/golden-triangle",
          },{
            id: 14,
            label: "Manali",
            href: "/destinations/manali",
          },{
            id: 15,
            label: "Mysore-Ooty",
            href: "/destinations/mysore-ooty",
          },{
            id: 16,
            label: "Jim Corbett & Nainital",
            href: "/destinations/jim-corbett-nainital",
          }
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
            href: "/destinations/switzerland",
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
          // {
          //   id: 1,
          //   label: "Golden Triangle Tour",
          //   href: "/packages/golden-triangle-tour",
          // },
          // {
          //   id: 2,
          //   label: "Jodhpur – Jaisalmer Tour",
          //   href: "/packages/jodhpur-–-jaisalmer-tour",
          // },
          {
            id: 3,
            label: "Paradise on Earth – Kashmir Tour",
            href: "/packages/kashmir",
          },
          // {
          //   id: 4,
          //   label: "The Andaman Tour",
          //   href: "/packages/the-andaman-tour",
          // },
          // { id: 5, label: "Goa Tour", href: "/packages/goa-tour" },
          // {
          //   id: 6,
          //   label: "Ladakh Tour",
          //   href: "/packages/ladakh-tour",
          // },
          // {
          //   id: 7,
          //   label: "South India Temple Tour 5N 6D",
          //   href: "/packages/south-india-temple-tour-5n-6d",
          // },
          // {
          //   id: 8,
          //   label: "Exotic kerala Tour 3N 4D",
          //   href: "/packages/exotic-kerala-tour-3n-4d",
          // },
          // {
          //   id: 9,
          //   label: "Exotic kerala Tour 7N 8D",
          //   href: "/packages/exotic-kerala-tour-7n-8d",
          // },
          // {
          //   id: 10,
          //   label: "Darjeeling Tour",
          //   href: "/packages/darjeeling-tour",
          // },
          // {
          //   id: 11,
          //   label: "Assam Meghalaya Tour",
          //   href: "/packages/assam-meghalaya-tour",
          // },
          // {
          //   id: 12,
          //   label: "Dajeeling Gangtok Tour",
          //   href: "/packages/darjeeling-gangtok-tour",
          // },
          // {
          //   id: 13,
          //   label: "South India Tour",
          //   href: "/packages/south-india-tour",
          // },
         
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
            href: "/packages/vietnam",
          },
          {
            id: 2,
            label: "Bali Discovery Trip",
            href: "/packages/bali",
          },
            {
            id: 3,
            label: "Maldives",
            href: "/packages/maldives",
          },
          // {
          //   id: 3,
          //   label: "Best of Turkey",
          //   href: "/packages/best-of-turkey",
          // },
          {
            id: 4,
            label: "Enchanting Sri Lanka",
            href: "/packages/sri-lanka",
          },
          // {
          //   id: 5,
          //   label: "Greece Tour",
          //   href: "/packages/greece-tour",
          // },
          // {
          //   id: 6,
          //   label: "Mesmerizing Japan",
          //   href: "/packages/mesmerizing-japan",
          // },
          // {
          //   id: 7,
          //   label: "Thailand Tour",
          //   href: "/packages/thailand-tour",
          // },
          // {
          //   id: 8,
          //   label: "Dubai Tour",
          //   href: "/packages/dubai-tour",
          // },
          // {
          //   id: 9,
          //   label: "Singapore Tour",
          //   href: "/packages/singapore-tour",
          // },
 {
            id: 10,
            label: "Almaty",
            href: "/packages/almaty",
          }, {
            id: 11,
            label: "Malaysia",
            href: "/packages/malaysia",
          }, {
            id: 12,
            label: "Baku",
            href: "/packages/baku",
          }, {
            id: 13,
            label: "Hong Kong",
            href: "/packages/hong-kong",
          }, {
            id: 14,
            label: "Macau",
            href: "/packages/macau",
          }, {
            id: 15,
            label: "Hong Kong + Zhuhai",
            href: "/packages/hong-kong-zhuhai",
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
      icon: <FaUserCheck />
,
    },
    {
      id: 3,
      heading: "Reliability",
      text: "On-time bookings, dependable support, and well-planned trips you can count on every time.",
      icon: <MdOutlineMoreTime />
,
    },
    {
      id: 4,
      heading: "Personalized Experience",
      text: "Trips tailored to your preferences, ensuring every journey feels just right for you.",
      icon: <SiAdguard />
,
    },
  ],
};

export const advertise = {
  title: "Travel to your dream destinations with exclusive packages.",
  ads: [ad1, ad2],
  points: [
    {
      icon: <FaBookmark />,
      heading: "Quick & Easy Booking",
      text:
        "Plan and book your entire trip in just a few simple steps—fast and convenient.",
    },
    {
      icon: <IoAirplane />
,
      heading: "Stress-Free Travel",
      text:
        "Leave the planning to us while you enjoy a smooth and relaxed journey.",
    },
    {
      icon: <MdOutlineSupportAgent />
,
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
    color: "color5",
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
    img: banner,
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
    img: banner,
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
    img: banner,
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
    img: banner,
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
    img: banner,
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
    img: banner,
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
    img: banner,
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
    img: banner,
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
    img: banner,
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
    img: banner,
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
    title: "Rahul Sharma",
    text: "Our Goa trip was amazing, with a perfect hotel stay and smooth planning. Holidays by Value ADZ handled everything professionally, allowing us to enjoy beaches, nightlife, and relaxation without any stress.",
    img: cl1,
  },
  {
    title: "Priya Mehta",
    text: "We had a wonderful experience in Dubai with great sightseeing and luxury stays. Holidays by Value ADZ planned everything perfectly, from transfers to activities, making our trip smooth, comfortable, and memorable.",
    img: cl3,
  },
  {
    title: "Amit Verma",
    text: "Our Himachal trip was peaceful and refreshing with beautiful views and comfortable stays. Thanks to Holidays by Value ADZ, all arrangements were seamless, and we enjoyed every destination without any confusion.",
    img: cl2,
  },
  {
    title: "Neha Kapoor",
    text: "Japan was an unforgettable experience with perfect planning and great support. Holidays by Value ADZ managed everything efficiently, from hotels to transport, helping us explore comfortably and enjoy every moment.",
    img: cl4,
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
    title: "Popular Destination",
   links: [
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
          }, ],
  },

  list2: {
    title: "Tour Packages",
    links: [
    
         {id:1,
             label: "Bali Discovery Trip",
            href: "/packages/bali",
          },
            {
            id: 3,
            label: "Maldives",
            href: "/packages/maldives",
          },
         
          {
            id: 4,
            label: "Enchanting Sri Lanka",
            href: "/packages/sri-lanka",
          },
         
 {
            id: 10,
            label: "Almaty",
            href: "/packages/almaty",
          }, {
            id: 13,
            label: "Hong Kong",
            href: "/packages/hong-kong",
          }, {
            id: 14,
            label: "Macau",
            href: "/packages/macau",
          }, {
            id: 15,
            label: "Hong Kong + Zhuhai",
            href: "/packages/hong-kong-zhuhai",
          },

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
    "id": 1,
    "img": bl1,
    "title": "How to Plan an International Trip Under ₹1 Lakh",
   date:"22 JAN 2026",
    "desc": [
      {
        "id": 1,
        "heading": "Introduction",
        "para": [
          {
            "id": 1,
            "text": "Planning an international trip doesn't always mean spending lakhs. With the right strategy, research, and smart decisions, you can explore another country comfortably within a budget of ₹1 lakh. The key is not cutting corners but making informed choices that maximize value without compromising the experience."
          },
          {
            "id": 2,
            "text": "In this blog, you'll learn how to plan a complete international trip under ₹1 lakh—from destination selection and flights to accommodation, food, and daily expenses."
          }
        ]
      },
      {
        "id": 2,
        "heading": "1. Choose the Right Destination",
        "para": [
          {
            "id": 1,
            "text": "Your destination plays the biggest role in determining your budget. Some countries are naturally more affordable for Indian travelers due to visa ease, lower cost of living, and cheaper flights."
          },
          {
            "id": 2,
            "text": "Budget-friendly international destinations include:"
          }
        ],
        "list": [
          { "id": 1, "text": "Thailand" },
          { "id": 2, "text": "Vietnam" },
          { "id": 3, "text": "Indonesia" },
          { "id": 4, "text": "Sri Lanka" },
          { "id": 5, "text": "Nepal" }
        ]
      },
      {
        "id": 3,
        "heading": "2. Set a Smart Budget Breakdown",
        "para": [
          {
            "id": 1,
            "text": "Before booking anything, divide your ₹1 lakh budget wisely:"
          }
        ],
        "list": [
          { "id": 1, "text": "Flights: ₹25,000 – ₹40,000" },
          { "id": 2, "text": "Accommodation: ₹15,000 – ₹25,000" },
          { "id": 3, "text": "Food: ₹10,000 – ₹15,000" },
          { "id": 4, "text": "Local Transport: ₹5,000 – ₹10,000" },
          { "id": 5, "text": "Activities & Sightseeing: ₹10,000 – ₹15,000" },
          { "id": 6, "text": "Miscellaneous: ₹5,000" }
        ]
      },
      {
        "id": 4,
        "heading": "3. Book Flights at the Right Time",
        "para": [
          {
            "id": 1,
            "text": "Flights are usually the biggest expense, but with smart timing, you can save a lot."
          },
          {
            "id": 2,
            "text": "Tips to reduce flight costs:"
          }
        ],
        "list": [
          { "id": 1, "text": "Book tickets 6–8 weeks in advance" },
          { "id": 2, "text": "Travel during off-season or shoulder season" },
          { "id": 3, "text": "Use fare comparison tools" },
          { "id": 4, "text": "Be flexible with travel dates" },
          { "id": 5, "text": "Choose nearby airports or connecting flights" },
          { "id": 6, "text": "Avoid peak travel periods like holidays and festivals, as prices can double" }
        ]
      },
      {
        "id": 5,
        "heading": "4. Pick Budget-Friendly Accommodation",
        "para": [
          {
            "id": 1,
            "text": "Accommodation doesn't have to be expensive if you choose wisely."
          },
          {
            "id": 2,
            "text": "Options to consider:"
          }
        ],
        "list": [
          { "id": 1, "text": "Hostels (great for solo travelers)" },
          { "id": 2, "text": "Budget hotels" },
          { "id": 3, "text": "Guesthouses" },
          { "id": 4, "text": "Airbnb shared stays" }
        ]
      },
      {
        "id": 6,
        "heading": "5. Plan Your Visa Smartly",
        "para": [
          {
            "id": 1,
            "text": "Visa costs and processes vary by country. To stay within budget, choose destinations with:"
          }
        ],
        "list": [
          { "id": 1, "text": "Visa-free entry" },
          { "id": 2, "text": "Visa on arrival" },
          { "id": 3, "text": "E-visa options" }
        ]
      },
      {
        "id": 7,
        "heading": "6. Save on Food Without Missing the Experience",
        "para": [
          {
            "id": 1,
            "text": "Food is an important part of travel, but it doesn't have to be expensive."
          },
          {
            "id": 2,
            "text": "How to manage food costs:"
          }
        ],
        "list": [
          { "id": 1, "text": "Eat at local restaurants and street food stalls" },
          { "id": 2, "text": "Avoid tourist-heavy dining spots" },
          { "id": 3, "text": "Try local cuisine instead of international chains" },
          { "id": 4, "text": "Opt for breakfast-included stays" }
        ]
      },
      {
        "id": 8,
        "heading": "7. Use Public Transport",
        "para": [
          {
            "id": 1,
            "text": "Transportation within the country can add up quickly if not planned well."
          },
          {
            "id": 2,
            "text": "Budget tips:"
          }
        ],
        "list": [
          { "id": 1, "text": "Use buses, metros, or trains" },
          { "id": 2, "text": "Rent bikes where possible" },
          { "id": 3, "text": "Walk for nearby attractions" },
          { "id": 4, "text": "Avoid taxis unless necessary" }
        ]
      },
      {
        "id": 9,
        "heading": "8. Choose Free or Low-Cost Activities",
        "para": [
          {
            "id": 1,
            "text": "You don't need expensive tours to enjoy a destination."
          },
          {
            "id": 2,
            "text": "Budget-friendly activities include:"
          }
        ],
        "list": [
          { "id": 1, "text": "Exploring local markets" },
          { "id": 2, "text": "Visiting temples, beaches, and parks" },
          { "id": 3, "text": "Walking tours" },
          { "id": 4, "text": "Cultural events and street performances" }
        ]
      },
      {
        "id": 10,
        "heading": "9. Travel Light and Smart",
        "para": [
          {
            "id": 1,
            "text": "Extra baggage can increase your costs significantly."
          },
          {
            "id": 2,
            "text": "Tips:"
          }
        ],
        "list": [
          { "id": 1, "text": "Pack only essentials" },
          { "id": 2, "text": "Avoid excess luggage fees" },
          { "id": 3, "text": "Carry reusable items (bottles, snacks)" },
          { "id": 4, "text": "Keep important documents organized" }
        ]
      },
      {
        "id": 11,
        "heading": "10. Avoid Common Budget Mistakes",
        "para": [
          {
            "id": 1,
            "text": "To stay within ₹1 lakh, avoid these mistakes:"
          }
        ],
        "list": [
          { "id": 1, "text": "Last-minute bookings" },
          { "id": 2, "text": "Overpacking and paying extra baggage fees" },
          { "id": 3, "text": "Spending heavily on luxury experiences" },
          { "id": 4, "text": "Not tracking daily expenses" },
          { "id": 5, "text": "Ignoring currency exchange rates" }
        ]
      },
      {
        "id": 12,
        "heading": "Why Choose Holidays by Value ADZ",
        "para": [
          {
            "id": 1,
            "text": "Planning a budget international trip becomes much easier when you have the right guidance, and that is where Holidays by Value ADZ makes a difference."
          },
          {
            "id": 2,
            "text": "With expert planning and personalized travel solutions, they help you choose the best destinations that fit your budget without compromising your experience. From finding affordable flights to selecting the right stays and creating cost-effective itineraries, every detail is handled smartly. Our team focuses on maximizing value, ensuring you get the best deals, smooth visa assistance, and complete travel support. Whether you are a first-time traveler or planning a budget-friendly getaway, they simplify the entire process."
          },
          {
            "id": 3,
            "text": "Instead of spending hours researching and still feeling confused, you get a clear, well-planned trip that saves both time and money."
          },
          {
            "id": 4,
            "text": "If you want to plan your international trip under ₹1 lakh without stress, Holidays by Value ADZ is the right partner to make it happen."
          }
        ]
      }
    ],
    "questions": [
      {
        "id": 1,
        "que": "Is ₹1 lakh enough for an international trip from India?",
        "ans": "Yes, ₹1 lakh is enough if you choose budget-friendly destinations, book flights early, and control your daily expenses. Countries in Southeast Asia and nearby regions are ideal for this budget. Smart planning and avoiding luxury choices make it completely achievable."
      },
      {
        "id": 2,
        "que": "Which countries are the cheapest for Indian travelers right now?",
        "ans": "Countries like Thailand, Vietnam, Indonesia, and Sri Lanka are among the cheapest. They offer affordable stays, low-cost food, and easy visa options, making them perfect for budget international travel."
      },
      {
        "id": 3,
        "que": "How can I save the most money while traveling abroad?",
        "ans": "The biggest savings come from booking flights early, choosing budget accommodations, eating local food, and using public transport. Avoid peak seasons and tourist traps. Planning your itinerary also helps prevent unnecessary expenses during the trip."
      },
      {
        "id": 4,
        "que": "What is the biggest mistake people make while planning a budget trip?",
        "ans": "The most common mistake is not planning. Last-minute bookings, choosing expensive destinations, and overspending on unnecessary activities can quickly exceed the budget. Many travelers also ignore hidden costs like baggage fees and currency exchange losses."
      }
    ]
  },
  {
    "id": 2,
    "img": bl2,
    "title": "Top 10 Honeymoon Destinations Couples Are Choosing in 2026",
        date:"05 MAR 2026",

    "desc": [
      {
        "id": 1,
        "heading": "Introduction",
        "para": [
          {
            "id": 1,
            "text": "Honeymoons in 2026 are no longer just about beautiful locations—they are about experiences, emotions, and meaningful moments. Couples today are choosing destinations that offer a mix of relaxation, adventure, and personalization rather than just luxury."
          },
          {
            "id": 2,
            "text": "Here are the top 10 honeymoon destinations couples are choosing in 2026, with detailed insights to help you decide."
          }
        ]
      },
      {
        "id": 2,
        "heading": "1. Indonesia (Bali)",
        "para": [
          {
            "id": 1,
            "text": "Why Couples Love It: Bali feels like a complete honeymoon world in itself, where every moment blends romance with experience. From private jungle villas and peaceful rice terraces to beach sunsets and candlelight dinners, it offers both calm and excitement. Couples love how easily they can combine relaxation, culture, spa experiences, and adventure without feeling rushed or overwhelmed."
          },
          {
            "id": 2,
            "text": "Places to Visit:"
          }
        ],
        "list": [
          { "id": 1, "text": "Ubud" },
          { "id": 2, "text": "Seminyak" },
          { "id": 3, "text": "Uluwatu Temple" },
          { "id": 4, "text": "Nusa Penida" }
        ]
      },
      {
        "id": 3,
        "heading": "",
        "para": [
          { "id": 1, "text": "Best Time to Visit: April to October" },
          { "id": 2, "text": "Approx Expense: ₹1.2 – ₹2.5 lakh" }
        ]
      },
      {
        "id": 4,
        "heading": "2. Maldives",
        "para": [
          {
            "id": 1,
            "text": "Why Couples Love It: The Maldives creates a feeling of complete escape where time slows down and privacy takes over. Overwater villas, endless ocean views, and quiet surroundings make it ideal for couples who want to disconnect from the world and focus on each other. It is less about activities and more about intimacy, calm, and shared moments in a luxurious setting."
          },
          {
            "id": 2,
            "text": "Places to Visit:"
          }
        ],
        "list": [
          { "id": 1, "text": "Private islands" },
          { "id": 2, "text": "Male City" },
          { "id": 3, "text": "Coral reefs" },
          { "id": 4, "text": "Sandbanks" }
        ]
      },
      {
        "id": 5,
        "heading": "",
        "para": [
          { "id": 1, "text": "Best Time to Visit: November to April" },
          { "id": 2, "text": "Approx Expense: ₹2.5 – ₹5 lakh" }
        ]
      },
      {
        "id": 6,
        "heading": "3. Thailand",
        "para": [
          {
            "id": 1,
            "text": "Why Couples Love It: Thailand offers the perfect mix of fun, romance, and affordability, making it ideal for couples who want a lively honeymoon. From island hopping and beach parties to peaceful resorts and romantic dinners, it balances excitement and relaxation. Couples especially love how much variety they can experience in one trip without exceeding their budget."
          },
          {
            "id": 2,
            "text": "Places to Visit:"
          }
        ],
        "list": [
          { "id": 1, "text": "Phuket" },
          { "id": 2, "text": "Krabi" },
          { "id": 3, "text": "Phi Phi Islands" },
          { "id": 4, "text": "Bangkok" }
        ]
      },
      {
        "id": 7,
        "heading": "",
        "para": [
          { "id": 1, "text": "Best Time to Visit: November to March" },
          { "id": 2, "text": "Approx Expense: ₹1 – ₹2 lakh" }
        ]
      },
      {
        "id": 8,
        "heading": "4. Italy",
        "para": [
          {
            "id": 1,
            "text": "Why Couples Love It: Italy delivers a timeless romantic experience where every street, view, and moment feels cinematic. From gondola rides in Venice to sunsets along the Amalfi Coast, it offers a slow, emotional kind of travel. Couples love the combination of history, food, culture, and atmosphere that naturally creates romance without needing to plan too much."
          },
          {
            "id": 2,
            "text": "Places to Visit:"
          }
        ],
        "list": [
          { "id": 1, "text": "Venice" },
          { "id": 2, "text": "Rome" },
          { "id": 3, "text": "Amalfi Coast" },
          { "id": 4, "text": "Florence" }
        ]
      },
      {
        "id": 9,
        "heading": "",
        "para": [
          { "id": 1, "text": "Best Time to Visit: April to June, September to October" },
          { "id": 2, "text": "Approx Expense: ₹2.5 – ₹4.5 lakh" }
        ]
      },
      {
        "id": 10,
        "heading": "5. Japan",
        "para": [
          {
            "id": 1,
            "text": "Why Couples Love It: Japan feels completely different from traditional honeymoon destinations, which is exactly why couples love it. It combines peaceful temples, cherry blossoms, and cultural depth with modern cities and unique experiences. The contrast between tradition and innovation creates a memorable journey that feels both calm and exciting at the same time."
          },
          {
            "id": 2,
            "text": "Places to Visit:"
          }
        ],
        "list": [
          { "id": 1, "text": "Tokyo" },
          { "id": 2, "text": "Kyoto" },
          { "id": 3, "text": "Osaka" },
          { "id": 4, "text": "Mount Fuji" }
        ]
      },
      {
        "id": 11,
        "heading": "",
        "para": [
          { "id": 1, "text": "Best Time to Visit: March to May, October to November" },
          { "id": 2, "text": "Approx Expense: ₹2 – ₹3.5 lakh" }
        ]
      },
      {
        "id": 12,
        "heading": "6. Mauritius",
        "para": [
          {
            "id": 1,
            "text": "Why Couples Love It: Mauritius offers a balanced honeymoon where relaxation meets exploration. Couples can enjoy beautiful beaches while also experiencing waterfalls, nature parks, and local culture. It is ideal for those who want more than just staying in a resort and prefer a mix of activities and peaceful moments."
          },
          {
            "id": 2,
            "text": "Places to Visit:"
          }
        ],
        "list": [
          { "id": 1, "text": "Grand Baie" },
          { "id": 2, "text": "Ile aux Cerfs" },
          { "id": 3, "text": "Chamarel" },
          { "id": 4, "text": "Black River Gorges" }
        ]
      },
      {
        "id": 13,
        "heading": "",
        "para": [
          { "id": 1, "text": "Best Time to Visit: May to December" },
          { "id": 2, "text": "Approx Expense: ₹2 – ₹3.5 lakh" }
        ]
      },
      {
        "id": 14,
        "heading": "7. France",
        "para": [
          {
            "id": 1,
            "text": "Why Couples Love It: France, especially Paris, creates a romantic atmosphere that feels effortless and natural. Walking through charming streets, enjoying café culture, and watching iconic landmarks light up in the evening makes every moment special. Couples love the elegance and emotional connection the destination offers without needing extravagant planning."
          },
          {
            "id": 2,
            "text": "Places to Visit:"
          }
        ],
        "list": [
          { "id": 1, "text": "Paris" },
          { "id": 2, "text": "Eiffel Tower" },
          { "id": 3, "text": "Nice" },
          { "id": 4, "text": "Loire Valley" }
        ]
      },
      {
        "id": 15,
        "heading": "",
        "para": [
          { "id": 1, "text": "Best Time to Visit: April to June, September to October" },
          { "id": 2, "text": "Approx Expense: ₹2.5 – ₹4 lakh" }
        ]
      },
      {
        "id": 16,
        "heading": "8. South Africa",
        "para": [
          {
            "id": 1,
            "text": "Why Couples Love It: South Africa is perfect for couples who want something unique and adventurous. The combination of wildlife safaris, scenic drives, and luxury stays creates a completely different honeymoon experience. It is not just about relaxation but about creating unforgettable memories together through exploration and discovery."
          },
          {
            "id": 2,
            "text": "Places to Visit:"
          }
        ],
        "list": [
          { "id": 1, "text": "Cape Town" },
          { "id": 2, "text": "Kruger National Park" },
          { "id": 3, "text": "Garden Route" },
          { "id": 4, "text": "Table Mountain" }
        ]
      },
      {
        "id": 17,
        "heading": "",
        "para": [
          { "id": 1, "text": "Best Time to Visit: May to September" },
          { "id": 2, "text": "Approx Expense: ₹2 – ₹3.5 lakh" }
        ]
      },
      {
        "id": 18,
        "heading": "9. United States (Hawaii)",
        "para": [
          {
            "id": 1,
            "text": "Why Couples Love It: Hawaii offers a perfect balance of relaxation and adventure with its beaches, volcanoes, and lush landscapes. Couples love the flexibility it offers—whether it's exploring nature, enjoying water activities, or simply relaxing by the ocean. It is ideal for those who want variety without switching destinations."
          },
          {
            "id": 2,
            "text": "Places to Visit:"
          }
        ],
        "list": [
          { "id": 1, "text": "Waikiki Beach" },
          { "id": 2, "text": "Maui" },
          { "id": 3, "text": "Honolulu" },
          { "id": 4, "text": "Volcanoes National Park" }
        ]
      },
      {
        "id": 19,
        "heading": "",
        "para": [
          { "id": 1, "text": "Best Time to Visit: April to October" },
          { "id": 2, "text": "Approx Expense: ₹3 – ₹5 lakh" }
        ]
      },
      {
        "id": 20,
        "heading": "10. Malta",
        "para": [
          {
            "id": 1,
            "text": "Why Couples Love It: Malta is an underrated destination that offers charm, history, and peaceful surroundings without heavy crowds. Couples love its old streets, seaside views, and relaxed atmosphere. It feels different from typical honeymoon spots, making it perfect for those who want something unique and less commercial."
          },
          {
            "id": 2,
            "text": "Places to Visit:"
          }
        ],
        "list": [
          { "id": 1, "text": "Valletta" },
          { "id": 2, "text": "Mdina" },
          { "id": 3, "text": "Blue Lagoon" },
          { "id": 4, "text": "Gozo" }
        ]
      },
      {
        "id": 21,
        "heading": "",
        "para": [
          { "id": 1, "text": "Best Time to Visit: April to June, September to October" },
          { "id": 2, "text": "Approx Expense: ₹2 – ₹3 lakh" }
        ]
      },
      {
        "id": 22,
        "heading": "Why Honeymoon Planning Matters in 2026",
        "para": [
          {
            "id": 1,
            "text": "Modern couples are focusing more on experiences over luxury and personalization over trends. They want trips that reflect their personality, not just popular destinations."
          },
          {
            "id": 2,
            "text": "That's why choosing the right destination is no longer about \"where everyone goes,\" but about \"what feels right for you.\""
          }
        ]
      },
      {
        "id": 23,
        "heading": "Why Choose Holidays by Value ADZ",
        "para": [
          {
            "id": 1,
            "text": "Planning a honeymoon can feel overwhelming with so many options, budgets, and expectations involved. Holidays by Value ADZ simplifies this process by offering personalized travel planning based on your preferences."
          },
          {
            "id": 2,
            "text": "From selecting the right destination to managing bookings and creating a smooth itinerary, everything is handled professionally. Their focus is on delivering maximum value, ensuring your honeymoon is not just beautiful but also stress-free and well-planned."
          }
        ]
      }
    ],
    "questions": [
      {
        "id": 1,
        "que": "Which honeymoon destination is trending the most in 2026?",
        "ans": "Bali and Maldives are among the most trending destinations due to their combination of luxury, affordability, and experiences. Couples prefer destinations that offer both relaxation and activities, making these two consistently popular choices for modern honeymoon planning."
      },
      {
        "id": 2,
        "que": "How do couples choose honeymoon destinations today?",
        "ans": "Couples now focus more on experiences rather than just locations. They choose destinations based on what they want to feel and do, such as relaxation, adventure, or cultural exploration, instead of simply following popular trends."
      },
      {
        "id": 3,
        "que": "Is it better to choose luxury or budget honeymoon destinations?",
        "ans": "It depends on your priorities. Many couples today prefer value-based luxury, where they balance comfort and budget. Choosing the right destination and planning smartly can give you a premium experience without overspending."
      },
      {
        "id": 4,
        "que": "Are offbeat honeymoon destinations better than popular ones?",
        "ans": "Offbeat destinations offer fewer crowds and more personalized experiences, which many couples prefer today. However, popular destinations still provide convenience and well-developed tourism, so the choice depends on your travel style and expectations."
      }
    ]
  },
  {
    "id": 3,
    "img": thailand,
    "title": "Hidden Gems in Thailand You Must Visit Before They Get Crowded",
       date:"20 APRIL 2026",

    "desc": [
      {
        "id": 1,
        "heading": "Introduction",
        "para": [
          {
            "id": 1,
            "text": "Thailand is famous for places like Phuket and Bangkok, but in 2026, smart travelers are moving towards hidden gems. These places offer the same beauty, often more authentic experiences, and far fewer crowds."
          },
          {
            "id": 2,
            "text": "With social media rapidly exposing new locations, many of these spots won't stay \"hidden\" for long. If you want peaceful beaches, untouched nature, and unique cultural experiences, now is the right time to explore them."
          }
        ]
      },
      {
        "id": 2,
        "heading": "Why Hidden Gems Are Trending in 2026",
        "para": [
          {
            "id": 1,
            "text": "Travel trends are shifting. People now prefer:"
          }
        ],
        "list": [
          { "id": 1, "text": "Less crowded destinations" },
          { "id": 2, "text": "Unique and authentic experiences" },
          { "id": 3, "text": "Budget-friendly alternatives to popular spots" },
          { "id": 4, "text": "Content-worthy locations not seen everywhere" }
        ]
      },
      {
        "id": 3,
        "heading": "1. Koh Lipe – The Maldives of Thailand",
        "para": [
          {
            "id": 1,
            "text": "Koh Lipe is a small island known for its crystal-clear water and white sand beaches. It offers a peaceful escape compared to crowded islands."
          },
          {
            "id": 2,
            "text": "Why Visit: It feels untouched and calm. Perfect for couples and beach lovers."
          },
          {
            "id": 3,
            "text": "Top Experiences:"
          }
        ],
        "list": [
          { "id": 1, "text": "Sunrise Beach" },
          { "id": 2, "text": "Snorkeling around coral reefs" },
          { "id": 3, "text": "Walking Street for local food" }
        ]
      },
      {
        "id": 4,
        "heading": "",
        "para": [
          { "id": 1, "text": "Best Time to Visit: November to April" }
        ]
      },
      {
        "id": 5,
        "heading": "2. Koh Yao Noi – Quiet Luxury Near Phuket",
        "para": [
          {
            "id": 1,
            "text": "Located between Phuket and Krabi, Koh Yao Noi is still under the radar."
          },
          {
            "id": 2,
            "text": "Why Visit: It offers luxury stays without crowds. Ideal for a relaxed honeymoon or slow travel."
          },
          {
            "id": 3,
            "text": "Top Experiences:"
          }
        ],
        "list": [
          { "id": 1, "text": "Island cycling" },
          { "id": 2, "text": "Private beach stays" },
          { "id": 3, "text": "Kayaking" }
        ]
      },
      {
        "id": 6,
        "heading": "",
        "para": [
          { "id": 1, "text": "Best Time to Visit: November to April" }
        ]
      },
      {
        "id": 7,
        "heading": "3. Chiang Rai – Culture Without Chaos",
        "para": [
          {
            "id": 1,
            "text": "While Chiang Mai is popular, Chiang Rai offers a quieter cultural experience."
          },
          {
            "id": 2,
            "text": "Why Visit: Less crowded temples and peaceful surroundings."
          },
          {
            "id": 3,
            "text": "Top Experiences:"
          }
        ],
        "list": [
          { "id": 1, "text": "White Temple (Wat Rong Khun)" },
          { "id": 2, "text": "Blue Temple" },
          { "id": 3, "text": "Tea plantations" }
        ]
      },
      {
        "id": 8,
        "heading": "",
        "para": [
          { "id": 1, "text": "Best Time to Visit: October to February" }
        ]
      },
      {
        "id": 9,
        "heading": "4. Koh Phayam – Raw and Untouched",
        "para": [
          {
            "id": 1,
            "text": "Koh Phayam is perfect for those who want a digital detox."
          },
          {
            "id": 2,
            "text": "Why Visit: No big resorts, no crowds, just nature."
          },
          {
            "id": 3,
            "text": "Top Experiences:"
          }
        ],
        "list": [
          { "id": 1, "text": "Empty beaches" },
          { "id": 2, "text": "Sunset views" },
          { "id": 3, "text": "Local village life" }
        ]
      },
      {
        "id": 10,
        "heading": "",
        "para": [
          { "id": 1, "text": "Best Time to Visit: November to April" }
        ]
      },
      {
        "id": 11,
        "heading": "5. Sukhothai – Thailand's Historic Secret",
        "para": [
          {
            "id": 1,
            "text": "Sukhothai is rich in history but still overlooked by tourists."
          },
          {
            "id": 2,
            "text": "Why Visit: Ancient ruins without heavy crowds."
          },
          {
            "id": 3,
            "text": "Top Experiences:"
          }
        ],
        "list": [
          { "id": 1, "text": "Sukhothai Historical Park" },
          { "id": 2, "text": "Cycling through ruins" },
          { "id": 3, "text": "Sunrise views" }
        ]
      },
      {
        "id": 12,
        "heading": "",
        "para": [
          { "id": 1, "text": "Best Time to Visit: November to February" }
        ]
      },
      {
        "id": 13,
        "heading": "6. Koh Mak – Clean and Peaceful Island",
        "para": [
          {
            "id": 1,
            "text": "Koh Mak is known for eco-friendly tourism and quiet beaches."
          },
          {
            "id": 2,
            "text": "Why Visit: Clean environment and fewer tourists."
          },
          {
            "id": 3,
            "text": "Top Experiences:"
          }
        ],
        "list": [
          { "id": 1, "text": "Beach relaxation" },
          { "id": 2, "text": "Cycling" },
          { "id": 3, "text": "Kayaking" }
        ]
      },
      {
        "id": 14,
        "heading": "",
        "para": [
          { "id": 1, "text": "Best Time to Visit: November to April" }
        ]
      },
      {
        "id": 15,
        "heading": "7. Nan Province – Hidden Mountain Escape",
        "para": [
          {
            "id": 1,
            "text": "Nan is a lesser-known destination in northern Thailand."
          },
          {
            "id": 2,
            "text": "Why Visit: Perfect for nature lovers and peaceful travel."
          },
          {
            "id": 3,
            "text": "Top Experiences:"
          }
        ],
        "list": [
          { "id": 1, "text": "Mountain views" },
          { "id": 2, "text": "Local temples" },
          { "id": 3, "text": "Cultural villages" }
        ]
      },
      {
        "id": 16,
        "heading": "",
        "para": [
          { "id": 1, "text": "Best Time to Visit: November to February" }
        ]
      },
      {
        "id": 17,
        "heading": "8. Koh Kood – Luxury Without the Crowd",
        "para": [
          {
            "id": 1,
            "text": "Koh Kood offers a high-end experience but remains less crowded."
          },
          {
            "id": 2,
            "text": "Why Visit: Beautiful beaches with fewer tourists."
          },
          {
            "id": 3,
            "text": "Top Experiences:"
          }
        ],
        "list": [
          { "id": 1, "text": "Waterfalls" },
          { "id": 2, "text": "Beach resorts" },
          { "id": 3, "text": "Snorkeling" }
        ]
      },
      {
        "id": 18,
        "heading": "",
        "para": [
          { "id": 1, "text": "Best Time to Visit: November to April" }
        ]
      },
      {
        "id": 19,
        "heading": "Quick Comparison Table",
        "para": [
          {
            "id": 1,
            "text": "Destination - Best For - Crowd Level - Budget Level"
          },
          { "id": 2, "text": "Koh Lipe - Beaches, couples - Low - Medium" },
          { "id": 3, "text": "Koh Yao Noi - Luxury, peace - Low - Medium-High" },
          { "id": 4, "text": "Chiang Rai - Culture, temples - Low - Low" },
          { "id": 5, "text": "Koh Phayam - Nature, detox - Very Low - Low" },
          { "id": 6, "text": "Sukhothai - History - Low - Low" },
          { "id": 7, "text": "Koh Mak - Eco-travel - Low - Medium" },
          { "id": 8, "text": "Nan - Mountains - Very Low - Low" },
          { "id": 9, "text": "Koh Kood - Luxury beaches - Low - High" }
        ]
      },
      {
        "id": 20,
        "heading": "Tips to Explore Hidden Gems",
        "para": [],
        "list": [
          { "id": 1, "text": "Travel during off-peak months" },
          { "id": 2, "text": "Book stays in advance (limited options)" },
          { "id": 3, "text": "Respect local culture and environment" },
          { "id": 4, "text": "Avoid oversharing exact locations online" }
        ]
      },
      {
        "id": 21,
        "heading": "Why You Should Visit Now",
        "para": [
          {
            "id": 1,
            "text": "Many of these destinations are slowly gaining popularity. Social media exposure and tourism development can quickly turn hidden places into crowded hotspots."
          },
          {
            "id": 2,
            "text": "Visiting now means:"
          }
        ],
        "list": [
          { "id": 1, "text": "Better experiences" },
          { "id": 2, "text": "Lower costs" },
          { "id": 3, "text": "More peaceful travel" }
        ]
      },
      {
        "id": 22,
        "heading": "Why Choose Holidays by Value ADZ",
        "para": [
          {
            "id": 1,
            "text": "Exploring hidden destinations requires proper planning, and that is where Holidays by Value ADZ makes a real difference. They help you plan your trip in a simple and stress-free way."
          }
        ],
        "list": [
          { "id": 1, "text": "Personalized trips based on your budget" },
          { "id": 2, "text": "Access to less crowded destinations" },
          { "id": 3, "text": "Well-planned itineraries" },
          { "id": 4, "text": "Best value for your money" },
          { "id": 5, "text": "Smooth and quick bookings" },
          { "id": 6, "text": "Expert travel guidance" },
          { "id": 7, "text": "Saves time and effort" },
          { "id": 8, "text": "Complete travel support from start to end" }
        ]
      }
    ],
    "questions": [
      {
        "id": 1,
        "que": "Are hidden destinations in Thailand safe for tourists?",
        "ans": "Yes, most hidden destinations in Thailand are safe. However, facilities may be limited compared to popular cities. It is important to plan in advance, book trusted stays, and follow basic travel precautions."
      },
      {
        "id": 2,
        "que": "Are these places expensive compared to Phuket or Bangkok?",
        "ans": "Most hidden gems are actually more budget-friendly. Accommodation and food costs are often lower. However, some luxury islands like Koh Kood can be slightly expensive due to limited availability."
      },
      {
        "id": 3,
        "que": "How can I reach these hidden destinations?",
        "ans": "You may need a mix of flights, ferries, and road travel. Some islands require boat transfers. Planning transport in advance is important to avoid last-minute issues."
      },
      {
        "id": 4,
        "que": "Why are hidden gems becoming popular now?",
        "ans": "Travelers are looking for unique and less crowded experiences. Social media and travel blogs are also highlighting these places, making them more visible and attractive."
      }
    ]
  },
  {
    "id": 4,
    "img": bl4,
    "title": "Visa-Free Countries for Indian Travelers in 2026",
       date:"09 JUNE 2026",

    "desc": [
      {
        "id": 1,
        "heading": "Introduction",
        "para": [
          {
            "id": 1,
            "text": "Traveling abroad is no longer as complicated as it used to be. In 2026, Indian travelers have access to several visa-free and easy-entry countries, making international trips faster, simpler, and more spontaneous."
          },
          {
            "id": 2,
            "text": "But here's the truth—\"visa-free\" doesn't always mean zero requirements. There are still important rules, documents, and conditions you must understand before planning your trip."
          },
          {
            "id": 3,
            "text": "This blog will not only give you the best visa-free countries, but also the real details most people ignore."
          }
        ]
      },
      {
        "id": 2,
        "heading": "What Does \"Visa-Free\" Actually Mean?",
        "para": [
          {
            "id": 1,
            "text": "Before choosing your destination, understand these terms clearly:"
          }
        ],
        "list": [
          { "id": 1, "text": "Visa-Free – No visa required before or on arrival" },
          { "id": 2, "text": "Visa on Arrival (VOA) – Visa issued at the airport after landing" },
          { "id": 3, "text": "E-Visa – Apply online before travel, quick approval" }
        ]
      },
      {
        "id": 3,
        "heading": "Top Visa-Free & Easy Entry Countries for Indians in 2026",
        "para": [
          {
            "id": 1,
            "text": "1. Thailand"
          },
          {
            "id": 2,
            "text": "Thailand is one of the most popular destinations for Indian travelers due to its easy entry process and affordability."
          }
        ],
        "list": [
          { "id": 1, "text": "Entry Type: Visa-free (for limited duration)" },
          { "id": 2, "text": "Stay Duration: Usually up to 30 days" },
          { "id": 3, "text": "Why Visit: Beaches, nightlife, shopping, and budget-friendly travel" }
        ]
      },
      {
        "id": 4,
        "heading": "",
        "para": [
          {
            "id": 1,
            "text": "Important Details: Return ticket may be required, Proof of accommodation, Minimum funds proof"
          }
        ]
      },
      {
        "id": 5,
        "heading": "2. Maldives",
        "para": [
          {
            "id": 1,
            "text": "Maldives offers visa on arrival for Indian tourists, making it perfect for quick luxury getaways."
          }
        ],
        "list": [
          { "id": 1, "text": "Entry Type: Visa on Arrival" },
          { "id": 2, "text": "Stay Duration: Up to 30 days" },
          { "id": 3, "text": "Why Visit: Luxury resorts, beaches, privacy" }
        ]
      },
      {
        "id": 6,
        "heading": "",
        "para": [
          {
            "id": 1,
            "text": "Important Details: Hotel booking confirmation required, Sufficient funds proof, Travel declaration form"
          }
        ]
      },
      {
        "id": 7,
        "heading": "3. Sri Lanka",
        "para": [
          {
            "id": 1,
            "text": "Sri Lanka has simplified its visa process for Indian travelers."
          }
        ],
        "list": [
          { "id": 1, "text": "Entry Type: E-visa / Visa on arrival" },
          { "id": 2, "text": "Stay Duration: 30 days (extendable)" },
          { "id": 3, "text": "Why Visit: Culture, beaches, wildlife" }
        ]
      },
      {
        "id": 8,
        "heading": "",
        "para": [
          {
            "id": 1,
            "text": "Important Details: Online registration recommended, Passport validity of 6 months, Return ticket required"
          }
        ]
      },
      {
        "id": 9,
        "heading": "4. Nepal",
        "para": [
          {
            "id": 1,
            "text": "Nepal is completely visa-free for Indian citizens."
          }
        ],
        "list": [
          { "id": 1, "text": "Entry Type: Visa-free" },
          { "id": 2, "text": "Stay Duration: No fixed limit" },
          { "id": 3, "text": "Why Visit: Mountains, temples, budget travel" }
        ]
      },
      {
        "id": 10,
        "heading": "",
        "para": [
          {
            "id": 1,
            "text": "Important Details: Government ID proof required, Passport not mandatory but recommended, No visa process needed"
          }
        ]
      },
      {
        "id": 11,
        "heading": "5. Bhutan",
        "para": [
          {
            "id": 1,
            "text": "Bhutan allows Indians to travel without a visa but requires a permit."
          }
        ],
        "list": [
          { "id": 1, "text": "Entry Type: Permit on arrival" },
          { "id": 2, "text": "Stay Duration: As per permit" },
          { "id": 3, "text": "Why Visit: Peaceful environment, nature, culture" }
        ]
      },
      {
        "id": 12,
        "heading": "",
        "para": [
          {
            "id": 1,
            "text": "Important Details: Entry permit required, Sustainable Development Fee applicable, ID proof needed"
          }
        ]
      },
      {
        "id": 13,
        "heading": "6. Indonesia",
        "para": [
          {
            "id": 1,
            "text": "Indonesia is gaining popularity among Indian travelers."
          }
        ],
        "list": [
          { "id": 1, "text": "Entry Type: Visa on Arrival" },
          { "id": 2, "text": "Stay Duration: 30 days" },
          { "id": 3, "text": "Why Visit: Bali, beaches, culture" }
        ]
      },
      {
        "id": 14,
        "heading": "",
        "para": [
          {
            "id": 1,
            "text": "Important Details: VOA fee applicable, Passport validity required, Return ticket needed"
          }
        ]
      },
      {
        "id": 15,
        "heading": "7. Mauritius",
        "para": [
          {
            "id": 1,
            "text": "Mauritius offers visa-free entry to Indian travelers."
          }
        ],
        "list": [
          { "id": 1, "text": "Entry Type: Visa-free" },
          { "id": 2, "text": "Stay Duration: Up to 90 days" },
          { "id": 3, "text": "Why Visit: Beaches, honeymoon destination" }
        ]
      },
      {
        "id": 16,
        "heading": "",
        "para": [
          {
            "id": 1,
            "text": "Important Details: Proof of stay, Sufficient funds, Return ticket"
          }
        ]
      },
      {
        "id": 17,
        "heading": "8. Seychelles",
        "para": [
          {
            "id": 1,
            "text": "Seychelles is a visa-free paradise destination."
          }
        ],
        "list": [
          { "id": 1, "text": "Entry Type: Visa-free" },
          { "id": 2, "text": "Stay Duration: Up to 90 days" },
          { "id": 3, "text": "Why Visit: Clear waters, islands, luxury travel" }
        ]
      },
      {
        "id": 18,
        "heading": "",
        "para": [
          {
            "id": 1,
            "text": "Important Details: Travel authorization required, Accommodation proof, Funds proof"
          }
        ]
      },
      {
        "id": 19,
        "heading": "9. Kazakhstan",
        "para": [
          {
            "id": 1,
            "text": "Kazakhstan is an emerging destination for Indian travelers."
          }
        ],
        "list": [
          { "id": 1, "text": "Entry Type: Visa-free" },
          { "id": 2, "text": "Stay Duration: 14 days" },
          { "id": 3, "text": "Why Visit: Mountains, modern cities, budget travel" }
        ]
      },
      {
        "id": 20,
        "heading": "",
        "para": [
          {
            "id": 1,
            "text": "Important Details: Short stay allowed, Passport validity required, Travel plan recommended"
          }
        ]
      },
      {
        "id": 21,
        "heading": "10. Fiji",
        "para": [
          {
            "id": 1,
            "text": "Fiji offers visa-free entry and is perfect for exotic travel."
          }
        ],
        "list": [
          { "id": 1, "text": "Entry Type: Visa-free" },
          { "id": 2, "text": "Stay Duration: Up to 120 days" },
          { "id": 3, "text": "Why Visit: Beaches, island life, relaxation" }
        ]
      },
      {
        "id": 22,
        "heading": "",
        "para": [
          {
            "id": 1,
            "text": "Important Details: Return ticket required, Proof of funds, Passport validity"
          }
        ]
      },
      {
        "id": 23,
        "heading": "Quick Comparison Table",
        "para": [
          { "id": 1, "text": "Country - Entry Type - Stay Duration - Best For" },
          { "id": 2, "text": "Thailand - Visa-free - 30 days - Budget travel" },
          { "id": 3, "text": "Maldives - Visa on Arrival - 30 days - Luxury" },
          { "id": 4, "text": "Sri Lanka - E-visa/VOA - 30 days - Culture" },
          { "id": 5, "text": "Nepal - Visa-free - Flexible - Budget" },
          { "id": 6, "text": "Bhutan - Permit - Flexible - Nature" },
          { "id": 7, "text": "Indonesia - VOA - 30 days - Beaches" },
          { "id": 8, "text": "Mauritius - Visa-free - 90 days - Honeymoon" },
          { "id": 9, "text": "Seychelles - Visa-free - 90 days - Luxury" },
          { "id": 10, "text": "Kazakhstan - Visa-free - 14 days - Short trips" },
          { "id": 11, "text": "Fiji - Visa-free - 120 days - Exotic travel" }
        ]
      },
      {
        "id": 24,
        "heading": "Important Visa Rules Most People Ignore",
        "para": [
          {
            "id": 1,
            "text": "Even for visa-free travel, you must check:"
          }
        ],
        "list": [
          { "id": 1, "text": "Passport validity (minimum 6 months)" },
          { "id": 2, "text": "Return or onward ticket" },
          { "id": 3, "text": "Hotel booking confirmation" },
          { "id": 4, "text": "Proof of sufficient funds" },
          { "id": 5, "text": "Travel insurance (recommended)" }
        ]
      },
      {
        "id": 25,
        "heading": "Trending Travel Insight for 2026",
        "para": [
          {
            "id": 1,
            "text": "More countries are simplifying visa rules to attract tourists. However, they are also becoming stricter with documentation and intent verification at immigration."
          },
          {
            "id": 2,
            "text": "So while entry is easier, approvals at the airport depend on how prepared you are."
          }
        ]
      },
      {
        "id": 26,
        "heading": "Why Choose Holidays by Value ADZ",
        "para": [
          {
            "id": 1,
            "text": "Planning a visa-free trip still requires proper understanding of rules and documentation. Holidays by Value ADZ helps you avoid confusion and mistakes."
          }
        ],
        "list": [
          { "id": 1, "text": "Clear guidance on entry requirements" },
          { "id": 2, "text": "Proper documentation support" },
          { "id": 3, "text": "Budget-friendly travel planning" },
          { "id": 4, "text": "Smooth booking process" },
          { "id": 5, "text": "End-to-end assistance" }
        ]
      }
    ],
    "questions": [
      {
        "id": 1,
        "que": "Is visa-free travel completely free of requirements?",
        "ans": "No, visa-free does not mean zero requirements. You still need documents like a passport, a return ticket, and proof of stay. Immigration officers can deny entry if requirements are not met, even without a visa."
      },
      {
        "id": 2,
        "que": "Which is the easiest country to travel from India in 2026?",
        "ans": "Countries like Nepal and Thailand are among the easiest due to minimal paperwork and quick entry processes."
      },
      {
        "id": 3,
        "que": "Can I extend my stay in visa-free countries?",
        "ans": "Some countries allow extensions, while others do not. It depends on local immigration rules. Always check before traveling to avoid penalties or overstaying issues."
      },
      {
        "id": 4,
        "que": "What is the biggest mistake travelers make?",
        "ans": "The biggest mistake is assuming visa-free means no preparation. Many travelers ignore documents and face issues at immigration. Proper planning is still very important."
      }
    ]
  }
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

