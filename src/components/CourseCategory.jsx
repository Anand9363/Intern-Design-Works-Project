// src/components/CourseCategory.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Design,
  development,
  graphic,
  line,
  marketing,
  network,
  science
} from './images'; // Make sure these images are correctly imported

const CourseCategory = () => {
  const navigate = useNavigate();

  return (
    <div className="py-6">
      <div className="2xl:container mx-auto">
        {/* Header Section */}
        <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 justify-end items-end py-6">
          {/* Title */}
          <div>
            <p className="font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Course Category
            </p>
            <div className="sm:text-center md:text-left mt-2">
              <p className="text-[45px] font-bold">
                Explore Top
                <span className="block md:inline-block text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent md:ml-3">
                  Categories
                  <img src={line} className="w-[40%] md:w-full" alt="" />
                </span>
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <button
              onClick={() => navigate('/categories')}
              className="flex flex-row justify-center items-center gap-4 bg-black text-white font-bold px-8 py-4 rounded-md mt-7 hover:scale-105 transition duration-300"
            >
              View All Categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="2.5em"
                height="2.5em"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M13.483 4.47a.75.75 0 0 1 1.06 0l6.988 7a.75.75 0 0 1 0 1.06l-6.988 7a.75.75 0 0 1-1.061-1.06l5.709-5.719L3 12.762a.75.75 0 0 1-.002-1.5l16.194-.01l-5.711-5.722a.75.75 0 0 1 0-1.06"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Category Cards */}
        <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { img: Design, title: 'Web Design' },
            { img: marketing, title: 'Digital Marketing' },
            { img: science, title: 'Data Science' },
            { img: development, title: 'Software Development' },
            { img: graphic, title: 'Graphic Design' },
            { img: network, title: 'Network Administration' }
          ].map((item, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? 'bg-[#ffebdf]' : 'bg-[#EFFFDF]'
              } flex flex-col justify-center items-center py-16 rounded-xl gap-4 hover:scale-105 transition-all duration-700`}
            >
              <img src={item.img} alt={item.title} className="h-28" />
              <p className="font-bold text-[30px]">{item.title}</p>
              <p className="text-[20px] font-semibold">78 Courses</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCategory;
