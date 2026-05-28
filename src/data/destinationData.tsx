import {  cl1,  andman1, andman2, andman3, andman4, andman5, andman6, andman7, andman8, andman9,
  sikkim1, sikkim2, sikkim3, sikkim4, sikkim5, sikkim6, sikkim7, sikkim8, sikkim9,
  goa1, goa2, goa3, goa4, goa5, goa6, goa7, goa8, goa9,
  himanchal1, himanchal2, himanchal3, himanchal4, himanchal5, himanchal6, himanchal7, himanchal8, himanchal9,
  kashmir1, kashmir2, kashmir3, kashmir4, kashmir5, kashmir6, kashmir7, kashmir8, kashmir9,
  kerala1, kerala2, kerala3, kerala4, kerala5, kerala6, kerala7, kerala8, kerala9,
  ladakh1, ladakh2, ladakh3, ladakh4, ladakh5, ladakh6, ladakh7, ladakh8, ladakh9,
  goa,
  himanchal,
  kashmir,
  kerala,
  andman,
  sikkim,
  ladakh,  darjeeling, darjeeling1, darjeeling2, darjeeling3, darjeeling4, darjeeling5, darjeeling6, darjeeling7, darjeeling8, darjeeling9,
     jaipur, jaipur1, jaipur2, jaipur3, jaipur4, jaipur5, jaipur6, jaipur7, jaipur8, jaipur9,
     agra, agra1, agra2, agra3, agra4, agra5, agra6, agra7, agra8, agra9,
     ranthambore, ranthambore1, ranthambore2, ranthambore3, ranthambore4, ranthambore5, ranthambore6, ranthambore7, ranthambore8, ranthambore9,
     rishikesh, rishikesh1, rishikesh2, rishikesh3, rishikesh4, rishikesh5, rishikesh6, rishikesh7, rishikesh8, rishikesh9,
     dubai, dubai1, dubai2, dubai3, dubai4, dubai5, dubai6, dubai7, dubai8, dubai9,
     thailand, thailand1, thailand2, thailand3, thailand4, thailand5, thailand6, thailand7, thailand8, thailand9,
     vietnam, vietnam1, vietnam2, vietnam3, vietnam4, vietnam5, vietnam6, vietnam7, vietnam8, vietnam9,
     maldive, maldive1, maldive2, maldive3, maldive4, maldive5, maldive6, maldive7, maldive8, maldive9,
     hong, hong1, hong2, hong3, hong4, hong5, hong6, hong7, hong8, hong9,
     turkey, turkey1, turkey2, turkey3, turkey4, turkey5, turkey6, turkey7, turkey8, turkey9,
     china, china1, china2, china3, china4, china5, china6, china7, china8, china9,
     abudhabi, abudhabi1, abudhabi2, abudhabi3, abudhabi4, abudhabi5, abudhabi6, abudhabi7, abudhabi8, abudhabi9,
     switzerland, switzerland1, switzerland2, switzerland3, switzerland4, switzerland5, switzerland6, switzerland7, switzerland8, switzerland9,
     almaty, almaty1, almaty2, almaty3, almaty4, almaty5, almaty6, almaty7, almaty8, almaty9,
     georgia, georgia1, georgia2, georgia3, georgia4, georgia5, georgia6, georgia7, georgia8, georgia9,
     azerbaijan, azerbaijan1, azerbaijan2, azerbaijan3, azerbaijan4, azerbaijan5, azerbaijan6, azerbaijan7, azerbaijan8, azerbaijan9,
     bhutan, bhutan1, bhutan2, bhutan3, bhutan4, bhutan5, bhutan6, bhutan7, bhutan8, bhutan9,
     russia, russia1, russia2, russia3, russia4, russia5, russia6, russia7, russia8, russia9,
     japan, japan1, japan2, japan3, japan4, japan5, japan6, japan7, japan8, japan9,
     gt,
     gt1,
     gt2,
     gt3,
     gt4,
     gt5,
     gt6,
     gt7,
     gt8,
     gt9,
     jcn,
     jcn1,
     jcn2,
     jcn3,
     jcn4,
     jcn5,
     jcn6,
     jcn7,
     jcn8,
     jcn9,
     manali,
     manali1,
     manali2,
     manali3,
     manali4,
     manali5,
     manali6,
     manali7,
     manali8,
     manali9,
     mo,
     mo1,
     mo2,
     mo3,
     mo4,
     mo5,
     mo6,
     mo7,
     mo8,
     mo9} from "@/assets";
import destination from "@/components/home/destination";
import { on } from "events";
import { a } from "motion/react-client";

