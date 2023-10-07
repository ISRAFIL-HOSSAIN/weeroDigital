"use client";

import Image from "next/image";
import React, { Fragment } from "react";
import { BiSolidShow } from "react-icons/bi";

interface Props {
  name?: string;
  description?: string;
  icon: string;
  source_code_link?: string;
   onClick?: () => void;
}
const MobileMockup: React.FC<Props> = ({
  name,
  description,
  icon,
  source_code_link,
  onClick,
}) => {
  return (
    <Fragment>
      <div className="w-full" onClick={onClick}>
        <div className="relative mx-auto border-[#3f1587]  bg-gray-200 border-[14px] rounded-[2rem] h-[520px] w-[280px] shadow-xl">
          <div className="w-[110px] h-[14px] bg-[#1e0b38] top-0 rounded-b-md left-1/2 -translate-x-1/2 absolute"></div>
          <div className="h-[46px] w-[3px] bg-gray-400 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-400 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-400 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
          <div className="rounded-2xl w-full h-full bg-gray-800">
            <div className="h-[465px] w-full">
              <Image
                src={icon}
                width={274}
                height={574}
                className="w-full h-full object-fill rounded-t-xl"
                alt=""
              />
            </div>
            <div className="w-full flex justify-center items-center ">
              <p className="text-[18px] ">{name}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileMockup;
