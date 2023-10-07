"use client";
import React from "react";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

interface ProjectCardProps {
  index?: number;
  name?: string;
  icon: string;
  source_code_link?: string;
  height?: string;
  width?: string;
  title?:string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  icon,
  height,
  width,
  title,
}) => {
  return (
    <motion.div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`bg-primary p-5 rounded-2xl xs:w-[150px] md:w-[170px] lg:w-[${width}] h-[${height}]`}
        
      >
        <div
          className={`w-full flex justify-center items-center`}
        >
          <Image
            src={icon}
            alt="project_image"
            width={300}
            height={300}
            className="w-16 h-16 object-contain rounded-full "
          />
        </div>

        <div className="w-full flex justify-center items-center mt-5">
          {name && (
            <h3 className="text-white font-bold lg:text-[18px] sm:text[14px]">
              {name}
            </h3>
          )}

          {title && <p className="text-center text-indigo-400 font-semibold text-[15px]  py-3"># {title}</p>}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
