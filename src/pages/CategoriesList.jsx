import React from "react";

const courses = [
  {
    title: "Basic Fundamentals of Interior & Graphics Design",
    lessons: 2,
    students: "4k Student",
    price: "Free",
    rating: 5,
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses13.jpg",
  },
  {
    title: "Increasing Engagement with Instagram & Facebook",
    lessons: 2,
    students: "4k Student",
    price: "$24.33",
    rating: 5,
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses14.jpg",
  },
  {
    title: "Introduction to Color Theory & Basic UI/UX",
    lessons: 2,
    students: "4k Student",
    price: "$24.05",
    rating: 5,
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses15.jpg",
  },
  {
    title: "Financial Security Thinking and Principles Theory",
    lessons: 2,
    students: "4k Student",
    price: "Free",
    rating: 5,
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses16.jpg",
  },
  {
    title: "Logo Design: From Concept to Presentation",
    lessons: 2,
    students: "4k Student",
    price: "$10.50",
    rating: 5,
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses17.jpg",
  },
  {
    title: "Professional Ceramic Molding for Beginners",
    lessons: 2,
    students: "4k Student",
    price: "$24.33",
    rating: 5,
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses18.jpg",
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

const CategoriesList = () => {
  return (
    <div className="bg-[#fdf7fc] min-h-screen py-44 px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Courses List</h2>
        <p className="mt-2 text-gray-500">
          <span className="font-semibold">Home</span> -{" "}
          <span className="text-purple-600 font-medium">Courses List</span>
        </p>
      </div>

      {/* Course Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-sm p-4 flex gap-4 hover:shadow-lg transition"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-28 h-28 object-cover rounded-md"
            />
            <div className="flex flex-col justify-between">
              <div>
                <span
                  className={`text-sm font-semibold ${
                    course.price === "Free"
                      ? "text-green-600"
                      : "text-purple-600"
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

export default CategoriesList;
