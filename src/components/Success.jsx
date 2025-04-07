import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { line } from './images';

const Success = () => {
  return (
    <>
    <div className="2xl:container mx-auto mb-56 mt-28">
      <div className="w-[95%] mx-auto grid grid-cols-1">
        <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12">
          {/* Left Section - Image & Circle */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center">
            {/* Outer Circular Border */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
              <div className="absolute w-full h-full rounded-full border-8 border-transparent before:absolute before:inset-0 before:rounded-full before:border-[20px] before:border-blue-400 before:border-r-white before:z-10"></div>

              {/* Profile Image */}
              <img
                src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/testimonial1.jpg"
                alt="Main Testimonial"
                className="w-full h-full object-cover rounded-full border-8 border-white relative"
              />
            </div>

            {/* Floating Small Images */}
            <img
              src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/testimonial2.jpg"
              alt="Student"
              className="absolute -top-32 left-[30%] w-24 h-24 rounded-full border-4 border-white shadow-lg hidden md:block"
            />
            <img
              src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/testimonial3.jpg"
              alt="Student"
              className="absolute top-0 left-0 w-24 h-24 rounded-full border-4 border-white shadow-lg hidden md:block"
            />
            <img
              src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/testimonial4.jpg"
              alt="Student"
              className="absolute bottom-10 -left-4 w-24 h-24 rounded-full border-4 border-white shadow-lg hidden md:block"
            />
            <img
              src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/testimonial5.jpg"
              alt="Student"
              className="absolute sm:hidden  -bottom-32 left-52 w-24 h-24 rounded-full border-4 border-white shadow-lg hidden md:block"
            />
          </div>

          {/* Right Section - Testimonial Text */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <h5 className="font-bold bg-gradient-to-bl from-[#22c55e] via-[#0e7490] to-[#3b82f6] bg-clip-text text-transparent underline">
              Testimonials
            </h5>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2">
              Voices of Success: Hear from <br /> Our{" "}
              <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
                Students <img src={line} className='md:ml-20 w-[10] md:block' alt="" />
              </span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              Enrolling in courses at Edugen was the best decision I made for my career. The instructors were incredibly knowledgeable and supportive, guiding me through every step of the learning process. Thanks to their expert guidance, I was able to land a job in my desired field even before completing the course.
            </p>

            <div className="flex flex-col md:flex md:flex-row md:gap-12 items-center">
              {/* Student Details */}
              <div className="flex items-center mt-6">
                <img
                  src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/testimonial6.jpg"
                  alt="Student"
                  className="w-12 h-12 rounded-full border-2 border-teal-500"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Krystal France</h4>
                  <p className="text-gray-500">Ex-Student</p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-4 mt-6">
                <button className="p-6 border-2 border-black hover:bg-[#8A47CB] hover:text-white rounded-lg transition">
                  <FaArrowLeft />
                </button>
                <button className="p-6 border-2 border-black hover:bg-[#8A47CB] hover:text-white rounded-lg transition">
                  <FaArrowRight />
                </button>

                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
      
    </>
  )
}

export default Success