export const Destinationdata = [
    // goa
    {
   img:goa,
    title: "Goa",
    heading:"About Goa",
description: "Goa is one of India’s most loved beach destinations, known for its golden coastline, vibrant nightlife, Portuguese heritage, and relaxed vibe. From peaceful beaches to lively parties, Goa offers something for every traveler. Whether you're looking for adventure, culture, or simply a laid-back holiday, Goa delivers a perfect mix of experiences.",

   attraction:{
    heading:"Top Attractions in Goa",
    para:"Explore must-see attractions, vibrant beaches, historic churches, scenic landscapes, and unforgettable coastal experiences.",
    cards:[{
        img:goa1,
        title:"Baga Beach",
    description: "Baga Beach is one of the most popular beaches in Goa, famous for its lively atmosphere, water sports, and beach shacks. Visitors can enjoy parasailing, jet skiing, and delicious seafood while soaking in stunning sunset views. It’s perfect for those who love energy and nightlife."
    },
    { img:goa2,
        title:"Calangute Beach",
    description: " Known as the Queen of Beaches, Calangute Beach attracts tourists with its wide shoreline and vibrant crowd. It offers various activities like shopping, water sports, and relaxing by the sea. It’s an ideal place for both adventure lovers and families."
    },{
    img: goa3,
    title: "Anjuna Beach",
description: "Anjuna Beach is famous for its laid-back vibe and flea market. It’s a favorite spot for backpackers and those looking for a unique experience. The rocky shoreline and beautiful sunsets make it perfect for photography and peaceful evenings."
},
{
    img: goa4,
    title: "Fort Aguada",
description: "Fort Aguada is a historic Portuguese fort offering breathtaking views of the Arabian Sea. It is well-known for its lighthouse and strong architecture. Visitors can explore the fort while enjoying panoramic coastal views and learning about Goa’s colonial history."
},
{
    img: goa5,
    title: "Dudhsagar Waterfalls",
description: "Dudhsagar Waterfalls are one of the tallest waterfalls in India, surrounded by lush greenery. The waterfall looks like a stream of milk flowing down the mountains. It’s a must-visit for nature lovers and adventure seekers."
},
{
    img: goa6,
    title: "Basilica of Bom Jesus",
description: "This UNESCO World Heritage site is one of the most important churches in Goa. It houses the remains of St. Francis Xavier. The architecture is stunning, and the peaceful environment makes it a spiritual and cultural attraction."
},
{
    img: goa7,
    title: "Vagator Beach",
description: "Vagator Beach is known for its scenic beauty and dramatic cliffs. It offers a more relaxed atmosphere compared to other beaches. The sunset views here are stunning, making it a great place to unwind and enjoy nature."
},
{
    img: goa8,
    title: "Chapora Fort",
description: "Chapora Fort is famous for its panoramic views of the sea and surrounding beaches. It gained popularity after being featured in Bollywood movies. Visitors can enjoy a short trek to the top and capture amazing photographs."
},
{
    img: goa9,
    title: "Palolem Beach",
description: "Palolem Beach is one of the most beautiful and peaceful beaches in South Goa. Known for its crescent shape and calm waters, it’s perfect for swimming, relaxing, and enjoying a quiet beach holiday."
}
    ]
   },

   topthings:{
    heading:"Top Things to Do in Goa",
    para:"Explore the top 6 exciting things to do on your tour, offering unforgettable moments, local experiences, and highlights you simply can't miss.",
cards:[{
    
    title: "Enjoy Water Sports",
description: "Goa is famous for exciting water sports that attract adventure lovers from all over. You can try parasailing, jet skiing, banana rides, and even scuba diving at popular beaches. These activities are safe, fun, and perfect for adding thrill to your beach holiday experience."
},
{
    
    title: "Experience Goa Nightlife",
description: "Goa’s nightlife is vibrant and full of energy, offering beach parties, clubs, and live music events. You can enjoy dancing, DJ nights, and silent discos by the beach. It’s a great way to relax, meet new people, and enjoy unforgettable nights during your trip."
},
{
    
    title: "Explore Local Markets",
description: "Shopping in Goa is a unique experience with its famous flea markets and night bazaars. You can find trendy clothes, handmade jewelry, souvenirs, and local handicrafts. The lively atmosphere, street food, and music make these markets a must-visit for every traveler."
},
{
    
    title: "Visit Churches and Heritage Sites",
description: "Goa has a rich cultural history influenced by Portuguese architecture and traditions. Visiting old churches and forts gives you a glimpse into their past. These places are peaceful, beautifully designed, and perfect for those who enjoy history, culture, and scenic surroundings."
},
{
    
    title: "Relax on the Beaches",
description: "One of the best things to do in Goa is simply to relax on its beautiful beaches. You can sunbathe, swim in the sea, or enjoy a peaceful walk along the shore. Watching the sunset while sitting by the beach is a calming and memorable experience."
},
{
    
    title: "Try Goan Cuisine",
description: "Goa offers delicious food with unique flavors influenced by coastal and Portuguese styles. You must try seafood dishes like fish curry, prawns, and local sweets. The mix of spices and fresh ingredients makes Goan cuisine a highlight of every visit to this destination."
}],
},
testimonials: [
  {
    title: "Rahul Sharma",
    text: "Our Goa trip was perfectly planned! From hotel stay to beach activities, everything was smooth and well-managed. Highly recommended for hassle-free travel.",
    
  },
  {
    title: "Priya Verma",
    text: "Amazing service and great itinerary! We explored multiple destinations without feeling rushed. The team really understands what travelers need.",
    
  },
  {
    title: "Amit Gupta",
    text: "Booked our honeymoon through them, and it was unforgettable. Beautiful hotels, perfect timing, and excellent support throughout the trip.",
    
  },
  {
    title: "Neha Singh",
    text: "Very professional team! They handled everything from flights to local sightseeing. We just enjoyed our vacation without any stress.",
    
  },
  {
    title: "Vikram Patel",
    text: "One of the best travel experiences we’ve had. Great coordination, friendly support, and well-curated plans for every destination we visited.",
    
  }
],
whychoose:[{
    heading:"Customized Packages:",
    para:" We offer a variety of Himachal tour packages, including honeymoon specials and adventure trips, tailored to your preferences."
},
{
    heading:"Expert Local Knowledge:",
    para:"Our team possesses in-depth knowledge of the region, ensuring you experience hidden gems along with popular destinations."
},
{
    heading:"Quality Accommodations:",
    para:" Stay in top-rated hotels and resorts that offer comfort, scenic mountain views, and a relaxing environment."
},
{
    heading:"Seamless Travel Experience:",
    para:"From transportation to sightseeing, we handle all arrangements so you can enjoy a stress-free and memorable trip."
},
]
},
// Destination 1: Himachal Pradesh
{
    img: himanchal,
    title: "Himachal Pradesh",
    heading: "About Himachal Pradesh",
description: "Himachal Pradesh is a beautiful hill state in northern India, known for its snow-capped mountains, scenic valleys, charming hill stations, and peaceful environment. It is a perfect destination for nature lovers, adventure seekers, and honeymooners. From serene landscapes to thrilling activities, Himachal offers a refreshing escape from city life.",
    attraction: {
        heading: "Top Attractions in Himachal Pradesh",
        para: "Explore must-see attractions, stunning mountain views, peaceful valleys, adventure spots, and unforgettable natural beauty.",
        cards: [
            {
                img: himanchal1,
                title: "Manali",
            description: "Manali is one of the most popular hill stations in Himachal, surrounded by snow-covered mountains and lush greenery. It is famous for its scenic beauty, adventure activities, and romantic atmosphere. Visitors can enjoy snow, local markets, and nearby attractions like Solang Valley and Rohtang Pass."
            },
            {
                img: himanchal2,
                title: "Shimla",
            description: "Shimla, the capital of Himachal Pradesh, is known for its colonial charm, pleasant weather, and beautiful hills. The Mall Road, Ridge, and toy train rides are major highlights. It is an ideal destination for families and couples looking for a relaxing and scenic holiday."
            },
            {
                img: himanchal3,
                title: "Dharamshala",
            description: "Dharamshala is famous for its peaceful surroundings and Tibetan culture. It is home to the Dalai Lama and offers stunning views of the Dhauladhar range. The town is perfect for those seeking spirituality, nature, and a calm environment away from busy city life."
            },
            {
                img: himanchal4,
                title: "Dalhousie",
            description: "Dalhousie is a quiet and charming hill station known for its old-world charm and scenic beauty. Surrounded by pine forests and mountains, it offers peaceful views and a relaxing atmosphere. It is perfect for travelers looking for a calm and less crowded destination."
            },
            {
                img: himanchal5,
                title: "Spiti Valley",
            description: "Spiti Valley is a cold desert mountain valley known for its rugged landscapes and unique culture. It is ideal for adventure lovers who enjoy road trips, monasteries, and breathtaking views. The valley offers a raw and untouched travel experience."
            },
            {
                img: himanchal6,
                title: "Kullu Valley",
            description: "Kullu Valley is famous for its lush greenery, rivers, and temples. It is often called the Valley of Gods. Visitors can enjoy river rafting, sightseeing, and scenic views. It is a great destination for both relaxation and adventure."
            },
            {
                img: himanchal7,
                title: "Kasol",
            description: "Kasol is a small village known for its natural beauty and relaxed vibe. It is popular among backpackers and trekkers. Surrounded by mountains and rivers, Kasol is perfect for peaceful stays and short treks."
            },
            {
                img: himanchal8,
                title: "Kufri",
            description: "Kufri is a small hill station near Shimla, known for its snow activities and scenic views. It is especially popular during winter for skiing and snow adventures. It is a great place for family outings and short trips."
            },
            {
                img: himanchal9,
                title: "Bir Billing",
            description: "Bir Billing is one of the best paragliding destinations in the world. It offers stunning aerial views of the mountains and valleys. Adventure lovers visit this place to experience the thrill of flying and enjoy the natural beauty from above."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Himachal Pradesh",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, local experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Experience Snow Activities",
            description: "Himachal is a great place to enjoy snow activities like skiing, snowboarding, and snow trekking during winter. Popular places like Manali and Kufri offer exciting experiences for travelers. Playing in the snow and enjoying snowfall make your trip truly memorable and fun."
            },
            {
                
                title: "Go Trekking in the Mountains",
            description: "The state offers many beautiful trekking routes for beginners and experienced trekkers. Walking through forests, valleys, and mountains gives a unique experience. Treks like Triund and Hampta Pass are popular and offer stunning views of nature."
            },
            {
                
                title: "Try River Rafting",
            description: "River rafting in places like Kullu is an exciting activity for adventure lovers. The fast-flowing rivers and beautiful surroundings make it thrilling. It is a must-try experience for those looking to add some adventure to their trip."
            },
            {
                
                title: "Explore Local Markets",
            description: "Himachal’s local markets are perfect for shopping and exploring culture. You can buy woolen clothes, handicrafts, and souvenirs. Walking through these markets also gives a glimpse of local life and traditions."
            },
            {
                
                title: "Visit Monasteries and Temples",
            description: "Himachal is home to many peaceful monasteries and ancient temples. These places offer spiritual experiences along with beautiful architecture. Visiting them brings calmness and a deeper connection with the culture."
            },
            {
                
                title: "Enjoy Paragliding",
            description: "Paragliding in Bir Billing is a once-in-a-lifetime experience. Flying over mountains and valleys gives breathtaking views. It is safe and guided, making it perfect for beginners and adventure lovers alike."
            }
        ]
    },
    testimonials: [
        {
            title: "What Our Clients Say",
            text: "Our Himachal trip was beyond expectations! Every detail was perfectly managed, from hotel stays to sightseeing. The team made sure we enjoyed every moment without any stress.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "A wonderful travel experience with excellent planning and support. The itinerary was well-balanced, and we got enough time to explore each place comfortably.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "We booked a family vacation, and everything was smooth and well-organized. The hotels were great, and the team was always available to help us.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "Highly professional service! From booking to execution, everything was handled perfectly. We truly enjoyed our trip without worrying about anything.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "One of the best travel companies we have experienced. Great coordination, amazing stays, and a very friendly support team throughout the journey.",
            img: cl1
        }
    ],
  
}
,
// Destination 2: Kashmir
{
    img: kashmir,
    title: "Kashmir",
    heading: "About Kashmir",
description: "Kashmir, often called Paradise on Earth, is one of the most beautiful destinations in India, known for its snow-capped mountains, lush valleys, serene lakes, and picturesque landscapes. It offers a perfect blend of natural beauty, culture, and peace. Whether it’s snowfall, gardens, or houseboats, Kashmir promises an unforgettable experience.",
    attraction: {
        heading: "Top Attractions in Kashmir",
        para: "Explore must-see attractions, breathtaking valleys, scenic lakes, beautiful gardens, and unforgettable mountain experiences.",
        cards: [
            {
                img: kashmir1,
                title: "Srinagar",
            description: "Srinagar is the heart of Kashmir, famous for its beautiful lakes, Mughal gardens, and houseboats. The city offers stunning views of mountains and water. Visitors can enjoy peaceful surroundings, explore local markets, and experience the unique culture and lifestyle of Kashmir."
            },
            {
                img: kashmir2,
                title: "Gulmarg",
            description: "Gulmarg is a popular hill station known for its snow-covered landscapes and adventure activities. It is famous for skiing and has one of the highest cable cars in the world. The scenic beauty and fresh mountain air make it a must-visit destination in Kashmir."
            },
            {
                img: kashmir3,
                title: "Pahalgam",
            description: "Pahalgam is a peaceful valley surrounded by forests, rivers, and mountains. It is known for its natural beauty and relaxing environment. Visitors can enjoy scenic walks, river views, and a calm atmosphere away from crowded places."
            },
            {
                img: kashmir4,
                title: "Sonmarg",
            description: "Sonmarg, also known as the Meadow of Gold, is famous for its glaciers and breathtaking landscapes. It offers stunning views of snow-covered peaks and green meadows. It is a perfect destination for nature lovers and photography enthusiasts."
            },
            {
                img: kashmir5,
                title: "Dal Lake",
            description: "Dal Lake is one of the most famous attractions in Kashmir. It is known for its houseboats and shikara rides. The calm waters and surrounding mountains create a magical experience, especially during sunrise and sunset."
            },
            {
                img: kashmir6,
                title: "Betaab Valley",
            description: "Betaab Valley is a beautiful destination surrounded by mountains and greenery. It is known for its clear streams and scenic views. The peaceful environment makes it ideal for relaxation and photography."
            },
            {
                img: kashmir7,
                title: "Aru Valley",
            description: "Aru Valley is a small and charming village known for its untouched beauty. Surrounded by mountains and meadows, it is perfect for nature walks and peaceful stays. It is less crowded and offers a refreshing experience."
            },
            {
                img: kashmir8,
                title: "Mughal Gardens",
            description: "The Mughal Gardens in Srinagar are famous for their beautiful design, fountains, and greenery. These gardens reflect Mughal architecture and offer a peaceful place to relax and enjoy nature."
            },
            {
                img: kashmir9,
                title: "Yusmarg",
            description: "Yusmarg is a hidden gem in Kashmir known for its scenic beauty and calm environment. Surrounded by forests and meadows, it is perfect for those who want to explore less crowded places and enjoy nature."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Kashmir",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, local experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Enjoy a Shikara Ride on Dal Lake",
            description: "A shikara ride on Dal Lake is one of the most iconic experiences in Kashmir. Floating on calm waters while enjoying views of mountains and houseboats is peaceful and relaxing. It gives you a chance to see local life and enjoy the beauty of Srinagar."
            },
            {
                
                title: "Stay in a Houseboat",
            description: "Staying in a traditional houseboat is a unique experience in Kashmir. These houseboats offer comfort, beautiful interiors, and scenic lake views. It’s a perfect way to enjoy a peaceful stay while experiencing the local culture."
            },
            {
                
                title: "Experience Snow Activities",
            description: "Kashmir offers amazing snow activities during winter, especially in Gulmarg. You can enjoy skiing, snowboarding, and snow walks. It’s a great experience for adventure lovers and those who want to enjoy snowfall."
            },
            {
                
                title: "Explore Valleys and Nature",
            description: "Kashmir is full of beautiful valleys like Pahalgam and Sonmarg. Exploring these places gives you a chance to enjoy fresh air, scenic views, and peaceful surroundings. It is perfect for relaxing and connecting with nature."
            },
            {
                
                title: "Visit Mughal Gardens",
            description: "The Mughal Gardens are a must-visit for their beauty and peaceful atmosphere. Walking through these gardens with fountains and flowers is refreshing and enjoyable. It is a great place for photography and relaxation."
            },
            {
                
                title: "Try Kashmiri Cuisine",
            description: "Kashmiri food is rich in flavors and spices. You must try traditional dishes like Rogan Josh, Yakhni, and local sweets. The unique taste and preparation style make it a memorable part of your trip."
            }
        ]
    },
    testimonials: [
        {
            title: "What Our Clients Say",
            text: "Our Kashmir trip felt like a dream! Everything was perfectly arranged, and the views were breathtaking. The team ensured we had a smooth and memorable experience.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "Excellent planning and great support throughout the journey. From houseboat stay to local sightseeing, everything was handled professionally.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "We had an amazing family vacation in Kashmir. The itinerary was well-designed, and we never felt rushed. Highly recommended for stress-free travel.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "Beautiful experience! The hotels, transport, and overall coordination were top-notch. We truly enjoyed every moment of our trip.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "One of the best travel services we’ve used. Great attention to detail, friendly support, and perfectly curated travel plans made our trip unforgettable.",
            img: cl1
        }
    ],
  
}
,

// Destination 3: Kerala
{
    img: kerala,
    title: "Kerala",
    heading: "About Kerala",
description: "Kerala, known as God’s Own Country, is a beautiful state in southern India famous for its backwaters, lush greenery, serene beaches, and rich culture. It offers a perfect mix of nature, relaxation, and tradition. From houseboat stays to hill stations, Kerala offers a peaceful and refreshing travel experience for travelers of all types.",
    attraction: {
        heading: "Top Attractions in Kerala",
        para: "Explore must-see attractions, scenic backwaters, peaceful hill stations, wildlife experiences, and stunning coastal beauty.",
        cards: [
            {
                img: kerala1,
                title: "Munnar",
            description: "Munnar is a popular hill station known for its tea plantations, cool climate, and scenic landscapes. Surrounded by rolling hills and greenery, it offers a refreshing escape from city life. Visitors can enjoy nature walks, viewpoints, and peaceful surroundings."
            },
            {
                img: kerala2,
                title: "Alleppey (Alappuzha)",
            description: "Alleppey is famous for its backwaters and houseboat experiences. Cruising through calm waters surrounded by palm trees is a unique and relaxing experience. It is one of the best places in Kerala to enjoy nature and peaceful surroundings."
            },
            {
                img: kerala3,
                title: "Kochi (Cochin)",
            description: "Kochi is a vibrant city known for its mix of modern life and colonial history. It offers beautiful coastal views, historic sites, and cultural experiences. Visitors can explore Fort Kochi, Chinese fishing nets, and local markets."
            },
            {
                img: kerala4,
                title: "Thekkady",
            description: "Thekkady is known for the Periyar Wildlife Sanctuary and its rich biodiversity. It is a great place for wildlife lovers and nature enthusiasts. Visitors can enjoy boat rides, spice plantations, and peaceful forest surroundings."
            },
            {
                img: kerala5,
                title: "Kovalam Beach",
            description: "Kovalam Beach is one of Kerala's most famous beaches. Known for its clean shores and calm waters, it is perfect for relaxation. Visitors can enjoy sunbathing, swimming, and beautiful sunset views."
            },
            {
                img: kerala6,
                title: "Wayanad",
            description: "Wayanad is a beautiful hill district known for its forests, waterfalls, and wildlife. It offers a peaceful environment and is perfect for nature lovers. Trekking, caves, and scenic viewpoints make it a must-visit destination."
            },
            {
                img: kerala7,
                title: "Varkala",
            description: "Varkala is a unique beach destination known for its cliffs and scenic beauty. It offers a calm and relaxing environment with stunning sea views. It is also known for its spiritual significance and peaceful vibe."
            },
            {
                img: kerala8,
                title: "Kumarakom",
            description: "Kumarakom is a peaceful backwater destination known for its bird sanctuary and scenic beauty. It is ideal for relaxing stays and nature experiences. Visitors can enjoy houseboats and explore the calm surroundings."
            },
            {
                img: kerala9,
                title: "Athirappilly Waterfalls",
            description: "Athirappilly Waterfalls is one of the largest waterfalls in Kerala, often called the Niagara of India. Surrounded by forests, it offers breathtaking views and is a perfect spot for nature lovers and photographers."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Kerala",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, local experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Stay in a Houseboat",
            description: "A houseboat stay in Kerala’s backwaters is a unique and relaxing experience. Cruising through calm waters surrounded by greenery offers peace and comfort. It allows you to enjoy scenic views, local food, and a slow-paced lifestyle."
            },
            {
                
                title: "Explore Tea Plantations",
            description: "Visiting tea plantations in Munnar is a refreshing experience. Walking through green hills and learning about tea production is both relaxing and informative. The cool climate and scenic beauty make it a must-do activity."
            },
            {
                
                title: "Enjoy Ayurvedic Treatments",
            description: "Kerala is famous for its traditional Ayurvedic therapies. These treatments help in relaxation, healing, and rejuvenation. Many resorts offer authentic experiences that help you relax both physically and mentally."
            },
            {
                
                title: "Experience Wildlife Safaris",
            description: "Kerala offers great wildlife experiences in places like Thekkady. You can enjoy safaris, boat rides, and bird watching. It is a perfect activity for nature lovers who want to explore forests and wildlife."
            },
            {
                
                title: "Relax on Beaches",
            description: "Kerala’s beaches are peaceful and less crowded, making them perfect for relaxation. You can enjoy swimming, sunbathing, or simply sitting by the sea while enjoying beautiful sunset views."
            },
            {
                
                title: "Try Kerala Cuisine",
            description: "Kerala cuisine is rich in flavors with a mix of spices and coconut-based dishes. You must try traditional meals served on banana leaves, seafood, and local specialties for a complete cultural experience."
            }
        ]
    },
    testimonials: [
        {
            title: "What Our Clients Say",
            text: "Our Kerala trip was incredibly peaceful and well-organized. The houseboat experience was the highlight, and everything was managed perfectly from start to finish.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "Excellent service and great attention to detail. The itinerary was well-planned, giving us enough time to relax and explore every destination comfortably.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "We had a wonderful family vacation in Kerala. The hotels were amazing, and the support team was always available to assist us.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "From booking to execution, everything was smooth and hassle-free. The team ensured we had a memorable and relaxing experience throughout the trip.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "One of the best travel experiences we’ve had. Great coordination, beautiful stays, and perfectly planned activities made our trip truly special.",
            img: cl1
        }
    ],
  
}
,
// Destination 4: Andaman & Nicobar Islands,
{
    img: andman,
    title: "Andaman & Nicobar Islands",
    heading: "About Andaman & Nicobar Islands",
description: "The Andaman & Nicobar Islands are a tropical paradise in India, known for their crystal-clear waters, white sandy beaches, coral reefs, and peaceful environment. These islands offer a perfect escape for travelers seeking relaxation, adventure, and natural beauty. It is an ideal destination for honeymooners, families, and beach lovers.",
    attraction: {
        heading: "Top Attractions in Andaman & Nicobar Islands",
        para: "Explore must-see attractions, stunning beaches, historic sites, marine life, and unforgettable island experiences.",
        cards: [
            {
                img: andman1,
                title: "Havelock Island (Swaraj Dweep)",
            description: "Havelock Island is one of the most popular destinations in Andaman, known for its clear waters and beautiful beaches. It is perfect for water activities like scuba diving and snorkeling. The island offers a peaceful environment and breathtaking natural beauty."
            },
            {
                img: andman2,
                title: "Radhanagar Beach",
            description: "Radhanagar Beach is considered one of the best beaches in Asia. It is famous for its soft white sand, turquoise water, and stunning sunsets. It is an ideal place for relaxation, swimming, and enjoying peaceful surroundings."
            },
            {
                img: andman3,
                title: "Cellular Jail",
            description: "Cellular Jail in Port Blair is a historic site that reflects India’s freedom struggle. Visitors can explore the museum and attend the light and sound show that tells the story of brave freedom fighters."
            },
            {
                img: andman4,
                title: "Neil Island (Shaheed Dweep)",
            description: "Neil Island is known for its calm and less crowded environment. It offers beautiful beaches, natural rock formations, and a peaceful vibe. It is perfect for travelers looking to relax away from busy tourist spots."
            },
            {
                img: andman5,
                title: "Ross Island",
            description: "Ross Island is famous for its historical ruins and natural beauty. Once the administrative headquarters during British rule, it now offers scenic views and a glimpse into history, surrounded by greenery."
            },
            {
                img: andman6,
                title: "North Bay Island",
            description: "North Bay Island is popular for water activities and coral viewing. It is a great place for snorkeling and sea walking. Visitors can explore marine life and enjoy clear views of underwater beauty."
            },
            {
                img: andman7,
                title: "Baratang Island",
            description: "Baratang Island is known for its limestone caves and mangrove forests. The journey itself is an adventure, passing through dense forests and waterways. It is a unique and exciting experience."
            },
            {
                img: andman8,
                title: "Elephant Beach",
            description: "Elephant Beach is famous for its water sports and vibrant coral reefs. It is one of the best places for snorkeling and enjoying marine life. The clear water makes it perfect for underwater activities."
            },
            {
                img: andman9,
                title: "Chidiya Tapu",
            description: "Chidiya Tapu is known for its beautiful sunsets and bird-watching opportunities. Surrounded by forests and the sea, it is a peaceful place to relax and enjoy nature."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Andaman & Nicobar Islands",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, local experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Try Scuba Diving and Snorkeling",
            description: "The Andaman Islands are one of the best places in India for scuba diving and snorkeling. You can explore colorful coral reefs and marine life in clear waters. It is a must-do activity for adventure lovers and those who want to experience underwater beauty."
            },
            {
                
                title: "Enjoy Beach Relaxation",
            description: "The islands offer some of the most peaceful and clean beaches in India. You can relax on white sand, swim in clear waters, and enjoy beautiful sunsets. It is perfect for a calm and refreshing holiday."
            },
            {
                
                title: "Visit Historical Sites",
            description: "Exploring places like Cellular Jail gives insight into India’s history. The light and sound show is informative and emotional, making it a meaningful experience for visitors."
            },
            {
                
                title: "Experience Water Sports",
            description: "From jet skiing to sea walking, the islands offer many exciting water sports. These activities are safe and enjoyable, adding thrill to your trip."
            },
            {
                
                title: "Explore Island Hopping",
            description: "Island hopping is a popular activity in the Andaman. Traveling between different islands lets you explore unique beaches, landscapes, and experiences. It is a great way to see more in one trip."
            },
            {
                
                title: "Enjoy Sunset Views",
            description: "Watching the sunset in the Andaman is a magical experience. Beaches like Radhanagar and Chidiya Tapu offer stunning views, making it a perfect way to end your day."
            }
        ]
    },
    testimonials: [
        {
            title: "What Our Clients Say",
            text: "Our Andaman trip was absolutely perfect! From beach stays to water activities, everything was planned beautifully. It felt like a dream vacation.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "Excellent service and smooth coordination throughout the trip. The team ensured we experienced every major highlight without any hassle.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "We booked our honeymoon, and it was unforgettable. The hotels, transfers, and activities were all top-notch.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "Very professional and well-organized travel company. They handled everything perfectly, allowing us to enjoy our trip stress-free.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "One of the best travel experiences we’ve had. Great planning, amazing destinations, and constant support made our trip memorable.",
            img: cl1
        }
    ],
  
}
,
// Destination 5: Sikkim
{
    img: sikkim,
    title: "Sikkim",
    heading: "About Sikkim",
description: "Sikkim is a small yet stunning state in northeast India, known for its breathtaking mountain views, peaceful monasteries, rich culture, and natural beauty. Surrounded by the Himalayas, it offers a perfect mix of adventure and serenity. The state is home to Kanchenjunga, the third-highest mountain in the world, making it a paradise for nature lovers and trekkers.",
    attraction: {
        heading: "Top Attractions in Sikkim",
        para: "Explore must-see attractions, scenic mountain views, peaceful monasteries, beautiful lakes, and unforgettable Himalayan experiences.",
        cards: [
            {
                img: sikkim1,
                title: "Gangtok",
            description: "Gangtok, the capital of Sikkim, is a vibrant hill town known for its clean streets, scenic views, and modern lifestyle. It offers a perfect mix of nature and city life. Visitors can explore MG Road, enjoy local food, and visit nearby viewpoints and monasteries."
            },
            {
                img: sikkim2,
                title: "Tsomgo Lake",
            description: "Tsomgo Lake is a beautiful glacial lake surrounded by snow-covered mountains. It changes colors with the seasons and offers breathtaking views. Visitors can enjoy yak rides and peaceful surroundings, making it one of the most popular attractions in Sikkim."
            },
            {
                img: sikkim3,
                title: "Nathula Pass",
            description: "Nathula Pass is a high-altitude mountain pass connecting India and China. It is known for its historical importance and stunning views. Visiting this place is an exciting experience, offering snow, mountains, and a sense of adventure."
            },
            {
                img: sikkim4,
                title: "Yumthang Valley",
            description: "Yumthang Valley, also called the Valley of Flowers, is famous for its colorful blooms and scenic beauty. Surrounded by mountains and rivers, it is a paradise for nature lovers and photographers."
            },
            {
                img: sikkim5,
                title: "Pelling",
            description: "Pelling is known for its breathtaking views of Kanchenjunga and peaceful environment. It offers attractions like waterfalls, monasteries, and skywalk experiences. It is perfect for those looking for relaxation and scenic beauty."
            },
            {
                img: sikkim6,
                title: "Lachung",
            description: "Lachung is a small mountain village known for its natural beauty and peaceful surroundings. It serves as a base for visiting Yumthang Valley. The fresh air and scenic views make it a perfect getaway."
            },
            {
                img: sikkim7,
                title: "Ravangla",
            description: "Ravangla is a quiet town known for its spiritual and scenic attractions. It is home to the Buddha Park and offers stunning views of the Himalayas. It is perfect for relaxation and peaceful stays."
            },
            {
                img: sikkim8,
                title: "Namchi",
            description: "Namchi is known for its cultural and religious sites. It offers beautiful views and attractions like Char Dham and large statues. It is a great place to explore Sikkim’s spiritual side."
            },
            {
                img: sikkim9,
                title: "Zuluk",
            description: "Zuluk is an offbeat destination known for its winding roads and panoramic views. It is part of the old Silk Route and offers a unique travel experience with less crowds and stunning landscapes."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Sikkim",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, local experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Explore Monasteries and Spiritual Sites",
            description: "Sikkim is home to many peaceful monasteries that reflect its rich Buddhist culture. Visiting these places offers a calm and spiritual experience. You can witness traditional rituals, beautiful architecture, and serene surroundings that help you relax and connect with the local culture."
            },
            {
                
                title: "Enjoy Mountain Views and Sightseeing",
            description: "One of the best experiences in Sikkim is enjoying the breathtaking views of the Himalayas, especially Mount Kanchenjunga. Traveling through scenic roads, viewpoints, and valleys gives you unforgettable memories and a deep connection with nature’s beauty."
            },
            {
                
                title: "Visit High-Altitude Lakes",
            description: "Sikkim has several stunning lakes, like Tsomgo Lake and Gurudongmar Lake. These lakes are surrounded by mountains and offer peaceful environments. Visiting them is both refreshing and adventurous due to their high altitude and scenic beauty."
            },
            {
                
                title: "Experience Snow and Adventure Activities",
            description: "During winter, Sikkim becomes a snowy paradise. You can enjoy snow activities like playing in the snow, short treks, and exploring frozen landscapes. It is a great experience for those who love cold weather and adventure."
            },
            {
                
                title: "Try Local Sikkimese Cuisine",
            description: "Sikkim offers delicious local food influenced by Tibetan and Nepalese culture. You must try dishes like momos, thukpa, and traditional meals. The flavors are simple yet satisfying and add to the overall cultural experience."
            },
            {
                
                title: "Explore Offbeat and Scenic Villages",
            description: "Sikkim is known for its peaceful and less crowded villages like Lachung and Zuluk. Exploring these places gives you a chance to experience local life, natural beauty, and a calm environment away from busy tourist spots, making your trip more unique and memorable."
            }
        ]
    },
    testimonials: [
        {
            title: "What Our Clients Say",
            text: "Our Sikkim trip was truly refreshing and peaceful. Everything was perfectly arranged, and we got to experience both popular spots and hidden gems without any hassle.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "Amazing planning and great support throughout the journey. The itinerary was well-balanced, and we had enough time to enjoy each destination comfortably.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "We loved the entire experience, especially the scenic drives and beautiful stays. The team ensured everything went smoothly from start to finish.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "Highly professional service with great attention to detail. From permits to hotels, everything was handled perfectly, making our trip stress-free.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "One of the most memorable trips we’ve had. Excellent coordination, beautiful destinations, and constant support made it a perfect vacation.",
            img: cl1
        }
    ],
  
},
// Destination 1: Darjeeling
{
    img: darjeeling,
    title: "Darjeeling",
    heading: "About Darjeeling",
    description: "Darjeeling is a charming hill station in West Bengal, known for its tea gardens, cool climate, and stunning views of Mount Kanchenjunga. Often called the Queen of Hills, it offers a perfect blend of natural beauty and colonial charm. From peaceful monasteries to scenic toy train rides, Darjeeling is ideal for a relaxing and refreshing getaway.",
    attraction: {
        heading: "Top Attractions in Darjeeling",
        para: "Explore must-see attractions, scenic viewpoints, tea estates, peaceful monasteries, and unforgettable Himalayan experiences.",
        cards: [
            {
                img: darjeeling1,
                title: "Tiger Hill",
                description: "Tiger Hill is famous for its breathtaking sunrise views over Mount Kanchenjunga. Watching the first rays of sunlight hitting the snow peaks is a magical experience. It is one of the most popular spots for early morning visits and photography."
            },
            {
                img: darjeeling2,
                title: "Darjeeling Himalayan Railway (Toy Train)",
                description: "The toy train is a UNESCO World Heritage experience that takes you through scenic hills and charming landscapes. It offers a nostalgic journey and is one of the most unique attractions in Darjeeling."
            },
            {
                img: darjeeling3,
                title: "Batasia Loop",
                description: "Batasia Loop is a beautiful railway loop surrounded by gardens and mountain views. It offers panoramic views of the Himalayas and is a great place for photography and relaxation."
            },
            {
                img: darjeeling4,
                title: "Peace Pagoda",
                description: "The Peace Pagoda is a serene place that promotes harmony and peace. Surrounded by greenery, it offers a calm environment and beautiful views, making it perfect for quiet moments."
            },
            {
                img: darjeeling5,
                title: "Tea Gardens",
                description: "Darjeeling is world-famous for its tea plantations. Visiting these gardens allows you to see tea processing and enjoy scenic views of lush green hills."
            },
            {
                img: darjeeling6,
                title: "Padmaja Naidu Himalayan Zoo",
                description: "This zoo is known for conserving rare Himalayan animals like the red panda and snow leopard. It is a great place for wildlife lovers and families."
            },
            {
                img: darjeeling7,
                title: "Rock Garden",
                description: "Rock Garden is a beautifully designed garden with waterfalls and pathways. It is a peaceful spot where visitors can relax and enjoy nature."
            },
            {
                img: darjeeling8,
                title: "Ghoom Monastery",
                description: "Ghoom Monastery is one of the oldest monasteries in Darjeeling. It is known for its large Buddha statue and peaceful surroundings."
            },
            {
                img: darjeeling9,
                title: "Observatory Hill",
                description: "Observatory Hill is a spiritual and scenic place offering panoramic views of the town and mountains. It is perfect for peaceful walks and photography."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Darjeeling",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, local experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Enjoy Toy Train Ride",
                description: "Taking a ride on the toy train is one of the best experiences in Darjeeling. The slow journey through hills, tunnels, and villages offers scenic views and a nostalgic charm that makes it unforgettable."
            },
            {
                
                title: "Watch Sunrise at Tiger Hill",
                description: "Watching the sunrise at Tiger Hill is a must-do activity. The changing colors of the mountains create a magical view, making it a perfect start to your day."
            },
            {
                
                title: "Visit Tea Estates",
                description: "Exploring tea gardens gives you a chance to learn about tea production and enjoy beautiful surroundings. It is a relaxing and unique experience."
            },
            {
                
                title: "Explore Local Markets",
                description: "Darjeeling’s local markets are perfect for shopping and trying local food. You can buy souvenirs, woolens, and handicrafts while enjoying the lively atmosphere."
            },
            {
                
                title: "Visit Monasteries",
                description: "Darjeeling has peaceful monasteries that offer spiritual experiences and calm surroundings. Visiting them helps you relax and connect with the local culture."
            },
            {
                
                title: "Enjoy Scenic Walks",
                description: "Walking through Darjeeling’s hills, gardens, and viewpoints is a refreshing experience. The cool weather and beautiful views make it enjoyable."
            }
        ]
    },
    testimonials: [
        {
            title: "What Our Clients Say",
            text: "Our Darjeeling trip was perfectly organized with amazing views and comfortable stays. Every detail was taken care of, making our journey smooth and enjoyable.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "We had a wonderful experience exploring the hills. The itinerary was well-planned, and we got enough time to enjoy each attraction without any rush.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "Great service and excellent coordination throughout the trip. The hotels and travel arrangements were exactly as promised.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "Everything from booking to execution was seamless. The team ensured we had a stress-free and memorable vacation.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "One of the best travel experiences we’ve had. Beautiful locations, well-managed itinerary, and constant support made it truly special.",
            img: cl1
        }
    ],
  
},

// Destination 2: Leh Ladakh
{
    img: ladakh,
    title: "Leh Ladakh",
    heading: "About Leh Ladakh",
    description: "Leh Ladakh is a breathtaking destination in northern India, known for its rugged mountains, high-altitude deserts, crystal-clear lakes, and unique culture. Surrounded by the Himalayas, it offers stunning landscapes and adventure experiences. From peaceful monasteries to thrilling road trips, Leh Ladakh is perfect for travelers seeking both beauty and adventure.",
    attraction: {
        heading: "Top Attractions in Leh Ladakh",
        para: "Explore must-see attractions, high-altitude lakes, scenic mountain passes, ancient monasteries, and unforgettable landscapes.",
        cards: [
            {
                img: ladakh1,
                title: "Pangong Lake",
                description: "Pangong Lake is one of the most famous attractions in Ladakh, known for its changing colors and crystal-clear water. Surrounded by mountains, it offers breathtaking views and a peaceful environment, making it a must-visit destination."
            },
            {
                img: ladakh2,
                title: "Nubra Valley",
                description: "Nubra Valley is known for its sand dunes, double-humped camels, and scenic beauty. It offers a unique mix of desert and mountains, creating a one-of-a-kind experience for travelers."
            },
            {
                img: ladakh3,
                title: "Khardung La Pass",
                description: "Khardung La is one of the highest motorable roads in the world. It offers stunning views and an adventurous journey, making it a highlight for road trip lovers."
            },
            {
                img: ladakh4,
                title: "Magnetic Hill",
                description: "Magnetic Hill is a unique place where vehicles appear to move uphill on their own. It is a popular attraction that surprises visitors and offers a fun experience."
            },
            {
                img: ladakh5,
                title: "Shanti Stupa",
                description: "Shanti Stupa is a beautiful white dome offering panoramic views of Leh city and the surrounding mountains. It is a peaceful place, especially during sunrise and sunset."
            },
            {
                img: ladakh6,
                title: "Leh Palace",
                description: "Leh Palace is a historic palace offering a glimpse into Ladakh’s royal past. It also provides stunning views of the town and mountains."
            },
            {
                img: ladakh7,
                title: "Tso Moriri Lake",
                description: "Tso Moriri is a less crowded and equally beautiful lake surrounded by mountains. It is perfect for those looking for peace and natural beauty."
            },
            {
                img: ladakh8,
                title: "Hemis Monastery",
                description: "Hemis Monastery is one of the largest and most famous monasteries in Ladakh. It is known for its spiritual importance and beautiful architecture."
            },
            {
                img: ladakh9,
                title: "Zanskar Valley",
                description: "Zanskar Valley is known for its rugged beauty and adventure activities. It is famous for trekking and the Chadar Trek during the winter."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Leh Ladakh",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, local experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Go on a Road Trip",
                description: "A road trip in Leh Ladakh is one of the most thrilling experiences. Driving through high mountain passes, scenic valleys, and remote landscapes offers an unmatched adventure. The journey itself becomes the highlight, with every turn offering breathtaking views and unforgettable memories."
            },
            {
                
                title: "Experience Camping by Lakes",
                description: "Camping near Pangong or Tso Moriri lakes is a magical experience. Staying under the stars with peaceful surroundings and cold desert air creates unforgettable moments. It is perfect for those who love nature and unique stays."
            },
            {
                
                title: "Visit Monasteries",
                description: "Exploring monasteries in Ladakh offers a spiritual and cultural experience. These peaceful places provide insight into Buddhist traditions and offer calm surroundings with stunning views of the mountains."
            },
            {
                
                title: "Try Adventure Activities",
                description: "Ladakh is perfect for adventure lovers, offering trekking, biking, and river rafting. These activities add thrill to your trip and allow you to explore the region excitingly."
            },
            {
                
                title: "Enjoy Local Culture and Food",
                description: "Experiencing Ladakhi culture through local food, festivals, and traditions adds a unique touch to your trip. Dishes like momos and thukpa are popular and delicious."
            },
            {
                
                title: "Witness Stunning Landscapes",
                description: "One of the best things to do in Ladakh is simply to enjoy its natural beauty. The mountains, lakes, and valleys create unforgettable views that stay with you forever."
            }
        ]
    },
    testimonials: [
        {
            title: "What Our Clients Say",
            text: "Our Ladakh trip was truly an adventure of a lifetime! Everything was perfectly organized, and we felt safe and comfortable even at high altitudes.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "Amazing experience with excellent planning. The itinerary covered all major spots while giving us enough time to enjoy each location peacefully.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "The road trip, stays, and overall coordination were outstanding. We didn’t have to worry about anything during the entire journey.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "Very professional service with great attention to detail. The team ensured we had a smooth and memorable experience throughout the trip.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "One of the best trips we’ve ever had. Perfect planning, beautiful locations, and constant support made it unforgettable.",
            img: cl1
        }
    ],
  
},

// Destination 3: Jaipur
{
    img: jaipur,
    title: "Jaipur",
    heading: "About Jaipur",
    description: "Jaipur, the capital of Rajasthan, is known as the Pink City for its beautifully colored buildings and rich heritage. It offers a perfect blend of royal history, grand palaces, vibrant markets, and cultural experiences. From majestic forts to traditional Rajasthani cuisine, Jaipur provides a colorful and unforgettable travel experience.",
    attraction: {
        heading: "Top Attractions in Jaipur",
        para: "Explore must-see attractions, royal palaces, historic forts, vibrant bazaars, and rich cultural experiences.",
        cards: [
            {
                img: jaipur1,
                title: "Amber Fort",
                description: "Amber Fort is a magnificent fort located on a hill, known for its grand architecture and beautiful interiors. Visitors can explore its palaces and courtyards and enjoy stunning views of the surroundings."
            },
            {
                img: jaipur2,
                title: "City Palace",
                description: "City Palace is a royal residence showcasing a mix of Mughal and Rajasthani architecture. It includes museums, courtyards, and beautiful gates that reflect Jaipur’s rich history and culture."
            },
            {
                img: jaipur3,
                title: "Hawa Mahal",
                description: "Hawa Mahal, also known as the Palace of Winds, is one of Jaipur’s most iconic landmarks. Its unique design with small windows allowed royal ladies to observe street life while staying unseen."
            },
            {
                img: jaipur4,
                title: "Jantar Mantar",
                description: "Jantar Mantar is an astronomical observatory and a UNESCO World Heritage site. It features large instruments used to study time and celestial bodies, making it both educational and fascinating."
            },
            {
                img: jaipur5,
                title: "Nahargarh Fort",
                description: "Nahargarh Fort offers panoramic views of the city of Jaipur. It is a perfect place to visit during sunset and enjoy the scenic beauty along with the historical surroundings."
            },
            {
                img: jaipur6,
                title: "Jaigarh Fort",
                description: "Jaigarh Fort is known for housing the world’s largest cannon on wheels. It offers strong architecture and great views, making it a must-visit for history lovers."
            },
            {
                img: jaipur7,
                title: "Jal Mahal",
                description: "Jal Mahal is a beautiful palace located in the middle of Man Sagar Lake. It offers a stunning view, especially during sunrise and sunset, and is a popular photography spot."
            },
            {
                img: jaipur8,
                title: "Albert Hall Museum",
                description: "Albert Hall Museum is the oldest museum in Rajasthan, showcasing art, artifacts, and history. It is a great place to learn about Jaipur’s cultural heritage."
            },
            {
                img: jaipur9,
                title: "Bapu Bazaar",
                description: "Bapu Bazaar is a vibrant market known for textiles, handicrafts, and traditional items. It is perfect for shopping and experiencing Jaipur’s local culture."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Jaipur",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, local experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Explore Royal Forts and Palaces",
                description: "Jaipur is famous for its grand forts and palaces that reflect royal history. Exploring these places gives you a glimpse into the luxurious lifestyle of kings and queens, along with stunning architecture and beautiful surroundings."
            },
            {
                
                title: "Enjoy Shopping in Local Markets",
                description: "Jaipur’s markets are full of colorful items like clothes, jewelry, handicrafts, and souvenirs. Walking through these bazaars is a lively experience where you can shop and explore local culture."
            },
            {
                
                title: "Experience Rajasthani Cuisine",
                description: "Trying local food in Jaipur is a must. Dishes like Dal Baati Churma and traditional sweets offer rich flavors and a unique taste of Rajasthan’s culture."
            },
            {
                
                title: "Visit Cultural Shows and Folk Performances",
                description: "Jaipur offers traditional dance and music performances that showcase Rajasthani culture. Watching these shows is entertaining and gives a deeper understanding of local traditions."
            },
            {
                
                title: "Enjoy Sunset Views from Forts",
                description: "Watching the sunset from forts like Nahargarh is a beautiful experience. The view of the city with changing colors of the sky makes it memorable."
            },
            {
                
                title: "Take a Heritage Walk",
                description: "A heritage walk through Jaipur’s old city allows you to explore narrow streets, historic buildings, and local life. It is a great way to experience the real charm of the city."
            }
        ]
    },
    testimonials: [
        {
            title: "What Our Clients Say",
            text: "Our Jaipur trip was perfectly planned with amazing hotel stays and smooth travel arrangements. We enjoyed every moment without any stress.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "Excellent service and well-curated itinerary. We got to explore all major attractions comfortably and had a great overall experience.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "The team handled everything professionally. From booking to sightseeing, everything was seamless and well-organized.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "We loved the cultural experiences and local recommendations. It made our trip more special and memorable.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "One of the best travel experiences we’ve had. Great coordination, friendly support, and perfect planning made it unforgettable.",
            img: cl1
        }
    ],
  
}
,

{
  img: gt,
  title: "Golden Triangle",
  heading: "About Golden Triangle",
  description: "The Golden Triangle is one of India's most popular travel circuits connecting Delhi, Agra, and Jaipur. Known for its rich history, royal architecture, vibrant culture, and iconic landmarks, this journey offers the perfect blend of heritage and unforgettable experiences. From magnificent forts and palaces to bustling markets and historical monuments, the Golden Triangle creates memorable experiences for every traveler.",

  attraction: {
    heading: "Top Attractions in Golden Triangle",
    para: "Explore must-see attractions, royal palaces, historic landmarks, cultural experiences, and unforgettable sightseeing destinations.",
    cards: [
      {
        img: gt1,
        title: "Delhi",
        description: "Delhi is India's capital city, known for its historical monuments, vibrant markets, modern attractions, and rich cultural heritage."
      },
      {
        img: gt2,
        title: "India Gate",
        description: "India Gate is one of Delhi's most famous landmarks and a popular attraction reflecting India's history and pride."
      },
      {
        img: gt3,
        title: "Qutub Minar",
        description: "Qutub Minar is a UNESCO World Heritage Site known for its impressive architecture and historical significance."
      },
      {
        img: gt4,
        title: "Agra",
        description: "Agra is famous worldwide for its Mughal heritage, beautiful monuments, and timeless architectural wonders."
      },
      {
        img: gt5,
        title: "Taj Mahal",
        description: "The Taj Mahal is one of the world's most iconic monuments, known for its beauty, history, and romantic charm."
      },
      {
        img: gt6,
        title: "Agra Fort",
        description: "Agra Fort is a magnificent Mughal fortress featuring royal palaces, courtyards, and historical architecture."
      },
      {
        img: gt7,
        title: "Jaipur",
        description: "Jaipur, known as the Pink City, is famous for royal palaces, colorful markets, and traditional Rajasthani culture."
      },
      {
        img: gt8,
        title: "Amber Fort",
        description: "Amber Fort is a grand hilltop fort known for stunning architecture, royal history, and scenic surroundings."
      },
      {
        img: gt9,
        title: "Hawa Mahal",
        description: "Hawa Mahal is Jaipur's iconic palace, famous for its unique windows and beautiful architectural design."
      }
    ]
  },

  topthings: {
    heading: "Top 6 Things to Do in Golden Triangle",
    para: "Explore the top 6 exciting things to do on your tour, offering unforgettable cultural experiences and highlights you simply can't miss.",
    cards: [
      {
        title: "Explore Historic Monuments",
        description: "Discovering forts, palaces, and heritage landmarks offers an unforgettable glimpse into India's rich history."
      },
      {
        title: "Experience Royal Architecture",
        description: "The Golden Triangle showcases magnificent Mughal and Rajput architecture across famous cities and attractions."
      },
      {
        title: "Visit Traditional Markets",
        description: "Exploring local bazaars allows travelers to enjoy handicrafts, textiles, jewelry, and authentic cultural experiences."
      },
      {
        title: "Enjoy Local Cuisine",
        description: "Delhi, Agra, and Jaipur offer delicious traditional dishes and vibrant food experiences for every traveler."
      },
      {
        title: "Capture Iconic Sightseeing Views",
        description: "From the Taj Mahal to royal forts, every destination offers memorable photography opportunities."
      },
      {
        title: "Experience Cultural Heritage",
        description: "The Golden Triangle reflects India's traditions, heritage, festivals, and royal lifestyle beautifully."
      }
    ]
  },

  testimonials: [
    {
      title: "Happy Customer",
      text: "Our Golden Triangle tour was filled with amazing historical landmarks, cultural experiences, and unforgettable sightseeing moments. Every hotel stay and travel arrangement was managed perfectly throughout the journey."
    },
    {
      title: "Happy Customer",
      text: "Visiting Delhi, Agra, and Jaipur was a wonderful experience for our family. The itinerary was comfortable, balanced, and allowed us to enjoy every destination without any rush."
    },
    {
      title: "Happy Customer",
      text: "The transportation, hotels, and local sightseeing tours were organized professionally from start to finish. We especially loved the royal architecture and cultural atmosphere across all cities."
    },
    {
      title: "Happy Customer",
      text: "The Golden Triangle offered the perfect combination of history, culture, food, and memorable travel experiences. Every part of the trip felt smooth, relaxing, and completely hassle-free."
    },
    {
      title: "Happy Customer",
      text: "One of the most enjoyable vacations we've experienced in India. The support team was responsive, professional, and ensured we enjoyed every moment of our Golden Triangle holiday comfortably."
    }
  ]
},



{
  img: manali,
  title: "Manali",
  heading: "About Manali",
  description: "Manali is one of India's most loved hill stations, known for snow-covered mountains, scenic valleys, adventure activities, and peaceful natural beauty. Surrounded by the Himalayas, Manali offers the perfect mix of relaxation, adventure, and unforgettable sightseeing experiences. From charming cafes and riverside views to snow adventures and spiritual attractions, Manali creates memorable holidays for every traveler.",

  attraction: {
    heading: "Top Attractions in Manali",
    para: "Explore must-see attractions, mountain landscapes, scenic valleys, temples, and unforgettable experiences.",
    cards: [
      {
        img: manali1,
        title: "Solang Valley",
        description: "Solang Valley is a popular attraction known for snow activities, adventure sports, and breathtaking Himalayan views."
      },
      {
        img: manali2,
        title: "Rohtang Pass",
        description: "Rohtang Pass offers spectacular snow-covered landscapes and unforgettable mountain experiences for travelers and adventure lovers."
      },
      {
        img: manali3,
        title: "Hadimba Temple",
        description: "This ancient temple is surrounded by cedar forests and is famous for its peaceful atmosphere and unique architecture."
      },
      {
        img: manali4,
        title: "Mall Road",
        description: "Mall Road is Manali's lively shopping and dining area known for local markets, cafes, and souvenirs."
      },
      {
        img: manali5,
        title: "Manu Temple",
        description: "Manu Temple is a sacred religious site offering spiritual experiences and beautiful surroundings in Old Manali."
      },
      {
        img: manali6,
        title: "Old Manali",
        description: "Old Manali is famous for peaceful cafes, scenic beauty, riverside views, and a relaxing mountain vibe."
      },
      {
        img: manali7,
        title: "Vashisht Hot Springs",
        description: "Vashisht is known for natural hot water springs and traditional temples, attracting travelers seeking relaxation."
      },
      {
        img: manali8,
        title: "Jogini Waterfall",
        description: "Jogini Waterfall is a beautiful natural attraction offering peaceful trekking experiences and scenic mountain views."
      },
      {
        img: manali9,
        title: "Beas River",
        description: "The Beas River adds scenic charm to Manali with beautiful riverside views and adventure activities."
      }
    ]
  },

  topthings: {
    heading: "Top 6 Things to Do in Manali",
    para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, adventure experiences, and highlights you simply can't miss.",
    cards: [
      {
        title: "Enjoy Snow and Mountain Views",
        description: "Watching snow-covered Himalayan peaks creates peaceful and unforgettable experiences in Manali."
      },
      {
        title: "Experience Adventure Activities",
        description: "Paragliding, skiing, river rafting, trekking, and snow adventures make Manali exciting for thrill seekers."
      },
      {
        title: "Relax in Scenic Natural Surroundings",
        description: "Manali's valleys, rivers, forests, and mountain landscapes offer peaceful escapes and refreshing experiences."
      },
      {
        title: "Explore Local Markets and Cafes",
        description: "Visiting Mall Road and Old Manali allows travelers to enjoy shopping, cafes, and local culture."
      },
      {
        title: "Visit Temples and Spiritual Sites",
        description: "Ancient temples in Manali reflect the region's spiritual traditions and cultural beauty."
      },
      {
        title: "Capture Beautiful Himalayan Landscapes",
        description: "Every corner of Manali offers breathtaking photography opportunities with mountains, rivers, and valleys."
      }
    ]
  },

  testimonials: [
    {
      title: "Happy Customer",
      text: "Our Manali trip was filled with beautiful snow views, adventure activities, and peaceful mountain experiences. Every hotel stay and sightseeing arrangement was managed perfectly throughout the journey."
    },
    {
      title: "Happy Customer",
      text: "Exploring Solang Valley, Rohtang Pass, and Old Manali was an unforgettable experience for our family. The itinerary was comfortable, relaxing, and perfectly planned."
    },
    {
      title: "Happy Customer",
      text: "The transportation, hotels, and local tours were organized professionally from start to finish. We especially loved the scenic Himalayan beauty and peaceful atmosphere across Manali."
    },
    {
      title: "Happy Customer",
      text: "Manali offered the perfect combination of adventure, relaxation, nature, and unforgettable sightseeing experiences. Every part of the trip felt smooth and completely hassle-free."
    },
    {
      title: "Happy Customer",
      text: "One of the most memorable hill station vacations we've experienced. The support team was responsive, professional, and ensured we enjoyed every moment of our Manali holiday comfortably."
    }
  ]
},


{
  img: mo,
  title: "Mysore-Ooty",
  heading: "About Mysore-Ooty",
  description: "Mysore-Ooty is a perfect travel combination offering royal heritage, scenic hill station beauty, peaceful landscapes, and relaxing experiences. Mysore is known for its grand palaces, cultural charm, and historic attractions, while Ooty offers beautiful tea gardens, cool weather, lakes, and breathtaking mountain views. Together, these destinations create a refreshing and memorable holiday experience for every traveler.",

  attraction: {
    heading: "Top Attractions in Mysore-Ooty",
    para: "Explore must-see attractions, royal landmarks, scenic valleys, gardens, lakes, and unforgettable sightseeing experiences.",
    cards: [
      {
        img:mo1,
        title: "Mysore Palace",
        description: "Mysore Palace is one of India's most magnificent royal palaces, known for its stunning architecture and rich cultural heritage."
      },
      {
        img:mo2,
        title: "Chamundi Hills",
        description: "Chamundi Hills offers panoramic city views and is famous for the sacred Chamundeshwari Temple."
      },
      {
        img:mo3,
        title: "Brindavan Gardens",
        description: "Brindavan Gardens is known for beautiful landscapes, musical fountains, and relaxing evening experiences."
      },
      {
        img:mo4,
        title: "St. Philomena's Church",
        description: "This iconic church is admired for its grand Gothic architecture and peaceful surroundings."
      },
      {
        img:mo5,
        title: "Ooty Lake",
        description: "Ooty Lake is a popular attraction offering boating experiences and scenic natural beauty."
      },
      {
        img:mo6,
        title: "Botanical Gardens",
        description: "The Botanical Gardens in Ooty are famous for colorful flowers, lush greenery, and peaceful walking areas."
      },
      {
        img:mo7,
        title: "Doddabetta Peak",
        description: "Doddabetta Peak is the highest point in Ooty, offering breathtaking panoramic views of the Nilgiri Hills."
      },
      {
        img:mo8,
        title: "Tea Gardens",
        description: "Ooty's tea plantations provide refreshing landscapes and opportunities to experience the region's famous tea culture."
      },
      {
        img:mo9,
        title: "Nilgiri Mountain Railway",
        description: "This famous toy train journey offers scenic mountain views and unforgettable travel experiences."
      }
    ]
  },

  topthings: {
    heading: "Top 6 Things to Do in Mysore-Ooty",
    para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, scenic beauty, and cultural experiences you simply can't miss.",
    cards: [
      {
        title: "Explore Royal Heritage Sites",
        description: "Visiting Mysore's palaces and historical landmarks offers a glimpse into royal history and cultural traditions."
      },
      {
        title: "Enjoy Scenic Hill Station Views",
        description: "Ooty's mountains, valleys, and cool weather create peaceful and refreshing holiday experiences."
      },
      {
        title: "Relax Around Lakes and Gardens",
        description: "Beautiful lakes, botanical gardens, and green surroundings offer relaxing moments for travelers."
      },
      {
        title: "Experience the Famous Toy Train Ride",
        description: "The Nilgiri Mountain Railway provides breathtaking views and memorable travel experiences through the hills."
      },
      {
        title: "Visit Tea Plantations and Local Markets",
        description: "Exploring tea gardens and local shopping areas allows travelers to enjoy authentic regional experiences."
      },
      {
        title: "Capture Beautiful Nature and Architecture",
        description: "From royal palaces to scenic landscapes, Mysore-Ooty offers endless photography opportunities."
      }
    ]
  },

  testimonials: [
    {
      title: "Happy Customer",
      text: "Our Mysore-Ooty trip was filled with beautiful sightseeing, peaceful landscapes, and unforgettable travel experiences. Every hotel stay and local arrangement was managed perfectly throughout the journey."
    },
    {
      title: "Happy Customer",
      text: "Visiting Mysore Palace, Ooty Lake, and the tea gardens was an amazing experience for our family. The itinerary was comfortable, relaxing, and well-balanced."
    },
    {
      title: "Happy Customer",
      text: "The transportation, hotels, and sightseeing tours were organized professionally from start to finish. We especially loved the cool weather and scenic beauty across Ooty."
    },
    {
      title: "Happy Customer",
      text: "Mysore-Ooty offered the perfect combination of culture, nature, relaxation, and memorable sightseeing experiences. Every part of the journey felt smooth and completely hassle-free."
    },
    {
      title: "Happy Customer",
      text: "One of the most refreshing vacations we've experienced. The support team was responsive, professional, and ensured we enjoyed every moment of our Mysore-Ooty holiday comfortably."
    }
  ]
},

{
  img: jcn,
  title: "Jim Corbett & Nainital",
  heading: "About Jim Corbett & Nainital",
  description: "Jim Corbett & Nainital offer the perfect combination of wildlife adventure, scenic hill station beauty, peaceful lakes, and relaxing nature experiences. Jim Corbett is famous for jungle safaris and rich wildlife, while Nainital is known for beautiful lakes, mountain views, and pleasant weather. Together, these destinations create a refreshing and unforgettable holiday for families, couples, and nature lovers.",

  attraction: {
    heading: "Top Attractions in Jim Corbett & Nainital",
    para: "Explore must-see attractions, scenic lakes, wildlife experiences, hill station beauty, and unforgettable sightseeing destinations.",
    cards: [
      {
        img: jcn1,
        title: "Jim Corbett National Park",
        description: "Jim Corbett National Park is India's oldest national park, known for jungle safaris, wildlife experiences, and natural beauty."
      },
      {
        img: jcn2,
        title: "Jeep Safari",
        description: "Jeep safaris offer exciting opportunities to explore forests and spot tigers, elephants, deer, and exotic birds."
      },
      {
        img: jcn3,
        title: "Garjia Temple",
        description: "Garjia Temple is a famous riverside temple known for its peaceful atmosphere and scenic surroundings."
      },
      {
        img: jcn4,
        title: "Corbett Waterfall",
        description: "Corbett Waterfall is a beautiful natural attraction surrounded by lush greenery and relaxing forest views."
      },
      {
        img: jcn5,
        title: "Naini Lake",
        description: "Naini Lake is the heart of Nainital and a popular attraction known for boating and scenic mountain surroundings."
      },
      {
        img: jcn6,
        title: "Naina Devi Temple",
        description: "This famous temple is an important spiritual site offering peaceful experiences and beautiful lake views."
      },
      {
        img: jcn7,
        title: "Snow View Point",
        description: "Snow View Point offers breathtaking panoramic views of the snow-covered Himalayan ranges."
      },
      {
        img: jcn8,
        title: "Mall Road Nainital",
        description: "Mall Road is a lively area known for shopping, cafes, local markets, and lakeside views."
      },
      {
        img: jcn9,
        title: "Eco Cave Gardens",
        description: "Eco Cave Gardens is a fun attraction featuring natural caves, scenic walking paths, and family-friendly experiences."
      }
    ]
  },

  topthings: {
    heading: "Top 6 Things to Do in Jim Corbett & Nainital",
    para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, adventure experiences, and highlights you simply can't miss.",
    cards: [
      {
        title: "Enjoy Wildlife Jungle Safaris",
        description: "Exploring Jim Corbett's forests through jeep safaris creates thrilling and unforgettable wildlife experiences."
      },
      {
        title: "Relax Around Scenic Lakes",
        description: "Nainital's peaceful lakes and mountain surroundings offer refreshing and relaxing holiday moments."
      },
      {
        title: "Experience Nature and Mountain Views",
        description: "Beautiful valleys, forests, and Himalayan landscapes provide breathtaking sightseeing experiences."
      },
      {
        title: "Visit Spiritual and Cultural Sites",
        description: "Temples and local attractions reflect the peaceful atmosphere and cultural beauty of the region."
      },
      {
        title: "Explore Local Markets and Cafes",
        description: "Mall Road and nearby shopping areas allow travelers to enjoy local culture, food, and shopping experiences."
      },
      {
        title: "Capture Beautiful Wildlife and Landscapes",
        description: "From jungle safaris to scenic lakes, every destination offers memorable photography opportunities."
      }
    ]
  },

  testimonials: [
    {
      title: "Happy Customer",
      text: "Our Jim Corbett & Nainital trip was filled with exciting safaris, peaceful lakes, and beautiful mountain experiences. Every hotel stay and sightseeing activity was managed perfectly throughout the journey."
    },
    {
      title: "Happy Customer",
      text: "Exploring Jim Corbett National Park and boating at Naini Lake were unforgettable experiences for our family. The itinerary was comfortable, balanced, and very relaxing."
    },
    {
      title: "Happy Customer",
      text: "The transportation, hotels, and local tours were organized professionally from start to finish. We especially loved the peaceful weather and scenic natural beauty across both destinations."
    },
    {
      title: "Happy Customer",
      text: "Jim Corbett & Nainital offered the perfect combination of wildlife adventure, nature, relaxation, and sightseeing experiences. Every part of the journey felt smooth and completely hassle-free."
    },
    {
      title: "Happy Customer",
      text: "One of the most refreshing vacations we've experienced in Uttarakhand. The support team was responsive and professional, and ensured we enjoyed every moment of our holiday comfortably."
    }
  ]
},
// Destination 4: Agra
{
    img: agra,
    title: "Agra",
    heading: "About Agra",
    description: "Agra is one of India’s most famous historical cities, known for its Mughal architecture, rich heritage, and iconic monuments. Home to the world-famous Taj Mahal, Agra offers a glimpse into royal history and timeless beauty. With its grand forts, beautiful gardens, and cultural charm, it is a must-visit destination for history lovers and travelers alike.",
    attraction: {
        heading: "Top Attractions in Agra",
        para: "Explore must-see attractions, historic monuments, Mughal architecture, beautiful gardens, and unforgettable cultural experiences.",
        cards: [
            {
                img: agra1,
                title: "Taj Mahal",
                description: "The Taj Mahal is one of the Seven Wonders of the World and a symbol of love. Built in white marble, it is known for its stunning beauty and intricate design. Visiting during sunrise or sunset offers a magical experience."
            },
            {
                img: agra2,
                title: "Agra Fort",
                description: "Agra Fort is a UNESCO World Heritage site known for its massive structure and rich history. It served as the residence of Mughal emperors and offers beautiful views of the Taj Mahal from its walls."
            },
            {
                img: agra3,
                title: "Fatehpur Sikri",
                description: "Fatehpur Sikri is a historic city built by Emperor Akbar. It is known for its grand architecture and well-preserved buildings. Exploring this place gives insight into Mughal history and culture."
            },
            {
                img: agra4,
                title: "Mehtab Bagh",
                description: "Mehtab Bagh is a beautiful garden located across the Yamuna River. It offers stunning views of the Taj Mahal, especially during sunset, making it a great spot for photography."
            },
            {
                img: agra5,
                title: "Itimad-ud-Daulah (Baby Taj)",
                description: "Often called the Baby Taj, this monument is known for its delicate marble work and beautiful design. It is considered a draft of the Taj Mahal and is worth visiting."
            },
            {
                img: agra6,
                title: "Akbar’s Tomb (Sikandra)",
                description: "Akbar’s Tomb is a peaceful place surrounded by gardens. It reflects Mughal architecture and offers a calm environment for visitors."
            },
            {
                img: agra7,
                title: "Jama Masjid",
                description: "Jama Masjid is one of the largest mosques in India, known for its impressive structure and spiritual atmosphere. It is an important religious site in Agra."
            },
            {
                img: agra8,
                title: "Kinari Bazaar",
                description: "Kinari Bazaar is a lively market known for traditional items, clothes, and handicrafts. It is perfect for shopping and experiencing local culture."
            },
            {
                img: agra9,
                title: "Anguri Bagh",
                description: "Anguri Bagh is a beautiful garden inside Agra Fort, known for its symmetrical design and greenery. It offers a peaceful space and great views of the surrounding structures."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Agra",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, local experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Visit the Taj Mahal at Sunrise",
                description: "Watching the Taj Mahal during sunrise is a magical experience. The soft light enhances its beauty and creates a peaceful atmosphere. It is the best time to visit and capture stunning photographs."
            },
            {
                
                title: "Explore Mughal Architecture",
                description: "Agra is full of beautiful Mughal monuments and forts. Exploring these places helps you understand history, architecture, and royal lifestyle, making your trip both educational and enjoyable."
            },
            {
                
                title: "Enjoy Local Street Food",
                description: "Agra is known for its delicious street food and sweets like petha. Trying local dishes gives you a taste of the city’s culture and flavors."
            },
            {
                
                title: "Shop in Local Markets",
                description: "Shopping in Agra’s markets is a fun experience. You can buy handicrafts, marble items, leather goods, and souvenirs while exploring the local vibe."
            },
            {
                
                title: "Take a Heritage Walk",
                description: "A heritage walk through Agra allows you to explore hidden streets, local life, and historic spots. It is a great way to experience the city beyond major attractions."
            },
            {
                
                title: "Visit Gardens and Riverside Spots",
                description: "Spending time in gardens like Mehtab Bagh offers peaceful views and relaxation. Watching the Taj Mahal from across the river adds a unique experience to your trip."
            }
        ]
    },
    testimonials: [
        {
            title: "What Our Clients Say",
            text: "Our Agra trip was beautifully planned, and visiting the Taj Mahal was a dream come true. Everything was managed smoothly, making our experience truly special.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "Great service and well-organized itinerary. We explored all major attractions without any hassle and had enough time to enjoy each place.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "The team ensured a seamless experience from start to finish. Hotels, transport, and sightseeing were all perfectly arranged.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "Highly professional and reliable service. We didn’t have to worry about anything during our trip and enjoyed every moment.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "One of the most memorable trips we’ve had. Perfect planning, great support, and an amazing experience overall.",
            img: cl1
        }
    ],
  
}
,
// Destination 5: Ranthambore
{
    img: ranthambore,
    title: "Ranthambore",
    heading: "About Ranthambore",
    description: "Ranthambore is one of India’s most famous wildlife destinations, known for its national park, rich biodiversity, and thrilling tiger safaris. Located in Rajasthan, it offers a unique blend of nature, history, and adventure. From dense forests to ancient ruins, Ranthambore is perfect for wildlife lovers and those seeking an exciting and refreshing getaway.",
    attraction: {
        heading: "Top Attractions in Ranthambore",
        para: "Explore must-see attractions, wildlife safaris, historic ruins, scenic landscapes, and unforgettable nature experiences.",
        cards: [
            {
                img: ranthambore1,
                title: "Ranthambore National Park",
                description: "Ranthambore National Park is the main attraction, known for its tiger population and rich wildlife. Visitors can spot animals like leopards, deer, and birds while enjoying a thrilling jungle safari experience."
            },
            {
                img: ranthambore2,
                title: "Ranthambore Fort",
                description: "Ranthambore Fort is a historic structure located inside the national park. It offers panoramic views of the forest and adds a touch of history to your wildlife trip."
            },
            {
                img: ranthambore3,
                title: "Padam Talao",
                description: "Padam Talao is the largest lake in the park and a popular spot for wildlife sightings. It offers scenic views and is often visited by animals, making it great for photography."
            },
            {
                img: ranthambore4,
                title: "Raj Bagh Ruins",
                description: "Raj Bagh Ruins are ancient structures located within the park. Surrounded by nature, they create a unique setting where history and wildlife come together."
            },
            {
                img: ranthambore5,
                title: "Surwal Lake",
                description: "Surwal Lake is a peaceful spot known for bird-watching. It attracts migratory birds and offers a calm environment for nature lovers."
            },
            {
                img: ranthambore6,
                title: "Kachida Valley",
                description: "Kachida Valley is known for its rocky terrain and wildlife. It is a good place to spot animals like leopards and bears."
            },
            {
                img: ranthambore7,
                title: "Malik Talao",
                description: "Malik Talao is a small lake where visitors can often see birds and animals. It is a quiet and scenic place within the park."
            },
            {
                img: ranthambore8,
                title: "Jogi Mahal",
                description: "Jogi Mahal is a historic rest house located near Padam Talao. It is known for its large banyan tree and scenic surroundings."
            },
            {
                img: ranthambore9,
                title: "Trinetra Ganesh Temple",
                description: "This temple is located inside Ranthambore Fort and is an important religious site. Many visitors come here to seek blessings."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Ranthambore",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, local experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Go on a Jungle Safari",
                description: "A jungle safari in Ranthambore is the highlight of the trip. It offers a chance to see tigers and other wildlife in their natural habitat. The thrilling experience of exploring the forest makes it unforgettable."
            },
            {
                
                title: "Spot Wildlife and Birds",
                description: "Ranthambore is rich in wildlife and bird species. Observing animals like deer, leopards, and various birds in the wild is exciting and enjoyable for nature lovers."
            },
            {
                
                title: "Explore Ranthambore Fort",
                description: "Visiting the fort gives you a mix of history and scenic views. The climb and surroundings make it an interesting experience."
            },
            {
                
                title: "Enjoy Nature Photography",
                description: "The landscapes, wildlife, and lakes provide perfect opportunities for photography. It is a great place for capturing nature and wildlife moments."
            },
            {
                
                title: "Visit Lakes and Scenic Spots",
                description: "Exploring places like Padam Talao and Surwal Lake offers peaceful views and chances to spot animals. It is perfect for relaxation and sightseeing."
            },
            {
                
                title: "Experience Peaceful Nature Stay",
                description: "Staying near the forest allows you to enjoy calm surroundings and fresh air. It is a refreshing break from busy city life."
            }
        ]
    },
    testimonials: [
        {
            title: "What Our Clients Say",
            text: "Our Ranthambore trip was full of excitement! The safari experience was amazing, and everything was perfectly arranged for us.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "Great planning and smooth execution. We had a wonderful wildlife experience and enjoyed every moment of the trip.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "The hotels and safari bookings were well-managed. We didn’t face any issues and had a stress-free vacation.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "Very professional team with excellent support. They ensured we had a memorable and comfortable journey.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "One of the best wildlife trips we’ve had. Perfect coordination, great experience, and unforgettable memories.",
            img: cl1
        }
    ],
  
},

// Destination 6: Rishikesh
{
    img: rishikesh,
    title: "Rishikesh",
    heading: "About Rishikesh",
    description: "Rishikesh is a peaceful town in Uttarakhand, known as the Yoga Capital of the World. Located on the banks of the Ganges River, it offers a perfect mix of spirituality, adventure, and natural beauty. From ancient temples to thrilling activities, Rishikesh is an ideal destination for both relaxation and adventure seekers.",
    attraction: {
        heading: "Top Attractions in Rishikesh",
        para: "Explore must-see attractions, spiritual sites, scenic river views, adventure spots, and peaceful surroundings.",
        cards: [
            {
                img: rishikesh1,
                title: "Lakshman Jhula",
                description: "Lakshman Jhula is a famous suspension bridge over the Ganges River. It offers beautiful views and connects important parts of the town. It is a popular spot for tourists and photographers."
            },
            {
                img: rishikesh2,
                title: "Ram Jhula",
                description: "Ram Jhula is another iconic bridge known for its scenic views and spiritual surroundings. It connects ashrams and temples, making it an important place for visitors."
            },
            {
                img: rishikesh3,
                title: "Triveni Ghat",
                description: "Triveni Ghat is a sacred spot where visitors gather for the evening Ganga Aarti. The spiritual atmosphere and rituals create a peaceful and memorable experience."
            },
            {
                img: rishikesh4,
                title: "Neelkanth Mahadev Temple",
                description: "This temple is dedicated to Lord Shiva and is located in the hills near Rishikesh. It is a popular pilgrimage site surrounded by natural beauty."
            },
            {
                img: rishikesh5,
                title: "Parmarth Niketan Ashram",
                description: "Parmarth Niketan is one of the largest ashrams in Rishikesh. It offers yoga sessions, meditation, and spiritual teachings, attracting visitors from around the world."
            },
            {
                img: rishikesh6,
                title: "Beatles Ashram",
                description: "The Beatles Ashram is a unique place known for its artistic walls and peaceful environment. It gained popularity after the famous band visited here."
            },
            {
                img: rishikesh7,
                title: "Shivpuri",
                description: "Shivpuri is known for adventure activities, especially river rafting. It is surrounded by forests and offers scenic beauty along with thrilling experiences."
            },
            {
                img: rishikesh8,
                title: "Rajaji National Park",
                description: "Rajaji National Park is a nearby wildlife reserve known for elephants, tigers, and birds. It is perfect for nature lovers and wildlife enthusiasts."
            },
            {
                img: rishikesh9,
                title: "Vashishta Cave",
                description: "Vashishta Cave is a peaceful meditation spot located near the river. It is ideal for those seeking silence and spiritual connection."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Rishikesh",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, local experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Experience River Rafting",
                description: "Rishikesh is one of the best places in India for river rafting. The thrilling ride through the Ganges offers excitement and adventure. It is suitable for beginners and experienced travelers, making it a must-try activity."
            },
            {
                
                title: "Attend Ganga Aarti",
                description: "Attending the Ganga Aarti at Triveni Ghat is a spiritual experience. The prayers, chants, and lights create a peaceful and divine atmosphere that stays with you long after your visit."
            },
            {
                
                title: "Practice Yoga and Meditation",
                description: "Rishikesh is known worldwide for yoga and meditation. Joining a session helps you relax your mind and body while experiencing spiritual growth in a calm environment."
            },
            {
                
                title: "Try Adventure Activities",
                description: "Apart from rafting, Rishikesh offers activities like bungee jumping, camping, and trekking. These experiences add excitement and make your trip more memorable."
            },
            {
                
                title: "Explore Ashrams and Temples",
                description: "Visiting ashrams and temples gives you a deeper understanding of spirituality and local culture. It is a peaceful and enriching experience."
            },
            {
                
                title: "Enjoy Riverside Camping",
                description: "Camping by the river is a unique experience in Rishikesh. Sitting by the Ganges, enjoying bonfires, and staying close to nature create unforgettable memories."
            }
        ]
    },
    testimonials: [
        {
            title: "What Our Clients Say",
            text: "Our Rishikesh trip was a perfect mix of adventure and peace. Everything was well-organized, and we had an amazing experience.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "Excellent service and smooth planning. From rafting to sightseeing, everything was managed perfectly.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "We loved the entire trip, especially the camping and Ganga Aarti experience. It was truly memorable.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "Very professional and supportive team. They ensured we had a hassle-free and enjoyable journey.",
            img: cl1
        },
        {
            title: "What Our Clients Say",
            text: "One of the best trips we’ve taken. Great planning, beautiful experiences, and wonderful support throughout.",
            img: cl1
        }
    ],
  
},

// Destination 1: Dubai
{
    img: dubai,
    title: "Dubai",
    heading: "About Dubai",
    description: "Dubai is a modern and luxurious city in the United Arab Emirates, known for its futuristic skyline, world-class shopping, desert adventures, and vibrant lifestyle. It perfectly blends traditional Arabian culture with modern attractions, offering everything from iconic skyscrapers to cultural experiences. Whether you seek luxury, adventure, or relaxation, Dubai provides a unique and unforgettable travel experience.",
    attraction: {
        heading: "Top Attractions in Dubai",
        para: "Explore must-see attractions, iconic landmarks, luxury experiences, desert landscapes, and unforgettable city views.",
        cards: [
            {
                img: dubai1,
                title: "Burj Khalifa",
                description: "Burj Khalifa is the tallest building in the world and a symbol of Dubai's modern architecture. Visitors can go to the observation deck and enjoy breathtaking panoramic views of the city skyline, desert, and ocean from above."
            },
            {
                img: dubai2,
                title: "Dubai Mall",
                description: "Dubai Mall is one of the largest shopping malls in the world, offering not just shopping but entertainment options like an aquarium, ice rink, and dining experiences. It is a complete destination for leisure and fun."
            },
            {
                img: dubai3,
                title: "Palm Jumeirah",
                description: "Palm Jumeirah is a man-made island shaped like a palm tree, known for luxury resorts, beaches, and stunning views. It is one of Dubai's most iconic landmarks and a must-visit for travelers."
            },
            {
                img: dubai4,
                title: "Dubai Marina",
                description: "Dubai Marina is a beautiful waterfront area surrounded by skyscrapers, restaurants, and cafes. Visitors can enjoy boat rides, evening walks, and a lively atmosphere with stunning night views."
            },
            {
                img: dubai5,
                title: "Desert Safari",
                description: "Desert Safari is one of the most exciting experiences in Dubai. It includes dune bashing, camel rides, cultural performances, and a traditional dinner in the desert, offering a glimpse of Arabian culture."
            },
            {
                img: dubai6,
                title: "Burj Al Arab",
                description: "Burj Al Arab is a luxury hotel known for its unique sail-shaped design. It represents Dubai's luxury lifestyle and is one of the most photographed landmarks in the city."
            },
            {
                img: dubai7,
                title: "Dubai Frame",
                description: "Dubai Frame is a unique structure that offers views of both old and new Dubai. It provides an interesting perspective on the city's transformation over the years."
            },
            {
                img: dubai8,
                title: "Jumeirah Beach",
                description: "Jumeirah Beach is a beautiful public beach known for its clean sand and views of the Burj Al Arab. It is perfect for relaxation, swimming, and enjoying the coastal vibe."
            },
            {
                img: dubai9,
                title: "Global Village",
                description: "Global Village is a cultural and entertainment destination where visitors can explore pavilions from different countries, enjoy food, shopping, and live performances in one place."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Dubai",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, luxury experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Go on a Desert Safari Adventure",
                description: "A desert safari is one of the most thrilling experiences in Dubai. It includes dune bashing in SUVs, camel rides, sandboarding, and cultural performances. The evening ends with a traditional dinner under the stars, making it a complete and memorable Arabian experience."
            },
            {
                
                title: "Visit the Top of Burj Khalifa",
                description: "Going to the top of Burj Khalifa offers breathtaking views of Dubai's skyline. Watching the city from such a height, especially during sunset or night, is a unique and unforgettable experience for every traveler."
            },
            {
                
                title: "Enjoy Luxury Shopping and Entertainment",
                description: "Dubai is known for its luxury shopping malls and entertainment options. From high-end brands to indoor attractions, visitors can spend an entire day exploring, shopping, and enjoying activities."
            },
            {
                
                title: "Take a Marina Cruise",
                description: "A cruise in Dubai Marina offers a relaxing experience with stunning views of illuminated skyscrapers. Enjoying dinner on a boat while sailing through the marina creates a romantic and peaceful atmosphere."
            },
            {
                
                title: "Explore Old Dubai and Culture",
                description: "Visiting old Dubai areas like Al Fahidi gives a glimpse of traditional life, culture, and heritage. It is a great way to understand the city beyond its modern image."
            },
            {
                
                title: "Relax at Beaches and Resorts",
                description: "Dubai offers beautiful beaches and luxurious resorts where visitors can relax, swim, and enjoy water activities. It is perfect for unwinding and enjoying a premium vacation experience."
            }
        ]
    },
    testimonials: [
        {
            text: "Our Dubai trip was absolutely amazing! From the desert safari to the Burj Khalifa visit, everything was perfectly arranged and smooth throughout the journey.",
            
        },
        {
            text: "Excellent service and well-planned itinerary. We enjoyed luxury experiences, shopping, and sightseeing without any stress or confusion during the trip.",
            
        },
        {
            text: "Had an amazing family vacation in Dubai. Hotels, transfers, and activities were perfectly managed, making the entire experience comfortable and memorable.",
            
        },
        {
            text: "Very professional team with great attention to detail. Every part of the trip was organized well, and we truly enjoyed every moment.",
            
        },
        {
            text: "One of the best international trips we've had. Great coordination, beautiful experiences, and continuous support made it completely hassle-free and enjoyable.",
            
        }
    ],
  
},

// Destination 2: Thailand
{
    img: thailand,
    title: "Thailand",
    heading: "About Thailand",
    description: "Thailand is one of the most popular travel destinations in Southeast Asia, known for its beautiful beaches, vibrant nightlife, rich culture, and delicious food. From bustling cities like Bangkok to tropical islands like Phuket and Krabi, Thailand offers a perfect mix of relaxation and adventure. Its friendly atmosphere, scenic landscapes, and cultural experiences make it ideal for all types of travelers.",
    attraction: {
        heading: "Top Attractions in Thailand",
        para: "Explore must-see attractions, stunning islands, cultural landmarks, vibrant cities, and unforgettable tropical experiences.",
        cards: [
            {
                img: thailand1,
                title: "Bangkok",
                description: "Bangkok, the capital city, is known for its lively streets, grand temples, and modern lifestyle. Visitors can explore markets, enjoy street food, and visit famous sites like the Grand Palace, making it a vibrant and exciting destination."
            },
            {
                img: thailand2,
                title: "Phuket",
                description: "Phuket is Thailand's largest island, famous for its beautiful beaches and nightlife. It offers a mix of relaxation and entertainment with beach clubs, water sports, and scenic coastal views."
            },
            {
                img: thailand3,
                title: "Krabi",
                description: "Krabi is known for its dramatic limestone cliffs, clear waters, and peaceful beaches. It is perfect for those looking for natural beauty, island hopping, and a calm environment."
            },
            {
                img: thailand4,
                title: "Pattaya",
                description: "Pattaya is a lively coastal city known for its nightlife, beaches, and entertainment. It offers activities like water sports, shows, and vibrant street life."
            },
            {
                img: thailand5,
                title: "Phi Phi Islands",
                description: "The Phi Phi Islands are among the most beautiful islands in the world. Known for crystal-clear water and stunning scenery, they are perfect for snorkeling, swimming, and relaxing."
            },
            {
                img: thailand6,
                title: "Chiang Mai",
                description: "Chiang Mai is a cultural city in northern Thailand known for temples, mountains, and traditional experiences. It offers a peaceful environment and a glimpse into Thai heritage."
            },
            {
                img: thailand7,
                title: "Ayutthaya",
                description: "Ayutthaya is a historic city with ancient ruins and temples. It provides insight into Thailand's history and is a great place for cultural exploration."
            },
            {
                img: thailand8,
                title: "Railay Beach",
                description: "Railay Beach is famous for its scenic beauty and limestone cliffs. Accessible only by boat, it offers a peaceful and unique beach experience."
            },
            {
                img: thailand9,
                title: "Floating Markets",
                description: "Thailand's floating markets are vibrant places where vendors sell goods from boats. It is a unique cultural experience and a great place to try local food."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Thailand",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, cultural experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Island Hopping Tours",
                description: "Island hopping is one of the best experiences in Thailand. Visiting multiple islands in a single day allows you to explore beaches, enjoy swimming, and see stunning landscapes. It is perfect for adventure and relaxation."
            },
            {
                
                title: "Experience Thai Nightlife",
                description: "Thailand is famous for its vibrant nightlife, especially in places like Bangkok and Phuket. From beach parties to nightclubs, there are endless options for entertainment and fun after sunset."
            },
            {
                
                title: "Visit Temples and Cultural Sites",
                description: "Exploring temples like Wat Arun and Wat Phra Kaew gives insight into Thailand's rich culture and traditions. These places are beautiful, peaceful, and culturally significant."
            },
            {
                
                title: "Enjoy Water Activities",
                description: "Thailand offers many water activities like snorkeling, scuba diving, and jet skiing. The clear waters and marine life make it an exciting experience for visitors."
            },
            {
                
                title: "Try Thai Street Food",
                description: "Thai street food is famous worldwide for its flavors and variety. Trying local dishes like Pad Thai, curries, and fresh fruits is a must for every traveler."
            },
            {
                
                title: "Relax with Thai Spa and Massage",
                description: "A traditional Thai massage is a relaxing experience that helps relieve stress. Many spas offer authentic treatments, making it a perfect way to unwind during your trip."
            }
        ]
    },
    testimonials: [
        {
            text: "Our Thailand trip was amazing! From island tours to nightlife, everything was perfectly planned, and we enjoyed every moment without any hassle.",
            
        },
        {
            text: "Great service and smooth arrangements throughout the journey. The itinerary covered all major attractions while still giving us time to relax.",
            
        },
        {
            text: "We had a fantastic experience exploring Thailand. Hotels, transfers, and activities were well-managed, making our trip comfortable and memorable.",
            
        },
        {
            text: "Very professional planning and excellent support. We didn't face any issues and had a stress-free vacation from start to finish.",
            
        },
        {
            text: "One of the best trips we've taken internationally. Perfect coordination, beautiful destinations, and great experiences made it unforgettable.",
            
        }
    ],
  
},

// Destination 3: Vietnam
{
    img: vietnam,
    title: "Vietnam",
    heading: "About Vietnam",
    description: "Vietnam is a beautiful Southeast Asian country known for its stunning landscapes, rich history, vibrant culture, and delicious cuisine. From limestone karsts and beaches to bustling cities and peaceful countryside, Vietnam offers diverse travel experiences. Whether exploring ancient towns or cruising through scenic bays, it provides a perfect mix of adventure, culture, and relaxation.",
    attraction: {
        heading: "Top Attractions in Vietnam",
        para: "Explore must-see attractions, natural wonders, cultural cities, historic sites, and unforgettable scenic experiences.",
        cards: [
            {
                img: vietnam1,
                title: "Hanoi",
                description: "Hanoi, the capital of Vietnam, is known for its old quarters, lakes, and rich history. The city offers a mix of traditional culture and modern life, with bustling streets, street food, and historical landmarks to explore."
            },
            {
                img: vietnam2,
                title: "Halong Bay",
                description: "Halong Bay is one of Vietnam's most famous natural wonders, known for its emerald waters and limestone islands. A cruise through the bay offers breathtaking views and a peaceful experience."
            },
            {
                img: vietnam3,
                title: "Ho Chi Minh City",
                description: "This vibrant city, formerly Saigon, is known for its energy, markets, and history. Visitors can explore museums, try local food, and experience the fast-paced lifestyle of southern Vietnam."
            },
            {
                img: vietnam4,
                title: "Hoi An",
                description: "Hoi An is a charming ancient town known for its lantern-lit streets, riverside cafes, and well-preserved architecture. It offers a peaceful and romantic atmosphere."
            },
            {
                img: vietnam5,
                title: "Da Nang",
                description: "Da Nang is a coastal city known for its beaches, modern bridges, and scenic views. It serves as a gateway to many attractions and offers a relaxed yet lively environment."
            },
            {
                img: vietnam6,
                title: "Sapa",
                description: "Sapa is a mountain region known for its terraced rice fields and ethnic villages. It is perfect for trekking and experiencing local culture."
            },
            {
                img: vietnam7,
                title: "Mekong Delta",
                description: "The Mekong Delta is famous for its rivers, floating markets, and rural life. It offers a unique experience of exploring waterways and traditional villages."
            },
            {
                img: vietnam8,
                title: "Phu Quoc Island",
                description: "Phu Quoc is a tropical island known for its white-sand beaches and clear waters. It is ideal for relaxation and beach activities."
            },
            {
                img: vietnam9,
                title: "Hue",
                description: "Hue is a historic city known for its imperial architecture, temples, and royal heritage. It offers insight into Vietnam's past and culture."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Vietnam",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, cultural experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Cruise in Halong Bay",
                description: "A cruise in Halong Bay is one of the best experiences in Vietnam. Sailing through limestone islands, enjoying scenic views, and relaxing on the water create unforgettable memories for travelers."
            },
            {
                
                title: "Explore Ancient Towns",
                description: "Walking through places like Hoi An allows you to experience traditional architecture, local markets, and a peaceful environment. The lantern-lit streets make it even more special."
            },
            {
                
                title: "Try Vietnamese Cuisine",
                description: "Vietnamese food is known for its fresh ingredients and unique flavors. Dishes like pho, banh mi, and spring rolls are a must-try for every visitor."
            },
            {
                
                title: "Trek in Sapa",
                description: "Trekking in Sapa offers stunning views of rice fields and mountains. It is a great way to explore nature and experience local village life."
            },
            {
                
                title: "Visit Historical Sites",
                description: "Vietnam has many historic places that reflect its past. Exploring these sites gives insight into the country's culture and history."
            },
            {
                
                title: "Experience Local Markets and Culture",
                description: "Visiting markets and interacting with locals helps you understand daily life and traditions. It adds a cultural touch to your travel experience."
            }
        ]
    },
    testimonials: [
        {
            text: "Our Vietnam trip was truly amazing! The Halong Bay cruise and cultural experiences were unforgettable, and everything was planned perfectly.",
            
        },
        {
            text: "Excellent service and smooth travel arrangements. We explored multiple cities comfortably and enjoyed every part of the journey.",
            
        },
        {
            text: "We loved the mix of culture and nature in Vietnam. The itinerary was well-designed and allowed us to enjoy without any rush.",
            
        },
        {
            text: "Very professional team with great coordination. From hotels to transfers, everything was managed seamlessly.",
            
        },
        {
            text: "One of the most memorable trips we've had. Beautiful destinations, great planning, and constant support made it a perfect experience.",
            
        }
    ],
  
},

// Destination 4: Maldives
{
    img: maldive,
    title: "Maldives",
    heading: "About Maldives",
    description: "The Maldives is a tropical paradise in the Indian Ocean, known for its crystal-clear waters, white sandy beaches, luxury resorts, and overwater villas. It is one of the most sought-after destinations for honeymooners and luxury travelers. With its peaceful environment, vibrant marine life, and stunning sunsets, the Maldives offers a perfect escape for relaxation and unforgettable experiences.",
    attraction: {
        heading: "Top Attractions in Maldives",
        para: "Explore must-see attractions, luxury resorts, coral islands, marine life, and breathtaking ocean views.",
        cards: [
            {
                img: maldive1 ,
                title: "Male City",
                description: "Male is the capital of the Maldives and offers a glimpse into local life and culture. Visitors can explore markets, mosques, and museums while experiencing the city's vibrant atmosphere."
            },
            {
                img: maldive2 ,
                title: "Maafushi Island",
                description: "Maafushi is a popular local island known for budget-friendly stays and beautiful beaches. It offers a mix of relaxation and water activities, making it ideal for all types of travelers."
            },
            {
                img: maldive3 ,
                title: "Banana Reef",
                description: "Banana Reef is one of the most famous diving spots in the Maldives. Known for its vibrant coral reefs and marine life, it is perfect for snorkeling and scuba diving."
            },
            {
                img: maldive4 ,
                title: "Hulhumale Island",
                description: "Hulhumale is a man-made island known for its clean beaches and modern infrastructure. It offers a peaceful environment close to the capital."
            },
            {
                img: maldive5 ,
                title: "Vaadhoo Island (Bioluminescent Beach)",
                description: "Vaadhoo Island is famous for its glowing beach, where the water lights up at night due to bioluminescent plankton. It is a magical and unique experience."
            },
            {
                img: maldive6 ,
                title: "Sun Island",
                description: "Sun Island is known for its luxury resorts and scenic beauty. It offers beautiful beaches, clear water, and premium experiences."
            },
            {
                img: maldive7 ,
                title: "Alimatha Island",
                description: "Alimatha Island is popular for its water sports and diving experiences. It is perfect for adventure lovers and those looking to explore marine life."
            },
            {
                img: maldive8 ,
                title: "Baros Island",
                description: "Baros Island is a luxury destination known for its overwater villas and private experiences. It is ideal for honeymooners and couples."
            },
            {
                img: maldive9 ,
                title: "Fihalhohi Island",
                description: "Fihalhohi Island is known for its natural beauty and peaceful environment. It offers a relaxing experience with beautiful beaches and clear waters."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Maldives",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, luxury experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Stay in an Overwater Villa",
                description: "Staying in an overwater villa is one of the most iconic experiences in the Maldives. These villas offer direct access to the ocean, stunning views, and complete privacy, making it perfect for relaxation and luxury."
            },
            {
                
                title: "Try Scuba Diving and Snorkeling",
                description: "The Maldives is famous for its rich marine life and coral reefs. Scuba diving and snorkeling allow you to explore underwater beauty, colorful fish, and clear waters, creating unforgettable memories."
            },
            {
                
                title: "Enjoy Sunset Cruises",
                description: "A sunset cruise in the Maldives offers breathtaking views of the ocean and sky. It is a peaceful and romantic experience, perfect for couples and those looking to relax."
            },
            {
                
                title: "Relax on Private Beaches",
                description: "The Maldives offers some of the most beautiful and clean beaches in the world. Relaxing on soft white sand and enjoying the calm ocean is a perfect way to unwind."
            },
            {
                
                title: "Experience Water Sports",
                description: "From jet skiing to kayaking, the Maldives offers a range of water activities. These add excitement and adventure to your trip while enjoying the ocean."
            },
            {
                
                title: "Indulge in Luxury Spa Treatments",
                description: "Many resorts in the Maldives offer world-class spa experiences. Relaxing with ocean views and traditional therapies helps you rejuvenate and enjoy a peaceful holiday."
            }
        ]
    },
    testimonials: [
        {
            text: "Our Maldives trip was like a dream come true! The resort, views, and overall experience were beyond expectations, and everything was perfectly arranged.",
            
        },
        {
            text: "Excellent planning and seamless execution. From transfers to resort stays, everything was smooth and stress-free throughout the journey.",
            
        },
        {
            text: "We had an unforgettable honeymoon in the Maldives. The overwater villa experience and services were absolutely amazing.",
            
        },
        {
            text: "Very professional service with great attention to detail. Every moment of our trip was well-managed and enjoyable.",
            
        },
        {
            text: "One of the most luxurious and relaxing trips we've had. Perfect coordination and beautiful experiences made it truly special.",
            
        }
    ],
  
},

// Destination 5: Hong Kong
{
    img: hong,
    title: "Hong Kong",
    heading: "About Hong Kong",
    description: "Hong Kong is a vibrant international city known for its stunning skyline, bustling markets, modern lifestyle, and rich cultural heritage. It offers a unique blend of Eastern and Western influences, combining tradition with innovation. From shopping and theme parks to scenic harbors and mountains, Hong Kong provides a dynamic and unforgettable travel experience for every type of traveler.",
    attraction: {
        heading: "Top Attractions in Hong Kong",
        para: "Explore must-see attractions, iconic skyline views, theme parks, cultural landmarks, and unforgettable city experiences.",
        cards: [
            {
                img: hong1,
                title: "Victoria Peak",
                description: "Victoria Peak offers the most stunning panoramic views of Hong Kong's skyline and harbor. Visitors can take the Peak Tram to reach the top and enjoy breathtaking views, especially during sunset and nighttime."
            },
            {
                img: hong2,
                title: "Hong Kong Disneyland",
                description: "Hong Kong Disneyland is a magical theme park perfect for families and Disney lovers. It offers exciting rides, shows, and attractions, creating a fun-filled experience for visitors of all ages."
            },
            {
                img: hong3  ,
                title: "Victoria Harbour",
                description: "Victoria Harbour is famous for its beautiful skyline views and evening light shows. A cruise or ferry ride here offers a relaxing way to enjoy the city's beauty."
            },
            {
                img: hong4,
                title: "Ngong Ping 360 & Big Buddha",
                description: "The Ngong Ping 360 cable car ride offers scenic views of mountains and the sea. It leads to the Big Buddha, a peaceful and spiritual attraction that draws visitors from around the world."
            },
            {
                img: hong5,
                title: "Ocean Park",
                description: "Ocean Park is a popular theme park combining rides, marine life, and entertainment. It offers both fun and educational experiences for visitors."
            },
            {
                img: hong6,
                title: "Tsim Sha Tsui Promenade",
                description: "This waterfront promenade offers stunning views of the skyline and is a perfect place for evening walks and photography."
            },
            {
                img: hong7,
                title: "Ladies Market",
                description: "Ladies Market is a vibrant street market known for shopping clothes, accessories, and souvenirs. It is a great place to experience local culture and bargaining."
            },
            {
                img: hong8,
                title: "Tian Tan Buddha",
                description: "The Tian Tan Buddha is a massive bronze statue symbolizing peace and spirituality. It is one of the most iconic landmarks in Hong Kong."
            },
            {
                img: hong9,
                title: "Lantau Island",
                description: "Lantau Island offers a mix of nature, beaches, and attractions. It is perfect for those looking to explore beyond the city."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Hong Kong",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, cultural experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Enjoy the Skyline from Victoria Peak",
                description: "Visiting Victoria Peak is one of the best experiences in Hong Kong. The view of skyscrapers, the harbor, and city lights is breathtaking, especially at night, making it a must-visit for every traveler."
            },
            {
                
                title: "Visit Theme Parks",
                description: "Hong Kong offers world-class theme parks like Disneyland and Ocean Park. These parks provide thrilling rides, entertainment, and fun experiences for families, couples, and friends."
            },
            {
                
                title: "Take a Harbour Cruise",
                description: "A cruise in Victoria Harbour is a relaxing way to enjoy the city's skyline. The evening light show adds to the beauty, making it a memorable experience."
            },
            {
                
                title: "Explore Local Markets",
                description: "Shopping in Hong Kong's street markets is a unique experience. You can find trendy items, souvenirs, and local goods while enjoying the lively atmosphere."
            },
            {
                
                title: "Experience Cable Car Ride",
                description: "The Ngong Ping cable car ride offers stunning aerial views of mountains and sea. It is both exciting and scenic, making it a must-do activity."
            },
            {
                
                title: "Try Local Cuisine",
                description: "Hong Kong is famous for its delicious food. Trying local dishes like dim sum and street food adds a flavorful touch to your trip."
            }
        ]
    },
    testimonials: [
        {
            text: "Our Hong Kong trip was fantastic! From Disneyland to skyline views, everything was perfectly planned, and we had a great time exploring the city.",
            
        },
        {
            text: "Excellent service and smooth arrangements throughout the trip. The itinerary was well-balanced and covered all major attractions comfortably.",
            
        },
        {
            text: "We loved the mix of modern attractions and cultural experiences. Everything was well-managed, making our journey stress-free and enjoyable.",
            
        },
        {
            text: "Very professional team with great coordination. Hotels, transfers, and activities were all arranged perfectly.",
            
        },
        {
            text: "One of the most exciting trips we've had. Great planning, amazing experiences, and continuous support made it unforgettable.",
            
        }
    ],
  
},

// Destination 6: China
{
    img: china,
    title: "China",
    heading: "About China",
    description: "China is a vast and diverse country known for its ancient history, rich culture, modern cities, and iconic landmarks. From the Great Wall to futuristic skylines, it offers a unique blend of tradition and innovation. With its beautiful landscapes, historic sites, and vibrant lifestyle, China provides an unforgettable travel experience for every kind of traveler.",
    attraction: {
        heading: "Top Attractions in China",
        para: "Explore must-see attractions, historic landmarks, cultural sites, modern cities, and breathtaking landscapes.",
        cards: [
            {
                img: china1,
                title: "Great Wall of China",
                description: "The Great Wall is one of the most famous landmarks in the world. Stretching across mountains, it offers stunning views and a glimpse into China's ancient history. Walking on the wall is a truly memorable experience."
            },
            {
                img: china2,
                title: "Beijing (Forbidden City)",
                description: "The Forbidden City in Beijing is a historic palace complex that served as the home of emperors. It showcases traditional Chinese architecture and rich cultural heritage."
            },
            {
                img: china3,
                title: "Shanghai Skyline",
                description: "Shanghai is a modern city known for its impressive skyline and skyscrapers. The view from the Bund area is especially beautiful at night, showing the city's vibrant lifestyle."
            },
            {
                img: china4,
                title: "Terracotta Army (Xi'an)",
                description: "The Terracotta Army is a collection of life-sized statues built to protect an emperor in the afterlife. It is a fascinating historical site and a must-visit in China."
            },
            {
                img: china5,
                title: "Zhangjiajie National Forest Park",
                description: "This park is known for its unique pillar-like mountains and scenic beauty. It inspired landscapes seen in movies and offers breathtaking views."
            },
            {
                img: china6,
                title: "Guilin & Li River",
                description: "Guilin is famous for its karst mountains and beautiful river landscapes. A cruise on the Li River offers peaceful and scenic views."
            },
            {
                img: china7,
                title: "Chengdu (Giant Pandas)",
                description: "Chengdu is known for its panda research centers, where visitors can see giant pandas. It is a favorite destination for wildlife lovers."
            },
            {
                img: china8,
                title: "Potala Palace (Tibet)",
                description: "Potala Palace is a stunning structure located in Lhasa. It reflects Tibetan culture and offers breathtaking architecture and views."
            },
            {
                img: china9,
                title: "West Lake (Hangzhou)",
                description: "West Lake is a peaceful destination surrounded by gardens, temples, and hills. It is perfect for relaxation and scenic walks."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in China",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, cultural experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Walk on the Great Wall",
                description: "Walking along the Great Wall is a once-in-a-lifetime experience. The scenic views, history, and scale of the wall make it truly unforgettable for visitors."
            },
            {
                
                title: "Explore Ancient Palaces and History",
                description: "China has many historic palaces, temples, and cities. Exploring these places gives insight into its rich history and culture."
            },
            {
                
                title: "Enjoy Modern City Life",
                description: "Cities like Shanghai and Beijing offer a modern lifestyle with shopping, dining, and entertainment. Experiencing this side of China adds variety to your trip."
            },
            {
                
                title: "Take Scenic River Cruises",
                description: "Cruising through places like the Li River allows you to enjoy peaceful landscapes and natural beauty. It is a relaxing and scenic experience."
            },
            {
                
                title: "Visit Cultural and Natural Sites",
                description: "From mountains to temples, China offers diverse attractions. Visiting these places gives a complete travel experience."
            },
            {
                
                title: "Try Authentic Chinese Cuisine",
                description: "Chinese food is famous worldwide, but trying authentic local dishes in China is a unique experience. Each region offers different flavors and specialties."
            }
        ]
    },
    testimonials: [
        {
            text: "Our China trip was incredible! From the Great Wall to modern cities, everything was well-planned and we enjoyed every moment of the journey.",
            
        },
        {
            text: "Excellent service and smooth coordination throughout the trip. The itinerary covered both historical and modern attractions perfectly.",
            
        },
        {
            text: "We had a wonderful experience exploring China. Hotels, transfers, and sightseeing were all arranged professionally.",
            
        },
        {
            text: "Very well-organized trip with great attention to detail. We didn't face any issues and had a stress-free vacation.",
            
        },
        {
            text: "One of the most enriching travel experiences we've had. Great planning, beautiful places, and constant support made it memorable.",
            
        }
    ],
  
},

// Destination 7: Abu Dhabi
{
    img: abudhabi,
    title: "Abu Dhabi",
    heading: "About Abu Dhabi",
    description: "Abu Dhabi, the capital of the United Arab Emirates, is known for its luxurious lifestyle, cultural landmarks, modern architecture, and peaceful beaches. It offers a perfect blend of tradition and innovation, with grand mosques, world-class attractions, and scenic waterfronts. Whether you seek culture, relaxation, or adventure, Abu Dhabi provides a refined and memorable travel experience.",
    attraction: {
        heading: "Top Attractions in Abu Dhabi",
        para: "Explore must-see attractions, cultural landmarks, luxury experiences, scenic beaches, and modern architectural wonders.",
        cards: [
            {
                img: abudhabi1,
                title: "Sheikh Zayed Grand Mosque",
                description: "This is one of the most beautiful mosques in the world, known for its stunning white marble structure and intricate design. It offers a peaceful atmosphere and reflects Islamic architecture at its finest."
            },
            {
                img: abudhabi2,
                title: "Louvre Abu Dhabi",
                description: "Louvre Abu Dhabi is a world-class museum showcasing art and history from around the globe. Its unique architecture and diverse collections make it a must-visit for culture lovers."
            },
            {
                img: abudhabi3,
                title: "Ferrari World",
                description: "Ferrari World is a famous theme park offering thrilling rides, including the world's fastest roller coaster. It is perfect for adventure lovers and families."
            },
            {
                img: abudhabi4,
                title: "Yas Island",
                description: "Yas Island is a major entertainment hub featuring theme parks, shopping malls, beaches, and racing circuits. It offers fun and excitement for all age groups."
            },
            {
                img: abudhabi5,
                title: "Corniche Beach",
                description: "Corniche Beach is a clean and beautiful beach offering scenic views and relaxing surroundings. It is perfect for walking, swimming, and enjoying the city's skyline."
            },
            {
                img: abudhabi6,
                title: "Emirates Palace",
                description: "Emirates Palace is a luxurious hotel known for its grand architecture and opulence. Even visiting it gives a glimpse of Abu Dhabi's luxury lifestyle."
            },
            {
                img: abudhabi7,
                title: "Qasr Al Watan",
                description: "Qasr Al Watan is a magnificent presidential palace that showcases Arabian heritage, architecture, and culture. It offers an enriching and visually stunning experience."
            },
            {
                img: abudhabi8,
                title: "Saadiyat Island",
                description: "Saadiyat Island is known for its beautiful beaches and cultural attractions. It is perfect for relaxation and enjoying a peaceful environment."
            },
            {
                img: abudhabi9,
                title: "Warner Bros. World",
                description: "This indoor theme park offers fun rides and attractions based on popular characters. It is a great place for families and entertainment."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Abu Dhabi",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, cultural experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Visit Sheikh Zayed Grand Mosque",
                description: "Exploring this grand mosque is a peaceful and enriching experience. Its stunning architecture, detailed design, and calm atmosphere make it one of the most memorable highlights of Abu Dhabi."
            },
            {
                
                title: "Enjoy Theme Parks on Yas Island",
                description: "Yas Island offers exciting theme parks like Ferrari World and Warner Bros. World. It is perfect for thrill seekers and families looking for entertainment and fun."
            },
            {
                
                title: "Explore Cultural Attractions",
                description: "Abu Dhabi is rich in culture with places like Louvre Abu Dhabi and Qasr Al Watan. Visiting these sites helps you understand the region's history and heritage."
            },
            {
                
                title: "Relax at Beaches",
                description: "The city offers beautiful beaches where you can relax, swim, and enjoy scenic views. It is a perfect way to unwind during your trip."
            },
            {
                
                title: "Experience Luxury and Fine Dining",
                description: "Abu Dhabi is known for its luxury experiences, from high-end hotels to fine dining. Enjoying these adds a premium touch to your vacation."
            },
            {
                
                title: "Take a City Tour",
                description: "A city tour allows you to explore major attractions, modern architecture, and cultural sites in a comfortable and organized way, giving a complete overview of Abu Dhabi."
            }
        ]
    },
    testimonials: [
        {
            text: "Our Abu Dhabi trip was amazing! The mosque, theme parks, and overall experience were perfectly planned, making our journey smooth and enjoyable.",
            
        },
        {
            text: "Excellent service and well-organized itinerary. We explored all major attractions comfortably without any hassle during the trip.",
            
        },
        {
            text: "We had a fantastic time with great hotel stays and smooth transfers. Everything was arranged perfectly from start to end.",
            
        },
        {
            text: "Very professional team with great support throughout. The trip was stress-free and truly memorable.",
            
        },
        {
            text: "One of the best travel experiences we've had. Great coordination, beautiful places, and excellent service made it unforgettable.",
            
        }
    ],
  
},
// Destination 1: Turkey
{
    img: turkey,
    title: "Turkey",
    heading: "About Turkey",
    description: "Turkey is a beautiful country that connects Europe and Asia, known for its rich history, stunning landscapes, vibrant culture, and unique architecture. From ancient ruins and grand mosques to scenic coastlines and hot air balloon rides, Turkey offers diverse experiences. Whether exploring historical sites or enjoying modern cities, it provides a perfect blend of culture, adventure, and relaxation.",
    attraction: {
        heading: "Top Attractions in Turkey",
        para: "Explore must-see attractions, historic landmarks, cultural cities, scenic landscapes, and unforgettable experiences.",
        cards: [
            {
                img: turkey1,
                title: "Istanbul (Hagia Sophia & Blue Mosque)",
                description: "Istanbul is Turkey's most famous city, known for its historic sites like Hagia Sophia and the Blue Mosque. It offers a mix of history, culture, and modern lifestyle with beautiful architecture and vibrant markets."
            },
            {
                img: turkey2,
                title: "Cappadocia",
                description: "Cappadocia is famous for its unique rock formations and hot air balloon rides. The landscape looks magical, especially during sunrise when balloons fill the sky."
            },
            {
                img: turkey3,
                title: "Pamukkale",
                description: "Pamukkale is known for its white thermal terraces and natural pools. It is a unique natural wonder where visitors can walk and relax in warm mineral-rich waters."
            },
            {
                img: turkey4,
                title: "Ephesus",
                description: "Ephesus is an ancient city with well-preserved ruins, including temples and theaters. It offers a glimpse into ancient Roman life and history."
            },
            {
                img: turkey5,
                title: "Antalya",
                description: "Antalya is a coastal city known for its beautiful beaches and resorts. It offers a perfect mix of relaxation and scenic beauty."
            },
            {
                img: turkey6,
                title: "Bodrum",
                description: "Bodrum is famous for its beaches, nightlife, and luxury lifestyle. It is a popular destination for travelers looking for fun and relaxation."
            },
            {
                img: turkey7,
                title: "Troy",
                description: "Troy is a historic city known from ancient stories and legends. Visiting this site gives insight into its mythological and historical significance."
            },
            {
                img: turkey8,
                title: "Bursa",
                description: "Bursa is known for its Ottoman architecture and natural beauty. It offers a peaceful environment with mountains and cultural sites."
            },
            {
                img: turkey9,
                title: "Mount Ararat",
                description:"Mount Ararat is the highest peak in Turkey and offers stunning views. It is a great destination for trekking and adventure lovers."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Turkey",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, cultural experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Take a Hot Air Balloon Ride in Cappadocia",
                description: "A hot air balloon ride over Cappadocia is one of the most iconic experiences in Turkey. Watching the sunrise while floating over unique landscapes creates a magical and unforgettable moment for travelers."
            },
            {
                
                title: "Explore Historical Sites and Ruins",
                description: "Turkey is rich in history with ancient cities, mosques, and ruins. Visiting these places allows you to learn about different civilizations and enjoy beautiful architecture."
            },
            {
                
                title: "Relax in Thermal Pools of Pamukkale",
                description: "Walking on the white terraces and soaking in warm mineral waters is a unique and relaxing experience. It is both refreshing and scenic."
            },
            {
                
                title: "Enjoy Turkish Cuisine",
                description: "Turkish food is known for its rich flavors and variety. Trying dishes like kebabs, baklava, and local specialties adds a cultural touch to your journey."
            },
            {
                
                title: "Experience Local Markets (Bazaars)",
                description: "Exploring traditional bazaars is a lively experience. You can shop for souvenirs, spices, and handicrafts while enjoying the vibrant atmosphere."
            },
            {
                
                title: "Cruise Along the Coastline",
                description: "A boat cruise along Turkey's coastline offers beautiful views of beaches and landscapes. It is a relaxing and enjoyable experience."
            }
        ]
    },
    testimonials: [
        {
            text: "Our Turkey trip was truly magical! From Cappadocia balloons to Istanbul sightseeing, everything was perfectly arranged and memorable.",
            
        },
        {
            text: "Excellent service and smooth planning. The itinerary covered all major attractions while allowing us to enjoy each destination comfortably.",
            
        },
        {
            text: "We had an amazing experience exploring Turkey. Hotels, transfers, and tours were well-managed and hassle-free.",
            
        },
        {
            text: "Very professional and supportive team. The entire trip was organized perfectly, making it stress-free and enjoyable.",
            
        },
        {
            text: "One of the best international trips we've taken. Great coordination, beautiful experiences, and constant support made it unforgettable.",
            
        }
    ],
  
}
,
// Destination 2: Switzerland
{
    img: switzerland,
    title: "Switzerland",
    heading: "About Switzerland",
    description: "Switzerland is a stunning European destination known for its snow-capped mountains, scenic lakes, charming villages, and luxurious lifestyle. Famous for the Swiss Alps and breathtaking landscapes, it offers a perfect blend of natural beauty and modern comfort. Whether it's adventure, relaxation, or sightseeing, Switzerland provides a peaceful and unforgettable travel experience.",
    attraction: {
        heading: "Top Attractions in Switzerland",
        para: "Explore must-see attractions, alpine landscapes, scenic towns, beautiful lakes, and unforgettable mountain experiences.",
        cards: [
            {
                img: switzerland1,
                title: "Zermatt & Matterhorn",
                description: "Zermatt is a picturesque mountain village known for the iconic Matterhorn peak. It offers stunning views, skiing opportunities, and a peaceful environment free from cars, making it a perfect alpine destination."
            },
            {
                img: switzerland2,
                title: "Jungfraujoch (Top of Europe)",
                description: "Jungfraujoch is one of the highest railway stations in Europe, offering breathtaking views of glaciers and mountains. It is a must-visit for snow experiences and scenic beauty."
            },
            {
                img: switzerland3,
                title: "Lucerne",
                description: "Lucerne is a charming city known for its lake, wooden bridges, and mountain views. It offers a mix of natural beauty and cultural attractions."
            },
            {
                img: switzerland4,
                title: "Interlaken",
                description: "Interlaken is a popular adventure destination located between two lakes. It is known for activities like paragliding, skydiving, and scenic views."
            },
            {
                img: switzerland5,
                title: "Lake Geneva",
                description: "Lake Geneva is a beautiful lake surrounded by mountains and cities. It offers peaceful views, boat rides, and a relaxing environment."
            },
            {
                img: switzerland6,
                title:"Montreux",
                description:"Montreux is a scenic town located on the shores of Lake Geneva. It is known for its beautiful surroundings and cultural attractions."
            },
            {
                img: switzerland7,
                title: "Bern (Old Town)",
                description: "Bern, the capital of Switzerland, has a well-preserved old town with historic buildings, fountains, and streets that reflect medieval charm."
            },
            {
                img: switzerland8,
                title: "St. Moritz",
                description: "St. Moritz is a luxury resort town known for skiing, winter sports, and high-end experiences. It is perfect for those looking for a premium holiday."
            },
            {
                img: switzerland9,
                title: "Rhine Falls",
                description: "Rhine Falls is the largest waterfall in Europe, offering powerful views and boat rides close to the falls. It is a great natural attraction."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Switzerland",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, scenic experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Enjoy Scenic Train Journeys",
                description: "Switzerland is famous for its panoramic train routes. Traveling through mountains, lakes, and valleys offers breathtaking views and a relaxing experience, making the journey itself unforgettable."
            },
            {
                
                title: "Visit Jungfraujoch for Snow Experience",
                description: "Visiting Jungfraujoch allows you to experience snow all year round. The views of glaciers and mountains create a magical environment for travelers."
            },
            {
                
                title: "Try Adventure Activities in Interlaken",
                description: "Interlaken offers thrilling activities like paragliding, skydiving, and rafting. It is perfect for adventure lovers seeking excitement."
            },
            {
                
                title: "Explore Lakes and Boat Rides",
                description: "Switzerland's lakes offer peaceful and scenic experiences. Boat rides on lakes like Geneva and Lucerne are relaxing and beautiful."
            },
            {
                
                title: "Walk Through Charming Villages",
                description: "Exploring small Swiss villages gives you a glimpse of local life and stunning surroundings. It is perfect for peaceful walks and photography."
            },
            {
                
                title: "Enjoy Swiss Cuisine and Chocolates",
                description: "Trying Swiss chocolates, cheese, and local dishes is a must. The food adds a delightful experience to your trip."
            }
        ]
    },
    testimonials: [
        {
            text: "Our Switzerland trip was breathtaking! The views, train journeys, and overall experience were perfectly planned and truly unforgettable.",
            
        },
        {
            text: "Excellent service and smooth arrangements. We enjoyed every destination comfortably without any stress during the trip.",
            
        },
        {
            text: "We had an amazing time exploring Switzerland. Hotels, travel, and activities were all perfectly managed.",
            
        },
        {
            text: "Very professional planning with great support. The entire journey was seamless and enjoyable.",
            
        },
        {
            text: "One of the most beautiful trips we've taken. Perfect coordination and stunning experiences made it memorable.",
            
        }
    ],
  
},

// Destination 3: Almaty
{
    img: almaty,
    title: "Almaty",
    heading: "About Almaty",
    description: "Almaty is the largest city in Kazakhstan, known for its stunning mountain backdrop, modern lifestyle, and natural beauty. Surrounded by the Trans-Ili Alatau mountains, it offers a perfect mix of scenic landscapes, cultural attractions, and urban charm. From lakes and ski resorts to vibrant streets and cafes, Almaty is ideal for both relaxation and adventure.",
    attraction: {
        heading: "Top Attractions in Almaty",
        para: "Explore must-see attractions, mountain landscapes, scenic lakes, cultural landmarks, and unforgettable experiences.",
        cards: [
            {
                img: almaty1,
                title: "Big Almaty Lake",
                description: "Big Almaty Lake is a beautiful turquoise lake surrounded by mountains. It is known for its changing colors and peaceful environment, making it a perfect spot for nature lovers and photography."
            },
            {
                img: almaty2,
                title: "Shymbulak Ski Resort",
                description: "Shymbulak is a popular ski resort offering skiing, snowboarding, and cable car rides. It also provides stunning mountain views throughout the year."
            },
            {
                img: almaty3,
                title: "Kok Tobe Hill",
                description: "Kok Tobe Hill offers panoramic views of Almaty city. Visitors can reach the top by cable car and enjoy entertainment, cafes, and scenic surroundings."
            },
            {
                img: almaty4,
                title: "Medeu Ice Skating Rink",
                description: "Medeu is one of the highest ice skating rinks in the world. It is surrounded by mountains and offers a unique experience for visitors."
            },
            {
                img: almaty5,
                title: "Zenkov Cathedral",
                description: "Zenkov Cathedral is a beautiful wooden church known for its colorful design and unique architecture. It is one of the main cultural landmarks in Almaty."
            },
            {
                img: almaty6,
                title: "Green Bazaar",
                description: "Green Bazaar is a lively market where visitors can experience local culture, buy fresh produce, and try traditional foods."
            },
            {
                img: almaty7,
                title: "Almaty Central Park",
                description: "This park is a great place to relax, walk, and enjoy outdoor activities. It offers greenery and a peaceful environment in the city."
            },
            {
                img: almaty8,
                title: "Kaindy Lake",
                description: "Kaindy Lake is famous for its submerged forest, where tree trunks rise out of the water. It is a unique and scenic attraction."
            },
            {
                img: almaty9,
                title: "Charyn Canyon",
                description: "Charyn Canyon is often compared to the Grand Canyon. It offers dramatic landscapes, rock formations, and a great experience for adventure lovers."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Almaty",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, scenic experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Take a Cable Car Ride to Kok Tobe",
                description: "The cable car ride to Kok Tobe offers stunning views of the city and mountains. It is a relaxing and scenic experience, especially during sunset or evening."
            },
            {
                
                title: "Visit Big Almaty Lake",
                description: "Spending time at Big Almaty Lake allows you to enjoy peaceful surroundings and breathtaking views. It is perfect for relaxation and photography."
            },
            {
                
                title: "Enjoy Skiing at Shymbulak",
                description: "Shymbulak offers great opportunities for skiing and snow activities. It is ideal for both beginners and experienced visitors looking for adventure."
            },
            {
                
                title: "Explore Charyn Canyon",
                description: "Visiting Charyn Canyon offers a unique experience of exploring dramatic rock formations and landscapes. It is perfect for trekking and sightseeing."
            },
            {
                
                title: "Experience Local Culture and Markets",
                description: "Visiting places like Green Bazaar allows you to explore local food, traditions, and daily life, adding a cultural touch to your trip."
            },
            {
                
                title: "Relax in Parks and Scenic Spots",
                description: "Almaty has many parks and natural spots where visitors can relax and enjoy the fresh air. It is perfect for unwinding and enjoying nature."
            }
        ]
    },
    testimonials: [
        {
            text: "Our Almaty trip was absolutely beautiful! The mountains, lakes, and overall experience were perfectly planned and unforgettable.",
            
        },
        {
            text: "Excellent service and smooth arrangements throughout the trip. We enjoyed every location comfortably without any hassle.",
            
        },
        {
            text: "We had a great time exploring Almaty. Hotels, transport, and sightseeing were all well-managed and stress-free.",
            
        },
        {
            text: "Very professional team with great coordination. Everything was arranged perfectly, making our journey enjoyable.",
            
        },
        {
            text: "One of the most scenic trips we've had. Great planning and amazing experiences made it truly memorable.",
            
        }
    ],
  
},

// Destination 4: Georgia
{
    img: georgia,
    title: "Georgia",
    heading: "About Georgia",
    description: "Georgia is a beautiful country located at the crossroads of Europe and Asia, known for its stunning mountains, charming cities, rich history, and warm hospitality. From the vibrant capital Tbilisi to scenic landscapes and ancient monasteries, Georgia offers a perfect mix of culture and nature. It is an ideal destination for travelers seeking unique experiences and breathtaking views.",
    attraction: {
        heading: "Top Attractions in Georgia",
        para: "Explore must-see attractions, historic towns, mountain landscapes, cultural sites, and unforgettable scenic experiences.",
        cards: [
            {
                img: georgia1,
                title: "Tbilisi",
                description: "Tbilisi, the capital city, is known for its colorful houses, historic architecture, and lively atmosphere. Visitors can explore old streets, cafes, and cultural landmarks while enjoying a mix of tradition and modern life."
            },
            {
                img: georgia2,
                title: "Kazbegi (Stepantsminda)",
                description: "Kazbegi is a mountain region famous for its breathtaking views and the Gergeti Trinity Church. Surrounded by snow-capped peaks, it is perfect for nature lovers and photography."
            },
            {
                img: georgia3,
                title: "Batumi",
                description: "Batumi is a coastal city on the Black Sea, known for its beaches, modern architecture, and nightlife. It offers a relaxing yet lively environment."
            },
            {
                img: georgia4,
                title: "Gudauri",
                description: "Gudauri is a popular ski resort known for snow activities and scenic mountain views. It is ideal for adventure lovers."
            },
            {
                img: georgia5,
                title: "Uplistsikhe",
                description: "Uplistsikhe is an ancient rock-hewn town that showcases Georgia's early history. It offers a unique and interesting exploration experience."
            },
            {
                img: georgia6,
                title: "Mtskheta",
                description: "Mtskheta is one of Georgia's oldest cities and a UNESCO World Heritage site. It is known for its religious and historical importance."
            },
            {
                img: georgia7,
                title: "Kakheti (Wine Region)",
                description: "Kakheti is famous for its vineyards and wine production. It is a great place to explore local traditions and enjoy scenic landscapes."
            },
            {
                img: georgia8,
                title: "Borjomi",
                description: "Borjomi is known for its mineral water and natural beauty. It offers a peaceful environment with parks and forests."
            },
            {
                img: georgia9,
                title: "Ananuri Fortress",
                description: "Ananuri Fortress is a historic site located near a scenic lake. It offers beautiful views and a glimpse into Georgia's past."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Georgia",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, cultural experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Explore Tbilisi Old Town",
                description: "Walking through Tbilisi's old town allows you to experience colorful streets, traditional houses, and local culture. It is a perfect blend of history and modern life."
            },
            {
                
                title: "Visit Kazbegi Mountains",
                description: "A trip to Kazbegi offers breathtaking views of mountains and peaceful surroundings. It is ideal for nature lovers and those looking to relax."
            },
            {
                
                title: "Enjoy Skiing in Gudauri",
                description: "Gudauri is perfect for skiing and snow activities during winter. It offers thrilling experiences and stunning mountain views."
            },
            {
                
                title: "Experience Georgian Wine Culture",
                description: "Georgia is known for its wine traditions. Visiting Kakheti and tasting local wine adds a unique cultural experience to your trip."
            },
            {
                
                title: "Relax in Batumi",
                description: "Batumi offers beaches, nightlife, and a modern vibe. It is a great place to relax and enjoy coastal experiences."
            },
            {
                
                title: "Visit Historical Sites and Monasteries",
                description: "Exploring ancient sites like Mtskheta and Uplistsikhe helps you understand Georgia's rich history and culture."
            }
        ]
    },
    testimonials: [
        {
            text: "Our Georgia trip was absolutely amazing! The landscapes, culture, and overall experience were perfectly planned and truly unforgettable.",
            
        },
        {
            text: "Excellent service and smooth travel arrangements. We explored multiple destinations comfortably and enjoyed every part of the trip.",
            
        },
        {
            text: "We had a fantastic experience with well-managed hotels and sightseeing. Everything was organized perfectly.",
            
        },
        {
            text: "Very professional team with great support throughout the journey. The trip was stress-free and enjoyable.",
            
        },
        {
            text: "One of the most beautiful trips we've had. Perfect planning, scenic views, and great experiences made it memorable.",
            
        }
    ],
  
},

// Destination 5: Azerbaijan
{
    img: azerbaijan,
    title: "Azerbaijan",
    heading: "About Azerbaijan",
    description: "Azerbaijan, known as the Land of Fire, is a unique destination where modern architecture meets ancient history. Located between Europe and Asia, it offers a mix of cultural heritage, scenic landscapes, and futuristic cityscapes. From the vibrant capital Baku to natural wonders and historical sites, Azerbaijan provides a diverse and memorable travel experience.",
    attraction: {
        heading: "Top Attractions in Azerbaijan",
        para: "Explore must-see attractions, modern landmarks, historic sites, natural wonders, and unforgettable experiences.",
        cards: [
            {
                img: azerbaijan1,
                title: "Baku City",
                description: "Baku, the capital, is known for its modern skyline, historic old city, and vibrant lifestyle. Visitors can explore a mix of traditional architecture and futuristic buildings, making it a fascinating destination."
            },
            {
                img: azerbaijan2,
                title: "Flame Towers",
                description: "Flame Towers are iconic skyscrapers that symbolize Azerbaijan's identity. They light up beautifully at night and offer a stunning view of the city."
            },
            {
                img: azerbaijan3,
                title: "Old City (Icherisheher)",
                description: "This historic area in Baku is filled with narrow streets, ancient buildings, and cultural landmarks. It is a UNESCO World Heritage site and a must-visit."
            },
            {
                img: azerbaijan4,
                title: "Gobustan National Park",
                description: "Gobustan is famous for its ancient rock carvings and mud volcanoes. It offers a unique glimpse into prehistoric life and natural phenomena."
            },
            {
                img: azerbaijan5,
                title: "Heydar Aliyev Center",
                description: "This architectural masterpiece is known for its unique design and cultural exhibitions. It is one of the most photographed landmarks in Baku."
            },
            {
                img: azerbaijan6,
                title: "Absheron Peninsula",
                description: "The Absheron Peninsula is known for its natural beauty and historical sites. It includes attractions like fire temples and scenic coastal areas."
            },
            {
                img: azerbaijan7,
                title: "Ateshgah Fire Temple",
                description: "This temple is a historic religious site known for its natural gas flames. It reflects Azerbaijan's ancient fire-worship traditions."
            },
            {
                img: azerbaijan8,
                title: "Yanar Dag (Burning Mountain)",
                description: "Yanar Dag is a natural gas fire that burns continuously on a hillside. It is a fascinating and unique attraction."
            },
            {
                img: azerbaijan9,
                title: "Gabala",
                description: "Gabala is a scenic destination known for its mountains, lakes, and outdoor activities. It is perfect for nature lovers and relaxation."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Azerbaijan",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, cultural experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Explore Baku City and Old Town",
                description: "Walking through Baku allows you to experience both modern and historic sides of the city. The old town offers culture and history, while the new areas showcase modern architecture."
            },
            {
                
                title: "Visit Flame Towers at Night",
                description: "Seeing the Flame Towers illuminated at night is a beautiful experience. The light display represents fire and creates a stunning visual."
            },
            {
                
                title: "Discover Gobustan and Mud Volcanoes",
                description: "Exploring Gobustan gives you a chance to see ancient carvings and unique natural formations. It is both educational and exciting."
            },
            {
                
                title: "Experience Cultural Landmarks",
                description: "Visiting places like the Heydar Aliyev Center and Ateshgah Temple helps you understand Azerbaijan's culture and heritage."
            },
            {
                
                title: "Relax in Gabala's Nature",
                description: "Gabala offers peaceful surroundings with mountains and lakes. It is perfect for relaxation and enjoying nature."
            },
            {
                
                title: "Enjoy Local Cuisine",
                description: "Trying Azerbaijani food adds a special touch to your trip. The flavors and traditional dishes offer a unique culinary experience."
            }
        ]
    },
    testimonials: [
        {
            text: "Our Azerbaijan trip was amazing! Baku's modern vibe and historical sites were perfectly balanced, and everything was arranged smoothly.",
            
        },
        {
            text: "Excellent planning and great service. We explored all major attractions comfortably and enjoyed every part of the journey.",
            
        },
        {
            text: "We had a wonderful experience with well-managed hotels and sightseeing. The trip was completely hassle-free.",
            
        },
        {
            text: "Very professional team with strong coordination. Everything was organized perfectly, making our trip enjoyable.",
            
        },
        {
            text: "One of the most unique trips we've had. Great planning, beautiful places, and constant support made it memorable.",
            
        }
    ],
  
},

// Destination 6: Russia
{
    img: russia,
    title: "Russia",
    heading: "About Russia",
    description: "Russia is the largest country in the world, known for its rich history, grand architecture, vibrant culture, and diverse landscapes. From iconic cities like Moscow and St. Petersburg to scenic countryside and historic landmarks, Russia offers a unique blend of tradition and modernity. It is an ideal destination for travelers interested in culture, history, and unforgettable experiences.",
    attraction: {
        heading: "Top Attractions in Russia",
        para: "Explore must-see attractions, historic landmarks, cultural cities, architectural wonders, and unforgettable experiences.",
        cards: [
            {
                img: russia1,
                title:"Moscow (Red Square & Kremlin)",
                description:"Moscow, the capital city, is known for its iconic Red Square and the Kremlin. These landmarks reflect Russia's political history and stunning architecture, making them must-visit attractions."
            },
            {
                img: russia2,
                title: "Saint Petersburg (Hermitage Museum)",
                description: "Saint Petersburg is famous for its cultural heritage and beautiful canals. The Hermitage Museum is one of the largest museums in the world, showcasing art and history."
            },
            {
                img: russia3,
                title: "Saint Basil's Cathedral",
                description: "This colorful cathedral in Moscow is one of Russia's most recognizable landmarks. Its unique design and vibrant colors make it a must-see attraction."
            },
            {
                img: russia4,
                title: "Lake Baikal",
                description: "Lake Baikal is the deepest and oldest freshwater lake in the world. It offers stunning natural beauty and is perfect for nature lovers."
            },
            {
                img: russia5,
                title: "Trans-Siberian Railway",
                description: "This railway journey is one of the longest in the world. It offers scenic views and a unique travel experience across Russia."
            },
            {
                img: russia6,
                title: "Kazan",
                description: "Kazan is known for its mix of Russian and Tatar culture. It offers beautiful mosques, churches, and historical sites."
            },
            {
                img: russia7,
                title: "Sochi",
                description: "Sochi is a coastal city known for its beaches and mountains. It is a popular destination for both summer and winter tourism."
            },
            {
                img: russia8,
                title: "Peterhof Palace",
                description: "Peterhof Palace is known for its grand fountains and gardens. It is often compared to Versailles and offers a luxurious experience."
            },
            {
                img: russia9,
                title: "Vladivostok",
                description: "Vladivostok is a port city known for its scenic views and modern development. It offers a unique perspective of Russia's eastern side."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Russia",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, cultural experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Explore Moscow's Historic Landmarks",
                description: "Visiting Red Square, the Kremlin, and Saint Basil's Cathedral allows you to experience Russia's rich history and iconic architecture. These landmarks are both beautiful and historically significant."
            },
            {
                
                title: "Visit Museums and Cultural Sites",
                description: "Russia is known for its world-class museums like the Hermitage. Exploring these places gives insight into art, history, and culture."
            },
            {
                
                title: "Experience the Trans-Siberian Journey",
                description: "Traveling on the Trans-Siberian Railway offers a unique experience across vast landscapes. It is one of the most memorable journeys in the world."
            },
            {
                
                title: "Enjoy Scenic Nature Destinations",
                description: "Places like Lake Baikal offer breathtaking views and peaceful surroundings. It is perfect for nature lovers and relaxation."
            },
            {
                
                title: "Explore Saint Petersburg Canals",
                description: "Taking a boat ride through the canals of Saint Petersburg offers a beautiful view of the city and its architecture."
            },
            {
                
                title: "Try Russian Cuisine and Culture",
                description: "Trying traditional Russian dishes and experiencing local culture adds depth to your travel experience. It gives a better understanding of the country's lifestyle."
            }
        ]
    },
    testimonials: [
        {
            text: "Our Russia trip was incredible! From Moscow to Saint Petersburg, everything was perfectly planned and we enjoyed every moment.",
            
        },
        {
            text: "Excellent service and well-organized itinerary. We explored major attractions comfortably without any issues.",
            
        },
        {
            text: "We had a great experience with smooth travel arrangements and well-managed hotels. The trip was truly memorable.",
            
        },
        {
            text: "Very professional team with great coordination. Everything was arranged perfectly, making our journey stress-free.",
            
        },
        {
            text: "One of the most enriching trips we've had. Great planning, beautiful destinations, and excellent support made it unforgettable.",
            
        }
    ],
  
},

// Destination 7: Bhutan
{
    img: bhutan,
    title: "Bhutan",
    heading: "About Bhutan",
    description: "Bhutan is a peaceful Himalayan kingdom known for its untouched natural beauty, spiritual culture, and focus on happiness. Surrounded by mountains, it offers stunning landscapes, ancient monasteries, and a calm environment. Unlike other destinations, Bhutan emphasizes sustainable tourism, making it ideal for travelers seeking peace, culture, and a unique travel experience.",
    attraction: {
        heading: "Top Attractions in Bhutan",
        para: "Explore must-see attractions, monasteries, mountain views, cultural sites, and unforgettable peaceful experiences.",
        cards: [
            {
                img: bhutan1,
                title: "Paro Taktsang (Tiger's Nest Monastery)",
                description: "Tiger's Nest Monastery is Bhutan's most iconic site, located on a cliffside. The hike to reach it is scenic and rewarding, offering breathtaking views and a spiritual experience."
            },
            {
                img: bhutan2,
                title: "Thimphu",
                description: "Thimphu, the capital city, offers a mix of tradition and modernity. Visitors can explore monasteries, markets, and cultural landmarks while enjoying a peaceful atmosphere."
            },
            {
                img: bhutan3,
                title: "Punakha Dzong",
                description: "Punakha Dzong is one of Bhutan's most beautiful fortresses, located at the confluence of two rivers. It showcases stunning architecture and historical significance."
            },
            {
                img: bhutan4,
                title: "Dochula Pass",
                description: "Dochula Pass is known for its panoramic mountain views and 108 memorial chortens. It is a scenic and peaceful place, especially on clear days."
            },
            {
                img: bhutan5,
                title: "Phobjikha Valley",
                description: "Phobjikha Valley is a beautiful glacial valley known for its natural beauty and black-necked cranes. It offers a peaceful and scenic environment."
            },
            {
                img: bhutan6    ,
                title: "Buddha Dordenma Statue",
                description: "This giant Buddha statue overlooks Thimphu and offers stunning views of the valley. It is a symbol of peace and spirituality."
            },
            {
                img: bhutan7,
                title: "Paro Valley",
                description: "Paro Valley is known for its scenic beauty, traditional houses, and cultural landmarks. It is one of the most picturesque regions in Bhutan."
            },
            {
                img: bhutan8,
                title: "National Memorial Chorten",
                description: "This is an important religious site in Thimphu where locals come to pray. It reflects Bhutan's spiritual lifestyle."
            },
            {
                img: bhutan9,
                title: "Haa Valley",
                description: "Haa Valley is a hidden gem known for its untouched beauty and peaceful surroundings. It is perfect for those seeking solitude and nature."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Bhutan",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, spiritual experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Hike to Tiger's Nest Monastery",
                description: "The hike to Tiger's Nest is one of the most rewarding experiences in Bhutan. It offers scenic views and a deep sense of spirituality once you reach the monastery."
            },
            {
                
                title: "Explore Monasteries and Dzongs",
                description: "Bhutan is rich in monasteries and fortresses. Visiting these places helps you understand its culture, traditions, and spiritual lifestyle."
            },
            {
                
                title: "Enjoy Peaceful Nature and Landscapes",
                description: "Bhutan's mountains, valleys, and forests offer a calm and refreshing environment. It is perfect for relaxation and connecting with nature."
            },
            {
                
                title: "Experience Local Culture and Festivals",
                description: "Bhutanese festivals and traditions are colorful and unique. Experiencing them gives you a deeper understanding of the country's culture."
            },
            {
                
                title: "Visit Scenic Valleys",
                description: "Exploring valleys like Paro and Phobjikha offers breathtaking views and peaceful surroundings. It is ideal for photography and relaxation."
            },
            {
                
                title: "Try Bhutanese Cuisine",
                description: "Bhutanese food is unique and flavorful. Trying local dishes like Ema Datshi adds a cultural experience to your journey."
            }
        ]
    },
    testimonials: [
        {
            text: "Our Bhutan trip was peaceful and refreshing! The monasteries, landscapes, and overall experience were beautifully planned and unforgettable.",
            
        },
        {
            text: "Excellent service and smooth arrangements. We enjoyed every destination comfortably and had a truly relaxing journey.",
            
        },
        {
            text: "We loved the calm environment and cultural experiences. Everything was well-organized and stress-free.",
            
        },
        {
            text: "Very professional team with great support. The trip was perfectly managed from start to finish.",
            
        },
        {
            text: "One of the most peaceful trips we've had. Beautiful places, great planning, and memorable experiences made it special.",
            
        }
    ],
  
}
,
// Destination 8: Japan
{
    img: japan,
    title: "Japan",
    heading: "About Japan",
    description: "Japan is a fascinating country where ancient traditions meet modern innovation. Known for its advanced cities, historic temples, beautiful cherry blossoms, and unique culture, Japan offers a diverse travel experience. From bustling Tokyo to peaceful Kyoto, it provides a perfect mix of technology, heritage, nature, and cuisine, making it one of the most exciting destinations in the world.",
    attraction: {
        heading: "Top Attractions in Japan",
        para: "Explore must-see attractions, cultural landmarks, modern cities, scenic landscapes, and unforgettable experiences.",
        cards: [
            {
                img: japan1,
                title: "Tokyo",
                description: "Tokyo is a vibrant city known for its skyscrapers, shopping, technology, and entertainment. It offers a mix of modern attractions and traditional temples, making it an exciting place to explore."
            },
            {
                img: japan2,
                title: "Kyoto",
                description: "Kyoto is famous for its historic temples, shrines, and traditional culture. It offers a peaceful contrast to modern cities and is perfect for experiencing Japan's heritage."
            },
            {
                img: japan3,
                title:"Mount Fuji",
                description:"Mount Fuji is Japan's most iconic mountain. It offers stunning views and is a popular destination for sightseeing and photography."
            },
            {
                img: japan4,
                title: "Osaka",
                description: "Osaka is known for its food, nightlife, and friendly atmosphere. It is a great place to enjoy local cuisine and entertainment."
            },
            {
                img: japan5,
                title: "Hiroshima",
                description: "Hiroshima is known for its historical significance and peaceful memorials. It offers a meaningful and educational experience."
            },
            {
                img: japan6,
                title: "Nara",
                description: "Nara is famous for its temples and friendly deer roaming freely in parks. It is a unique and peaceful destination."
            },
            {
                img: japan7,
                title: "Hokkaido",
                description: "Hokkaido is known for its natural beauty, snow festivals, and scenic landscapes. It is perfect for nature lovers."
            },
            {
                img: japan8,
                title: "Okinawa",
                description: "Okinawa offers beautiful beaches, clear waters, and a tropical vibe. It is ideal for relaxation and water activities."
            },
            {
                img: japan9,
                title: "Shibuya Crossing",
                description: "Shibuya Crossing in Tokyo is one of the busiest intersections in the world. It is a symbol of Japan's modern and fast-paced lifestyle."
            }
        ]
    },
    topthings: {
        heading: "Top 6 Things to Do in Japan",
        para: "Explore the top 6 exciting things to do on your tour, offering unforgettable moments, cultural experiences, and highlights you simply can't miss.",
        cards: [
            {
                
                title: "Experience Bullet Train (Shinkansen)",
                description: "Traveling on Japan's bullet train is a unique experience. It is fast, comfortable, and offers scenic views, making transportation itself exciting."
            },
            {
                
                title: "Explore Temples and Shrines",
                description: "Japan has many beautiful temples and shrines that reflect its culture and traditions. Visiting these places offers a peaceful and spiritual experience."
            },
            {
                
                title: "Enjoy Cherry Blossom Season",
                description: "If visiting during spring, watching cherry blossoms is a magical experience. Parks and streets are filled with beautiful pink flowers."
            },
            {
                
                title: "Try Japanese Cuisine",
                description: "Japanese food like sushi, ramen, and street snacks is famous worldwide. Trying authentic dishes adds a special touch to your journey."
            },
            {
                
                title: "Explore Modern City Life",
                description: "Cities like Tokyo and Osaka offer shopping, entertainment, and nightlife. Experiencing this modern lifestyle is exciting and fun."
            },
            {
                
                title: "Visit Natural Landscapes",
                description: "Japan offers mountains, beaches, and scenic views. Exploring these natural places adds balance to your trip."
            }
        ]
    },
    testimonials: [
        {
            text: "Our Japan trip was incredible! From Tokyo's modern vibe to Kyoto's culture, everything was perfectly planned and truly unforgettable.",
            
        },
        {
            text: "Excellent service and smooth arrangements throughout the journey. We enjoyed every destination comfortably without any hassle.",
            
        },
        {
            text: "We had a wonderful experience exploring Japan. Hotels, transport, and sightseeing were all managed perfectly.",
            
        },
        {
            text: "Very professional team with great coordination. The trip was seamless and enjoyable from start to finish.",
            
        },
        {
            text: "One of the best international trips we've had. Amazing experiences, great planning, and constant support made it memorable.",
            
        }
    ],
  
}
]