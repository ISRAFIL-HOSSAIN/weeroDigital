import {
  customize,
  website,
  websitelogo,
  mobile2,
  rocket2,
  bubble2,
  nocode,
  reactjs,
  js,
  html,
  css,
  typescript,
  redux,
  threejs,
  nodejs,
  github,
  docker,
  medicine,
  healthcare,
  ecom,
  lms,
  education,
  landing,
  manymore,
  realstate,
  ui,
  mobile_icon,
  customize_,
  mrcsaid,
  morent,
  pngcrown,
  lndpage1,
  tourguid,
  enersy,
  lndpage2,
  lndpage3,
  net,
  express,
  java,
  springtboot,
  //nocode 
  bubble_icon,
  shopify,wordpress,

  //frontend 
  nextjs,
  mui,
  antd,bootstrap, tailwind,
  //db 
  sql,mysql,postgresql,mongodb,
  //mobile 
  reactnative, flutter,
  //showcase for mobile 
  tourguid_mobile,fashion,booking_guide,servicing,petadaption,fooddelivery,

  // showcase for nocode 
  sales_dashboard,mywebapp,sales_space,mywebapp_2,

} from "../components/Common/CdnAssets";
import { avater1, avater2, avater3 } from "../app/assets";

import { Experience,Industry, Technologies,ShowCases} from "./types";

export const navLinks = [
  {
    id: "services",
    title: "Services",
  },

  {
    id: "showcase",
    title: "Showcase",
  },
  {
    id: "about",
    title: "About Us",
  },
  
  {
    id: "contact",
    title: "Contact",
  },
];

export const technologies : Technologies = {
  frontend: [
    {
      id: 1,
      name: "Html 5",
      icon: html,
    },
    {
      id: 2,
      name: "CSS 3",
      icon: css,
    },
    {
      id: 3,
      name: "JavaScript",
      icon: js,
    },
    {
      id: 4,
      name: "React JS",
      icon: reactjs,
    },
    {
      id: 5,
      name: "Typescript",
      icon: typescript,
    },
    {
      id: 6,
      name: "Redux",
      icon: redux,
    },
    {
      id: 7,
      name: "Three Js",
      icon: threejs,
    },
    {
      id: 8,
      name: "Next Js",
      icon: nextjs,
    },
    {
      id: 9,
      name: "Material UI",
      icon: mui,
    },
    {
      id: 10,
      name: "AntD",
      icon: antd,
    },
    {
      id: 11,
      name: "Tailwind Css",
      icon: tailwind,
    },
    {
      id: 12,
      name: "Bootstrap",
      icon: bootstrap,
    },
   
  ],
  backend: [
    {
      id: 1,
      name: "Node Js",
      icon: nodejs,
    },
    {
      id: 2,
      name: "GitHub",
      icon: github,
    },
    {
      id:3,
      name:"Docker",
      icon: docker,
    },
    {
      id:4,
      name:". Net",
      icon: net,
    },
    {
      id:5,
      name:"Express Js",
      icon: express,
    },
    {
      id:6,
      name:"Java",
      icon: java,
    },
    {
      id:7,
      name:"Spring Boot",
      icon: springtboot,
    },
    
  ],
  mobile: [
    {
      id: 1,
      name: "React Native",
      icon: reactnative,
    },
    {
      id: 2,
      name: "Flutter",
      icon: flutter,
    },
  ],
  nocode: [
    {
      id: 1,
      name: "Bubble.io",
      icon: bubble_icon,
    },
    {
      id: 2,
      name: "WordPress",
      icon: wordpress,
    },
    {
      id:3,
      name:"Shopify",
      icon:shopify
    }
  ],
  db: [
    {
      id: 1,
      name: "MongoDb",
      icon: mongodb,
    },
    {
      id: 2,
      name: "MySql",
      icon: mysql,
    },
    {
      id: 3,
      name: "PostgreSql",
      icon: postgresql,
    },
    {
      id: 4,
      name: "Sql",
      icon: sql,
    },
  ],
};

