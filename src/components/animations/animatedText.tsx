import React from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

export type AnimatedTextProps = {
  text: string;
};

type MappedLetter = {
  letter: string;
  id: string;
};

const AnimatedText: React.FC<AnimatedTextProps> = (
  props: AnimatedTextProps
) => {
  const { text } = props;

  const letters: MappedLetter[] = text.split('').map((letter: string) => {
    return {
      id: uuidv4(),
      letter,
    } as MappedLetter;
  });

  return (
    <div className="flex text-7xl font-sans my-3 space-x-1">
      {letters.map((letter: MappedLetter) => {
        if (letter.letter === ' ') return <span className="w-8"> </span>;

        return (
          <motion.div
            key={letter.id}
            className=""
            whileHover={{
              position: 'relative',
              zIndex: 1,
              scale: [1, 1.6, 1.2],
              rotate: [0, 10, -10, 0],
              transition: {
                duration: 0.2,
              },
            }}
          >
            <span key={letter.id} className="rounded-lg">
              {letter.letter}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AnimatedText;
