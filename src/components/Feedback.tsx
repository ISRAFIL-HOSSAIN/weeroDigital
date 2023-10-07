import React from "react";
import SectionTitle from "./Common/SectionTitle";
import Image from "next/image";
import { client, emoji } from "@/app/assets";
import { BsFillStarFill } from "react-icons/bs";
import { feedbackData } from "@/constants";
import { styles } from "./styles";
import CommonButton from "./ui/CommonButton";

type Props = {
  imageSrc?: any;
  name: string;
  position: string;
  rating: number;
  feedback: string;
};
const FeedbackItem: React.FC<Props> = ({
  imageSrc,
  name,
  position,
  rating,
  feedback,
}) => (
  <div className="rounded-3xl w-[450px] lg:w-[400px] h-60 bg-primary py-5 px-4">
    <div className="w-full flex gap-4 px-5">
      <Image
        src={imageSrc}
        alt={`Profile of ${name}`}
        width={100}
        height={100}
        className="w-20 h-20 rounded-full"
      />
      <div>
        <h3 className="text-gray-500 font-bold text-lg">{name}</h3>
        <p className="text-gray-600 font-semibold text-md">{position}</p>

        <span className="flex gap-2">
          {Array.from({ length: rating }).map((_, index) => (
            <BsFillStarFill key={index} className="text-yellow-500" />
          ))}
        </span>
      </div>
    </div>
    <h3 className="text-gray-500 text-md px-4 pt-5">{feedback}</h3>
  </div>
);
const FeedBack: React.FC = () => {
  return (
    <>
      <div
        className={`px-[${styles.paddingX}] py-[${styles.paddingY}]  w-full flex-col `}
      >
        <div className="w-full ">
          <SectionTitle
            subtitle={"WHAT OTHER SAY"}
            title={"Client Feedback"}
            subtext={` `}
            align={"left"}
          />
        </div>
        <div className="h-full mb-32 lg:mb-0">
          <div className="relative">
            <Image
              src={emoji}
              alt="emoji"
              width={500}
              height={500}
              className="w-full h-96 object-contain "
            />
            <div className="flex flex-wrap lg:px-16 px-8 justify-evenly w-full mt-10 gap-10  top-10 inset-0 h-full absolute ">
              {feedbackData.map((feedback, index) => (
                <FeedbackItem key={index} {...feedback} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`px-[${styles.paddingX}] py-[${styles.paddingY}] p-[${styles.padding}] w-full mt-96 lg:mt-0 overflow-hidden`}
      >
        <div className=" flex lg:flex-row flex-col-reverse lg:justify-between  gap-10 w-full ">
          <div className="w-full flex-col ">
            <SectionTitle
              subtitle={"Let's Get Start"}
              title={"Ready to get started with your new project today?"}
              subtext={`Identify your authentic brand & shop elements through an in-depth
                    exploration, receive unique strategies to clarify your vision,
                    strengthen differentiation, and prime your company for growth.`}
              align={"left"}
            />
            <div className="py-6 flex w-full justify-center items-center ">
              <a href="#contact">
                <CommonButton>
                  Get Started
                </CommonButton>
                
              </a>
            </div>
          </div>
          <div className=" w-full pt-8 lg:ml-10 ml-0 justify-center flex mt-40 lg:mt-0">
            <div className="relative">
              <div className="lg:w-[500px] lg:h-[600px] md:w-[450px] md:h-[500px] w-full h-full">
                <Image
                  src={client}
                  alt="client"
                  width={500}
                  height={500}
                  className="lg:w-[500px] lg:h-[600px]  w-full h-full"
                />
              </div>

              <div className="absolute bg-indigo-600 rounded-3xl lg:w-48 lg:h-44 w-60 h-32 md:w-48 md:h-36 md:top-32 md:left-96 top-40 left-0  lg:top-52 lg:-left-16 text-center flex items-center justify-center flex-col">
                <h2
                  className={`text-transparent font-poppins bg-gradient-to-r lg:text-[40px] text-[25px] font-bold from-slate-100 via-emerald-100 to-white bg-clip-text   sm:text-md`}
                >
                  {`100 +`}
                </h2>
                <h2 className="text-lg font-medium font-poppins">
                  Happy Customers
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedBack;
