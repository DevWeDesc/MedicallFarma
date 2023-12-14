import { motion } from "framer-motion";
import React, { ReactNode } from "react";

export const AnimationScroll = ({
  children,
  initialAnimation,
}: {
  children: ReactNode;
  initialAnimation?: boolean;
}) => {
  const variantAnimationScroll = {
    offscreen: {
      opacity: 0,
      y: 200,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2,
      },
    },
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      exit="offscreen"
      viewport={{ once: true, amount: initialAnimation ? 0.1 : 0.5 }}
      variants={variantAnimationScroll}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};
