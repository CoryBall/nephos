import React from 'react';
import Link from "next/link";

const driveOptions: string[] = [
    "Amazon S3",
    "Digital Ocean Space",
    "Vultr Object Storage"
]

const NewDrivePage: React.FC = () => {
  return(
      <div className="w-full h-full flex">
        <div className="w-1/3 border-r-4 bg-white">
          {driveOptions.map((option: string) => (
              <div key={option} className="text-2xl">
                <span>{option}</span>
              </div>
          ))}
        </div>
        <div className='flex justify-center'>
          <Link href={'/home'}>
            <a className='btn-white'>Home</a>
          </Link>
        </div>
      </div>
  )
}

export default NewDrivePage