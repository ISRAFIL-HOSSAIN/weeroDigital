"use client";
import React from "react";
import { styles } from "../styles";
import { textVariant, fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

// interface Props {
//   subtitle?: string;
//   title?: string;
//   subtext?: string;
// }

const SectionTitle = ({ subtitle, title, subtext,align,}) => {
  return (
    <div className={`mt-10 lg:px-16 px-5 justify-${align} items-${align} flex flex-col w-full `}>
      {/* Using motion.div with textVariant */}
      <motion.div>
        <p
          className={`text-center  text-transparent  bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500 bg-clip-text ${styles.sectionSubText}`}
        >
          {subtitle}
        </p>

        <h2
          className={`text-center text-transparent bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500 bg-clip-text ${styles.sectionHeadText} mb-5 sm:text-md`}
        >
          {title}
        </h2>
      </motion.div>
      {/* Using motion.p with fadeIn */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[18px] max-w-5xl leading-[35px] text-center"
      >
        {subtext}
      </motion.p>
    </div>
  );
};

export default SectionTitle;
