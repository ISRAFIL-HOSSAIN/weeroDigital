"use client"

import { SectionWrapper } from "@/hoc";
import React from 'react'
import { motion } from "framer-motion";

const ScrollDown = () => {
  return (
    <div className="relative h-full my-5 py-10">
        <div className="w-full flex justify-center items-center lg:-mb-5 ">
          <a href="#services">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#7664fcbb] flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.7,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full green-pink-gradient mb-1"
              />
            </div>
          </a>
        </div>
       
      </div>
  )
}

export default   SectionWrapper(ScrollDown, "services");