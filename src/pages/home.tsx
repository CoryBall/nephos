import React from 'react';
import { Link } from 'react-router-dom';

import { AnimatedText, PageWrapper } from '../components';

const HomePage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="z-10 w-full h-1/2 my-auto flex flex-col justify-between">
        <div className="flex mx-auto text-gray-100 max-w-md justify-center space-x-5 text-center text-5xl">
          <span className="my-auto" role="img" aria-label="cloud emoji">
            ☁
          </span>
          <AnimatedText text="Nephos" />
          <span className="my-auto" role="img" aria-label="cloud emoji">
            ☁
          </span>
        </div>
        <div className="w-1/3 flex flex-col mx-auto space-y-5">
          <Link to="/drives" className="btn btn-white text-center">
            View Drives
          </Link>
          <Link to="/drives/new" className="btn btn-white text-center">
            Add Drive
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default HomePage;
