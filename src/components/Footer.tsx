import Image from "next/image";
import Link from "next/link";
import React from "react";
import { logo } from "./Common/CdnAssets";
import { BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { generateWhatsAppLink } from "@/utils/whatsapp";

const Footer = () => {
  return (
    <footer className="border-t border-gray-500 px-4 py-8 bg-primary">
      <div className="grid lg:grid-cols-2 grid-cols-1 xs:grid-cols-1 w-full lg:px-10 px-4 gap-y-12 py-5">
        <div className="flex justify-center items-center  gap-x-5 text-center md:text-left">
          <div className="flex w-24  items-center justify-center">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="object-fit justify-center w-full"
            />
          </div>
          <div className="text-gray-500 py-5 text-[20px] font-medium lg:w-96">
            <p className="text-start text-transparent bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500 bg-clip-text">
              Want to explore your idea & vision into Real life ? Join by our
              service and grow your business with WeeroDigital
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-rows-1 gap:5 ">
          <div className="w-full  flex lg:justify-center justify-start items-center xs:items-start xs:justify-start">
            <div className="flex-col ">
              <div className="flex items-center  rounded-full py-2 px-6 mb-5    bg-[#180135] ">
                <span className="relative flex h-4 w-4 ">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full text-transparent bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500 bg-clip-textopacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-600"></span>
                </span>
                <span className="ml-2 text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-pink-500 bg-clip-text font-semibold text-[22px]">
                  Company
                </span>
              </div>
              <div className="px-4 gap-5">
                <Link href="#aboutus">
                  <p className="py-2 text-transparent bg-gradient-to-r from-gray-100 via-indigo-400 to-emerald-300 bg-clip-text font-medium underline hover hover-text-[20px]">
                    About Us
                  </p>
                </Link>
                {/* <Link href="/blogs">
                  <p className="py-2 text-transparent bg-gradient-to-r from-gray-100 via-indigo-400 to-emerald-300 bg-clip-text font-medium underline hover hover-text-[20px]">
                    Blogs
                  </p>
                </Link> */}
                <Link href="#showcase">
                  <p className="py-2 text-transparent bg-gradient-to-r from-gray-100 via-indigo-400 to-emerald-300 bg-clip-text font-medium underline hover hover-text-[20px]">
                    ShowCase
                  </p>
                </Link>
                <Link href="/terms">
                  <p className="py-2 text-transparent bg-gradient-to-r from-gray-100 via-indigo-400 to-emerald-300 bg-clip-text font-medium underline hover hover-text-[20px]">
                    Terms & Condition
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full my-8 lg:my-0 flex lg:justify-center justify-start items-center xs:items-start xs:justify-start ">
            <div className="flex-col ">
              <div className="flex items-center  rounded-full py-2 px-6 mb-5    bg-[#180135] ">
                <span className="relative flex h-4 w-4 ">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full text-transparent bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500 bg-clip-textopacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-600"></span>
                </span>
                <span className="ml-2 text-transparent bg-gradient-to-r from-lime-400 via-lime-500 to-pink-500 bg-clip-text font-semibold text-[22px]">
                  Contact
                </span>
              </div>
              <div className="px-4 gap-5">
                <p className="py-2 text-transparent bg-gradient-to-r from-gray-100 via-indigo-400 to-emerald-300 bg-clip-text font-medium underline hover hover-text-[20px]">
                  +880-1723560254
                </p>
                <p className="py-2 text-transparent bg-gradient-to-r from-gray-100 via-indigo-400 to-emerald-300 bg-clip-text font-medium underline hover hover-text-[20px]">
                  mail : weerodigital@gmail.com
                </p>

                <div className="flex space-x-5 py-6">
                  <Link
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsWhatsapp size={30} className="text-green-500" />
                  </Link>
                  <Link 
                  href="https://www.facebook.com/digital.weero"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <BsFacebook size={30} className="text-blue-500" />
                  </Link>
                  
                  <Link
                    href="https://www.linkedin.com/company/weerodigital/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsLinkedin size={30} className="text-sky-500" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center text-gray-500 border-t border-gray-700 py-4">
        <p>Copyright © 2023 All rights reserved by weeroDigital</p>
      </div>
    </footer>
  );
};

export default Footer;
