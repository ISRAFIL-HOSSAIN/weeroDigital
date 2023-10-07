"use client";

import React, {useState,Fragment } from "react";
import { BiSolidShow } from "react-icons/bi";

import Image from "next/image";
import Modal from "./modal/CommonModal";

interface Props {
  id?: number;
  name?: string;
  description?: string;
  icon: string;
  source_code_link?: string;
  CanvasLoader?: any;
  onClick?: () => void;
}
const LaptopMockup: React.FC<Props> = ({
  id,
  name,
  description,
  icon,
  source_code_link,
  CanvasLoader,
  onClick,
}) => {
  
  return (
    <Fragment>
      <div className="w-full" onClick={onClick}>
        <div className="relative mx-auto border-[#412782e8]  bg-tertiary border-[10px] border-t-[15px] rounded-t-xl h-[200px] max-w-[301px] lg:h-[360px] lg:max-w-[610px]">
          <div className="rounded-lg overflow-hidden h-[200px] lg:h-[390px] bg-tertiary ">
            <div className="lg:h-3/4 h-[140px] bg-gray-100 rounded-lg ">
              <Image
                width={500}
                height={500}
                src={icon}
                className="h-full w-full rounded-md object-fill"
                alt="icon"
              />
            </div>
            <div className="h-1/4 sm:h-[50px] bg-[#151030] w-full flex justify-between px-5 py-2">
              <h3 className="text-white font-bold lg:text-[20px] text-[14px] pt-2">
                {name}
              </h3>
             
                <div className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer mb-2">
                  <BiSolidShow
                    size={22}
                    className="object-contain hover:text-emerald-500 shadow-md mb-1"
                  />
                </div>
           
            </div>
          </div>
        </div>
        <div className="relative mx-auto bg-[#3d2a6de8] shadow-lg rounded-b-xl rounded-t-sm h-[20px] max-w-[351px] lg:h-[34px] lg:max-w-[660px]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] lg:w-[96px] lg:h-[8px] bg-[#210e4ec2]"></div>
        </div>
      </div>
      
    </Fragment>
  );
};

export default LaptopMockup;
