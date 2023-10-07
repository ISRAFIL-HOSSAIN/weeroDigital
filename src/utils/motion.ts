interface AnimationOptions {
  type: string;
  delay: number;
  duration: number;
  ease: string;
}

interface Variant {
  hidden: {
    [key: string]: number | string;
  };
  show: {
    [key: string]: number | string | AnimationOptions;
    transition: AnimationOptions;
  };
}

export const textVariant = (delay: number): Variant => {
  return {
    hidden: {
      y: 20, // Adjusted initial y value to start slightly higher
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8, // Adjusted duration for smoother animation
        delay: delay,
        ease: "easeOut", // Changed ease function for a smoother exit
      },
    },
  };
};


export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
): Variant => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type as any, // Type assertion since type can be string
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};
export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren: number,
  delayChildren?: number
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
