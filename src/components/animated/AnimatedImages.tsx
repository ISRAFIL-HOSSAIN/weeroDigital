"use client"
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  herovector,
  herovector1,
  herovector2,
  herovector3,
  herovector4,
  herovector5,
} from "../../app/assets/Loader";
import Image from "next/image";
import CanvasLoader from "../Loader";

const imageUrls = [
  herovector,
  herovector1,
  herovector2,
  herovector3,
  herovector4,
  herovector5,
];

const AnimatedImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const imageComponents = useMemo(() => {
    return imageUrls.map((imageUrl, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, type: "tween" }}
        className={`transition-opacity ${
          index === currentImageIndex ? "opacity-100" : "opacity-0"
        }`}
      >
        {index === currentImageIndex && (
          <Image
            src={imageUrl}
            alt={`Image ${index + 1}`}
            width={800}
            height={800}
            className="lg:w-full ml-5 sm:w-[450px] flex items-center  justify-center sm:pl-16 h-[450px] "
          />
        )}
      </motion.div>
    ));
  }, [currentImageIndex]);

  const renderContent = useCallback(() => {
    return imageUrls.length > 0 ? (
      <AnimatePresence>{imageComponents}</AnimatePresence>
    ) : (
      <CanvasLoader />
    );
  }, [imageComponents]);

  return <>{renderContent()}</>;
};

export default AnimatedImages;
