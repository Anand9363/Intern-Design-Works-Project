import React, { useEffect, useState } from 'react';
import { girl, line, man, redgirl } from './images';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const AboutEdgen = () => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView && count === 0) {
      let start = 0;
      const end = 15;
      const duration = 1000;
      const increment = Math.ceil(end / (duration / 50));
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, 50);
    }
  }, [inView, count]);

  return (
    <>
      <div className="2xl:container mx-auto py-32">
        <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="md:grid md:grid-cols-2 sm:flex sm:flex-col">
            <div className="sm:flex sm:flex-col md:flex md:flex-col md:gap-10">
              <img src={man} className="md:h-[40%] py-7 md:w-[70%] md:ml-16" alt="" />
              <img src={girl} className="md:h-[50%] md:w-[90%]" alt="" />
            </div>
            <div className="sm:flex sm:flex-col">
              <img src={redgirl} className="h-[60%] w-[100%] py-16" alt="" />
              <div
                ref={ref}
                className="bg-gradient-to-r from-blue-500 to-[#00F0AA] mb-36 p-6 rounded-lg text-white"
              >
                <span className="text-4xl font-bold flex flex-row justify-between items-center">
                  {count}
              <Link to="/categories">
              <button>
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1.5em"
                    height="1.5em"
                  >
                    <path
                      fill="currentColor"
                      d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"
                    ></path>
                  </svg>
                 </button>
              </Link>
                </span>
                <p className="font-semibold">years experience</p>
              </div>
            </div>
          </div>

          <div>
            <div className="px-6 py-12 md:px-16 lg:px-24 bg-gray-50">
              <h3 className="font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent py-5">
                About Edugen
              </h3>
              <h1 className="text-4xl md:text-4xl font-bold leading-tight mt-2">
                Discover Our Vision for Digital{' '}
                <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
                  Education
                  <img src={line} className="w-60" alt="" />
                </span>
              </h1>
              <p className="text-gray-500 mt-4 font-semibold max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
              </p>
              <h2 className="text-3xl font-bold mt-8">OUR MISSION & VISION</h2>
              <p className="text-gray-500 mt-4 font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="text-gray-500 font-semibold mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="mt-8 flex flex-col md:flex-row items-center gap-10">
               <Link to="/categories">
               <button   className="bg-black text-white px-6 py-3 flex items-center gap-2 rounded-md text-lg font-medium hover:bg-gray-800 transition">
                  View All Categories
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="2em"
                    height="2em"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M13.483 4.47a.75.75 0 0 1 1.06 0l6.988 7a.75.75 0 0 1 0 1.06l-6.988 7a.75.75 0 0 1-1.061-1.06l5.709-5.719L3 12.762a.75.75 0 0 1-.002-1.5l16.194-.01l-5.711-5.722a.75.75 0 0 1 0-1.06"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button> 
               </Link>
              
                

                <div className="flex items-center gap-4">
                  <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/about4.jpg"
                    alt="Jason S. Ellis"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">Jason S. Ellis</h4>
                    <p className="text-gray-500 text-sm">CEO & Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutEdgen;
