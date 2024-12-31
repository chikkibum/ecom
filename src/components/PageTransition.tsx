import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95, // Slight zoom-out effect
  },
  in: {
    opacity: 1,
    scale: 1, // Restore to normal size
  },
  out: {
    opacity: 0,
    scale: 1.05, // Slight zoom-in effect on exit
  },
};

const pageTransition = {
  type: "ease out", // Smooth spring animation
  stiffness: 100, // Gentle spring effect
  duration: 0.2, // Reduced duration for subtlety
};

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};
