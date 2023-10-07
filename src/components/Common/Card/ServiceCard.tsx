"use client";
import React,{useState} from "react";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { Experience } from "@/constants/types";

interface ExperienceCardProps {
  experience: Experience;
}

const ServiceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { title, icon, icon2, iconBg, points,subtitle } = experience;
  const [isHovered, setIsHovered] = useState(false); 
  return (
    <>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`bg-primary p-5 rounded-2xl ${isHovered && `gradient-border`}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        
      >
        <div className="w-full h-auto">
          <div
            className={` w-full flex justify-center items-center p-3  `}
          >
            <Image
              src={icon}
              alt="project_image"
              width={500}
              height={500}
              loading="lazy"
              className="w-[110px] h-[110px] items-center  object-contain rounded-full p-4  bg-secondary"
            />
          </div>

          <div className=" flex-col justify-center items-center lg:py-5">
            <h3 className="font-bold lg:text-[16px] text[14px] text-center 
            text-transparent  bg-gradient-to-r from-yellow-400 via-purple-500 to-orange-500 bg-clip-text">
              {title ? title : ""}
            </h3>
            <p className="flex text-justify-center w-full py-5 px-2 lg:py-5 text-[12px] lg:text-[14px] text-gray-300 lg:h-28">{subtitle ? subtitle : ""}</p>
            {/* <div className="w-full flex justify-center items-center py-5">
              <button className="px-5 green-gradient py-1 rounded-full mb-5">See more</button>
            </div> */}
          </div>
        </div>
      </Tilt>
     
    </>
  );
};

export default ServiceCard;
