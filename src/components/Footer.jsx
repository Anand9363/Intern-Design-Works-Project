import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGoogle,
  FaArrowUp,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="2xl:container mx-auto bg-[#15192D]">
      <div className="w-[95%] mx-auto">
        <footer
          ref={ref}
          className={`text-white py-12 relative transform transition-all duration-1000 ease-in-out ${
            inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h2 className="text-2xl font-bold flex items-center space-x-2">
                <img
                  src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/white-logo.svg"
                  alt="logo"
                />
              </h2>
              <p className="text-gray-400 mt-4">
                Nullam interdum libero vitae pretium aliquam donec nibh purus
                laoreet in ullamcorper vel malesuada sit amet enim.
              </p>
              <a
                href="mailto:support.edugen@email.com"
                className="text-purple-400 underline mt-4 block"
              >
                support.edugen@email.com
              </a>
              <div className="flex space-x-4 mt-4">
                <FaFacebookF className="p-2 w-8 h-8 bg-gray-700 rounded-full text-xl cursor-pointer hover:bg-purple-500 transition" />
                <FaTwitter className="p-2 w-8 h-8 bg-gray-700 rounded-full text-xl cursor-pointer hover:bg-purple-500 transition" />
                <FaLinkedinIn className="p-2 w-8 h-8 bg-gray-700 rounded-full text-xl cursor-pointer hover:bg-purple-500 transition" />
                <FaGoogle className="p-2 w-8 h-8 bg-gray-700 rounded-full text-xl cursor-pointer hover:bg-purple-500 transition" />
              </div>
            </div>

            {/* Links Section */}
            <div>
              <h3 className="text-lg font-semibold">Links</h3>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li className="hover:text-purple-400 cursor-pointer">Home</li>
                <li className="hover:text-purple-400 cursor-pointer">About</li>
                <li className="hover:text-purple-400 cursor-pointer">Courses</li>
                <li className="hover:text-purple-400 cursor-pointer">News</li>
                <li className="hover:text-purple-400 cursor-pointer">Contact</li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li className="hover:text-purple-400 cursor-pointer">Terms of Use</li>
                <li className="hover:text-purple-400 cursor-pointer">Terms Conditions</li>
                <li className="hover:text-purple-400 cursor-pointer">Payment Method</li>
                <li className="hover:text-purple-400 cursor-pointer">Privacy Policy</li>
                <li className="hover:text-purple-400 cursor-pointer">Licensing</li>
              </ul>
            </div>

            {/* Install App Section */}
            <div>
              <h3 className="text-lg font-semibold">Install Our App</h3>
              <p className="text-gray-400 mt-4">From App Store Or Google Play</p>
              <div className="md:mt-4 md:flex md:flex-row gap-5">
                <img
                  src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/google.svg"
                  alt="Google Play"
                  className="w-40 cursor-pointer"
                />
                <img
                  src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/app-store.svg"
                  alt="App Store"
                  className="w-40 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="md:mt-12 md:flex md:flex-row md:justify-between md:items-center md:py-4 md:text-center md:text-gray-300">
            <p className="sm:text-sm">
              Copyright © 2024 Edugen All Rights Reserved.
            </p>
            <div className="flex justify-center items-center space-x-6 mb-7 text-sm">
              <a href="#" className="hover:underline">Company</a>
              <a href="#" className="hover:underline">Support</a>
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Contact</a>
            </div>
          </div>

          {/* Scroll to Top */}
          <button
            className="absolute bottom-2 right-[45%] bg-purple-500 text-white p-3 border-2 rounded-full text-xl hover:bg-purple-600 transition"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FaArrowUp />
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