export const showcases : ShowCases = {
  web: [
    {
      id: 1,
      name: "MrcsAid",
      icon: mrcsaid,
    },
    {
      id: 2,
      name: "Morent",
      icon: morent,
    },
    {
      id: 3,
      name: "PngCrown",
      icon: pngcrown,
    },
    {
      id: 4,
      name: "Landing Page",
      icon: lndpage1,
    },
    {
      id: 5,
      name: "Tourguid",
      icon: tourguid,
    },
    {
      id: 6,
      name: "Enersy",
      icon: enersy,
    },
    {
      id: 7,
      name: "Landing Page",
      icon: lndpage2,
    },
    {
      id: 8,
      name: "Landing Page",
      icon: lndpage3,
    },
  ],
  mobile: [
    {
      id: 1,
      name: "Tour guide",
      icon: tourguid_mobile,
    },
    {
      id: 2,
      name: "Fashion ",
      icon: fashion,
    },
    {
      id: 3,
      name: "Booking Guide",
      icon: booking_guide,
    },
    {
      id: 4,
      name: "Servicing ",
      icon: servicing,
    },
    {
      id: 5,
      name: "Pet Adaption",
      icon: petadaption,
    },
    {
      id: 6,
      name: "Food Delivery ",
      icon: fooddelivery,
    },
  ],
  nocode: [
    {
      id: 1,
      name: "Sales Space",
      icon: sales_dashboard,
    },
    {
      id: 2,
      name: "MyWebApp",
      icon: mywebapp,
    },
    {
      id: 3,
      name: "SalesSpace ",
      icon: sales_space,
    },
    {
      id: 2,
      name: "MyWebApp",
      icon: mywebapp_2,
    },
  ],
};

export const feedbackData = [
  {
    imageSrc: avater1,
    name: "Chris Brown",
    position: "COO of DEF Corp",
    rating: 5,
    feedback:
      "Outstanding dedication to excellence, exceptional support received. Impressive service!",
  },
  {
    imageSrc: avater2,
    name: "Sara Lee",
    position: "CFO of Acme Co",
    rating: 5,
    feedback:
      "I thought it was impossible to make a website as beautiful as our product, but Flowentech proved me wrong.",
  },
  {
    imageSrc: avater3,
    name: "Earnest Smith",
    position: "Developer at Unixity",
    rating: 5,
    feedback:
      "After Flowentech optimized our website, our traffic increased by 50%. We can't thank them enough !",
  },
];
// const services = [
//   {
//     title: "Experties",
//     des: "Our team comprises highly skilled professionals with extensive experience in industry level. We stay updated with the latest trends, technologies, and best practices to ensure that we deliver cutting-edge solutions that drive your business forward.",
//     icon: expert,
//   },
//   {
//     title: "Customized Solutions",
//     des: "We understand that every business is unique, and there is no one-size-fits-all solution. That's why we take a personalized approach, crafting tailored strategies that align with your goals, target audience, and budget. Our solutions are designed to maximize your return on investment and deliver long-term success.",
//     icon: customize,
//   },
//   {
//     title: "Quality and Excellence",
//     des: "We are committed to delivering the highest standards of quality and excellence in everything we do. From the initial planning stages to the final implementation, we adhere to rigorous quality control measures to ensure that our solutions meet and exceed industry standards.",
//     icon: quality,
//   },
//   {
//     title: "Client Satisfaction",
//     des: "Our clients are at the heart of our business, and your satisfaction is our top priority. We strive to build long-term relationships based on trust, transparency, and open communication. We value your feedback and continuously seek to improve our services to better serve your evolving needs.",
//     icon: review,
//   },
//   {
//     title: "Continuous Support",
//     des: "Our commitment to your success doesn't end with the completion of a project. We provide ongoing support and maintenance to ensure that your [industry or service] solutions remain secure, up-to-date, and optimized for performance.",
//     icon: support,
//   },
// ];


