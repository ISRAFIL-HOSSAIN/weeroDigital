"use client";
import React from "react";
import SectionTitle from "./Common/SectionTitle";
import { experiences } from "../constants";

import ServiceCard from "./Common/Card/ServiceCard";
import { SectionWrapper } from "@/hoc";


// const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
//   const { title, icon, icon2, iconBg, points } = experience;

//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background: "linear-gradient(135deg, #250D4B, #6F028A)",
//         color: "#fff",
//       }}
//       contentArrowStyle={{ borderRight: "8px solid  #603196" }}
//       date={experience.tech}
//       iconStyle={{ background: iconBg }}
//       icon={
//         <div className="flex justify-center items-center w-full h-full">
//           <Image
//             src={icon}
//             alt={title}
//             className="w-[60%] h-[60%] object-contain animate-pulse"
//             width={50}
//             height={50}
//           />
//         </div>
//       }
//     >
//       <div>
//         <HText className={"text-[24px] font-bold text-center"} text={title} />

//         <div className="flex justify-center w-full h-[210px] mt-4">
//           <div className="relative">
//             <motion.div
//               className="flex justify-center items-center h-[200px] w-[200px] cursor-pointer hover:scale-105 duration-200"
//               whileHover={{ scale: 1.05 }}
//             >
//               <motion.div
//                 className="border-8 border-white shadow-lg shadow-slate-200 inline-flex rounded-full p-2 justify-center items-center hover:text-white text-center"
//                 whileHover={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)" }}
//                 // initial={{ boxShadow: "0 0 0px rgba(0, 0, 0, 0)" }}
//                 animate={{
//                   boxShadow: [
//                     "0 0 0px rgba(203, 213, 225, 0)", // Light White
//                     "0 0 5px rgba(203, 213, 225, 0.25)", // Light White
//                     "0 0 10px rgba(203, 213, 225, 0.5)", // Light White
//                     "0 0 15px rgba(203, 213, 225, 0.75)", // Light White
//                     "0 0 20px rgba(203, 213, 225, 1)", // Full White
//                     "0 0 20px rgba(203, 213, 225, 1)", // Full White
//                     "0 0 20px rgba(203, 213, 225, 0.75)", // Full White
//                     "0 0 20px rgba(203, 213, 225, 0.5)", // Full White
//                     "0 0 20px rgba(203, 213, 225, 0.25)", // Full White
//                     "0 0 20px rgba(203, 213, 225, 0)", // Light White
//                     "0 0 0px rgba(209, 231, 0, 0.5)",
//                     "0 0 0px rgba(203, 213, 225, 0)", // Light White
//                     "0 0 5px rgba(203, 213, 225, 0.25)", // Light White
//                     "0 0 10px rgba(203, 213, 225, 0.5)", // Light White
//                     "0 0 15px rgba(203, 213, 225, 0.75)", // Light White
//                     "0 0 20px rgba(203, 213, 225, 1)", // Full White
//                     "0 0 20px rgba(203, 213, 225, 1)", // Full White
//                     "0 0 20px rgba(203, 213, 225, 0.75)", // Full White
//                     "0 0 20px rgba(203, 213, 225, 0.5)", // Full White
//                     "0 0 20px rgba(203, 213, 225, 0.25)", // Full White
//                     "0 0 20px rgba(203, 213, 225, 0)", // Light White
//                     "0 0 0px rgba(209, 231, 0, 0.5)",
//                   ],
//                   transition: { repeat: Infinity, duration: 5 },
//                 }}
//               >
//                 <div className="rounded-full overflow-hidden">
//                   <Image
//                     src={icon2}
//                     alt={title}
//                     className="w-[170px] h-[170px] object-cover"
//                     width={500}
//                     height={500}
//                   />
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       <ul className="mt-5 list-disc ml-5 space-y-2">
//         {points.map((point, index) => (
//           <li
//             key={`experience-point-${index}`}
//             className="text-white-100 text-[14px] pl-1 tracking-wider"
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   );
// };

const Services: React.FC = () => {
  return (
    <>
      <SectionTitle
        subtitle={"-Our Service"}
        align={"center"}
        title={`The right technology to help \n grow your business`}
        subtext={`We build software development teams that grow with our clients,
      from the early stages to whatever they aspire to be. Our expertise includes front-end, backend, database, and server solutions for mobile, web, and desktop applications. Our purpose is to provide our clients with expert guidance and to build software vital to their organizations.`}
      />
      <div className="mt-10 lg:px-16 px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {experiences &&
            experiences.map((experience, index) => (
              <ServiceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Services, "services");
