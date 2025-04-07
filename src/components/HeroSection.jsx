import React from "react";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-between p-10">
      <div className="max-w-lg">
        <p className="text-blue-500 font-medium">Online Education Website</p>
        <h1 className="text-5xl font-bold mt-2">
          Empower Your Future, Learn{" "}
          <span className="text-blue-500 underline">Digital Skills</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Embark on a Journey of Digital Discovery: Expert-Led Courses
          Designed to Equip.
        </p>
        <div className="mt-6">
          <button className="bg-black text-white px-6 py-3 rounded-lg mr-4">
            Enroll Now
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://via.placeholder.com/400"
          alt="Student"
          className="rounded-lg"
        />
        <div className="bg-white shadow-lg p-2 rounded-lg mt-2 flex items-center space-x-2">
          <span className="text-purple-600 font-bold">Udemy</span>
          <span className="text-yellow-500">⭐ 4.9</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
