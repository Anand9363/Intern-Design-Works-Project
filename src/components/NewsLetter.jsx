import React, { useState } from 'react';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubscribe = () => {
    if (!email.trim()) {
      setError('Please fill the form');
    } else {
      setError('');
      alert(`Subscribed successfully with: ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-blue-600 to-green-400 text-white rounded-lg p-6 py-14 shadow-lg max-w-5xl mx-auto mt-10 space-y-6 md:space-y-0">
      {/* Icon and Text */}
      <div className="flex items-center space-x-4">
        <div className="relative bottom-12 left-4 hidden md:block">
          <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/shape8.svg" alt="" />
        </div>
        <div className="text-4xl">
          <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/newsletter-icon.svg" alt="" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Enter Your Email To</h2>
          <p className="text-2xl font-bold">Subscribe Our Newsletter</p>
        </div>
      </div>

      {/* Input and Button */}
      <div className="w-full md:w-[400px]  bg-white flex rounded-md overflow-hidden shadow-md">
        <input
          type="email"
          placeholder="Write your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-2 py-4 text-gray-700 focus:outline-none"
        />
        <button
          onClick={handleSubscribe}
          className="w-34 bg-black hover:bg-gray-800 text-white px-5 py-4 font-semibold flex justify-center items-center"
        >
          Subscribe
          <span className="ml-2">📩</span>
        </button>
        {error && (
          <p className="text-red-500 text-sm mt-2 px-4 py-1 bg-red-100">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsLetter;
