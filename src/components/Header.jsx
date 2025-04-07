import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Correct import
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#E1D0F1] to-[#00b4d8] overflow-hidden pt-28">
      {/* ✅ Navbar over background image */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between py-16">
        {/* Left Section */}
        <div className="text-left max-w-xl">
          <h3 className="font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
            Online Education Website
          </h3>
          <h1 className="text-4xl lg:text-5xl font-bold mt-2">
            Empower Your <br /> Future, Learn <br />
            Digital{" "}
            <span className="font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent underline">
              Skills
            </span>
          </h1>
          <p className="text-gray-700 mt-4">
            Embark on a Journey of Digital Discovery. Expert-Led{" "}
            <p>Courses Designed to Equip.</p>
          </p>

          {/* Buttons */}
          <div className="flex items-center mt-6 space-x-4">
            <Link to="/contact">
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition">
                <span>Enroll Now</span>
              </button>
            </Link>
            <button
  onClick={() => window.open('https://www.youtube.com/watch?v=Cn4G2lZ_g2I', '_blank')}
  className="bg-white shadow-lg p-4 rounded-full flex items-center hover:bg-gray-200 transition"
>
  <FaPlay className="text-purple-500 text-lg" />
</button>

          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative w-full max-w-lg mt-10 lg:mt-0">
          <img
            src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/banner1.png"
            alt="Woman with Laptop"
            className="w-full"
          />

          {/* Udemy Rating Badge */}
          <div className="absolute top-48 -right-6 hover:scale-110 bg-white px-4 py-2 rounded-lg transition-all duration-700 shadow-lg sm:flex items-center space-x-2 hidden md:flex md:flex-row">
            <img
              src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/udemy.svg"
              alt=""
            />
            <span className="text-black font-medium">4.9</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
              <path
                fill="#FFB200"
                d="m19.555 23.411l-6.664-3.285a1.26 1.26 0 0 0-1.202.045l.006-.003l-6.416 3.75a.61.61 0 0 1-.902-.626v.003l.994-7.542a1.25 1.25 0 0 0-.392-1.082l-.001-.001l-4.571-4.247a1.265 1.265 0 0 1 .648-2.17l.007-.001l5.987-1.108c.421-.078.765-.355.935-.727l.003-.008L10.478.746a1.272 1.272 0 0 1 2.271-.087l.003.007l2.881 5.471c.197.365.558.62.981.666h.006l6.045.681a1.265 1.265 0 0 1 .811 2.119l.001-.001l-4.27 4.562a1.25 1.25 0 0 0-.315 1.116l-.001-.008l1.52 7.453a.61.61 0 0 1-.86.683l.004.002z"
              ></path>
            </svg>
          </div>

          {/* Student Badge */}
          <div className="absolute bottom-5 -left-10 bg-white px-9 sm:flex flex-col hidden md:flex md:flex-col justify-center items-center py-2 rounded-lg shadow-lg hover:scale-110 transition-all duration-700">
            <h4 className="text-2xl font-bold flex flex-col justify-center items-center">
              <svg
                className="rounded-full p-4 hover:bg-purple-500 bg-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="3em"
                height="3em"
              >
                <g
                  fill="#049CC6"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                >
                  <path d="M24 20C27.866 20 31 16.866 31 13C31 9.13401 27.866 6 24 6C20.134 6 17 9.13401 17 13C17 16.866 20.134 20 24 20Z"></path>
                  <path d="M6 40.8V42H42V40.8C42 36.3196 42 34.0794 41.1281 32.3681C40.3611 30.8628 39.1372 29.6389 37.6319 28.8719C35.9206 28 33.6804 28 29.2 28H18.8C14.3196 28 12.0794 28 10.3681 28.8719C8.86278 29.6389 7.63893 30.8628 6.87195 32.3681C6 34.0794 6 36.3196 6 40.8Z"></path>
                </g>
              </svg>
              STUDENTS
            </h4>
            <p className="text-lg font-semibold text-black">10K+</p>
            <div className="flex flex-row w-7 h-7 justify-center items-center">
              <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/user1.jpg" alt="" />
              <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/user2.jpg" alt="" />
              <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/user3.jpg" alt="" />
              <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/user4.jpg" alt="" />
              <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/user5.jpg" alt="" />
            </div>
          </div>

          {/* Chat with Mentor Badge */}
          <div className="absolute bottom-7 -right-6 hidden md:flex md:flex-row justify-center items-center gap-3 bg-white rounded-md hover:bg-[#8A47CB] transition-colors duration-500 hover:text-white px-3 py-2">
            <div className="flex flex-col justify-center items-center hover:text-white">
              <p className="text-blue-500 font-medium hover:text-white">Chat with a mentor</p>
              <p>Find your mentor here</p>
            </div>
            <img
              src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/message-icon.svg"
              className="w-14 h-14 bg-gradient-to-r from-blue-500 rounded-full px-3 bg-[#00F0AA]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
