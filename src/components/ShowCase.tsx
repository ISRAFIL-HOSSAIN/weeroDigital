"use client";
import React, { useState } from "react";
import SectionTitle from "./Common/SectionTitle";
import Tab from "./Common/Tab";
import { SectionWrapper } from "@/hoc";
import { showcases } from "@/constants";
import MobileMockup from "./Common/MobileMockup";
import LaptopMockup from "./Common/LaptopMockup";
import { Showcase } from "@/constants/types";

import ShowcaseCard from "./Common/Card/ShowcaseCard";
import CommonSlider from "./Common/CommonSlider";
import Modal from "./Common/modal/CommonModal";
import Image from "next/image";

type Props = {};
// Define a custom interface for SliderSettings

const buttons = [
  { id: "web", label: "WEB" },
  { id: "mobile", label: "MOBILE" },
  { id: "nocode", label: "NoCode" },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 834,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};
const settings2 = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};

const ShowCase: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState<Showcase | null>(null);

  const handleOpen = (tech: Showcase) => {
    setSelectedTech(tech);
    setIsOpen(true);
  };
  const handleClose = () => {
    setSelectedTech(null);
    setIsOpen(false);
  };
  const renderCarouselItems = (type: string) => {
    let techList: Showcase[] = [];

    if (type === "web") {
      techList = showcases.web;
    } else if (type === "mobile") {
      techList = showcases.mobile;
    } else if (type === "nocode") {
      techList = showcases.nocode;
    }

    return techList.map((tech, techIndex) => (
      <>
        <div
          key={techIndex}
          className={`pb-12 w-full hidden lg:flex overflow-hidden`}
        >
          {type === "mobile" ? (
            <MobileMockup {...tech} onClick={() => handleOpen(tech)} />
          ) : (
            <LaptopMockup {...tech} onClick={() => handleOpen(tech)}/>
          )}
        </div>
        <div
          key={techIndex}
          className={`pb-12 w-full lg:hidden overflow-hidden space-x-5`}
        >
          {type === "mobile" ? (
            <MobileMockup {...tech}onClick={() => handleOpen(tech)}/>
          ) : (
            <ShowcaseCard {...tech} onClick={() => handleOpen(tech)}/>
          )}
        </div>
      </>
    ));
  };

  return (
    <div className="w-full h-full flex flex-col" >
      <SectionTitle
        subtitle={""}
        title={"ShowCase"}
        subtext={``}
        align={"center"}
      />

      <div className="mt-5  w-full px-5">
        <Tab buttons={buttons}>
          {buttons.map((button) => (
            <div key={button.id} id={button.id} className="">
              <div className={`mt-10`}>
                {button.id === "mobile" ? (
                  <CommonSlider settings={settings2} key={button.id}>
                    {renderCarouselItems(button.id)}
                  </CommonSlider>
                ) : (
                  <CommonSlider settings={settings} key={button.id}>
                    {renderCarouselItems(button.id)}
                  </CommonSlider>
                )}
              </div>
            </div>
          ))}
        </Tab>
      </div>
      {isOpen && selectedTech && (
        <Modal isOpen={isOpen} onClose={handleClose}>
          {/* Modal content */}
          <div className="w-full h-full p-8 pt-5">
          <h3 className="lg:text-[40px] text-[25px] flex justify-center items-center  font-semibold text-gray-900 dark:text-white text-center">
            {selectedTech?.name}
          </h3>
          <div className= "w-full px-10 py-6  ">
            <div className="w-full  rounded-lg shadow-md flex justify-center items-center">
              <Image src={selectedTech?.icon} alt={selectedTech?.name} width={500} height={500} className="w-full h-full object-fill"/>
            </div>
          </div>
          </div>
          {/* Add more modal content here */}
        </Modal>
      )}
    </div>
  );
};

export default SectionWrapper(ShowCase, "showcase");
