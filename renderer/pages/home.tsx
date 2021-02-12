import React from 'react'
import Link from 'next/link'
import {AnimatedText} from "../components/animatedText";
import CloudBackground from "../components/cloudBackground";

const HomePage: React.FC = () => {
  return (
      <React.Fragment>
        <CloudBackground/>
        <div className="z-10 w-full h-3/4 mt-5 flex flex-col justify-between">
          <div className="flex mx-auto max-w-md justify-center space-x-5 text-center text-5xl">
            <span className="my-auto" role="img" aria-label="cloud emoji">☁</span>
            <AnimatedText text="Nephos"/>
            <span className="my-auto" role="img" aria-label="cloud emoji">☁</span>
          </div>
          <div className='mt-auto flex justify-center'>
            <Link href={'/drives/new'}>
              <a className='btn-white'>Connect your first drive</a>
            </Link>
          </div>
        </div>
      </React.Fragment>
  )
}

export default HomePage
