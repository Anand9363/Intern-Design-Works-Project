import React from "react";

const courses = [
  {
    title: "Introduction to Digital Marketing",
    lessons: 2,
    students: "4k Student",
    price: "Free",
    rating: 5,
    class:"Beginner",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses1.jpg",
  },
  {
    title: "Increasing Engagement with Instagram & Facebook",
    lessons: 2,
    students: "4k Student",
    price: "$24.33",
    rating: 5,
    class:"Beginner",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses2.jpg",
  },
  {
    title: "Full Stack Web Development Bootcamp",
    lessons: 2,
    students: "4k Student",
    price: "$24.05",
    rating: 5,
    class:"Beginner",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses3.jpg",
  },
  {
    title: "Introduction to Digital Marketing",
    lessons: 2,
    students: "4k Student",
    price: "Free",
    rating: 5,
    class:"Beginner",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses4.jpg",
  },
  {
    title: "Python Programming for Beginners",
    lessons: 2,
    students: "4k Student",
    price: "$10.50",
    rating: 5,
    class:"Beginner",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses5.jpg",
  },
  {
    title: "Graphic Design Mastery: From Concept to Creation",
    lessons: 2,
    students: "4k Student",
    price: "$24.33",
    rating: 5,
    class:"Beginner",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses6.jpg",
  },
];

const StarRating = ({ count }) => (
  <div className="flex gap-1 text-yellow-400">
    {Array(count)
      .fill()
      .map((_, i) => (
        <span key={i}>★</span>
      ))}
  </div>
);

const CourseGrid = () => {
  return (
    <div className="bg-[#fdf7fc] min-h-screen py-44 px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Courses Grid</h2>
        <p className="mt-2 text-gray-500">
          <span className="font-semibold">Home</span> -{" "}
          <span className="text-purple-600 font-medium">Courses Grid</span>
        </p>
      </div>

      {/* Course Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
  {courses.map((course, idx) => (
    <div
      key={idx}
      className="bg-white flex-col rounded-xl shadow-sm p-4 flex gap-4 hover:shadow-lg transition-all duration-700"
    >
      {/* ✅ Full-size course image */}
      <div className="relative w-full h-32 rounded-md overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-52 object-cover"
        />
            <span className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                                {course.class}
                            </span>
        
      </div>
      

      <div className="flex flex-col justify-between">
        <div>
          <span
            className={`text-sm font-semibold ${
              course.price === "Free" ? "text-green-600" : "text-purple-600"
            }`}
          >
            {course.price}
          </span>
          <h3 className="text-lg font-bold mt-1">{course.title}</h3>
        </div>
        <div className="mt-2 flex items-center text-gray-500 text-sm gap-4">
          <p>📚 {course.lessons} Lessons</p>
          <p>👥 {course.students}</p>
        </div>
        <StarRating count={course.rating} />
      </div>
    </div>
  ))}
</div>



   

    </div>
  );
};

export default CourseGrid;
