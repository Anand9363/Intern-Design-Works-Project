import React from "react";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const blogPosts = [
  {
    id: 1,
    title: "Co-Education Makes You Respect The People",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/blog9.jpg", // Update with correct paths
    author: "admin",
    date: "September 29, 2024",
  },
  {
    id: 2,
    title: "Professional Ceramic Maudling for Beginners",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/blog10.jpg",
    author: "admin",
    date: "September 29, 2024",
  },
  {
    id: 3,
    title: "Education Is About Create Leaders For Tomorrow",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/blog11.jpg",
    author: "admin",
    date: "September 29, 2024",
  },
];

const BlogPosts = () => {
  return (
    <section className="2xl:container mx-auto px-6 py-12">
      {/* Header */}
 <div className="w-[95%] mx-auto">
 <div className="flex flex-col justify-between items-center md:flex md:flex-row md:justify-between md:items-center ">
        <div>
          <p className=" font-bold text-2xl  bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent py-6">Our Blog</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Read Our Latest{" "}
            <span className=" font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">Blog</span>
          </h2>
        </div>
   <Link to="/newblog">
   <button className="bg-black text-white px-6 py-5 font-bold rounded-md hover:bg-gray-800 transition  mt-5 md:mt-0">
          View All Blog →
        </button>
   </Link>
      </div>
 </div>

      {/* Blog Cards */}
      <div className="w-[95%]  mx-auto mt-10 grid md:grid-cols-3 gap-14">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg  overflow-hidden hover:scale-110 hover:shadow-xl  transition-all duration-700">
            <Link to="/newblog">
            <img src={post.image} alt={post.title} className="w-full h-64  p-6 " />
            </Link>

            <div className="p-6">
              <div className="flex justify-center  items-center text-gray-500 text-sm mb-3">
                <FaUser className="mr-2" />
                <Link to="/newblog">
                <span>{post.author}</span>
                </Link>
                <FaCalendarAlt className="ml-4 mr-2" />
                <span>{post.date}</span>
              </div>

              <h3 className="text-xl font-bold">{post.title}</h3>
            <Link to="/newblog">
            <p className="mt-4 text-gray-600 font-semibold flex justify-center items-center cursor-pointer">
                Read More →
              </p>
            </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;
