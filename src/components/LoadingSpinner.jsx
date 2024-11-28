import React from 'react';
import { motion } from 'framer-motion';

function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        className="w-16 h-16 border-4 border-primary-200 border-t-primary-500 rounded-full"
      />
    </div>
  );
}

export default LoadingSpinner;