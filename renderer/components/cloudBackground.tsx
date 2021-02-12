import React from 'react';
import AnimatedCloud from './animatedCloud'

const CloudBackground: React.FC = () => {
  return(
      <>
        <AnimatedCloud tailwindHeight={'0'} />
        <AnimatedCloud tailwindHeight={'1/4'} />
        <AnimatedCloud tailwindHeight={'3/4'} />
      </>
  )
}

export default CloudBackground