const experiences: Experience[] = [
  {
    title: "Create Customize Landing Page",

    tech: `React js , Javascript , TypeScript , Node js , Express js , MongoDb , FireBase , CDN , AWS , DOCKER , HTML , CSS , Tailwind CSS, MUI , AntD `,
    icon: customize_,
    icon2: customize,
    iconBg: "#5B018F",
    subtitle:"We Customize Your Web Application. We Create Fully SEO Optimized Features, Responsive Fully Functional Features,",
    points: [
      "Developing and maintaining web applications using Modern technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Application Development",
    subtitle:"A website can represent your business indentity we can develop it according to the motive of your business, We offer dedicated software Software Solution",
    tech: `React js , Javascript , TypeScript , Node js , Express js , MongoDb , FireBase , CDN , AWS , DOCKER , HTML , CSS , Tailwind CSS, MUI , AntD `,
    icon: websitelogo,
    icon2: website,
    iconBg: "#5B018F",
    points: [
      "Developing and maintaining web applications using Modern technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mobile App Development",
    subtitle:"Flowentech develops both Android and ios application to make your business operation more Convenient and flexible",
    tech: "React Native , Node js , Express js , MongoDb , FireBase , CDN , AWS , DOCKER , Tailwind CSS",
    icon: mobile_icon,
    icon2: mobile2,
    iconBg: "#E6DEDD",
    points: [
      "With the exponential growth of mobile usage, having a mobile app for your business is essential. ",
      "Our skilled mobile app developers can bring your ideas to life, creating intuitive and feature-rich applications for both iOS and Android platforms.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Whether it's a standalone app or an extension of your existing web presence, we ensure seamless integration and optimal user experience",
    ],
  },
  {
    title: "No Code Platform",
    subtitle:"We Create Modern Startups Business Setup with Shopify, Wordpress , Bubble.io",
    tech: "Shopify , Bubble.io , WordPress",
    icon: rocket2,
    icon2: nocode,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Your Modern StartUp Business Setup with Sopify or Customize With Programming Language",
      "We understand the unique challenges faced by startups and offer comprehensive services to help you turn your idea into a successful business venture.",
      " From initial concept validation and market research to developing a robust business plan and implementing growth strategies, our startup experts provide invaluable guidance and support throughout your entrepreneurial journey.",
    ],
  },
  // {
  //   title: "WordPress",
  //   // tech: [
  //   //   {
  //   //     name: "React js",
  //   //   },
  //   // ],
  //   tech: "WordPress , Theme Development , WebSite Development ",
  //   icon: startup1,
  //   icon2: wordpress2,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "At our startup company service section, we specialize in providing a range of WordPress services including website development, custom theme development, plugin development, e-commerce solutions, and ongoing maintenance and support.",
  //     "With our expertise in WordPress, we help you harness the power of this versatile platform to achieve your business goals.",
  //   ],
  // },
  // {
  //   title: "Menual / Automation Testing",
  //   tech: "Selenium, Cypress, Jest , TDD",
  //   icon: automation_logo,
  //   icon2: automation,
  //   iconBg: "#E6DEDD",
  //   points: [
  //     "To ensure the reliability and functionality of your applications, we provide comprehensive manual and automation testing services. ",
  //     "Our skilled QA engineers meticulously test your software to identify any bugs, vulnerabilities, or performance issues.",
  //     "By employing both manual and automated testing techniques, we guarantee a high-quality product that meets industry standards and surpasses user expectations.",
  //   ],
  // },
];

const industry : Industry[] = [
  {
    icon: landing,
    title:"Landing Page",
  },
  {
    icon:ecom,
    title:"E-Commerce"
  },
  {
    icon:education,
    title:"Education", 
  }, 
  {
    icon:lms,
    title:"LMS"
  }, 
  {
    icon: realstate,
    title:"Real-Estate"
  }, 
  {
    icon:healthcare,
    title:"HealthCare"
  },
  {
    icon:medicine,
    title:"Pharmacy"
  },
  {
    icon:ui,
    title:"UI/UX"
  },
  {
    icon:manymore,
    title:"Many More"
  }
]
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];

export { experiences, testimonials,industry };
