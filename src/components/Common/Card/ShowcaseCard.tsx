"use client";
import React from "react";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  id?: number;
  name?: string;
  icon: string;
  link?: any;
  height?: string;
  width?: string;
  title?: string;
   onClick?: () => void;
}

const ShowcaseCard: React.FC<ProjectCardProps> = ({
  id,
  name,
  icon,
  height,
  width,
  title,
  link,
  onClick,
}) => {
  return (
    
      <motion.div onClick={onClick}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={`bg-primary p-3 rounded-xl mx-3`}
        >
          <div className={`w-full flex justify-center items-center h-[180px]`}>
            <Image
              src={icon}
              alt="project_image"
              width={300}
              height={300}
              className="w-full h-full object-fill "
            />
          </div>

          <div className="w-full flex justify-center items-center py-4">
            {name && (
              <h3 className="text-white font-bold text[14px]">{name}</h3>
            )}

            {title && (
              <p className="text-center text-indigo-400 font-semibold text-[15px]  py-3">
                # {title}
              </p>
            )}
          </div>
        </Tilt>
      </motion.div>
  );
};

export default ShowcaseCard;
