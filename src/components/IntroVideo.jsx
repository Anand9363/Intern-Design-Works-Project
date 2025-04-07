import React from 'react';
import { FaPlay } from 'react-icons/fa';

const IntroVideo = () => {
  return (
    <div className="2xl:container mx-auto px-4 py-10">
      <section className="relative w-full h-[350px] md:h-[500px] overflow-hidden rounded-xl shadow-lg">
        {/* Background Image */}
        <img
          src="https://images.pexels.com/photos/6238109/pexels-photo-6238109.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Intro Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Intro Text */}
        <div className="absolute top-1/2 left-6 md:left-20 z-20 -translate-y-1/2">
          <h2 className="text-white text-4xl md:text-6xl font-extrabold opacity-50 leading-tight">
            <p>INTRO</p>
            <p className="ml-6 md:ml-10">VIDEO</p>
          </h2>
        </div>

        {/* Play Button with Animated Shape */}
        <div className="absolute right-4 md:right-20 top-1/2 transform -translate-y-1/2 z-30">
          <div className="relative w-40 h-40 md:w-64 md:h-64 animate-pulse">
            <img
              src="https://demo.themeies.com/edugen/wp-content/uploads/2024/10/video-shapessx.svg"
              alt="Shape"
              className="w-full h-full object-contain"
            />
            {/* Play Button */}
            <a
              href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-24 md:h-24 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition duration-300"
            >
              <FaPlay className="text-black text-lg md:text-xl ml-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroVideo;
