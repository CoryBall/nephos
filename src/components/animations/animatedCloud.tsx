import React from 'react';
import { motion } from 'framer-motion';

export type AnimatedCloudProps = {
  tailwindHeight: string;
};

const AnimatedCloud: React.FC<AnimatedCloudProps> = (
  props: AnimatedCloudProps
) => {
  const { tailwindHeight } = props;

  const delay = Math.floor(Math.random() * 5) + 1;

  return (
    <motion.div
      className={`cloud top-${tailwindHeight}`}
      animate={{
        x: [-100, 1200],
      }}
      transition={{
        duration: 10,
        delay,
        ease: 'easeInOut',
        times: [0, 1],
        repeat: Infinity,
        repeatDelay: 4,
      }}
    >
      <span>☁</span>
    </motion.div>
  );
};

export default AnimatedCloud;
