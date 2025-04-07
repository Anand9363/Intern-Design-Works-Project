import React from 'react';
import { FaPlay, FaEnvelope, FaCheckCircle, FaLaptop, FaGlobe } from 'react-icons/fa';

const CourseDetails = () => {
  return (
    <div className="bg-pink-50 min-h-screen px-4 py-32">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Full Stack Web Development Bootcamp</h1>
        <p className="text-lg text-gray-600 mt-1  font-semibold">
          Home {'-'} Project {'-'} Full Stack Web Development Bootcamp
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <img
            src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses20.jpg"
            alt="course"
            className="w-full h-[60vh] object-cover rounded-lg"
          />

          <div>
            <span className="bg-green-600 text-white text-sm px-3 py-3 rounded-md font-semibold">Data Science</span>
            <h2 className="text-2xl font-bold mt-2">Full Stack Web Development Bootcamp</h2>
            <p className="text-sm text-gray-500">
              Trainer: <span className="font-semibold text-gray-700">Natasha Nahid</span> | Last Update: 25 February, 2024
            </p>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 text-sm font-semibold border-b pb-2">
            <button className="text-purple-600 border-b-2 border-purple-600">Overview</button>
            <button className="text-gray-600 hover:text-purple-600">Curriculum</button>
            <button className="text-gray-600 hover:text-purple-600">Instructor</button>
            <button className="text-gray-600 hover:text-purple-600">Reviews</button>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-purple-700">Course Description</h3>
            <p className="text-gray-700 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>
          </div>

          {/* What You Will Learn */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-purple-700">What You Will Learn?</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Learn HTML, CSS, JS, React</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Understand backend with Node.js</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Build real-world projects</li>
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-purple-700">Requirements</h3>
            <div className="flex flex-wrap gap-4 text-sm text-gray-700">
              <span className="flex items-center gap-2 bg-white px-3 py-2 rounded-md shadow"><FaLaptop /> Computer/Mobile</span>
              <span className="flex items-center gap-2 bg-white px-3 py-2 rounded-md shadow">📝 Paper & Pencil</span>
              <span className="flex items-center gap-2 bg-white px-3 py-2 rounded-md shadow"><FaGlobe /> Internet Connect</span>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Video Preview */}
          <div className="relative">
            <img
              src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses31.jpg"
              alt="video"
              className="w-full h-48 object-cover rounded-lg"
            />
            <a
              href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center"
            >
              <button className="bg-white shadow-lg p-4 rounded-full hover:bg-gray-200 transition">
                <FaPlay className="text-purple-600 text-lg" />
              </button>
            </a>
          </div>

          {/* Enrollment */}
          <div className="bg-white rounded-lg shadow p-6 space-y-4">
            <div className="text-xl font-semibold text-green-600">Free</div>
            <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 flex items-center justify-center gap-2">
              <FaEnvelope /> Enroll Now
            </button>

            <div className="text-sm text-gray-700 space-y-2 mt-4">
              <p><strong>Instructor:</strong> David Smith</p>
              <p><strong>Lectures:</strong> 21 Lessons</p>
              <p><strong>Duration:</strong> 28hr 36min</p>
              <p><strong>Enrolled:</strong> 256 Students</p>
              <p><strong>Course Level:</strong> Intermediate</p>
              <p><strong>Language:</strong> English</p>
            </div>

            <div className="flex gap-3 mt-2">
              <button className="text-blue-500 hover:underline">Fb</button>
              <button className="text-sky-400 hover:underline">Twitter</button>
              <button className="text-pink-600 hover:underline">Insta</button>
            </div>
          </div>

          {/* Related Courses */}
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="font-semibold mb-2">Related Courses</h4>
            <div className="space-y-3 text-sm text-gray-700">
              <p>✅ Basics of Designing...</p>
              <p>✅ Frontend Bootcamp...</p>
              <p>✅ Backend for Beginners...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
