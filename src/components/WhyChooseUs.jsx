import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="2xl:container mx-auto px-4 md:px-10 py-20 bg-[#FFF7FC]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Section - Text & Progress Bars */}
        <div>
          <p className="text-base font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 leading-tight">
            One Platform & Many Courses
            <br />
            <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
              For You
            </span>
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s.
          </p>

          {/* Progress Bars */}
          <div className="mt-8 space-y-5">
            {[
              { label: "Skill Mastery Levels", percent: 80 },
              { label: "Learning Milestones", percent: 90 },
              { label: "Digital Proficiency Journey", percent: 99 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-gray-700 font-medium text-sm md:text-base">
                  <p>{item.label}</p>
                  <p>{item.percent}%</p>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mt-2">
                  <div
                    className="h-2 bg-gradient-to-r from-blue-500 to-green-400 rounded-full"
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Image with Circle Background */}
        <div className="relative w-full flex justify-center">
          <div className="relative w-[250px] sm:w-[300px] md:w-[350px] h-auto">
            {/* Colorful Circle Background */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 md:w-[450px] md:h-[450px]  bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 rounded-full z-0"></div>

            {/* Image */}
            <img
              src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/choose1.png"
              alt="Student"
              className="relative z-10 w-full object-contain"
            />

            {/* Decorative Floating Circles */}
            <div className="absolute top-2 left-2 w-8 h-8  bg-green-400 rounded-full z-10"></div>
            <div className="absolute bottom-4 left-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500  rounded-full z-10"></div>
            <div className="absolute bottom-4 right-5 w-8 h-8 bg-purple-500 rounded-full z-10"></div>
            <div className="absolute top-6 right-6 w-6 h-6 border-2 border-blue-400 rounded-full z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
