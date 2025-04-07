import React from 'react';
import { FaUser, FaCalendarAlt, FaComment } from 'react-icons/fa';

const NewBlogPost = () => {
  return (
    
    <div className="max-w-7xl mx-auto px-4 py-44 grid md:grid-cols-3 gap-10">
        
      {/* Main Blog Content */}
      <div className="md:col-span-2">
        
        <img
          src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/blog9.jpg"
          alt="Main blog"
          className="w-full h-auto rounded-lg"
        />
        <div className="flex items-center gap-4 text-gray-500 text-sm mt-4">
          <span className="flex items-center gap-1">
            <FaUser /> Admin
          </span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt /> September 28, 2024
          </span>
          <span className="flex items-center gap-1">
            <FaComment /> 2 Comments
          </span>
        </div>

        <h1 className="text-3xl font-bold my-4">
          Learn At Your Own Pace, with Lifetime Access On Mobile & Desktop
        </h1>

        <p className="text-gray-600 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </p>

        <blockquote className="bg-green-500 text-white p-6 rounded-md shadow-md mb-6">
          <p className="italic text-lg">
            “Education is one of the most powerful aspects of life. Education and learning allow us to make sense of the world around us.”
          </p>
          <p className="text-right mt-4 font-semibold">— Rosalina D. Jackson</p>
        </blockquote>

        <p className="text-gray-600 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <img
            src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/blog5.jpg"
            className="rounded-md"
            alt="Blog extra 1"
          />
          <img
            src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/blog6.jpg"
            className="rounded-md"
            alt="Blog extra 2"
          />
        </div>

        <h2 className="text-xl font-semibold mb-2">
          Education Is About Academic Excellence And Cultural Diversity
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </p>

        <div className="flex items-center gap-2 text-blue-500">
          <span>Prev Post:</span>
          <a href="#" className="hover:underline">
            Professional Ceramic Moulding for Beginners
          </a>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4">2 Comments</h3>
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-gray-700 font-bold">Admin</p>
            <p className="text-gray-500 text-sm">October 5, 2024</p>
            <p className="mt-2 text-gray-600">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </p>
            <button className="text-sm mt-2 text-blue-500 hover:underline">Reply ↩</button>
          </div>
        </div>
        
        <div className="mt-10">
          
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-gray-700 font-bold">Admin</p>
            <p className="text-gray-500 text-sm">October 5, 2024</p>
            <p className="mt-2 text-gray-600">
            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
            </p>
            <button className="text-sm mt-2 text-blue-500 hover:underline">Reply ↩</button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-10">
  <h2 className="text-2xl font-semibold mb-6">Leave A Comment</h2>
  <form className="space-y-4">
    <input
      type="text"
      name="name"
      placeholder="Name"
      className="w-full p-4 bg-gray-100 focus:outline-purple-500 rounded"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      className="w-full p-4 bg-gray-100 focus:outline-purple-500 rounded"
      required
    />
    <input
      type="text"
      name="subject"
      placeholder="Subject"
      className="w-full p-4 bg-gray-100 focus:outline-purple-500 rounded"
    />
    <textarea
      name="comment"
      placeholder="Comment..."
      rows="6"
      className="w-full p-4 bg-gray-100 focus:outline-purple-500 rounded resize-none"
      required
    ></textarea>
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        name="saveInfo"
      />
      <label className="text-sm text-gray-600">
        Save my name, email, and website in this browser for the next time I comment.
      </label>
    </div>
    <button
      type="submit"
      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded font-medium"
    >
      Post Comment
    </button>
  </form>
</div>

      </div>


      {/* Sidebar */}
      <div className="space-y-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-600 font-bold">
            🔍
          </button>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-2">Categories</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Development</li>
            <li>Art & Design</li>
            <li>Data Science</li>
            <li>Technology</li>
            <li>IT Management</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-2">Recent Blogs</h4>
          <ul className="space-y-3 text-sm text-blue-700">
            <li>Essential Tips for Building a Responsive Web Design</li>
            <li>Education Is The Most Powerful Tool</li>
            <li>Learn If You Want to Earn</li>
            <li>The Professional Mobile Painting and Sculpting</li>
            <li>Education Is A Best Friend</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-2">Popular Tags</h4>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-gray-200 px-2 py-1 rounded">Education</span>
            <span className="bg-gray-200 px-2 py-1 rounded">Students</span>
            <span className="bg-gray-200 px-2 py-1 rounded">Design</span>
            <span className="bg-gray-200 px-2 py-1 rounded">Classroom</span>
            <span className="bg-gray-200 px-2 py-1 rounded">Tools</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-2">Instagram Feed</h4>
          <div className="grid grid-cols-3 gap-4 ">
            {/* {[...Array(6)].map((_, i) => (
              <img className='rounded-lg'
               src='https://demo.themeies.com/edugen/wp-content/uploads/2024/09/blog20-150x150.jpg'
              />
            ))} */}
            <img className='rounded-lg w-24' src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/blog20-150x150.jpg" alt="" />
            <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/blog21-150x150.jpg" className='rounded-lg w-24' alt="" />
            <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/blog22-150x150.jpg" className='rounded-lg w-24' alt="" />
            <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/blog23-150x150.jpg" className='rounded-lg w-24' alt="" />
            <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/blog24-150x150.jpg" className='rounded-lg w-24' alt="" />
            <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/blog25-150x150.jpg" className='rounded-lg w-24' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBlogPost;
