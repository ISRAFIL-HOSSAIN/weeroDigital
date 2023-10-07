"use client";
import React from "react";
import Image from "next/image";
import { aboutus } from "@/app/assets";
import ProjectCard from "./Common/Card/ProjectCard";
import { industry } from "@/constants";
import CommonButton from "./ui/CommonButton";
import { SectionWrapper } from "@/hoc";

const AboutUs: React.FC = () => {
  return (
    <>
    <div className="py-16 px-6 lg:px-16 ">
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <div className="w-full lg:w-[50%] pt-8 flex justify-start items-start">
          <div className="relative w-full  h-full z-[0]">
            <Image
              src={aboutus}
              alt="aboutus"
              width={500}
              height={500}
              className="object-contain "
            />
            <div className="absolute bg-yellow-400 rounded-2xl w-60 h-32 md:w-48 md:h-36 lg:h-40 lg:w-48 top-40 left-0 lg:top-52 lg:left-96 text-center flex items-center justify-center flex-col">
              <h2 className="text-transparent bg-gradient-to-r font-poppins text-[40px] lg:text-[40px] sm:text-md font-bold from-slate-100 via-emerald-100 to-white bg-clip-text">
                20+
              </h2>
              <h2 className="text-lg font-medium font-poppins">Live Project</h2>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 pt-16">
          <p className="text-transparent bg-gradient-to-r text-[18px] from-emerald-200 via-purple-500 to-emerald-200 bg-clip-text">
            - About us
          </p>
          <h2 className="text-transparent bg-gradient-to-r font-bold text-[28px] lg:text-[40px] sm:text-md from-slate-300 via-emerald-500 to-emerald-300 bg-clip-text">
            Why Choose WeeroDigital ?
          </h2>
          <p className="text-slate-300 text-20px mt-8 font-medium font-sans">
            We believe in a collaborative approach that puts our clients at the
            center of everything we do. We take the time to understand your
            business, industry, and objectives, allowing us to tailor our
            solutions to your unique requirements. Our team works closely with
            you, combining our expertise with your insights to create innovative
            and effective strategies that deliver tangible results.
          </p>
          <div className="mt-5">
            <div className="py-5 ml-10">
              <h2 className="text-transparent bg-gradient-to-r font-bold text-[25px] lg:text-[30px] sm:text-md green-text-gradient bg-clip-text">
                Industry We Serve
              </h2>
              <p>Bridge Your Business with the Virtual world</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 md:px-10 gap-5 py-5">
              {industry?.length > 0 &&
                industry.map((industry, id) => (
                  <ProjectCard
                    key={id}
                    index={id}
                    {...industry}
                    width={"150px"}
                    height={"160px"}
                  />
                ))}
            </div>
            <div className="w-full items-center flex justify-center py-5">
              <CommonButton>
                See More
              </CommonButton>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SectionWrapper(AboutUs, "about");;
